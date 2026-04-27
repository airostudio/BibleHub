'use client'

import { useState } from 'react'
import { Plus, X, ChevronDown, ChevronUp, Check } from 'lucide-react'
import { clsx } from 'clsx'
import { journalEntries, prayerRequests, answeredPrayers } from '@/lib/data'

type Tab = 'journal' | 'requests' | 'answered'

const moodColors: Record<string, string> = {
  Searching: 'bg-blue-100 text-blue-700',
  Hopeful: 'bg-amber-100 text-amber-700',
  Peaceful: 'bg-emerald-100 text-emerald-700',
  Grateful: 'bg-purple-100 text-purple-700',
  Anxious: 'bg-red-100 text-red-700',
}

export default function PrayPage() {
  const [tab, setTab] = useState<Tab>('journal')
  const [entries, setEntries] = useState(journalEntries)
  const [prayedIds, setPrayedIds] = useState<Set<string>>(new Set(['pr-002', 'pr-005']))
  const [prayerCounts, setPrayerCounts] = useState<Record<string, number>>({})
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [showNewForm, setShowNewForm] = useState(false)
  const [newEntry, setNewEntry] = useState({ title: '', content: '', mood: 'Hopeful' })

  function handleAddEntry() {
    if (!newEntry.title.trim() || !newEntry.content.trim()) return
    const entry = {
      id: `j-${Date.now()}`,
      title: newEntry.title,
      content: newEntry.content,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      mood: newEntry.mood,
      answered: false,
    }
    setEntries([entry, ...entries])
    setNewEntry({ title: '', content: '', mood: 'Hopeful' })
    setShowNewForm(false)
  }

  function handlePray(id: string, baseCount: number) {
    setPrayedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
        setPrayerCounts((c) => ({ ...c, [id]: (c[id] ?? 0) - 1 }))
      } else {
        next.add(id)
        setPrayerCounts((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }))
      }
      return next
    })
  }

  const categoryColors: Record<string, string> = {
    Health: 'bg-red-50 text-red-600',
    Career: 'bg-blue-50 text-blue-600',
    Family: 'bg-purple-50 text-purple-600',
    Faith: 'bg-amber-50 text-amber-600',
    Relationships: 'bg-emerald-50 text-emerald-600',
  }

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-900 to-brand-700 text-white px-4 pt-10 pb-6">
        <h1 className="text-2xl font-bold mb-1">Prayer</h1>
        <p className="text-brand-200 text-sm">Your private sanctuary and community prayer space</p>

        {/* Tab switcher */}
        <div className="flex gap-1 mt-4 bg-white/10 rounded-xl p-1">
          {(['journal', 'requests', 'answered'] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={clsx(
                'flex-1 text-sm font-semibold py-2 rounded-lg transition-all duration-200 capitalize',
                tab === t ? 'bg-white text-brand-700 shadow-sm' : 'text-white/70 hover:text-white'
              )}
            >
              {t === 'requests' ? 'Community' : t === 'answered' ? 'Answered' : 'My Journal'}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-5">
        {/* JOURNAL TAB */}
        {tab === 'journal' && (
          <div className="space-y-4 animate-slide-up">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">{entries.length} personal prayers</p>
              <button
                onClick={() => setShowNewForm(true)}
                className="flex items-center gap-1.5 bg-brand-600 text-white text-sm font-semibold px-3 py-2 rounded-full hover:bg-brand-700 transition-colors"
              >
                <Plus size={14} />
                New Prayer
              </button>
            </div>

            {/* New entry form */}
            {showNewForm && (
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-brand-100 animate-slide-up">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">New Prayer</h3>
                  <button onClick={() => setShowNewForm(false)} className="text-gray-400 hover:text-gray-600">
                    <X size={16} />
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Give this prayer a title..."
                  value={newEntry.title}
                  onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
                  className="w-full text-sm border border-gray-200 rounded-xl px-3 py-2.5 mb-3 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                />
                <textarea
                  placeholder="Write your prayer here... This is your private space."
                  value={newEntry.content}
                  onChange={(e) => setNewEntry({ ...newEntry, content: e.target.value })}
                  rows={4}
                  className="w-full text-sm border border-gray-200 rounded-xl px-3 py-2.5 mb-3 resize-none focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                />
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs text-gray-500">How are you feeling?</span>
                  {Object.keys(moodColors).map((mood) => (
                    <button
                      key={mood}
                      onClick={() => setNewEntry({ ...newEntry, mood })}
                      className={clsx(
                        'text-xs px-2.5 py-1 rounded-full font-medium transition-all',
                        newEntry.mood === mood
                          ? moodColors[mood]
                          : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                      )}
                    >
                      {mood}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleAddEntry}
                    disabled={!newEntry.title.trim() || !newEntry.content.trim()}
                    className="flex-1 bg-brand-600 text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    Save Prayer
                  </button>
                  <button
                    onClick={() => setShowNewForm(false)}
                    className="px-4 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Journal entries */}
            {entries.map((entry) => (
              <div key={entry.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-sm font-semibold text-gray-900">{entry.title}</h3>
                        {entry.answered && (
                          <span className="flex items-center gap-1 text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">
                            <Check size={10} />
                            Answered
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-400">{entry.date}</span>
                        <span className={clsx('text-xs px-2 py-0.5 rounded-full font-medium', moodColors[entry.mood])}>
                          {entry.mood}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setExpandedId(expandedId === entry.id ? null : entry.id)}
                      className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
                    >
                      {expandedId === entry.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  </div>

                  {expandedId === entry.id && (
                    <div className="mt-3 animate-slide-up">
                      <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 rounded-xl p-3 italic">
                        "{entry.content}"
                      </p>
                      <div className="flex gap-2 mt-3">
                        {!entry.answered && (
                          <button
                            onClick={() =>
                              setEntries((prev) =>
                                prev.map((e) => (e.id === entry.id ? { ...e, answered: true } : e))
                              )
                            }
                            className="text-xs bg-emerald-50 text-emerald-700 font-semibold px-3 py-1.5 rounded-full hover:bg-emerald-100 transition-colors"
                          >
                            ✓ Mark as answered
                          </button>
                        )}
                        <button
                          onClick={() => setEntries((prev) => prev.filter((e) => e.id !== entry.id))}
                          className="text-xs text-gray-400 hover:text-red-500 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {entries.length === 0 && (
              <div className="text-center py-12 text-gray-400">
                <div className="text-5xl mb-4">🙏</div>
                <p className="text-sm">Your prayer journal is empty.</p>
                <p className="text-sm">Write your first prayer above.</p>
              </div>
            )}
          </div>
        )}

        {/* REQUESTS TAB */}
        {tab === 'requests' && (
          <div className="space-y-4 animate-slide-up">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">Community prayer requests</p>
              <button className="flex items-center gap-1.5 bg-brand-600 text-white text-sm font-semibold px-3 py-2 rounded-full hover:bg-brand-700 transition-colors">
                <Plus size={14} />
                Share Request
              </button>
            </div>

            {prayerRequests.map((req) => {
              const prayed = prayedIds.has(req.id)
              const count = req.prayerCount + (prayerCounts[req.id] ?? 0) + (prayed && !req.hasPrayed ? 0 : 0)
              const displayCount = req.prayerCount + (prayerCounts[req.id] ?? 0)
              return (
                <div key={req.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {req.initials}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-gray-900">{req.user}</span>
                        <div className="flex items-center gap-2">
                          <span
                            className={clsx(
                              'text-xs px-2 py-0.5 rounded-full font-medium',
                              categoryColors[req.category] ?? 'bg-gray-100 text-gray-500'
                            )}
                          >
                            {req.category}
                          </span>
                          <span className="text-xs text-gray-400">{req.timeAgo}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1 leading-relaxed">{req.request}</p>
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => handlePray(req.id, req.prayerCount)}
                          className={clsx(
                            'flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full transition-all',
                            prayed
                              ? 'bg-brand-100 text-brand-700 scale-95'
                              : 'bg-brand-600 text-white hover:bg-brand-700'
                          )}
                        >
                          🙏 {prayed ? 'Prayed' : 'Pray for this'}
                        </button>
                        <span className="text-xs text-gray-400">
                          {displayCount + (prayed && !req.hasPrayed ? 1 : req.hasPrayed && !prayed ? -1 : 0)} praying
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* ANSWERED TAB */}
        {tab === 'answered' && (
          <div className="space-y-4 animate-slide-up">
            <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100">
              <p className="text-sm text-emerald-800 leading-relaxed">
                🎉 These are prayers that community members have shared as answered. Celebrating answered prayers builds faith for everyone.
              </p>
            </div>

            {answeredPrayers.map((ap) => (
              <div key={ap.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {ap.initials}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-gray-900">{ap.title}</h3>
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">
                        ✓ Answered
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">{ap.user} · {ap.date}</span>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">{ap.story}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="text-center py-6">
              <p className="text-sm text-gray-400">Have an answered prayer to share?</p>
              <button className="mt-2 bg-emerald-500 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-emerald-600 transition-colors">
                Share your story
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
