import React from 'react';
import { Zap } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ToastContainer: React.FC = () => {
  const { toasts } = useApp();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-center gap-3 px-5 py-3.5 rounded-xl bg-surface border border-instinctGold/50 text-white shadow-2xl font-sans text-sm max-w-sm animate-[fadeIn_0.2s_ease-out]"
        >
          <Zap className="w-4 h-4 text-instinctGold shrink-0" />
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
};