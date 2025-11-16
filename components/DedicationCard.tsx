
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const DedicationCard: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
    
    return (
        <div ref={ref} className={`fade-in-section ${isVisible ? 'is-visible' : ''} bg-white p-6 rounded-xl shadow-lg`}>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-700 mb-4 flex items-center">
                <span className="text-3xl mr-3">✍️</span>
                Teşekkür & İthaf
            </h3>
            <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
                <p>
                    Bu rehber, aile hekimliği asistanlığım sırasında, sıkça karşılaştığım NST yorumlama pratiğini anlama ve içselleştirme serüvenimin bir ürünüdür. 
                    Bu sürecin en başından itibaren, konunun temel mantığını kavramamı sağlayan, karmaşıklığı sadelikle aydınlatan ve beni sürekli ileriye taşıyan değerli dostum, Kadın Hastalıkları ve Doğum Uzmanı <strong>Dr. Ahmet KURT</strong>'a en derin minnetimi sunmak isterim. 
                    Onun yol göstericiliği, bu projenin temel taşı olmuştur.
                </p>
                <p className="text-sm text-slate-500 italic border-l-4 border-slate-300 pl-4">
                    Bu çalışma, 16 Kasım 2025 itibarıyla tamamlanarak tarihe ve bilime mütevazı bir armağan olarak sunulmuştur.
                </p>
            </div>
        </div>
    );
};
