
import React from 'react';
import { Header } from './components/Header';
import { SectionCard } from './components/SectionCard';
import { TraceVisualizer } from './components/TraceVisualizer';
import { VariabilityVisualizer } from './components/VariabilityVisualizer';
import { VariabilityMeasurementVisualizer } from './components/VariabilityMeasurementVisualizer';
import { ProjectInfo } from './components/ProjectInfo';
import { DedicationCard } from './components/DedicationCard';
import { StickyNav } from './components/StickyNav';
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
  { id: 'temel-bilesenler', title: '5 Temel Bileşen' },
  { id: 'reaktif-nonreaktif', title: 'Reaktif vs. Non-Reaktif' },
  { id: 'acog-kategorileri', title: 'ACOG Kategorileri' },
  { id: 'ozet', title: 'Özet Bilgi' },
];

const App: React.FC = () => {

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-row">
            <StickyNav sections={navSections} />
            <div className="w-full lg:pl-64">
                <div className="max-w-4xl mx-auto space-y-12">
                <SectionCard title={introduction.title} icon={introduction.icon}>
                    <p className="text-lg text-slate-600">{introduction.content}</p>
                </SectionCard>

                <div id="temel-bilesenler" className="scroll-mt-24">
                    <h2 className="text-3xl font-bold text-center mb-8 text-slate-700">5 Temel Bileşen</h2>
                    <div className="space-y-8">
                    <SectionCard title={uterineActivity.title} icon={uterineActivity.icon} isSubSection>
                        <p className="text-slate-600">{uterineActivity.content}</p>
                    </SectionCard>

                    <SectionCard title={baselineRate.title} icon={baselineRate.icon} isSubSection>
                        <p className="text-slate-600 mb-4">{baselineRate.content}</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {baselineRate.types.map((rate) => (
                            <div key={rate.name} className={`p-4 rounded-lg border-l-4 ${rate.borderColor}`}>
                            <h4 className="font-semibold text-slate-800">{rate.name} ({rate.range})</h4>
                            <p className="text-sm text-slate-600">{rate.description}</p>
                            </div>
                        ))}
                        </div>
                    </SectionCard>

                    <SectionCard title={variability.title} icon={variability.icon} isSubSection>
                        <div className="text-slate-600 mb-6">{variability.content}</div>
                        
                        <div className="mt-8 bg-white p-6 rounded-lg shadow-inner border border-slate-100">
                            <h4 className="text-xl font-semibold text-slate-700 mb-4">{variability.measurement.title}</h4>
                            <p className="text-slate-600 mb-4">{variability.measurement.description}</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <VariabilityMeasurementVisualizer />
                                </div>
                                <div className="space-y-4">
                                    {variability.measurement.steps.map((step, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="flex-shrink-0 bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold text-lg">
                                                {index + 1}
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-slate-800">{step.step}</h5>
                                                <p className="text-sm text-slate-600">{step.detail}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                        <h4 className="text-xl font-semibold text-slate-700 mb-4 text-center">Variyabilite Sınıfları</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {variabilityClasses.map((v_class) => (
                            <div key={v_class.name} className={`p-4 rounded-lg shadow-sm transition-all duration-300 flex flex-col justify-between ${v_class.bgColor}`}>
                                <div>
                                    <span className={`text-2xl ${v_class.iconColor}`}>{v_class.icon}</span>
                                    <h4 className="font-bold mt-2 text-slate-800">{v_class.name}</h4>
                                    <p className="text-sm font-medium text-slate-600">{v_class.range}</p>
                                    <p className="text-xs mt-2 text-slate-500">{v_class.description}</p>
                                </div>
                                <VariabilityVisualizer type={v_class.id as VariabilityType} />
                            </div>
                            ))}
                        </div>
                        </div>
                    </SectionCard>

                    <SectionCard title={accelerations.title} icon={accelerations.icon} isSubSection>
                        <p className="text-slate-600 mb-4">{accelerations.content}</p>
                        <div className="bg-sky-100/50 border-l-4 border-sky-500 text-sky-800 p-4 rounded-r-lg">
                            <h4 className="font-bold">Reaktivite: 15x15 Kuralı</h4>
                            <p className="text-sm">{accelerations.rule}</p>
                        </div>
                    </SectionCard>
                    
                    <SectionCard title={decelerations.title} icon={decelerations.icon} isSubSection>
                        <p className="text-slate-600 mb-6">{decelerations.content}</p>
                        <div className="space-y-8">
                        {decelerations.types.map(decel => (
                            <div key={decel.name} className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-full md:w-1/2">
                                <h4 className={`text-lg font-bold border-l-4 pl-2 mb-2 ${decel.borderColor}`}>{decel.name}</h4>
                                <p className="text-sm text-slate-600 mb-2"><span className="font-semibold">Görünüm:</span> {decel.appearance}</p>
                                <p className="text-sm text-slate-600"><span className="font-semibold">Anlamı:</span> {decel.meaning}</p>
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
                    <p className="text-slate-600 mb-4">{classification.content}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {classification.types.map(c_type => (
                        <div key={c_type.name} className="border p-4 rounded-lg flex flex-col justify-between">
                        <div>
                            <h4 className="font-bold text-lg mb-2 text-slate-800">{c_type.name}</h4>
                            <p className="text-slate-600 text-sm mb-3">{c_type.description}</p>
                            {c_type.criteria && (
                                <div className="space-y-2 my-3">
                                {c_type.criteria.map((crit, i) => (
                                    <div key={i} className="bg-slate-50 border-l-4 border-slate-300 p-3 rounded-r-lg">
                                    <p className="font-semibold text-sm text-slate-700">{crit.week}</p>
                                    <p className="text-sm text-slate-600">{crit.rule}</p>
                                    </div>
                                ))}
                                </div>
                            )}
                            {c_type.summary && <p className="text-slate-600 text-sm font-medium">{c_type.summary}</p>}
                        </div>
                        {c_type.action && <div className={`mt-4 p-3 rounded-md text-sm ${c_type.actionBgColor} ${c_type.actionTextColor}`}><strong>Aksiyon:</strong> {c_type.action}</div>}
                        </div>
                    ))}
                    </div>
                </SectionCard>
                
                <SectionCard id="acog-kategorileri" title={acogCategories.title} icon={acogCategories.icon}>
                    <div className="space-y-6">
                    {acogCategories.categories.map(cat => (
                        <div key={cat.name} className={`border-l-4 p-4 rounded-r-lg ${cat.borderColor} ${cat.bgColor}`}>
                            <h4 className={`text-xl font-bold ${cat.textColor}`}>{cat.name} <span className="font-normal text-slate-600">- {cat.subtitle}</span></h4>
                            <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-slate-700">
                                {cat.points.map((point, i) => <li key={i}>{point}</li>)}
                            </ul>
                            <p className={`mt-3 font-semibold text-sm rounded-md p-2 inline-block ${cat.managementBgColor} ${cat.managementTextColor}`}>Yaklaşım: {cat.management}</p>
                        </div>
                    ))}
                    </div>
                </SectionCard>

                <SectionCard id="ozet" title={summary.title} icon={summary.icon}>
                    <div className="space-y-4">
                    <div>
                        <h4 className="font-semibold text-lg text-green-700 flex items-center">İyi İşaretler ✅</h4>
                        <p className="text-slate-600">{summary.goodSigns}</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg text-red-700 flex items-center">Kırmızı Bayraklar 🚩</h4>
                        <p className="text-slate-600">{summary.badSigns}</p>
                    </div>
                    <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 rounded-r-lg">
                        <p>{summary.nonReactiveNote}</p>
                    </div>
                    </div>
                </SectionCard>

                <DedicationCard />
                <ProjectInfo />
                
                </div>
            </div>
        </div>
      </main>
       <footer className="bg-white border-t border-slate-200">
         <div className="container mx-auto px-4 py-6 text-center text-slate-500">
            <p className="text-sm">
                Dr. Sadık Barış Adıgüzel tarafından sevgiyle geliştirilmiştir ❤️
            </p>
            <a 
                href="https://github.com/Baro007/nst"
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-sm mt-2 text-slate-600 hover:text-blue-600 transition-colors"
                aria-label="GitHub'da projeyi görüntüle"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
                <span>Projeyi GitHub'da Görüntüle</span>
            </a>
            <p className="text-xs mt-4 max-w-md mx-auto">
                <strong>ÖNEMLİ NOT:</strong> Bu uygulama, yalnızca sağlık profesyonelleri için bir öğrenim aracı olarak tasarlanmıştır. Gerçek klinik karar verme süreçlerinde kullanılmamalıdır.
            </p>
         </div>
      </footer>
    </div>
  );
};

export default App;
