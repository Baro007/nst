
import React from 'react';
import { SectionCard } from './SectionCard';

const features = [
  "Deselerasyon ve variyabilite türleri için interaktif, animasyonlu görselleştirmeler.",
  "5 temel bileşene (Uterin aktivite, Bazal hız, Variyabilite, Akselerasyonlar, Deselerasyonlar) odaklı adım adım rehber.",
  "Net ACOG kategori sınıflandırması ve yönetim önerileri.",
  "Hızlı referans için pratik özet bilgiler ve 'Kırmızı Bayraklar'.",
  "Tüm cihazlarda (mobil, tablet, masaüstü) sorunsuz çalışan modern ve duyarlı tasarım."
];

const technologies = ["React", "TypeScript", "Tailwind CSS", "Framer Motion"];

export const ProjectInfo: React.FC = () => {
  return (
    <SectionCard title="Proje Hakkında" icon="ℹ️">
      <div className="space-y-6 text-base">
        <div>
          <h4 className="text-xl font-semibold text-slate-700 mb-2">Amaç</h4>
          <p className="text-slate-600">
            Bu rehberin amacı, sağlık profesyonellerinin fetal hipoksi veya asidoz durumlarını hızlıca tanımalarına yardımcı olmak, böylece anne ve bebek sağlığı için en doğru kararları almalarını sağlamaktır. Proje, teorik bilgiyi anlaşılır görseller ve animasyonlarla birleştirerek öğrenme sürecini kalıcı ve etkili hale getirmeyi amaçlar.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-slate-700 mb-2">Öne Çıkan Özellikler</h4>
          <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-slate-700 mb-2">Kullanılan Teknolojiler</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-slate-100 text-slate-700 text-sm font-medium px-3 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionCard>
  );
};