'use client';

import { useState, useEffect } from 'react';

export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show loader for 1 second on every page load/refresh
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 bg-[var(--bone)] z-[9999] flex flex-col items-center justify-center transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
    >
      {/* Loader Box */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-black relative bg-white animate-[loaderRotate_2s_infinite_cubic-bezier(0.16,1,0.3,1)]">
        <div className="absolute top-0 left-0 w-full bg-[var(--terracotta)] animate-[loaderFill_2s_infinite_ease-in]"></div>
      </div>

      {/* Loader Text */}
      <div className="mt-6 sm:mt-8 font-mono uppercase font-bold tracking-[0.2em] sm:tracking-[0.25em] text-black text-xs sm:text-sm">
        Initializing Sensors...
      </div>

      {/* Progress Bar */}
      <div className="w-40 sm:w-52 h-1 bg-gray-300 mt-4 border border-black">
        <div className="h-full bg-[var(--gold)] animate-[progressAnim_2.5s_ease-out_forwards]"></div>
      </div>

      <style jsx>{`
        @keyframes loaderRotate {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(180deg); }
          50% { transform: rotate(180deg); }
          75% { transform: rotate(360deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes loaderFill {
          0% { height: 0%; }
          25% { height: 0%; }
          50% { height: 100%; }
          75% { height: 100%; }
          100% { height: 0%; }
        }

        @keyframes progressAnim {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}
