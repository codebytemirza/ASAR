import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | ASAR Global',
  description: 'Legally binding terms outlining acceptable use, limitations of liability, and service conditions at ASAR Global.',
};

export default function TermsOfServicePage() {
  const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <>
      <section className="section-padding bg-muted/20 border-b border-border pb-16">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="hero-h1 text-5xl md:text-7xl mb-6 text-[#082652]">Terms of Service.</h1>
            <p className="text-xl font-medium max-w-2xl text-zinc-600">
              The operational boundaries, liabilities, and intellectual property arrangements governing ASAR Global engagements.
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
                  <a href="#acceptance" className="text-sm font-semibold text-zinc-500 hover:text-primary transition-colors">1. Acceptance of Terms</a>
                  <a href="#services" className="text-sm font-semibold text-zinc-500 hover:text-primary transition-colors">2. Execution of Services</a>
                  <a href="#intellectual-property" className="text-sm font-semibold text-zinc-500 hover:text-primary transition-colors">3. Intellectual Property</a>
                  <a href="#client-obligations" className="text-sm font-semibold text-zinc-500 hover:text-primary transition-colors">4. Client Obligations</a>
                  <a href="#liability" className="text-sm font-semibold text-zinc-500 hover:text-primary transition-colors">5. Limitations of Liability</a>
                  <a href="#governing-law" className="text-sm font-semibold text-zinc-500 hover:text-primary transition-colors">6. Governing Law</a>
                </nav>
              </div>
            </div>

            {/* Legal Content */}
            <div className="lg:col-span-9 max-w-4xl prose prose-slate prose-headings:text-[#082652] prose-headings:font-extrabold prose-h2:mt-12 prose-h2:mb-6 prose-p:text-zinc-600 prose-p:leading-relaxed">
              <p className="text-lg font-medium text-zinc-700">
                These Terms of Service ("Terms") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("Client"), and ASAR Global ("Company"), concerning your access to and use of this platform as well as overarching infrastructural and compliance consulting protocols.
              </p>

              <h2 id="acceptance">1. Acceptance of Terms</h2>
              <p>By accessing the platform or submitting a consultation request via our Contact or Form channels, you explicitly agree that you have read, understood, and consented to be bound by all structural conditions listed herein. If you do not agree with these Terms, you are expressly prohibited from engaging our services.</p>

              <h2 id="services">2. Execution of Services</h2>
              <p>ASAR Global provides enterprise data engineering, ETL pipeline construction, and ISO compliance (such as ISO 27001, NCA, SAMA) assessments. </p>
              <ul className="space-y-2 text-zinc-600">
                <li><strong>No Absolute Guarantee:</strong> While ASAR Global maintains a 100% success rate to date on audits, final ISO issuance relies heavily on internal Client adherence. We guarantee the architectural perfection, but the Client must adhere to the physical compliance requirements.</li>
                <li><strong>Modifications:</strong> We reserve the right to alter or suspend our service availability (or site architecture) at any time to upgrade security matrices.</li>
              </ul>

              <h2 id="intellectual-property">3. Intellectual Property Rights</h2>
              <p>Unless expressly stated via external contracting (SOWs), the website, underlying source code, database architectures, software designs, text, and SVG visualizations ("Corporate Materials") remain the absolute property of ASAR Global and are protected by international copyright/trademark protocols.</p>
              <p>Upon final payment for engineering or document services, Clients are granted a non-exclusive license to utilize generated infrastructural diagrams directly related to their immediate corporate ecosystem.</p>

              <h2 id="client-obligations">4. Client Obligations</h2>
              <p>To effectively deploy complex architectures, Clients agree to provide:</p>
              <ul className="space-y-2 text-zinc-600">
                <li>Accurate, non-redacted operational data required for gap analysis.</li>
                <li>Complete cooperation during the active deployment phases.</li>
                <li>Secure access endpoints if remote data-pipeline engineering is requested.</li>
              </ul>
              <p>Failure to provide required telemetry may suspend service deliveries without penalty to ASAR Global.</p>

              <h2 id="liability">5. Limitations of Liability</h2>
              <p>In no definitive event shall ASAR Global, its directors, architectural engineers, or employees be liable for indirect, consequential, exemplary, incidental, or punitive damages—including lost operational profits or severe data loss events—arising from your use of the site or our failure to meet external third-party audit goals caused by internal Client sabotage or gross negligence.</p>
              <p>Our direct liability for infrastructural failure is categorically capped at the financial amount paid by the Client to ASAR Global in the immediate six (6) month period preceding any cause of action.</p>

              <h2 id="governing-law">6. Governing Law</h2>
              <p>These Terms shall be heavily governed by, interpreted, and construed in accordance with the jurisdictional laws of the prevailing nation where the targeted operational deployment occurs (e.g., KSA, UAE) explicitly bypassing any strict conflict-of-law operational principles.</p>

              <div className="mt-16 p-8 border border-border bg-slate-50 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                 <div>
                    <h3 className="text-xl font-bold text-[#082652] mb-1 mt-0">Legal Clarification</h3>
                    <p className="text-zinc-600 mb-0">Direct structural inquiries to our corporate legal team.</p>
                 </div>
                 <a href="mailto:contact@asarglobal.com" className="btn btn-outline border-border hover:border-[#082652] text-[#082652] px-6 h-12">
                   contact@asarglobal.com
                 </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
