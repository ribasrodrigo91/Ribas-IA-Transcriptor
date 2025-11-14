
import React from 'react';
import { MicrophoneIcon } from './icons/MicrophoneIcon';

export const Header: React.FC = () => {
  return (
    <header className="text-center p-6 sm:p-8 bg-white dark:bg-slate-800/50">
      <div className="flex justify-center items-center gap-4">
        <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-full">
            <MicrophoneIcon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Audio Scribe AI
            </h1>
            <p className="mt-1 text-md text-slate-600 dark:text-slate-400">
                Transcreva seus áudios com a precisão do Gemini.
            </p>
        </div>
      </div>
    </header>
  );
};
   