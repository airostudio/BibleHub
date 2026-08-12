export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="text-5xl mb-4">📋</div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">Terms of Service</h1>
        <p className="text-gray-500">Effective January 1, 2025 · Last updated July 1, 2025</p>
      </div>

      <div className="space-y-10 text-gray-700 text-sm leading-relaxed">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
          <p className="font-bold text-blue-900 mb-2">The short version</p>
          <p className="text-blue-800">Use Elevate Chapel for your spiritual growth and community. Treat others with respect across tradition boundaries. Do not misuse the platform. If you pay, your subscription auto-renews until you cancel. You own your content; you give us permission to display it. We can update these terms with 30 days notice.</p>
        </div>

        {[
          {
            title: '1. Acceptance of Terms',
            content: `By accessing or using Elevate Chapel (the "Service"), you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, do not use the Service. If you are using the Service on behalf of an organization, you represent that you have authority to bind that organization to these terms.`,
          },
          {
            title: '2. Eligibility',
            content: `You must be at least 13 years old to use Elevate Chapel. If you are under 18, you must have parental consent. Family plan subscribers who create accounts for minors are responsible for those accounts and agree to these terms on their behalf.`,
          },
          {
            title: '3. Account Registration',
            content: `You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. You must provide accurate information when creating your account. You may not create accounts for others without their consent, impersonate any person, or use automated means to create accounts.`,
          },
          {
            title: '4. Subscriptions and Billing',
            content: `
              <strong>Free tier:</strong> Available without payment; features described at elevatechapel.online/pricing.
              <br/><br/>
              <strong>Paid plans:</strong> Individual and Family plans are billed monthly or annually as selected. Organization plans are billed based on custom agreements.
              <br/><br/>
              <strong>Free trial:</strong> New paid subscribers receive a 7-day free trial. Your payment method is charged at the end of the trial unless you cancel before then.
              <br/><br/>
              <strong>Auto-renewal:</strong> Subscriptions renew automatically at the end of each billing period. You may cancel at any time; cancellations take effect at the end of the current paid period.
              <br/><br/>
              <strong>Refunds:</strong> We offer a full refund within 7 days of your first charge if you are not satisfied. After that, refunds are not provided for partial periods. Contact support@elevatechapel.online.
              <br/><br/>
              <strong>Price changes:</strong> We will notify you at least 30 days before changing subscription prices. Continued use after the effective date constitutes acceptance.
            `,
          },
          {
            title: '5. Your Content',
            content: `You own the content you create on Elevate Chapel — prayer journal entries, posts, messages, and profile information. By posting content, you grant us a limited, non-exclusive, royalty-free license to display, store, and transmit that content as necessary to operate the Service. We do not claim ownership of your spiritual content. You may export and delete your content at any time.`,
          },
          {
            title: '6. Prohibited Uses',
            content: `
              You may not use Elevate Chapel to:
              <ul class="list-disc pl-5 mt-2 space-y-1">
                <li>Violate any applicable law or regulation</li>
                <li>Harass, threaten, or harm other users</li>
                <li>Post content that violates our Community Guidelines</li>
                <li>Reverse-engineer, scrape, or copy the Service</li>
                <li>Use automated bots or scripts to access the Service</li>
                <li>Attempt to gain unauthorized access to any system or account</li>
                <li>Distribute malware or engage in phishing</li>
                <li>Conduct unauthorized commercial solicitation</li>
              </ul>
            `,
          },
          {
            title: '7. AI Spiritual Companion Disclaimer',
            content: `The AI Spiritual Companion is an AI system inspired by faith traditions. It is not a licensed therapist, medical professional, or clergy member. It does not replace professional mental health support, medical advice, or authentic pastoral care. For mental health crises, contact the 988 Suicide & Crisis Lifeline. The AI may make mistakes and should not be relied upon for consequential religious or personal decisions.`,
          },
          {
            title: '8. Giving and Donations',
            content: `Elevate Chapel facilitates donations to verified third-party organizations. We charge a 5% platform fee disclosed on every transaction. We verify recipient organizations but do not guarantee their financial management. Donations are generally non-refundable once processed. Giving histories are available for tax purposes upon request.`,
          },
          {
            title: '9. Termination',
            content: `You may close your account at any time from your Account Settings. We may suspend or terminate accounts that violate these terms. Upon termination, your access to paid features ends immediately. Your data is deleted per our Privacy Policy retention schedule.`,
          },
          {
            title: '10. Limitation of Liability',
            content: `To the fullest extent permitted by law, Elevate Chapel is not liable for indirect, incidental, special, or consequential damages arising from your use of the Service. Our total liability is limited to the amount you paid us in the 12 months preceding the claim, or $100 if you are a free user.`,
          },
          {
            title: '11. Changes to These Terms',
            content: `We will notify you of material changes at least 30 days before they take effect via email and in-app notice. Continued use of the Service after the effective date constitutes acceptance of the revised terms.`,
          },
          {
            title: '12. Contact',
            content: `Legal questions: <a href="mailto:legal@elevatechapel.online" class="text-brand-600 hover:underline">legal@elevatechapel.online</a><br/>Support: <a href="mailto:support@elevatechapel.online" class="text-brand-600 hover:underline">support@elevatechapel.online</a><br/>Elevate Chapel App Inc., 2261 Market Street #4667, San Francisco, CA 94114`,
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
