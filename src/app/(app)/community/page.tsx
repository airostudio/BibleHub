'use client'

import { useState } from 'react'
import { Search, Users, MessageCircle, Radio, Plus, ChevronRight } from 'lucide-react'
import { clsx } from 'clsx'
import { groups, discussions } from '@/lib/data'

type Tab = 'my-groups' | 'discover' | 'live'

export default function CommunityPage() {
  const [tab, setTab] = useState<Tab>('my-groups')
  const [search, setSearch] = useState('')
  const [joinedGroups, setJoinedGroups] = useState<Set<string>>(
    new Set(groups.filter((g) => g.joined).map((g) => g.id))
  )

  const myGroups = groups.filter((g) => joinedGroups.has(g.id))
  const discoverGroups = groups.filter((g) => !joinedGroups.has(g.id))
  const liveGroups = groups.filter((g) => g.liveNow)

  function toggleJoin(id: string) {
    setJoinedGroups((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const filteredDiscover = discoverGroups.filter(
    (g) =>
      !search ||
      g.name.toLowerCase().includes(search.toLowerCase()) ||
      g.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-800 to-teal-700 text-white px-4 pt-10 pb-6">
        <h1 className="text-2xl font-bold mb-1">Community</h1>
        <p className="text-emerald-200 text-sm">Grow together in faith with your people</p>

        {/* Tab switcher */}
        <div className="flex gap-1 mt-4 bg-white/10 rounded-xl p-1">
          {([
            ['my-groups', 'My Groups'],
            ['discover', 'Discover'],
            ['live', 'Live'],
          ] as [Tab, string][]).map(([t, label]) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={clsx(
                'flex-1 text-sm font-semibold py-2 rounded-lg transition-all duration-200',
                tab === t ? 'bg-white text-emerald-700 shadow-sm' : 'text-white/70 hover:text-white'
              )}
            >
              {t === 'live' ? (
                <span className="flex items-center justify-center gap-1">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
                  {label}
                </span>
              ) : (
                label
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-5">
        {/* MY GROUPS */}
        {tab === 'my-groups' && (
          <div className="space-y-4 animate-slide-up">
            {myGroups.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">👥</div>
                <p className="text-gray-500 text-sm">You haven't joined any groups yet.</p>
                <button
                  onClick={() => setTab('discover')}
                  className="mt-3 text-brand-600 text-sm font-semibold hover:text-brand-700"
                >
                  Discover groups →
                </button>
              </div>
            ) : (
              <>
                {myGroups.map((group) => (
                  <div key={group.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                    <div className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                          {group.image}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="text-sm font-semibold text-gray-900">{group.name}</h3>
                                {group.liveNow && (
                                  <span className="flex items-center gap-1 text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-semibold">
                                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                                    LIVE
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-2 mt-0.5">
                                <span className="flex items-center gap-1 text-xs text-gray-400">
                                  <Users size={10} /> {group.members} members
                                </span>
                                <span className="text-gray-300">·</span>
                                <span className="text-xs text-gray-400">{group.activity}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1 leading-relaxed">{group.description}</p>
                        </div>
                      </div>

                      <div className="flex gap-2 mt-3">
                        {group.liveNow ? (
                          <button className="flex-1 flex items-center justify-center gap-2 bg-red-500 text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-red-600 transition-colors">
                            <Radio size={14} />
                            Join Live Session
                          </button>
                        ) : (
                          <button className="flex-1 flex items-center justify-center gap-2 bg-emerald-50 text-emerald-700 text-sm font-semibold py-2.5 rounded-xl hover:bg-emerald-100 transition-colors">
                            <MessageCircle size={14} />
                            Open Group
                          </button>
                        )}
                        <button
                          onClick={() => toggleJoin(group.id)}
                          className="px-4 text-sm text-gray-400 hover:text-red-500 transition-colors"
                        >
                          Leave
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Active discussions in my groups */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-sm font-bold text-gray-900">Active Discussions</h2>
                    <button className="text-xs text-brand-600 font-medium flex items-center gap-1">
                      All <ChevronRight size={12} />
                    </button>
                  </div>
                  {discussions.map((disc) => (
                    <div key={disc.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MessageCircle size={14} className="text-indigo-500" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-900 leading-snug">{disc.title}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-gray-400">{disc.group}</span>
                            <span className="text-gray-300">·</span>
                            <span className="text-xs text-gray-400">{disc.replies} replies</span>
                            <span className="text-gray-300">·</span>
                            <span className="text-xs text-gray-400">{disc.lastActivity}</span>
                            {disc.isHot && (
                              <span className="text-xs bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded-full font-semibold">
                                🔥 Hot
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* DISCOVER */}
        {tab === 'discover' && (
          <div className="space-y-4 animate-slide-up">
            {/* Search */}
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search groups by name or topic..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white text-gray-900 text-sm pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
              />
            </div>

            {/* Category pills */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {['All', 'Prayer', 'Community', 'Scripture Study', 'Support', 'Family'].map((cat) => (
                <button
                  key={cat}
                  className="flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  {cat}
                </button>
              ))}
            </div>

            {filteredDiscover.length === 0 && (
              <div className="text-center py-12 text-gray-400">
                <div className="text-4xl mb-3">🔍</div>
                <p className="text-sm">No groups found matching "{search}"</p>
              </div>
            )}

            {filteredDiscover.map((group) => (
              <div key={group.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    {group.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-gray-900">{group.name}</h3>
                      <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                        {group.category}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{group.description}</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Users size={10} /> {group.members} members
                      </span>
                      <span className="text-gray-300">·</span>
                      <span className="text-xs text-gray-400">{group.activity}</span>
                    </div>
                    <button
                      onClick={() => {
                        toggleJoin(group.id)
                        if (!joinedGroups.has(group.id)) setTab('my-groups')
                      }}
                      className="mt-3 w-full bg-emerald-500 text-white text-sm font-semibold py-2 rounded-xl hover:bg-emerald-600 transition-colors"
                    >
                      Join Group
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Create a group CTA */}
            <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100">
              <h3 className="text-sm font-semibold text-emerald-900 mb-1">Don't see your community?</h3>
              <p className="text-xs text-emerald-700 mb-3">
                Start your own group — for your church, study group, support circle, or neighborhood.
              </p>
              <button className="flex items-center gap-2 bg-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors">
                <Plus size={14} />
                Create a Group
              </button>
            </div>
          </div>
        )}

        {/* LIVE */}
        {tab === 'live' && (
          <div className="space-y-4 animate-slide-up">
            <div className="bg-red-50 rounded-2xl p-4 border border-red-100 flex items-center gap-3">
              <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse flex-shrink-0" />
              <p className="text-sm text-red-800 font-medium">
                {liveGroups.length} session{liveGroups.length !== 1 ? 's' : ''} happening right now
              </p>
            </div>

            {liveGroups.map((group) => (
              <div key={group.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-red-100">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 px-4 py-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="text-xs text-white font-semibold uppercase tracking-wide">Live Session</span>
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                      {group.image}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-gray-900">{group.name}</h3>
                      <p className="text-xs text-gray-500 mt-1">{group.description}</p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="flex items-center gap-1 text-xs text-gray-400">
                          <Users size={10} /> {group.members} members
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full mt-4 flex items-center justify-center gap-2 bg-red-500 text-white text-sm font-bold py-3 rounded-xl hover:bg-red-600 transition-colors">
                    <Radio size={16} />
                    Join Live Session
                  </button>
                </div>
              </div>
            ))}

            {liveGroups.length === 0 && (
              <div className="text-center py-12 text-gray-400">
                <div className="text-5xl mb-4">📡</div>
                <p className="text-sm">No live sessions right now.</p>
                <p className="text-sm">Check back soon or schedule one in your group.</p>
              </div>
            )}

            {/* Upcoming sessions */}
            <div>
              <h2 className="text-sm font-bold text-gray-900 mb-3">Upcoming This Week</h2>
              {[
                { name: 'Sunday Morning Prayer', group: 'Morning Prayer Circle', day: 'Sunday', time: '7:00 AM' },
                { name: 'Romans Study — Chapter 9', group: 'Romans Study Group', day: 'Wednesday', time: '8:00 PM' },
                { name: 'Q&A with Pastor David Kim', group: 'New Life Fellowship', day: 'Thursday', time: '7:30 PM' },
              ].map((event) => (
                <div key={event.name} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{event.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{event.group}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-xs font-semibold text-brand-600">{event.day}</p>
                      <p className="text-xs text-gray-400">{event.time}</p>
                    </div>
                  </div>
                  <button className="mt-3 w-full border border-brand-200 text-brand-600 text-sm font-semibold py-2 rounded-xl hover:bg-brand-50 transition-colors">
                    Set Reminder
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
