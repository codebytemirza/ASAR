'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';
import { CorporateGrid, DiagonalLines } from '@/components/ui/AbstractDecorators';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const isDev = process.env.NODE_ENV === 'development';

  useEffect(() => {
    // Log the error to an error reporting service
    console.error('System Exception:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#080808] flex flex-col justify-center items-center relative overflow-hidden font-mono">
      <CorporateGrid />
      <DiagonalLines />
      
      <div className="relative z-10 container max-w-3xl">
        <div className="border border-red-900/50 bg-black/80 backdrop-blur-md p-8 md:p-12 rounded-xl shadow-2xl">
          
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-red-900/50">
            <div className="w-12 h-12 bg-red-950 rounded-lg flex items-center justify-center border border-red-800">
              <AlertTriangle className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-red-500 uppercase tracking-widest">System Failure</h1>
              <p className="text-red-400/80 text-sm">Unhandled Exception in UI Render Tree</p>
            </div>
          </div>
          
          <div className="bg-red-950/30 border border-red-900/30 rounded-lg p-6 mb-8 overflow-x-auto">
            <p className="text-red-300 font-medium mb-2 text-sm uppercase">Stack Trace / Error Digest:</p>
            <code className="text-red-200/80 text-xs leading-relaxed">
              {isDev ? (error.message || 'An unexpected runtime error occurred.') : 'An unexpected runtime error occurred.'}
              {isDev && error.digest && <span className="block mt-2 opacity-50">Digest: {error.digest}</span>}
            </code>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => reset()}
              className="flex-1 bg-red-900 hover:bg-red-800 text-white h-12 rounded-lg font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-colors border border-red-700"
            >
              <RotateCcw className="w-4 h-4" /> Attempt Recovery
            </button>
            <button
              onClick={() => window.location.href = '/'}
              className="flex-1 bg-transparent hover:bg-white/5 text-zinc-300 h-12 rounded-lg font-bold uppercase tracking-wider text-sm flex items-center justify-center transition-colors border border-zinc-700"
            >
              Force Reboot (Home)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
