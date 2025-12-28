
import React from 'react';
import { AITool } from '../types';

interface ToolCardProps {
  tool: AITool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col items-center p-6 glass-panel rounded-2xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/30 overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>

      <div className="w-20 h-20 mb-4 rounded-2xl overflow-hidden bg-slate-800 flex items-center justify-center p-1 border-2 border-transparent group-hover:border-blue-500/50 transition-all duration-300">
        <img 
          src={tool.icon} 
          alt={tool.name} 
          className="w-full h-full object-cover rounded-xl"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${tool.name}&background=1e293b&color=fff`;
          }}
        />
      </div>

      <h3 className="text-lg font-bold text-slate-100 mb-1 group-hover:text-blue-400 transition-colors">
        {tool.name}
      </h3>
      
      <p className="text-xs text-slate-400 text-center line-clamp-2 leading-relaxed">
        {tool.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1 justify-center">
        {tool.tags.map((tag) => (
          <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-slate-700 text-slate-300 font-medium">
            #{tag}
          </span>
        ))}
      </div>
    </a>
  );
};

export default ToolCard;
