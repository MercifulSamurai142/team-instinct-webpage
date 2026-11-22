import React from 'react';
import { ShoppingBag, Trash2, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const CartDrawer: React.FC = () => {
  const { isCartOpen, setIsCartOpen, cart, removeFromCart, cartSubtotal, checkout } = useApp();
  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div onClick={() => setIsCartOpen(false)} className="absolute inset-0 bg-black/75 backdrop-blur-xs" />
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-surface border-l border-instinctGold/30 flex flex-col justify-between p-6 shadow-2xl">
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-instinctGold" />
              <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider">PRO STORE CART</h3>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              aria-label="Close Cart"
              className="w-8 h-8 rounded-lg bg-surfaceLight hover:bg-phoenixFlame text-white flex items-center justify-center transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-6 space-y-4 max-h-[62vh] overflow-y-auto pr-1">
            {cart.length === 0 ? (
              <div className="text-center py-12 text-gray-500 font-mono text-sm">
                Your Pro Store cart is currently empty.
              </div>
            ) : (
              cart.map((item, idx) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="p-4 rounded-xl bg-obsidian border border-white/10 flex items-center justify-between gap-3"
                >
                  <div>
                    <div className="font-display font-bold text-white uppercase">{item.name}</div>
                    <div className="font-mono text-xs text-gray-400">
                      SIZE: <span className="text-instinctGold">{item.size}</span> • QTY: {item.qty}
                    </div>
                    <div className="font-mono text-sm font-bold text-white mt-1">
                      ${(item.price * item.qty).toFixed(2)}
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(idx)}
                    aria-label="Remove Item"
                    className="p-2 text-gray-400 hover:text-phoenixFlame transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 space-y-4">
          <div className="flex items-center justify-between font-mono">
            <span className="text-gray-400 text-sm">SUBTOTAL</span>
            <span className="text-xl font-bold text-instinctGold">${cartSubtotal.toFixed(2)}</span>
          </div>
          <button
            onClick={checkout}
            className="w-full py-3.5 bg-gradient-to-r from-instinctGold via-instinctAmber to-phoenixFlame text-obsidian font-display font-black text-base tracking-wider uppercase clip-btn hover:brightness-110 transition"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};