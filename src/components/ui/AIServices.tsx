import React from 'react';
import { Bot, Network, Workflow, ShieldAlert, DatabaseZap, GraduationCap } from 'lucide-react';
import { CorporateGrid, TechMesh } from '@/components/ui/AbstractDecorators';

export function AIServices() {
  const services = [
    {
      title: "Autonomous Customer Care Agents",
      desc: "GPT-4o / Claude-powered AI agents that handle Tier-1 support, escalation routing, and multilingual engagement (Arabic + English) 24/7 without human intervention.",
      icon: Bot,
      tags: ["OpenAI GPT-4o", "LangChain"],
    },
    {
      title: "RAG Knowledge Base Systems",
      desc: "Retrieval-Augmented Generation pipelines that connect your enterprise documentation, SOPs, and compliance manuals to an always-current AI assistant.",
      icon: Network,
      tags: ["LlamaIndex", "LangChain", "Pinecone"],
    },
    {
      title: "Multi-Agent Workflow Orchestration",
      desc: "Autonomous multi-agent systems that coordinate research, analysis, reporting, and execution tasks across your organization simultaneously.",
      icon: Workflow,
      tags: ["CrewAI", "LangGraph", "AutoGen (Microsoft)"],
    },
    {
      title: "AI Compliance Co-Pilot",
      desc: "Continuously monitors your IT infrastructure, flags control deviations in real time, and generates auto-remediation reports aligned to ISO 27001, NCA, and SAMA.",
      icon: ShieldAlert,
      tags: ["LangChain", "GPT-4o", "custom ASAR tooling"],
    },
    {
      title: "Intelligent ETL & Data Pipelines",
      desc: "LLM-augmented data pipeline monitoring with anomaly detection, auto-schema correction, and natural language query interfaces for your data warehouse.",
      icon: DatabaseZap,
      tags: ["LlamaIndex", "OpenAI Assistants API", "LangSmith"],
    },
    {
      title: "Enterprise AI Readiness & ISO 42001",
      desc: "Full ISO/IEC 42001 (AI Management System) implementation — the only globally recognized standard for responsible AI governance in enterprise environments.",
      icon: GraduationCap,
      tags: ["ISO/IEC 42001", "Google ADK", "Semantic Kernel"],
    },
  ];

  return (
    <section id="ai" className="section-padding bg-muted/10 border-b border-border relative overflow-hidden">
      <CorporateGrid />
      <TechMesh />
      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="section-label mx-auto">AI-Powered Services</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6">Intelligent Automation & AI Services</h2>
          <p className="text-lg text-zinc-600 font-medium">
            We deploy production-grade AI agent architectures that transform enterprise workflows — from autonomous customer engagement to intelligent data pipelines.
          </p>
        </div>

        <div className="tech-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div key={i} className="group bg-white p-8 border border-border shadow-sm hover:border-accent transition-colors flex flex-col h-full">
              <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white text-primary transition-colors">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-zinc-600 text-sm font-medium leading-relaxed mb-6 flex-grow">
                {service.desc}
              </p>
              <div>
                <div className="text-[10px] font-black uppercase text-zinc-400 mb-3 tracking-widest">Powered by:</div>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, j) => (
                    <span key={j} className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-secondary border border-border text-[10px] font-bold text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
