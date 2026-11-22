import React, { createContext, useContext, useState, useCallback } from 'react';
import type {
  CartItem,
  DivisionKey,
  MerchItem,
  NewsArticle,
  Player,
  ToastMessage,
} from '../types';

interface AppContextValue {
  // Division state (allows footer links to switch roster tab)
  activeDivision: DivisionKey;
  setActiveDivision: (division: DivisionKey) => void;

  // Cart state
  cart: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addToCart: (item: MerchItem, size: string) => void;
  removeFromCart: (index: number) => void;
  checkout: () => void;
  totalCartItems: number;
  cartSubtotal: number;

  // Modals
  selectedPlayer: Player | null;
  setSelectedPlayer: (player: Player | null) => void;
  streamTitle: string | null;
  openStreamModal: (title: string) => void;
  closeStreamModal: () => void;
  selectedArticle: NewsArticle | null;
  setSelectedArticle: (article: NewsArticle | null) => void;

  // Toasts
  toasts: ToastMessage[];
  showToast: (message: string) => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeDivision, setActiveDivision] = useState<DivisionKey>('VALORANT');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [streamTitle, setStreamTitle] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = useCallback((message: string) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  const addToCart = (product: MerchItem, size: string) => {
    setCart((prev) => {
      const idx = prev.findIndex((item) => item.id === product.id && item.size === size);
      if (idx > -1) {
        const updated = [...prev];
        updated[idx] = { ...updated[idx], qty: updated[idx].qty + 1 };
        return updated;
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, size, qty: 1 }];
    });
    showToast(`Added ${product.name} (${size}) to cart`);
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const checkout = () => {
    if (cart.length === 0) {
      showToast('Add a Pro Kit item to your cart first!');
      return;
    }
    setCart([]);
    setIsCartOpen(false);
    showToast('Order confirmed! Thank you for repping Team Instinct.');
  };

  const openStreamModal = (title: string) => setStreamTitle(title);
  const closeStreamModal = () => setStreamTitle(null);

  const totalCartItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartSubtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <AppContext.Provider
      value={{
        activeDivision,
        setActiveDivision,
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        checkout,
        totalCartItems,
        cartSubtotal,
        selectedPlayer,
        setSelectedPlayer,
        streamTitle,
        openStreamModal,
        closeStreamModal,
        selectedArticle,
        setSelectedArticle,
        toasts,
        showToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within an AppProvider');
  return ctx;
};