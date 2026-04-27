import Link from 'next/link';
import { ArrowRight, Shield, Brain, Activity, Eye, Play, Database, GraduationCap } from 'lucide-react';
import { CorporateGrid, TechMesh, AmbientGlow, DotsPattern, DiagonalLines, SweepingGradient, FloatingISOAccents, HeroFloatingIcons } from '@/components/ui/AbstractDecorators';
import { NewsTicker } from '@/components/ui/NewsTicker';
import { CoreValues } from '@/components/ui/CoreValues';
import { ValuesAnimation } from '@/components/ui/ValuesAnimation';
import { AIServices } from '@/components/ui/AIServices';
import { ISOTicker } from '@/components/ui/ISOTicker';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ASAR GLOBAL | Enterprise Technology & Compliance Solutions',
  description: 'ASAR Global specializes in ISO Consultancy, uncompromising corporate compliance architectures, automated ETL pipelines, and Data Engineering.',
  openGraph: {
    title: 'ASAR GLOBAL | Enterprise Technology & Compliance Solutions',
    description: 'Transform your operational infrastructure with uncompromising global compliance standards and precision data engineering.',
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
            <div className="inline-flex items-center gap-2.5 bg-primary/5 border border-primary/20 rounded-full pl-3 pr-5 py-2 mb-10 w-max animate-fade-in shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
              </span>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">System Protocols Active</span>
            </div>

            <h1 className="hero-h1">
              BUILD SMART.<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">SECURE BETTER.</span><br />
              AUTOMATE ALL.
            </h1>

            <div className="h-0.5 w-32 bg-foreground mb-12 animate-fade-in delay-200"></div>

            <p className="text-xl md:text-2xl font-bold max-w-[45ch] mb-12 leading-relaxed text-[#082652] tracking-tight animate-fade-up delay-300">
              Robust ISO standards, precise compliance audits, and enterprise-grade Data Engineering pipelines for the modern era.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 animate-fade-up delay-400">
              <Link href="/contact" className="btn btn-primary h-14 md:h-16 px-8 md:px-10 text-base md:text-lg shadow-lg shadow-primary/20">
                Request Architectural Blueprint
              </Link>
              <Link href="/services" className="btn btn-outline h-14 md:h-16 px-8 md:px-10 text-base md:text-lg bg-white/50 backdrop-blur-sm border-border">
                Explore Modules
              </Link>
            </div>
          </div>

          {/* Visual Content: Premium Dashboard Card */}
          <div className="flex justify-center lg:justify-end items-center h-full mt-12 lg:mt-0 w-full animate-slide-right delay-200">
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl shadow-primary/30 border border-primary/20 animate-float bg-[#040F22]">
              {/* Terminal header bar */}
              <div className="px-5 py-3 bg-primary border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">/// ASAR_STATUS_GRID</span>
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              </div>
              {/* Grid cells */}
              <div className="grid grid-cols-2 gap-px bg-white/5">
                <div className="bg-[#040F22] p-7 group hover:bg-white/5 transition-all duration-300">
                  <div className="flex items-center gap-1.5 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40">ISO_Status</span>
                  </div>
                  <div className="text-3xl font-black text-accent">Ready</div>
                  <div className="text-[10px] text-white/20 mt-1 font-mono">CERTIFIED</div>
                </div>
                <div className="bg-[#040F22] p-7 group hover:bg-white/5 transition-all duration-300">
                  <div className="flex items-center gap-1.5 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Compliance</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 border border-accent/30 bg-accent/10 text-accent text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg">
                    <span className="w-1 h-1 rounded-full bg-accent"></span>
                    ISO_READY
                  </div>
                </div>
                <div className="bg-[#040F22] p-7 group hover:bg-white/5 transition-all duration-300 border-t border-white/5">
                  <div className="flex items-center gap-1.5 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Data_Flow</span>
                  </div>
                  <div className="text-3xl font-black text-white">24/7</div>
                  <div className="text-[10px] text-white/20 mt-1 font-mono">ACTIVE</div>
                </div>
                <div className="bg-[#040F22] p-7 group hover:bg-white/5 transition-all duration-300 border-t border-white/5">
                  <div className="flex items-center gap-1.5 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Pipelines</span>
                  </div>
                  <div className="text-3xl font-black text-white">99<span className="text-accent">%</span></div>
                  <div className="text-[10px] text-white/20 mt-1 font-mono">UPTIME</div>
                </div>
              </div>
              {/* Footer bar */}
              <div className="px-5 py-3.5 bg-primary border-t border-white/10 flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0"></div>
                <span className="text-white/50 font-mono text-[10px] uppercase tracking-widest">Secure Data Link Established // Region: MEA</span>
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
                  "100% Audit Success Rate across global ISO standards.",
                  "Seamless ETL data pipelines built for enterprise scale.",
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
              {/* Card 1 */}
              <div className="p-8 border border-border bg-white rounded-xl hover:border-accent hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <Shield className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-black uppercase text-primary text-sm mb-2">Fortress-Grade Security</h3>
                <p className="text-xs text-zinc-500 font-semibold leading-relaxed">NCA, SAMA, and SOC 2 compliance built natively into your core infrastructure.</p>
              </div>
              {/* Card 2 */}
              <div className="p-8 border border-border bg-white rounded-xl hover:border-accent hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <Database className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-black uppercase text-primary text-sm mb-2">Data Precision</h3>
                <p className="text-xs text-zinc-500 font-semibold leading-relaxed">High-volume data pipelines engineered exclusively for exactly-once processing.</p>
              </div>
              {/* Card 3 — wide */}
              <div className="p-8 border border-border bg-white rounded-xl hover:border-accent hover:shadow-lg hover:-translate-y-1 transition-all duration-300 sm:col-span-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <GraduationCap className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-black uppercase text-primary text-sm mb-2">Corporate Readiness</h3>
                  <p className="text-xs text-zinc-500 font-semibold leading-relaxed max-w-sm">End-to-end personnel training ensuring your workforce maintains compliance long after certification.</p>
                </div>
                <div className="shrink-0 hidden md:block opacity-10 group-hover:opacity-20 transition-opacity">
                  <Brain className="w-24 h-24 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ValuesAnimation />

      {/* ISO Compliance First — Light premium trust band */}
      <section className="relative overflow-hidden border-b border-border bg-white">
        <CorporateGrid />
        <FloatingISOAccents />
        <AmbientGlow position="top-right" color="primary" size="lg" />

        <div className="container relative z-10 py-16 md:py-24">
          {/* Top label */}
          <div className="flex justify-center mb-10">
            <span className="inline-flex items-center gap-2 bg-primary/5 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full">
              <Shield className="w-3.5 h-3.5 text-accent" />
              Our Core Competency
            </span>
          </div>

          {/* Main headline */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-6xl font-extrabold text-primary leading-tight mb-4">
              ISO Compliance.<br />
              <span className="text-accent">Not a Feature. Our Foundation.</span>
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto font-medium leading-relaxed">
              ASAR Global was built on ISO consultancy. Every tool, every engineer, every process is aligned to one outcome — getting your enterprise certified and keeping it that way.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {[
              { value: '17', label: 'ISO Standards Supported', sub: 'From 27001 to ISO 42001' },
              { value: '100%', label: 'Audit Success Rate', sub: 'Across all engagements' },
              { value: '15+', label: 'Industries Served', sub: 'MEA & global enterprises' },
              { value: '5+', label: 'Regional Mandates', sub: 'NCA, SAMA, PDPL, NDMO' },
            ].map((stat) => (
              <div key={stat.value} className="bg-secondary border border-border rounded-2xl p-6 text-center hover:border-accent hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="text-4xl md:text-5xl font-black text-primary mb-2 group-hover:text-accent transition-colors">{stat.value}</div>
                <div className="text-xs font-black uppercase tracking-widest text-accent mb-1">{stat.label}</div>
                <div className="text-xs text-zinc-400 font-medium">{stat.sub}</div>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/services#iso" className="btn btn-primary px-8 h-13 text-base shadow-lg hover:-translate-y-1 transition-all">
              View ISO &amp; Compliance Services
            </Link>
            <Link href="/contact" className="btn btn-outline border-primary/30 text-primary hover:bg-primary/5 px-8 h-13 text-base hover:-translate-y-1 transition-all">
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Ecosystem Architecture */}
      <section className="bg-secondary py-24 border-b border-border relative overflow-hidden">
        <CorporateGrid />
        <AmbientGlow position="bottom-right" color="primary" size="md" />
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-4">
            <div>
              <span className="section-label">System Architecture</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight">The Ecosystem.</h2>
            </div>
            <p className="text-zinc-500 max-w-xs font-medium text-sm leading-relaxed lg:text-right">
              Three integrated pillars that make up the full ASAR Global service architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'ISO Standards', desc: 'Implementation for 17 specialized standards including ISO 27001, ISO 9001, SOC 2, HIPAA, NCA, SAMA, NDMO, and PDPL.', icon: Shield, href: '/services#iso', num: '01' },
              { title: 'Audit & Training', desc: 'End-to-end compliance reviews, with specialized Implementer, Auditor, and general Awareness trainings.', icon: GraduationCap, href: '/services#training', num: '02' },
              { title: 'Data Analytics', desc: 'Comprehensive Data Engineering, ETL, Data Pipelines, and Exploratory Data Analysis (EDA) driving enterprise outcomes.', icon: Database, href: '/services#data', num: '03' }
            ].map((item) => (
              <div key={item.num} className="group relative bg-white border border-border rounded-2xl p-8 hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
                {/* Ghost number */}
                <div className="absolute top-4 right-6 text-8xl font-black text-primary/4 select-none font-mono group-hover:text-accent/10 transition-colors">{item.num}</div>
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all duration-300 relative z-10">
                  <item.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                </div>
                {/* Accent rule */}
                <div className="h-px bg-gradient-to-r from-accent/30 to-transparent mb-5" />
                <h3 className="text-2xl font-black text-primary mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-zinc-500 leading-relaxed font-medium text-sm mb-6 flex-grow">{item.desc}</p>
                <Link href={item.href} className="inline-flex items-center font-black uppercase text-xs text-accent hover:text-primary transition-colors gap-1.5 group/link">
                  View Details <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}

            {/* Featured CTA Node */}
            <div className="md:col-span-3 relative bg-primary rounded-2xl p-10 md:p-14 overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8">
              <DiagonalLines />
              <FloatingISOAccents color="white" />
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Shield className="h-64 w-64 rotate-[-15deg]" />
              </div>
              <div className="text-left relative z-10">
                <p className="text-accent text-xs font-black uppercase tracking-widest mb-3">100% Certified</p>
                <h3 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">Excellence in<br />Compliance</h3>
                <p className="text-white/60 leading-relaxed text-sm max-w-sm">
                  Industry-leading security and audit confidence, built natively into your core infrastructure.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 relative z-10 shrink-0">
                <div className="bg-white/10 border border-white/20 rounded-xl px-8 py-5 text-center">
                  <div className="text-4xl font-black text-white">15+</div>
                  <div className="text-xs uppercase tracking-widest text-white/50 mt-1">Industries</div>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-xl px-8 py-5 text-center">
                  <div className="text-4xl font-black text-accent">100%</div>
                  <div className="text-xs uppercase tracking-widest text-white/50 mt-1">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CoreValues />

      <AIServices />

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

      <ISOTicker />
    </>
  );
}
