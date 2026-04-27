import Navigation from '@/components/Navigation'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-lg mx-auto pb-20">
        {children}
      </main>
      <Navigation />
    </div>
  )
}
