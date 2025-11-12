import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 3.5a1.5 1.5 0 011.06.44l4.5 4.5a1.5 1.5 0 01-2.12 2.12L12 9.12V16.5a1.5 1.5 0 01-3 0V9.12L7.56 10.56a1.5 1.5 0 01-2.12-2.12l4.5-4.5A1.5 1.5 0 0110 3.5z"/>
                <path d="M3.5 16.5a1.5 1.5 0 013 0V17a1 1 0 001 1h5a1 1 0 001-1v-.5a1.5 1.5 0 013 0V17a4 4 0 01-4 4H7a4 4 0 01-4-4v-.5z"/>
            </svg>
            <h1 className="text-2xl font-bold text-slate-800">
                NST Yorumlama Rehberi
            </h1>
        </div>
      </div>
    </header>
  );
};