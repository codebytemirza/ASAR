"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Logo } from '../icons/logo';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/technology', label: 'Technology' },
  { href: '/about', label: 'About' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full text-white flex flex-col shadow-md bg-primary">
      {/* Thin accent line at very bottom of header */}
      <div className="order-last h-[2px] w-full bg-gradient-to-r from-accent via-accent/30 to-transparent" />
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 md:gap-3 group">
          <div className="transition-transform group-hover:scale-105">
            <Logo className="h-6 md:h-8 w-auto text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold uppercase tracking-tight text-base md:text-lg leading-none text-white">ASAR</span>
            <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-[#F8FAFC]/80 group-hover:text-white transition-colors">GLOBAL</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2 h-full">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex items-center justify-center h-10 px-4 md:px-6 text-sm font-semibold uppercase tracking-wider transition-all rounded-md',
                pathname === link.href ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5 hover:text-white'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="btn btn-outline border-white/20 text-white hover:bg-white hover:text-primary">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button className="flex items-center justify-center p-2 text-white transition-opacity hover:opacity-80">
                <Menu className="h-7 w-7" />
                <span className="sr-only">Open Menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-primary border-l border-white/10 p-0 text-white">
              <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-white/10 bg-white/5">
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/80">Navigation</span>
                </div>
                <nav className="flex flex-col py-4">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        'flex items-center h-14 px-8 text-sm font-bold uppercase tracking-widest border-b border-white/5 transition-colors',
                        pathname === link.href ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="p-8 mt-auto">
                  <Link
                    href="/contact"
                    className="btn bg-white text-primary w-full text-center flex items-center justify-center font-bold hover:bg-white/90"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}