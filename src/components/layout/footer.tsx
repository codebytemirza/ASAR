import Link from 'next/link';
import { Logo } from '../icons/logo';
import { Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t-2 border-foreground mt-auto">
      {/* Top Grid */}
      <div className="container px-0 md:px-4">
        <div className="tech-grid grid-cols-1 md:grid-cols-4 border-b-2 border-foreground shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          {/* Brand Col */}
          <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-between border-b md:border-b-0 border-foreground group hover:bg-primary transition-all duration-300">
            <div>
              <Logo className="h-8 w-auto text-foreground group-hover:text-white mb-8 transition-colors" />
              <div className="space-y-4 font-black text-[10px] uppercase tracking-[0.2em] text-zinc-500 group-hover:text-white transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 group-hover:bg-white shadow-[0_0_8px_rgba(34,197,94,0.4)] group-hover:shadow-none transition-all"></div>
                  {/* [FIXED: Updated brand name to ASAR GLOBAL] */}
                  <span>System Status: Online</span>
                </div>
                <div className="opacity-60 group-hover:opacity-100">Protocol Version: 2.4.0</div>
                <div className="pt-6 text-foreground group-hover:text-white border-t border-muted group-hover:border-white/10">Secure by Architecture.</div>
              </div>
            </div>
          </div>

          {/* Services Col */}
          <div className="p-6 md:p-8 lg:p-12 border-b md:border-b-0 md:border-l-2 border-foreground group hover:bg-primary transition-all duration-300">
            <h4 className="font-black text-foreground group-hover:text-white mb-8 text-[10px] uppercase tracking-[0.3em] border-b border-muted group-hover:border-white/20 pb-2 w-max transition-colors">Services</h4>
            <div className="flex flex-col gap-4">
              <Link href="/services#iso" className="text-xs font-bold text-zinc-500 group-hover:text-white hover:translate-x-1 transition-all uppercase tracking-widest">ISO Compliance</Link>
              <Link href="/services#ai" className="text-xs font-bold text-zinc-500 group-hover:text-white hover:translate-x-1 transition-all uppercase tracking-widest">AI Automation</Link>
              <Link href="/services#soc" className="text-xs font-bold text-zinc-500 group-hover:text-white hover:translate-x-1 transition-all uppercase tracking-widest">SOC Services</Link>
            </div>
          </div>

          {/* Company Col */}
          <div className="p-6 md:p-8 lg:p-12 border-b md:border-b-0 md:border-l-2 border-foreground group hover:bg-primary transition-all duration-300">
            <h4 className="font-black text-foreground group-hover:text-white mb-8 text-[10px] uppercase tracking-[0.3em] border-b border-muted group-hover:border-white/20 pb-2 w-max transition-colors">Navigation</h4>
            <div className="flex flex-col gap-4">
              <Link href="/about" className="text-xs font-bold text-zinc-500 group-hover:text-white hover:translate-x-1 transition-all uppercase tracking-widest">Strategic Mission</Link>
              <Link href="/technology" className="text-xs font-bold text-zinc-500 group-hover:text-white hover:translate-x-1 transition-all uppercase tracking-widest">Tech Stack</Link>
              <Link href="/contact" className="text-xs font-bold text-zinc-500 group-hover:text-white hover:translate-x-1 transition-all uppercase tracking-widest">Ready Protocol</Link>
            </div>
          </div>

          {/* Connect Col */}
          {/* [FIXED: Replaced personal Gmail with official business email] */}
          <div className="p-6 md:p-8 lg:p-12 border-l-0 md:border-l-2 border-foreground bg-muted/5 group hover:bg-primary transition-all duration-300">
            <h4 className="font-black text-foreground group-hover:text-white mb-8 text-[10px] uppercase tracking-[0.3em] border-b border-muted group-hover:border-white/20 pb-2 w-max transition-colors">Connect_Node</h4>

            <div className="mb-8">
              <div className="text-[10px] font-black uppercase text-zinc-400 group-hover:text-white/60 mb-3 tracking-widest transition-colors">Registry_Email:</div>
              <div className="border-2 border-foreground bg-white p-4 shadow-[6px_6px_0_#000] group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all">
                <p className="text-[10px] font-black break-all uppercase tracking-tighter text-foreground">
                  hello@asarglobal.com
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              {/* [FIXED: Changed to company LinkedIn page — remove personal URL] */}
              <Link href="https://www.linkedin.com/company/asar-global" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border-2 border-foreground flex items-center justify-center bg-white hover:bg-black hover:text-white transition-all shadow-[6px_6px_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="w-12 h-12 border-2 border-foreground flex items-center justify-center bg-white hover:bg-black hover:text-white transition-all shadow-[6px_6px_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      {/* [FIXED: Updated copyright to ASAR GLOBAL] */}
      <div className="border-t-2 border-foreground bg-white">
        <div className="container flex flex-col md:flex-row justify-between items-center py-10 gap-6">
          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">
            &copy; {currentYear} ASAR GLOBAL. Secure Intelligence Unit.
          </p>
          <div className="flex gap-10">
            <Link href="#" className="text-[10px] font-black text-muted-foreground hover:text-primary uppercase tracking-[0.2em] transition-colors">Privacy_Protocol</Link>
            <Link href="#" className="text-[10px] font-black text-muted-foreground hover:text-primary uppercase tracking-[0.2em] transition-colors">Terms_Of_Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}