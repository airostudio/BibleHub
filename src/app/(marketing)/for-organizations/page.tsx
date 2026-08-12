import Link from 'next/link'

const features = [
  { icon: '👥', title: 'Member Management', desc: 'Add, organize, and communicate with your entire congregation in one place. Segment by group, interest, or life stage.' },
  { icon: '💰', title: 'Donation & Tithe Dashboard', desc: 'Accept online tithes, track campaigns, generate giving statements, and see real-time fundraising progress.' },
  { icon: '📢', title: 'Announcements & Bulletins', desc: 'Publish weekly bulletins, announcements, and event calendars that reach every member instantly on their phone.' },
  { icon: '📡', title: 'Livestream Integration', desc: 'Embed your live service or link your YouTube / Vimeo stream. Members can watch, pray together, and give during the broadcast.' },
  { icon: '🏠', title: 'Branded Community Space', desc: 'Your organization gets a custom-branded home inside the app — your name, colors, logo, and a dedicated member feed.' },
  { icon: '📊', title: 'Analytics & Engagement', desc: 'See who is engaged, track giving trends, and understand how your community is growing week over week.' },
]

const testimonials = [
  {
    quote: 'Elevate Chapel replaced four separate apps we were using. Our members are more engaged than ever — especially the younger ones.',
    name: 'Pastor David Kim',
    org: 'New Life Fellowship, Austin TX',
    initials: 'DK',
    color: 'bg-brand-500',
  },
  {
    quote: 'We launched our annual campaign through Elevate Chapel and hit our goal two weeks early. The transparency tools built trust with our donors.',
    name: 'Imam Tariq Hassan',
    org: 'Crescent Community Mosque, Detroit MI',
    initials: 'TH',
    color: 'bg-emerald-500',
  },
  {
    quote: 'The Hebrew study courses and prayer circles have connected our congregation in ways we could not have imagined before.',
    name: 'Rabbi Sarah Goldstein',
    org: 'Temple Beth Shalom, Chicago IL',
    initials: 'SG',
    color: 'bg-amber-500',
  },
]

export default function ForOrganizationsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-brand-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/10 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-wider uppercase">
            For Organizations
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Built for churches, mosques, temples &amp; ministries
          </h1>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Elevate Chapel gives your faith community a single home for worship, connection, giving, and growth — without the patchwork of separate tools.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:orgs@elevatechapel.online?subject=Organization Plan Inquiry"
              className="bg-white text-slate-900 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              Book a Free Demo
            </a>
            <Link href="/pricing" className="border border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <div className="bg-brand-600 py-5 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-white text-center">
          {[['2,400+', 'Faith organizations'], ['98%', 'Satisfaction rate'], ['47k+', 'Active members'], ['Multi-faith', 'Traditions served']].map(([val, label]) => (
            <div key={label}>
              <div className="text-2xl font-extrabold">{val}</div>
              <div className="text-brand-200 text-xs font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Everything your community needs</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Designed with input from pastors, imams, rabbis, and ministry leaders across dozens of traditions.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing callout */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Transparent, size-based pricing</h2>
          <p className="text-gray-500 mb-10 text-lg">Organization pricing scales with your community size. No per-seat surprises. Every plan includes a 30-day free trial.</p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              { size: 'Starter', members: 'Up to 150 members', price: '$49/mo', features: ['All core features', 'Member management', 'Donation tools', 'Email support'] },
              { size: 'Growth', members: 'Up to 750 members', price: '$149/mo', features: ['Everything in Starter', 'Advanced analytics', 'Livestream tools', 'Priority support'] },
              { size: 'Community', members: 'Unlimited members', price: 'Custom', features: ['Everything in Growth', 'Branded mobile app', 'API access', 'Dedicated account manager'] },
            ].map(({ size, members, price, features }) => (
              <div key={size} className="border border-gray-200 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-1">{size}</h3>
                <p className="text-xs text-gray-400 mb-3">{members}</p>
                <div className="text-2xl font-extrabold text-brand-700 mb-4">{price}</div>
                <ul className="space-y-2">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-emerald-500">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-12">Trusted across traditions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ quote, name, org, initials, color }) => (
              <div key={name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <p className="text-sm text-gray-600 italic leading-relaxed mb-5">"{quote}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{name}</div>
                    <div className="text-xs text-gray-400">{org}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-slate-900 text-white text-center">
        <h2 className="text-3xl font-extrabold mb-4">Ready to bring your community together?</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">Book a free 30-minute demo and we will show you how Elevate Chapel works for your tradition and size.</p>
        <a
          href="mailto:orgs@elevatechapel.online?subject=Demo Request"
          className="inline-block bg-brand-600 text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-brand-700 transition-colors shadow-lg"
        >
          Book a Free Demo →
        </a>
      </section>
    </div>
  )
}
