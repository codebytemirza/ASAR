import Link from 'next/link';
import { Check, Brain, Eye, Database, Laptop, Network, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Services | ASAR Systech',
  description: 'ISO Compliance, AI Automation, and SOC Services.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="min-h-[60vh] flex flex-col justify-center section-padding bg-muted/20 border-b border-border pb-20">
        <div className="container">
          <div className="max-w-4xl">
            <span className="section-label">Core Capabilities</span>
            <h1 className="hero-h1 text-5xl md:text-7xl mb-6">
              Solutions That <br /><span className="text-primary">Scale & Secure.</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-2xl leading-relaxed text-zinc-600">
              From international compliance frameworks to autonomous AI agents, we provide the architectural blueprint for your digital future.
            </p>
          </div>
        </div>
      </section>

      {/* ISO Section */}
      <section id="iso" className="min-h-screen flex flex-col justify-center section-padding bg-white relative">
        <div className="container">
          <div className="border border-foreground bg-white shadow-[12px_12px_0_#000] md:shadow-[16px_16px_0_#000]">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr]">
              <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-foreground bg-zinc-950 text-white">
                <h2 className="text-3xl md:text-4xl font-black uppercase mb-8 leading-tight">ISO & <br className="hidden md:block" />Standards</h2>
                <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                  Navigating the complex landscape of regulatory requirements. We offer end-to-end support from scoping to certification.
                </p>
                <ul className="space-y-4">
                  {['Gap Assessment', 'Documentation Design', 'Implementation', 'Internal Audit', 'Certification Support'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-wider">
                      <div className="w-1.5 h-1.5 bg-primary"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 md:p-12 bg-white">
                <h3 className="font-bold text-lg md:text-xl uppercase mb-8 border-b-2 border-primary w-max pb-1">Covered Standards</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                  {[
                    'ISO 27001', 'ISO 9001', 'ISO 20000-1', 'ISO 22301',
                    'ISO 14001', 'ISO 45001', 'ISO 50001', 'ISO 55001',
                    'NCA', 'SAMA'
                  ].map((iso) => (
                    <div key={iso} className="flex items-center gap-2 md:gap-3 border border-border p-3 md:p-4 hover:border-foreground hover:shadow-[4px_4px_0_#000] transition-all bg-muted/10">
                      <Check className="h-3 md:h-4 w-3 md:w-4 text-primary" />
                      <span className="font-bold text-[10px] md:text-sm">{iso}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Flow Graph */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-label mx-auto">The Protocol</span>
            <h2 className="section-title">Integration Lifecycle.</h2>
          </div>

          <div className="relative">
            {/* Connections (Desktop) */}
            <div className="hidden lg:block absolute top-[60px] left-0 w-full h-0.5 bg-border -z-10"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              {[
                { step: '01', title: 'Consultation', desc: 'Detailed gap analysis and capability assessment.' },
                { step: '02', title: 'Architecture', desc: 'Design of AI agents or SOC infrastructure.' },
                { step: '03', title: 'Deployment', desc: 'Seamless integration into existing cloud systems.' },
                { step: '04', title: 'Audit', desc: 'Final validation and ISO certification support.' },
              ].map((item, i) => (
                <div key={i} className="relative group">
                  <div className="w-16 h-16 md:w-20 md:h-20 mb-6 border-2 border-foreground bg-white text-primary flex items-center justify-center text-2xl md:text-3xl font-black shadow-[6px_6px_0_#000] group-hover:bg-foreground group-hover:text-white transition-all">
                    {item.step}
                  </div>
                  <div className="card h-full min-h-[160px] p-6 md:p-8 border-2 border-foreground shadow-none group-hover:bg-primary transition-colors">
                    <h3 className="font-black uppercase mb-3 text-lg group-hover:text-white transition-colors leading-tight">{item.title}</h3>
                    <p className="text-[10px] md:text-xs font-bold leading-relaxed uppercase tracking-tight group-hover:text-white/90 transition-colors">{item.desc}</p>
                  </div>
                  {i < 3 && (
                    <div className="hidden xl:block absolute top-10 -right-8 text-foreground">
                      <ArrowRight className="h-8 w-8" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI & Automation - Tech Grid */}
      <section id="ai" className="section-padding bg-muted/20">
        <div className="container">
          <div className="mb-16">
            <span className="section-label">Future Tech</span>
            <h2 className="section-title">Intelligence Grid.</h2>
          </div>

          <div className="tech-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-2 border-foreground shadow-[16px_16px_0_#000]">
            {/* Agentic AI */}
            <div className="group hover:bg-primary transition-all duration-300 p-10">
              <div className="card-icon group-hover:bg-white group-hover:text-primary border-foreground transition-all">
                <Brain className="h-8 w-8" />
              </div>
              <div className="h-px w-full bg-border mb-6 group-hover:bg-white/30 transition-colors"></div>
              <h3 className="text-2xl font-black uppercase mb-4 group-hover:text-white transition-colors">Agentic AI</h3>
              <p className="text-zinc-600 group-hover:text-white/90 mb-6 font-bold leading-relaxed transition-colors uppercase text-xs tracking-tight">
                Agents that understand intent. Customer support, market analysis, and internal ops automation.
              </p>
            </div>

            {/* Computer Vision */}
            <div className="group hover:bg-primary transition-all duration-300 border-l border-foreground p-10">
              <div className="card-icon group-hover:bg-white group-hover:text-primary border-foreground transition-all">
                <Eye className="h-8 w-8" />
              </div>
              <div className="h-px w-full bg-border mb-6 group-hover:bg-white/30 transition-colors"></div>
              <h3 className="text-2xl font-black uppercase mb-4 group-hover:text-white transition-colors">Computer Vision</h3>
              <p className="text-zinc-600 group-hover:text-white/90 mb-6 font-bold leading-relaxed transition-colors uppercase text-xs tracking-tight">
                YOLO & Pose Detection models for security surveillance, QC, and retail analytics.
              </p>
            </div>

            {/* Data Engineering */}
            <div className="group hover:bg-primary transition-all duration-300 border-l border-foreground p-10">
              <div className="card-icon group-hover:bg-white group-hover:text-primary border-foreground transition-all">
                <Database className="h-8 w-8" />
              </div>
              <div className="h-px w-full bg-border mb-6 group-hover:bg-white/30 transition-colors"></div>
              <h3 className="text-2xl font-black uppercase mb-4 group-hover:text-white transition-colors">Data Pipelines</h3>
              <p className="text-zinc-600 group-hover:text-white/90 mb-6 font-bold leading-relaxed transition-colors uppercase text-xs tracking-tight">
                Robust ETL and BI dashboards. Turning raw chaos into structured intelligence.
              </p>
            </div>

            {/* Row 2 */}
            <div className="group hover:bg-primary transition-all duration-300 border-t border-foreground p-10">
              <div className="card-icon group-hover:bg-white group-hover:text-primary border-foreground transition-all">
                <Laptop className="h-8 w-8" />
              </div>
              <div className="h-px w-full bg-border mb-6 group-hover:bg-white/30 transition-colors"></div>
              <h3 className="text-2xl font-black uppercase mb-4 group-hover:text-white transition-colors">Custom Software</h3>
              <p className="text-zinc-600 group-hover:text-white/90 mb-6 font-bold leading-relaxed transition-colors uppercase text-xs tracking-tight">
                Tailored CRM and workflow engines designed for your specific operational needs.
              </p>
            </div>

            <div className="group hover:bg-primary transition-all duration-300 border-t border-l border-foreground p-10">
              <div className="card-icon group-hover:bg-white group-hover:text-primary border-foreground transition-all">
                <Network className="h-8 w-8" />
              </div>
              <div className="h-px w-full bg-border mb-6 group-hover:bg-white/30 transition-colors"></div>
              <h3 className="text-2xl font-black uppercase mb-4 group-hover:text-white transition-colors">IoT Systems</h3>
              <p className="text-zinc-600 group-hover:text-white/90 mb-6 font-bold leading-relaxed transition-colors uppercase text-xs tracking-tight">
                Bridging physical and digital. Smart sensors and adaptive logic controls.
              </p>
            </div>

            <div className="bg-primary text-white p-12 flex flex-col justify-center border-t border-l border-border">
              <h3 className="text-3xl font-black uppercase mb-4 leading-none">Ready to<br />Automate?</h3>
              <Link href="/contact" className="inline-flex items-center font-bold uppercase tracking-wider text-sm hover:underline">
                Get a Proposal <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
