export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="text-5xl mb-4">🔒</div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">Privacy Policy</h1>
        <p className="text-gray-500">Effective January 1, 2025 · Last updated July 1, 2025</p>
      </div>

      <div className="space-y-10 text-gray-700 text-sm leading-relaxed">
        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
          <p className="font-bold text-emerald-900 mb-2">Our plain-language commitment</p>
          <p className="text-emerald-800">We do not sell your spiritual data. Ever. We do not use your prayer journals, confessions, devotional history, or faith identity to target advertising. Below is the full legal policy — but that sentence is the one that matters most to us.</p>
        </div>

        {[
          {
            title: '1. Information We Collect',
            content: `
              <strong>Account information:</strong> Name, email address, and optional profile details you provide when creating an account.
              <br/><br/>
              <strong>Spiritual content:</strong> Prayer journal entries, devotional reading history, AI companion conversations, course progress, and group participation. This data is yours — we hold it as a trust.
              <br/><br/>
              <strong>Giving data:</strong> Donation history and amounts. We process payments through Stripe, which has its own privacy policy. We do not store full card numbers.
              <br/><br/>
              <strong>Usage data:</strong> Pages visited, features used, device type, and general location (country/region). We collect this to improve the product — not to profile you.
              <br/><br/>
              <strong>Communications:</strong> Emails or messages you send to our support team.
            `,
          },
          {
            title: '2. How We Use Your Information',
            content: `
              We use your data to:
              <ul class="list-disc pl-5 mt-2 space-y-1">
                <li>Provide, maintain, and improve the Elevate Chapel platform</li>
                <li>Personalize your experience (e.g. daily devotionals matched to your tradition)</li>
                <li>Send you product updates, prayer reminders, and streak notifications you have opted into</li>
                <li>Provide customer support</li>
                <li>Comply with legal obligations</li>
                <li>Detect and prevent fraud and abuse</li>
              </ul>
              <br/>We do <strong>not</strong> use your data to:
              <ul class="list-disc pl-5 mt-2 space-y-1">
                <li>Sell to third parties for advertising</li>
                <li>Train AI models (AI conversations are processed in real-time and not retained for training)</li>
                <li>Target you with ads based on your faith or spiritual practice</li>
                <li>Share with organizations outside our service providers listed below</li>
              </ul>
            `,
          },
          {
            title: '3. How We Share Your Information',
            content: `
              We share data only in these limited circumstances:
              <br/><br/>
              <strong>Service providers:</strong> Stripe (payment processing), Anthropic (AI inference — conversations are not retained), Vercel (hosting), and analytics providers bound by data processing agreements.
              <br/><br/>
              <strong>With your consent:</strong> When you post to the community prayer wall, join a group, or share a devotional, you choose what others can see.
              <br/><br/>
              <strong>Legal compliance:</strong> If required by law, court order, or to protect the safety of our users or the public.
              <br/><br/>
              <strong>Business transfers:</strong> If Elevate Chapel is acquired or merges, your data will transfer with the commitment that this Privacy Policy continues to apply.
            `,
          },
          {
            title: '4. Data Retention',
            content: `
              We retain your account data for as long as your account is active. If you delete your account:
              <ul class="list-disc pl-5 mt-2 space-y-1">
                <li>Your personal data is deleted within 30 days</li>
                <li>Anonymized, aggregated usage statistics may be retained indefinitely</li>
                <li>Giving records required for tax or legal purposes may be retained for up to 7 years</li>
                <li>Backups are purged within 90 days of deletion</li>
              </ul>
            `,
          },
          {
            title: '5. Security',
            content: `
              We use industry-standard encryption (TLS 1.3 in transit, AES-256 at rest). AI companion conversations are encrypted end-to-end. Access to personal data is restricted to employees who need it for their role, and all staff undergo privacy training. We conduct regular security audits and penetration testing.
              <br/><br/>
              If we become aware of a breach affecting your data, we will notify you within 72 hours as required by applicable law.
            `,
          },
          {
            title: '6. Your Rights',
            content: `
              Depending on your jurisdiction, you may have the right to:
              <ul class="list-disc pl-5 mt-2 space-y-1">
                <li><strong>Access</strong> your personal data</li>
                <li><strong>Correct</strong> inaccurate data</li>
                <li><strong>Delete</strong> your account and data</li>
                <li><strong>Export</strong> your data in a portable format</li>
                <li><strong>Opt out</strong> of certain processing (e.g., analytics)</li>
                <li><strong>Withdraw consent</strong> for processing based on consent</li>
              </ul>
              <br/>To exercise these rights, email <a href="mailto:privacy@elevatechapel.online" class="text-brand-600 hover:underline">privacy@elevatechapel.online</a> or use the data controls in your Account Settings.
            `,
          },
          {
            title: '7. Children',
            content: `
              Elevate Chapel is not directed to children under 13. If you are aware that a child under 13 has created an account, please contact us at privacy@elevatechapel.online and we will delete the account promptly. Family plan accounts for minors require a parent or guardian to manage the account.
            `,
          },
          {
            title: '8. Changes to This Policy',
            content: `
              We will notify you by email and in-app notice at least 30 days before making material changes to this policy. Continued use of Elevate Chapel after changes take effect constitutes acceptance of the updated policy.
            `,
          },
          {
            title: '9. Contact',
            content: `
              Privacy questions: <a href="mailto:privacy@elevatechapel.online" class="text-brand-600 hover:underline">privacy@elevatechapel.online</a><br/>
              General: <a href="mailto:info@elevatechapel.online" class="text-brand-600 hover:underline">info@elevatechapel.online</a><br/>
              Mailing address: Elevate Chapel App Inc., 2261 Market Street #4667, San Francisco, CA 94114
            `,
          },
        ].map(({ title, content }) => (
          <section key={title}>
            <h2 className="text-base font-bold text-gray-900 mb-3">{title}</h2>
            <div className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />
          </section>
        ))}
      </div>
    </div>
  )
}
