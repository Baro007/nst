import React, { useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { DecelerationType, TraceData } from '../types';

const VIEWBOX_WIDTH = 150;

// Enhanced trace data with more realistic paths and baked-in variability
const TRACE_DATA: Record<DecelerationType, TraceData> = {
  early: {
    contraction: "M0,80 C 30,80 40,55 75,55 C 110,55 120,80 150,80",
    fhr: "M0,30 C 30,30 40,55 75,55 C 110,55 120,30 150,30"
  },
  late: {
    contraction: "M0,80 C 30,80 40,55 75,55 C 110,55 120,80 150,80",
    fhr: "M15,30 C 45,30 55,55 90,55 C 125,55 135,30 165,30"
  },
  variable: {
    contraction: "M10,80 C 40,80 50,55 85,55 C 120,55 130,80 160,80",
    fhr: "M0,30 C 15,28 30,32 45,30 L 50,25 L 65,65 L 80,25 L 85,30 C 100,32 125,28 150,30"
  },
  prolonged: {
    contraction: "M10,80 C 45,80 55,55 90,55 C 125,55 135,80 160,80",
    fhr: "M0,30 C 15,30 25,60 40,60 L 110,60 C 125,60 135,30 150,30"
  },
  sinusoidal: {
    contraction: "M0,80 H150",
    fhr: "M0,30 C 7.5,20 15,40 22.5,30 C 30,20 37.5,40 45,30 C 52.5,20 60,40 67.5,30 C 75,20 82.5,40 90,30 C 97.5,20 105,40 112.5,30 C 120,20 127.5,40 135,30 C 142.5,20 150,40 157.5,30"
  }
};

const TRACE_COLORS = {
  early: 'stroke-green-600 dark:stroke-green-400',
  late: 'stroke-red-600 dark:stroke-red-400',
  variable: 'stroke-amber-600 dark:stroke-amber-400',
  prolonged: 'stroke-orange-600 dark:stroke-orange-400',
  sinusoidal: 'stroke-red-700 dark:stroke-red-500'
};

export const TraceVisualizer: React.FC<{ type: DecelerationType }> = ({ type }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [isLive, setIsLive] = React.useState(false);
  
  const data = useMemo(() => TRACE_DATA[type], [type]);
  const colorClass = useMemo(() => TRACE_COLORS[type], [type]);

  return (
    <div ref={ref} className="bg-rose-50/70 dark:bg-slate-900/60 p-2 rounded-lg border border-rose-200/80 dark:border-slate-800/80 relative overflow-hidden">
      {/* Live Monitor Toggle */}
      <button 
        onClick={() => setIsLive(prev => !prev)}
        className="absolute top-1 left-2 bg-slate-800/85 hover:bg-slate-700/85 dark:bg-slate-700/85 dark:hover:bg-slate-600/85 text-[10px] text-white font-medium px-2 py-0.5 rounded flex items-center gap-1.5 backdrop-blur-sm transition-all z-10 select-none shadow-sm"
      >
        <span className={`w-1.5 h-1.5 rounded-full ${isLive ? 'bg-red-500 animate-pulse' : 'bg-slate-400'}`}></span>
        <span>{isLive ? 'MONİTÖR AKTİF' : 'MONİTÖRÜ ÇALIŞTIR'}</span>
      </button>

      <svg viewBox={`0 0 ${VIEWBOX_WIDTH} 100`} className="w-full h-auto" aria-label={`${type} deselerasyon trasesi`}>
        {/* Grid */}
        <g className="grid" opacity="0.8">
          {/* Vertical Lines */}
          {Array.from({ length: 15 }).map((_, i) => (
            <line key={`v-${i}`} x1={i * 10} y1="0" x2={i * 10} y2="100" stroke="currentColor" className="text-rose-200/50 dark:text-slate-800" strokeWidth="0.5" />
          ))}
          {/* Horizontal Lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 5} x2={VIEWBOX_WIDTH} y2={i * 5} stroke="currentColor" className="text-rose-200/50 dark:text-slate-800" strokeWidth="0.5" />
          ))}
          <line x1="0" y1="30" x2={VIEWBOX_WIDTH} y2="30" stroke="currentColor" className="text-rose-300 dark:text-slate-700" strokeWidth="0.75" />
          <line x1="0" y1="80" x2={VIEWBOX_WIDTH} y2="80" stroke="currentColor" className="text-rose-300 dark:text-slate-700" strokeWidth="0.75" />
        </g>
        
        {/* Labels */}
        <text x="2" y="10" fontSize="5" fill="currentColor" className="text-stone-600 dark:text-slate-400 font-sans font-medium">160</text>
        <text x="2" y="28" fontSize="5" fill="currentColor" className="text-stone-600 dark:text-slate-400 font-sans font-medium">135</text>
        <text x="2" y="48" fontSize="5" fill="currentColor" className="text-stone-600 dark:text-slate-400 font-sans font-medium">110</text>
        
        <motion.path 
          d={data.contraction} 
          fill="none" 
          strokeWidth="1.5"
          className="stroke-slate-500 dark:stroke-slate-400"
          strokeLinecap="round" 
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            isLive 
              ? { pathLength: [0, 1], opacity: 1 } 
              : (isInView ? { pathLength: 1, opacity: 1 } : {})
          }
          transition={
            isLive 
              ? { duration: 5, repeat: Infinity, ease: "linear" }
              : { duration: 2.5, ease: "easeInOut" }
          }
          key={isLive ? `${type}-contraction-live` : `${type}-contraction-static`}
        />

        <motion.path 
          d={data.fhr}
          fill="none" 
          strokeWidth="1.5"
          className={colorClass}
          strokeLinecap="round" 
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            isLive 
              ? { pathLength: [0, 1], opacity: 1 } 
              : (isInView ? { pathLength: 1, opacity: 1 } : {})
          }
          transition={
            isLive 
              ? { duration: 5, repeat: Infinity, ease: "linear" }
              : { duration: 2.5, ease: "easeInOut" }
          }
          key={isLive ? `${type}-fhr-live` : `${type}-fhr-static`}
        />

        {/* Live Sweeper Line Overlay */}
        {isLive && (
          <motion.line 
            x1="0" 
            y1="0" 
            x2="0" 
            y2="100" 
            stroke="#3b82f6" 
            strokeWidth="1.5"
            animate={{ x1: [0, VIEWBOX_WIDTH], x2: [0, VIEWBOX_WIDTH] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
        )}
      </svg>
      <div className="absolute top-1 right-2 text-xs text-stone-600 dark:text-slate-400 font-semibold" aria-hidden="true">FHR (bpm)</div>
      <div className="absolute bottom-1 right-2 text-xs text-stone-600 dark:text-slate-400 font-semibold" aria-hidden="true">Sancı (TOCO)</div>
    </div>
  );
};