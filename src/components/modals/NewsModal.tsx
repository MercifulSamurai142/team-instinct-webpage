import React from 'react';
import { X } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const NewsModal: React.FC = () => {
  const { selectedArticle, setSelectedArticle } = useApp();
  if (!selectedArticle) return null;

  return (
    <div
      onClick={() => setSelectedArticle(null)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-surface border border-instinctGold/40 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
      >
        <button
          onClick={() => setSelectedArticle(null)}
          aria-label="Close News Modal"
          className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-obsidian/80 hover:bg-phoenixFlame text-white flex items-center justify-center transition z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="px-2.5 py-1 rounded bg-phoenixFlame/20 text-phoenixFlame font-bold">
              {selectedArticle.category}
            </span>
            <span className="text-gray-400">{selectedArticle.date}</span>
          </div>
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase leading-tight">
            {selectedArticle.title}
          </h3>
          <div className="h-px bg-white/10 my-2" />
          <p className="text-gray-300 text-base leading-relaxed">{selectedArticle.summary}</p>
          <p className="text-gray-300 text-base leading-relaxed">{selectedArticle.content}</p>
        </div>
      </div>
    </div>
  );
};