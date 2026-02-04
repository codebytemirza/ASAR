export const metadata = {
  title: 'About Us | ASAR Systech',
  description: 'Detailed analysis of industries served by ASAR Systech.',
};

export default function AboutPage() {
  return (
    <>
      <section className="section-padding bg-muted/20 border-b border-border pb-20">
        <div className="container px-4 md:px-8">
          <span className="section-label">Who We Are</span>
          <h1 className="hero-h1">Strategic Partners in<br /><span className="text-primary">Transformation.</span></h1>
          <p className="text-xl md:text-2xl font-medium max-w-3xl text-zinc-600">
            We don't just supply technology; we embed resilience and intelligence into the core of your operations.
          </p>
        </div>
      </section>

      {/* Strategic Hierarchy Graph */}
      <section className="section-padding bg-white border-b border-border">
        <div className="container px-4 md:px-8">
          <div className="text-center mb-10 md:mb-16">
            <span className="section-label mx-auto">Our Core</span>
            <h2 className="section-title">Strategic Blueprint.</h2>
          </div>

          <div className="relative flex flex-col items-center">
            {/* Central Root */}
            <div className="z-10 bg-white px-8 md:px-10 py-6 md:py-8 border-2 border-foreground shadow-[10px_10px_0_#000] md:shadow-[12px_12px_0_#000] flex flex-col items-center group hover:bg-primary transition-all cursor-default">
              <span className="text-[8px] md:text-[10px] font-mono uppercase font-black mb-2 md:mb-3 opacity-60 group-hover:text-white/80 transition-colors">System_Mission // 01</span>
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest group-hover:text-white transition-colors">Digital Resilience</h3>
            </div>

            {/* Vertical Cable */}
            <div className="w-0.5 h-10 md:h-16 bg-foreground"></div>

            {/* Horizontal Bar (Desktop Only) */}
            <div className="hidden md:block w-full max-w-4xl h-0.5 bg-foreground"></div>

            {/* Branches Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 w-full max-w-5xl mt-6 md:mt-0">
              {[
                { title: 'Intelligence', tech: 'AI & Automation', icon: '01' },
                { title: 'Fortress', tech: 'Cybersecurity SOC', icon: '02' },
                { title: 'Framework', tech: 'ISO & Compliance', icon: '03' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  {/* Vertical connector for mobile/desktop */}
                  <div className="w-0.5 h-10 bg-foreground"></div>

                  <div className="w-full card p-8 md:p-10 text-center group hover:bg-primary transition-all border-2 border-foreground shadow-[8px_8px_0_#eee] md:shadow-[10px_10px_0_#eee] hover:shadow-none hover:translate-x-[6px] md:hover:translate-x-[10px] hover:translate-y-[6px] md:hover:translate-y-[10px]">
                    <div className="text-primary font-black text-[10px] mb-4 md:mb-6 border-b border-border pb-3 uppercase tracking-widest group-hover:text-white group-hover:border-white/20 transition-colors">Strategic_Part_{item.icon}</div>
                    <h4 className="text-xl md:text-2xl font-black uppercase mb-3 group-hover:text-white transition-colors leading-tight">{item.title}</h4>
                    <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground group-hover:text-white/70 transition-colors">{item.tech}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="industries" className="section-padding bg-background">
        <div className="container px-4 md:px-8">
          <h2 className="section-title mb-10 md:mb-16">Industry Expertise.</h2>

          <div className="tech-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-2 border-foreground shadow-[12px_12px_0_#000] md:shadow-[16px_16px_0_#000]">
            {[
              { title: 'IT & Telecom', desc: 'ISP infrastructure, 5G deployment support, and network security.', color: '#6B7FFF' },
              { title: 'Healthcare IT', desc: 'HIPAA compliant software, patient data protection, and smart hospital systems.', color: '#ef4444' },
              { title: 'Education', desc: 'LMS platforms, campus security, and academic data management.', color: '#f59e0b' },
              { title: 'Financial Services', desc: 'SAMA compliance, secure banking APIs, and high-frequency trading infra.', color: '#10b981' },
              { title: 'Manufacturing', desc: 'Industrial IoT, predictive maintenance, and consumer goods automation.', color: '#6366f1' },
              { title: 'Public Sector', desc: 'Advisory services, smart city initiatives, and NDMO compliance.', color: '#8b5cf6' },
              { title: 'BPO & Call Centers', desc: 'ISO 18295 compliance, AI agent support, and workforce optimization.', color: '#ec4899' },
              { title: 'Security Surveillance', desc: 'CCTV analytics, perimeter defense, and automated threat alerting.', color: '#14b8a6' },
              { title: 'Data Centers', desc: 'ISO 27001 readiness, energy management (ISO 50001), and uptime assurance.', color: '#0f172a' },
            ].map((item, i) => (
              <div key={i} className="group hover:bg-primary transition-colors border-border p-8 md:p-10">
                <div className="flex justify-between items-start mb-6 gap-4">
                  <h3 className="font-black text-lg md:text-xl uppercase tracking-tighter leading-none group-hover:text-white transition-colors">{item.title}</h3>
                  <div className="w-10 md:w-12 h-0.5 group-hover:bg-white flex-shrink-0" style={{ backgroundColor: item.color }}></div>
                </div>
                <div className="h-px w-full bg-border mb-6 group-hover:bg-white/20 transition-colors"></div>
                <p className="text-xs md:text-sm text-zinc-600 font-medium leading-relaxed group-hover:text-white/80 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
