
import React from 'react';
import { Header } from './components/Header';
import { SectionCard } from './components/SectionCard';
import { TraceVisualizer } from './components/TraceVisualizer';
import { VariabilityVisualizer } from './components/VariabilityVisualizer';
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

const App: React.FC = () => {

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <SectionCard title={introduction.title} icon={introduction.icon}>
            <p className="text-lg text-slate-600">{introduction.content}</p>
          </SectionCard>

          <div>
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
                <p className="text-slate-600 mb-6">{variability.content}</p>
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

          <SectionCard title={classification.title} icon={classification.icon}>
            <p className="text-slate-600 mb-4">{classification.content}</p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {classification.types.map(c_type => (
                 <div key={c_type.name} className="border p-4 rounded-lg">
                   <h4 className="font-bold text-lg mb-2 text-slate-800">{c_type.name}</h4>
                   <p className="text-slate-600 text-sm mb-2">{c_type.description}</p>
                   {c_type.action && <div className={`p-3 rounded-md text-sm ${c_type.actionBgColor} ${c_type.actionTextColor}`}><strong>Aksiyon:</strong> {c_type.action}</div>}
                 </div>
               ))}
             </div>
          </SectionCard>
          
          <SectionCard title={acogCategories.title} icon={acogCategories.icon}>
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

          <SectionCard title={summary.title} icon={summary.icon}>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg text-green-700">İyi İşaretler ✅</h4>
                <p className="text-slate-600">{summary.goodSigns}</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-red-700">Kırmızı Bayraklar 🚩</h4>
                <p className="text-slate-600">{summary.badSigns}</p>
              </div>
              <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 rounded-r-lg">
                <p>{summary.nonReactiveNote}</p>
              </div>
            </div>
          </SectionCard>
        </div>
      </main>
       <footer className="text-center py-6 text-sm text-slate-500">
        <p>Sağlık profesyonelleri için bir öğrenim aracıdır. Klinik karar verme amacıyla kullanılamaz.</p>
      </footer>
    </div>
  );
};

export default App;