
import React, { useState } from 'react';
import { CopyIcon } from './icons/CopyIcon';
import { CheckIcon } from './icons/CheckIcon';
import { RefreshIcon } from './icons/RefreshIcon';

interface TranscriptionDisplayProps {
  text: string;
  onReset: () => void;
}

export const TranscriptionDisplay: React.FC<TranscriptionDisplayProps> = ({ text, onReset }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Transcrição Concluída</h2>
        <div className="w-full p-4 bg-slate-100 dark:bg-slate-900/50 rounded-lg max-h-96 overflow-y-auto border border-slate-200 dark:border-slate-700">
          <p className="text-slate-700 dark:text-slate-300 whitespace-pre-wrap">{text}</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleCopy}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 dark:focus:ring-offset-slate-800 transition-colors"
        >
          {copied ? <CheckIcon className="w-5 h-5" /> : <CopyIcon className="w-5 h-5" />}
          {copied ? 'Copiado!' : 'Copiar Texto'}
        </button>
        <button
          onClick={onReset}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 dark:focus:ring-offset-slate-800 transition-colors"
        >
          <RefreshIcon className="w-5 h-5" />
          Transcrever Outro Áudio
        </button>
      </div>
    </div>
  );
};
   