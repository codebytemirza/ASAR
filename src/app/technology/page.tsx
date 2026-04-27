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

            {/* ── Deployment Stack — Hierarchy Flow Diagram ── */}
            <section className="section-padding bg-secondary relative overflow-hidden">
                <TechMesh />
                <CorporateGrid />
                <div className="container px-4 md:px-8 relative z-10">

                    {/* Section header */}
                    <div className="text-center mb-14">
                        <span className="section-label mx-auto mb-4">Deployment Stack</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-primary leading-tight mb-4">The Architecture Map</h2>
                        <p className="text-zinc-500 max-w-xl mx-auto font-medium text-sm leading-relaxed">
                            Our integrated service architecture spans ISO compliance, regional regulatory alignment, data engineering, and AI — all converging into a single enterprise delivery system.
                        </p>
                    </div>

                    {/* ── Flow Diagram ── */}
                    <div className="flex flex-col items-center">

                        {/* ROOT NODE */}
                        <div className="bg-primary text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-3 shadow-xl shadow-primary/20 relative z-10">
                            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                            </span>
                            ASAR Global — Integrated Service Architecture
                            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                            </span>
                        </div>

                        {/* Root → Horizontal bridge */}
                        <div className="relative w-full flex flex-col items-center">
                            {/* Vertical stem from root */}
                            <div className="w-px h-8 bg-primary/30" />

                            {/* Horizontal bar */}
                            <div className="relative w-full">
                                <div className="absolute top-0 left-[10%] right-[10%] h-px bg-primary/20" />

                                {/* 5 Pillar columns */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 pt-0">
                                    {[
                                        {
                                            id: '01', title: 'ISO Standards',
                                            accent: 'border-accent bg-accent/5',
                                            dot: 'bg-accent',
                                            items: ['ISO 27001', 'ISO 9001', 'ISO 27701', 'ISO 42001', 'ISO 18295', 'ISO 14001', 'ISO 45001', 'ISO 50001', 'ISO 55001', 'ISO 20000-1', 'ISO 22301'],
                                        },
                                        {
                                            id: '02', title: 'Regional Regulatory',
                                            accent: 'border-primary bg-primary/5',
                                            dot: 'bg-primary',
                                            items: ['NCA', 'SAMA', 'PDPL', 'NDMO', 'SOC 2', 'HIPAA'],
                                        },
                                        {
                                            id: '03', title: 'Assessments & Readiness',
                                            accent: 'border-accent bg-accent/5',
                                            dot: 'bg-accent',
                                            items: ['Gap Analysis', 'Documentation Design', 'Compliance Audits', 'Awareness Training', 'Implementer Training', 'Auditor Training'],
                                        },
                                        {
                                            id: '04', title: 'Data Engineering',
                                            accent: 'border-primary bg-primary/5',
                                            dot: 'bg-primary',
                                            items: ['Python', 'SQL', 'Apache Spark', 'Kafka', 'Airflow', 'dbt', 'BigQuery', 'Snowflake', 'LangChain', 'OpenAI GPT-4o', 'LlamaIndex', 'LangGraph', 'Vector Databases'],
                                        },
                                        {
                                            id: '05', title: 'AI Agent Services',
                                            accent: 'border-accent bg-accent/5',
                                            dot: 'bg-accent',
                                            items: ['Autonomous Customer Agents', 'RAG Knowledge Systems', 'Multi-Agent Orchestration', 'AI Compliance Co-Pilot', 'ISO 42001 AI Governance', 'LLM Pipeline Automation'],
                                        },
                                    ].map((col) => (
                                        <div key={col.id} className="flex flex-col items-center">
                                            {/* Vertical drop from horizontal bar to pillar */}
                                            <div className="w-px h-8 bg-primary/20" />

                                            {/* Pillar node */}
                                            <div className={`w-full border-2 ${col.accent} rounded-xl px-4 py-3 flex items-center gap-2 shadow-sm mb-0`}>
                                                <div className={`w-2 h-2 rounded-full ${col.dot} flex-shrink-0`} />
                                                <h3 className="font-black text-[11px] uppercase tracking-widest text-primary leading-tight">{col.title}</h3>
                                            </div>

                                            {/* Vertical drop to items */}
                                            <div className="w-px h-4 bg-primary/20" />

                                            {/* Leaf items */}
                                            <div className="w-full flex flex-col gap-1.5">
                                                {col.items.map((item) => (
                                                    <div key={item} className="group flex items-center gap-2 bg-white border border-border rounded-lg px-3 py-2 hover:border-accent hover:bg-accent/5 transition-all duration-200">
                                                        <div className={`w-1 h-1 rounded-full ${col.dot} opacity-60 flex-shrink-0 group-hover:opacity-100`} />
                                                        <span className="text-[11px] font-semibold text-zinc-600 group-hover:text-primary transition-colors leading-tight">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Bottom convergence — all pillars flow into delivery */}
                        <div className="flex flex-col items-center mt-8 w-full">
                            <div className="relative w-full flex justify-center">
                                <div className="absolute top-0 left-[10%] right-[10%] h-px bg-primary/20" />
                            </div>
                            <div className="w-px h-8 bg-primary/30 mt-0" />
                            <div className="bg-white border-2 border-primary/20 rounded-2xl px-8 py-4 flex items-center gap-4 shadow-sm">
                                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                                    <Zap className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest font-black text-accent mb-0.5">Unified Delivery</p>
                                    <p className="text-sm font-bold text-primary">Audit-Ready Enterprise Outcome</p>
                                </div>
                                <Link href="/contact" className="ml-4 btn btn-primary px-5 h-10 text-xs">
                                    Get Started <ArrowRight className="ml-1 w-3 h-3" />
                                </Link>
                            </div>
                        </div>

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
