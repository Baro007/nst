
import React from 'react';
import { Header } from './components/Header';
import { SectionCard } from './components/SectionCard';
import { TraceVisualizer } from './components/TraceVisualizer';
import { VariabilityVisualizer } from './components/VariabilityVisualizer';
import { VariabilityMeasurementVisualizer } from './components/VariabilityMeasurementVisualizer';
import { ProjectInfo } from './components/ProjectInfo';
import { DedicationCard } from './components/DedicationCard';
import { StickyNav } from './components/StickyNav';
import { InteractiveQuiz } from './components/InteractiveQuiz';
import { 
  introduction, 
  uterineActivity, 
  baselineRate, 
  variability, 
  accelerations, 
  decelerations,
  classification,
  acogCategories,
  summary,
  variabilityClasses
} from './constants';
import type { DecelerationType, VariabilityType } from './types';

const navSections = [
  { id: 'giris', title: 'Giriş' },
  { id: 'temel-bilesenler', title: '5 Temel Bileşen' },
  { id: 'uterin-aktivite', title: '1. Uterin Aktivite' },
  { id: 'bazal-hiz', title: '2. Bazal Kalp Hızı' },
  { id: 'variyabilite', title: '3. Variyabilite' },
  { id: 'akselerasyonlar', title: '4. Akselerasyonlar' },
  { id: 'deselerasyonlar', title: '5. Deselerasyonlar' },
  { id: 'reaktif-nonreaktif', title: 'Reaktif vs. Non-Reaktif' },
  { id: 'acog-kategorileri', title: 'ACOG Kategorileri' },
  { id: 'quiz', title: 'İnteraktif Eğitim Testi' },
  { id: 'ozet', title: 'Özet Bilgi' },
  { id: 'ithaf', title: 'Teşekkür & İthaf' },
  { id: 'proje-hakkinda', title: 'Proje Hakkında' }
];

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-800 dark:text-slate-200 transition-colors duration-300 pb-20 lg:pb-0">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <StickyNav sections={navSections} />
          
          <div className="flex-1 space-y-12 max-w-4xl w-full">
            <SectionCard id="giris" title={introduction.title} icon={introduction.icon}>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">{introduction.content}</p>
            </SectionCard>

            <div id="temel-bilesenler" className="scroll-mt-24 space-y-6">
                <h2 className="text-3xl font-extrabold text-center mb-4 text-slate-700 dark:text-slate-300">5 Temel Bileşen</h2>
                <div className="space-y-8">
                  <SectionCard id="uterin-aktivite" title={uterineActivity.title} icon={uterineActivity.icon} isSubSection>
                      <p className="text-slate-600 dark:text-slate-300">{uterineActivity.content}</p>
                  </SectionCard>

                  <SectionCard id="bazal-hiz" title={baselineRate.title} icon={baselineRate.icon} isSubSection>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">{baselineRate.content}</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {baselineRate.types.map((rate) => (
                          <div key={rate.name} className={`p-4 rounded-xl border-l-4 bg-white dark:bg-slate-900/60 shadow-sm border ${rate.borderColor} border-transparent dark:border-slate-800/40`}>
                            <h4 className="font-bold text-slate-800 dark:text-slate-100">{rate.name} ({rate.range})</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{rate.description}</p>
                          </div>
                      ))}
                      </div>
                  </SectionCard>

                  <SectionCard id="variyabilite" title={variability.title} icon={variability.icon} isSubSection>
                      <div className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{variability.content}</div>
                      
                      <div className="mt-8 bg-white dark:bg-slate-900/40 p-6 rounded-xl shadow-inner border border-slate-100 dark:border-slate-800/60">
                          <h4 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-2">{variability.measurement.title}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{variability.measurement.description}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                              <div>
                                  <VariabilityMeasurementVisualizer />
                              </div>
                              <div className="space-y-4">
                                  {variability.measurement.steps.map((step, index) => (
                                      <div key={index} className="flex items-start gap-3">
                                          <div className="flex-shrink-0 bg-blue-600 text-white rounded-full h-7 w-7 flex items-center justify-center font-bold text-sm shadow-sm">
                                              {index + 1}
                                          </div>
                                          <div>
                                              <h5 className="font-bold text-slate-800 dark:text-slate-200 text-sm">{step.step}</h5>
                                              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{step.detail}</p>
                                          </div>
                                      </div>
                                  ))}
                              </div>
                          </div>
                      </div>

                      <div className="mt-12">
                        <h4 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-4 text-center">Variyabilite Sınıfları</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {variabilityClasses.map((v_class) => (
                            <div key={v_class.name} className={`p-4 rounded-xl shadow-sm transition-all duration-300 flex flex-col justify-between border border-transparent dark:border-slate-800/40 ${v_class.bgColor} dark:bg-slate-900/35`}>
                                <div>
                                    <span className={`text-2xl ${v_class.iconColor}`}>{v_class.icon}</span>
                                    <h4 className="font-black mt-2 text-slate-800 dark:text-slate-200">{v_class.name}</h4>
                                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400">{v_class.range}</p>
                                    <p className="text-xs mt-2 text-slate-600 dark:text-slate-300">{v_class.description}</p>
                                </div>
                                <VariabilityVisualizer type={v_class.id as VariabilityType} />
                            </div>
                            ))}
                        </div>
                      </div>
                  </SectionCard>

                  <SectionCard id="akselerasyonlar" title={accelerations.title} icon={accelerations.icon} isSubSection>
                      <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{accelerations.content}</p>
                      <div className="bg-sky-100/50 dark:bg-sky-950/20 border-l-4 border-sky-500 text-sky-800 dark:text-sky-300 p-4 rounded-r-lg">
                          <h4 className="font-bold text-base">Reaktivite: 15x15 Kuralı</h4>
                          <p className="text-sm mt-1">{accelerations.rule}</p>
                      </div>
                  </SectionCard>
                  
                  <SectionCard id="deselerasyonlar" title={decelerations.title} icon={decelerations.icon} isSubSection>
                      <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{decelerations.content}</p>
                      <div className="space-y-8">
                      {decelerations.types.map(decel => (
                          <div key={decel.name} className="flex flex-col md:flex-row gap-6 items-center">
                            <div className="w-full md:w-1/2">
                                <h4 className={`text-lg font-bold border-l-4 pl-2 mb-2 ${decel.borderColor} dark:text-slate-100`}>{decel.name}</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-300 mb-1"><span className="font-semibold text-slate-800 dark:text-slate-200">Görünüm:</span> {decel.appearance}</p>
                                <p className="text-sm text-slate-600 dark:text-slate-300"><span className="font-semibold text-slate-800 dark:text-slate-200">Anlamı:</span> {decel.meaning}</p>
                            </div>
                            <div className="w-full md:w-1/2">
                                <TraceVisualizer type={decel.id as DecelerationType} />
                            </div>
                          </div>
                      ))}
                      </div>
                  </SectionCard>
                </div>
            </div>

            <SectionCard id="reaktif-nonreaktif" title={classification.title} icon={classification.icon}>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{classification.content}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {classification.types.map(c_type => (
                    <div key={c_type.name} className="border border-slate-200 dark:border-slate-800 p-4 rounded-xl flex flex-col justify-between bg-white dark:bg-slate-900/40">
                      <div>
                          <h4 className="font-bold text-lg mb-2 text-slate-800 dark:text-slate-100">{c_type.name}</h4>
                          <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">{c_type.description}</p>
                          {c_type.criteria && (
                              <div className="space-y-2 my-3">
                              {c_type.criteria.map((crit, i) => (
                                  <div key={i} className="bg-slate-50 dark:bg-slate-950/40 border-l-4 border-slate-300 dark:border-slate-700 p-3 rounded-r-lg">
                                    <p className="font-bold text-xs text-slate-700 dark:text-slate-300">{crit.week}</p>
                                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{crit.rule}</p>
                                  </div>
                              ))}
                              </div>
                          )}
                          {c_type.summary && <p className="text-slate-600 dark:text-slate-300 text-xs font-semibold">{c_type.summary}</p>}
                      </div>
                      {c_type.action && <div className={`mt-4 p-3 rounded-lg text-xs leading-relaxed ${c_type.actionBgColor} dark:bg-amber-950/30 ${c_type.actionTextColor} dark:text-amber-300 border border-transparent dark:border-amber-900/30`}><strong>Aksiyon:</strong> {c_type.action}</div>}
                    </div>
                ))}
                </div>
            </SectionCard>
            
            <SectionCard id="acog-kategorileri" title={acogCategories.title} icon={acogCategories.icon}>
                <div className="space-y-6">
                {acogCategories.categories.map(cat => (
                    <div key={cat.name} className={`border-l-4 p-4 rounded-r-lg border ${cat.borderColor} ${cat.bgColor} dark:bg-slate-900/30 dark:border-slate-800`}>
                        <h4 className={`text-xl font-bold ${cat.textColor} dark:text-slate-100`}>{cat.name} <span className="font-normal text-slate-600 dark:text-slate-400">- {cat.subtitle}</span></h4>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                            {cat.points.map((point, i) => <li key={i}>{point}</li>)}
                        </ul>
                        <div className={`mt-3 font-semibold text-sm rounded-md p-2 inline-block ${cat.managementBgColor} dark:bg-slate-800/80 ${cat.managementTextColor} dark:text-slate-200 border border-transparent dark:border-slate-700`}>Yaklaşım: {cat.management}</div>
                    </div>
                ))}
                </div>
            </SectionCard>

            <div id="quiz" className="scroll-mt-24 space-y-4">
                <div className="text-center">
                  <h2 className="text-3xl font-extrabold text-slate-800 dark:text-slate-100 flex items-center justify-center gap-2">
                    <span>🧠</span> Bilgini Test Et: NST Eğitim Testi
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5 max-w-md mx-auto">
                    Klinik vakaları ve trasesini inceleyerek doğru kararı verin, detaylı tıbbi açıklamaları öğrenin.
                  </p>
                </div>
                <InteractiveQuiz />
            </div>

            <SectionCard id="ozet" title={summary.title} icon={summary.icon}>
                <div className="space-y-4">
                <div>
                    <h4 className="font-bold text-lg text-green-700 dark:text-green-400 flex items-center">İyi İşaretler ✅</h4>
                    <p className="text-slate-600 dark:text-slate-300 mt-0.5">{summary.goodSigns}</p>
                </div>
                <div>
                    <h4 className="font-bold text-lg text-red-700 dark:text-red-400 flex items-center">Kırmızı Bayraklar 🚩</h4>
                    <p className="text-slate-600 dark:text-slate-300 mt-0.5">{summary.badSigns}</p>
                </div>
                <div className="bg-blue-100/50 dark:bg-blue-950/20 border-l-4 border-blue-500 text-blue-800 dark:text-blue-300 p-4 rounded-r-lg text-sm">
                    <p>{summary.nonReactiveNote}</p>
                </div>
                </div>
            </SectionCard>

            <DedicationCard />
            <div id="proje-hakkinda">
              <ProjectInfo />
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Floating Action Nav Bar */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/80 rounded-2xl shadow-xl py-2 px-3 flex justify-around items-center max-w-md mx-auto">
        <a href="#giris" className="flex flex-col items-center text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400" aria-label="Giriş">
          <span className="text-lg">🎯</span>
          <span className="text-[9px] font-bold">Giriş</span>
        </a>
        <a href="#temel-bilesenler" className="flex flex-col items-center text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400" aria-label="5 Bileşen">
          <span className="text-lg">〰️</span>
          <span className="text-[9px] font-bold">Bileşenler</span>
        </a>
        <a href="#acog-kategorileri" className="flex flex-col items-center text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400" aria-label="Kategoriler">
          <span className="text-lg">🏆</span>
          <span className="text-[9px] font-bold">ACOG</span>
        </a>
        <a href="#quiz" className="flex flex-col items-center text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400" aria-label="Eğitim Testi">
          <span className="text-lg">🧠</span>
          <span className="text-[9px] font-bold">Test</span>
        </a>
      </div>

      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800/80 transition-colors">
         <div className="container mx-auto px-4 py-6 text-center text-slate-500 dark:text-slate-400">
            <p className="text-sm">
                Dr. Sadık Barış Adıgüzel tarafından sevgiyle geliştirilmiştir ❤️
            </p>
            <a 
                href="https://github.com/Baro007/nst"
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-sm mt-2 text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub'da projeyi görüntüle"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
                <span>Projeyi GitHub'da Görüntüle</span>
            </a>
            <p className="text-xs mt-4 max-w-md mx-auto leading-relaxed">
                <strong>ÖNEMLİ NOT:</strong> Bu uygulama, yalnızca sağlık profesyonelleri için bir öğrenim aracı olarak tasarlanmıştır. Gerçek klinik karar verme süreçlerinde kullanılmamalıdır.
            </p>
         </div>
      </footer>
    </div>
  );
};

export default App;
