'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import datesData from '@/data/dates.json';

const dates = datesData.dates;

function DateCard({ label, value, previousValue, desc, variant, isSelected, onSelect }) {
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
                {previousValue && (
                    <span className="line-through text-lg sm:text-xl opacity-70 block mb-1">
                        {previousValue}
                    </span>
                )}
                <span className={previousValue ? "text-[var(--gold)]" : ""}>{value}</span>
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

        </>
    );
}
