'use client'

import { useState } from 'react'
import { X, Check, Sparkles, Lock, Flame } from 'lucide-react'
import { clsx } from 'clsx'

type Trigger = 'companion' | 'course' | 'group' | 'streak' | 'general' | 'feature'
type Plan = 'individual' | 'family'
type Billing = 'annual' | 'monthly'

interface Props {
  trigger?: Trigger
  streakCount?: number
  onClose: () => void
}

const CONTEXT: Record<Trigger, { emoji: string; headline: string; sub: string; features: string[] }> = {
  companion: {
    emoji: '✨',
    headline: 'Unlock All Spiritual Guides',
    sub: 'Talk with The Adversary and every other divine persona — no limits.',
    features: [
      'All 14 AI spiritual personas, including The Adversary',
      'Unlimited conversations with your divine guide',
      'Priority AI response during peak hours',
      'Save and revisit past spiritual conversations',
    ],
  },
  course: {
    emoji: '🎓',
    headline: 'This Course Unlocks a Deeper Journey',
    sub: 'Get access to 50+ premium courses, workshops, and the full sermon archive.',
    features: [
      '50+ premium courses across every tradition',
      'Full sermon & talk library (350+ episodes)',
      'Audio-first content for commutes & walks',
      'Downloadable materials for offline study',
    ],
  },
  group: {
    emoji: '🤝',
    headline: 'Join Private Faith Communities',
    sub: 'Private groups, direct messaging, and leader tools for deeper connection.',
    features: [
      'Join private & exclusive community groups',
      'Direct messaging with group members',
      'Create and lead your own faith community',
      'Live event access and group prayer sessions',
    ],
  },
  streak: {
    emoji: '🔥',
    headline: 'Protect Your Streak',
    sub: 'Premium members get streak shields and advanced streak recovery tools.',
    features: [
      '3 streak shields per month — never lose progress',
      'Advanced streak recovery if you miss a day',
      'Weekly streak analytics and trends',
      'Priority prayer partner matching',
    ],
  },
  general: {
    emoji: '🌟',
    headline: 'Unlock the Full Experience',
    sub: 'Everything you need for a deeper, richer daily spiritual life.',
    features: [
      '50+ premium courses & study plans',
      'All AI spiritual companion personas',
      'Private community groups & direct messaging',
      'Ad-free, audio-first, offline-ready',
    ],
  },
  feature: {
    emoji: '🔓',
    headline: 'This Feature is Premium',
    sub: 'Upgrade to access this and hundreds of other premium features.',
    features: [
      'Premium courses and study plans',
      'Full AI Spiritual Companion access',
      'Private groups and direct messaging',
      'Ad-free experience across the entire app',
    ],
  },
}

const PRICING = {
  individual: { annual: { monthly: 7.5, yearly: 90 }, monthly: { monthly: 9, yearly: 108 } },
  family: { annual: { monthly: 15.83, yearly: 190 }, monthly: { monthly: 19, yearly: 228 } },
}

function planKey(plan: Plan, billing: Billing): string {
  return `${plan}_${billing === 'annual' ? 'yearly' : 'monthly'}`
}

