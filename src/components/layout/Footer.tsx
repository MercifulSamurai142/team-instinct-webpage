import React from 'react';
import { Mail, MessageSquare, Share2, Tv, Video } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ASSETS } from '../../lib/supabase';
import type { DivisionKey } from '../../types';
import { FallbackImage } from '../ui/FallbackImage';

export const Footer: React.FC = () => {
  const { setActiveDivision, showToast } = useApp();

  const handleDivisionSelect = (division: DivisionKey) => {
    setActiveDivision(division);
  };

  return (
    <footer className="bg-obsidian border-t border-white/10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FallbackImage
                src={ASSETS.logoEmblem}
                fallbackSrc="https://placehold.co/100x100/101015/FFD700?text=TI"
                alt="Team Instinct Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="font-tech font-black text-xl text-white">
                TEAM <span className="text-instinctGold">INSTINCT</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Rising from the ashes to dominate global esports arenas. Powered by golden precision and relentless phoenix fire.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => showToast('Opening Team Instinct Official Twitch Channel')}
                aria-label="Twitch"
                className="w-10 h-10 rounded-lg bg-surfaceLight hover:bg-instinctGold hover:text-obsidian flex items-center justify-center text-gray-300 transition"
              >
                <Tv className="w-4 h-4" />
              </button>
              <button
                onClick={() => showToast('Opening Team Instinct YouTube Channel')}
                aria-label="YouTube"
                className="w-10 h-10 rounded-lg bg-surfaceLight hover:bg-phoenixFlame hover:text-white flex items-center justify-center text-gray-300 transition"
              >
                <Video className="w-4 h-4" />
              </button>
              <button
                onClick={() => showToast('Discord Invite Copied: discord.gg/teaminstinct')}
                aria-label="Discord"
                className="w-10 h-10 rounded-lg bg-surfaceLight hover:bg-instinctGold hover:text-obsidian flex items-center justify-center text-gray-300 transition"
              >
                <MessageSquare className="w-4 h-4" />
              </button>
              <button
                onClick={() => showToast('Social link copied to clipboard')}
                aria-label="Share"
                className="w-10 h-10 rounded-lg bg-surfaceLight hover:bg-phoenixFlame hover:text-white flex items-center justify-center text-gray-300 transition"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Divisions Links */}
          <div>
            <h4 className="font-display font-bold text-lg text-white uppercase tracking-wider mb-4">Divisions</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="#divisions" onClick={() => handleDivisionSelect('VALORANT')} className="hover:text-instinctGold transition">VALORANT Pro Roster</a></li>
              <li><a href="#divisions" onClick={() => handleDivisionSelect('CS2')} className="hover:text-instinctGold transition">Counter-Strike 2</a></li>
              <li><a href="#divisions" onClick={() => handleDivisionSelect('APEX')} className="hover:text-instinctGold transition">Apex Legends ALGS</a></li>
              <li><a href="#divisions" onClick={() => handleDivisionSelect('BGMI')} className="hover:text-instinctGold transition">BGMI / PUBG Mobile</a></li>
            </ul>
          </div>

          {/* Organization Links */}
          <div>
            <h4 className="font-display font-bold text-lg text-white uppercase tracking-wider mb-4">Organization</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="#matches" className="hover:text-instinctGold transition">Tournament Schedule</a></li>
              <li><a href="#merch" className="hover:text-instinctGold transition">2026 Pro Kit Store</a></li>
              <li><a href="#news" className="hover:text-instinctGold transition">Press & Media Kit</a></li>
              <li><a href="#tryouts" className="hover:text-instinctGold transition">Academy Tryouts</a></li>
            </ul>
          </div>

          {/* Business & Partnerships */}
          <div>
            <h4 className="font-display font-bold text-lg text-white uppercase tracking-wider mb-4">Partnerships & Press</h4>
            <p className="text-sm text-gray-400 mb-3">For brand sponsorships, media inquiries, and tournament invitations:</p>
            <a href="mailto:partnerships@teaminstinct.gg" className="inline-flex items-center gap-2 font-mono text-sm text-instinctGold hover:underline">
              <Mail className="w-4 h-4" />
              <span>partnerships@teaminstinct.gg</span>
            </a>
            <div className="mt-4 p-3 rounded-lg bg-surface border border-white/5 font-mono text-xs text-gray-400">
              HQ: Los Angeles • Seoul • Mumbai
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
          <p>© 2026 TEAM INSTINCT ESPORTS LLC. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <button onClick={() => showToast('Privacy Policy viewed')} className="hover:text-gray-300">PRIVACY POLICY</button>
            <button onClick={() => showToast('Terms of Service viewed')} className="hover:text-gray-300">TERMS OF SERVICE</button>
          </div>
        </div>
      </div>
    </footer>
  );
};