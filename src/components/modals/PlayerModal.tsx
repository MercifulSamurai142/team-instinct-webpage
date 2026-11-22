import React from 'react';
import { X } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ASSETS } from '../../lib/supabase';
import { FallbackImage } from '../ui/FallbackImage';

export const PlayerModal: React.FC = () => {
  const { selectedPlayer, setSelectedPlayer } = useApp();
  if (!selectedPlayer) return null;

  return (
    <div
      onClick={() => setSelectedPlayer(null)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-surface border border-instinctGold/40 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative animate-[fadeIn_0.2s_ease-out]"
      >
        <button
          onClick={() => setSelectedPlayer(null)}
          aria-label="Close Modal"
          className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-obsidian/80 hover:bg-phoenixFlame text-white flex items-center justify-center transition z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="bg-gradient-to-r from-obsidian via-surfaceLight to-obsidian p-6 sm:p-8 border-b border-white/10 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-28 h-28 rounded-2xl bg-obsidian border-2 border-instinctGold flex items-center justify-center shrink-0">
            <FallbackImage
              src={selectedPlayer.avatarUrl || ASSETS.logoEmblem}
              fallbackSrc={`https://placehold.co/100x100/101015/FFD700?text=${selectedPlayer.ign}`}
              alt={selectedPlayer.ign}
              className="w-20 h-20 object-contain phoenix-glow"
            />
          </div>
          <div className="text-center sm:text-left">
            <div className="inline-block px-3 py-1 rounded bg-phoenixFlame/20 border border-phoenixFlame/40 text-phoenixFlame font-mono text-xs font-bold uppercase mb-2">
              {selectedPlayer.game} // {selectedPlayer.role}
            </div>
            <h3 className="font-tech font-black text-3xl text-white uppercase">
              {selectedPlayer.ign} <span className="text-xl">{selectedPlayer.flag}</span>
            </h3>
            <p className="text-gray-400 text-sm">
              {selectedPlayer.name} • {selectedPlayer.country}
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-gray-300 text-sm leading-relaxed">{selectedPlayer.bio}</p>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3.5 rounded-xl bg-obsidian border border-white/10">
              <div className="font-mono text-[11px] text-gray-400">K/D RATIO</div>
              <div className="font-tech font-bold text-xl text-instinctGold mt-1">{selectedPlayer.kd}</div>
            </div>
            <div className="p-3.5 rounded-xl bg-obsidian border border-white/10">
              <div className="font-mono text-[11px] text-gray-400">HEADSHOT %</div>
              <div className="font-tech font-bold text-xl text-white mt-1">{selectedPlayer.hs}</div>
            </div>
            <div className="p-3.5 rounded-xl bg-obsidian border border-white/10">
              <div className="font-mono text-[11px] text-gray-400">RATING / IMPACT</div>
              <div className="font-tech font-bold text-xl text-phoenixFlame mt-1">{selectedPlayer.acs}</div>
            </div>
          </div>

          <div className="bg-obsidian/80 border border-instinctGold/20 rounded-xl p-4 space-y-2.5">
            <div className="font-mono text-xs text-instinctGold uppercase font-bold">// PRO PERIPHERALS & SETTINGS</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div>
                <span className="text-gray-500 block">MOUSE / DEVICE:</span>
                <span className="text-gray-200">{selectedPlayer.gear.mouse}</span>
              </div>
              <div>
                <span className="text-gray-500 block">KEYBOARD / GRIP:</span>
                <span className="text-gray-200">{selectedPlayer.gear.keyboard}</span>
              </div>
              <div>
                <span className="text-gray-500 block">SENSITIVITY:</span>
                <span className="text-gray-200">{selectedPlayer.gear.sens}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};