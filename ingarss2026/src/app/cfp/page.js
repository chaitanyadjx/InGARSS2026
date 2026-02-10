'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import cfpData from '@/data/cfp.json';

const tracks = cfpData.tracks;

function TrackCard({ title, description, image, index, isSelected, onSelect }) {
    // Selection logic: apply terracotta shadow and translation on mobile.
    // Reset selection styles on 'md' (768px+) screens so only the hover states apply.
    const selectionClass = isSelected 
        ? "shadow-[12px_12px_0_var(--terracotta)] -translate-x-1 -translate-y-1 md:shadow-[8px_8px_0_black] md:translate-x-0 md:translate-y-0"
        : "shadow-[8px_8px_0_black]";

    const isEven = index % 2 === 0;
    return (
        <div 
            onClick={onSelect}
            className={`bg-white border-[3px] border-black transition-all duration-200 overflow-hidden cursor-pointer
                flex flex-col md:flex-row
                md:hover:shadow-[12px_12px_0_var(--terracotta)] md:hover:-translate-x-1 md:hover:-translate-y-1 
                ${selectionClass}`}
        >
            {/* Mobile: image above, text below. Desktop: alternate image/text */}
            <div 
                className={`w-full h-48 sm:h-56 lg:h-64 bg-cover bg-center border-b-[3px] border-black md:border-b-0 ${
                    isEven 
                        ? 'md:w-40 md:sm:w-56 md:lg:w-64 md:h-48 md:sm:h-56 md:lg:h-64 md:border-r-[3px]' 
                        : 'md:w-40 md:sm:w-56 md:lg:w-64 md:h-48 md:sm:h-56 md:lg:h-64 md:border-l-[3px]'
                } flex-shrink-0`}
                style={{ backgroundImage: `url('${image}')` }}
            />
            <div className={`flex flex-col justify-center p-5 sm:p-6 lg:p-8 flex-grow ${!isEven ? 'md:order-first' : ''}`}>
                <span className="font-mono text-xs text-[var(--terracotta)] font-bold">TRACK {String(index + 1).padStart(2, '0')}</span>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[var(--indigo)] leading-tight mt-2 mb-4">
                    {title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-gray-700 text-justify hyphens-auto break-words">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default function CallForPapersPage() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleSelect = (index) => {
        setSelectedIndex(selectedIndex === index ? null : index);
    };

    return (
        <main className="min-h-screen bg-[var(--bone)]">
            {/* Page Header */}
            <PageHeader title="Call for Papers" />

            {/* Event Info Section */}
            <section className="px-4 sm:px-6 md:px-[8%] py-12 sm:py-16 md:py-20 bg-white border-b-[3px] border-black">
                <div className="max-w-5xl">
                    <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 sm:mb-8">
                        <div className="bg-[var(--indigo)] text-white px-4 py-2 font-mono font-bold text-xs sm:text-sm">
                            InGARSS 2026
                        </div>
                        <div className="bg-[var(--terracotta)] text-white px-4 py-2 font-mono font-bold text-xs sm:text-sm">
                            DECEMBER 1–4, 2026
                        </div>
                        <div className="bg-[var(--gold)] text-black px-4 py-2 font-mono font-bold text-xs sm:text-sm">
                            Hyderabad, INDIA
                        </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--indigo)] mb-4 sm:mb-6 leading-tight">
                        Theme: Digital Earth – Modeling, Mapping, and Monitoring.
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 max-w-4xl text-justify hyphens-auto break-words">
                        On behalf of the IEEE Geoscience and Remote Sensing Society (GRSS) and the InGARSS 2026 Organizing Committee, we are pleased to invite you to submit your research papers and abstracts to the 2026 IEEE India Geoscience and Remote Sensing Symposium (InGARSS 2026), to be held from 01–04 December 2026 in Hyderabad, India.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 max-w-4xl text-justify hyphens-auto break-words">
                        As one of the flagship regional conferences of IEEE GRSS, InGARSS 2026 aims to be a premier forum that brings together researchers, practitioners, and industry professionals from India and across the globe to exchange ideas, share recent advances, and discuss emerging trends in geoscience and remote sensing.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 max-w-4xl text-justify hyphens-auto break-words">
                        All accepted and presented papers at InGARSS 2026 will be considered to submit to IEEE Xplore for publication in IEEE Xplore.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 max-w-4xl text-justify hyphens-auto break-words">
                        Extended versions of accepted, presented, and published papers will be eligible for submission to a Special Issue of the IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing (JSTARS).
                    </p>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 max-w-4xl text-justify hyphens-auto break-words">
                        Travel support will be provided to student authors from India and abroad to present their papers/posters at InGARSS 2026 and to attend the entire symposium. The support amount will be determined based on fund availability. The application link will be made available soon.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl text-justify hyphens-auto break-words">
                        <strong>We warmly encourage you to contribute and be a part of InGARSS 2026, and to help make this symposium a vibrant and impactful scientific event.</strong>
                    </p>
                </div>
            </section>

            {/* Tracks Grid */}
            <section className="px-4 sm:px-6 md:px-[8%] py-12 sm:py-16 md:py-20 bg-[var(--bone)]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-8 lg:gap-10 max-w-[1400px] mx-auto">
                    {tracks.map((track, index) => (
                        <TrackCard 
                            key={index} 
                            {...track}
                            index={index}
                            isSelected={selectedIndex === index}
                            onSelect={() => handleSelect(index)}
                        />
                    ))}
                </div>
            </section>

            {/* Submit CTA Section */}
            <section className="px-4 sm:px-6 md:px-[8%] py-12 sm:py-16 md:py-20 bg-[var(--indigo)] border-t-[3px] border-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 sm:mb-6">
                        Ready to Submit?
                    </h2>
                    <Link 
                        href="/submit" 
                        className="inline-block bg-[var(--gold)] text-black font-mono font-bold text-sm sm:text-base px-8 py-4 border-[3px] border-black shadow-[6px_6px_0_black] hover:shadow-[8px_8px_0_black] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150"
                    >
                        SUBMIT PAPER →
                    </Link>
                </div>
            </section>
        </main>
    );
}
