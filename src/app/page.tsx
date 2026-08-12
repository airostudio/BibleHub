import Link from 'next/link'

const features = [
  {
    icon: '☀️',
    title: 'Daily Spiritual Practice',
    desc: 'Start every day with a devotional, scripture reading, and prayer prompt — tailored to where you are in your journey.',
  },
  {
    icon: '🙏',
    title: 'Prayer Journal',
    desc: 'Write personal prayers, share prayer requests with your community, and celebrate when prayers are answered.',
  },
  {
    icon: '📖',
    title: 'Courses & Study Plans',
    desc: 'Deepen your understanding with structured courses, study plans, and sermon libraries from trusted teachers.',
  },
  {
    icon: '👥',
    title: 'Faith Communities',
    desc: 'Join small groups, attend live study sessions, and connect with people who share your values and questions.',
  },
  {
    icon: '🌍',
    title: 'Give & Make an Impact',
    desc: 'Support causes, local communities, and ministries you love — with full transparency on every donation.',
  },
  {
    icon: '🎯',
    title: 'Spiritual Growth Tracking',
    desc: 'Build daily streaks, celebrate milestones, and stay consistent with gentle reminders and progress insights.',
  },
]

const steps = [
  {
    step: '01',
    title: 'Choose your path',
    desc: 'Whether you\'re new to faith or a longtime practitioner, set your spiritual goals and we\'ll shape your daily experience around them.',
  },
  {
    step: '02',
    title: 'Grow every day',
    desc: 'Read, reflect, pray, and learn — a few minutes each morning is enough to build something lasting over time.',
  },
  {
    step: '03',
    title: 'Grow together',
    desc: 'Join a community, share what God is doing in your life, give generously, and cheer others on.',
  },
]

const testimonials = [
  {
    quote:
      "This is the first spiritual app I've kept using beyond a week. It feels like it was built by people who actually care about faith, not just engagement metrics.",
    name: 'Marcus O.',
    role: 'Teacher, Lagos',
    initials: 'MO',
    color: 'bg-indigo-100 text-indigo-700',
  },
  {
    quote:
      "Our small group uses Elevate Chapel together. The shared prayer wall alone has transformed how we pray for each other between Sunday meetings.",
    name: 'Rachel & Tom K.',
    role: 'Couple, Nashville',
    initials: 'RK',
    color: 'bg-amber-100 text-amber-700',
  },
  {
    quote:
      "I appreciate that it doesn't try to replace my faith tradition — it supports it. The courses are genuinely good, not watered down.",
    name: 'Priya S.',
    role: 'Doctor, Toronto',
    initials: 'PS',
    color: 'bg-emerald-100 text-emerald-700',
  },
]

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Everything you need to build a daily spiritual practice.',
    highlight: false,
    cta: 'Start free',
    features: [
      'Daily devotionals & reflections',
      'Prayer journal (private)',
      'Basic community access',
      'Up to 2 active study plans',
      'Community prayer requests',
    ],
  },
  {
    name: 'Individual',
    price: '$9',
    period: 'per month',
    description: 'Unlock the full library for your personal growth.',
    highlight: true,
    cta: 'Start 7-day free trial',
    features: [
      'Everything in Free',
      'Full course library (50+ courses)',
      'Complete sermon archive',
      'Audio & video content',
      'Private groups',
      'Downloadable guides',
      'Ad-free experience',
    ],
  },
  {
    name: 'Family',
    price: '$19',
    period: 'per month',
    description: 'One plan for your whole household, including kids.',
    highlight: false,
    cta: 'Start 7-day free trial',
    features: [
      'Everything in Individual',
      'Up to 6 family members',
      "Children's & youth content",
      'Family devotional plans',
      'Parental controls',
      'Shared family prayer wall',
    ],
  },
]

