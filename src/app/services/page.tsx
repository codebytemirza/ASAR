import Link from 'next/link';
import { ArrowRight, Database, Shield, GraduationCap, CheckCircle2 } from 'lucide-react';
import { PipelineDiagram } from '@/components/illustrations/PipelineDiagram';
import { CorporateGrid, AmbientGlow, DotsPattern, HexGrid, DiagonalLines, CornerAccent } from '@/components/ui/AbstractDecorators';
import { NewsTicker } from '@/components/ui/NewsTicker';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Services',
  description: 'Enterprise Data Engineering, exactly-once ETL pipelines, ISO Compliance Frameworks, and Corporate Governance Training.',
  openGraph: {
    title: 'Enterprise Services | ASAR Global',
    description: 'Enterprise Data Engineering, exactly-once ETL pipelines, ISO Compliance Frameworks, and Corporate Governance Training.',
    url: '/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="min-h-[50vh] flex flex-col justify-center section-padding bg-muted/20 border-b border-border pb-16 relative overflow-hidden">
        {/* Grid: frames the page-title section, consistent with other page headers */}
        <CorporateGrid />
        <div className="container">
          <div className="max-w-4xl">
            <span className="section-label">Enterprise Services</span>
            <h1 className="hero-h1 text-5xl md:text-7xl mb-6">
              Solutions That <br /><span className="text-primary">Scale & Secure.</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-2xl leading-relaxed text-zinc-600">
              Transform your operational infrastructure with precision data engineering and uncompromising global compliance frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* ── News Ticker ── Between page header and first service pillar */}
      <NewsTicker />

      {/* PILLAR 1: Data Analytics */}
      <section id="data" className="section-padding bg-white border-b border-border relative overflow-hidden">
        {/* DotsPattern: fills the wide white area on either side of the two-col layout */}
        <DotsPattern />
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-xl mb-6 border border-primary/20">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">Data Analysis & Pipelines</h2>
              <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                We engineer robust ETL/ELT pipelines and data architectures designed to process massive corporate payloads with exactly-once precision. We turn fragmented data into intelligent business outcomes.
              </p>

              <div className="mb-8">
                <div className="gradient-rule"></div>
                <h3 className="font-bold text-sm uppercase tracking-widest text-primary w-full border-b border-border pb-2 mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {['Automated, zero-maintenance data flows.', 'Predictable scalability for enterprise loads.', 'Clean data modeling for immediate BI dashboards.'].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 shrink-0 text-accent" />
                      <span className="text-zinc-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-10">
                <h3 className="font-bold text-sm uppercase tracking-widest text-primary w-full border-b border-border pb-2 mb-4">Real-World Use Cases</h3>
                <div className="space-y-4">
                  <div className="bg-secondary border border-border p-4 rounded-lg">
                    <h4 className="font-bold text-primary mb-1">Regulatory Reporting Automation</h4>
                    <p className="text-sm text-zinc-600">Aggregating transactional data into normalized views to instantly satisfy monthly SAMA formatting requirements.</p>
                  </div>
                  <div className="bg-secondary border border-border p-4 rounded-lg">
                    <h4 className="font-bold text-primary mb-1">Unified Customer Portfolios</h4>
                    <p className="text-sm text-zinc-600">Connecting siloed CRMs through advanced ETL to give executives a single pane of glass into organizational health.</p>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="btn btn-primary px-8 h-12 text-sm max-w-max">
                Discuss Your Data Strategy
              </Link>
            </div>

            <div className="bg-[#FFFFFF] border-4 border-primary rounded-2xl p-4 lg:p-6 hidden md:flex items-center justify-center shadow-[12px_12px_0_#000] rotate-[1deg] hover:rotate-0 transition-transform duration-500 relative overflow-hidden">
              <PipelineDiagram className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* PILLAR 2: ISO Frameworks */}
      <section id="iso" className="section-padding bg-secondary border-b border-border relative overflow-hidden">
        {/* HexGrid: hexagonal pattern reinforces structured framework narrative */}
        <HexGrid />
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start flex-col-reverse lg:flex-row-reverse">

            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-xl mb-6 border border-primary/20">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">ISO & Compliance Frameworks</h2>
              <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                Navigating the complex landscape of regulatory requirements. We offer end-to-end support—from scoping and documentation design to full implementation—for global standards.
              </p>

              <div className="mb-8">
                <div className="gradient-rule"></div>
                <h3 className="font-bold text-sm uppercase tracking-widest text-primary w-full border-b border-border pb-2 mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {['Guaranteed audit readiness.', 'Streamlined policy architectures.', 'Aligns infrastructure directly with local laws (NCA, PDPL).'].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 shrink-0 text-accent" />
                      <span className="text-zinc-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-10">
                <h3 className="font-bold text-sm uppercase tracking-widest text-primary w-full border-b border-border pb-2 mb-4">Real-World Use Cases</h3>
                <div className="space-y-4">
                  <div className="bg-white border border-border p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-primary mb-1">SOC 2 Cloud Compliance</h4>
                    <p className="text-sm text-zinc-600">Restructuring corporate cloud access policies to meet strict SOC 2 Type II trust service criteria for an enterprise SaaS deployment.</p>
                  </div>
                  <div className="bg-white border border-border p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-primary mb-1">Healthcare PDPL Alignment</h4>
                    <p className="text-sm text-zinc-600">Auditing and restricting patient data pipelines to ensure local PDPL and HIPAA regulatory compliance preceding a major health portal launch.</p>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="btn btn-primary px-8 h-12 text-sm max-w-max">
                Achieve ISO Certification
              </Link>
            </div>

            <div className="order-2 lg:order-1 border border-border bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="font-extrabold text-lg uppercase mb-6 text-primary">16 Supported Frameworks</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'ISO/IEC 20000-1', 'ISO/IEC 27001', 'ISO/IEC 27701', 'ISO/IEC 42001',
                  'ISO 9001', 'ISO 18295', 'ISO 14001', 'ISO 45001',
                  'ISO 50001', 'ISO 55001', 'NCA', 'SAMA',
                  'PDPL', 'NDMO', 'SOC 2', 'HIPAA'
                ].map((iso) => (
                  <div key={iso} className="flex items-center gap-2 bg-secondary border border-border p-3 rounded-lg text-xs font-bold text-primary">
                    <ArrowRight className="h-3 w-3 text-primary" /> {iso}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLAR 3: Audit & Training */}
      <section id="training" className="section-padding bg-white border-b border-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-xl mb-6 border border-primary/20">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">Corporate Audit & Training</h2>
              <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                Security is built by people. We offer rigorous internal compliance assessments, followed by specialized educational tracks—from general workforce awareness to elite auditor certifications.
              </p>

              <div className="mb-8">
                <div className="gradient-rule"></div>
                <h3 className="font-bold text-sm uppercase tracking-widest text-primary w-full border-b border-border pb-2 mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {['Identifies critical operational gaps before external penalties.', 'Eliminates compliance fatigue through practical instruction.', 'Generates a self-sustaining culture of internal governance.'].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 shrink-0 text-accent" />
                      <span className="text-zinc-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-10">
                <h3 className="font-bold text-sm uppercase tracking-widest text-primary w-full border-b border-border pb-2 mb-4">Real-World Use Cases</h3>
                <div className="space-y-4">
                  <div className="bg-secondary border border-border p-4 rounded-lg">
                    <h4 className="font-bold text-primary mb-1">Pre-Certification Gap Analysis</h4>
                    <p className="text-sm text-zinc-600">Simulating a hostile compliance audit to test controls and generate an exact remediation roadmap before official ISO 27001 evaluation.</p>
                  </div>
                  <div className="bg-secondary border border-border p-4 rounded-lg">
                    <h4 className="font-bold text-primary mb-1">Implementer Workshops</h4>
                    <p className="text-sm text-zinc-600">Training your internal IT leads on the exact architectural standards necessary to maintain newly minted compliance frameworks sustainably.</p>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="btn btn-primary px-8 h-12 text-sm max-w-max">
                Build Corporate Resilience
              </Link>
            </div>

            <div className="bg-primary text-white p-10 lg:p-14 rounded-2xl shadow-xl relative overflow-hidden">
              {/* DiagonalLines: fills dark background */}
              <DiagonalLines />
              {/* White glow: top-left depth on dark card */}
              <AmbientGlow position="top-left" color="white" size="sm" />
              {/* White corner: bottom-right bracket framing */}
              <CornerAccent corner="bottom-right" color="white" />
              <h3 className="font-black text-2xl uppercase mb-8">Training Modules</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-primary mb-1 uppercase tracking-wider text-sm flex items-center gap-2">
                    <Shield className="w-4 h-4" /> General Awareness
                  </h4>
                  <p className="text-sm text-zinc-400 font-medium">Equips the broad workforce with anti-phishing, data hygiene, and day-to-day policy adherence techniques.</p>
                </div>
                <div className="bg-white/10 h-px w-full"></div>
                <div>
                  <h4 className="font-bold text-primary mb-1 uppercase tracking-wider text-sm flex items-center gap-2">
                    <Database className="w-4 h-4" /> Certified Implementer
                  </h4>
                  <p className="text-sm text-zinc-400 font-medium">Technical curriculum for mid-level managers tasked with deploying and administering frameworks.</p>
                </div>
                <div className="bg-white/10 h-px w-full"></div>
                <div>
                  <h4 className="font-bold text-primary mb-1 uppercase tracking-wider text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Internal Auditor Track
                  </h4>
                  <p className="text-sm text-zinc-400 font-medium">Advanced protocols equipping governance personnel to self-audit systems ahead of regulatory deadlines.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="bg-secondary border border-border rounded-xl p-10 md:p-16 text-center max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">Ready to fortify your operations?</h2>
            <p className="text-lg text-zinc-600 font-medium mb-10 max-w-2xl">
              Schedule a consultation with our system architects. We will blueprint your exact compliance and data engineering needs within 48 hours.
            </p>
            <Link href="/contact" className="btn btn-primary px-10 h-14 text-base shadow-lg hover:-translate-y-1 transition-transform">
              Get an Official Proposal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
