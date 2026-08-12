export default function CommunityGuidelinesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-5xl mb-4">🤝</div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">Community Guidelines</h1>
        <p className="text-gray-500">Effective January 1, 2025 · Last updated July 1, 2025</p>
      </div>

      <div className="prose prose-sm max-w-none space-y-10 text-gray-700">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Our Vision for Community</h2>
          <p className="leading-relaxed">
            Elevate Chapel is home to Christians, Jews, Muslims, Hindus, Buddhists, and spiritual seekers of every tradition and background. We believe genuine community requires both radical welcome and genuine accountability. These guidelines exist to protect the conditions that make deep spiritual connection possible.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Core Principles</h2>
          <div className="space-y-4">
            {[
              { title: '1. Respect across traditions', body: 'You may practice your faith deeply and share it openly. You may not demean, ridicule, or declare another tradition\'s beliefs false or inferior. Theological disagreement is welcome; contempt is not.' },
              { title: '2. No proselytizing', body: 'Sharing your faith journey is encouraged. Pressuring, manipulating, or persistently recruiting others to your tradition — especially after a polite decline — is not permitted.' },
              { title: '3. Protect vulnerable people', body: 'Elevate Chapel communities may include people in grief, spiritual crisis, or facing serious mental health challenges. Engage with compassion. If someone expresses suicidal ideation or acute crisis, direct them to the 988 Suicide & Crisis Lifeline or local emergency services.' },
              { title: '4. No harassment or hate', body: 'Harassment based on race, religion, gender, sexuality, nationality, disability, or any protected characteristic is prohibited and will result in immediate account suspension. This includes private messages.' },
              { title: '5. No spam or solicitation', body: 'Commercial promotion, unsolicited fundraising, and spam are prohibited. Organizations using Elevate Chapel for legitimate fundraising must do so through the verified Giving tools.' },
              { title: '6. Authentic identity', body: 'You must use a real identity or consistent pseudonym. Impersonating another person, religious figure, or organization is prohibited. AI-generated content must be labeled as such.' },
              { title: '7. Privacy', body: 'Do not share others\' personal information without their explicit consent. Do not screenshot and redistribute private group conversations. Prayer requests shared in the community are sacred — treat them with discretion.' },
            ].map(({ title, body }) => (
              <div key={title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Content Standards</h2>
          <p className="leading-relaxed mb-3">All content posted to Elevate Chapel — prayer requests, discussion posts, group messages, course comments — must:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-600">
            <li>Be relevant to the spiritual or faith context of the community</li>
            <li>Be free of explicit sexual content, graphic violence, or disturbing imagery</li>
            <li>Not promote illegal activity, including controlled substances</li>
            <li>Not contain personal attacks or coordinated harassment campaigns</li>
            <li>Not spread medical, scientific, or theological misinformation in ways that could cause harm</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Enforcement</h2>
          <p className="leading-relaxed mb-3">Violations of these guidelines may result in:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-600">
            <li>Content removal</li>
            <li>Temporary suspension from posting</li>
            <li>Removal from specific groups or communities</li>
            <li>Permanent account termination for severe or repeated violations</li>
          </ul>
          <p className="leading-relaxed mt-3">We review reports from community members and apply these guidelines consistently regardless of tradition, viewpoint, or account type. Appeals may be submitted to <a href="mailto:moderation@elevatechapel.online" className="text-brand-600 hover:underline">moderation@elevatechapel.online</a>.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Reporting</h2>
          <p className="leading-relaxed">To report a violation, use the report button on any post, prayer, or message, or email <a href="mailto:moderation@elevatechapel.online" className="text-brand-600 hover:underline">moderation@elevatechapel.online</a>. For urgent safety concerns, contact local emergency services or the 988 Suicide & Crisis Lifeline.</p>
        </section>

        <section className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
          <h2 className="text-xl font-bold text-brand-900 mb-2">Our Commitment</h2>
          <p className="text-sm text-brand-700 leading-relaxed">These guidelines will evolve as our community grows. We commit to notifying members of material changes and to applying these guidelines in the spirit of compassion — correcting and restoring where possible, removing only when necessary. This is a community of seekers, not a community of the perfect.</p>
        </section>
      </div>
    </div>
  )
}
