import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Elevate Chapel App — Your Daily Spiritual Companion',
  description:
    'Deepen your faith, grow with community, and live your spiritual values every single day. Daily devotionals, prayer, courses, and giving — all in one place.',
  keywords: ['faith', 'spiritual growth', 'devotionals', 'prayer', 'community', 'Bible study'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
