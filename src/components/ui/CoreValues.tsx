"use client";

import React from 'react';
import { ShieldCheck, Handshake, Layers, TrendingUp, ShieldAlert, Globe } from 'lucide-react';
import { ScrollReveal } from '@/components/scroll-reveal';
import { DotsPattern } from '@/components/ui/AbstractDecorators';

export function CoreValues() {
  const values = [
    { name: 'Compliance Excellence', icon: ShieldCheck },
    { name: 'Client Trust', icon: Handshake },
    { name: 'Process Precision', icon: Layers },
    { name: 'Continuous Improvement', icon: TrendingUp },
    { name: 'Risk Management', icon: ShieldAlert },
    { name: 'Global Standards', icon: Globe },
  ];

  return (
    <section className="bg-white py-20 border-b border-border relative overflow-hidden">
      <DotsPattern />
      <div className="container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 uppercase">Our Core Values</h2>
            <p className="text-lg text-zinc-400 font-medium max-w-2xl mx-auto">
              Built around compliance, precision, and long-term enterprise reliability.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
          {values.map((val, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-accent flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-300">
                  <val.icon className="w-6 h-6 md:w-8 md:h-8 text-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-accent text-sm md:text-base">{val.name}</h3>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
