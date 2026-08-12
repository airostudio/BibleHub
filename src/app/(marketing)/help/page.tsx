import Link from 'next/link'

const categories = [
  { icon: '🚀', title: 'Getting Started', desc: 'Account setup, first steps, and onboarding', articles: 12 },
  { icon: '🙏', title: 'Prayer & Devotionals', desc: 'Using the prayer journal and daily readings', articles: 8 },
  { icon: '✨', title: 'AI Companion', desc: 'How the Spiritual Companion works and its limits', articles: 6 },
  { icon: '🎓', title: 'Courses & Learning', desc: 'Finding, enrolling, and completing courses', articles: 10 },
  { icon: '👥', title: 'Community & Groups', desc: 'Joining groups, posting, and direct messages', articles: 9 },
  { icon: '💰', title: 'Billing & Subscriptions', desc: 'Plans, payments, trials, and cancellation', articles: 11 },
  { icon: '💝', title: 'Giving', desc: 'Donations, recurring gifts, and receipts', articles: 7 },
  { icon: '🔒', title: 'Privacy & Security', desc: 'Data, account security, and permissions', articles: 8 },
]

const popular = [
  { q: 'How do I cancel my subscription?', category: 'Billing' },
  { q: 'Can I use Elevate Chapel without a paid plan?', category: 'Getting Started' },
  { q: 'Is the AI Spiritual Companion real or just a bot?', category: 'AI Companion' },
  { q: 'How do I set up my prayer reminders?', category: 'Prayer' },
  { q: 'What happens to my donation — where does it go?', category: 'Giving' },
  { q: 'How do I join a private group?', category: 'Community' },
  { q: 'Can I download sermons to listen offline?', category: 'Courses' },
  { q: 'How do I get a giving statement for taxes?', category: 'Billing' },
]

const faqs = [
  {
    q: 'Is the free plan really free forever?',
    a: 'Yes. The free plan includes daily devotionals, the prayer journal, community prayer wall, two free courses, and basic giving tools — permanently. No credit card required.',
  },
  {
    q: 'Can I export my journal entries and prayers?',
    a: 'Yes. From your Profile → App Settings → Privacy & Data, you can download a full export of your journals, prayers, and giving history as a PDF or CSV.',
  },
  {
    q: 'What happens to my streak if I miss a day?',
    a: 'Your streak resets on a missed day. Premium members get 3 Streak Shields per month that protect against a single missed day — they activate automatically when needed.',
  },
  {
    q: 'Is my AI Companion conversation private?',
    a: 'Yes. AI conversations are encrypted at rest and in transit. They are never used to train AI models or shared with third parties. You can delete them at any time from your settings.',
  },
  {
    q: 'Can I suggest a faith tradition or persona for the AI Companion?',
    a: 'Absolutely. We review all persona suggestions. Email feedback@elevatechapel.online with your suggestion and the theological background.',
  },
]

export default function HelpPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-brand-900 text-white py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">How can we help?</h1>
          <p className="text-gray-400 mb-8">Search the knowledge base or browse by category</p>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
            <input
              type="search"
              placeholder="Search for answers..."
              className="w-full bg-white text-gray-900 pl-11 pr-4 py-4 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 shadow-lg"
            />
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Categories */}
        <div className="mb-14">
          <h2 className="text-xl font-extrabold text-gray-900 mb-6">Browse by category</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {categories.map(({ icon, title, desc, articles }) => (
              <div key={title} className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-brand-300 hover:shadow-sm transition-all cursor-pointer group">
                <div className="text-2xl mb-3">{icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-brand-600 transition-colors text-sm">{title}</h3>
                <p className="text-xs text-gray-400 mb-2">{desc}</p>
                <span className="text-[10px] text-gray-300">{articles} articles</span>
              </div>
            ))}
          </div>
        </div>

        {/* Popular articles */}
        <div className="mb-14">
          <h2 className="text-xl font-extrabold text-gray-900 mb-6">Popular articles</h2>
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm divide-y divide-gray-50">
            {popular.map(({ q, category }) => (
              <div key={q} className="flex items-center gap-4 px-5 py-3.5 hover:bg-gray-50 transition-colors cursor-pointer group">
                <span className="text-brand-400 flex-shrink-0">📄</span>
                <span className="flex-1 text-sm text-gray-700 group-hover:text-brand-600 transition-colors">{q}</span>
                <span className="text-[10px] text-gray-400 flex-shrink-0 bg-gray-100 px-2 py-0.5 rounded-full">{category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick FAQs */}
        <div className="mb-14">
          <h2 className="text-xl font-extrabold text-gray-900 mb-6">Quick answers</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{q}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-r from-brand-50 to-purple-50 rounded-2xl p-8 border border-brand-100 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Still need help?</h2>
          <p className="text-sm text-gray-500 mb-6">Our support team is available Monday–Friday, 9am–6pm EST.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:support@elevatechapel.online"
              className="bg-brand-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-brand-700 transition-colors text-sm"
            >
              Email Support
            </a>
            <a
              href="mailto:support@elevatechapel.online?subject=Community+Request"
              className="border border-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors text-sm"
            >
              Request a Feature
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