export default function UpgradeModal({ trigger = 'general', streakCount, onClose }: Props) {
  const [billing, setBilling] = useState<Billing>('annual')
  const [selectedPlan, setSelectedPlan] = useState<Plan>('individual')
  const [loading, setLoading] = useState(false)
  const ctx = CONTEXT[trigger]

  async function startTrial() {
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'subscription', plan: planKey(selectedPlan, billing) }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setLoading(false)
      }
    } catch {
      setLoading(false)
    }
  }

  const price = PRICING[selectedPlan][billing]

  const headline =
    trigger === 'streak' && streakCount
      ? `Protect Your ${streakCount}-Day Streak`
      : ctx.headline

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-end justify-center z-50 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-t-3xl w-full max-w-lg animate-slide-up overflow-y-auto max-h-[92dvh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag handle */}
        <div className="pt-3 pb-1 flex justify-center">
          <div className="w-12 h-1.5 bg-gray-200 rounded-full" />
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <X size={14} className="text-gray-500" />
        </button>

        <div className="px-6 pb-10">
          {/* Emoji + headline */}
          <div className="text-center mb-5 mt-2">
            <div className="text-5xl mb-3">{ctx.emoji}</div>
            <h2 className="text-xl font-extrabold text-gray-900 leading-tight mb-1.5">{headline}</h2>
            <p className="text-sm text-gray-500 leading-relaxed">{ctx.sub}</p>
          </div>

          {/* Feature list */}
          <ul className="space-y-2.5 mb-6">
            {ctx.features.map((feat) => (
              <li key={feat} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={11} className="text-brand-600" strokeWidth={3} />
                </div>
                <span className="text-sm text-gray-700">{feat}</span>
              </li>
            ))}
          </ul>

          {/* Billing toggle */}
          <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1 mb-5">
            <button
              onClick={() => setBilling('annual')}
              className={clsx(
                'flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-semibold transition-all',
                billing === 'annual'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              )}
            >
              Annual
              <span className="bg-emerald-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                SAVE 17%
              </span>
            </button>
            <button
              onClick={() => setBilling('monthly')}
              className={clsx(
                'flex-1 py-2 rounded-lg text-sm font-semibold transition-all',
                billing === 'monthly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              )}
            >
              Monthly
            </button>
          </div>

          {/* Plan cards */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {(['individual', 'family'] as Plan[]).map((plan) => {
              const p = PRICING[plan][billing]
              const active = selectedPlan === plan
              return (
                <button
                  key={plan}
                  onClick={() => setSelectedPlan(plan)}
                  className={clsx(
                    'rounded-2xl p-4 text-left border-2 transition-all',
                    active
                      ? 'border-brand-500 bg-brand-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  )}
                >
                  <div className={clsx('text-xs font-bold uppercase tracking-wide mb-1', active ? 'text-brand-600' : 'text-gray-400')}>
                    {plan}
                  </div>
                  <div className={clsx('text-2xl font-extrabold', active ? 'text-brand-700' : 'text-gray-800')}>
                    ${billing === 'annual' ? p.monthly.toFixed(2) : p.monthly}
                    <span className="text-sm font-normal text-gray-500">/mo</span>
                  </div>
                  {billing === 'annual' && (
                    <div className="text-xs text-gray-400 mt-0.5">
                      billed ${p.yearly}/yr
                    </div>
                  )}
                  {plan === 'family' && (
                    <div className="text-[10px] text-gray-400 mt-1">Up to 6 members</div>
                  )}
                  {active && (
                    <div className="mt-2 flex items-center gap-1">
                      <div className="w-4 h-4 rounded-full bg-brand-500 flex items-center justify-center">
                        <Check size={10} className="text-white" strokeWidth={3} />
                      </div>
                      <span className="text-xs text-brand-600 font-semibold">Selected</span>
                    </div>
                  )}
                </button>
              )
            })}
          </div>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="flex -space-x-1">
              {['bg-purple-400', 'bg-brand-500', 'bg-emerald-400', 'bg-amber-400'].map((c, i) => (
                <div key={i} className={`w-6 h-6 rounded-full ${c} border-2 border-white`} />
              ))}
            </div>
            <p className="text-xs text-gray-500">
              <strong className="text-gray-700">47,293 members</strong> on Individual or Family
            </p>
          </div>

          {/* CTA */}
          <button
            onClick={startTrial}
            disabled={loading}
            className="w-full bg-gradient-to-r from-brand-600 to-purple-600 text-white font-bold py-4 rounded-2xl text-base hover:opacity-95 active:scale-[0.98] transition-all disabled:opacity-60 flex items-center justify-center gap-2 shadow-lg shadow-brand-200"
          >
            {loading ? (
              <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Sparkles size={18} />
            )}
            {loading ? 'Redirecting…' : 'Start 7-Day Free Trial'}
          </button>

          <p className="text-center text-xs text-gray-400 mt-2.5">
            No charge for 7 days · Cancel anytime · Instant access
          </p>

          <button
            onClick={onClose}
            className="w-full mt-3 text-gray-400 text-sm py-2 hover:text-gray-600 transition-colors"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  )
}
