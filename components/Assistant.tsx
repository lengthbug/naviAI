
import React, { useState } from 'react';
import { getSmartRecommendation } from '../services/geminiService';

const Assistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setLoading(true);
    setResponse(null);
    try {
      const result = await getSmartRecommendation(query);
      setResponse(result.text);
    } catch (error) {
      setResponse("Failed to get recommendation. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-panel p-6 rounded-3xl mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-xl">
          ✨
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white">Smart Nexus AI</h2>
          <p className="text-xs text-slate-400">Ask me to find the perfect tool for your task</p>
        </div>
      </div>

      <form onSubmit={handleAsk} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="I need an AI for generating creative logos..."
          className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 px-4 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
        />
        <button
          type="submit"
          disabled={loading}
          className="absolute right-2 top-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-1 rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
        >
          {loading ? 'Searching...' : 'Ask'}
        </button>
      </form>

      {response && (
        <div className="mt-4 p-4 bg-slate-800/80 rounded-xl border border-indigo-500/30 text-sm text-slate-200 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="font-bold text-indigo-400 mb-2">Recommendation:</div>
          {response}
        </div>
      )}
    </div>
  );
};

export default Assistant;
