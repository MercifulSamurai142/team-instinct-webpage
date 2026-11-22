import React, { useState } from 'react';
import { Check, Flame } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const TryoutsSection: React.FC = () => {
  const { showToast } = useApp();
  const [formData, setFormData] = useState({
    ign: '',
    game: 'VALORANT',
    rank: '',
    discord: '',
    tracker: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast(`Scouting dossier submitted for ${formData.ign} (${formData.game})! Our coaches will review within 72h.`);
    setFormData({ ign: '', game: 'VALORANT', rank: '', discord: '', tracker: '' });
  };

  return (
    <div
      id="tryouts"
      className="rounded-2xl bg-gradient-to-br from-surfaceLight via-obsidian to-surfaceLight border border-instinctGold/30 p-8 sm:p-12 relative overflow-hidden"
    >
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-phoenixFlame/15 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        <div className="lg:col-span-5 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-instinctGold/15 border border-instinctGold/30 text-instinctGold font-mono text-xs uppercase">
            <Flame className="w-4 h-4" />
            <span>ACADEMY & PRO SCOUTING OPEN</span>
          </div>
          <h3 className="font-tech font-black text-3xl sm:text-4xl text-white uppercase leading-tight">
            THINK YOU HAVE THE <span className="text-instinctGold">INSTINCT</span>?
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Our coaching staff actively scouts top-ranked ladder demons and emerging tournament talent. Submit your competitive profile to enter our monthly academy combine.
          </p>
          <ul className="space-y-2.5 text-sm text-gray-300 font-mono">
            <li className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-instinctGold" /> VALORANT: Immortal 3 / Radiant
            </li>
            <li className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-instinctGold" /> CS2: FACEIT Level 10 (2,600+ ELO)
            </li>
            <li className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-instinctGold" /> APEX / BGMI: Predator / Conqueror Tier
            </li>
          </ul>
        </div>

        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="bg-surface/90 border border-white/10 rounded-xl p-6 sm:p-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-mono text-xs text-gray-400 uppercase mb-2">In-Game Name (IGN) *</label>
                <input
                  type="text"
                  required
                  value={formData.ign}
                  onChange={(e) => setFormData({ ...formData, ign: e.target.value })}
                  placeholder="e.g. Phoenix#TI01"
                  className="w-full px-4 py-3 rounded-lg bg-obsidian border border-white/15 text-white focus:border-instinctGold focus:outline-none text-sm"
                />
              </div>
              <div>
                <label className="block font-mono text-xs text-gray-400 uppercase mb-2">Target Division *</label>
                <select
                  required
                  value={formData.game}
                  onChange={(e) => setFormData({ ...formData, game: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-obsidian border border-white/15 text-white focus:border-instinctGold focus:outline-none text-sm"
                >
                  <option value="VALORANT">VALORANT</option>
                  <option value="Counter-Strike 2">Counter-Strike 2</option>
                  <option value="Apex Legends">Apex Legends</option>
                  <option value="BGMI / PUBG Mobile">BGMI / PUBG Mobile</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-mono text-xs text-gray-400 uppercase mb-2">Current Peak Rank / ELO *</label>
                <input
                  type="text"
                  required
                  value={formData.rank}
                  onChange={(e) => setFormData({ ...formData, rank: e.target.value })}
                  placeholder="e.g. Radiant #42 / 3100 ELO"
                  className="w-full px-4 py-3 rounded-lg bg-obsidian border border-white/15 text-white focus:border-instinctGold focus:outline-none text-sm"
                />
              </div>
              <div>
                <label className="block font-mono text-xs text-gray-400 uppercase mb-2">Discord Handle *</label>
                <input
                  type="text"
                  required
                  value={formData.discord}
                  onChange={(e) => setFormData({ ...formData, discord: e.target.value })}
                  placeholder="username#0000"
                  className="w-full px-4 py-3 rounded-lg bg-obsidian border border-white/15 text-white focus:border-instinctGold focus:outline-none text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-xs text-gray-400 uppercase mb-2">Tracker.gg / VLR / Liquipedia URL *</label>
              <input
                type="url"
                required
                value={formData.tracker}
                onChange={(e) => setFormData({ ...formData, tracker: e.target.value })}
                placeholder="https://tracker.gg/valorant/profile/..."
                className="w-full px-4 py-3 rounded-lg bg-obsidian border border-white/15 text-white focus:border-instinctGold focus:outline-none text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-instinctGold via-instinctAmber to-phoenixFlame text-obsidian font-display font-black text-base tracking-wider uppercase clip-btn hover:brightness-110 transition shadow-lg shadow-phoenixFlame/20"
            >
              SUBMIT SCOUTING APPLICATION
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};