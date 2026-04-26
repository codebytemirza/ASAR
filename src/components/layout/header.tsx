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
    <header className="sticky top-0 z-50 w-full border-b-2 border-foreground bg-background h-20 flex items-center shadow-[0_4px_0_rgba(0,0,0,0.05)]">
      <div className="container flex h-full items-center justify-between">
        {/* [FIXED: Updated branding to ASAR GLOBAL] */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="border-2 border-transparent group-hover:border-primary p-1 transition-colors">
            <Logo className="h-8 w-auto text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="font-black uppercase tracking-tighter text-lg leading-none">ASAR</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors">GLOBAL</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-px border-x border-foreground bg-foreground h-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex items-center justify-center h-full px-4 lg:px-8 text-sm font-bold uppercase tracking-wider transition-colors bg-background hover:bg-primary hover:text-white',
                pathname === link.href ? 'bg-primary text-white' : 'text-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="btn btn-primary h-12 rounded-none shadow-none hover:translate-x-0 hover:translate-y-0 hover:bg-black hover:text-white">
            <Link href="/contact">Get System Access</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button className="flex items-center justify-center p-2 text-foreground border-2 border-transparent active:border-foreground">
                <Menu className="h-8 w-8" />
                <span className="sr-only">Open Menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-l-2 border-foreground p-0">
              <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              <div className="flex flex-col h-full bg-background">
                <div className="p-6 border-b-2 border-foreground bg-muted/20">
                  <span className="font-mono text-xs font-bold uppercase">/// Navigation Protocol</span>
                </div>
                <nav className="flex flex-col">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        'flex items-center h-16 px-8 text-lg font-bold uppercase tracking-wider border-b border-border active:bg-primary active:text-white transition-colors',
                        pathname === link.href ? 'bg-primary text-white' : 'text-foreground'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="p-8 mt-auto">
                  <Link
                    href="/contact"
                    className="btn btn-primary w-full text-center flex items-center justify-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get System Access
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