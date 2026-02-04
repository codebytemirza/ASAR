"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  return (
    <>
      <section className="section-padding min-h-screen bg-muted/10">
        <div className="container grid-2-cols items-start">
          <div>
            <span className="section-label">Contact Us</span>
            <h1 className="hero-h1 mb-6 text-5xl md:text-7xl">Let's Build the <span className="text-primary">Future.</span></h1>
            <p className="text-xl text-zinc-600 mb-12 max-w-lg">
              Ready to automate your workflows, secure your perimeter, or achieve ISO compliance? Our solution architects are ready to help.
            </p>

            <div className="flex flex-col gap-4 md:gap-6">
              <div className="p-6 md:p-8 border-2 border-foreground bg-white shadow-[8px_8px_0_#000]">
                <h3 className="font-bold text-[10px] mb-2 uppercase tracking-[0.2em] text-muted-foreground">Direct Line</h3>
                <a href="mailto:abdullahcodewizard@gmail.com" className="text-xl md:text-2xl font-black hover:text-primary transition-colors break-all">abdullahcodewizard@gmail.com</a>
              </div>
              <div className="p-6 md:p-8 border-2 border-foreground bg-white shadow-[8px_8px_0_#000]">
                <h3 className="font-bold text-[10px] mb-2 uppercase tracking-[0.2em] text-muted-foreground">Support</h3>
                <a href="tel:+923284119134" className="text-2xl md:text-3xl font-black hover:text-primary transition-colors">+92 328 4119134</a>
              </div>
            </div>
          </div>

          <div className="border-2 border-foreground bg-white p-6 md:p-12 shadow-[12px_12px_0_#000] md:shadow-[16px_16px_0_#000]">
            <div className="mb-8 border-b-2 border-dashed border-gray-200 pb-4">
              <h3 className="font-bold uppercase text-lg">Transmission Form</h3>
              <p className="text-[10px] text-muted-foreground font-mono mt-1 uppercase">Secure Encrypted Channel // SSL 256-Bit</p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs uppercase font-black tracking-widest">Name</Label>
                <Input id="name" placeholder="ENTER IDENTIFIER" className="h-14 border-2 border-border focus:border-primary rounded-none font-medium" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs uppercase font-black tracking-widest">Email</Label>
                <Input id="email" type="email" placeholder="CONTACT@DOMAIN.COM" className="h-14 border-2 border-border focus:border-primary rounded-none font-medium" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interest" className="text-xs uppercase font-black tracking-widest">Target Sector</Label>
                <Select>
                  <SelectTrigger className="h-14 border-2 border-border focus:border-primary rounded-none font-medium">
                    <SelectValue placeholder="SELECT MODULE" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none border-2 border-foreground">
                    <SelectItem value="iso">ISO COMPLIANCE</SelectItem>
                    <SelectItem value="ai">AI AUTOMATION</SelectItem>
                    <SelectItem value="vision">COMPUTER VISION</SelectItem>
                    <SelectItem value="soc">SOC SERVICES</SelectItem>
                    <SelectItem value="other">OTHER</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs uppercase font-black tracking-widest">Message</Label>
                <Textarea id="message" placeholder="AWAITING INPUT..." rows={5} className="resize-none border-2 border-border focus:border-primary rounded-none font-medium p-4" />
              </div>

              <Button type="submit" className="btn btn-primary w-full h-16 text-lg mt-4 shadow-none hover:shadow-[6px_6px_0_#000]">
                Initiate Transmission
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
