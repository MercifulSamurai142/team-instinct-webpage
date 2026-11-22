import React from 'react';
import { Cpu, Flame, Headphones, Monitor, Zap } from 'lucide-react';

const PARTNERS = [
  { name: 'VOLTGEAR', icon: Zap },
  { name: 'HYPERCORE', icon: Cpu },
  { name: 'IGNITE FUEL', icon: Flame },
  { name: 'AETHER AUDIO', icon: Headphones },
  { name: 'KINETIC 540HZ', icon: Monitor },
];

export const PartnersStrip: React.FC = () => {
  return (
    <section className="border-y border-white/10 bg-surface/60 py-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 opacity-75">
          <span className="font-mono text-xs tracking-widest text-gray-500 uppercase">
            OFFICIAL HARDWARE & ENERGY PARTNERS
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 font-tech font-bold text-lg sm:text-xl tracking-widest text-gray-400">
            {PARTNERS.map(({ name, icon: Icon }) => (
              <span key={name} className="hover:text-instinctGold transition cursor-default flex items-center gap-2">
                <Icon className="w-5 h-5" /> {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};