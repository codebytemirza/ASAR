import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"
import CustomCursor from '@/components/ui/custom-cursor';

// [FIXED: Updated branding to ASAR GLOBAL]
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://asarglobal.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'ASAR GLOBAL | Enterprise Technology & Compliance Solutions',
    template: '%s | ASAR GLOBAL',
  },
  description: 'ASAR Global specializes in Data Engineering, ISO Consultancy, automated ETL pipelines, and uncompromising corporate compliance architectures.',
  keywords: ['Data Engineering', 'ISO Certification', 'Enterprise Compliance', 'Data Pipelines', 'ETL', 'SOC 2', 'SAMA', 'PDPL', 'Corporate Governance'],
  authors: [{ name: 'ASAR Global' }],
  creator: 'ASAR Global',
  publisher: 'ASAR Global',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'ASAR Global',
    title: 'ASAR GLOBAL | Enterprise Technology & Compliance Solutions',
    description: 'Transform your operational infrastructure with precision data engineering and uncompromising global compliance frameworks.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASAR GLOBAL | Enterprise Technology & Compliance',
    description: 'Data Engineering and ISO Compliance for modern enterprises.',
    creator: '@asarglobal',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased custom-cursor-area')} suppressHydrationWarning>
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