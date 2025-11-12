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
  }
};

const TRACE_COLORS = {
  early: 'stroke-green-600',
  late: 'stroke-red-600',
  variable: 'stroke-amber-600'
};

export const TraceVisualizer: React.FC<{ type: DecelerationType }> = ({ type }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  const data = useMemo(() => TRACE_DATA[type], [type]);
  const colorClass = useMemo(() => TRACE_COLORS[type], [type]);

  return (
    <div ref={ref} className="bg-rose-50/70 p-2 rounded-lg border border-rose-200/80 relative overflow-hidden">
      <svg viewBox={`0 0 ${VIEWBOX_WIDTH} 100`} className="w-full h-auto" aria-label={`${type} deselerasyon trasesi`}>
        {/* Grid */}
        <g className="grid" opacity="0.8">
          {/* Vertical Lines */}
          {Array.from({ length: 15 }).map((_, i) => (
            <line key={`v-${i}`} x1={i * 10} y1="0" x2={i * 10} y2="100" stroke="#e7d8d8" strokeWidth="0.5" />
          ))}
          {/* Horizontal Lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 5} x2={VIEWBOX_WIDTH} y2={i * 5} stroke="#e7d8d8" strokeWidth="0.5" />
          ))}
          <line x1="0" y1="30" x2={VIEWBOX_WIDTH} y2="30" stroke="#d1baba" strokeWidth="0.75" />
          <line x1="0" y1="80" x2={VIEWBOX_WIDTH} y2="80" stroke="#d1baba" strokeWidth="0.75" />
        </g>
        
        {/* Labels */}
        <text x="2" y="10" fontSize="5" fill="#78716c" className="font-sans font-medium">160</text>
        <text x="2" y="28" fontSize="5" fill="#78716c" className="font-sans font-medium">135</text>
        <text x="2" y="48" fontSize="5" fill="#78716c" className="font-sans font-medium">110</text>
        
        <motion.path 
          d={data.contraction} 
          fill="none" 
          strokeWidth="1.5"
          className="stroke-slate-500"
          strokeLinecap="round" 
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />

        <motion.path 
          d={data.fhr}
          fill="none" 
          strokeWidth="1.5"
          className={colorClass}
          strokeLinecap="round" 
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
      </svg>
      <div className="absolute top-1 right-2 text-xs text-stone-600 font-semibold" aria-hidden="true">FHR (bpm)</div>
      <div className="absolute bottom-1 right-2 text-xs text-stone-600 font-semibold" aria-hidden="true">Sancı (TOCO)</div>
    </div>
  );
};