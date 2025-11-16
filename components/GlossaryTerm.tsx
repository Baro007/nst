
import React from 'react';

interface GlossaryTermProps {
  term: string;
  definition: string;
}

export const GlossaryTerm: React.FC<GlossaryTermProps> = ({ term, definition }) => {
  return (
    <span className="relative group">
      <span className="text-blue-600 font-semibold border-b-2 border-blue-400 border-dotted cursor-pointer">
        {term}
      </span>
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 w-64 p-3 bg-slate-800 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 mb-2">
        {definition}
        <svg className="absolute text-slate-800 h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255">
            <polygon className="fill-current" points="0,0 127.5,127.5 255,0"/>
        </svg>
      </span>
    </span>
  );
};
