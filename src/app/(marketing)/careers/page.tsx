import Link from 'next/link'

const openRoles = [
  {
    title: 'Senior Full-Stack Engineer',
    team: 'Engineering',
    location: 'Remote (Global)',
    type: 'Full-time',
    desc: 'Build and scale the core platform. Owned features, high autonomy, and a team that cares deeply about what they are building.',
  },
  {
    title: 'AI & ML Engineer',
    team: 'Engineering',
    location: 'Remote (Global)',
    type: 'Full-time',
    desc: 'Work on the AI Spiritual Companion system — persona design, safety systems, streaming infrastructure, and prompt engineering at scale.',
  },
  {
    title: 'Head of Theological Content',
    team: 'Content',
    location: 'Remote (Global)',
    type: 'Full-time',
    desc: 'Lead a team of tradition-specific advisors and content creators. Ensure every devotional, course, and AI persona reflects authentic, respectful practice.',
  },
  {
    title: 'Community Manager',
    team: 'Community',
    location: 'Remote (Americas)',
    type: 'Full-time',
    desc: 'Own the health and growth of our online faith communities. Moderate, curate, and connect members across traditions and geographies.',
  },
  {
    title: 'Growth Marketing Manager',
    team: 'Marketing',
    location: 'Remote (Global)',
    type: 'Full-time',
    desc: 'Drive user acquisition and retention for a product people love. Data-driven with a sensitivity for the audience we serve.',
  },
  {
    title: 'Organization Sales Representative',
    team: 'Sales',
    location: 'Remote (North America)',
    type: 'Full-time',
    desc: 'Help churches, mosques, temples, and ministries discover and adopt Elevate Chapel. Consultative sales with a mission-driven approach.',
  },
]

const benefits = [
  { icon: '🌍', label: 'Remote-first', desc: 'Work from anywhere with a strong internet connection.' },
  { icon: '🏖️', label: 'Generous PTO', desc: 'Unlimited vacation, plus company closure during major religious holidays across traditions.' },
  { icon: '💙', label: 'Health & wellness', desc: 'Full medical, dental, and vision. Monthly wellness stipend.' },
  { icon: '📚', label: 'Learning budget', desc: '$2,000/year for courses, conferences, books, and continuing education.' },
  { icon: '🙏', label: 'Spiritual sabbatical', desc: 'Up to 2 weeks per year for retreats, pilgrimages, or faith-formation experiences.' },
  { icon: '💰', label: 'Competitive comp', desc: 'Market salary + equity. We compensate fairly regardless of location.' },
]

export default function CareersPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-slate-900 text-white py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-white/10 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-wider uppercase">
            Careers
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Build something that matters
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Join a team of engineers, theologians, designers, and community builders on a mission to make genuine spiritual growth more accessible to every person on earth.
          </p>
        </div>
      </section>

      {/* Why work here */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Why Elevate Chapel</h2>
              <div className="space-y-4 text-gray-600">
                <p>We are early enough that your work will directly shape the product and culture, but established enough that you will have resources and a real customer base to learn from.</p>
                <p>We are a multi-faith team by design — not as a diversity initiative, but because it is the only way to build something genuinely for everyone. You will work alongside people whose faith traditions and practices may be very different from your own.</p>
                <p>We do not move fast and break things. We move thoughtfully and build things that last — because the communities we serve deserve that.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '45+', label: 'Team members worldwide' },
                { val: '8', label: 'Countries represented' },
                { val: '4', label: 'Faith traditions on founding team' },
                { val: '98%', label: 'Employee satisfaction (2025 survey)' },
              ].map(({ val, label }) => (
                <div key={label} className="bg-brand-50 rounded-2xl p-5 border border-brand-100">
                  <div className="text-2xl font-extrabold text-brand-700">{val}</div>
                  <div className="text-xs text-gray-500 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-10">Benefits &amp; perks</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {benefits.map(({ icon, label, desc }) => (
              <div key={label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="text-2xl mb-2">{icon}</div>
                <div className="font-semibold text-gray-900 mb-1">{label}</div>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-10">Open positions</h2>
          <div className="space-y-4">
            {openRoles.map((role) => (
              <div key={role.title} className="border border-gray-200 rounded-2xl p-6 hover:border-brand-300 hover:shadow-sm transition-all group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="bg-brand-50 text-brand-700 text-xs font-semibold px-2 py-0.5 rounded-full">{role.team}</span>
                      <span className="text-xs text-gray-400">{role.location}</span>
                      <span className="text-xs text-gray-400">·</span>
                      <span className="text-xs text-gray-400">{role.type}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{role.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{role.desc}</p>
                  </div>
                  <a
                    href={`mailto:careers@elevatechapel.online?subject=Application: ${role.title}`}
                    className="flex-shrink-0 bg-brand-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-brand-700 transition-colors group-hover:shadow-md"
                  >
                    Apply →
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
            <p className="text-gray-700 font-medium mb-2">Do not see the right role?</p>
            <p className="text-sm text-gray-500 mb-4">We always want to meet extraordinary people. Send us a note and tell us what you bring.</p>
            <a
              href="mailto:careers@elevatechapel.online?subject=General Application"
              className="text-sm text-brand-600 font-semibold hover:text-brand-700 transition-colors"
            >
              careers@elevatechapel.online →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
