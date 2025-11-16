import React, { useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { VariabilityType } from '../types';

interface VariabilityTraceData {
  fhr: string;
}

const VIEWBOX_WIDTH = 150;
const VIEWBOX_HEIGHT = 70; // Increased height for better visualization and clearer scale
const BASELINE_Y = 35; // Baseline at 135 bpm, centered for scale: 1 y-unit = 1 bpm

// Paths are calculated based on a 1 y-unit = 1 bpm scale.
const TRACE_DATA: Record<VariabilityType, VariabilityTraceData> = {
  // Amplitude: 0 bpm. Undetectable.
  absent: {
    fhr: `M0,${BASELINE_Y} H150`
  },
  // Amplitude: 5 bpm. Range: y=32.5 to y=37.5 (≤ 5 bpm)
  minimal: {
    fhr: `M0,${BASELINE_Y} C 15,${BASELINE_Y - 2.5} 30,${BASELINE_Y + 2.5} 45,${BASELINE_Y} C 60,${BASELINE_Y - 2.5} 75,${BASELINE_Y + 2.5} 90,${BASELINE_Y} C 105,${BASELINE_Y - 2.5} 120,${BASELINE_Y + 2.5} 135,${BASELINE_Y} C 140,${BASELINE_Y - 1.25} 145,${BASELINE_Y + 1.25} 150,${BASELINE_Y}`
  },
  // Amplitude: 16 bpm. Range: y=27 to y=43 (6-25 bpm)
  moderate: {
    fhr: `M0,${BASELINE_Y} C 12.5,${BASELINE_Y - 8} 25,${BASELINE_Y + 8} 37.5,${BASELINE_Y} C 50,${BASELINE_Y - 8} 62.5,${BASELINE_Y + 8} 75,${BASELINE_Y} C 87.5,${BASELINE_Y - 8} 100,${BASELINE_Y + 8} 112.5,${BASELINE_Y} C 125,${BASELINE_Y - 8} 137.5,${BASELINE_Y + 8} 150,${BASELINE_Y}`
  },
  // Amplitude: 30 bpm. Range: y=20 to y=50 (> 25 bpm)
  marked: {
    fhr: `M0,${BASELINE_Y} C 10,${BASELINE_Y - 15} 20,${BASELINE_Y + 15} 30,${BASELINE_Y} C 40,${BASELINE_Y - 15} 50,${BASELINE_Y + 15} 60,${BASELINE_Y} C 70,${BASELINE_Y - 15} 80,${BASELINE_Y + 15} 90,${BASELINE_Y} C 100,${BASELINE_Y - 15} 110,${BASELINE_Y + 15} 120,${BASELINE_Y} C 130,${BASELINE_Y - 15} 140,${BASELINE_Y + 15} 150,${BASELINE_Y}`
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

  const BPM_160_Y = BASELINE_Y - 25; // 160 bpm line
  const BPM_110_Y = BASELINE_Y + 25; // 110 bpm line

  return (
    <div ref={ref} className="bg-rose-50/70 mt-4 rounded-lg border border-rose-200/80 relative overflow-hidden">
      <svg viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`} className="w-full h-auto" aria-label={`${type} variyabilite trasesi`}>
        {/* Grid */}
        <g className="grid" opacity="0.8">
          {/* Vertical Lines */}
          {Array.from({ length: 15 }).map((_, i) => (
            <line key={`v-${i}`} x1={i * 10} y1="0" x2={i * 10} y2={VIEWBOX_HEIGHT} stroke="#e7d8d8" strokeWidth="0.5" />
          ))}
          {/* Horizontal Lines (5 y-units = 5 bpm steps) */}
          {Array.from({ length: 14 }).map((_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 5} x2={VIEWBOX_WIDTH} y2={i * 5} stroke="#e7d8d8" strokeWidth="0.5" />
          ))}
          <line x1="0" y1={BASELINE_Y} x2={VIEWBOX_WIDTH} y2={BASELINE_Y} stroke="#d1baba" strokeWidth="0.75" />
        </g>
        
        {/* Labels */}
        <text x="2" y={BPM_160_Y - 2} fontSize="5" fill="#78716c" className="font-sans font-medium">160</text>
        <text x="2" y={BASELINE_Y - 2} fontSize="5" fill="#78716c" className="font-sans font-medium">135 - Bazal Hız</text>
        <text x="2" y={BPM_110_Y + 5} fontSize="5" fill="#78716c" className="font-sans font-medium">110</text>
        
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