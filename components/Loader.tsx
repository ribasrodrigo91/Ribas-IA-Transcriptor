
import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 space-y-4">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-emerald-500"></div>
      <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-300">Transcrevendo seu áudio...</h2>
      <p className="text-sm text-slate-500 dark:text-slate-400">Isso pode levar alguns segundos.</p>
    </div>
  );
};
   