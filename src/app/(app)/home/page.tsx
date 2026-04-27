'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bell, ChevronRight, Flame, BookOpen, Users, Play, Lock } from 'lucide-react'
import {
  currentUser,
  todayDevotional,
  studyPlans,
  prayerRequests,
  groups,
} from '@/lib/data'

export default function HomePage() {
  const [devotionalExpanded, setDevotionalExpanded] = useState(false)
  const [prayedIds, setPrayedIds] = useState<Set<string>>(new Set())
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'

  const activeGroups = groups.filter((g) => g.joined && g.liveNow)
  const featuredRequest = prayerRequests[0]
  const activePlans = studyPlans.filter((p) => !p.premium && p.progress > 0)

  function handlePray(id: string) {
    setPrayedIds((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-to-br from-brand-900 via-brand-700 to-brand-600 text-white px-4 pt-10 pb-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-brand-200 text-sm font-medium">{todayDevotional.date}</p>
            <h1 className="text-2xl font-bold mt-0.5">
              {greeting}, {currentUser.name.split(' ')[0]} ✨
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-gold-400 rounded-full" />
            </button>
            <Link href="/profile">
              <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center text-sm font-bold">
                {currentUser.initials}
              </div>
            </Link>
          </div>
        </div>

        {/* Streak bar */}
        <div className="bg-white/10 rounded-2xl p-4 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gold-400/20 rounded-xl flex items-center justify-center">
              <Flame size={20} className="text-gold-400" />
            </div>
            <div>
              <div className="text-lg font-bold text-gold-300">{currentUser.streak} days</div>
              <div className="text-xs text-brand-200">Current streak</div>
            </div>
          </div>
          <div className="flex-1 border-l border-white/20 pl-4">
            <div className="text-xs text-brand-200 mb-1">Week progress</div>
            <div className="flex gap-1">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                <div
                  key={i}
                  className={`flex-1 h-6 rounded-md flex items-center justify-center text-[10px] font-semibold ${
                    i < 5 ? 'bg-gold-400/80 text-brand-900' : 'bg-white/10 text-brand-300'
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-5 space-y-5">
        {/* Today's Devotional */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-gray-900">Today's Devotional</h2>
            <span className="text-xs text-gray-400">{todayDevotional.readTime} min read</span>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="bg-gradient-to-r from-brand-600 to-purple-600 p-4 text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full font-medium">
                  {todayDevotional.category}
                </span>
              </div>
              <h3 className="text-lg font-bold">{todayDevotional.title}</h3>
              <p className="text-brand-200 text-sm mt-1">{todayDevotional.scripture}</p>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-700 italic leading-relaxed mb-3">
                {todayDevotional.scriptureText}
              </p>
              {devotionalExpanded ? (
                <div className="animate-slide-up">
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    {todayDevotional.reflection}
                  </p>
                  <div className="bg-amber-50 rounded-xl p-3 border border-amber-100">
                    <div className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">
                      Reflection Prompt
                    </div>
                    <p className="text-sm text-amber-800">{todayDevotional.prayerPrompt}</p>
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    <Link
                      href="/pray"
                      className="flex-1 bg-brand-600 text-white text-center py-2.5 rounded-xl text-sm font-semibold hover:bg-brand-700 transition-colors"
                    >
                      Open Prayer Journal
                    </Link>
                    <button
                      onClick={() => setDevotionalExpanded(false)}
                      className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      Show less
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setDevotionalExpanded(true)}
                  className="w-full bg-brand-50 text-brand-600 text-sm font-semibold py-2.5 rounded-xl hover:bg-brand-100 transition-colors"
                >
                  Read today's reflection →
                </button>
              )}
            </div>
            <div className="px-4 py-2 border-t border-gray-50 flex items-center justify-between">
              <span className="text-xs text-gray-400">{todayDevotional.likeCount.toLocaleString()} people found this helpful</span>
              <span className="text-xs text-gray-400">{todayDevotional.author}</span>
            </div>
          </div>
        </section>

        {/* Active Study Plans */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-gray-900">Continue Learning</h2>
            <Link href="/learn" className="text-xs text-brand-600 font-medium flex items-center gap-1">
              See all <ChevronRight size={12} />
            </Link>
          </div>
          <div className="space-y-3">
            {activePlans.map((plan) => (
              <div
                key={plan.id}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4"
              >
                <div className="text-3xl w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  {plan.image}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-semibold text-gray-900 truncate">{plan.title}</h3>
                    <span className="text-xs text-gray-400 flex-shrink-0 ml-2">
                      Day {plan.daysCompleted}/{plan.daysTotal}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-brand-500 to-purple-500 rounded-full transition-all duration-500"
                      style={{ width: `${plan.progress}%` }}
                    />
                  </div>
                  <div className="mt-1 text-xs text-gray-400">{plan.progress}% complete</div>
                </div>
                <Link href="/learn">
                  <button className="flex-shrink-0 w-8 h-8 bg-brand-50 rounded-full flex items-center justify-center hover:bg-brand-100 transition-colors">
                    <Play size={14} className="text-brand-600 ml-0.5" />
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Live Now */}
        {activeGroups.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-base font-bold text-gray-900">Live Now</h2>
              <span className="flex items-center gap-1 bg-red-50 text-red-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                LIVE
              </span>
            </div>
            <div className="space-y-2">
              {activeGroups.map((group) => (
                <div
                  key={group.id}
                  className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-3"
                >
                  <div className="text-2xl w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    {group.image}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-gray-900">{group.name}</div>
                    <div className="text-xs text-gray-500">{group.members} members</div>
                  </div>
                  <Link href="/community">
                    <button className="bg-emerald-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-emerald-600 transition-colors">
                      Join
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Community Prayer */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-gray-900">Pray for Someone</h2>
            <Link href="/pray" className="text-xs text-brand-600 font-medium flex items-center gap-1">
              See all <ChevronRight size={12} />
            </Link>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-sm font-bold flex-shrink-0">
                {featuredRequest.initials}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-900">{featuredRequest.user}</span>
                  <span className="text-xs text-gray-400">{featuredRequest.timeAgo}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">{featuredRequest.request}</p>
                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => handlePray(featuredRequest.id)}
                    className={`flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full transition-colors ${
                      prayedIds.has(featuredRequest.id)
                        ? 'bg-brand-100 text-brand-700'
                        : 'bg-brand-600 text-white hover:bg-brand-700'
                    }`}
                  >
                    🙏 {prayedIds.has(featuredRequest.id) ? 'Prayed' : 'Pray for this'}
                  </button>
                  <span className="text-xs text-gray-400">
                    {featuredRequest.prayerCount + (prayedIds.has(featuredRequest.id) ? 1 : 0)} praying
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <h2 className="text-base font-bold text-gray-900 mb-3">Quick Actions</h2>
          {/* Spiritual Companion — featured */}
          <Link
            href="/companion"
            className="block bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-4 mb-3 hover:opacity-95 transition-opacity"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">✨</span>
              <div>
                <div className="text-sm font-bold text-white">Spiritual Companion</div>
                <div className="text-xs text-slate-400">Talk with God, saints, or divine guides</div>
              </div>
            </div>
          </Link>
          <div className="grid grid-cols-2 gap-3">
            {[
              { href: '/pray', icon: '📔', label: 'Prayer Journal', bg: 'bg-purple-50', text: 'text-purple-700' },
              { href: '/learn', icon: '🎓', label: 'Browse Courses', bg: 'bg-amber-50', text: 'text-amber-700' },
              { href: '/community', icon: '👥', label: 'My Groups', bg: 'bg-emerald-50', text: 'text-emerald-700' },
              { href: '/give', icon: '💝', label: 'Give Today', bg: 'bg-rose-50', text: 'text-rose-700' },
            ].map(({ href, icon, label, bg, text }) => (
              <Link
                key={href}
                href={href}
                className={`${bg} rounded-2xl p-4 flex items-center gap-3 hover:opacity-90 transition-opacity`}
              >
                <span className="text-2xl">{icon}</span>
                <span className={`text-sm font-semibold ${text}`}>{label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Upgrade nudge (free users only) */}
        <section>
          <div className="bg-gradient-to-r from-brand-600 to-purple-600 rounded-2xl p-5 text-white">
            <div className="flex items-start gap-3">
              <Lock size={20} className="flex-shrink-0 mt-0.5 text-brand-200" />
              <div>
                <h3 className="text-sm font-bold mb-1">Unlock 50+ courses &amp; more</h3>
                <p className="text-xs text-brand-200 mb-3">
                  Get the full course library, audio content, private groups, and an ad-free experience.
                </p>
                <button className="bg-white text-brand-700 text-sm font-bold px-4 py-2 rounded-full hover:bg-brand-50 transition-colors">
                  Try Individual for $9/mo →
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
