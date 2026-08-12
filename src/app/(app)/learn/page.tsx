'use client'

import { useState } from 'react'
import { Search, Lock, Star, Users, Play, Clock, ChevronRight } from 'lucide-react'
import { clsx } from 'clsx'
import { courses, studyPlans, sermons } from '@/lib/data'
import UpgradeModal from '@/components/UpgradeModal'

type Tab = 'plans' | 'courses' | 'sermons'

const categories = ['All', 'Foundations', 'Prayer', 'Scripture', 'Relationships', 'Healing', 'Leadership']

export default function LearnPage() {
  const [tab, setTab] = useState<Tab>('plans')
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showUpgradeModal, setShowUpgradeModal] = useState(false)

  const filteredCourses = courses.filter((c) => {
    const matchesSearch =
      !search ||
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.instructor.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const enrolledPlans = studyPlans.filter((p) => p.daysCompleted > 0 || !p.premium)

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-700 to-orange-600 text-white px-4 pt-10 pb-6">
        <h1 className="text-2xl font-bold mb-1">Learn</h1>
        <p className="text-amber-200 text-sm">Courses, study plans, and sermons for your journey</p>

        {/* Search */}
        <div className="relative mt-4">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search courses, topics..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white text-gray-900 text-sm pl-9 pr-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-300"
          />
        </div>

        {/* Tab switcher */}
        <div className="flex gap-1 mt-4 bg-white/10 rounded-xl p-1">
          {([
            ['plans', 'Study Plans'],
            ['courses', 'Courses'],
            ['sermons', 'Sermons'],
          ] as [Tab, string][]).map(([t, label]) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={clsx(
                'flex-1 text-sm font-semibold py-2 rounded-lg transition-all duration-200',
                tab === t ? 'bg-white text-amber-700 shadow-sm' : 'text-white/70 hover:text-white'
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 py-5">
        {/* STUDY PLANS TAB */}
        {tab === 'plans' && (
          <div className="space-y-4 animate-slide-up">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-gray-900">My Active Plans</h2>
              <button className="text-xs text-brand-600 font-medium">Browse all</button>
            </div>

            {enrolledPlans.map((plan) => (
              <div
                key={plan.id}
                className={clsx(
                  'bg-white rounded-2xl overflow-hidden shadow-sm border',
                  plan.premium ? 'border-amber-200' : 'border-gray-100'
                )}
              >
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                      {plan.image}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-semibold text-gray-900">{plan.title}</h3>
                        {plan.premium && (
                          <span className="flex items-center gap-1 text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">
                            <Lock size={10} />
                            Premium
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">{plan.description}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-400">{plan.category}</span>
                        <span className="text-gray-300">·</span>
                        <span className="text-xs text-gray-400">{plan.daysTotal} days</span>
                      </div>
                    </div>
                  </div>

                  {plan.premium ? (
                    <button
                      onClick={() => setShowUpgradeModal(true)}
                      className="w-full mt-4 flex items-center justify-center gap-2 border border-amber-300 text-amber-700 bg-amber-50 text-sm font-semibold py-2.5 rounded-xl hover:bg-amber-100 transition-colors"
                    >
                      <Lock size={14} />
                      Unlock with Premium
                    </button>
                  ) : (
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs text-gray-500">Progress</span>
                        <span className="text-xs font-semibold text-gray-700">
                          Day {plan.daysCompleted} of {plan.daysTotal}
                        </span>
                      </div>
                      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-700"
                          style={{ width: `${plan.progress}%` }}
                        />
                      </div>
                      <div className="flex justify-between mt-1.5">
                        <span className="text-xs text-gray-400">{plan.progress}% complete</span>
                        <button className="text-xs text-brand-600 font-semibold hover:text-brand-700">
                          Continue →
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Discover more */}
            <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100">
              <h3 className="text-sm font-semibold text-amber-900 mb-2">Discover more plans</h3>
              <div className="flex flex-wrap gap-2">
                {['Advent', 'Ramadan Reflections', 'Leadership 101', 'Healing Journey', 'Marriage Prep'].map(
                  (tag) => (
                    <button
                      key={tag}
                      className="text-xs bg-white text-amber-700 border border-amber-200 px-3 py-1.5 rounded-full hover:bg-amber-100 transition-colors"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        )}

        {/* COURSES TAB */}
        {tab === 'courses' && (
          <div className="space-y-4 animate-slide-up">
            {/* Category filter */}
            <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={clsx(
                    'flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors',
                    selectedCategory === cat
                      ? 'bg-brand-600 text-white'
                      : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Course grid */}
            <div className="space-y-3">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className={clsx(
                    'bg-white rounded-2xl overflow-hidden shadow-sm border transition-shadow hover:shadow-md',
                    course.premium ? 'border-amber-200' : 'border-gray-100'
                  )}
                >
                  <div className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 relative">
                        {course.image}
                        {course.completed && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-[10px]">✓</span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="text-sm font-semibold text-gray-900">{course.title}</h3>
                            <p className="text-xs text-gray-500 mt-0.5">{course.instructor}</p>
                          </div>
                          {course.premium && (
                            <span className="flex items-center gap-1 text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium flex-shrink-0">
                              <Lock size={9} />
                              Premium
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-400 mt-1 leading-relaxed">{course.description}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="flex items-center gap-1 text-xs text-gray-400">
                            <Clock size={10} /> {course.duration}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-gray-400">
                            <Play size={10} /> {course.lessons} lessons
                          </span>
                          <span className="flex items-center gap-1 text-xs text-amber-500">
                            <Star size={10} className="fill-current" /> {course.rating}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-gray-400">
                            <Users size={10} /> {course.enrolled.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3">
                      {course.premium ? (
                        <button
                          onClick={() => setShowUpgradeModal(true)}
                          className="w-full flex items-center justify-center gap-2 border border-amber-300 bg-amber-50 text-amber-700 text-sm font-semibold py-2.5 rounded-xl hover:bg-amber-100 transition-colors"
                        >
                          <Lock size={14} />
                          Unlock Course
                        </button>
                      ) : course.completed ? (
                        <button className="w-full bg-emerald-50 text-emerald-700 text-sm font-semibold py-2.5 rounded-xl">
                          ✓ Completed — Review
                        </button>
                      ) : (
                        <button className="w-full bg-brand-600 text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-brand-700 transition-colors">
                          Start Course — Free
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {filteredCourses.length === 0 && (
                <div className="text-center py-12 text-gray-400">
                  <div className="text-4xl mb-3">🔍</div>
                  <p className="text-sm">No courses found for "{search}"</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* SERMONS TAB */}
        {tab === 'sermons' && (
          <div className="space-y-4 animate-slide-up">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-gray-900">Recent Talks</h2>
              <button className="text-xs text-brand-600 font-medium flex items-center gap-1">
                Filter <ChevronRight size={12} />
              </button>
            </div>

            {sermons.map((sermon) => (
              <div key={sermon.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    {sermon.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-900">{sermon.title}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{sermon.speaker}</p>
                    <p className="text-xs text-gray-400">{sermon.community}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock size={10} /> {sermon.duration}
                      </span>
                      <span className="text-xs text-gray-400">{sermon.date}</span>
                      <span className="text-xs text-gray-400">{sermon.views.toLocaleString()} views</span>
                    </div>
                  </div>
                  <button className="flex-shrink-0 w-9 h-9 bg-brand-50 rounded-full flex items-center justify-center hover:bg-brand-100 transition-colors">
                    <Play size={14} className="text-brand-600 ml-0.5" />
                  </button>
                </div>
              </div>
            ))}

            <div className="text-center py-4">
              <button className="text-sm text-brand-600 font-semibold hover:text-brand-700 transition-colors">
                Load more sermons →
              </button>
            </div>
          </div>
        )}
      </div>

      {showUpgradeModal && (
        <UpgradeModal trigger="course" onClose={() => setShowUpgradeModal(false)} />
      )}
    </div>
  )
}
