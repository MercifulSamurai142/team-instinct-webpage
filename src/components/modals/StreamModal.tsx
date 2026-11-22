import React from 'react';
import { X } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ASSETS } from '../../lib/supabase';
import { FallbackImage } from '../ui/FallbackImage';

export const StreamModal: React.FC = () => {
  const { streamTitle, closeStreamModal } = useApp();
  if (!streamTitle) return null;

  return (
    <div
      onClick={closeStreamModal}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-surface border border-instinctGold/40 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-obsidian">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-phoenixFlame animate-ping" />
            <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider">{streamTitle}</h3>
          </div>
          <button
            onClick={closeStreamModal}
            aria-label="Close Stream Modal"
            className="w-8 h-8 rounded-lg bg-surfaceLight hover:bg-phoenixFlame text-white flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-obsidian via-surfaceLight to-obsidian border border-white/10 flex flex-col items-center justify-center relative overflow-hidden p-6 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,69,0,0.22),transparent_70%)]" />
            <FallbackImage
              src={ASSETS.logoEmblem}
              fallbackSrc="https://placehold.co/120x120/101015/FFD700?text=TI"
              alt="Team Instinct Broadcast"
              className="w-24 h-24 object-contain mb-4 phoenix-glow relative z-10"
            />
            <div className="font-tech font-bold text-xl text-white uppercase relative z-10">TEAM INSTINCT BROADCAST HUD</div>
            <p className="text-sm text-gray-400 max-w-md mt-2 relative z-10">
              1080p60 Low-Latency Arena Feed • Official English Commentary & Live Telemetry Enabled
            </p>
            <div className="mt-5 flex items-center gap-3 relative z-10">
              <span className="px-3 py-1 rounded bg-phoenixFlame text-white font-mono text-xs font-bold">● LIVE STREAM</span>
              <span className="px-3 py-1 rounded bg-obsidian/90 border border-white/15 text-instinctGold font-mono text-xs">
                48,920 VIEWERS
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3 rounded-xl bg-obsidian border border-white/5">
              <div className="font-mono text-xs text-gray-400">MAP 1 // ASCENT</div>
              <div className="font-display font-bold text-lg text-instinctGold mt-0.5">13 - 9 (TI)</div>
            </div>
            <div className="p-3 rounded-xl bg-obsidian border border-white/5">
              <div className="font-mono text-xs text-gray-400">MAP 2 // HAVEN</div>
              <div className="font-display font-bold text-lg text-gray-300 mt-0.5">11 - 13</div>
            </div>
            <div className="p-3 rounded-xl bg-obsidian border border-white/5">
              <div className="font-mono text-xs text-gray-400">MAP 3 // BIND</div>
              <div className="font-display font-bold text-lg text-phoenixFlame mt-0.5">LIVE (9 - 6)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};