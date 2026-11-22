import React from 'react';
import { Trophy } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { DIVISION_META, ROSTER_DATA } from '../../data/mockData';
import { ASSETS } from '../../lib/supabase';
import type { DivisionKey } from '../../types';
import { FallbackImage } from '../ui/FallbackImage';

const TABS: { key: DivisionKey; label: string }[] = [
  { key: 'VALORANT', label: 'VALORANT' },
  { key: 'CS2', label: 'COUNTER-STRIKE 2' },
  { key: 'APEX', label: 'APEX LEGENDS' },
  { key: 'BGMI', label: 'BGMI / PUBG MOBILE' },
];

export const RosterSection: React.FC = () => {
  const { activeDivision, setActiveDivision, setSelectedPlayer } = useApp();

  const meta = DIVISION_META[activeDivision];
  const players = ROSTER_DATA.filter((p) => p.game === activeDivision);

  return (
    <section id="divisions" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-xs text-phoenixFlame uppercase tracking-widest mb-2">// COMPETITIVE LINEUPS</div>
            <h2 className="font-tech font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
              ACTIVE <span className="text-instinctGold">DIVISIONS</span> & ROSTERS
            </h2>
          </div>

          {/* Game Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-surface p-1.5 rounded-xl border border-white/10">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveDivision(tab.key)}
                className={`px-4 py-2.5 rounded-lg font-display font-bold text-sm tracking-wider uppercase transition ${
                  activeDivision === tab.key
                    ? 'bg-gradient-to-r from-instinctGold to-phoenixFlame text-obsidian'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Division Banner Info */}
        <div className="mb-8 p-5 rounded-xl bg-gradient-to-r from-surfaceLight via-surface to-surfaceLight border border-instinctGold/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-phoenixFlame/15 border border-phoenixFlame/40 flex items-center justify-center text-instinctGold">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white uppercase">{meta.title}</h3>
              <p className="text-sm text-gray-400">{meta.subtitle}</p>
            </div>
          </div>
          <div className="font-mono text-xs text-instinctGold bg-obsidian px-3.5 py-2 rounded-lg border border-instinctGold/25">
            SEASON WIN RATE: <span className="font-bold text-white">{meta.winrate}</span>
          </div>
        </div>

        {/* Player Roster Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {players.map((player) => (
            <div
              key={player.id}
              className="group bg-surface border border-white/10 hover:border-instinctGold/50 rounded-2xl overflow-hidden transition duration-300 card-glow flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 bg-gradient-to-b from-surfaceLight via-obsidian to-surface flex flex-col items-center justify-center p-5 border-b border-white/5 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.14),transparent_70%)] group-hover:scale-110 transition duration-500" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-obsidian/90 border border-instinctGold/30 font-mono text-[11px] font-bold text-instinctGold uppercase">
                    {player.role}
                  </span>
                  <span className="absolute top-3 right-3 text-xl" title={player.country}>
                    {player.flag}
                  </span>

                  <div className="relative w-24 h-24 rounded-full bg-obsidian border-2 border-instinctGold/40 group-hover:border-phoenixFlame flex items-center justify-center shadow-lg transition">
                    <FallbackImage
                      src={player.avatarUrl || ASSETS.logoEmblem}
                      fallbackSrc={`https://placehold.co/96x96/101015/FFD700?text=${player.ign}`}
                      alt={player.ign}
                      className="w-16 h-16 object-contain opacity-90 group-hover:scale-110 transition duration-300"
                    />
                  </div>

                  <div className="mt-3 text-center relative z-10">
                    <h3 className="font-tech font-black text-2xl text-white tracking-wider group-hover:text-instinctGold transition">
                      {player.ign}
                    </h3>
                    <p className="font-sans text-xs text-gray-400">{player.name}</p>
                  </div>
                </div>

                {/* Telemetry Stats */}
                <div className="grid grid-cols-3 divide-x divide-white/10 bg-obsidian/60 py-3.5 text-center border-b border-white/5">
                  <div>
                    <div className="font-mono text-[10px] text-gray-500 uppercase">K/D RATIO</div>
                    <div className="font-mono font-bold text-sm text-instinctGold mt-0.5">{player.kd}</div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-gray-500 uppercase">HS %</div>
                    <div className="font-mono font-bold text-sm text-white mt-0.5">{player.hs}</div>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-gray-500 uppercase">IMPACT</div>
                    <div className="font-mono font-bold text-sm text-phoenixFlame mt-0.5">{player.acs}</div>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <button
                  onClick={() => setSelectedPlayer(player)}
                  className="w-full py-2.5 rounded-lg bg-surfaceLight hover:bg-gradient-to-r hover:from-instinctGold hover:to-phoenixFlame text-gray-200 hover:text-obsidian border border-white/10 font-display font-bold text-sm tracking-wider uppercase transition"
                >
                  VIEW PLAYER PROFILE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};