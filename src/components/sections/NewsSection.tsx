import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NEWS_DATA } from '../../data/mockData';

export const NewsSection: React.FC = () => {
  const { setSelectedArticle } = useApp();

  return (
    <div>
      <div className="mb-12">
        <div className="font-mono text-xs text-instinctGold uppercase tracking-widest mb-2">// PRESS RELEASES & UPDATES</div>
        <h2 className="font-tech font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
          LATEST <span className="text-phoenixFlame">INTEL</span> & NEWS
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {NEWS_DATA.map((article) => (
          <article
            key={article.id}
            className="bg-obsidian border border-white/10 hover:border-instinctGold/40 rounded-2xl p-6 flex flex-col justify-between transition card-glow"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-phoenixFlame font-bold">{article.category}</span>
                <span className="text-gray-500">{article.date}</span>
              </div>
              <h3
                onClick={() => setSelectedArticle(article)}
                className="font-display font-bold text-xl text-white uppercase leading-snug hover:text-instinctGold transition cursor-pointer"
              >
                {article.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">{article.summary}</p>
            </div>
            <div className="pt-6">
              <button
                onClick={() => setSelectedArticle(article)}
                className="font-display font-bold text-sm text-instinctGold hover:text-white uppercase tracking-wider flex items-center gap-2 transition"
              >
                <span>READ FULL BRIEFING</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};