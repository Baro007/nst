
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SectionCardProps {
  title: string;
  icon: string;
  children: React.ReactNode;
  isSubSection?: boolean;
}

export const SectionCard: React.FC<SectionCardProps> = ({ title, icon, children, isSubSection = false }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const titleClass = isSubSection 
    ? "text-2xl font-semibold text-slate-700" 
    : "text-3xl md:text-4xl font-bold text-blue-700";

  return (
    <div ref={ref} className={`fade-in-section ${isVisible ? 'is-visible' : ''} bg-white p-6 rounded-xl shadow-lg`}>
      <h3 className={`${titleClass} mb-4 flex items-center`}>
        <span className="text-3xl mr-3">{icon}</span>
        {title}
      </h3>
      <div className="prose prose-slate max-w-none prose-p:text-slate-600 prose-li:text-slate-600">
        {children}
      </div>
    </div>
  );
};
