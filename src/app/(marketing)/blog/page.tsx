import Link from 'next/link'

const featured = {
  title: 'The Neuroscience of Prayer: What Happens to Your Brain When You Pray',
  category: 'Faith & Science',
  author: 'Dr. Hannah Stein',
  date: 'July 28, 2025',
  readTime: '8 min read',
  excerpt: 'A growing body of research shows that consistent prayer practice changes the brain in measurable ways. We spoke with neuroscientists and theologians to understand what that means for daily spiritual practice.',
  emoji: '🧠',
}

const posts = [
  {
    title: 'How to Build a Prayer Habit That Actually Sticks',
    category: 'Spiritual Practice',
    author: 'Sister Maria Delgado',
    date: 'July 21, 2025',
    readTime: '5 min',
    excerpt: 'The most common reason prayer habits fail is not lack of devotion — it is lack of design. Here is what the science of habit formation says about making prayer sustainable.',
    emoji: '🙏',
  },
  {
    title: 'Ramadan in the Digital Age: Building Community When You Are Far from Home',
    category: 'Community',
    author: 'Imam Tariq Hassan',
    date: 'July 14, 2025',
    readTime: '6 min',
    excerpt: 'For millions of Muslims living in diaspora, Ramadan is a season of longing. Technology can bridge the distance — if we use it intentionally.',
    emoji: '🌙',
  },
  {
    title: 'Why Grief Is a Spiritual Practice',
    category: 'Healing',
    author: 'Chaplain Grace Nwosu',
    date: 'July 7, 2025',
    readTime: '7 min',
    excerpt: 'Across traditions, grief has been called a "dark gift." Here is what faith communities have known for millennia about walking through loss.',
    emoji: '💛',
  },
  {
    title: 'The Psalms as Emotional Intelligence Training',
    category: 'Scripture',
    author: 'Rabbi Sarah Goldstein',
    date: 'June 30, 2025',
    readTime: '5 min',
    excerpt: 'The book of Psalms contains more emotional range than almost any other text in the ancient world. That is not an accident — it is a feature.',
    emoji: '📜',
  },
  {
    title: 'What We Get Wrong About Generosity',
    category: 'Giving',
    author: 'Pastor David Kim',
    date: 'June 23, 2025',
    readTime: '4 min',
    excerpt: 'Generosity is not about amounts. According to research — and ancient wisdom — it is about posture. Here is the difference.',
    emoji: '💝',
  },
  {
    title: 'Raising Spiritually Curious Kids in a Skeptical World',
    category: 'Family',
    author: 'Mark & Tanya Brooks',
    date: 'June 16, 2025',
    readTime: '6 min',
    excerpt: 'Children ask better theological questions than most adults. The challenge is not answering them — it is staying curious alongside them.',
    emoji: '👨‍👩‍👧',
  },
]

const categories = ['All', 'Spiritual Practice', 'Community', 'Scripture', 'Healing', 'Family', 'Faith & Science', 'Giving', 'Leadership']

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-white/10 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-wider uppercase">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Stories, wisdom, and practice</h1>
          <p className="text-gray-400 text-lg">Reflections on faith, community, and what it means to live a spiritually intentional life — from teachers, scholars, and practitioners across traditions.</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Featured */}
        <div className="mb-14">
          <div className="bg-gradient-to-br from-brand-50 to-purple-50 rounded-3xl p-8 border border-brand-100 flex flex-col md:flex-row gap-8 items-center">
            <div className="text-8xl flex-shrink-0">{featured.emoji}</div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-brand-100 text-brand-700 text-xs font-semibold px-2.5 py-1 rounded-full">{featured.category}</span>
                <span className="text-xs text-gray-400">Featured</span>
              </div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3 leading-tight">{featured.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{featured.excerpt}</p>
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <span>{featured.author}</span>
                <span>·</span>
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Category filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-10 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                cat === 'All' ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Post grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group cursor-pointer">
              <div className="bg-gray-50 h-32 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                {post.emoji}
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-gray-100 text-gray-600 text-[10px] font-semibold px-2 py-0.5 rounded-full">{post.category}</span>
                  <span className="text-[10px] text-gray-400">{post.readTime}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 leading-snug text-sm">{post.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">{post.excerpt}</p>
                <div className="text-xs text-gray-400">
                  {post.author} · {post.date}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load more */}
        <div className="text-center mt-12">
          <button className="border border-gray-200 text-gray-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-50 transition-colors">
            Load more articles
          </button>
        </div>
      </div>

      {/* Newsletter */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-600 to-purple-600 text-white">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-extrabold mb-3">The Weekly Reflection</h2>
          <p className="text-brand-200 mb-6 text-sm">One article, one Scripture, one practice — delivered every Monday morning.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/20 text-white placeholder-white/50 border border-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white"
            />
            <button className="bg-white text-brand-700 font-bold px-5 py-3 rounded-xl hover:bg-brand-50 transition-colors text-sm">
              Subscribe
            </button>
          </div>
          <p className="text-brand-300 text-xs mt-3">No spam. Unsubscribe any time.</p>
        </div>
      </section>
    </div>
  )
}
