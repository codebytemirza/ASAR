import Link from 'next/link';
import { ArrowRight, Shield, Brain, Activity, Eye, Play, Database, GraduationCap } from 'lucide-react';

export default function Home() {
  return (
    <>
      <section className="hero min-h-screen flex items-center relative overflow-hidden bg-background">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] animate-pulse -z-10"></div>

        <div className="container grid-2-cols relative z-10 py-20 min-h-screen">
          {/* Text Content */}
          <div className="flex flex-col justify-center h-full">
            <div className="inline-flex items-center gap-3 border-2 border-foreground pl-4 pr-5 py-2 mb-10 bg-white w-max shadow-[6px_6px_0_#000]">
              <div className="w-2.5 h-2.5 bg-primary"></div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-foreground">System Protocols Active</span>
            </div>

            <h1 className="hero-h1">
              BUILD SMART.<br />
              <span className="text-primary" style={{ WebkitTextStroke: '2px black' }}>SECURE BETTER.</span><br />
              AUTOMATE ALL.
            </h1>

            <div className="h-0.5 w-32 bg-foreground mb-12"></div>

            <p className="text-xl md:text-2xl font-bold max-w-[45ch] mb-12 leading-relaxed text-[#082652] tracking-tight">
              Enterprise-grade Data Engineering pipelines, robust ISO frameworks, and precise compliance audits for the modern era.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <Link href="/contact" className="btn btn-primary h-14 md:h-16 px-8 md:px-10 text-base md:text-lg">
                Start Protocol
              </Link>
              <Link href="/services" className="btn btn-outline h-14 md:h-16 px-8 md:px-10 text-base md:text-lg">
                Explore Modules
              </Link>
            </div>
          </div>

          {/* Visual Content: The "Architectural Table" Design */}
          <div className="hidden lg:flex justify-end items-center h-full">
            <div className="w-full max-w-md border-2 border-foreground bg-white shadow-[20px_20px_0_#000] overflow-hidden">
              <div className="border-b-2 border-foreground p-6 bg-muted/10 flex justify-between items-center">
                <span className="font-black text-xs uppercase tracking-widest text-foreground">/// ASAR_STATUS_GRID</span>
                <div className="flex gap-2">
                  <div className="w-3 h-3 border-2 border-foreground"></div>
                  <div className="w-3 h-3 bg-foreground"></div>
                </div>
              </div>
              <div className="tech-grid grid-cols-2">
                <div className="p-8 border-r border-b border-foreground group hover:bg-primary transition-all">
                  <span className="text-[10px] font-black uppercase text-muted-foreground block mb-4 group-hover:text-white/70 transition-colors">Data_Flow</span>
                  <div className="text-3xl font-black group-hover:text-white transition-colors">24/7</div>
                </div>
                <div className="p-8 border-b border-foreground group hover:bg-primary transition-all">
                  <span className="text-[10px] font-black uppercase text-muted-foreground block mb-4 group-hover:text-white/70 transition-colors">ISO_Status</span>
                  <div className="text-3xl font-black text-primary group-hover:text-white transition-colors">Ready</div>
                </div>
                <div className="p-8 border-r border-foreground group hover:bg-primary transition-all">
                  <span className="text-[10px] font-black uppercase text-muted-foreground block mb-4 group-hover:text-white/70 transition-colors">Pipelines</span>
                  <div className="text-3xl font-black group-hover:text-white transition-colors">99%</div>
                </div>
                <div className="p-8 group hover:bg-primary transition-all">
                  <span className="text-[10px] font-black uppercase text-muted-foreground block mb-4 group-hover:text-white/70 transition-colors">Compliance</span>
                  <div className="badge shadow-none translate-x-0 translate-y-0 text-[8px] group-hover:bg-white group-hover:text-primary transition-colors">ISO_READY</div>
                </div>
              </div>
              <div className="p-6 border-t-2 border-foreground bg-foreground text-white font-mono text-[10px] uppercase tracking-widest">
                Secure Data Link Established // Region: MEA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Architecture */}
      <section className="bg-background min-h-screen flex flex-col justify-center py-20">
        <div className="container">
          <div className="mb-16">
            <span className="section-label">System Architecture</span>
            <h2 className="section-title">The Ecosystem.</h2>
          </div>

          <div className="tech-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-2 border-foreground shadow-[12px_12px_0_#000] md:shadow-[16px_16px_0_#000]">
            {[
              { title: 'Data Analytics', desc: 'Comprehensive Data Engineering, ETL, Data Pipelines, and Exploratory Data Analysis (EDA) driving outcomes.', icon: Database, href: '/services#data' },
              { title: 'ISO Frameworks', desc: 'Implementation for 16 specialized frameworks including ISO 27001, ISO 9001, SOC 2, HIPAA, NCA, SAMA, NDMO, and PDPL.', icon: Shield, href: '/services#iso' },
              { title: 'Audit & Training', desc: 'End-to-end compliance reviews, with specialized Implementer, Auditor, and general Awareness trainings.', icon: GraduationCap, href: '/services#training' }
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
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <Activity className="h-64 w-64 rotate-[-15deg] group-hover:text-white" />
              </div>
              <div className="text-left md:max-w-md relative z-10 w-full">
                <h3 className="text-3xl lg:text-4xl font-black uppercase mb-6 group-hover:text-white transition-colors leading-tight">Data-Driven<br />Transformation</h3>
                <p className="text-zinc-400 group-hover:text-white/80 mb-0 leading-relaxed transition-colors uppercase text-xs font-bold">
                  "Turn noise into narrative. We help you understand the feeling of your market through precision data."
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
      <section className="min-h-[40vh] md:min-h-[50vh] flex flex-col justify-center bg-primary text-white border-y-2 border-foreground py-16 md:py-20 lg:py-24">
        <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-none mb-4">Ready to <br />Deploy?</h2>
            <p className="text-lg md:text-xl opacity-90 font-bold uppercase tracking-tight">Schedule your consultation today.</p>
          </div>
          <Link href="/contact" className="btn bg-white text-black h-16 md:h-20 px-8 md:px-12 text-lg md:text-xl hover:bg-black hover:text-white border-2 border-foreground shadow-[12px_12px_0_#000] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all w-full md:w-auto text-center">
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
