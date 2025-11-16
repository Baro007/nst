
import React from 'react';
import { useActiveSection } from '../hooks/useActiveSection';

interface StickyNavProps {
  sections: { id: string; title: string }[];
}

export const StickyNav: React.FC<StickyNavProps> = ({ sections }) => {
  const activeSection = useActiveSection(sections.map(s => s.id));

  return (
    <aside className="hidden lg:block w-64 flex-shrink-0">
      <nav className="sticky top-24 space-y-2">
        <h4 className="text-sm font-bold uppercase text-slate-500 tracking-wider px-4">İçindekiler</h4>
        <ul className="space-y-1">
          {sections.map(section => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`
                  block px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                  ${
                    activeSection === section.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
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
