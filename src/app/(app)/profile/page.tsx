'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Settings, Bell, Shield, CreditCard, LogOut, ChevronRight, Flame, Target, BookOpen, Heart } from 'lucide-react'
import { currentUser } from '@/lib/data'
import UpgradeModal from '@/components/UpgradeModal'

const settingsGroups = [
  {
    title: 'Preferences',
    items: [
      { icon: Bell, label: 'Notifications', desc: 'Daily reminders, prayer alerts', href: '#' },
      { icon: Target, label: 'Spiritual Goals', desc: 'Update your growth goals', href: '#' },
      { icon: BookOpen, label: 'Content Preferences', desc: 'Topics and traditions', href: '#' },
    ],
  },
  {
    title: 'Account',
    items: [
      { icon: CreditCard, label: 'Membership & Billing', desc: 'Manage your plan', href: '#' },
      { icon: Shield, label: 'Privacy & Security', desc: 'Data and account security', href: '#' },
      { icon: Settings, label: 'App Settings', desc: 'Display, language, and more', href: '#' },
    ],
  },
]

export default function ProfilePage() {
  const [editingGoal, setEditingGoal] = useState<string | null>(null)
  const [goals, setGoals] = useState(currentUser.spiritualGoals)
  const [newGoal, setNewGoal] = useState('')
  const [showUpgrade, setShowUpgrade] = useState(false)

  function addGoal() {
    if (!newGoal.trim()) return
    setGoals([...goals, newGoal.trim()])
    setNewGoal('')
    setEditingGoal(null)
  }

  const stats = [
    { label: 'Current Streak', value: `${currentUser.streak}d`, icon: '🔥', color: 'text-orange-500' },
    { label: 'Best Streak', value: `${currentUser.longestStreak}d`, icon: '⭐', color: 'text-amber-500' },
    { label: 'Prayer Days', value: currentUser.totalPrayerDays, icon: '🙏', color: 'text-brand-500' },
    { label: 'Total Given', value: `$${currentUser.totalGiven}`, icon: '💝', color: 'text-rose-500' },
  ]

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-700 text-white px-4 pt-10 pb-8">
        <div className="flex items-start justify-between mb-6">
          <h1 className="text-2xl font-bold">Profile</h1>
          <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            <Settings size={18} />
          </button>
        </div>

        {/* User card */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-400 to-purple-500 flex items-center justify-center text-2xl font-bold text-white border-2 border-white/20">
            {currentUser.initials}
          </div>
          <div>
            <h2 className="text-xl font-bold">{currentUser.name}</h2>
            <p className="text-slate-300 text-sm">{currentUser.email}</p>
            <p className="text-slate-400 text-xs mt-0.5">Member since {currentUser.joinedDate}</p>
          </div>
        </div>

        {/* Plan badge */}
        <div className="mt-4 flex items-center gap-3">
          <span className="bg-white/10 text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-full capitalize">
            {currentUser.plan} plan
          </span>
          {currentUser.plan === 'free' && (
            <Link
              href="#"
              className="bg-gold-400 text-brand-950 text-xs font-bold px-3 py-1.5 rounded-full hover:bg-gold-300 transition-colors"
            >
              Upgrade to Individual →
            </Link>
          )}
        </div>
      </div>

      <div className="px-4 py-5 space-y-5">
        {/* Stats */}
        <section>
          <div className="grid grid-cols-2 gap-3">
            {stats.map(({ label, value, icon, color }) => (
              <div key={label} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
                <div className="text-2xl mb-1">{icon}</div>
                <div className={`text-2xl font-extrabold ${color}`}>{value}</div>
                <div className="text-xs text-gray-500 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Streak Visualization */}
        <section>
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                <Flame size={16} className="text-orange-500" />
                {currentUser.streak}-Day Streak
              </h3>
              <span className="text-xs text-gray-400">Last 14 days</span>
            </div>
            <div className="flex gap-1">
              {Array.from({ length: 14 }, (_, i) => {
                const active = i < currentUser.streak && i < 14
                const today = i === currentUser.streak - 1
                return (
                  <div
                    key={i}
                    className={`flex-1 h-8 rounded-lg flex items-center justify-center ${
                      active
                        ? today
                          ? 'bg-orange-400 shadow-sm shadow-orange-200'
                          : 'bg-orange-200'
                        : 'bg-gray-100'
                    }`}
                  >
                    {today && <Flame size={12} className="text-white" />}
                  </div>
                )
              })}
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Keep going! Your longest streak is {currentUser.longestStreak} days.
            </p>
          </div>
        </section>

        {/* Badges */}
        <section>
          <h2 className="text-base font-bold text-gray-900 mb-3">Achievements</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'First Prayer', icon: '🙏', earned: true },
              { label: '7-Day Streak', icon: '🔥', earned: true },
              { label: 'Community Helper', icon: '🤝', earned: true },
              { label: 'Course Complete', icon: '🎓', earned: true },
              { label: '30-Day Streak', icon: '⚡', earned: false },
              { label: 'First Gift', icon: '💝', earned: false },
              { label: 'Group Leader', icon: '👑', earned: false },
            ].map(({ label, icon, earned }) => (
              <div
                key={label}
                className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold border ${
                  earned
                    ? 'bg-brand-50 text-brand-700 border-brand-200'
                    : 'bg-gray-50 text-gray-300 border-gray-100 grayscale'
                }`}
              >
                <span>{icon}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Spiritual Goals */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-gray-900">Spiritual Goals</h2>
            <button
              onClick={() => setEditingGoal('new')}
              className="text-xs text-brand-600 font-semibold hover:text-brand-700 transition-colors"
            >
              + Add goal
            </button>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-50">
            {goals.map((goal, i) => (
              <div key={i} className="px-4 py-3 flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-brand-300 flex items-center justify-center flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-400" />
                </div>
                <span className="text-sm text-gray-800 flex-1">{goal}</span>
                <button
                  onClick={() => setGoals(goals.filter((_, idx) => idx !== i))}
                  className="text-xs text-gray-300 hover:text-red-400 transition-colors"
                >
                  ✕
                </button>
              </div>
            ))}
            {editingGoal === 'new' && (
              <div className="px-4 py-3 flex items-center gap-2">
                <input
                  autoFocus
                  type="text"
                  placeholder="Enter a spiritual goal..."
                  value={newGoal}
                  onChange={(e) => setNewGoal(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') addGoal() }}
                  className="flex-1 text-sm border border-brand-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-brand-400"
                />
                <button onClick={addGoal} className="text-xs bg-brand-600 text-white px-3 py-1.5 rounded-lg font-semibold">
                  Save
                </button>
                <button onClick={() => setEditingGoal(null)} className="text-xs text-gray-400">Cancel</button>
              </div>
            )}
          </div>
        </section>

        {/* Upgrade Banner (free plan) */}
        {currentUser.plan === 'free' && (
          <section>
            <div className="bg-gradient-to-r from-brand-600 to-purple-600 rounded-2xl p-5 text-white">
              <h3 className="font-bold mb-1">Upgrade Your Journey</h3>
              <p className="text-xs text-brand-200 mb-4">
                Unlock 50+ courses, private groups, audio content, and a fully ad-free experience.
              </p>
              <button
                onClick={() => setShowUpgrade(true)}
                className="w-full bg-white text-brand-700 text-sm font-bold py-2.5 rounded-xl hover:bg-brand-50 transition-colors"
              >
                Start 7-Day Free Trial →
              </button>
            </div>
          </section>
        )}

        {showUpgrade && (
          <UpgradeModal
            trigger="general"
            streakCount={currentUser.streak}
            onClose={() => setShowUpgrade(false)}
          />
        )}

        {/* Settings */}
        {settingsGroups.map(({ title, items }) => (
          <section key={title}>
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{title}</h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-50">
              {items.map(({ icon: Icon, label, desc, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50 transition-colors"
                >
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">{label}</div>
                    <div className="text-xs text-gray-400">{desc}</div>
                  </div>
                  <ChevronRight size={14} className="text-gray-300" />
                </a>
              ))}
            </div>
          </section>
        ))}

        {/* Sign out */}
        <section>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full border border-gray-200 text-gray-500 py-3.5 rounded-2xl text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            <LogOut size={16} />
            Sign out
          </Link>
        </section>

        <p className="text-center text-xs text-gray-300 pb-2">
          Elevate Chapel App v0.1.0 · We do not sell your spiritual data.
        </p>
      </div>
    </div>
  )
}
