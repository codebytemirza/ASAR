import Link from 'next/link';
import { ArrowRight, Server, Lock, Zap } from 'lucide-react';
import { CorporateGrid, TechMesh, AmbientGlow, DiagonalLines, HexGrid, FloatingISOAccents, SweepingGradient, HeroFloatingIcons } from '@/components/ui/AbstractDecorators';

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
            {/* ── Hero ── */}
            <section className="section-padding bg-muted/20 border-b border-border pb-16 relative overflow-hidden">
                <SweepingGradient />
                <AmbientGlow position="bottom-left" color="primary" size="lg" />
                <CorporateGrid />
                <HeroFloatingIcons />
                <div className="container relative z-10">
                    <div className="max-w-4xl">
                        <span className="section-label animate-fade-in">Infrastructure</span>
                        <h1 className="hero-h1 text-5xl md:text-7xl mb-6">
                            Technology Built for <br /><span className="text-primary">Business Value.</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-medium max-w-2xl text-zinc-600 leading-relaxed animate-fade-up delay-300">
                            We don&apos;t use technology for the sake of complexity. We deploy proven infrastructure designed explicitly to guarantee speed, infinitely scale your operations, and secure your regulatory standing.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Core Benefits ── Light treatment */}
            <section className="bg-white py-24 border-b border-border relative overflow-hidden">
                <HexGrid />
                <FloatingISOAccents />
                <AmbientGlow position="top-right" color="primary" size="lg" />
                <div className="container relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
                        <div>
                            <span className="section-label animate-fade-in">Technology Impact</span>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-primary leading-tight">
                                Translating Tech<br />to Corporate Impact
                            </h2>
                        </div>
                        <p className="text-zinc-500 max-w-xs font-medium leading-relaxed lg:text-right">
                            Every layer of our stack is chosen for measurable enterprise outcomes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Lock,
                                num: '01',
                                title: 'Verified Trust Architecture & SOC 2',
                                text: 'Under strict regulatory environments like SAMA and NDMO, security is paramount. Our compliance planes ensure data is encrypted, tracked, and securely managed end-to-end — inherently secure by design.',
                            },
                            {
                                icon: Server,
                                num: '02',
                                title: 'Enterprise Scalability',
                                text: 'Your technology must evolve with your market. We implement modular cloud capabilities that expand infinitely without requiring expensive underlying rewrites.',
                            },
                            {
                                icon: Zap,
                                num: '03',
                                title: 'Velocity & Performance',
                                text: 'Slow data pipelines cost millions in delayed decision-making. Our architectures (Apache Spark + dbt) process terabytes in real-time, delivering immediate BI insights.',
                            },
                        ].map((item) => (
                            <div key={item.num} className="group relative bg-secondary border border-border rounded-2xl p-8 hover:border-accent hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                                {/* Ghost number */}
                                <div className="absolute top-4 right-6 text-7xl font-black text-primary/5 select-none group-hover:text-accent/10 transition-colors font-mono">{item.num}</div>
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:border-accent group-hover:scale-110 transition-all duration-300 relative z-10">
                                    <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                </div>
                                {/* Accent rule */}
                                <div className="h-px bg-gradient-to-r from-accent/30 to-transparent mb-5" />
                                <h3 className="font-bold text-xl text-primary mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-sm text-zinc-600 leading-relaxed group-hover:text-zinc-700 transition-colors">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-12">
                        <Link href="/contact" className="btn btn-primary px-10 h-14 text-base shadow-lg">
                            Upgrade Your Infrastructure <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Deployment Stack ── */}
            <section className="section-padding bg-secondary relative overflow-hidden">
                <TechMesh />
                <FloatingISOAccents />
                <CorporateGrid />
                <div className="container px-4 md:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 mb-16 items-start">
                        <div className="lg:w-1/2">
                            <span className="section-label">Deployment Stack</span>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-0 leading-tight">The Deployment Stack</h2>
                        </div>
                        <div className="lg:w-1/2 space-y-4">
                            <p className="text-lg text-zinc-600 leading-relaxed">While our focus is strictly on business outcomes, our underlying architectural stack is built from industry-leading enterprise tooling.</p>
                            <p className="text-sm font-medium text-zinc-500 leading-relaxed">Our use of <strong className="text-primary">dbt</strong> and <strong className="text-primary">Apache Airflow</strong> ensures complete, transparent data lineage and exact reproducibility — allowing auditors to verify data integrity instantly, seamlessly merging data engineering with rigorous compliance requirements.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {[
                            { id: '01', title: 'ISO STANDARDS', color: 'border-t-[3px] border-t-accent', techs: ['ISO 27001', 'ISO 9001', 'ISO 27701', 'ISO 42001', 'ISO 18295', 'ISO 14001', 'ISO 45001', 'ISO 50001', 'ISO 55001', 'ISO 20000-1', 'ISO 22301'] },
                            { id: '02', title: 'REGIONAL REGULATORY', color: 'border-t-[3px] border-t-primary', techs: ['NCA', 'SAMA', 'PDPL', 'NDMO', 'SOC 2', 'HIPAA'] },
                            { id: '03', title: 'ASSESSMENTS & READINESS', color: 'border-t-[3px] border-t-accent', techs: ['Gap Analysis', 'Documentation Design', 'Compliance Audits', 'Awareness Training', 'Implementer Training', 'Auditor Training'] },
                            { id: '04', title: 'AI-POWERED DATA ENGINEERING', color: 'border-t-[3px] border-t-primary', techs: ['Python', 'SQL', 'Apache Spark', 'Kafka', 'Airflow', 'dbt', 'BigQuery', 'Snowflake', 'LangChain', 'OpenAI GPT-4o', 'LlamaIndex', 'CrewAI', 'LangGraph', 'Vector Databases'] },
                            { id: '05', title: 'AI AGENT SERVICES', color: 'border-t-[3px] border-t-accent', techs: ['Autonomous Customer Agents', 'RAG Knowledge Systems', 'Multi-Agent Orchestration', 'AI Compliance Co-Pilot', 'ISO 42001 AI Governance', 'LLM Pipeline Automation'] },
                        ].map((category) => (
                            <div key={category.id} className={`group bg-white ${category.color} rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full shadow-sm border border-border`}>
                                <div className="p-5 lg:p-6 border-b border-border flex items-center gap-2 bg-white">
                                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                                    <h3 className="font-black text-xs uppercase tracking-widest text-primary">{category.title}</h3>
                                </div>
                                <div className="p-6 flex flex-col gap-3 flex-grow">
                                    {category.techs.map((tech) => (
                                        <div key={tech} className="flex items-center gap-2.5 group/item">
                                            <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                                            <span className="text-sm font-medium text-zinc-600 group-hover/item:text-primary transition-colors">{tech}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Bottom CTA ── */}
            <section className="bg-white py-16 border-t border-border">
                <div className="container">
                    <div className="bg-primary text-white rounded-2xl p-10 md:p-16 text-center max-w-4xl mx-auto flex flex-col items-center shadow-xl relative overflow-hidden">
                        <DiagonalLines color="white" />
                        <FloatingISOAccents color="white" />
                        <AmbientGlow position="bottom-left" color="white" size="sm" />

                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight relative z-10">Build Audit-Ready Pipelines</h2>
                        <p className="text-lg text-white/80 font-medium mb-10 max-w-2xl relative z-10">
                            Stop gambling your compliance on patchwork technology. Speak to our architects to build a secure data infrastructure guaranteed to pass external ISO audits.
                        </p>
                        <Link href="/contact" className="btn bg-white text-primary px-10 h-14 text-base shadow-lg hover:-translate-y-1 transition-transform relative z-10">
                            Request an Architectural Blueprint
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
