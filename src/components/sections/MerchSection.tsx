import React, { useState } from 'react';
import { Grid, Plus, Shield, Shirt, ShoppingCart } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { MERCH_DATA } from '../../data/mockData';
import { ASSETS } from '../../lib/supabase';
import type { MerchItem } from '../../types';
import { FallbackImage } from '../ui/FallbackImage';

export const MerchSection: React.FC = () => {
  const { addToCart, setIsCartOpen, totalCartItems } = useApp();
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({
    'merch-jersey': 'L',
    'merch-hoodie': 'L',
    'merch-mousepad': 'XL',
  });

  const renderIcon = (iconName: MerchItem['iconName']) => {
    switch (iconName) {
      case 'shirt':
        return <Shirt className="w-20 h-20 text-white/15" />;
      case 'vest':
        return <Shield className="w-20 h-20 text-white/15" />;
      case 'mousepad':
        return <Grid className="w-20 h-20 text-white/15" />;
    }
  };

  return (
    <section id="merch" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-xs text-phoenixFlame uppercase tracking-widest mb-2">// OFFICIAL APPAREL & GEAR</div>
            <h2 className="font-tech font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
              2026 <span className="text-instinctGold">PRO KIT</span> COLLECTION
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(true)}
            className="self-start md:self-auto px-5 py-3 rounded-xl bg-surfaceLight hover:bg-white/10 border border-instinctGold/30 text-instinctGold font-display font-bold uppercase tracking-wider flex items-center gap-2.5 transition"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>OPEN CART ({totalCartItems})</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MERCH_DATA.map((item) => {
            const activeSize = selectedSizes[item.id] || item.sizes[0];
            return (
              <div
                key={item.id}
                className="bg-surface border border-white/10 hover:border-instinctGold/50 rounded-2xl overflow-hidden flex flex-col justify-between transition card-glow"
              >
                <div>
                  <div className={`h-64 bg-gradient-to-br ${item.accent} flex flex-col items-center justify-center p-6 relative border-b border-white/10`}>
                    <span className="absolute top-4 left-4 px-3 py-1 rounded bg-obsidian/90 border border-instinctGold/30 font-mono text-[10px] font-bold text-instinctGold uppercase">
                      {item.tag}
                    </span>
                    <div className="relative flex items-center justify-center">
                      {renderIcon(item.iconName)}
                      <FallbackImage
                        src={item.imageUrl || ASSETS.logoEmblem}
                        fallbackSrc="https://placehold.co/100x100/101015/FFD700?text=TI"
                        alt={item.name}
                        className="w-24 h-24 object-contain absolute phoenix-glow"
                      />
                    </div>
                    <span className="mt-4 font-mono text-xs text-gray-300 uppercase tracking-widest">
                      TEAM INSTINCT // PRO SERIES
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display font-bold text-xl text-white uppercase leading-snug">{item.name}</h3>
                      <span className="font-mono font-bold text-lg text-instinctGold">${item.price.toFixed(2)}</span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>

                    {/* Size Selector */}
                    <div className="pt-2">
                      <span className="block font-mono text-[11px] text-gray-400 uppercase mb-2">SELECT SIZE</span>
                      <div className="flex gap-2">
                        {item.sizes.map((sz) => (
                          <button
                            key={sz}
                            onClick={() => setSelectedSizes((prev) => ({ ...prev, [item.id]: sz }))}
                            className={`px-3.5 py-1.5 rounded font-mono text-xs font-bold border transition ${
                              activeSize === sz
                                ? 'bg-instinctGold text-obsidian border-instinctGold'
                                : 'bg-obsidian text-gray-300 border-white/15 hover:border-instinctGold/50'
                            }`}
                          >
                            {sz}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <button
                    onClick={() => addToCart(item, activeSize)}
                    className="w-full py-3.5 bg-gradient-to-r from-instinctGold via-instinctAmber to-phoenixFlame text-obsidian font-display font-black text-sm tracking-wider uppercase clip-btn hover:brightness-110 transition flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>ADD TO CART</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};