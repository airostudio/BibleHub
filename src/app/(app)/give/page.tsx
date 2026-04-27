'use client'

import { useState } from 'react'
import { Heart, TrendingUp, RefreshCw, ChevronRight, Info, X } from 'lucide-react'
import { clsx } from 'clsx'
import { campaigns, givingHistory, currentUser } from '@/lib/data'

export default function GivePage() {
  const [donatingTo, setDonatingTo] = useState<string | null>(null)
  const [donationAmount, setDonationAmount] = useState('')
  const [customAmount, setCustomAmount] = useState('')
  const [donationSuccess, setDonationSuccess] = useState<string | null>(null)
  const [recurringSetup, setRecurringSetup] = useState(false)
  const [donatedCampaigns, setDonatedCampaigns] = useState<Set<string>>(new Set())

  const presetAmounts = ['$10', '$25', '$50', '$100', '$250']
  const totalGiven = givingHistory.reduce((sum, t) => sum + t.amount, 0)
  const recurringTotal = givingHistory.filter((t) => t.recurring).reduce((sum, t) => sum + t.amount, 0)

  function handleDonate(campaignId: string) {
    const amount = parseInt((customAmount || donationAmount).replace('$', ''))
    if (!amount || amount < 1) return
    setDonatedCampaigns((prev) => new Set(prev).add(campaignId))
    setDonationSuccess(campaigns.find((c) => c.id === campaignId)?.title ?? 'Campaign')
    setDonatingTo(null)
    setDonationAmount('')
    setCustomAmount('')
    setTimeout(() => setDonationSuccess(null), 5000)
  }

  const progressPercent = (raised: number, goal: number) => Math.min(100, Math.round((raised / goal) * 100))

  return (
    <div className="animate-fade-in">
      {/* Success toast */}
      {donationSuccess && (
        <div className="fixed top-4 left-4 right-4 max-w-lg mx-auto z-50 animate-slide-up">
          <div className="bg-emerald-600 text-white px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3">
            <span className="text-xl">🎉</span>
            <div className="flex-1">
              <p className="text-sm font-semibold">Thank you for giving!</p>
              <p className="text-xs text-emerald-200">Your gift to "{donationSuccess}" has been received.</p>
            </div>
            <button onClick={() => setDonationSuccess(null)}>
              <X size={16} className="text-emerald-300" />
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-gradient-to-br from-rose-800 to-pink-700 text-white px-4 pt-10 pb-6">
        <h1 className="text-2xl font-bold mb-1">Give</h1>
        <p className="text-rose-200 text-sm">Support the communities and causes you love</p>

        {/* Giving summary */}
        <div className="grid grid-cols-3 gap-3 mt-5">
          {[
            { label: 'Given this year', value: `$${currentUser.totalGiven + (donatedCampaigns.size > 0 ? parseInt(donationAmount || '0') : 0)}` },
            { label: 'Monthly recurring', value: `$${recurringTotal}/mo` },
            { label: 'Campaigns helped', value: `${3 + donatedCampaigns.size}` },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white/10 rounded-xl p-3 text-center">
              <div className="text-lg font-bold">{value}</div>
              <div className="text-xs text-rose-200 mt-0.5 leading-tight">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 py-5 space-y-5">
        {/* Transparency note */}
        <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100 flex items-start gap-3">
          <Info size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-emerald-800 leading-relaxed">
            <strong>Transparent giving:</strong> A 5% platform fee is shown on every transaction.
            Organizations are verified before receiving funds. You always see exactly where your money goes.
          </p>
        </div>

        {/* Active Campaigns */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-gray-900">Active Campaigns</h2>
            <button className="text-xs text-brand-600 font-medium flex items-center gap-1">
              All <ChevronRight size={12} />
            </button>
          </div>

          <div className="space-y-4">
            {campaigns.map((campaign) => {
              const pct = progressPercent(campaign.raised, campaign.goal)
              const alreadyDonated = donatedCampaigns.has(campaign.id)

              return (
                <div
                  key={campaign.id}
                  className={clsx(
                    'bg-white rounded-2xl overflow-hidden shadow-sm border',
                    campaign.urgent ? 'border-orange-200' : 'border-gray-100'
                  )}
                >
                  {campaign.urgent && (
                    <div className="bg-orange-50 border-b border-orange-100 px-4 py-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                      <span className="text-xs font-semibold text-orange-700">
                        Urgent — {campaign.daysLeft} days left
                      </span>
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                        {campaign.image}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-gray-900">{campaign.title}</h3>
                        <p className="text-xs text-gray-400 mt-0.5">{campaign.organization}</p>
                        <p className="text-xs text-gray-500 mt-1 leading-relaxed">{campaign.description}</p>
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="mb-3">
                      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-rose-400 to-pink-500 rounded-full transition-all duration-700"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <div className="flex items-center justify-between mt-1.5">
                        <div>
                          <span className="text-sm font-bold text-gray-900">${campaign.raised.toLocaleString()}</span>
                          <span className="text-xs text-gray-400"> raised of ${campaign.goal.toLocaleString()}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-semibold text-brand-600">{pct}%</span>
                          <span className="text-xs text-gray-400"> · {campaign.donors} donors</span>
                        </div>
                      </div>
                    </div>

                    {/* Donate button */}
                    {alreadyDonated ? (
                      <div className="flex items-center justify-center gap-2 bg-emerald-50 text-emerald-700 text-sm font-semibold py-2.5 rounded-xl">
                        ✓ Thank you for giving!
                      </div>
                    ) : (
                      <button
                        onClick={() => setDonatingTo(campaign.id)}
                        className="w-full bg-rose-600 text-white text-sm font-bold py-2.5 rounded-xl hover:bg-rose-700 transition-colors"
                      >
                        Give to This Campaign
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Recurring Giving */}
        <section>
          <div className="bg-gradient-to-r from-brand-600 to-purple-600 rounded-2xl p-5 text-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <RefreshCw size={18} />
              </div>
              <div>
                <h3 className="font-bold">Recurring Giving</h3>
                <p className="text-xs text-brand-200">You currently give ${recurringTotal}/month</p>
              </div>
            </div>
            <p className="text-sm text-brand-200 mb-4">
              Set up automatic monthly giving to your community or a cause you care about. Consistent, predictable
              support helps organizations plan and serve better.
            </p>
            <button
              onClick={() => setRecurringSetup(true)}
              className="bg-white text-brand-700 font-semibold text-sm px-4 py-2.5 rounded-xl hover:bg-brand-50 transition-colors"
            >
              Manage Recurring Gifts
            </button>
          </div>
        </section>

        {/* Impact Report */}
        <section>
          <h2 className="text-base font-bold text-gray-900 mb-3">Your Impact This Year</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: '🍞', label: 'Families fed', value: '12' },
              { icon: '📚', label: 'Students helped', value: '8' },
              { icon: '⛪', label: 'Communities', value: '3' },
              { icon: '🌍', label: 'Countries reached', value: '2' },
            ].map(({ icon, label, value }) => (
              <div key={label} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
                <div className="text-3xl mb-2">{icon}</div>
                <div className="text-2xl font-bold text-gray-900">{value}</div>
                <div className="text-xs text-gray-500 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Transaction History */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-gray-900">Giving History</h2>
            <button className="text-xs text-brand-600 font-medium flex items-center gap-1">
              Download <ChevronRight size={12} />
            </button>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-50">
            {givingHistory.map((tx) => (
              <div key={tx.id} className="px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-rose-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  {tx.recurring ? (
                    <RefreshCw size={14} className="text-rose-500" />
                  ) : (
                    <Heart size={14} className="text-rose-500" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{tx.campaign}</p>
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs text-gray-400">{tx.date}</p>
                    {tx.recurring && (
                      <span className="text-xs bg-brand-50 text-brand-600 px-1.5 py-0.5 rounded-full">recurring</span>
                    )}
                  </div>
                </div>
                <span className="text-sm font-bold text-gray-900">${tx.amount}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Donation Sheet */}
      {donatingTo && (
        <div
          className="fixed inset-0 bg-black/50 flex items-end justify-center z-50 animate-fade-in"
          onClick={() => setDonatingTo(null)}
        >
          <div
            className="bg-white rounded-t-3xl w-full max-w-lg p-6 pb-10 animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-5" />
            <h2 className="text-lg font-bold text-gray-900 mb-1">
              {campaigns.find((c) => c.id === donatingTo)?.title}
            </h2>
            <p className="text-sm text-gray-500 mb-5">
              {campaigns.find((c) => c.id === donatingTo)?.organization}
            </p>

            {/* Preset amounts */}
            <div className="flex gap-2 flex-wrap mb-4">
              {presetAmounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => { setDonationAmount(amt); setCustomAmount('') }}
                  className={clsx(
                    'flex-1 min-w-[4rem] py-2.5 rounded-xl text-sm font-semibold border transition-all',
                    donationAmount === amt && !customAmount
                      ? 'bg-rose-600 text-white border-rose-600'
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                  )}
                >
                  {amt}
                </button>
              ))}
            </div>

            {/* Custom amount */}
            <div className="relative mb-4">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">$</span>
              <input
                type="number"
                placeholder="Custom amount"
                value={customAmount}
                onChange={(e) => { setCustomAmount(e.target.value); setDonationAmount('') }}
                className="w-full border border-gray-200 rounded-xl pl-8 pr-4 py-3 text-sm focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
              />
            </div>

            <div className="bg-gray-50 rounded-xl p-3 mb-5 flex items-center justify-between text-xs text-gray-500">
              <span>Platform fee (5%)</span>
              <span className="font-semibold text-gray-700">
                ${(((parseInt((customAmount || donationAmount || '0').replace('$', '')) || 0) * 0.05)).toFixed(2)}
              </span>
            </div>

            <button
              onClick={() => handleDonate(donatingTo)}
              disabled={!donationAmount && !customAmount}
              className="w-full bg-rose-600 text-white font-bold py-3.5 rounded-xl text-base hover:bg-rose-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Give {customAmount ? `$${customAmount}` : donationAmount || 'Now'}
            </button>
            <p className="text-center text-xs text-gray-400 mt-3">
              Secure payment · Receipt emailed to you
            </p>
          </div>
        </div>
      )}

      {/* Recurring Setup Sheet */}
      {recurringSetup && (
        <div
          className="fixed inset-0 bg-black/50 flex items-end justify-center z-50 animate-fade-in"
          onClick={() => setRecurringSetup(false)}
        >
          <div
            className="bg-white rounded-t-3xl w-full max-w-lg p-6 pb-10 animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-5" />
            <h2 className="text-lg font-bold text-gray-900 mb-2">Recurring Gifts</h2>
            <div className="divide-y divide-gray-100">
              {givingHistory.filter((t) => t.recurring).map((tx) => (
                <div key={tx.id} className="py-3 flex items-center gap-3">
                  <RefreshCw size={16} className="text-brand-500 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">{tx.campaign}</p>
                    <p className="text-xs text-gray-400">Monthly · ${tx.amount}</p>
                  </div>
                  <button className="text-xs text-red-500 font-medium hover:text-red-700 transition-colors">
                    Cancel
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={() => setRecurringSetup(false)}
              className="w-full mt-6 border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
