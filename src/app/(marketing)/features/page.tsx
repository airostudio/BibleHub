import Link from 'next/link'

const features = [
  {
    icon: '📖',
    title: 'Daily Devotionals',
    desc: 'Curated reflections drawn from Scripture, Jewish texts, the Quran, and wisdom traditions. Each day brings a fresh word, a reflection prompt, and a prayer to carry you through.',
    detail: ['New devotional every morning', 'Multi-tradition content library', 'Reflection prompts & journaling', 'Share with your community'],
  },
  {
    icon: '🙏',
    title: 'Prayer Journal',
    desc: 'Write, organize, and revisit your prayers. Mark answered prayers, track your mood, and build a lifelong record of your conversations with the divine.',
    detail: ['Private & community prayer walls', 'Answered prayer celebration', 'Mood & journey tracking', 'Prayer reminders at your pace'],
  },
  {
    icon: '✨',
    title: 'AI Spiritual Companion',
    desc: 'Talk with God, saints, prophets, and divine guides from your tradition — or explore others. 14 personas across 7 faith traditions, powered by thoughtful AI.',
    detail: ['14 divine personas to choose from', 'Multi-faith: Christian, Jewish, Islamic, Hindu, Buddhist', 'Streams naturally like a real conversation', 'Crisis support with 988 lifeline integration'],
  },
  {
    icon: '🎓',
    title: 'Courses & Study Plans',
    desc: 'Structured paths for real spiritual growth. From Foundations of Faith to grief workshops to marriage prep — with expert instructors and a community of learners.',
    detail: ['50+ premium courses', 'Self-paced study plans', 'Expert instructors across traditions', 'Progress tracking & certificates'],
  },
  {
    icon: '👥',
    title: 'Community & Groups',
    desc: 'Join or create faith communities around shared interests, life stages, or traditions. Live prayer circles, discussion boards, and direct messaging.',
    detail: ['Public & private group spaces', 'Live prayer sessions', 'Discussion boards & forums', 'Direct member messaging'],
  },
  {
    icon: '💝',
    title: 'Transparent Giving',
    desc: 'Give to campaigns and organizations you trust, with full visibility into how every dollar is used. Recurring giving, impact reports, and verified organizations.',
    detail: ['Campaign-based giving', 'Recurring monthly gifts', 'Full donation transparency', 'Verified organizations only'],
  },
  {
    icon: '🔥',
    title: 'Streaks & Achievements',
    desc: 'Stay consistent with daily streak tracking, milestone badges, and weekly progress insights. Your spiritual discipline deserves recognition.',
    detail: ['Daily streak tracking', 'Achievement badges', 'Weekly & monthly insights', 'Streak shields (Premium)'],
  },
  {
    icon: '🎙️',
    title: 'Sermons & Talks',
    desc: 'A curated library of sermons, lectures, and talks from faith leaders across traditions. Audio-first, with transcripts and study notes.',
    detail: ['350+ episodes in the archive', 'Audio-first experience', 'Downloadable for offline', 'Sortable by tradition & topic'],
  },
]

export default function FeaturesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-700 to-purple-700 text-white py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-white/15 text-brand-200 text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-wider uppercase">
            Platform Features
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Everything you need for a deeper faith life
          </h1>
          <p className="text-lg text-brand-200 mb-8 max-w-xl mx-auto">
            Elevate Chapel brings your spiritual practice — devotionals, prayer, community, learning, and giving — into one thoughtfully designed home.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/home"
              className="bg-white text-brand-700 font-bold px-6 py-3 rounded-full hover:bg-brand-50 transition-colors"
            >
              Start for Free
            </Link>
            <Link
              href="/pricing"
              className="border border-white/40 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Built for every step of your journey</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Whether you are deepening a lifelong practice or exploring faith for the first time, Elevate Chapel meets you where you are.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{f.desc}</p>
                <ul className="space-y-2">
                  {f.detail.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-4 h-4 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-[10px] font-bold flex-shrink-0">✓</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-faith callout */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-6">🌍</div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Truly multi-faith</h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            Elevate Chapel is home to Christians, Jews, Muslims, Hindus, Buddhists, and spiritual seekers of every tradition. Our content and AI personas are shaped with theologians, imams, rabbis, and spiritual directors.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Christianity', 'Judaism', 'Islam', 'Hinduism', 'Buddhism', 'Interfaith'].map((t) => (
              <span key={t} className="bg-brand-50 text-brand-700 text-sm font-semibold px-4 py-2 rounded-full border border-brand-200">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-600 to-purple-600 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to begin?</h2>
          <p className="text-brand-200 mb-8">Start with a free account. Upgrade any time to unlock everything.</p>
          <Link
            href="/home"
            className="inline-block bg-white text-brand-700 font-bold px-8 py-4 rounded-full text-lg hover:bg-brand-50 transition-colors shadow-lg"
          >
            Create Free Account →
          </Link>
        </div>
      </section>
    </div>
  )
}