const faqs = [
  {
    q: 'Is this platform for one religion, or all faiths?',
    a: 'Elevate Chapel serves people across faith traditions — Christian, Jewish, Muslim, and people on spiritual journeys without a specific label. While much of our current content is rooted in Christian tradition, we are actively expanding to serve more communities.',
  },
  {
    q: 'Can my church or ministry use Elevate Chapel?',
    a: 'Yes — we offer an Organization plan for churches, mosques, temples, and ministries. It includes member management, donation tools, announcement boards, livestream support, and a custom community space.',
  },
  {
    q: 'How does donation transparency work?',
    a: 'Every campaign shows exactly where the money goes. We display our platform fee (5%) on all transactions, and organizations must verify their 501(c)(3) status or equivalent before receiving donations.',
  },
  {
    q: "Are my prayers and journal entries private?",
    a: 'Your personal prayer journal is completely private — only you can see it. Prayer requests you choose to share are visible to your community only. We do not use your spiritual data for advertising.',
  },
  {
    q: 'What makes this different from YouVersion or other Bible apps?',
    a: "Elevate Chapel is a full spiritual community platform, not just a reading app. We combine daily content, genuine community, premium learning, and giving tools in one place — designed for depth, not just daily engagement.",
  },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
              <span className="text-white text-sm font-bold">E</span>
            </div>
            <span className="text-lg font-bold text-gray-900">Elevate Chapel</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">How it works</a>
            <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#faq" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/home" className="text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors">
              Sign in
            </Link>
            <Link
              href="/home"
              className="bg-brand-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-brand-700 transition-colors"
            >
              Get started free
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient text-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 py-24 md:py-36 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 text-sm font-medium text-indigo-200">
            <span className="text-gold-400">✦</span>
            Trusted by 2 million people on their faith journey
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-balance">
            Your Daily{' '}
            <span className="text-gold-400">Spiritual</span>{' '}
            Companion
          </h1>
          <p className="text-xl md:text-2xl text-indigo-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Devotionals, prayer, community, learning, and giving — all in one place.
            Built to help you grow in faith, not to exploit it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/home"
              className="bg-gold-500 text-brand-950 px-8 py-4 rounded-full text-lg font-bold hover:bg-gold-400 transition-colors shadow-lg shadow-gold-500/25"
            >
              Start Your Journey — Free
            </Link>
            <a
              href="#how-it-works"
              className="border border-white/30 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-colors"
            >
              See how it works
            </a>
          </div>
          <p className="mt-6 text-sm text-indigo-300">No credit card required · Cancel anytime</p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-950 text-white py-10">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-3 gap-4 text-center">
          {[
            { value: '2M+', label: 'Active members' },
            { value: '50K+', label: 'Faith communities' },
            { value: '500K+', label: 'Prayers answered' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl md:text-4xl font-extrabold text-gold-400">{value}</div>
              <div className="text-sm text-indigo-300 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything for your spiritual life</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From your first morning prayer to giving to a cause you love — Elevate Chapel is built for the full arc of faith.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple to start. Meaningful every day.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-50 text-brand-600 text-xl font-bold mb-5">
                  {step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview */}
      <section className="py-24 bg-gradient-to-br from-brand-50 to-indigo-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Designed for your <span className="text-brand-600">daily rhythm</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Open the app each morning to a fresh devotional, your prayer journal, your study plan progress, and
                community updates — all in under five minutes.
              </p>
              <ul className="space-y-4">
                {[
                  '📿 Morning devotional with scripture and reflection',
                  '🔥 Streak tracking to build daily consistency',
                  '💬 Live prayer circles and group discussions',
                  '🎓 Courses for every season of life',
                  '💝 Transparent, joy-driven giving',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <span className="text-lg leading-6">{item.slice(0, 2)}</span>
                    <span>{item.slice(3)}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/home"
                className="inline-block mt-8 bg-brand-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-700 transition-colors"
              >
                Explore the app →
              </Link>
            </div>
            {/* Mock phone UI */}
            <div className="relative flex justify-center">
              <div className="relative w-64 bg-white rounded-[2.5rem] shadow-2xl border-4 border-gray-200 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-200 rounded-b-xl z-10" />
                <div className="pt-8 pb-16">
                  <div className="bg-gradient-to-br from-brand-700 to-brand-500 text-white p-4">
                    <div className="text-xs text-brand-200 mb-1">Monday, April 28</div>
                    <div className="text-sm font-semibold">Good morning, Sarah ☀️</div>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-xs text-gold-300">🔥 12-day streak</span>
                    </div>
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="bg-indigo-50 rounded-xl p-3">
                      <div className="text-[10px] text-brand-600 font-semibold uppercase tracking-wide">Today's Devotional</div>
                      <div className="text-xs font-medium text-gray-900 mt-0.5">Finding Peace in Uncertainty</div>
                      <div className="text-[10px] text-gray-500 mt-0.5">Philippians 4:6–7 · 3 min read</div>
                    </div>
                    <div className="bg-amber-50 rounded-xl p-3">
                      <div className="text-[10px] text-amber-600 font-semibold uppercase tracking-wide">Study Plan</div>
                      <div className="text-xs font-medium text-gray-900 mt-0.5">30 Days of Gratitude</div>
                      <div className="h-1.5 bg-gray-200 rounded-full mt-1.5">
                        <div className="h-full w-2/5 bg-amber-500 rounded-full" />
                      </div>
                      <div className="text-[10px] text-gray-500 mt-0.5">Day 12 of 30</div>
                    </div>
                    <div className="bg-emerald-50 rounded-xl p-3">
                      <div className="text-[10px] text-emerald-600 font-semibold uppercase tracking-wide">Community</div>
                      <div className="text-xs text-gray-700 mt-0.5">47 people praying in Morning Circle</div>
                    </div>
                  </div>
                </div>
                {/* Bottom nav mock */}
                <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around py-2">
                  {['🏠','🙏','📖','👥','💝'].map((icon) => (
                    <span key={icon} className="text-base">{icon}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What people are saying</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ quote, name, role, initials, color }) => (
              <div
                key={name}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-4 text-gray-300">"</div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{quote}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${color}`}>
                    {initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{name}</div>
                    <div className="text-xs text-gray-500">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Clear, honest pricing</h2>
            <p className="text-lg text-gray-600">
              Start free. Upgrade when you want more. No guilt trips.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map(({ name, price, period, description, highlight, cta, features }) => (
              <div
                key={name}
                className={`rounded-2xl p-6 border ${
                  highlight
                    ? 'bg-brand-600 text-white border-brand-600 shadow-xl shadow-brand-500/25 scale-105'
                    : 'bg-white text-gray-900 border-gray-200'
                }`}
              >
                {highlight && (
                  <div className="inline-block bg-gold-400 text-brand-950 text-xs font-bold px-3 py-1 rounded-full mb-4">
                    Most popular
                  </div>
                )}
                <div className="mb-4">
                  <div className={`text-sm font-semibold ${highlight ? 'text-brand-200' : 'text-gray-500'}`}>{name}</div>
                  <div className="flex items-end gap-1 mt-1">
                    <span className="text-4xl font-extrabold">{price}</span>
                    <span className={`text-sm pb-1 ${highlight ? 'text-brand-200' : 'text-gray-500'}`}>/{period}</span>
                  </div>
                  <p className={`text-sm mt-2 ${highlight ? 'text-brand-200' : 'text-gray-600'}`}>{description}</p>
                </div>
                <Link
                  href="/home"
                  className={`block w-full text-center py-3 rounded-full font-semibold text-sm mb-6 transition-colors ${
                    highlight
                      ? 'bg-white text-brand-600 hover:bg-brand-50'
                      : 'bg-brand-600 text-white hover:bg-brand-700'
                  }`}
                >
                  {cta}
                </Link>
                <ul className="space-y-2.5">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <span className={highlight ? 'text-brand-200' : 'text-emerald-500'}>✓</span>
                      <span className={highlight ? 'text-white' : 'text-gray-700'}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            Organizations and churches?{' '}
            <a href="#" className="text-brand-600 hover:underline">See organization plans →</a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{q}</h3>
                <p className="text-gray-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-hero-gradient text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Start your journey today
          </h2>
          <p className="text-xl text-indigo-200 mb-10">
            Join millions of people building a spiritual life that actually fits their real life.
          </p>
          <Link
            href="/home"
            className="inline-block bg-gold-500 text-brand-950 px-10 py-4 rounded-full text-lg font-bold hover:bg-gold-400 transition-colors shadow-lg"
          >
            Get started free — no card needed
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">E</span>
                </div>
                <span className="text-white font-bold">Elevate Chapel</span>
              </div>
              <p className="text-sm leading-relaxed mb-3">
                A daily spiritual companion for learning, prayer, community, and giving.
              </p>
              <a
                href="mailto:info@elevatechapel.online"
                className="text-sm text-brand-400 hover:text-brand-300 transition-colors"
              >
                info@elevatechapel.online
              </a>
            </div>
            {[
              {
                title: 'Platform',
                links: [
                  { label: 'Features', href: '/features' },
                  { label: 'Pricing', href: '/pricing' },
                  { label: 'For Organizations', href: '/for-organizations' },
                  { label: 'Mobile App', href: '/mobile-app' },
                ],
              },
              {
                title: 'Company',
                links: [
                  { label: 'About', href: '/about' },
                  { label: 'Blog', href: '/blog' },
                  { label: 'Careers', href: '/careers' },
                  { label: 'Press', href: '/press' },
                ],
              },
              {
                title: 'Support',
                links: [
                  { label: 'Help Center', href: '/help' },
                  { label: 'Community Guidelines', href: '/community-guidelines' },
                  { label: 'Privacy Policy', href: '/privacy' },
                  { label: 'Terms of Service', href: '/terms' },
                ],
              },
            ].map(({ title, links }) => (
              <div key={title}>
                <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
                <ul className="space-y-2">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <a href={href} className="text-sm hover:text-white transition-colors">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© 2025 Elevate Chapel App. Built with care for faith communities worldwide.</p>
            <p className="text-xs text-gray-600">
              We do not sell your spiritual data. Ever.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
