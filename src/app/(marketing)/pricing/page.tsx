'use client'

import { useState } from 'react'
import Link from 'next/link'

const plans = [
  {
    name: 'Free',
    monthly: 0,
    yearly: 0,
    desc: 'Everything you need to start your daily spiritual practice.',
    cta: 'Get Started Free',
    ctaHref: '/home',
    highlight: false,
    features: [
      'Daily devotionals',
      'Prayer journal',
      'Community prayer wall',
      '2 free courses',
      'Join public groups',
      'Basic giving tools',
    ],
    missing: [
      'AI Spiritual Companion',
      'Premium course library (50+)',
      'Private groups & messaging',
      'Sermon archive',
      'Streak shields',
      'Audio-first content',
    ],
  },
  {
    name: 'Individual',
    monthly: 9,
    yearly: 7.5,
    yearlyTotal: 90,
    desc: 'The full Elevate Chapel experience for one person.',
    cta: 'Start 7-Day Free Trial',
    ctaHref: '/home',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Everything in Free',
      'All 14 AI spiritual personas',
      'Full course & study plan library',
      'Private groups & direct messaging',
      'Full sermon archive (350+ episodes)',
      'Audio-first & offline content',
      '3 streak shields per month',
      'Ad-free experience',
      'Priority support',
    ],
    missing: [],
  },
  {
    name: 'Family',
    monthly: 19,
    yearly: 15.83,
    yearlyTotal: 190,
    desc: 'All premium features shared across up to 6 family members.',
    cta: 'Start 7-Day Free Trial',
    ctaHref: '/home',
    highlight: false,
    badge: 'Best Value',
    features: [
      'Everything in Individual',
      'Up to 6 family member accounts',
      'Family devotional plans',
      'Shared giving dashboard',
      'Family prayer wall',
      'Parental content controls',
      'Family streak tracking',
    ],
    missing: [],
  },
  {
    name: 'Organization',
    monthly: null,
    yearly: null,
    desc: 'For churches, mosques, temples, and ministries of any size.',
    cta: 'Contact Sales',
    ctaHref: '/for-organizations',
    highlight: false,
    features: [
      'Everything in Family',
      'Unlimited member accounts',
      'Member management tools',
      'Donation & tithing dashboard',
      'Announcement & bulletin boards',
      'Livestream integration',
      'Custom branded community space',
      'Analytics & engagement reports',
      'Dedicated account manager',
    ],
    missing: [],
  },
]

const faqs = [
  {
    q: 'Is there really a free trial?',
    a: 'Yes — Individual and Family plans come with a 7-day free trial. You will not be charged until the trial ends, and you can cancel any time before then.',
  },
  {
    q: 'Can I switch plans?',
    a: 'Absolutely. You can upgrade, downgrade, or cancel at any time from your account settings. Downgrades take effect at the end of your billing period.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit and debit cards, Apple Pay, and Google Pay — processed securely through Stripe.',
  },
  {
    q: 'Are my spiritual data and conversations private?',
    a: 'Yes. We do not sell, share, or use your spiritual data for advertising. AI companion conversations are encrypted and never used to train models.',
  },
  {
    q: 'Do you offer discounts for students or clergy?',
    a: 'Yes — email us at info@elevatechapel.online with verification and we will apply a 40% discount to your subscription.',
  },
]

export default function PricingPage() {
  const [annual, setAnnual] = useState(true)

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4 text-center">
        <span className="inline-block bg-white/10 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-wider uppercase">
          Pricing
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Simple, transparent pricing</h1>
        <p className="text-gray-400 text-lg mb-8">Start free. Upgrade when you are ready. No tricks, no surprises.</p>

        {/* Toggle */}
        <div className="inline-flex items-center gap-2 bg-white/10 rounded-full p-1">
          <button
            onClick={() => setAnnual(false)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${!annual ? 'bg-white text-gray-900' : 'text-gray-300 hover:text-white'}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${annual ? 'bg-white text-gray-900' : 'text-gray-300 hover:text-white'}`}
          >
            Annual
            <span className="bg-emerald-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">SAVE 17%</span>
          </button>
        </div>
      </section>

      {/* Plan cards */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-3xl p-6 flex flex-col border-2 transition-shadow hover:shadow-lg ${
                plan.highlight ? 'border-brand-500 shadow-brand-100 shadow-md' : 'border-gray-100'
              }`}
            >
              {plan.badge && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full ${plan.highlight ? 'bg-brand-600 text-white' : 'bg-amber-500 text-white'}`}>
                  {plan.badge}
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">{plan.desc}</p>
              </div>

              <div className="mb-6">
                {plan.monthly === null ? (
                  <div className="text-2xl font-extrabold text-gray-900">Custom</div>
                ) : plan.monthly === 0 ? (
                  <div>
                    <div className="text-3xl font-extrabold text-gray-900">Free</div>
                    <div className="text-xs text-gray-400 mt-0.5">forever</div>
                  </div>
                ) : (
                  <div>
                    <div className="text-3xl font-extrabold text-gray-900">
                      ${annual ? plan.yearly : plan.monthly}
                      <span className="text-base font-normal text-gray-400">/mo</span>
                    </div>
                    {annual && (
                      <div className="text-xs text-gray-400 mt-0.5">billed ${plan.yearlyTotal}/yr</div>
                    )}
                  </div>
                )}
              </div>

              <ul className="space-y-2.5 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
                {plan.missing.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300 line-through">
                    <span className="text-gray-200 mt-0.5 flex-shrink-0">–</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaHref}
                className={`w-full text-center text-sm font-bold py-3 rounded-xl transition-colors ${
                  plan.highlight
                    ? 'bg-brand-600 text-white hover:bg-brand-700'
                    : plan.monthly === 0
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    : 'bg-slate-800 text-white hover:bg-slate-900'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-10 text-center">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-b border-gray-100 pb-6">
                <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-600 to-purple-600 text-white text-center">
        <h2 className="text-3xl font-extrabold mb-4">Start your free trial today</h2>
        <p className="text-brand-200 mb-8 max-w-md mx-auto">No credit card required to get started. Upgrade when you are ready.</p>
        <Link href="/home" className="inline-block bg-white text-brand-700 font-bold px-8 py-4 rounded-full text-lg hover:bg-brand-50 transition-colors">
          Create Free Account →
        </Link>
      </section>
    </div>
  )
}
