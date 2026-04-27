import Link from 'next/link';
import { ArrowRight, Shield, Brain, Activity, Eye, Play, Database, GraduationCap } from 'lucide-react';
import { CorporateGrid, TechMesh, AmbientGlow, DotsPattern, DiagonalLines, SweepingGradient, FloatingISOAccents, HeroFloatingIcons } from '@/components/ui/AbstractDecorators';
import { NewsTicker } from '@/components/ui/NewsTicker';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ASAR GLOBAL | Enterprise Technology & Compliance Solutions',
  description: 'ASAR Global specializes in ISO Consultancy, uncompromising corporate compliance architectures, automated ETL pipelines, and Data Engineering.',
  openGraph: {
    title: 'ASAR GLOBAL | Enterprise Technology & Compliance Solutions',
    description: 'Transform your operational infrastructure with uncompromising global compliance frameworks and precision data engineering.',
    url: '/',
  },
};
export default function Home() {
  return (
    <>
      <section className="hero min-h-[100svh] flex items-center relative overflow-hidden bg-background">
        {/* Sweeping blue background blur */}
        <SweepingGradient />
        {/* Grid: fine structural depth across the full hero */}
        <CorporateGrid />
        {/* Soft bloom: perceived depth centered behind the headline */}
        <AmbientGlow position="center" color="primary" size="lg" />
        <HeroFloatingIcons />

        <div className="container grid-2-cols relative z-10 pt-32 pb-20 lg:py-20 min-h-[100svh] lg:min-h-0">
          {/* Text Content */}
          <div className="flex flex-col justify-center h-full">
            <div className="inline-flex items-center gap-3 border-2 border-foreground pl-4 pr-5 py-2 mb-10 bg-white w-max shadow-[6px_6px_0_#000]">
              <div className="w-2.5 h-2.5 bg-primary"></div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-foreground">System Protocols Active</span>
            </div>

            <h1 className="hero-h1">
              BUILD SMART.<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">SECURE BETTER.</span><br />
              AUTOMATE ALL.
            </h1>

            <div className="h-0.5 w-32 bg-foreground mb-12"></div>

            <p className="text-xl md:text-2xl font-bold max-w-[45ch] mb-12 leading-relaxed text-[#082652] tracking-tight">
              Robust ISO frameworks, precise compliance audits, and enterprise-grade Data Engineering pipelines for the modern era.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <Link href="/contact" className="btn btn-primary h-14 md:h-16 px-8 md:px-10 text-base md:text-lg shadow-lg shadow-primary/20">
                Request Architectural Blueprint
              </Link>
              <Link href="/services" className="btn btn-outline h-14 md:h-16 px-8 md:px-10 text-base md:text-lg bg-white/50 backdrop-blur-sm border-border">
                Explore Modules
              </Link>
            </div>
          </div>

          {/* Visual Content: The "Architectural Table" Design */}
          <div className="flex justify-center lg:justify-end items-center h-full mt-12 lg:mt-0 w-full">
            <div className="w-full max-w-md border-2 border-foreground bg-white shadow-[12px_12px_0_#000] lg:shadow-[20px_20px_0_#000] overflow-hidden">
              <div className="border-b-2 border-foreground p-6 bg-muted/10 flex justify-between items-center">
                <span className="font-black text-xs uppercase tracking-widest text-foreground">/// ASAR_STATUS_GRID</span>
                <div className="flex gap-2">
                  <div className="w-3 h-3 border-2 border-foreground"></div>
                  <div className="w-3 h-3 bg-foreground"></div>
                </div>
              </div>
              <div className="tech-grid grid-cols-2">
                <div className="p-8 border-r border-b border-foreground group hover:bg-primary transition-all">
                  <span className="text-[10px] font-black uppercase text-muted-foreground block mb-4 group-hover:text-white/70 transition-colors">ISO_Status</span>
                  <div className="text-3xl font-black text-accent group-hover:text-white transition-colors">Ready</div>
                </div>
                <div className="p-8 border-b border-foreground group hover:bg-primary transition-all">
                  <span className="text-[10px] font-black uppercase text-muted-foreground block mb-4 group-hover:text-white/70 transition-colors">Compliance</span>
                  <div className="badge shadow-none translate-x-0 translate-y-0 text-[8px] group-hover:bg-white group-hover:text-primary transition-colors">ISO_READY</div>
                </div>
                <div className="p-8 border-r border-foreground group hover:bg-primary transition-all">
                  <span className="text-[10px] font-black uppercase text-muted-foreground block mb-4 group-hover:text-white/70 transition-colors">Data_Flow</span>
                  <div className="text-3xl font-black group-hover:text-white transition-colors">24/7</div>
                </div>
                <div className="p-8 group hover:bg-primary transition-all">
                  <span className="text-[10px] font-black uppercase text-muted-foreground block mb-4 group-hover:text-white/70 transition-colors">Pipelines</span>
                  <div className="text-3xl font-black group-hover:text-white transition-colors">99%</div>
                </div>
              </div>
              <div className="p-6 border-t-2 border-foreground bg-gradient-to-r from-primary to-primary-light">
                <span className="text-white font-mono text-[10px] uppercase tracking-widest">Secure Data Link Established // Region: MEA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── News Ticker ── Strategic placement between hero and first content section */}
      <NewsTicker />

      {/* The ASAR Advantage (Business Value) */}
      <section className="bg-white py-20 md:py-32 border-b border-border relative overflow-hidden">
        {/* TechMesh: data connectivity narrative */}
        <TechMesh />
        {/* DotsPattern: fills the wide background area on either side of the content */}
        <DotsPattern />
        {/* Floating ISO Accents for security theme */}
        <FloatingISOAccents />
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="lg:w-1/2">
              <span className="section-label">The ASAR Advantage</span>
              <h2 className="section-title mb-6">Engineered for<br />Enterprise Certainty.</h2>
              <p className="text-lg md:text-xl text-zinc-600 mb-8 font-medium">
                We transform complex regulatory requirements and massive data pipelines into streamlined, audit-ready operational assets.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "100% Audit Success Rate across global ISO frameworks.",
                  "Zero-friction ETL data pipelines built for enterprise scale.",
                  "Pragmatic, business-first approach to strict compliance."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0 bg-accent"></div>
                    <span className="font-bold text-primary uppercase text-sm tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-primary px-8 h-14 text-base shadow-sm hover:translate-y-[-2px] transition-transform">
                Schedule Consultation
              </Link>
            </div>

            <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* 4 value blocks */}
              <div className="p-8 border border-border bg-slate-50 hover:border-primary transition-colors">
                <Shield className="w-8 h-8 text-primary mb-6" />
                <h3 className="font-black uppercase text-primary text-sm mb-2">Bulletproof Security</h3>
                <p className="text-xs text-zinc-500 font-semibold leading-relaxed">NCA, SAMA, and SOC 2 compliance built natively into your core infrastructure.</p>
              </div>
              <div className="p-8 border border-border bg-slate-50 hover:border-primary transition-colors">
                <Database className="w-8 h-8 text-primary mb-6" />
                <h3 className="font-black uppercase text-primary text-sm mb-2">Data Precision</h3>
                <p className="text-xs text-zinc-500 font-semibold leading-relaxed">High-volume data pipelines engineered exclusively for exactly-once processing.</p>
              </div>
              <div className="p-8 border border-border bg-slate-50 hover:border-primary transition-colors sm:col-span-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <GraduationCap className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-black uppercase text-primary text-sm mb-2">Corporate Readiness</h3>
                  <p className="text-xs text-zinc-500 font-semibold leading-relaxed max-w-sm">End-to-end personnel training ensuring your workforce maintains compliance long after certification.</p>
                </div>
                <div className="shrink-0 hidden md:block opacity-10">
                  <Brain className="w-24 h-24 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Architecture */}
      <section className="bg-background min-h-screen flex flex-col justify-center py-20 relative overflow-hidden">
        {/* Grid: structured architecture theme */}
        <CorporateGrid />
        {/* Glow bottom-right: soft depth, primary navy only */}
        <AmbientGlow position="bottom-right" color="primary" size="md" />
        <div className="container relative z-10">
          <div className="mb-16">
            <span className="section-label">System Architecture</span>
            <h2 className="section-title">The Ecosystem.</h2>
          </div>

          <div className="tech-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-2 border-foreground shadow-[12px_12px_0_#000] md:shadow-[16px_16px_0_#000]">
            {[
              { title: 'ISO Frameworks', desc: 'Implementation for 16 specialized frameworks including ISO 27001, ISO 9001, SOC 2, HIPAA, NCA, SAMA, NDMO, and PDPL.', icon: Shield, href: '/services#iso' },
              { title: 'Audit & Training', desc: 'End-to-end compliance reviews, with specialized Implementer, Auditor, and general Awareness trainings.', icon: GraduationCap, href: '/services#training' },
              { title: 'Data Analytics', desc: 'Comprehensive Data Engineering, ETL, Data Pipelines, and Exploratory Data Analysis (EDA) driving outcomes.', icon: Database, href: '/services#data' }
            ].map((item, i) => (
              <div key={i} className="group hover:bg-primary transition-all duration-300 p-8 md:p-10 border-b md:border-b-0 md:border-l border-foreground first:border-l-0">
                <div className="card-icon group-hover:bg-white group-hover:text-primary border-foreground transition-all">
                  <item.icon className="h-8 w-8" />
                </div>
                <div className="h-px w-full bg-border mb-6 group-hover:bg-white/30 transition-colors"></div>
                <h3 className="text-2xl font-black uppercase mb-4 group-hover:text-white transition-colors">{item.title}</h3>
                <p className="text-zinc-600 group-hover:text-white/90 mb-6 font-bold leading-relaxed transition-colors uppercase text-xs tracking-tight">
                  {item.desc}
                </p>
                <Link href={item.href} className="inline-flex items-center font-black uppercase text-xs border-b-2 border-primary pb-0.5 text-primary group-hover:text-white group-hover:border-white transition-colors">
                  Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}

            {/* Featured Stat Node */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-[#082652] text-white p-8 md:p-12 border-t md:border-l-0 border-foreground relative overflow-hidden group hover:bg-primary transition-all duration-500 min-h-[300px] flex flex-col md:flex-row justify-between items-center gap-8">
              {/* Diagonal lines: fills the dark background of this CTA block subtly */}
              <DiagonalLines />
              {/* White corner accent: frames the dark block professionally */}

              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <Shield className="h-64 w-64 rotate-[-15deg] group-hover:text-white" />
              </div>
              <div className="text-left md:max-w-md relative z-10 w-full">
                <h3 className="text-3xl lg:text-4xl font-black uppercase mb-6 group-hover:text-white transition-colors leading-tight">Uncompromising<br />Compliance</h3>
                <p className="text-zinc-400 group-hover:text-white/80 mb-0 leading-relaxed transition-colors uppercase text-xs font-bold">
                  "Bulletproof security and audit readiness built natively into your core infrastructure."
                </p>
              </div>
              <div className="flex gap-4 relative z-10 w-full md:w-auto mt-6 md:mt-0 justify-start md:justify-end">
                <div className="border border-white/20 p-4 group-hover:border-white/40 transition-colors">
                  <div className="text-4xl font-black text-white group-hover:text-white transition-colors">15+</div>
                  <div className="text-xs uppercase tracking-widest text-zinc-300 group-hover:text-white/80 transition-colors">Industries</div>
                </div>
                <div className="border border-white/20 p-4 group-hover:border-white/40 transition-colors">
                  <div className="text-4xl font-black text-white group-hover:text-white transition-colors">100%</div>
                  <div className="text-xs uppercase tracking-widest text-zinc-300 group-hover:text-white/80 transition-colors">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="min-h-[40vh] md:min-h-[50vh] flex flex-col justify-center bg-primary text-white py-16 md:py-20 lg:py-24 relative overflow-hidden">
        {/* Corporate Grid on background */}
        <CorporateGrid color="white" />
        <FloatingISOAccents color="white" />
        <div className="container relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-none mb-4">Ready to <br />Deploy?</h2>
            <p className="text-lg md:text-xl opacity-90 font-bold uppercase tracking-tight">Schedule your consultation today.</p>
          </div>
          <Link href="/contact" className="btn bg-white text-primary h-16 md:h-20 px-8 md:px-12 text-lg md:text-xl hover:bg-white/90 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all w-full md:w-auto text-center">
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
