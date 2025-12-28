'use client';

import { useState } from 'react';
import Link from 'next/link';

const dates = [
    // Row 1: 3 items
    {
        label: "Phase 01 — Open",
        value: "01 January 2026",
        desc: "Community Contributed Session Proposals Open",
        variant: "tint-gold"
    },
    {
        label: "Phase 01 — Open",
        value: "01 January 2026",
        desc: "Call for Papers Open",
        variant: "tint-gold"
    },
    {
        label: "Phase 02 — Close",
        value: "01 February 2026",
        desc: "Community Contributed Session Proposals Close",
        variant: "tint-indigo"
    },
    // Row 2: 1 major item
    {
        label: "CRITICAL DEADLINE",
        value: "30 May 2026",
        desc: "Paper Submission Deadline",
        variant: "major"
    },
    // Row 3: 3 items
    {
        label: "Notification",
        value: "15 July 2026",
        desc: "Acceptance Notification",
        variant: "default"
    },
    {
        label: "Registration",
        value: "15 July 2026",
        desc: "Registration Deadline",
        variant: "default"
    },
    {
        label: "Final Version",
        value: "30 July 2026",
        desc: "Camera-Ready Submission Deadline",
        variant: "tint-indigo"
    },
    // Row 4: 1 major item
    {
        label: "EVENT DATES",
        value: "01 — 04 DEC 2026",
        desc: "InGARSS 2026 Symposium Dates",
        variant: "major"
    }
];

function DateCard({ label, value, desc, variant, isSelected, onSelect }) {
    const isMajor = variant === "major";
    const baseClasses = `cursor-pointer border-[3px] border-black p-6 sm:p-8 lg:p-10 flex flex-col justify-between transition-all duration-200 sm:hover:-translate-x-1 sm:hover:-translate-y-1 sm:hover:shadow-[20px_20px_0_#BC4749] ${isMajor ? 'col-span-1 md:col-span-3' : 'col-span-1'}`;
    
    const variantClasses = {
        "default": "bg-white",
        "tint-gold": "bg-gold/5",
        "tint-indigo": "bg-indigo/5",
        "major": "bg-black text-white"
    };

    const labelClasses = variant === "major" ? "text-gold" : "text-terracotta";
    const descBorderClasses = variant === "major" ? "border-white/20" : "border-black/10";

    // Shadow changes based on selection state
    const shadowClass = isSelected 
        ? "shadow-[12px_12px_0_#BC4749] -translate-x-1 -translate-y-1" 
        : "shadow-[8px_8px_0_black]";

    return (
        <div 
            className={`${baseClasses} ${variantClasses[variant]} ${shadowClass}`}
            onClick={onSelect}
        >
            <span className={`font-mono font-bold text-xs sm:text-sm mb-2 sm:mb-3 block ${labelClasses}`}>
                {label}
            </span>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-none mb-3 sm:mb-4">
                {value}
            </p>
            <p className={`text-sm sm:text-base font-semibold opacity-80 border-t pt-3 sm:pt-4 ${descBorderClasses}`}>
                {desc}
            </p>
        </div>
    );
}

export default function DatesPage() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleSelect = (index) => {
        setSelectedIndex(selectedIndex === index ? null : index);
    };

    return (
        <>
            {/* Page Header */}
            <header className="bg-indigo text-white px-5 md:px-[8%] py-16 md:py-20 mt-16 border-b-[3px] border-black">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-tight tracking-tighter">
                    Important<br />Dates
                </h1>
            </header>

            {/* Dates Section */}
            <section className="px-5 md:px-[8%] py-12 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
                    {dates.map((date, index) => (
                        <DateCard 
                            key={index} 
                            isSelected={selectedIndex === index}
                            onSelect={() => handleSelect(index)}
                            {...date} 
                        />
                    ))}
                </div>
            </section>
                        {/* Submit CTA */}
            <section className="px-4 sm:px-6 md:px-[8%] py-12 sm:py-16 md:py-20 bg-[var(--indigo)] border-t-[3px] border-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 sm:mb-6">
                        Ready to Submit?
                    </h2>
                    <p className="text-white/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
                        Paper submissions will open in January 2026. Stay tuned for more details.
                    </p>
                    <a 
                        href="/submit"
                        className="inline-block bg-[var(--gold)] text-black font-mono font-bold text-sm sm:text-base px-8 py-4 border-[3px] border-black shadow-[6px_6px_0_black] hover:shadow-[8px_8px_0_black] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150"
                    >
                        SUBMIT PAPER →
                    </a>
                </div>
            </section>
        </>
    );
}
