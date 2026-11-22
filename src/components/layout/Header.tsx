import React, { useState } from 'react';
import { ArrowUpRight, Menu, MessageSquare, ShoppingBag, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ASSETS } from '../../lib/supabase';
import { FallbackImage } from '../ui/FallbackImage';

export const Header: React.FC = () => {
  const { totalCartItems, setIsCartOpen, openStreamModal } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-obsidian/85 backdrop-blur-xl border-b border-white/10">
      {/* Top Live Match Ticker */}
      <div className="bg-gradient-to-r from-phoenixFlame/20 via-instinctGold/15 to-phoenixFlame/20 border-b border-instinctGold/20 py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-mono">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-phoenixFlame opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-phoenixFlame"></span>
            </span>
            <span className="text-instinctGold font-bold tracking-wider">LIVE:</span>
            <span className="text-gray-200">
              VCT // VALORANT CHALLENGERS QUALIFIERS — TEAM INSTINCT vs. SENTINELS ACADEMY
            </span>
          </div>
          <button
            onClick={() => openStreamModal('VCT Challengers Qualifiers: Team Instinct vs. Sentinels Academy')}
            className="text-instinctGold hover:text-white font-display font-bold tracking-wider uppercase flex items-center gap-1.5 transition"
          >
            <span>WATCH BROADCAST</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-phoenixFlame/30 to-instinctGold/30 rounded-full blur-md group-hover:blur-lg transition"></div>
            <FallbackImage
              src={ASSETS.logoCrest}
              fallbackSrc="https://placehold.co/120x120/101015/FFD700?text=TI"
              alt="Team Instinct Phoenix Emblem"
              className="relative w-11 h-11 object-contain drop-shadow-[0_0_8px_rgba(255,215,0,0.5)] group-hover:scale-105 transition duration-300"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-tech font-black text-lg sm:text-xl tracking-wider text-white leading-none">
              TEAM{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-instinctGold via-instinctAmber to-phoenixFlame">
                INSTINCT
              </span>
            </span>
            <span className="font-mono text-[10px] tracking-[0.25em] text-gray-400 uppercase mt-1">
              EST. 2021 // ESPORTS
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 font-display font-bold text-base tracking-wider uppercase">
          <a href="#divisions" className="text-gray-300 hover:text-instinctGold transition">Divisions</a>
          <a href="#divisions" className="text-gray-300 hover:text-instinctGold transition">Roster</a>
          <a href="#matches" className="text-gray-300 hover:text-instinctGold transition">Matches</a>
          <a href="#merch" className="text-gray-300 hover:text-instinctGold transition">Pro Kit</a>
          <a href="#news" className="text-gray-300 hover:text-instinctGold transition">News</a>
          <a href="#tryouts" className="text-gray-300 hover:text-instinctGold transition">Tryouts</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Shopping Cart"
            className="relative p-2.5 rounded-lg bg-surfaceLight hover:bg-white/10 border border-white/10 text-gray-200 hover:text-instinctGold transition"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-phoenixFlame text-white font-mono text-[11px] font-bold flex items-center justify-center">
              {totalCartItems}
            </span>
          </button>

          <button
            onClick={() => scrollToSection('tryouts')}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-instinctGold via-instinctAmber to-phoenixFlame text-obsidian font-display font-extrabold text-sm tracking-wider uppercase clip-btn hover:brightness-110 transition shadow-lg shadow-phoenixFlame/20"
          >
            <MessageSquare className="w-4 h-4" />
            <span>JOIN / TRYOUTS</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            className="lg:hidden p-2.5 rounded-lg bg-surfaceLight border border-white/10 text-gray-200"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface border-b border-white/10 px-6 py-5 space-y-4">
          <div className="grid grid-cols-2 gap-3 font-display font-bold text-lg uppercase tracking-wider">
            <a href="#divisions" onClick={() => setMobileMenuOpen(false)} className="text-gray-200 hover:text-instinctGold py-1">Divisions</a>
            <a href="#divisions" onClick={() => setMobileMenuOpen(false)} className="text-gray-200 hover:text-instinctGold py-1">Roster</a>
            <a href="#matches" onClick={() => setMobileMenuOpen(false)} className="text-gray-200 hover:text-instinctGold py-1">Matches</a>
            <a href="#merch" onClick={() => setMobileMenuOpen(false)} className="text-gray-200 hover:text-instinctGold py-1">Merch / Store</a>
            <a href="#news" onClick={() => setMobileMenuOpen(false)} className="text-gray-200 hover:text-instinctGold py-1">News</a>
            <a href="#tryouts" onClick={() => setMobileMenuOpen(false)} className="text-gray-200 hover:text-instinctGold py-1">Join / Tryouts</a>
          </div>
          <button
            onClick={() => scrollToSection('tryouts')}
            className="w-full py-3 bg-gradient-to-r from-instinctGold to-phoenixFlame text-obsidian font-display font-extrabold uppercase tracking-wider clip-btn"
          >
            APPLY FOR TRYOUTS
          </button>
        </div>
      )}
    </header>
  );
};