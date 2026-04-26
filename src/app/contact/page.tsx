"use client";

import Link from 'next/link';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";
import { CorporateGrid, CornerAccent, DotsPattern } from "@/components/ui/AbstractDecorators";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How long does the ISO certification process take?",
      a: "Depending on your current infrastructure, timelines typically range from 3 to 6 months. We provide an exact roadmap during the initial blueprinting phase."
    },
    {
      q: "Do you offer post-certification support?",
      a: "Yes. Our audit and training tracks are designed to ensure your workforce sustains compliance long after the auditors leave. We offer continuous fractional support."
    },
    {
      q: "How do you price your data engineering and compliance services?",
      a: "We operate on massive organizational scale, so pricing is custom-architected based on exact data payload size and the number of legal frameworks required. We provide transparent, flat-fee quotes post-discovery."
    }
  ];

  return (
    <>
      <section className="py-20 md:py-32 min-h-screen bg-secondary border-b border-border relative overflow-hidden">
        {/* Grid: structural framing on the full page */}
        <CorporateGrid />
        {/* DotsPattern: fills the wide header background above the content */}
        <DotsPattern />
        {/* Corner accent: top-right bracket framing */}
        <CornerAccent corner="top-right" />
        <div className="container overflow-hidden">
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
            <span className="section-label mx-auto">Initiate Consultation</span>
            <h1 className="hero-h1 mb-6 text-5xl md:text-7xl tracking-tight">Begin your <span className="text-primary">Transformation.</span></h1>
            <p className="text-xl md:text-2xl text-zinc-600 font-medium">
              Fast-track your data engineering pipelines and secure your market position through uncompromising ISO compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left Side: Funnel Copy, Timeline, and FAQs */}
            <div className="lg:col-span-7 flex flex-col gap-12">

              {/* Trust Section */}
              <div className="bg-white p-8 md:p-10 border border-border shadow-sm rounded-2xl">
                <h2 className="text-2xl font-extrabold text-primary mb-6">What Happens Next?</h2>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[1.1rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                  {/* Step 1 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary text-white font-bold text-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-sm border-4 border-white">
                      1
                    </div>
                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-border bg-secondary">
                      <h3 className="font-bold text-primary mb-1">Discovery Call</h3>
                      <p className="text-sm text-zinc-600 font-medium">A 30-minute deep dive with a senior architect to analyze your regulatory or data bottlenecks.</p>
                    </div>
                  </div>
                  {/* Step 2 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary text-white font-bold text-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-sm border-4 border-white">
                      2
                    </div>
                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-border bg-secondary">
                      <h3 className="font-bold text-primary mb-1">Architectural Blueprint</h3>
                      <p className="text-sm text-zinc-600 font-medium">Within 48 hours, receive a comprehensive project roadmap and transparent pricing protocol.</p>
                    </div>
                  </div>
                  {/* Step 3 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary text-white font-bold text-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-sm border-4 border-white">
                      3
                    </div>
                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-border bg-secondary">
                      <h3 className="font-bold text-primary mb-1">Execution & Handover</h3>
                      <p className="text-sm text-zinc-600 font-medium">We deploy the solution rapidly, train your internal teams, and support your final audits.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div className="bg-white p-8 md:p-10 border border-border shadow-sm rounded-2xl">
                <h2 className="text-2xl font-extrabold text-primary mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border border-border rounded-xl overflow-hidden text-left bg-secondary">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between p-5 text-left font-bold text-primary hover:bg-zinc-100 transition-colors"
                      >
                        {faq.q}
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                      </button>
                      <div className={`px-5 pb-5 text-sm text-zinc-600 font-medium leading-relaxed ${openFaq === i ? 'block' : 'hidden'}`}>
                        {faq.a}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:col-span-5 relative w-full lg:sticky lg:top-8">
              {/* Form card: very light backdrop-blur for depth — corporate, not trendy */}
              <div className="border border-border bg-white p-8 md:p-10 rounded-2xl shadow-md">
                <div className="mb-8 border-b border-border pb-6">
                  <h3 className="font-extrabold uppercase text-xl text-primary mb-2">Request Proposal</h3>
                  <p className="text-xs text-zinc-500 font-semibold uppercase tracking-widest line-clamp-1">Secure Enterprise Funnel</p>
                </div>

                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs uppercase font-bold tracking-widest text-zinc-500">Corporate Name</Label>
                    <Input id="name" placeholder="Enter your full name" className="h-14 border border-border focus:border-primary rounded-xl font-medium bg-secondary px-4" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs uppercase font-bold tracking-widest text-zinc-500">Official Email</Label>
                    <Input id="email" type="email" placeholder="contact@company.com" className="h-14 border border-border focus:border-primary rounded-xl font-medium bg-secondary px-4" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest" className="text-xs uppercase font-bold tracking-widest text-zinc-500">Service Required</Label>
                    <Select>
                      <SelectTrigger className="h-14 border border-border focus:border-primary rounded-xl font-medium bg-secondary px-4">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border border-border">
                        <SelectItem value="data">Data Analysis & Pipelines</SelectItem>
                        <SelectItem value="iso">ISO Frameworks & Certification</SelectItem>
                        <SelectItem value="training">Internal Audit & Training</SelectItem>
                        <SelectItem value="other">General Consulting</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs uppercase font-bold tracking-widest text-zinc-500">Project Specifics</Label>
                    <Textarea id="message" placeholder="Provide a brief overview of your infrastructure or compliance bottlenecks..." rows={4} className="resize-none border border-border focus:border-primary rounded-xl font-medium p-4 bg-secondary" />
                  </div>

                  <div className="flex items-start space-x-3 pt-2">
                    <input type="checkbox" id="terms" className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary" required />
                    <Label htmlFor="terms" className="text-xs text-zinc-500 font-medium leading-relaxed">
                      I agree to the <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link> and <Link href="/terms-of-service" className="text-primary hover:underline">Terms of Service</Link>. I understand my data will be processed securely.
                    </Label>
                  </div>

                  <Button type="button" className="btn btn-primary w-full h-14 text-base mt-2 shadow-sm rounded-xl">
                    Submit Secure Request
                  </Button>

                  <p className="text-[10px] text-center text-zinc-400 font-medium px-4 mt-4">
                    By submitting, you agree to our corporate privacy policy. We never share enterprise data.
                  </p>
                </form>
              </div>

              {/* Direct Contacts embedded under form seamlessly */}
              <div className="mt-8 flex flex-col md:flex-row gap-4 items-center justify-center">
                <div className="text-sm font-bold text-zinc-600">Email: <a href="mailto:contact@asarglobal.com" className="text-primary hover:underline">contact@asarglobal.com</a></div>
                <div className="hidden md:block w-1.5 h-1.5 bg-border rounded-full"></div>
                <div className="text-sm font-bold text-zinc-600">HQ: <span className="text-primary">ASAR Global Operations</span></div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
