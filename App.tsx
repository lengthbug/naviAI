
import React, { useState, useMemo } from 'react';
import { CATEGORIES_CONFIG, AI_TOOLS } from './constants';
import { CategoryType } from './types';
import ToolCard from './components/ToolCard';
import Assistant from './components/Assistant';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = useMemo(() => {
    return AI_TOOLS.filter(tool => {
      const matchesCategory = selectedCategory === 'ALL' || tool.category === selectedCategory;
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col md:flex-row">
      {/* Sidebar - Desktop */}
      <aside className="w-full md:w-72 glass-panel border-r border-slate-800 flex flex-col md:sticky md:top-0 md:h-screen z-20">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-2xl shadow-lg shadow-blue-500/20">
              A
            </div>
            <h1 className="text-xl font-black tracking-tighter text-white">AI NEXUS</h1>
          </div>

          <nav className="space-y-1">
            <button
              onClick={() => setSelectedCategory('ALL')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                selectedCategory === 'ALL' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <span className="text-lg">🌍</span>
              全部软件
            </button>
            
            {CATEGORIES_CONFIG.map((cat) => (
              <button
                key={cat.type}
                onClick={() => setSelectedCategory(cat.type)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  selectedCategory === cat.type 
                  ? `bg-gradient-to-r ${cat.color} text-white shadow-lg` 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                <span className="text-lg">{cat.icon}</span>
                {cat.type}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-8 text-[10px] text-slate-500 border-t border-slate-800">
          © 2024 AI Nexus Directory
          <br />
          Curating the intelligence frontier.
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto custom-scrollbar bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">
                  {selectedCategory === 'ALL' ? '探索主流 AI 应用' : selectedCategory}
                </h2>
                <p className="text-slate-400 text-lg">
                  发现、比较并直接访问全球最顶尖的 AI 工具
                </p>
              </div>
              
              <div className="relative w-full md:w-96">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="搜索 AI 软件..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-slate-800 rounded-2xl bg-slate-900/50 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm"
                />
              </div>
            </div>

            <Assistant />
          </header>

          {/* Grid */}
          {filteredTools.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-slate-500">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-xl">未找到相关 AI 软件</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('ALL'); }}
                className="mt-4 text-blue-400 hover:text-blue-300 transition-colors"
              >
                清除所有过滤
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
