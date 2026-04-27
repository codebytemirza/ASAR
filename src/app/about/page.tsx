import Link from 'next/link';
import { Shield, ArrowRight, Database, Target, CheckCircle2, Eye } from 'lucide-react';
import { CorporateGrid, AmbientGlow, DotsPattern, HexGrid, DiagonalLines, FloatingISOAccents, SweepingGradient, HeroFloatingIcons } from '@/components/ui/AbstractDecorators';
import { CoreValues } from '@/components/ui/CoreValues';
import { ValuesAnimation } from '@/components/ui/ValuesAnimation';

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
            <span className="section-label animate-fade-in">Corporate Overview</span>
            <h1 className="hero-h1 text-5xl md:text-7xl mb-6">
              Strategic Partners in<br /><span className="text-primary animate-shimmer">Digital Transformation.</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-2xl leading-relaxed text-zinc-600 animate-fade-up delay-300">
              We don't just supply technology; we embed structural resilience and intelligent data pipelines into the core of your operations.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-20 border-b border-border relative overflow-hidden">
        <DotsPattern />
        <FloatingISOAccents />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="group relative bg-gradient-to-br from-primary to-[#0a2f6b] text-white rounded-2xl p-10 overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                    <Target className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-xs font-black uppercase tracking-[0.2em] text-white/60">Our Mission</h2>
                </div>
                <p className="text-xl font-bold leading-relaxed text-white">
                  To engineer unshakeable corporate infrastructures. We empower global enterprises to leverage their data flawlessly while maintaining uncompromising adherence to strict regulatory standards.
                </p>
                <div className="mt-8 h-px bg-gradient-to-r from-accent/50 to-transparent" />
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative bg-secondary border border-border rounded-2xl p-10 overflow-hidden hover:border-primary hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">Our Vision</h2>
                </div>
                <p className="text-xl font-bold leading-relaxed text-zinc-800">
                  To become the definitive standard for enterprise data governance and infrastructural compliance across the MEA region and beyond.
                </p>
                <div className="mt-8 h-px bg-gradient-to-r from-primary/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ValuesAnimation />

      {/* Global Methodology & Governance Focus */}
      <section className="bg-primary py-24 border-b border-white/10 relative overflow-hidden">
        <CorporateGrid color="white" />
        <FloatingISOAccents color="white" />
        <AmbientGlow position="top-right" color="white" size="lg" />
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div>
              <span className="section-label bg-white/10 text-accent border-accent/50 mb-4">Enterprise Governance</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">Our Approach to<br />Data Privacy &amp; Risk Management</h2>
            </div>
            <p className="text-white/50 max-w-sm font-medium leading-relaxed lg:text-right">
              AI-enhanced governance that embeds compliance into the operational fabric of your enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                icon: Shield,
                title: 'Data as a Strategic Asset',
                text: 'At ASAR Global, we recognize Data Privacy and Risk Management as powerful competitive advantages — not compliance burdens. For MEA enterprises, alignment with ISO 27001, NCA, and SAMA is the foundation of enterprise credibility and market access.',
                tag: 'AI-Powered Insight',
              },
              {
                num: '02',
                icon: Database,
                title: 'Governance Architectures, Not Just Software',
                text: 'Our systemic approach fuses deep technical engineering with robust governance methodologies — embedding automated security controls directly into your ETL pipelines and data warehouses, so compliance becomes a natural, continuous operational outcome.',
                tag: 'AI-Powered Insight',
              },
              {
                num: '03',
                icon: CheckCircle2,
                title: 'End-to-End Resilience',
                text: 'From strategic gap analyses and precision data flow auditing to specialized workforce enablement programs, we design systems fundamentally built to withstand cyber threats and satisfy the most rigorous regulatory standards.',
                tag: 'AI-Powered Insight',
              },
            ].map((card) => (
              <div key={card.num} className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-accent/40 transition-all duration-300 flex flex-col overflow-hidden">
                {/* Ghost number */}
                <div className="absolute top-4 right-6 text-7xl font-black text-white/5 select-none group-hover:text-white/10 transition-colors font-mono">{card.num}</div>
                {/* Icon + tag row */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <card.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-black uppercase tracking-widest border border-accent/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                    {card.tag}
                  </span>
                </div>
                {/* Accent line */}
                <div className="h-px bg-gradient-to-r from-accent/40 to-transparent mb-5 relative z-10" />
                <h3 className="text-xl font-black text-white mb-4 relative z-10 leading-snug">{card.title}</h3>
                <p className="text-white/60 leading-relaxed font-medium relative z-10 text-sm flex-grow">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CoreValues />

      {/* Why Choose ASAR Global */}
      <section className="bg-secondary py-20 border-b border-border relative overflow-hidden">
        {/* CorporateGrid: structural depth to the 3-card section */}
        <CorporateGrid />
        <FloatingISOAccents />
        <div className="container relative z-10">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">Why Choose ASAR Global?</h2>
            <p className="text-lg text-zinc-600">
              Partnering with us means accelerating your path to operational excellence. We bring proven blueprints that guarantee operational success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm">
              <Shield className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold text-lg text-primary mb-3">Resilient Security by Design</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">Our methodologies natively embed global ISO standards into every data pipeline, ensuring seamless, penalty-free audits.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm">
              <Database className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold text-lg text-primary mb-3">Architectural Precision</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">We bypass generic solutions. Every ETL flow and compliance standard is architected specifically for your corporate environment.</p>
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
              We secure and scale operations across highly regulated industries. Explore how our exact standards resolve critical sectoral challenges.
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
