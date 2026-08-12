import Link from 'next/link'

const values = [
  { icon: '🕊️', title: 'Respect for all traditions', desc: 'We serve Christians, Jews, Muslims, Hindus, Buddhists, and spiritual seekers of every background. No tradition is more welcome than another.' },
  { icon: '🔒', title: 'Privacy as a sacred trust', desc: 'Your spiritual life is intimate. We encrypt everything, sell nothing, and will never use your faith data for advertising.' },
  { icon: '❤️', title: 'Community over clicks', desc: 'We measure success by depth of connection — answered prayers, completed courses, lives changed — not by engagement metrics.' },
  { icon: '🌱', title: 'Growth, not perfection', desc: 'We believe spiritual life is a journey, not a destination. Our platform celebrates progress, not performance.' },
  { icon: '🤝', title: 'Radical transparency', desc: 'From our donation fee structure to our AI prompts, we publish what we are doing and why. No black boxes.' },
  { icon: '✨', title: 'Technology in service of spirit', desc: 'AI and code are tools — not the point. Every feature exists only to help people show up more fully to their faith.' },
]

const team = [
  { name: 'Miriam Asante', role: 'Co-Founder & CEO', tradition: 'Interfaith · Theology, Harvard', initials: 'MA', color: 'from-brand-500 to-purple-500' },
  { name: 'Daniel Yosef', role: 'Co-Founder & CTO', tradition: 'Jewish · Computer Science, MIT', initials: 'DY', color: 'from-emerald-500 to-teal-500' },
  { name: 'Fatima Al-Rashid', role: 'Head of Content', tradition: 'Muslim · Islamic Studies, Georgetown', initials: 'FA', color: 'from-amber-500 to-orange-500' },
  { name: 'Priya Sharma', role: 'Head of Product', tradition: 'Hindu · Human-Computer Interaction, Stanford', initials: 'PS', color: 'from-rose-500 to-pink-500' },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-900 to-brand-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-white/10 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-wider uppercase">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Built by people of faith, for people of faith
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Elevate Chapel began with a simple observation: faith communities were scattered across disconnected apps, chat groups, and social feeds. We believed something better was possible.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-5xl mb-6">🌍</div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              To make it easier for every person — regardless of tradition, background, or belief — to show up consistently to their spiritual life, and to do it in genuine community with others.
            </p>
          </div>
          <div className="bg-brand-50 rounded-2xl p-8 border border-brand-100">
            <p className="text-brand-900 text-base leading-relaxed italic">
              "We are not building a religion app. We are building the infrastructure for spiritual growth — the daily practices, the community ties, the learning and giving that, taken together, shape a life of meaning. And we are doing it in a way that respects the deep differences between traditions while honoring what connects all seekers: the longing to live more fully."
            </p>
            <p className="text-brand-600 text-sm font-semibold mt-4">— Miriam Asante, Co-Founder & CEO</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">What we believe</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Our values are not aspirational. They are operating principles we hold ourselves accountable to every day.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Our team</h2>
            <p className="text-gray-500">Founded by practitioners from four faith traditions. Advised by theologians, chaplains, and community leaders worldwide.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {team.map(({ name, role, tradition, initials, color }) => (
              <div key={name} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                  {initials}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{name}</div>
                  <div className="text-sm text-gray-500">{role}</div>
                  <div className="text-xs text-gray-400 mt-1">{tradition}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-8">
            Plus 12 more engineers, designers, theologians, and community builders — across 8 countries.
          </p>
        </div>
      </section>

      {/* Traditions */}
      <section className="py-20 px-4 bg-brand-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4">Home for every tradition</h2>
          <p className="text-brand-300 mb-10 text-lg">We believe deep spiritual life is available to every person. Our content is developed with tradition-specific advisors to ensure it is authentic, not generic.</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { flag: '✝️', label: 'Christian' },
              { flag: '✡️', label: 'Jewish' },
              { flag: '☪️', label: 'Muslim' },
              { flag: '🕉️', label: 'Hindu' },
              { flag: '☸️', label: 'Buddhist' },
              { flag: '🌿', label: 'Interfaith' },
            ].map(({ flag, label }) => (
              <div key={label} className="text-center">
                <div className="text-4xl mb-2">{flag}</div>
                <div className="text-xs text-brand-300 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-white text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Come as you are</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">Wherever you are in your journey — curious, committed, or returning after a long time away — you are welcome here.</p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/home" className="bg-brand-600 text-white font-bold px-8 py-4 rounded-full hover:bg-brand-700 transition-colors">
            Get Started Free
          </Link>
          <Link href="/careers" className="border border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-full hover:bg-gray-50 transition-colors">
            Join Our Team
          </Link>
        </div>
      </section>
    </div>
  )
}
