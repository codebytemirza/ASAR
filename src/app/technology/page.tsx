import Link from 'next/link';
import { ArrowRight, Server, Lock, Zap, CheckCircle2 } from 'lucide-react';
import { CorporateGrid, TechMesh, AmbientGlow, DiagonalLines, CornerAccent, HexGrid, FloatingISOAccents, SweepingGradient, HeroFloatingIcons } from '@/components/ui/AbstractDecorators';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Technology Stack & Infrastructure',
    description: 'Explore the high-performance data engineering and secure compliance infrastructure driving ASAR Global solutions.',
    openGraph: {
        title: 'Technology Stack & Infrastructure | ASAR Global',
        description: 'Explore the high-performance data engineering and secure compliance infrastructure driving ASAR Global solutions.',
        url: '/technology',
    },
};

export default function TechnologyPage() {
    return (
        <>
            <section className="section-padding bg-muted/20 border-b border-border pb-16 relative overflow-hidden">
                <SweepingGradient />
                <AmbientGlow position="bottom-left" color="primary" size="lg" />
                {/* Grid: consistent header framing */}
                <CorporateGrid />
                <HeroFloatingIcons />
                <div className="container relative z-10">
                    <div className="max-w-4xl">
                        <span className="section-label">Infrastructure</span>
                        <h1 className="hero-h1 text-5xl md:text-7xl mb-6">
                            Technology Built for <br /><span className="text-primary">Business Value.</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-medium max-w-2xl text-zinc-600 leading-relaxed">
                            We don't use technology for the sake of complexity. We deploy battle-tested infrastructure designed explicitly to guarantee speed, infinitely scale your operations, and secure your regulatory standing.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Business Benefits of our Tech */}
            <section className="bg-white py-20 border-b border-border relative overflow-hidden">
                {/* HexGrid: fills the wide white background of the 3-card benefits section */}
                <HexGrid />
                <FloatingISOAccents />
                <div className="container relative z-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-12 text-center">Translating Tech to Corporate Impact</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-secondary border border-border p-8 rounded-xl hover:border-primary transition-all">
                            <Lock className="w-10 h-10 text-primary mb-6" />
                            <h3 className="font-bold text-xl text-primary mb-3">Zero-Trust Security & SOC 2</h3>
                            <p className="text-sm text-zinc-600 leading-relaxed mb-4">Under strict regulatory environments like SAMA and NDMO, security is paramount. Our compliance planes ensure data is encrypted, tracked, and securely managed end-to-end. We architect systems from the ground up to pass rigorous SOC 2 Type II and ISO 27001 audits, meaning your data engineering pipelines are inherently secure by design.</p>
                        </div>

                        <div className="bg-secondary border border-border p-8 rounded-xl hover:border-primary transition-all">
                            <Server className="w-10 h-10 text-primary mb-6" />
                            <h3 className="font-bold text-xl text-primary mb-3">Enterprise Scalability</h3>
                            <p className="text-sm text-zinc-600 leading-relaxed mb-4">Your technology must evolve with your market. We implement modular Cloud capabilities that expand infinitely without requiring expensive underlying rewrites.</p>
                        </div>

                        <div className="bg-secondary border border-border p-8 rounded-xl hover:border-primary transition-all">
                            <Zap className="w-10 h-10 text-primary mb-6" />
                            <h3 className="font-bold text-xl text-primary mb-3">Velocity & Performance</h3>
                            <p className="text-sm text-zinc-600 leading-relaxed mb-4">Slow data pipelines cost millions in delayed decision-making. Our architectures (utilizing Apache Spark and dbt) process terabytes of data in real-time, delivering immediate BI insights.</p>
                        </div>
                    </div>

                    <div className="flex justify-center mt-12">
                        <Link href="/contact" className="btn btn-primary px-8 h-12 text-sm shadow-sm hover:-translate-y-1 transition-transform">
                            Upgrade Your Infrastructure
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-secondary relative overflow-hidden">
                {/* TechMesh: supports "deployment stack" / infrastructure narrative */}
                <TechMesh />
                <FloatingISOAccents />
                <div className="container px-4 md:px-8 relative z-10">
                    <div className="mb-12 max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">The Deployment Stack</h2>
                        <p className="text-lg text-zinc-600 mb-4">While our focus is strictly on business outcomes, our underlying architectural stack is built from industry-leading enterprise tooling.</p>
                        <p className="text-sm font-medium text-zinc-500">For example, our use of <strong>dbt</strong> and <strong>Apache Airflow</strong> ensures complete, transparent data lineage and exact reproducibility. This allows auditors reviewing your data warehouses (like BigQuery or Snowflake) to verify data integrity instantly, seamlessly merging enterprise data engineering with rigorous compliance requirements.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { id: '01', title: 'ISO Frameworks', techs: ['ISO 27001', 'ISO 9001', 'ISO 27701', 'ISO 42001', 'ISO 18295', 'ISO 14001', 'ISO 45001', 'ISO 50001', 'ISO 55001', 'ISO 20000-1'] },
                            { id: '02', title: 'Regional Standards', techs: ['NCA', 'SAMA', 'PDPL', 'NDMO', 'SOC 2', 'HIPAA'] },
                            { id: '03', title: 'Assessments', techs: ['Gap Analysis', 'Documentation Design', 'Compliance Audits', 'Awareness Training', 'Implementer Training', 'Auditor Training'] },
                            { id: '04', title: 'Data Pipelines', techs: ['Python', 'SQL', 'Apache Spark', 'Kafka', 'Airflow', 'dbt', 'BigQuery', 'Snowflake'] },
                        ].map((category) => (
                            <div key={category.id} className="bg-white border border-border rounded-xl overflow-hidden hover:border-primary transition-colors flex flex-col h-full shadow-sm">
                                <div className="bg-muted/30 p-5 lg:p-6 border-b border-border">
                                    <h3 className="font-bold text-xs uppercase tracking-widest text-primary">{category.title}</h3>
                                </div>
                                <div className="p-6 md:p-8 flex flex-col gap-3">
                                    {category.techs.map((tech) => (
                                        <div key={tech} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                            <span className="text-sm font-medium text-zinc-700">{tech}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA Block */}
            <section className="bg-white py-16 border-t border-border">
                <div className="container">
                    <div className="bg-primary text-white rounded-2xl p-10 md:p-16 text-center max-w-4xl mx-auto flex flex-col items-center shadow-xl relative overflow-hidden">
                        {/* DiagonalLines: subtle texture on dark CTA */}
                        <DiagonalLines color="white" />
                        <FloatingISOAccents color="white" />
                        {/* White glow: warmth bottom-left, purely from white */}
                        <AmbientGlow position="bottom-left" color="white" size="sm" />
                        {/* White corner accent: top-right bracket on dark block */}
                        <CornerAccent corner="top-right" color="white" />
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Build Audit-Ready Pipelines</h2>
                        <p className="text-lg text-white/80 font-medium mb-10 max-w-2xl">
                            Stop gambling your compliance on patchwork technology. Speak to our architects to build a secure data infrastructure guaranteed to pass external ISO audits.
                        </p>
                        <Link href="/contact" className="btn bg-white text-primary px-10 h-14 text-base shadow-lg hover:-translate-y-1 transition-transform">
                            Request an Architectural Blueprint
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
