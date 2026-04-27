import Link from 'next/link';
import { Shield, ArrowRight, Database, Target, CheckCircle2, Eye } from 'lucide-react';
import { CorporateGrid, AmbientGlow, DotsPattern, HexGrid, DiagonalLines, FloatingISOAccents, SweepingGradient, HeroFloatingIcons } from '@/components/ui/AbstractDecorators';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Overview & Mission',
  description: 'Learn about ASAR Global, our vision, and the specific industries we empower through precision Data Engineering and ISO Compliance architectures.',
  openGraph: {
    title: 'About ASAR Global | Corporate Overview',
    description: 'Learn about ASAR Global, our vision, and the specific industries we empower through precision Data Engineering and ISO Compliance architectures.',
    url: '/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="section-padding bg-muted/20 border-b border-border pb-16 relative overflow-hidden">
        <SweepingGradient />
        <AmbientGlow position="top-right" color="primary" size="lg" />
        {/* Grid: frames the large hero text, adds premium structured feel */}
        <CorporateGrid />
        <HeroFloatingIcons />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <span className="section-label">Corporate Overview</span>
            <h1 className="hero-h1 text-5xl md:text-7xl mb-6">
              Strategic Partners in<br /><span className="text-primary">Enterprise Transformation.</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-2xl leading-relaxed text-zinc-600">
              We don't just supply technology; we embed structural resilience and intelligent data pipelines into the core of your operations.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-20 border-b border-border relative overflow-hidden">
        {/* DotsPattern: fills the large white background on both sides of the 2-col layout */}
        <DotsPattern />
        <FloatingISOAccents />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-sm font-black uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" /> Our Mission
              </h2>
              <p className="text-xl font-bold text-zinc-800 leading-relaxed">
                To engineer unshakeable corporate infrastructures. We empower global enterprises to leverage their data flawlessly while maintaining uncompromising adherence to strict regulatory standards.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-black uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-primary" /> Our Vision
              </h2>
              <p className="text-xl font-bold text-zinc-800 leading-relaxed">
                To become the definitive standard for enterprise data governance and infrastructural compliance across the MEA region and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Methodology & Governance Focus */}
      <section className="bg-muted/10 py-20 border-b border-border relative overflow-hidden">
        <CorporateGrid />
        <FloatingISOAccents />
        <div className="container max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <span className="section-label mx-auto">Enterprise Governance</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Our Approach to Corporate Data Privacy & Risk Management</h2>
          </div>
          <div className="prose prose-lg max-w-none text-zinc-600 space-y-6 bg-white p-8 md:p-12 border border-border rounded-xl shadow-sm">
            <p>At ASAR Global, we view <strong>Data Privacy</strong> and <strong>Risk Management</strong> not as restrictive hurdles, but as powerful corporate assets. For enterprises operating within the MEA (Middle East & Africa) region and globally, maintaining compliance with frameworks like ISO 27001, NCA, and SAMA is no longer optional—it is the baseline for conducting enterprise-scale business.</p>
            <p>Our systemic approach blends deep technical engineering with robust governance methodologies. We do not just implement software; we engineer comprehensive <strong>Corporate Governance Architectures</strong>. By embedding automated security controls directly into your ETL pipelines and data warehouses, we ensure that compliance is a natural byproduct of your daily operations rather than a manual, error-prone checklist.</p>
            <p>From initial gap assessments and strict data flow auditing to specialized workforce training, we architect systems that are fundamentally resilient against both cyber threats and regulatory penalties.</p>
          </div>
        </div>
      </section>

      {/* Why Choose ASAR Global */}
      <section className="bg-secondary py-20 border-b border-border relative overflow-hidden">
        {/* CorporateGrid: structural depth to the 3-card section */}
        <CorporateGrid />
        <FloatingISOAccents />
        <div className="container relative z-10">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Why Choose ASAR Global?</h2>
            <p className="text-lg text-zinc-600">
              Partnering with us means ending the cycle of trial-and-error. We bring battle-tested blueprints that guarantee operational success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm">
              <Shield className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold text-lg text-primary mb-3">Zero-Compromise Security</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">Our methodologies natively embed global ISO standards into every data pipeline, ensuring seamless, penalty-free audits.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm">
              <Database className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold text-lg text-primary mb-3">Architectural Precision</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">We bypass generic solutions. Every ETL flow and compliance framework is architected specifically for your corporate environment.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm">
              <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold text-lg text-primary mb-3">Proven Success Blueprint</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">With a 100% certification success rate, we actively eliminate the massive risk associated with regulatory compliance.</p>
            </div>
          </div>

          <Link href="/contact" className="btn btn-primary px-8 h-12 text-sm max-w-max">
            Partner With Us Today
          </Link>
        </div>
      </section>

      {/* Industry Expertise */}
      <section id="industries" className="section-padding bg-white relative overflow-hidden">
        {/* HexGrid: fills the wide white background around the industry cards */}
        <HexGrid />
        <FloatingISOAccents />
        <div className="container relative z-10">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Sector Expertise</h2>
            <p className="text-lg text-zinc-600">
              We secure and scale operations across highly regulated industries. Explore how our exact frameworks resolve critical sectoral challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'IT & Telecom', usecase: 'Implementing foundational ISO 27001 ISMS and structuring massive ISP data logs for instantaneous analytic retrieval.', color: '#0f172a' },
              { title: 'Financial Services', usecase: 'Engineering high-frequency, exactly-once trading data pipelines fully compliant with strict SAMA mandates.', color: '#082652' },
              { title: 'Healthcare IT', usecase: 'Securing sensitive patient data architectures to ensure absolute HIPAA and regional PDPL compliance preceding hospital platform launches.', color: '#2563eb' },
              { title: 'Public Sector', usecase: 'Executing meticulous NDMO compliance gap-assessments and scaling smart-city IoT data warehouses securely.', color: '#475569' },
              { title: 'Manufacturing', usecase: 'Integrating IIoT (Industrial IoT) logs into centralized data lakes while maintaining ISO 14001 Environmental management architectures.', color: '#1e293b' },
              { title: 'Data Centers', usecase: 'Delivering end-to-end ISO 50001 (Energy Management) certification readiness and engineering zero-downtime ETL backups.', color: '#334155' }
            ].map((item, i) => (
              <div key={i} className="bg-secondary border border-border p-8 rounded-xl hover:border-primary transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-6 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <h3 className="font-bold text-lg text-primary uppercase tracking-tight">{item.title}</h3>
                </div>
                <div className="h-px w-full bg-border mb-4"></div>
                <h4 className="text-[10px] font-black uppercase text-primary tracking-widest mb-2">Corporate Use Case</h4>
                <p className="text-sm text-zinc-600 font-medium leading-relaxed">{item.usecase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="bg-muted/10 py-16 border-t border-border">
        <div className="container relative z-10">
          <div className="bg-primary text-white rounded-2xl p-10 md:p-16 text-center max-w-4xl mx-auto flex flex-col items-center relative overflow-hidden">
            {/* DiagonalLines: fills the dark background area */}
            <DiagonalLines color="white" />
            <FloatingISOAccents color="white" />
            {/* White glow: depth in top area of navy CTA block */}
            <AmbientGlow position="top-right" color="white" size="sm" />

            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Secure Your Market Position</h2>
            <p className="text-lg text-white/80 font-medium mb-10 max-w-2xl">
              Equip your enterprise with the data architecture and regulatory certifications required to dominate the modern corporate landscape. Contact our MEA-based enterprise architects today.
            </p>
            <Link href="/contact" className="btn bg-white text-primary px-10 h-14 text-base shadow-lg hover:-translate-y-1 transition-transform">
              Schedule Architecture Review
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
// Note: added import Eye at the top but since Eye is not in lucide-react in simple environments, let me make sure it is. Yes, Eye is in lucide-react.
