import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizCases } from '../constants';

export const InteractiveQuiz: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const activeCase = quizCases[activeCaseIndex];

  const handleOptionSelect = (questionId: string, optionIndex: number) => {
    if (showResults) return; // Disable changes after checking
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleCheckAnswers = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  const handleCaseChange = (index: number) => {
    setActiveCaseIndex(index);
    setSelectedAnswers({});
    setShowResults(false);
  };

  // SVG Paths and configurations for each case to visualize them perfectly
  const renderCaseTrace = () => {
    const width = 300;
    const height = 120;

    let fhrPath = "";
    let tocoPath = "";
    let gridColor = "text-slate-200 dark:text-slate-800";
    let fhrColor = "stroke-green-600 dark:stroke-green-400";
    let tocoColor = "stroke-slate-400 dark:stroke-slate-500";
    let fhrClass = "";

    if (activeCase.id === "case-1") {
      // Normal FHR: Moderate variability (small random-like oscillations) + 3 Accelerations
      fhrPath = "M0,45 C 5,43 10,47 15,45 C 20,43 25,47 30,45 C 35,28 45,28 50,45 C 55,43 60,47 65,45 C 70,43 75,47 80,45 C 85,28 95,28 100,45 C 105,43 110,47 115,45 C 120,43 125,47 130,45 C 135,28 145,28 150,45 C 155,43 160,47 165,45 C 170,43 175,47 180,45 C 185,43 190,47 195,45 C 200,43 205,47 210,45 C 215,43 220,47 225,45 C 230,43 235,47 240,45 C 245,43 250,47 255,45 C 260,43 265,47 270,45 C 275,43 280,47 285,45 C 290,43 295,47 300,45";
      tocoPath = "M0,90 H300";
    } else if (activeCase.id === "case-2") {
      // Preeclampsia / Late Decelerations: Minimal variability (very flat FHR) + late decels lagging contractions
      fhrPath = "M0,40 C 15,39 20,41 25,40 C 35,39 45,41 55,40 C 65,40 70,42 75,45 C 85,55 90,58 95,58 C 105,58 115,48 120,40 C 135,39 155,41 175,40 C 185,40 190,42 195,45 C 205,55 210,58 215,58 C 225,58 235,48 240,40 C 255,39 275,41 300,40";
      tocoPath = "M0,90 C 30,90 40,65 75,65 C 110,65 120,90 150,90 C 180,90 190,65 225,65 C 260,65 270,90 300,90";
      fhrColor = "stroke-red-600 dark:stroke-red-400";
    } else if (activeCase.id === "case-3") {
      // Rh incompatibility / Sinusoidal Pattern: Extremely regular sine-wave-like FHR
      fhrPath = "M0,55 C 10,43 20,67 30,55 C 40,43 50,67 60,55 C 70,43 80,67 90,55 C 100,43 110,67 120,55 C 130,43 140,67 150,55 C 160,43 170,67 180,55 C 190,43 200,67 210,55 C 220,43 230,67 240,55 C 250,43 260,67 270,55 C 280,43 290,67 300,55";
      tocoPath = "M0,90 H300";
      fhrColor = "stroke-red-700 dark:stroke-red-500 animate-pulse";
    }

    return (
      <div className="bg-rose-50/40 dark:bg-slate-950/40 p-3 rounded-lg border border-slate-200 dark:border-slate-800 relative overflow-hidden select-none">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* Grid */}
          <g opacity="0.6">
            {Array.from({ length: 30 }).map((_, i) => (
              <line key={`v-${i}`} x1={i * 10} y1="0" x2={i * 10} y2={height} stroke="currentColor" className={gridColor} strokeWidth="0.5" />
            ))}
            {Array.from({ length: 24 }).map((_, i) => (
              <line key={`h-${i}`} x1="0" y1={i * 5} x2={width} y2={i * 5} stroke="currentColor" className={gridColor} strokeWidth="0.5" />
            ))}
          </g>

          {/* Grid Labels */}
          <text x="2" y="15" fontSize="6" fill="currentColor" className="text-slate-400 dark:text-slate-500 font-sans font-semibold">180</text>
          <text x="2" y="45" fontSize="6" fill="currentColor" className="text-slate-400 dark:text-slate-500 font-sans font-semibold">140 (Bazal)</text>
          <text x="2" y="85" fontSize="6" fill="currentColor" className="text-slate-400 dark:text-slate-500 font-sans font-semibold">100</text>

          {/* TOCO Contraction Line */}
          {tocoPath && (
            <path d={tocoPath} fill="none" strokeWidth="1.5" className={tocoColor} strokeLinecap="round" strokeLinejoin="round" />
          )}

          {/* FHR Line */}
          {fhrPath && (
            <motion.path 
              d={fhrPath} 
              fill="none" 
              strokeWidth="2" 
              className={`${fhrColor} ${fhrClass}`}
              strokeLinecap="round" 
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5 }}
              key={`${activeCase.id}-fhr`}
            />
          )}
        </svg>
        <div className="absolute top-1 right-2 text-[9px] text-stone-500 dark:text-slate-400 font-semibold">FHR (bpm)</div>
        <div className="absolute bottom-1 right-2 text-[9px] text-stone-500 dark:text-slate-400 font-semibold">Sancı (TOCO)</div>
      </div>
    );
  };

  const getScore = () => {
    let score = 0;
    activeCase.questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const allAnswered = activeCase.questions.every(q => selectedAnswers[q.id] !== undefined);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800/80 overflow-hidden">
      {/* Quiz Headers / Tabs */}
      <div className="flex border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
        {quizCases.map((c, i) => (
          <button
            key={c.id}
            onClick={() => handleCaseChange(i)}
            className={`flex-1 py-3 px-4 text-center font-semibold text-sm transition-all duration-200 border-b-2 ${
              activeCaseIndex === i
                ? 'border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-500 bg-white dark:bg-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            {c.title}
          </button>
        ))}
      </div>

      <div className="p-6 space-y-6">
        {/* Case Info Header */}
        <div className="flex items-center justify-between">
          <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
            {activeCase.gestationalWeek} Gebelik
          </span>
          <span className="text-xs text-slate-400 font-medium">İnteraktif Vaka Analizi</span>
        </div>

        {/* Clinical Description */}
        <div className="bg-slate-50 dark:bg-slate-950/30 p-4 rounded-lg border border-slate-100 dark:border-slate-800/50 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
          <p className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Klinik Öykü:</p>
          {activeCase.description}
        </div>

        {/* Interactive Trase */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">NST Trasesi:</p>
          {renderCaseTrace()}
        </div>

        {/* Questions List */}
        <div className="space-y-6 pt-4 border-t border-slate-100 dark:border-slate-800">
          {activeCase.questions.map((q, qIndex) => {
            const isCorrect = selectedAnswers[q.id] === q.correctIndex;
            const hasAnswered = selectedAnswers[q.id] !== undefined;

            return (
              <div key={q.id} className="space-y-3">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-base">
                  Soru {qIndex + 1}: {q.question}
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {q.options.map((option, oIndex) => {
                    const isSelected = selectedAnswers[q.id] === oIndex;
                    let optionStyle = "border-slate-200 hover:border-blue-400 dark:border-slate-800 dark:hover:border-slate-700";
                    
                    if (isSelected) {
                      optionStyle = "border-blue-500 bg-blue-50/50 text-blue-900 dark:border-blue-500 dark:bg-blue-950/20 dark:text-blue-300";
                    }

                    if (showResults) {
                      if (oIndex === q.correctIndex) {
                        // Highlight correct answer in green
                        optionStyle = "border-green-500 bg-green-50 text-green-900 dark:border-green-500 dark:bg-green-950/30 dark:text-green-300 font-medium";
                      } else if (isSelected && !isCorrect) {
                        // Highlight selected incorrect answer in red
                        optionStyle = "border-red-500 bg-red-50 text-red-900 dark:border-red-500 dark:bg-red-950/30 dark:text-red-300";
                      } else {
                        // Unselected other options are faded
                        optionStyle = "border-slate-100 text-slate-400 dark:border-slate-800 dark:text-slate-600";
                      }
                    }

                    return (
                      <button
                        key={oIndex}
                        disabled={showResults}
                        onClick={() => handleOptionSelect(q.id, oIndex)}
                        className={`w-full text-left p-3.5 rounded-lg border text-sm transition-all flex items-center justify-between ${optionStyle}`}
                      >
                        <span>{option}</span>
                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                          isSelected 
                            ? 'border-blue-600 bg-blue-600 text-white' 
                            : 'border-slate-300 dark:border-slate-700'
                        }`}>
                          {isSelected && "✓"}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation block after result check */}
                <AnimatePresence>
                  {showResults && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className={`p-3 rounded-lg text-xs leading-relaxed border ${
                        isCorrect 
                          ? 'bg-green-50/60 text-green-800 border-green-100 dark:bg-green-950/15 dark:text-green-300 dark:border-green-900/40' 
                          : 'bg-red-50/60 text-red-800 border-red-100 dark:bg-red-950/15 dark:text-red-300 dark:border-red-900/40'
                      }`}
                    >
                      <p className="font-bold flex items-center gap-1 mb-1">
                        <span>{isCorrect ? '✅ Doğru!' : '❌ Yanlış'}</span>
                        <span className="text-[10px] font-normal opacity-75">(Doğru Cevap: {q.options[q.correctIndex]})</span>
                      </p>
                      <p>{q.explanation}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Action Bar */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          {!showResults ? (
            <>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {!allAnswered 
                  ? `Lütfen testi tamamlamak için tüm soruları cevaplayın (${Object.keys(selectedAnswers).length}/${activeCase.questions.length})` 
                  : 'Tüm sorular cevaplandı. Sonuçları kontrol edebilirsiniz!'
                }
              </p>
              <button
                disabled={!allAnswered}
                onClick={handleCheckAnswers}
                className={`w-full sm:w-auto px-6 py-2.5 rounded-lg text-sm font-bold text-white transition-all shadow-md ${
                  allAnswered 
                    ? 'bg-blue-600 hover:bg-blue-700 active:translate-y-0.5 cursor-pointer' 
                    : 'bg-slate-300 dark:bg-slate-800 text-slate-500 cursor-not-allowed'
                }`}
              >
                Cevapları Kontrol Et
              </button>
            </>
          ) : (
            <>
              <div className="flex items-center gap-3">
                <div className="text-2xl">
                  {getScore() === activeCase.questions.length ? '🏆' : '👍'}
                </div>
                <div>
                  <p className="font-extrabold text-slate-800 dark:text-slate-100 text-base">
                    Skorunuz: {getScore()} / {activeCase.questions.length} Doğru
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {getScore() === activeCase.questions.length 
                      ? 'Harika! NST yorumlama becerileriniz mükemmel düzeyde.' 
                      : 'Güzel deneme! Açıklamaları okuyarak bilgilerinizi tazeleyebilirsiniz.'
                    }
                  </p>
                </div>
              </div>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg text-sm font-bold bg-slate-800 dark:bg-slate-700 hover:bg-slate-700 text-white dark:hover:bg-slate-600 transition-all cursor-pointer shadow-md"
              >
                Vakayı Yeniden Çöz
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
