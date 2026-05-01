"use client";

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ChevronDown, Mail, MapPin, Shield, Clock, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { CorporateGrid, FloatingISOAccents, AmbientGlow } from "@/components/ui/AbstractDecorators";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as { success?: boolean; error?: string };

      if (!response.ok) {
        setError(result.error || 'Failed to submit request.');
        return;
      }

      setSubmitted(true);
    } catch {
      setError('Failed to submit request.');
    } finally {
      setLoading(false);
    }
  };

  const faqs = [
    {
      q: "How long does ISO certification take?",
      a: "Typically 3–6 months depending on your infrastructure. We deliver an exact roadmap during the initial blueprinting phase.",
    },
    {
      q: "Do you offer post-certification support?",
      a: "Yes. Our audit and training tracks ensure your workforce sustains compliance long after the auditors leave.",
    },
    {
      q: "How is pricing determined?",
      a: "Pricing is custom-architected based on data payload size and required standards. Transparent flat-fee quotes are provided post-discovery.",
    },
  ];

  const steps = [
    { num: "01", title: "Discovery Call", desc: "30-min deep dive with a senior architect to analyze your goals." },
    { num: "02", title: "Architectural Blueprint", desc: "Comprehensive roadmap and transparent pricing within 48 hours." },
    { num: "03", title: "Execution & Handover", desc: "Rapid deployment, team training, and full audit support." },
  ];

  if (!mounted) return null;

  return (
    <>
      <section className="bg-secondary relative overflow-hidden">
        <CorporateGrid />
        <FloatingISOAccents />
        <AmbientGlow position="top-left" color="primary" size="lg" />

        {/* ── Hero ── */}
        <div className="container pt-24 pb-10 md:pt-32 md:pb-16 text-center relative z-10">
          <span className="section-label mx-auto mb-4">Initiate Consultation</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-[1.05] mb-4">
            Begin Your<br />
            <span className="text-accent">Transformation.</span>
          </h1>
          <p className="text-base md:text-xl text-zinc-600 font-medium max-w-2xl mx-auto">
            ISO Certification · Corporate Governance · Enterprise Data Engineering
          </p>
        </div>

        <div className="container relative z-10 pb-20 md:pb-32">
          {/* Mobile: Form first, then steps + FAQ below */}
          {/* Desktop: Side-by-side with sticky form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

            {/* ── Form — shown first on mobile via order ── */}
            <div className="lg:col-span-5 lg:order-2 w-full lg:sticky lg:top-8">
              <div className="bg-white border border-border rounded-2xl shadow-lg overflow-hidden">
                {/* Form header */}
                <div className="bg-primary px-7 py-5">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
                    <span className="text-accent text-[10px] font-black uppercase tracking-widest">Secure Channel</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white">Request a Proposal</h3>
                </div>

                <form className="p-6 md:p-8 space-y-5" suppressHydrationWarning>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="text-[11px] uppercase font-bold tracking-widest text-zinc-500">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="h-12 border border-border rounded-xl font-medium bg-secondary px-4 text-sm"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-[11px] uppercase font-bold tracking-widest text-zinc-500">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        className="h-12 border border-border rounded-xl font-medium bg-secondary px-4 text-sm"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="interest" className="text-[11px] uppercase font-bold tracking-widest text-zinc-500">
                      Service Required
                    </Label>
                    <Select onValueChange={(val) => setFormData({ ...formData, service: val })}>
                      <SelectTrigger className="h-12 border border-border rounded-xl font-medium bg-secondary px-4 text-sm">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border border-border">
                        <SelectItem value="iso">ISO Standards &amp; Certification</SelectItem>
                        <SelectItem value="ai">AI Services &amp; Automation</SelectItem>
                        <SelectItem value="training">Internal Audit &amp; Training</SelectItem>
                        <SelectItem value="data">Data Analysis &amp; Pipelines</SelectItem>
                        <SelectItem value="other">General Consulting</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-[11px] uppercase font-bold tracking-widest text-zinc-500">
                      Project Overview
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Brief overview of your compliance or data engineering goals..."
                      rows={4}
                      className="resize-none border border-border rounded-xl font-medium p-4 bg-secondary text-sm"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-primary flex-shrink-0"
                      required
                    />
                    <Label htmlFor="terms" className="text-xs text-zinc-500 font-medium leading-relaxed">
                      I agree to the{" "}
                      <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>{" "}
                      and{" "}
                      <Link href="/terms-of-service" className="text-primary hover:underline">Terms of Service</Link>.
                    </Label>
                  </div>

                  <Button
                    type="button"
                    className="btn btn-primary w-full h-13 text-base rounded-xl shadow-md"
                    onClick={handleSubmit}
                    disabled={loading || submitted}
                  >
                    {loading ? 'Sending...' : submitted ? '✓ Request Sent!' : 'Submit Secure Request'}
                  </Button>

                  {submitted && (
                    <p className="text-sm text-green-600 font-medium">
                      We'll be in touch within 24 hours.
                    </p>
                  )}

                  {error && (
                    <p className="text-sm text-red-600 font-medium">
                      {error}
                    </p>
                  )}

                  <p className="text-[10px] text-center text-zinc-400 font-medium">
                    We never share your enterprise data.
                  </p>
                </form>
              </div>

              {/* Contact strip */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="mailto:contact@asarsystech.com"
                  className="flex items-center gap-3 bg-white border border-border rounded-xl px-4 py-3.5 hover:border-primary transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                    <Mail className="w-4 h-4 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Email</p>
                    <p className="text-xs font-bold text-primary truncate">contact@asarsystech.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 bg-white border border-border rounded-xl px-4 py-3.5">
                  <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Region</p>
                    <p className="text-xs font-bold text-primary">MEA · Global Operations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Left: Steps + Trust stats + FAQs ── */}
            <div className="lg:col-span-7 lg:order-1 flex flex-col gap-6">

              {/* What Happens Next — vertical timeline */}
              <div className="bg-white border border-border rounded-2xl p-6 md:p-8 shadow-sm">
                <h2 className="text-xl md:text-2xl font-extrabold text-primary mb-6">What Happens Next?</h2>
                <div className="flex flex-col gap-0">
                  {steps.map((step, i) => (
                    <div key={step.num} className="flex gap-4 group">
                      {/* Timeline track */}
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-sm">
                          <span className="text-white text-xs font-black">{step.num}</span>
                        </div>
                        {i < steps.length - 1 && (
                          <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/30 to-transparent my-2" />
                        )}
                      </div>
                      {/* Content */}
                      <div className={`pb-6 ${i === steps.length - 1 ? '' : ''}`}>
                        <h3 className="font-bold text-primary text-base mb-1">{step.title}</h3>
                        <p className="text-sm text-zinc-600 font-medium leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust stats row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: Shield, value: "100%", label: "Audit Success" },
                  { icon: Clock, value: "48h", label: "Blueprint Turnaround" },
                  { icon: CheckCircle2, value: "17", label: "ISO Standards" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white border border-border rounded-xl p-4 text-center hover:border-accent transition-colors">
                    <stat.icon className="w-5 h-5 text-accent mx-auto mb-2" />
                    <div className="text-xl md:text-2xl font-black text-primary">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* FAQs */}
              <div className="bg-white border border-border rounded-2xl p-6 md:p-8 shadow-sm">
                <h2 className="text-xl md:text-2xl font-extrabold text-primary mb-5">FAQs</h2>
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <div
                      key={i}
                      className={`border rounded-xl overflow-hidden transition-colors ${openFaq === i ? 'border-primary/30 bg-primary/5' : 'border-border bg-secondary'}`}
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-start justify-between gap-3 p-4 md:p-5 text-left font-bold text-primary text-sm"
                      >
                        <span className="leading-snug">{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-accent' : 'text-zinc-400'}`}
                        />
                      </button>
                      {openFaq === i && (
                        <div className="px-4 md:px-5 pb-4 md:pb-5 text-sm text-zinc-600 font-medium leading-relaxed border-t border-primary/10 pt-3">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}