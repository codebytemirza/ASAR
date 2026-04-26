import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"
import CustomCursor from '@/components/ui/custom-cursor';

// [FIXED: Updated branding to ASAR GLOBAL]
export const metadata: Metadata = {
  title: 'ASAR GLOBAL | Enterprise Technology & Security Solutions',
  description: 'ASAR GLOBAL specializes in ISO consultancy, AI automation, SOC implementation, and enterprise security solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='40' viewBox='0 0 140 40' fill='none'><path d='M15 8V32' stroke='%237C8CFF' stroke-width='4' stroke-linecap='round'/><path d='M30 20C30 20 35 12 45 12C55 12 60 28 70 28C80 28 85 12 95 12C105 12 110 20 110 20L125 32' stroke='%230f172a' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/><circle cx='15' cy='8' r='3' fill='%237C8CFF'/><circle cx='125' cy='32' r='3' fill='%237C8CFF'/></svg>"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased custom-cursor-area')}>
        <CustomCursor />
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}