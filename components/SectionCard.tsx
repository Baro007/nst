
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SectionCardProps {
  title: string;
  icon: string;
  children: React.ReactNode;
  isSubSection?: boolean;
  id?: string;
}

export const SectionCard: React.FC<SectionCardProps> = ({ id, title, icon, children, isSubSection = false }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const titleClass = isSubSection 
    ? "text-2xl font-semibold text-slate-700 dark:text-slate-300" 
    : "text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400";

  return (
    <div 
      id={id} 
      ref={ref} 
      className={`fade-in-section ${isVisible ? 'is-visible' : ''} bg-white dark:bg-slate-900/90 p-6 rounded-xl shadow-lg dark:shadow-slate-950/40 border border-transparent dark:border-slate-800/80 transition-shadow duration-300 hover:shadow-xl scroll-mt-24`}
    >
      <h3 className={`${titleClass} mb-4 flex items-center`}>
        <span className="text-3xl mr-3">{icon}</span>
        {title}
      </h3>
      <div className="prose prose-slate dark:prose-invert max-w-none prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-li:text-slate-600 dark:prose-li:text-slate-300">
        {children}
      </div>
    </div>
  );
};
