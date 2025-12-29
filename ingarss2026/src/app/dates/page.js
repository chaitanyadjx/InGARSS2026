'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader'
const dates = [
    // Row 1: 3 items
    {
        label: "Community Contributed Session Proposals — Open",
        value: "01 January 2026",
        desc: "CCS/Workshop/Tutorial Proposals Open",
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
        desc: "CCS (Community Contributed Session) Proposals Close",
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
        label: "Registration",
        value: "15 July 2026",
        desc: "Acceptance Notification ",
        variant: "default"
    },
    {
        label: "Notification",
        value: "30 July 2026",
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

    const descBorderClasses = variant === "major" ? " text-3xl sm:text-3xl border-white/20" : "text-base sm:text-base border-black/10";

    // FIX: Specific override for the long CCS string on mobile
    // We remove text-justify and hyphens-auto to prevent the gaps
    const isLongCCS = desc.includes("Community Contributed Session");
    const descSizeOverride = isLongCCS ? "text-[1 rem] sm:text-sm leading-snug" : "";

    const shadowClass = isSelected 
        ? "shadow-[12px_12px_0_#BC4749] -translate-x-1 -translate-y-1" 
        : "shadow-[8px_8px_0_black]";

    return (
        <div 
            className={`${baseClasses} ${variantClasses[variant]} ${shadowClass}`}
            onClick={onSelect}
        >
            <p className="text-2xl sm:text-3xl lg:text-2xl font-extrabold leading-none mb-3 sm:mb-4 text-left">
                {value}
            </p>
            {/* FIX: Replaced text-justify with text-left 
               Removed hyphens-auto and break-words for the description 
            */}
            <p className={`font-semibold opacity-80 border-t pt-3 sm:pt-4 text-left ${descBorderClasses} ${descSizeOverride}`}>
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
                <PageHeader title="Important Dates" />

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
