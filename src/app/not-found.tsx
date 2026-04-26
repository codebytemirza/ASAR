import Link from 'next/link';
import { ArrowLeft, Terminal } from 'lucide-react';
import { CorporateGrid, AmbientGlow } from '@/components/ui/AbstractDecorators';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-secondary flex flex-col justify-center items-center relative overflow-hidden">
      <CorporateGrid />
      <AmbientGlow position="center" color="primary" size="lg" />
      
      <div className="relative z-10 container max-w-2xl text-center flex flex-col items-center">
        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/20">
          <Terminal className="w-8 h-8 text-primary" />
        </div>
        
        <h1 className="text-7xl font-black text-primary mb-4 tracking-tighter">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-6 uppercase tracking-wider">Protocol Not Found</h2>
        
        <p className="text-lg text-zinc-600 font-medium mb-10 max-w-lg mx-auto">
          The structural node you are attempting to access has either been re-routed or does not exist within our current architecture.
        </p>
        
        <Link href="/" className="btn btn-primary h-14 px-8 flex items-center gap-2 text-sm shadow-lg hover:-translate-y-1 transition-transform">
          <ArrowLeft className="w-4 h-4" /> Return to Main Node
        </Link>
      </div>
    </div>
  );
}
