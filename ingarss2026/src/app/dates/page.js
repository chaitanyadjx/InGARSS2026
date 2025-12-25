'use client';

import { useState } from 'react';

const dates = [
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
    {
        label: "CRITICAL DEADLINE",
        value: "30 May 2026",
        desc: "Manuscript Submission Deadline",
        variant: "major"
    },
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
    {
        label: "EVENT DATES",
        value: "01 — 04 DEC 2026",
        desc: "InGARSS 2026 Symposium Dates",
        variant: "major"
    }
];

function DateCard({ label, value, desc, variant, isSelected, onSelect }) {
    const isMajor = variant === "major";
    const baseClasses = `cursor-pointer border-[3px] border-black p-6 sm:p-8 lg:p-10 flex flex-col justify-between transition-all duration-200 sm:hover:-translate-x-1 sm:hover:-translate-y-1 sm:hover:shadow-[20px_20px_0_#BC4749] ${isMajor ? 'col-span-1 sm:col-span-2' : 'col-span-1'}`;
    
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
            <span className={`font-mono font-bold text-xs sm:text-sm uppercase mb-2 sm:mb-3 block ${labelClasses}`}>
                {label}
            </span>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-none mb-3 sm:mb-4 uppercase">
                {value}
            </p>
            <p className={`text-sm sm:text-base font-semibold opacity-80 uppercase border-t pt-3 sm:pt-4 ${descBorderClasses}`}>
                {desc}
            </p>
        </div>
    );
}

export default function DatesPage() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleSelect = (index) => {
        // Toggle: if already selected, deselect; otherwise select
        setSelectedIndex(selectedIndex === index ? null : index);
    };

    return (
        <>
            {/* Page Header */}
            <header className="bg-indigo text-white px-5 md:px-[8%] py-12 md:py-20 mt-20 border-b-[3px] border-black">
                <span className="font-mono text-gold font-bold text-sm md:text-base">// SYMPOSIUM SCHEDULE</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-[0.9] tracking-tighter mt-3">
                    Important<br />Dates
                </h1>
            </header>

            {/* Dates Section */}
            <section className="px-5 md:px-[8%] py-12 md:py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-4xl mx-auto">
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
        </>
    );
}
