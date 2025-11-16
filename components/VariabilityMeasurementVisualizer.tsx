import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const VIEWBOX_WIDTH = 300;
const VIEWBOX_HEIGHT = 120;
const TRACE_PATH = "M0,60 C 25,40 50,80 75,60 C 100,40 125,80 150,60 C 175,40 200,80 225,60 C 250,40 275,80 300,60";
const PEAK_Y = 40;
const TROUGH_Y = 80;

export const VariabilityMeasurementVisualizer: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.8, // Delay children until trace is drawn
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div ref={ref} className="bg-slate-50 p-4 rounded-lg border border-slate-200 relative overflow-hidden">
      <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
        <svg viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`} className="w-full h-auto" aria-label="Variyabilite ölçümünü gösteren animasyonlu grafik">
          {/* Grid */}
          <g className="grid" opacity="0.6">
            {Array.from({ length: 30 }).map((_, i) => (
              <line key={`v-${i}`} x1={i * 10} y1="0" x2={i * 10} y2={VIEWBOX_HEIGHT} stroke="#e2e8f0" strokeWidth="0.5" />
            ))}
            {Array.from({ length: 24 }).map((_, i) => (
              <line key={`h-${i}`} x1="0" y1={i * 5} x2={VIEWBOX_WIDTH} y2={i * 5} stroke="#e2e8f0" strokeWidth="0.5" />
            ))}
          </g>
          
          {/* FHR Trace */}
          <motion.path 
            d={TRACE_PATH}
            fill="none" 
            strokeWidth="2"
            className="stroke-green-600"
            strokeLinecap="round" 
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Measurement Band */}
          <motion.g variants={itemVariants}>
            <line x1="0" y1={PEAK_Y} x2={VIEWBOX_WIDTH} y2={PEAK_Y} stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 2" />
            <text x={VIEWBOX_WIDTH - 5} y={PEAK_Y - 4} fontSize="8" fill="#3b82f6" textAnchor="end" className="font-sans font-semibold">En Yüksek Nokta (Peak)</text>
          </motion.g>
          <motion.g variants={itemVariants}>
            <line x1="0" y1={TROUGH_Y} x2={VIEWBOX_WIDTH} y2={TROUGH_Y} stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 2" />
            <text x={VIEWBOX_WIDTH - 5} y={TROUGH_Y + 10} fontSize="8" fill="#3b82f6" textAnchor="end" className="font-sans font-semibold">En Düşük Nokta (Trough)</text>
          </motion.g>

          {/* Amplitude Arrow & Text */}
          <motion.g variants={itemVariants}>
             <defs>
                <marker id="arrowhead-start" markerWidth="5" markerHeight="3.5" refX="5" refY="1.75" orient="auto">
                    <polygon points="5 0, 0 1.75, 5 3.5" fill="#ef4444" />
                </marker>
                 <marker id="arrowhead-end" markerWidth="5" markerHeight="3.5" refX="0" refY="1.75" orient="auto">
                    <polygon points="0 0, 5 1.75, 0 3.5" fill="#ef4444" />
                </marker>
             </defs>
             <line x1="150" y1={PEAK_Y + 2} x2="150" y2={TROUGH_Y - 2} stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#arrowhead-end)" markerStart="url(#arrowhead-start)" />
             <rect x="155" y="52" width="105" height="16" fill="rgba(248, 250, 252, 0.8)" />
             <text x="160" y="64" fontSize="9" fill="#ef4444" className="font-sans font-bold">
                Genlik (Amplitude)
             </text>
          </motion.g>
        </svg>
      </motion.div>
    </div>
  );
};