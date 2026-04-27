import Link from 'next/link';
import { Logo } from '../icons/logo';
import { Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white mt-auto">
      {/* Main Grid */}
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Brand Col */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <Logo className="h-8 w-auto text-white" />
              <div className="flex flex-col">
                <span className="font-extrabold uppercase tracking-tight text-lg leading-none">ASAR</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#F8FAFC]/80">GLOBAL</span>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Enterprise technology and security solutions built on robust, premium architectural standards.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <span className="text-xs font-semibold uppercase tracking-widest text-white/80">Systems Online</span>
            </div>
          </div>

          {/* Services Col */}
          <div className="flex flex-col space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/50">Services</h4>
            <nav className="flex flex-col space-y-3">
              <Link href="/services#iso" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">ISO & Frameworks</Link>
              <Link href="/services#training" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">Audit & Training</Link>
              <Link href="/services#data" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">Data Engineering</Link>
            </nav>
          </div>

          {/* Company Col */}
          <div className="flex flex-col space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/50">Company</h4>
            <nav className="flex flex-col space-y-3">
              <Link href="/about" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">About Us</Link>
              <Link href="/technology" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">Technology</Link>
              <Link href="/contact" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Connect Col */}
          <div className="flex flex-col space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/50">Connect</h4>
            <div className="flex flex-col space-y-4">
              <div>
                <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">Email inquiries</span>
                <a href="mailto:contact@asarglobal.com" className="text-sm font-semibold hover:underline">contact@asarglobal.com</a>
              </div>
              <div className="pt-2">
                <Link href="https://www.linkedin.com/company/asar-global" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-white/10 hover:bg-white/20 transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-primary-dark">
        <div className="container flex flex-col md:flex-row justify-between items-center py-6 gap-4">
          <p className="text-xs font-medium text-white/50 tracking-wider">
            &copy; {currentYear} ASAR GLOBAL. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-xs font-medium text-white/50 hover:text-white transition-colors tracking-wider">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-xs font-medium text-white/50 hover:text-white transition-colors tracking-wider">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}