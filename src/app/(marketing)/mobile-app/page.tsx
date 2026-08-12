import Link from 'next/link'

const highlights = [
  { icon: '⚡', title: 'Instant load, every time', desc: 'Built for mobile from day one. Pages load in under a second, even on slow connections.' },
  { icon: '🔔', title: 'Daily reminders your way', desc: 'Morning devotional nudges, prayer times, and streak reminders — all fully customizable.' },
  { icon: '📶', title: 'Works offline', desc: 'Download devotionals, courses, and sermons. Your faith practice does not need a signal.' },
  { icon: '🌙', title: 'Dark mode & accessibility', desc: 'Night-mode for late prayers, adjustable text size, and screen-reader support throughout.' },
  { icon: '🔒', title: 'Privacy first', desc: 'All data encrypted. Biometric unlock. We never sell your spiritual data.' },
  { icon: '🌍', title: 'Multi-language', desc: 'Interface available in English, Spanish, Arabic, Hindi, Portuguese, and French.' },
]

export default function MobileAppPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-brand-900 to-purple-900 text-white py-24 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-white/10 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-wider uppercase">
              Mobile App
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Your faith community, in your pocket
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Devotionals at sunrise. Prayer at midday. Sermons on your commute. Elevate Chapel is designed for the rhythms of a real spiritual life.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#coming-soon"
                className="flex items-center gap-3 bg-white text-gray-900 font-bold px-6 py-3.5 rounded-2xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                <span className="text-2xl">🍎</span>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wide">Download on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </a>
              <a
                href="#coming-soon"
                className="flex items-center gap-3 bg-white text-gray-900 font-bold px-6 py-3.5 rounded-2xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                <span className="text-2xl">▶️</span>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wide">Get it on</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </a>
            </div>
            <p className="text-gray-500 text-xs mt-4">Native iOS & Android apps coming Q3 2025. Available now as a Progressive Web App.</p>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center">
            <div className="w-64 h-[520px] bg-gradient-to-b from-brand-800 to-slate-900 rounded-[3rem] border-4 border-white/20 shadow-2xl flex flex-col items-center justify-center p-6 relative">
              <div className="absolute top-4 w-20 h-1.5 bg-white/20 rounded-full" />
              <div className="text-6xl mb-4">✨</div>
              <div className="text-white font-bold text-lg text-center mb-2">Elevate Chapel</div>
              <div className="text-brand-300 text-xs text-center mb-6">Your Daily Spiritual Companion</div>
              <div className="w-full space-y-2">
                {['📖 Today\'s Devotional', '🙏 Prayer Journal', '👥 Community', '🎓 Learn'].map((item) => (
                  <div key={item} className="bg-white/10 rounded-xl px-3 py-2.5 text-xs text-white font-medium">{item}</div>
                ))}
              </div>
              <div className="absolute bottom-4 flex gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/30'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PWA notice */}
      <div id="coming-soon" className="bg-amber-50 border-b border-amber-100 py-4 px-4 text-center">
        <p className="text-sm text-amber-800">
          <strong>Native apps launching Q3 2025.</strong> Right now, add Elevate Chapel to your home screen from your browser for a full app-like experience.
          {' '}<a href="/home" className="text-amber-700 underline font-semibold">Open the Web App →</a>
        </p>
      </div>

      {/* Highlights */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Built for real life</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Spiritual practice happens in stolen moments — on the bus, in a waiting room, before the kids wake up. We designed for that.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <div key={h.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="text-3xl mb-3">{h.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{h.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Available everywhere you are</h2>
          <div className="grid grid-cols-3 gap-6 mt-10">
            {[
              { icon: '📱', label: 'iOS', note: 'iPhone & iPad — Q3 2025' },
              { icon: '🤖', label: 'Android', note: 'All Android devices — Q3 2025' },
              { icon: '🌐', label: 'Web', note: 'Any browser — available now' },
            ].map(({ icon, label, note }) => (
              <div key={label} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-3">{icon}</div>
                <div className="font-bold text-gray-900">{label}</div>
                <div className="text-xs text-gray-400 mt-1">{note}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-brand-50 rounded-2xl p-6 border border-brand-100">
            <h3 className="font-bold text-brand-900 mb-2">Add to Home Screen — It's Instant</h3>
            <p className="text-sm text-brand-700">Visit Elevate Chapel in Safari or Chrome, tap the share icon, and choose "Add to Home Screen." You'll get push notifications, offline access, and a native-feeling experience — right now.</p>
            <Link href="/home" className="inline-block mt-4 bg-brand-600 text-white font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-brand-700 transition-colors">
              Open Web App →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-slate-900 text-white text-center">
        <h2 className="text-3xl font-extrabold mb-4">Start today — no download required</h2>
        <p className="text-gray-400 mb-8">The full Elevate Chapel experience is available right now in your browser.</p>
        <Link href="/home" className="inline-block bg-brand-600 text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-brand-700 transition-colors shadow-lg">
          Open Elevate Chapel →
        </Link>
      </section>
    </div>
  )
}
