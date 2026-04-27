import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | ASAR Global',
  description: 'Enterprise privacy policy and data governance practices at ASAR Global.',
};

export default function PrivacyPolicyPage() {
  const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <>
      <section className="section-padding bg-muted/20 border-b border-border pb-16">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="hero-h1 text-5xl md:text-7xl mb-6 text-[#082652]">Privacy Policy.</h1>
            <p className="text-xl font-medium max-w-2xl text-zinc-600">
              Corporate data governance, collection transparency, and security methodologies.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
              <span className="w-2 h-2 rounded-full bg-primary"></span> Last Updated: {currentDate}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* TOC sidebar */}
            <div className="lg:col-span-3 hidden lg:block sticky top-8">
              <div className="p-6 border border-border rounded-xl bg-slate-50">
                <h4 className="font-extrabold uppercase text-xs tracking-widest text-[#082652] mb-4">Contents</h4>
                <nav className="flex flex-col space-y-3 nav-links">
                  <a href="#information-collection" className="text-sm font-semibold text-zinc-500 hover:text-primary transition-colors">1. Information Collection</a>
                  <a href="#data-usage" className="text-sm font-semibold text-zinc-500 hover:text-primary transition-colors">2. How We Use Data</a>
                  <a href="#cookies" className="text-sm font-semibold text-zinc-500 hover:text-primary transition-colors">3. Cookies & Tracking</a>
                  <a href="#third-party" className="text-sm font-semibold text-zinc-500 hover:text-primary transition-colors">4. Third-Party Services</a>
                  <a href="#user-rights" className="text-sm font-semibold text-zinc-500 hover:text-primary transition-colors">5. Your Legal Rights</a>
                  <a href="#compliance" className="text-sm font-semibold text-zinc-500 hover:text-primary transition-colors">6. Regulatory Compliance</a>
                </nav>
              </div>
            </div>

            {/* Legal Content */}
            <div className="lg:col-span-9 max-w-4xl prose prose-slate prose-headings:text-[#082652] prose-headings:font-extrabold prose-h2:mt-12 prose-h2:mb-6 prose-p:text-zinc-600 prose-p:leading-relaxed">
              <p className="text-lg font-medium text-zinc-700">
                At ASAR Global, we engineer secure environments. Defending your data privacy is foundational to our enterprise architecture. This Privacy Policy details how we collect, process, and protect information when you engage with our services, website, or infrastructure engineering.
              </p>

              <h2 id="information-collection">1. Information Collection</h2>
              <p>We strictly limit data collection to what is necessary for facilitating corporate communications and executing infrastructural contracts. We collect:</p>
              <ul className="space-y-2 text-zinc-600">
                <li><strong>Direct Identifiers:</strong> Corporate names, professional email addresses, phone numbers, and operational roles submitted through our consultation funnels.</li>
                <li><strong>Technical Data:</strong> IP addresses, browser telemetry, operating system details, and interaction logs captured implicitly via standard web logging metrics.</li>
                <li><strong>Infrastructure Blueprints:</strong> When engaged in consultation, we may receive restricted infrastructural overviews out of necessity. This data is housed under immediate NDA and extreme security controls.</li>
              </ul>

              <h2 id="data-usage">2. How We Use Data</h2>
              <p>ASAR Global does not, and will never, sell corporate data to third-party data brokers. Data is processed exclusively to:</p>
              <ul className="space-y-2 text-zinc-600">
                <li>Deliver exact ISO consulting standards and data engineering blueprints.</li>
                <li>Communicate critical infrastructural updates or structural revisions.</li>
                <li>Comply with binding legal obligations including audit trailing.</li>
                <li>Enhance site architecture by analyzing telemetry patterns.</li>
              </ul>

              <h2 id="cookies">3. Cookies & Tracking Technologies</h2>
              <p>Our platform utilizes minimal cookies to retain session fidelity and analyze broad traffic segments. We divide cookies into two tiers:</p>
              <ul className="space-y-2 text-zinc-600">
                <li><strong>Strictly Necessary:</strong> Required for the fundamental delivery of the ASAR Global interface.</li>
                <li><strong>Analytics:</strong> Aggregated, anonymized payloads processed to determine interaction scale across our services pillars.</li>
              </ul>

              <h2 id="third-party">4. Third-Party Services</h2>
              <p>To deliver robust capabilities, we integrate with enterprise-grade tier-1 service providers (e.g., secure cloud hosting, compliant CRM funnels). All third-party providers are audited continually against strict confidentiality agreements aligned with global standards like ISO 27001.</p>

              <h2 id="user-rights">5. Your Legal Rights</h2>
              <p>Consistent with international mandates, corporate clients and site absolute visitors hold specific rights over their personal information:</p>
              <ul className="space-y-2 text-zinc-600">
                <li><strong>Right to Access:</strong> You may request a complete ledger of personal data retained by our systems.</li>
                <li><strong>Right to Erasure:</strong> You may request the absolute deletion of your identifying records.</li>
                <li><strong>Right to Rectification:</strong> You may petition an immediate update to inaccurate corporate or personal data.</li>
              </ul>
              <p>To execute these rights, please file a request via our specialized data officer at <a href="mailto:contact@asarglobal.com" className="text-primary font-bold">contact@asarglobal.com</a>.</p>

              <h2 id="compliance">6. Regional Regulatory Compliance</h2>
              <p>
                As experts in regional compliance architectures, ASAR Global structures its own data warehousing in strict alignment with Saudi Arabia's Personal Data Protection Law (PDPL), the UAE Data Law, and international mandates such as GDPR and CCPA.
              </p>

              <div className="mt-16 p-8 border border-border bg-slate-50 rounded-xl">
                 <h3 className="text-xl font-bold text-[#082652] mb-2 mt-0">Data Inquiries</h3>
                 <p className="text-zinc-600 mb-6">For aggressive compliance audits regarding our data handling, contact our governance team.</p>
                 <Link href="/contact" className="btn btn-primary px-6 h-12 inline-flex">
                   Contact Privacy Officer <ArrowRight className="w-4 h-4 ml-2" />
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
