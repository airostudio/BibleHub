'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, BookOpen, Users, Heart, HandHeart, Sparkles } from 'lucide-react'
import { clsx } from 'clsx'

const tabs = [
  { href: '/home', label: 'Home', icon: Home },
  { href: '/pray', label: 'Pray', icon: Heart },
  { href: '/companion', label: 'Guide', icon: Sparkles },
  { href: '/learn', label: 'Learn', icon: BookOpen },
  { href: '/community', label: 'Community', icon: Users },
  { href: '/give', label: 'Give', icon: HandHeart },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 safe-bottom">
      <div className="max-w-lg mx-auto flex">
        {tabs.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(href + '/')
          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                'flex-1 flex flex-col items-center justify-center py-2 gap-0.5 transition-colors duration-150',
                active
                  ? 'text-brand-600'
                  : 'text-gray-400 hover:text-gray-600'
              )}
            >
              <Icon
                size={22}
                className={clsx(
                  'transition-transform duration-150',
                  active && 'scale-110'
                )}
                strokeWidth={active ? 2.2 : 1.8}
              />
              <span
                className={clsx(
                  'text-[10px] font-medium tracking-wide',
                  active ? 'text-brand-600' : 'text-gray-400'
                )}
              >
                {label}
              </span>
              {active && (
                <span className="absolute bottom-0 w-8 h-0.5 bg-brand-600 rounded-full" />
              )}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
