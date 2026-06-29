'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DeadlineExtensionPopup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show popup after a small delay on every visit
        const timer = setTimeout(() => setIsVisible(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 max-w-sm w-[calc(100%-2rem)] bg-white border-[3px] border-black shadow-[8px_8px_0_black] p-5 transition-transform duration-300">
            <button 
                onClick={handleDismiss}
                className="absolute top-2 right-2 p-1 hover:bg-black/5 rounded-full transition-colors"
                aria-label="Close"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            <div className="flex gap-4 items-start pr-4">
                <div className="flex-shrink-0 bg-[var(--terracotta)] w-10 h-10 flex items-center justify-center border-2 border-black rounded-full shadow-[2px_2px_0_black]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="square">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                </div>
                <div>
                    <h3 className="font-extrabold text-lg leading-tight mb-1 text-black">CCS Paper Submission Open!</h3>
                    <p className="text-sm opacity-80 mb-3 text-black">
                        Submit your papers to the Community Contributed Session before <strong>15th August 2026</strong>.
                    </p>
                    <div className="flex gap-3">
                        <Link 
                            href="/ccs" 
                            onClick={handleDismiss}
                            className="bg-[var(--indigo)] text-white text-xs font-bold px-3 py-1.5 border-2 border-black hover:-translate-y-0.5 hover:shadow-[2px_2px_0_black] transition-all"
                        >
                            View Details
                        </Link>
                        <Link 
                            href="/submit" 
                            onClick={handleDismiss}
                            className="bg-white text-black text-xs font-bold px-3 py-1.5 border-2 border-black hover:-translate-y-0.5 hover:shadow-[2px_2px_0_black] transition-all"
                        >
                            Submit Paper
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
