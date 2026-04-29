import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'
import './Policy.css'

// Last reviewed by the team. Bump this whenever you change the policy
// — visitors look for the date to gauge how current the doc is.
const LAST_UPDATED = '29 April 2026'

const SECTIONS = [
  { id: 'overview',          label: '1. Overview' },
  { id: 'who-we-are',        label: '2. Who we are' },
  { id: 'what-we-collect',   label: '3. What we collect' },
  { id: 'why-we-collect',    label: '4. Why we collect it' },
  { id: 'lawful-basis',      label: '5. Lawful basis (PDPA 2010)' },
  { id: 'how-we-share',      label: '6. How we share data' },
  { id: 'cookies',           label: '7. Cookies & analytics' },
  { id: 'ai-prompts',        label: '8. AI prompts & generated content' },
  { id: 'retention',         label: '9. How long we keep data' },
  { id: 'security',          label: '10. Security' },
  { id: 'your-rights',       label: '11. Your rights' },
  { id: 'children',          label: '12. Children' },
  { id: 'international',     label: '13. International transfers' },
  { id: 'changes',           label: '14. Changes to this policy' },
  { id: 'contact',           label: '15. Contact us' },
]

export default function Policy() {
  return (
    <div className="policy-page">
      <Navigation />

      <main className="policy-main">
        <div className="policy-container">

          <header className="policy-header">
            <p className="policy-eyebrow">Legal</p>
            <h1 className="policy-title">Privacy Policy</h1>
            <p className="policy-meta">
              Last updated <strong>{LAST_UPDATED}</strong> · Effective immediately on update
            </p>
            <p className="policy-lede">
              Plain-English summary of what we collect, why, and what you can ask us to do
              with it. We&rsquo;re a small team in Malaysia and we treat your data the way we&rsquo;d want
              ours treated — minimal, secured, and never sold.
            </p>
          </header>

          {/* Table of contents */}
          <nav className="policy-toc" aria-label="Sections">
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="policy-toc-link">{s.label}</a>
            ))}
          </nav>

          <article className="policy-body">

            <section id="overview">
              <h2>1. Overview</h2>
              <p>
                This Privacy Policy explains how <strong>Adletic Agency</strong> (&ldquo;we&rdquo;,
                &ldquo;us&rdquo;, &ldquo;Adletic&rdquo;) collects, uses, stores, and shares
                personal data when you visit <a href="https://adleticagency.com">adleticagency.com</a>,
                use our paid-ads, AI chatbot, or content services, or use the MotionBoards platform
                we operate at <a href="https://motionboards.com">motionboards.com</a>.
              </p>
              <p>
                It applies to leads, prospects, clients, MotionBoards subscribers, and casual
                visitors. If you&rsquo;re ever unsure how something applies to you, email us — see
                <a href="#contact"> §15</a>.
              </p>
            </section>

            <section id="who-we-are">
              <h2>2. Who we are</h2>
              <p>
                Adletic Agency is a digital marketing and AI solutions team based in
                Shah Alam, Selangor, Malaysia. We build paid-ads systems, AI chatbots, and
                creative content tooling — including <strong>MotionBoards</strong>, our AI
                video and image canvas. For data-protection purposes we are the
                <em> data controller</em> of the personal data described in this policy.
              </p>
              <ul className="policy-keyvals">
                <li><strong>Business name</strong> Adletic Agency</li>
                <li><strong>Office</strong> Shah Alam, Selangor, Malaysia</li>
                <li><strong>Contact</strong> <a href="mailto:hello@adleticagency.com">hello@adleticagency.com</a></li>
                <li><strong>WhatsApp</strong> <a href="https://wa.me/60112167672">+60 11-2167 672</a></li>
              </ul>
            </section>

            <section id="what-we-collect">
              <h2>3. What we collect</h2>
              <p>We only collect what we need. Concretely:</p>
              <h3>3.1 Information you give us directly</h3>
              <ul>
                <li><strong>Lead and contact form data</strong> — name, email, phone / WhatsApp number, business name, the message or use-case you share.</li>
                <li><strong>Account data (MotionBoards)</strong> — your name, email, hashed password, profile preferences, and subscription status.</li>
                <li><strong>Billing data</strong> — handled by Stripe; we receive transaction metadata (last-four card digits, billing country, invoice records) but never your full card number.</li>
                <li><strong>Files you upload</strong> — images, video clips, audio, or reference assets you place on a MotionBoards canvas.</li>
                <li><strong>Prompts and chats</strong> — text prompts you send to AI models, and conversations with our ADletic AI assistant.</li>
              </ul>
              <h3>3.2 Information collected automatically</h3>
              <ul>
                <li><strong>Usage events</strong> — pages visited, buttons clicked, models you generate with, in-app features used. Stored against an anonymous device identifier (mb_anon_id).</li>
                <li><strong>Device data</strong> — browser, OS, screen size, IP-derived approximate location (country / region only).</li>
                <li><strong>Logs</strong> — server access logs for security and debugging, kept short.</li>
              </ul>
              <h3>3.3 Information from third parties</h3>
              <ul>
                <li><strong>Ad platforms</strong> — Meta, Google, TikTok pass us hashed identifiers when you click an ad and complete a form. We use these to attribute conversions, never to look up individuals.</li>
                <li><strong>AI providers</strong> — Anthropic, Google, OpenAI, Replicate, Comfy Cloud, Segmind, ByteDance, and similar return generated outputs and provider-side request ids when you generate on MotionBoards.</li>
              </ul>
            </section>

            <section id="why-we-collect">
              <h2>4. Why we collect it</h2>
              <ul>
                <li><strong>To deliver the service</strong> — sign you in, run generations, store your boards, send your access link.</li>
                <li><strong>To bill and account</strong> — process subscriptions, top-ups, refunds, and tax records.</li>
                <li><strong>To support you</strong> — reply to emails / WhatsApp messages, troubleshoot failures, provide guidance.</li>
                <li><strong>To improve the product</strong> — understand what works, fix what doesn&rsquo;t. We aggregate usage stats; we don&rsquo;t need to identify you to learn the platform is slow.</li>
                <li><strong>To run our business</strong> — measure ad performance, send relevant updates to clients and subscribers, schedule onboarding.</li>
                <li><strong>To stay safe and legal</strong> — prevent abuse, fraud, and unlawful use of the AI tools; comply with Malaysian law.</li>
              </ul>
              <p>We <strong>do not sell</strong> your personal data. We don&rsquo;t share it with data brokers.</p>
            </section>

            <section id="lawful-basis">
              <h2>5. Lawful basis (PDPA 2010)</h2>
              <p>
                We process personal data under Malaysia&rsquo;s <strong>Personal Data Protection Act 2010</strong>
                (PDPA). The bases we rely on are:
              </p>
              <ul>
                <li><strong>Consent</strong> — when you submit a form, subscribe, or opt in to updates.</li>
                <li><strong>Contractual necessity</strong> — to perform the services you&rsquo;ve signed up for.</li>
                <li><strong>Legal obligation</strong> — tax records, fraud reporting, etc.</li>
                <li><strong>Legitimate interest</strong> — basic analytics, security logging, attributing ad performance — only where it doesn&rsquo;t override your rights.</li>
              </ul>
              <p>
                You can withdraw consent at any time (see <a href="#your-rights">§11</a>). Withdrawal won&rsquo;t
                affect processing already done lawfully before withdrawal.
              </p>
            </section>

            <section id="how-we-share">
              <h2>6. How we share data</h2>
              <p>We share strictly with vendors that help us run the service. They are bound by their own data-processing agreements.</p>
              <ul>
                <li><strong>Stripe, Inc.</strong> — payment processing.</li>
                <li><strong>Vercel, Inc.</strong> — application hosting and edge compute.</li>
                <li><strong>Neon Tech, Inc.</strong> — managed PostgreSQL for account and generation records.</li>
                <li><strong>Cloudflare R2 / Vercel Blob</strong> — object storage for uploaded and generated media.</li>
                <li><strong>AI model providers</strong> — Anthropic, Google (Gemini / Veo), OpenAI, Replicate, Comfy Cloud, Segmind, ByteDance (Seedance), Sync Labs, Fish Audio, and similar vendors that run the model you select. Your prompt and any required reference media are sent to the chosen provider only.</li>
                <li><strong>Email / WhatsApp delivery</strong> — Postmark / Resend for transactional email; Twilio / WhatsApp Cloud API for messages.</li>
                <li><strong>Analytics</strong> — first-party usage events stored in our own database; we do not run third-party analytics scripts on the canvas itself.</li>
                <li><strong>Ad platforms</strong> — Meta, Google, TikTok (event data only; no payload of your prompts).</li>
              </ul>
              <p>
                We may also share information when legally required — court order, tax authority,
                law-enforcement request — and only to the extent required.
              </p>
            </section>

            <section id="cookies">
              <h2>7. Cookies &amp; analytics</h2>
              <p>
                We use a small number of cookies and equivalent local-storage keys.
                Categories:
              </p>
              <ul>
                <li><strong>Essential</strong> — session cookies that keep you logged in. The site doesn&rsquo;t work without them.</li>
                <li><strong>Functional</strong> — your theme preference, panel widths, the AI Agent toggle state.</li>
                <li><strong>Anonymous analytics</strong> — a single first-party id (mb_anon_id) used to count unique sessions for product metrics.</li>
              </ul>
              <p>
                We don&rsquo;t set advertising cookies on adleticagency.com or motionboards.com. Ad-platform
                pixels (Meta, Google, TikTok) only fire on dedicated ad-landing pages clearly
                marked as such, and only after your click on the ad — not on the marketing site
                generally.
              </p>
              <p>
                You can clear cookies any time from your browser. Doing so will sign you out and
                reset your preferences.
              </p>
            </section>

            <section id="ai-prompts">
              <h2>8. AI prompts &amp; generated content</h2>
              <p>
                MotionBoards routes your prompts and selected reference media to the third-party
                AI model you choose. Each provider has its own data-handling policy — by
                generating with a model, you accept that the prompt + inputs leave our infrastructure
                and reach that provider for the duration of that one request.
              </p>
              <ul>
                <li>We <strong>do not train any of our own models on your inputs.</strong></li>
                <li>Provider retention varies. Most enterprise APIs we use (Anthropic, OpenAI Enterprise, Replicate, etc.) discard inputs within 30 days; some sooner. We pin our provider configurations to the strictest data-handling tier their API offers.</li>
                <li>The <strong>generated outputs</strong> stored on your canvas are stored by us in object storage and the database; you control whether to keep them, and you can delete a board / item at any time.</li>
                <li>Conversations with <strong>ADletic AI</strong> (the in-app assistant) are stored against your account so you can resume a thread later. Delete a chat from the panel and it&rsquo;s removed from our DB on next purge.</li>
              </ul>
              <p>
                <strong>Don&rsquo;t paste secrets.</strong> Prompts are sent verbatim to the AI provider you
                pick. Treat them like a public Slack message — fine for creative briefs, not fine
                for credentials, NRIC numbers, banking details, or trade secrets.
              </p>
            </section>

            <section id="retention">
              <h2>9. How long we keep data</h2>
              <ul>
                <li><strong>Lead form data</strong> — up to 24 months from your last interaction, then archived or deleted.</li>
                <li><strong>Account data</strong> — for as long as your account is active, plus 90 days after closure for refund / dispute windows.</li>
                <li><strong>Billing records</strong> — 7 years (Malaysian tax-record requirement).</li>
                <li><strong>Generated outputs and uploaded files</strong> — kept while your subscription is active. After cancellation we keep them another 14 days, then they&rsquo;re purged from object storage.</li>
                <li><strong>Server access logs</strong> — 30 days, rolling.</li>
                <li><strong>Marketing emails</strong> — until you unsubscribe (every email has the link).</li>
              </ul>
            </section>

            <section id="security">
              <h2>10. Security</h2>
              <p>
                We use TLS for data in transit, encryption at rest on managed databases and
                object storage, salted password hashing, scoped API keys per environment, and
                least-privilege access for our team. No system is bulletproof — if we ever detect
                a breach affecting your data we&rsquo;ll notify you and the Personal Data Protection
                Department within 72 hours, in line with PDPA practice.
              </p>
            </section>

            <section id="your-rights">
              <h2>11. Your rights</h2>
              <p>Under PDPA 2010 you can ask us to:</p>
              <ul>
                <li><strong>Access</strong> — get a copy of the personal data we hold on you.</li>
                <li><strong>Correct</strong> — fix anything that&rsquo;s wrong or out of date.</li>
                <li><strong>Limit processing</strong> — pause non-essential processing while we check something.</li>
                <li><strong>Withdraw consent</strong> — for any processing based on consent.</li>
                <li><strong>Delete</strong> — close your account and remove your personal data, subject to records we&rsquo;re legally required to keep (e.g. invoices).</li>
                <li><strong>Object</strong> — to direct marketing at any time.</li>
                <li><strong>Lodge a complaint</strong> — with the
                  Personal Data Protection Department (Jabatan Perlindungan Data Peribadi) at
                  <a href="https://www.pdp.gov.my" target="_blank" rel="noopener noreferrer"> pdp.gov.my</a>.</li>
              </ul>
              <p>
                Email <a href="mailto:hello@adleticagency.com">hello@adleticagency.com</a> with the subject
                <em>&ldquo;Data request&rdquo;</em> and we&rsquo;ll get back within 14 working days.
              </p>
            </section>

            <section id="children">
              <h2>12. Children</h2>
              <p>
                MotionBoards and our agency services are not directed at people under 18.
                If you believe a minor has signed up, email us and we&rsquo;ll delete the account.
              </p>
            </section>

            <section id="international">
              <h2>13. International transfers</h2>
              <p>
                Some of our vendors (Stripe, Vercel, Anthropic, OpenAI, Google, Replicate) are
                headquartered outside Malaysia. When your data leaves Malaysia, it goes only to
                jurisdictions and providers that maintain data-protection standards comparable to
                or stronger than PDPA — under contractual safeguards we&rsquo;ve reviewed.
              </p>
            </section>

            <section id="changes">
              <h2>14. Changes to this policy</h2>
              <p>
                We&rsquo;ll update this page when we change vendors, add features that touch personal
                data, or improve clarity. Material changes will be flagged in-app and via email
                to active subscribers at least 14 days before they take effect. The
                &ldquo;Last updated&rdquo; date at the top always reflects the current version.
              </p>
            </section>

            <section id="contact">
              <h2>15. Contact us</h2>
              <p>
                Anything in this policy unclear? Want to make a request? Get in touch:
              </p>
              <ul className="policy-keyvals">
                <li><strong>Email</strong> <a href="mailto:hello@adleticagency.com">hello@adleticagency.com</a></li>
                <li><strong>WhatsApp</strong> <a href="https://wa.me/60112167672">+60 11-2167 672</a></li>
                <li><strong>Mail</strong> Adletic Agency, Shah Alam, Selangor, Malaysia</li>
              </ul>
              <p className="policy-back">
                <Link to="/">&larr; Back to home</Link>
              </p>
            </section>

          </article>
        </div>
      </main>

      <Footer />
    </div>
  )
}
