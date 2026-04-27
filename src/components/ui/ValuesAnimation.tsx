"use client";

import React, { useState, useEffect } from 'react';
import { Network, Database, ShieldCheck, CheckCircle, Activity } from 'lucide-react';
import { CorporateGrid, AmbientGlow } from '@/components/ui/AbstractDecorators';

export function ValuesAnimation() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { text: "We Map. We Architect. We Deliver.", Icon: Network },
    { text: "Every Data Point Has a Purpose.", Icon: Database },
    { text: "Compliance is Our Competitive Gift to You.", Icon: ShieldCheck },
    { text: "From Gap to Certified — We Own Every Step.", Icon: CheckCircle },
    { text: "Your Operations, Engineered to Endure.", Icon: Activity },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section className="bg-primary text-white py-20 md:py-32 relative overflow-hidden flex flex-col items-center justify-center min-h-[50vh]">
      <CorporateGrid color="white" />
      <AmbientGlow position="center" color="white" size="lg" />
      
      <div className="container relative z-10 flex flex-col items-center text-center">
        <div className="relative w-16 h-16 mb-12">
          {items.map((item, i) => (
            <div
              key={i}
              className={`absolute inset-0 flex items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm shadow-xl transition-all duration-700 ease-in-out ${
                i === activeIndex
                  ? 'opacity-100 scale-100 rotate-0'
                  : 'opacity-0 scale-50 -rotate-45 pointer-events-none'
              }`}
            >
              <item.Icon className="w-6 h-6 text-accent animate-pulse" />
            </div>
          ))}
        </div>

        <div className="h-24 md:h-32 flex items-center justify-center relative w-full overflow-hidden mb-12">
          {items.map((item, i) => (
            <h2
              key={i}
              className={`absolute text-3xl md:text-5xl font-black uppercase tracking-tight transition-all duration-700 ease-in-out ${
                i === activeIndex
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
              }`}
            >
              {item.text}
            </h2>
          ))}
        </div>

        <div className="flex gap-2 w-full max-w-sm mx-auto">
          {items.map((_, i) => (
            <div
              key={i}
              className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden relative"
            >
              <div
                className={`absolute inset-0 bg-accent transition-transform ease-linear origin-left ${
                  i === activeIndex
                    ? 'scale-x-100'
                    : i < activeIndex
                    ? 'scale-x-100'
                    : 'scale-x-0'
                }`}
                style={{
                  transitionDuration: i === activeIndex ? '2500ms' : '0ms',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
