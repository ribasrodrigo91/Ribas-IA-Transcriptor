
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { FileUploader } from './components/FileUploader';
import { TranscriptionDisplay } from './components/TranscriptionDisplay';
import { Loader } from './components/Loader';
import { transcribeAudio } from './services/geminiService';
import type { AppState } from './types';
import { ErrorDisplay } from './components/ErrorDisplay';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('idle');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [transcription, setTranscription] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setAppState('fileSelected');
  };
  
  const handleTranscription = useCallback(async () => {
    if (!selectedFile) return;

    setAppState('loading');
    setError(null);

    try {
      const result = await transcribeAudio(selectedFile);
      setTranscription(result);
      setAppState('success');
    } catch (err) {
      console.error('Transcription error:', err);
      setError(err instanceof Error ? err.message : 'Ocorreu um erro desconhecido. Por favor, tente novamente.');
      setAppState('error');
    }
  }, [selectedFile]);

  const handleReset = () => {
    setAppState('idle');
    setSelectedFile(null);
    setTranscription('');
    setError(null);
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 flex flex-col font-sans">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl transition-all duration-300">
          <div className="p-6 sm:p-8 md:p-10">
            {appState === 'idle' && (
              <FileUploader onFileSelect={handleFileSelect} />
            )}
            
            {appState === 'fileSelected' && selectedFile && (
              <div className="text-center">
                 <div className="bg-emerald-50 dark:bg-emerald-900/50 border border-emerald-200 dark:border-emerald-700 rounded-lg p-4 mb-6">
                   <p className="font-medium text-emerald-800 dark:text-emerald-200">Arquivo selecionado:</p>
                   <p className="text-sm text-slate-600 dark:text-slate-400 truncate">{selectedFile.name}</p>
                 </div>
                 <button
                   onClick={handleTranscription}
                   className="w-full bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300 dark:focus:ring-emerald-800 transition-transform transform hover:scale-105"
                 >
                   Transcrever Áudio
                 </button>
              </div>
            )}

            {appState === 'loading' && <Loader />}

            {appState === 'success' && (
              <TranscriptionDisplay text={transcription} onReset={handleReset} />
            )}

            {appState === 'error' && (
              <ErrorDisplay message={error || 'Erro desconhecido.'} onRetry={handleReset} />
            )}
          </div>
        </div>
      </main>
      <footer className="text-center p-4 text-xs text-slate-500 dark:text-slate-400">
        <p>&copy; {new Date().getFullYear()} Audio Scribe AI. Criado com Gemini.</p>
      </footer>
    </div>
  );
};

export default App;
   