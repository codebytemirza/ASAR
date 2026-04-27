"use client";

import React from 'react';

export function ISOTicker() {
  const contentString = "ISO 27001 ISMS · ISO 9001 QMS · ISO 14001 EMS · ISO 45001 OHSMS · ISO 22301 BCMS · ISO 50001 EnMS · ISO/IEC 20000-1 ITSM · ISO/IEC 27701 PIMS · ISO/IEC 42001 AIMS · NCA · SAMA · NDMO · PDPL · SOC 2 · HIPAA";
  
  // Duplicate the string multiple times to ensure seamless infinite scrolling
  const scrollItems = Array(4).fill(contentString);

  return (
    <div className="bg-primary text-white border-y border-white/10 overflow-hidden py-3 relative">
      <div className="flex whitespace-nowrap animate-ticker">
        {scrollItems.map((item, i) => (
          <span key={i} className="text-xs md:text-sm font-bold uppercase tracking-widest text-white/80 mx-4">
            {item} <span className="mx-4 text-accent">·</span>
          </span>
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-ticker {
          animation: ticker 40s linear infinite;
          width: max-content;
        }
      `}} />
    </div>
  );
}
