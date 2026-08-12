import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const PLANS = {
  individual_monthly: { name: 'Individual Plan', amount: 900, interval: 'month' as const },
  individual_yearly: { name: 'Individual Plan (Annual)', amount: 9000, interval: 'year' as const },
  family_monthly: { name: 'Family Plan', amount: 1900, interval: 'month' as const },
  family_yearly: { name: 'Family Plan (Annual)', amount: 19000, interval: 'year' as const },
}

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) throw new Error('STRIPE_SECRET_KEY is not configured')
  return new Stripe(key)
}

function getOrigin(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-host')
  const proto = req.headers.get('x-forwarded-proto') || 'https'
  if (forwarded) return `${proto}://${forwarded}`
  return req.headers.get('origin') || 'http://localhost:3000'
}

export async function POST(req: NextRequest) {
  let stripe: Stripe
  try {
    stripe = getStripe()
  } catch {
    return NextResponse.json({ error: 'Payment system not configured' }, { status: 503 })
  }

  const body = await req.json()
  const origin = getOrigin(req)

  if (body.type === 'donation') {
    const { amount, campaignName, campaignId } = body
    if (!amount || amount < 1) {
      return NextResponse.json({ error: 'Invalid amount' }, { status: 400 })
    }
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: { name: campaignName || 'Donation' },
            unit_amount: Math.round(amount * 100),
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/give?donated=true&campaign=${encodeURIComponent(campaignId || '')}`,
      cancel_url: `${origin}/give`,
      metadata: { campaignId: campaignId || '', type: 'donation' },
    })
    return NextResponse.json({ url: session.url })
  }

  if (body.type === 'subscription') {
    const plan = PLANS[body.plan as keyof typeof PLANS]
    if (!plan) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
    }
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: { name: plan.name, description: 'Elevate Chapel App Premium' },
            recurring: { interval: plan.interval },
            unit_amount: plan.amount,
          },
          quantity: 1,
        },
      ],
      subscription_data: { trial_period_days: 7 },
      success_url: `${origin}/home?upgraded=true`,
      cancel_url: `${origin}/home`,
      metadata: { plan: body.plan, type: 'subscription' },
    })
    return NextResponse.json({ url: session.url })
  }

  return NextResponse.json({ error: 'Invalid request type' }, { status: 400 })
}
