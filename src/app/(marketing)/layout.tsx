import Link from 'next/link'

const footerCols = [
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
]

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top nav */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-gray-900">
            <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-600 to-purple-600 flex items-center justify-center text-white text-sm font-bold">E</span>
            Elevate Chapel
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link>
            <Link href="/for-organizations" className="text-gray-600 hover:text-gray-900 transition-colors">For Organizations</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/home" className="hidden md:block text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Log in
            </Link>
            <Link
              href="/home"
              className="bg-brand-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-brand-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Page content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-600 to-purple-600 flex items-center justify-center text-white text-sm font-bold">E</span>
                <span className="text-white font-bold">Elevate Chapel</span>
              </Link>
              <p className="text-sm leading-relaxed">
                Your daily spiritual companion — devotionals, prayer, community, and growth, all in one place.
              </p>
              <a href="mailto:info@elevatechapel.online" className="text-sm text-brand-400 hover:text-brand-300 mt-3 inline-block transition-colors">
                info@elevatechapel.online
              </a>
            </div>
            {footerCols.map(({ title, links }) => (
              <div key={title}>
                <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
                <ul className="space-y-2.5">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href} className="text-sm hover:text-white transition-colors">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© 2025 Elevate Chapel App. Built with care for faith communities worldwide.</p>
            <p className="text-xs text-gray-600">We do not sell your spiritual data. Ever.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
