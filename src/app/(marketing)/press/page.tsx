import Link from 'next/link'

const coverage = [
  {
    outlet: 'TechCrunch',
    headline: '"Elevate Chapel wants to be the spiritual home for the multi-faith generation"',
    date: 'June 2025',
    emoji: '🔵',
  },
  {
    outlet: 'Christianity Today',
    headline: '"An app that takes faith seriously — and does not try to gamify it"',
    date: 'May 2025',
    emoji: '✝️',
  },
  {
    outlet: 'Islamic Finance News',
    headline: '"Halal fintech meets faith: how Elevate Chapel handles giving with full transparency"',
    date: 'April 2025',
    emoji: '☪️',
  },
  {
    outlet: 'Fast Company',
    headline: '"The AI is designed not to pretend to be God — and that is the whole point"',
    date: 'March 2025',
    emoji: '⚡',
  },
  {
    outlet: 'The Times of India',
    headline: '"Indian-American founders bring Hindu and Buddhist traditions to the Elevate Chapel platform"',
    date: 'February 2025',
    emoji: '🕉️',
  },
]

const facts = [
  { label: 'Founded', value: 'January 2024' },
  { label: 'Headquarters', value: 'Remote-first (incorporated in Delaware)' },
  { label: 'Team size', value: '45 people across 8 countries' },
  { label: 'Users', value: '47,000+ registered accounts' },
  { label: 'Organizations', value: '2,400+ churches, mosques & temples' },
  { label: 'Faith traditions', value: 'Christianity, Judaism, Islam, Hinduism, Buddhism, Interfaith' },
  { label: 'Funding', value: 'Seed round — undisclosed' },
  { label: 'Contact', value: 'press@elevatechapel.online' },
]

export default function PressPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-white/10 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-wider uppercase">
            Press
          </span>
          <h1 className="text-4xl font-extrabold mb-4">Media &amp; Press</h1>
          <p className="text-gray-400 text-lg">Resources for journalists, bloggers, and researchers covering Elevate Chapel.</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Press contact */}
        <div className="bg-brand-50 border border-brand-100 rounded-2xl p-8 mb-14 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Press Contact</h2>
          <p className="text-gray-500 text-sm mb-4">For interviews, fact-checking, embargoed announcements, or press kit requests:</p>
          <a href="mailto:press@elevatechapel.online" className="text-brand-600 font-bold text-lg hover:text-brand-700 transition-colors">
            press@elevatechapel.online
          </a>
          <p className="text-gray-400 text-xs mt-2">We typically respond within 24 hours on business days.</p>
        </div>

        {/* Company facts */}
        <div className="mb-14">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Company Facts</h2>
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm divide-y divide-gray-50">
            {facts.map(({ label, value }) => (
              <div key={label} className="flex px-6 py-4 gap-6">
                <div className="w-40 text-sm font-semibold text-gray-500 flex-shrink-0">{label}</div>
                <div className="text-sm text-gray-900">{value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Press kit */}
        <div className="mb-14">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Press Kit</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: '🖼️', label: 'Logo Package', desc: 'SVG, PNG, light and dark variants' },
              { icon: '📸', label: 'Product Screenshots', desc: 'High-res app screenshots for all platforms' },
              { icon: '👤', label: 'Founder Photos', desc: 'Professional headshots of the founding team' },
            ].map(({ icon, label, desc }) => (
              <div key={label} className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center gap-4 hover:border-brand-300 transition-colors cursor-pointer group">
                <div className="text-3xl">{icon}</div>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-brand-600 transition-colors">{label}</div>
                  <div className="text-xs text-gray-400">{desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">
            Full press kit available via email request to{' '}
            <a href="mailto:press@elevatechapel.online" className="text-brand-600 hover:underline">press@elevatechapel.online</a>
          </p>
        </div>

        {/* Coverage */}
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Recent Coverage</h2>
          <div className="space-y-4">
            {coverage.map(({ outlet, headline, date, emoji }) => (
              <div key={headline} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow cursor-pointer">
                <div className="text-3xl flex-shrink-0">{emoji}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-gray-900">{outlet}</span>
                    <span className="text-xs text-gray-400">{date}</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-snug">{headline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
