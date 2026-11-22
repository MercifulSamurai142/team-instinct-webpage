import React from 'react';
import { Crosshair, Play, Zap } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ASSETS } from '../../lib/supabase';
import { FallbackImage } from '../ui/FallbackImage';

const TELEMETRY_STATS = [
  { value: '$1.4M+', label: 'Prize Winnings', color: 'text-instinctGold' },
  { value: '18', label: 'Major Titles', color: 'text-phoenixFlame' },
  { value: '04', label: 'Global Divisions', color: 'text-white' },
  { value: '420K+', label: 'Community Fans', color: 'text-instinctAmber' },
];

export const HeroSection: React.FC = () => {
  const { openStreamModal } = useApp();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-10 pb-16 overflow-hidden grid-bg">
      <div className="absolute top-1/4 right-1/4 w-[480px] h-[480px] bg-phoenixFlame/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[420px] h-[420px] bg-instinctGold/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surfaceLight/90 border border-instinctGold/30 text-instinctGold font-mono text-xs uppercase tracking-widest">
              <Zap className="w-3.5 h-3.5 text-phoenixFlame" />
              <span>TIER-1 COMPETITIVE ESPORTS COLLECTIVE</span>
            </div>

            <h1 className="font-tech font-black text-4xl sm:text-6xl xl:text-7xl tracking-tight leading-[1.06] text-white uppercase">
              IGNITE THE ARENA.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-instinctGold via-instinctAmber to-phoenixFlame">
                TRUST YOUR INSTINCT.
              </span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Forged in relentless competition across <span className="text-white font-semibold">VALORANT</span>,{' '}
              <span className="text-white font-semibold">Counter-Strike 2</span>,{' '}
              <span className="text-white font-semibold">Apex Legends</span>, and{' '}
              <span className="text-white font-semibold">BGMI</span>. We unite mechanical precision, fearless aggression, and championship pedigree.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#divisions"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-instinctGold via-instinctAmber to-phoenixFlame text-obsidian font-display font-black text-lg tracking-wider uppercase clip-btn hover:brightness-110 transition flex items-center justify-center gap-3 shadow-xl shadow-phoenixFlame/25"
              >
                <span>EXPLORE ROSTERS</span>
                <Crosshair className="w-5 h-5" />
              </a>
              <button
                onClick={() => openStreamModal('TEAM INSTINCT // 2026 CHAMPIONSHIP ANTHEM & FRAGMOVIE')}
                className="w-full sm:w-auto px-8 py-4 bg-surfaceLight hover:bg-white/10 text-white border border-instinctGold/40 font-display font-bold text-lg tracking-wider uppercase clip-btn transition flex items-center justify-center gap-3"
              >
                <Play className="w-5 h-5 text-instinctGold fill-instinctGold" />
                <span>WATCH HIGHLIGHTS</span>
              </button>
            </div>

            {/* Organization Telemetry Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10">
              {TELEMETRY_STATS.map((stat) => (
                <div key={stat.label} className="bg-surface/80 border border-white/5 rounded-xl p-4">
                  <div className={`font-tech font-extrabold text-2xl sm:text-3xl ${stat.color}`}>{stat.value}</div>
                  <div className="font-mono text-xs text-gray-400 uppercase mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Hero Emblem Showcase */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center animate-float">
              <div className="absolute inset-0 rounded-full border border-dashed border-instinctGold/30 animate-[spin_28s_linear_infinite]" />
              <div className="absolute inset-6 rounded-full border border-phoenixFlame/30 animate-[spin_20s_linear_infinite_reverse]" />
              <div className="absolute inset-10 rounded-full bg-gradient-to-b from-instinctGold/20 via-phoenixFlame/25 to-transparent blur-2xl" />

              <FallbackImage
                src={ASSETS.logoCrest}
                fallbackSrc="https://placehold.co/400x400/101015/FFD700?text=TEAM+INSTINCT"
                alt="Team Instinct Phoenix & Lightning Crest"
                className="relative z-10 w-64 sm:w-80 h-auto object-contain phoenix-glow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};