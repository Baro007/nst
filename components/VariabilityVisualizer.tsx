import React, { useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { VariabilityType } from '../types';

interface VariabilityTraceData {
  fhr: string;
}

const VIEWBOX_WIDTH = 150;
const VIEWBOX_HEIGHT = 80; // Increased height for better scale definition
const BASELINE_Y = 40; // Baseline at 135 bpm

// Paths with corrected visual amplitudes (Bezier control points scaled by 1.73 to achieve correct peaks matching the grid)
const TRACE_DATA: Record<VariabilityType, VariabilityTraceData> = {
  // Amplitude: 0 bpm. Undetectable flat line.
  absent: {
    fhr: `M0,${BASELINE_Y} H150`
  },
  // Amplitude: <= 5 bpm (control offset 4 bpm -> actual visual peak 2.3 bpm -> amplitude 4.6 bpm)
  minimal: {
    fhr: `M0,${BASELINE_Y} C 12.5,${BASELINE_Y - 4} 25,${BASELINE_Y + 4} 37.5,${BASELINE_Y} C 50,${BASELINE_Y - 4} 62.5,${BASELINE_Y + 4} 75,${BASELINE_Y} C 87.5,${BASELINE_Y - 4} 100,${BASELINE_Y + 4} 112.5,${BASELINE_Y} C 125,${BASELINE_Y - 4} 137.5,${BASELINE_Y + 4} 150,${BASELINE_Y}`
  },
  // Amplitude: 6 - 25 bpm (control offset 16 bpm -> actual visual peak 9.2 bpm -> amplitude 18.4 bpm, i.e., ~4 grid blocks)
  moderate: {
    fhr: `M0,${BASELINE_Y} C 12.5,${BASELINE_Y - 16} 25,${BASELINE_Y + 16} 37.5,${BASELINE_Y} C 50,${BASELINE_Y - 16} 62.5,${BASELINE_Y + 16} 75,${BASELINE_Y} C 87.5,${BASELINE_Y - 16} 100,${BASELINE_Y + 16} 112.5,${BASELINE_Y} C 125,${BASELINE_Y - 16} 137.5,${BASELINE_Y + 16} 150,${BASELINE_Y}`
  },
  // Amplitude: > 25 (control offset 30 bpm -> actual visual peak 17.3 bpm -> amplitude 34.6 bpm, i.e., ~7 grid blocks)
  marked: {
    fhr: `M0,${BASELINE_Y} C 12.5,${BASELINE_Y - 30} 25,${BASELINE_Y + 30} 37.5,${BASELINE_Y} C 50,${BASELINE_Y - 30} 62.5,${BASELINE_Y + 30} 75,${BASELINE_Y} C 87.5,${BASELINE_Y - 30} 100,${BASELINE_Y + 30} 112.5,${BASELINE_Y} C 125,${BASELINE_Y - 30} 137.5,${BASELINE_Y + 30} 150,${BASELINE_Y}`
  }
};

const TRACE_COLORS: Record<VariabilityType, string> = {
  absent: 'stroke-red-600 dark:stroke-red-400',
  minimal: 'stroke-amber-600 dark:stroke-amber-400',
  moderate: 'stroke-green-600 dark:stroke-green-400',
  marked: 'stroke-blue-600 dark:stroke-blue-400'
};

export const VariabilityVisualizer: React.FC<{ type: VariabilityType }> = ({ type }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  const data = useMemo(() => TRACE_DATA[type], [type]);
  const colorClass = useMemo(() => TRACE_COLORS[type], [type]);

  const BPM_160_Y = BASELINE_Y - 25; // 15
  const BPM_110_Y = BASELINE_Y + 25; // 65

  return (
    <div ref={ref} className="bg-rose-50/70 dark:bg-slate-900/60 mt-4 rounded-lg border border-rose-200/80 dark:border-slate-800/80 relative overflow-hidden">
      <svg viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`} className="w-full h-auto" aria-label={`${type} variyabilite trasesi`}>
        {/* Grid */}
        <g className="grid" opacity="0.8">
          {/* Vertical Lines */}
          {Array.from({ length: 15 }).map((_, i) => (
            <line key={`v-${i}`} x1={i * 10} y1="0" x2={i * 10} y2={VIEWBOX_HEIGHT} stroke="currentColor" className="text-rose-200/50 dark:text-slate-800" strokeWidth="0.5" />
          ))}
          {/* Horizontal Lines (5 y-units = 5 bpm steps) */}
          {Array.from({ length: 17 }).map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 5} x2={VIEWBOX_WIDTH} y2={i * 5} stroke="currentColor" className="text-rose-200/50 dark:text-slate-800" strokeWidth="0.5" />
          ))}
          <line x1="0" y1={BPM_160_Y} x2={VIEWBOX_WIDTH} y2={BPM_160_Y} stroke="currentColor" className="text-rose-300 dark:text-slate-700" strokeWidth="0.75" />
          <line x1="0" y1={BASELINE_Y} x2={VIEWBOX_WIDTH} y2={BASELINE_Y} stroke="currentColor" className="text-rose-300 dark:text-slate-700" strokeWidth="0.75" />
          <line x1="0" y1={BPM_110_Y} x2={VIEWBOX_WIDTH} y2={BPM_110_Y} stroke="currentColor" className="text-rose-300 dark:text-slate-700" strokeWidth="0.75" />
        </g>
        
        {/* Labels */}
        <text x="2" y={BPM_160_Y - 2} fontSize="5" fill="currentColor" className="text-stone-600 dark:text-slate-400 font-sans font-medium">160</text>
        <text x="2" y={BASELINE_Y - 2} fontSize="5" fill="currentColor" className="text-stone-600 dark:text-slate-400 font-sans font-medium">135 - Bazal Hız</text>
        <text x="2" y={BPM_110_Y + 5} fontSize="5" fill="currentColor" className="text-stone-600 dark:text-slate-400 font-sans font-medium">110</text>
        
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
      <div className="absolute top-1 right-2 text-xs text-stone-600 dark:text-slate-400 font-semibold" aria-hidden="true">FHR (bpm)</div>
    </div>
  );
};