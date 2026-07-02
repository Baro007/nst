import React, { useEffect, useState } from 'react';

export const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
             (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 sticky top-0 z-20 backdrop-blur-md bg-white/95 dark:bg-slate-900/95 transition-all">
      <div className="container mx-auto px-4 py-4 max-w-6xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 3.5a1.5 1.5 0 011.06.44l4.5 4.5a1.5 1.5 0 01-2.12 2.12L12 9.12V16.5a1.5 1.5 0 01-3 0V9.12L7.56 10.56a1.5 1.5 0 01-2.12-2.12l4.5-4.5A1.5 1.5 0 0110 3.5z"/>
              <path d="M3.5 16.5a1.5 1.5 0 013 0V17a1 1 0 001 1h5a1 1 0 001-1v-.5a1.5 1.5 0 013 0V17a4 4 0 01-4 4H7a4 4 0 01-4-4v-.5z"/>
            </svg>
            <h1 className="text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tight">
              NST Yorumlama Rehberi
            </h1>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700/80 border border-slate-200/55 dark:border-slate-700 text-slate-600 dark:text-slate-300 transition-all shadow-sm hover:scale-105 active:scale-95"
            aria-label="Karanlık/Aydınlık Tema Değiştir"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};