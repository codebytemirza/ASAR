"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  return (
    <>
      <section className="section-padding min-h-screen bg-secondary">
        <div className="container grid-2-cols items-start">
          <div>
            <span className="section-label">Contact Us</span>
            <h1 className="hero-h1 mb-6 text-5xl md:text-7xl">Let's Build the <span className="text-primary">Future.</span></h1>
            <p className="text-xl text-zinc-600 mb-12 max-w-lg font-medium">
              Ready to automate your workflows, engineer your data, or achieve ISO compliance? Our solution architects are ready to help.
            </p>

            <div className="flex flex-col gap-4 md:gap-6">
              <div className="p-6 md:p-8 border border-border bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-xs mb-2 uppercase tracking-widest text-[#082652]/60">General Inquiries</h3>
                <a href="mailto:hello@asarglobal.com" className="text-xl md:text-2xl font-black hover:text-primary transition-colors text-[#082652]">hello@asarglobal.com</a>
              </div>
              <div className="p-6 md:p-8 border border-border bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-xs mb-2 uppercase tracking-widest text-[#082652]/60">Headquarters</h3>
                <p className="text-xl md:text-2xl font-black text-[#082652]">ASAR GLOBAL Operations</p>
              </div>
            </div>
          </div>

          <div className="border border-border bg-white p-6 md:p-12 rounded-2xl shadow-lg">
            <div className="mb-8 border-b border-border pb-4">
              <h3 className="font-extrabold uppercase text-lg text-[#082652]">Inquiry Protocol</h3>
              <p className="text-[10px] text-muted-foreground font-semibold mt-1 uppercase tracking-widest">Secure Client Channel</p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Name</Label>
                <Input id="name" placeholder="Enter full name" className="h-14 border border-border focus:border-primary rounded-lg font-medium shadow-sm" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Email</Label>
                <Input id="email" type="email" placeholder="contact@company.com" className="h-14 border border-border focus:border-primary rounded-lg font-medium shadow-sm" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interest" className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Service of Interest</Label>
                <Select>
                  <SelectTrigger className="h-14 border border-border focus:border-primary rounded-lg font-medium shadow-sm">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="rounded-lg border border-border">
                    <SelectItem value="data">Data Analysis & Pipelines</SelectItem>
                    <SelectItem value="iso">ISO Frameworks</SelectItem>
                    <SelectItem value="training">Audit & Training</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Message</Label>
                <Textarea id="message" placeholder="How can we help?" rows={5} className="resize-none border border-border focus:border-primary rounded-lg font-medium p-4 shadow-sm" />
              </div>

              <Button type="submit" className="btn btn-primary w-full h-16 text-lg mt-4 shadow-md">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
