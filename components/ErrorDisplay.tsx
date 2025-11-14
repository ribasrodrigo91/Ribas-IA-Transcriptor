
import React from 'react';
import { WarningIcon } from './icons/WarningIcon';

interface ErrorDisplayProps {
  message: string;
  onRetry: () => void;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message, onRetry }) => {
  return (
    <div className="text-center p-4 bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-700 rounded-lg">
      <div className="flex flex-col items-center justify-center gap-4">
        <WarningIcon className="w-10 h-10 text-red-500" />
        <div>
          <h3 className="font-bold text-red-800 dark:text-red-200">Ocorreu um Erro</h3>
          <p className="text-sm text-red-700 dark:text-red-300 mt-1">{message}</p>
        </div>
        <button
          onClick={onRetry}
          className="mt-2 bg-red-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:focus:ring-offset-slate-800 transition-colors"
        >
          Tentar Novamente
        </button>
      </div>
    </div>
  );
};
   