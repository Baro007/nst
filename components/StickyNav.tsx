
import React from 'react';
import { useActiveSection } from '../hooks/useActiveSection';

interface StickyNavProps {
  sections: { id: string; title: string }[];
}

export const StickyNav: React.FC<StickyNavProps> = ({ sections }) => {
  const activeSection = useActiveSection(sections.map(s => s.id));

  return (
    <aside className="hidden lg:block w-64 flex-shrink-0">
      <nav className="sticky top-24 space-y-2 border-r border-slate-100 dark:border-slate-800/80 pr-4">
        <h4 className="text-xs font-bold uppercase text-slate-400 dark:text-slate-500 tracking-wider px-4 mb-3">İçindekiler</h4>
        <ul className="space-y-1">
          {sections.map(section => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`
                  block px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200
                  ${
                    activeSection === section.id
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200'
                  }
                `}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
