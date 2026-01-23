
'use client';
import PageHeader from '@/components/PageHeader';
import { useState } from 'react';
import Link from 'next/link';
import ieeeData from '@/data/ieee-guidelines.json';

const guidelines = ieeeData.guidelines;

function PortalCard({ tag, title, desc, action, href, isSelected, onSelect }) {
    const shadowClass = isSelected 
        ? "shadow-[16px_16px_0_#BC4749] sm:shadow-[20px_20px_0_#BC4749] -translate-x-2 -translate-y-2" 
        : "shadow-[8px_8px_0_black] sm:shadow-[12px_12px_0_black]";

    return (
        <div 
            className={`bg-white border-[3px] border-black p-5 sm:p-8 lg:p-12 flex flex-col cursor-pointer transition-all duration-200 sm:hover:-translate-x-2 sm:hover:-translate-y-2 sm:hover:shadow-[20px_20px_0_#BC4749] ${shadowClass}`}
            onClick={onSelect}
        >
            <span className="font-mono text-xs sm:text-sm font-bold text-[var(--terracotta)]   mb-2 sm:mb-4 block">
                {tag}
            </span>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold   text-[var(--indigo)] leading-tight mb-3 sm:mb-6">
                {title}
            </h3>
            <p className="text-sm sm:text-base opacity-80 mb-5 sm:mb-8 leading-relaxed text-justify hyphens-auto   break-words">
                {desc}
            </p>
            <a 
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="mt-auto font-mono font-bold   text-xs sm:text-sm bg-black text-white px-4 sm:px-5 py-3 w-fit transition-all duration-200 hover:bg-[var(--gold)] hover:text-black"
            >
                {action}
            </a>
        </div>
    );
}

export default function IEEEGuidelinesPage() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleSelect = (index) => {
        setSelectedIndex(selectedIndex === index ? null : index);
    };

    return (
        <main className="min-h-screen bg-[var(--bone)]">
            {/* Page Header */}
            <PageHeader title="IEEE Guidelines" />

            {/* Content */}
            <section className="px-4 sm:px-6 md:px-[8%] py-12 sm:py-16 md:py-20 lg:py-24 max-w-7xl mx-auto">
                
                {/* Portal Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                    {guidelines.map((item, index) => (
                        <PortalCard 
                            key={index} 
                            isSelected={selectedIndex === index}
                            onSelect={() => handleSelect(index)}
                            {...item} 
                        />
                    ))}
                </div>

                {/* Official Notice */}
                <section 
                    className="mt-16 sm:mt-20 lg:mt-28 p-6 sm:p-8 md:p-12 lg:p-16 border-[3px] border-black shadow-[8px_8px_0_#0B132B] sm:shadow-[12px_12px_0_#0B132B] lg:shadow-[15px_15px_0_#0B132B]"
                    style={{
                        background: `repeating-linear-gradient(-45deg, #fdfaf3, #fdfaf3 10px, #f9f7f2 10px, #f9f7f2 20px)`,
                        outline: '3px solid black',
                        outlineOffset: '-12px'
                    }}
                >
                    <div className="bg-[var(--indigo)] text-white font-mono px-3 sm:px-4 py-2 font-bold text-xs sm:text-sm w-fit mb-4 sm:mb-6">
                        SYMPOSIUM NOTICE
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold   text-[var(--indigo)] mb-4 sm:mb-6">
                        Global Standards
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg max-w-3xl mb-4 sm:mb-6 leading-relaxed text-justify hyphens-auto   break-words">
                        All participants of InGARSS 2026 are required to adhere to the IEEE codes of conduct. These policies ensure a professional, safe, and ethically sound environment for the global geoscience and remote sensing community.
                    </p>
                    <p className="font-mono font-bold text-[var(--terracotta)] text-sm sm:text-base text-justify hyphens-auto   break-words">
                        [!] Failure to comply with IEEE policies may result in exclusion from the symposium proceedings.
                    </p>
                </section>

            </section>
        </main>
    );
}
