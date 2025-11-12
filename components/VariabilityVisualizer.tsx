import React, { useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { VariabilityType } from '../types';

interface VariabilityTraceData {
  fhr: string;
}

const VIEWBOX_WIDTH = 150;
const VIEWBOX_HEIGHT = 60;

const TRACE_DATA: Record<VariabilityType, VariabilityTraceData> = {
  absent: {
    fhr: "M0,30.5 Q 75,29.5 150,30.5"
  },
  minimal: {
    fhr: "M0,30 C 15,28 30,32 45,30 C 60,28 75,32 90,30 C 105,28 120,32 135,30 C 140,29 145,31 150,30"
  },
  moderate: {
    fhr: "M0,30 C 12.5,22 25,38 37.5,30 C 50,22 62.5,38 75,30 C 87.5,22 100,38 112.5,30 C 125,22 137.5,38 150,30"
  },
  marked: {
    fhr: "M0,30 C 10,15 20,45 30,30 C 40,15 50,45 60,30 C 70,15 80,45 90,30 C 100,15 110,45 120,30 C 130,15 140,45 150,30"
  }
};

const TRACE_COLORS: Record<VariabilityType, string> = {
  absent: 'stroke-red-600',
  minimal: 'stroke-amber-600',
  moderate: 'stroke-green-600',
  marked: 'stroke-blue-600'
};

export const VariabilityVisualizer: React.FC<{ type: VariabilityType }> = ({ type }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  const data = useMemo(() => TRACE_DATA[type], [type]);
  const colorClass = useMemo(() => TRACE_COLORS[type], [type]);

  return (
    <div ref={ref} className="bg-rose-50/70 mt-4 rounded-lg border border-rose-200/80 relative overflow-hidden">
      <svg viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`} className="w-full h-auto" aria-label={`${type} variyabilite trasesi`}>
        {/* Grid */}
        <g className="grid" opacity="0.8">
          {/* Vertical Lines */}
          {Array.from({ length: 15 }).map((_, i) => (
            <line key={`v-${i}`} x1={i * 10} y1="0" x2={i * 10} y2={VIEWBOX_HEIGHT} stroke="#e7d8d8" strokeWidth="0.5" />
          ))}
          {/* Horizontal Lines */}
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 5} x2={VIEWBOX_WIDTH} y2={i * 5} stroke="#e7d8d8" strokeWidth="0.5" />
          ))}
          <line x1="0" y1="30" x2={VIEWBOX_WIDTH} y2="30" stroke="#d1baba" strokeWidth="0.75" />
        </g>
        
        {/* Labels */}
        <text x="2" y="8" fontSize="5" fill="#78716c" className="font-sans font-medium">160</text>
        <text x="2" y="28" fontSize="5" fill="#78716c" className="font-sans font-medium">135</text>
        <text x="2" y="48" fontSize="5" fill="#78716c" className="font-sans font-medium">110</text>
        
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
    </div>
  );
};