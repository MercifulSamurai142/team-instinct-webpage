import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MATCH_RESULTS, UPCOMING_MATCHES } from '../../data/mockData';
import { useCountdown } from '../../hooks/useCountdown';
import { ASSETS } from '../../lib/supabase';
import { FallbackImage } from '../ui/FallbackImage';

export const MatchesSection: React.FC = () => {
  const { openStreamModal } = useApp();
  const [tab, setTab] = useState<'upcoming' | 'results'>('upcoming');
  const { hours, mins, secs } = useCountdown(4 * 3600 + 38 * 60 + 52);

  return (
    <section id="matches" className="py-24 bg-surface/50 border-y border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Tab Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="font-mono text-xs text-instinctGold uppercase tracking-widest mb-2">
              // ARENA SCHEDULE & SCOREBOARD
            </div>
            <h2 className="font-tech font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
              MATCH <span className="text-phoenixFlame">CENTER</span>
            </h2>
          </div>

          <div className="flex gap-2 bg-obsidian p-1.5 rounded-xl border border-white/10 self-start">
            <button
              onClick={() => setTab('upcoming')}
              className={`px-5 py-2.5 rounded-lg font-display font-bold text-sm tracking-wider uppercase transition ${
                tab === 'upcoming'
                  ? 'bg-gradient-to-r from-instinctGold to-phoenixFlame text-obsidian'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              UPCOMING MATCHES
            </button>
            <button
              onClick={() => setTab('results')}
              className={`px-5 py-2.5 rounded-lg font-display font-bold text-sm tracking-wider uppercase transition ${
                tab === 'results'
                  ? 'bg-gradient-to-r from-instinctGold to-phoenixFlame text-obsidian'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              RECENT RESULTS
            </button>
          </div>
        </div>

        {/* Featured Next Match Live Countdown Banner */}
        <div className="mb-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-obsidian via-surfaceLight to-obsidian border border-instinctGold/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-phoenixFlame/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="text-center lg:text-left">
              <span className="inline-block px-3 py-1 rounded bg-phoenixFlame/20 border border-phoenixFlame/40 text-phoenixFlame font-mono text-xs font-bold uppercase mb-3">
                NEXT FEATURED SHOWDOWN • BO3
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase">
                VCT PACIFIC ASCENSION — UPPER SEMIFINALS
              </h3>
              <p className="text-gray-400 text-sm mt-1">Streamed Live on Twitch & YouTube Gaming • Patch 9.08</p>
            </div>

            {/* Matchup Visual */}
            <div className="flex items-center gap-6 sm:gap-10">
              <div className="flex flex-col items-center">
                <FallbackImage
                  src={ASSETS.logoEmblem}
                  fallbackSrc="https://placehold.co/80x80/101015/FFD700?text=TI"
                  alt="Team Instinct"
                  className="w-16 h-16 object-contain phoenix-glow"
                />
                <span className="font-display font-bold text-white uppercase mt-2">INSTINCT</span>
              </div>
              <div className="font-tech font-black text-2xl text-instinctGold">VS</div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-xl bg-surface border border-white/15 flex items-center justify-center font-tech font-black text-xl text-cyan-400">
                  APEX
                </div>
                <span className="font-display font-bold text-gray-300 uppercase mt-2">CYBER APEX</span>
              </div>
            </div>

            {/* Live Countdown Timer */}
            <div className="flex flex-col items-center lg:items-end">
              <span className="font-mono text-[11px] text-gray-400 uppercase tracking-widest mb-2">MATCH STARTS IN</span>
              <div className="flex items-center gap-2 font-mono font-bold text-xl sm:text-2xl text-instinctGold">
                <div className="bg-obsidian border border-white/10 px-3 py-2 rounded-lg">
                  <span>{hours}</span><span className="text-xs text-gray-500 ml-0.5">H</span>
                </div>
                <span>:</span>
                <div className="bg-obsidian border border-white/10 px-3 py-2 rounded-lg">
                  <span>{mins}</span><span className="text-xs text-gray-500 ml-0.5">M</span>
                </div>
                <span>:</span>
                <div className="bg-obsidian border border-white/10 px-3 py-2 rounded-lg text-phoenixFlame">
                  <span>{secs}</span><span className="text-xs text-gray-500 ml-0.5">S</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Match Cards List */}
        <div className="space-y-4">
          {tab === 'upcoming'
            ? UPCOMING_MATCHES.map((m) => (
                <div
                  key={m.id}
                  className="p-5 rounded-xl bg-obsidian border border-white/10 hover:border-instinctGold/40 transition flex flex-col md:flex-row items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4 w-full md:w-auto">
                    <span className="px-3 py-1 rounded bg-surfaceLight border border-instinctGold/30 font-mono text-xs font-bold text-instinctGold min-w-[110px] text-center">
                      {m.game}
                    </span>
                    <div>
                      <div className="font-display font-bold text-lg text-white uppercase">{m.event}</div>
                      <div className="font-mono text-xs text-gray-400">
                        {m.date} • {m.format}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2 font-display font-bold text-white">
                      <FallbackImage
                        src={ASSETS.logoEmblem}
                        fallbackSrc="https://placehold.co/32x32/101015/FFD700?text=TI"
                        alt="TI"
                        className="w-7 h-7 object-contain"
                      />
                      <span>INSTINCT</span>
                    </div>
                    <span className="font-mono text-xs text-phoenixFlame font-bold">VS</span>
                    <div className="flex items-center gap-2 font-display font-bold text-gray-300">
                      <span>{m.opponent}</span>
                      <span className="px-2 py-0.5 rounded bg-surfaceLight text-xs font-mono text-gray-400">
                        {m.oppTag}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => openStreamModal(`${m.game}: Team Instinct vs ${m.opponent}`)}
                    className="w-full md:w-auto px-5 py-2.5 rounded-lg bg-surfaceLight hover:bg-instinctGold hover:text-obsidian border border-white/10 font-display font-bold text-xs tracking-wider uppercase transition"
                  >
                    MATCH DETAILS / STREAM
                  </button>
                </div>
              ))
            : MATCH_RESULTS.map((r) => (
                <div
                  key={r.id}
                  className="p-5 rounded-xl bg-obsidian border border-white/10 hover:border-instinctGold/40 transition flex flex-col md:flex-row items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4 w-full md:w-auto">
                    <span className="px-3 py-1 rounded bg-surfaceLight border border-white/15 font-mono text-xs font-bold text-gray-300 min-w-[110px] text-center">
                      {r.game}
                    </span>
                    <div>
                      <div className="font-display font-bold text-lg text-white uppercase">{r.event}</div>
                      <div className="font-mono text-xs text-gray-400">
                        {r.date} • vs. {r.opponent}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="font-tech font-black text-xl text-white">{r.score}</span>
                    <span className="px-3 py-1 rounded bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-bold uppercase">
                      {r.outcome}
                    </span>
                  </div>

                  <button
                    onClick={() => openStreamModal(`VOD REPLAY // ${r.game}: Team Instinct vs ${r.opponent} (${r.score})`)}
                    className="w-full md:w-auto px-5 py-2.5 rounded-lg bg-surfaceLight hover:bg-phoenixFlame hover:text-white border border-white/10 font-display font-bold text-xs tracking-wider uppercase transition"
                  >
                    WATCH VOD / STATS
                  </button>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};