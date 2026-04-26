export const metadata = {
    title: 'Technology Stack | ASAR Systech',
    description: 'Our tech stack: Python, React, AWS, Docker, and more.',
};

export default function TechnologyPage() {
    return (
        <>
            <section className="section-padding bg-muted/20 border-b border-border pb-20">
                <div className="container">
                    <div className="max-w-4xl">
                        <span className="section-label">Our Stack</span>
                        <h1 className="hero-h1 text-5xl md:text-7xl">Built on <span className="text-primary">Performance.</span></h1>
                        <p className="text-xl md:text-2xl font-medium max-w-2xl text-zinc-600">
                            We deploy battle-tested, scalable technologies to ensure your infrastructure is always on.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-background border-t border-border overflow-hidden">
                <div className="container px-4 md:px-8">
                    <h2 className="section-title mb-10 md:mb-16">Ecosystem Architecture.</h2>

                    <div className="relative flex flex-col items-center gap-12">
                        {/* Level 1: Root */}
                        <div className="w-full max-w-sm border-2 border-foreground bg-white p-6 md:p-8 text-center shadow-[10px_10px_0_#000] md:shadow-[12px_12px_0_#000] group hover:bg-primary transition-all">
                            <span className="font-mono text-[8px] md:text-[10px] uppercase font-bold block mb-2 opacity-60 group-hover:text-white transition-colors">Deployment_Unit // Core</span>
                            <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest group-hover:text-white transition-colors">ASAR SYSTEM OS</h3>
                        </div>

                        <div className="h-16 w-0.5 bg-foreground"></div>

                        {/* Level 2: Branches */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground border-2 border-foreground shadow-[12px_12px_0_#000] md:shadow-[16px_16px_0_#000] w-full max-w-4xl">
                            <div className="bg-white p-8 md:p-12 text-center group hover:bg-primary transition-colors">
                                <h4 className="font-black uppercase text-lg md:text-xl mb-6 group-hover:text-white transition-colors">Data Engineering Plane</h4>
                                <div className="flex flex-wrap justify-center gap-2">
                                    <span className="badge shadow-none bg-primary/10 border-primary text-primary group-hover:bg-white group-hover:text-primary transition-colors">Apache Spark</span>
                                    <span className="badge shadow-none bg-primary/10 border-primary text-primary group-hover:bg-white group-hover:text-primary transition-colors">Apache Airflow</span>
                                    <span className="badge shadow-none bg-primary/10 border-primary text-primary group-hover:bg-white group-hover:text-primary transition-colors">dbt</span>
                                </div>
                            </div>
                            <div className="bg-white p-8 md:p-12 text-center border-t md:border-t-0 md:border-l-2 border-foreground group hover:bg-primary transition-colors">
                                <h4 className="font-black uppercase text-lg md:text-xl mb-6 group-hover:text-white transition-colors">ISO & Compliance Plane</h4>
                                <div className="flex flex-wrap justify-center gap-2">
                                    <span className="badge shadow-none bg-primary/10 border-primary text-primary group-hover:bg-white group-hover:text-primary transition-colors">Global ISO Standards</span>
                                    <span className="badge shadow-none bg-primary/10 border-primary text-primary group-hover:bg-white group-hover:text-primary transition-colors">Regional Compliance</span>
                                </div>
                            </div>
                        </div>

                        <div className="h-16 w-0.5 bg-foreground"></div>

                        {/* Level 3: Output */}
                        <div className="w-full border-2 border-foreground bg-white p-8 md:p-10 text-center border-dashed shadow-[6px_6px_0_#eee] md:shadow-[8px_8px_0_#eee]">
                            <span className="font-black uppercase tracking-[0.2em] text-primary text-xs md:text-sm">Unified Autonomous Enterprise Infrastructure</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-background">
                <div className="container px-4 md:px-8">
                    <div className="tech-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-foreground shadow-[10px_10px_0_#000] md:shadow-[16px_16px_0_#000]">
                        {[
                            { id: '01', title: 'Data Pipelines', techs: ['Python', 'SQL', 'Apache Spark', 'Kafka', 'Airflow', 'dbt', 'BigQuery', 'Snowflake'] },
                            { id: '02', title: 'ISO Frameworks', techs: ['ISO 27001', 'ISO 9001', 'ISO 27701', 'ISO 42001', 'ISO 18295', 'ISO 14001', 'ISO 45001', 'ISO 50001', 'ISO 55001', 'ISO 20000-1'] },
                            { id: '03', title: 'Regional Standards', techs: ['NCA', 'SAMA', 'PDPL', 'NDMO', 'SOC 2', 'HIPAA'] },
                            { id: '04', title: 'Assessments', techs: ['Gap Analysis', 'Documentation Design', 'Compliance Audits', 'Awareness Training', 'Implementer Training', 'Auditor Training'] },
                        ].map((category) => (
                            <div key={category.id} className="group p-0 flex flex-col h-full transition-all hover:bg-primary border-b md:border-b-0 border-foreground last:border-b-0 md:border-l first:border-l-0">
                                <div className="border-b border-foreground p-5 lg:p-6 bg-muted/30 group-hover:bg-primary-dark transition-colors">
                                    <h3 className="font-black text-[10px] md:text-xs uppercase tracking-[0.2em] text-primary group-hover:text-white">{category.id} // {category.title}</h3>
                                </div>
                                <div className="p-6 md:p-8 lg:p-10 flex flex-wrap gap-2 md:gap-3">
                                    {category.techs.map((tech) => (
                                        <span key={tech} className="badge shadow-none translate-x-0 translate-y-0 bg-muted/20 border-transparent hover:bg-primary hover:text-white group-hover:bg-white group-hover:text-primary transition-all">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
