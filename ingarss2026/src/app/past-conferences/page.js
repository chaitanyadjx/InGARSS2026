'use client';

import { useState, useEffect } from 'react';
import PageHeader from '@/components/PageHeader';
import pastConferencesData from '@/data/past-conferences.json';

function WebsiteLink({ year, url, label }) {
    return (
        <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-white border-[3px] border-black p-4 shadow-[4px_4px_0_black] hover:shadow-[8px_8px_0_var(--terracotta)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300"
        >
            <div>
                <span className="font-mono text-xs text-terracotta font-bold">{year}</span>
                <p className="font-bold text-indigo">{label}</p>
            </div>
            <span className="text-xl">→</span>
        </a>
    );
}

function ConferenceCard({ year, edition, location, chairs, image, highlight }) {
    return (
        <div className={`bg-white border-[3px] border-black overflow-hidden ${highlight ? 'shadow-[10px_10px_0_var(--terracotta)]' : 'shadow-[6px_6px_0_black]'} hover:shadow-[12px_12px_0_var(--indigo)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300`}>
            {highlight && (
                <div className="bg-terracotta text-white text-center py-2 font-mono font-bold text-xs uppercase">
                    Current Edition
                </div>
            )}
            <div className="aspect-video bg-gray-100 overflow-hidden">
                <img 
                    src={image} 
                    alt={`InGARSS ${year}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo to-terracotta text-white text-4xl font-extrabold">${year}</div>`;
                    }}
                />
            </div>
            <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                    <span className="bg-gold text-black font-mono font-bold text-xs px-3 py-1 border-2 border-black">
                        {year}
                    </span>
                    <span className="font-mono text-xs text-gray-500">{edition}</span>
                </div>
                <h3 className="text-xl font-extrabold text-indigo mb-2">
                    InGARSS {year}
                </h3>
                <p className="font-mono text-sm text-terracotta font-bold mb-4">
                    {location}
                </p>
                <div className="border-t-2 border-gray-200 pt-4">
                    <p className="font-mono text-xs text-gray-500 mb-2">CHAIRS</p>
                    <div className="flex flex-wrap gap-2">
                        {chairs.map((chair, index) => (
                            <span key={index} className="text-sm bg-gray-100 px-2 py-1 rounded">
                                {chair}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function GalleryImage({ src, alt }) {
    return (
        <div className="aspect-video bg-gray-100 border-[3px] border-black overflow-hidden shadow-[8px_8px_0_black]">
            <img 
                src={src} 
                alt={alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400 text-sm font-mono">Photo</div>`;
                }}
            />
        </div>
    );
}

function GallerySlider({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loadedImages, setLoadedImages] = useState({});
    const [failedImages, setFailedImages] = useState({});

    // Preload all images on mount
    useEffect(() => {
        images.forEach((image, index) => {
            const img = new Image();
            img.onload = () => {
                setLoadedImages(prev => ({ ...prev, [index]: true }));
            };
            img.onerror = () => {
                setFailedImages(prev => ({ ...prev, [index]: true }));
            };
            img.src = image.src;
        });
    }, [images]);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="max-w-4xl mx-auto">
            {/* Main Image Container - All images rendered, only current one visible */}
            <div className="relative">
                <div className="aspect-video bg-gray-100 border-[3px] border-black overflow-hidden shadow-[8px_8px_0_black] relative">
                    {images.map((image, index) => (
                        <div 
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-300 ${
                                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                        >
                            {failedImages[index] ? (
                                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400 text-sm font-mono">
                                    Photo
                                </div>
                            ) : (
                                <img 
                                    src={image.src} 
                                    alt={image.alt}
                                    className="w-full h-full object-cover"
                                    onError={() => setFailedImages(prev => ({ ...prev, [index]: true }))}
                                />
                            )}
                        </div>
                    ))}
                </div>
                
                {/* Navigation Arrows */}
                <button 
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white border-[3px] border-black w-12 h-12 flex items-center justify-center shadow-[4px_4px_0_black] hover:bg-gold transition-colors duration-150 font-bold text-xl z-20"
                    aria-label="Previous image"
                >
                    ←
                </button>
                <button 
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white border-[3px] border-black w-12 h-12 flex items-center justify-center shadow-[4px_4px_0_black] hover:bg-gold transition-colors duration-150 font-bold text-xl z-20"
                    aria-label="Next image"
                >
                    →
                </button>
            </div>

            {/* Caption */}
            <div className="bg-indigo text-white p-4 border-[3px] border-t-0 border-black">
                <p className="font-mono text-sm text-center">{images[currentIndex].alt}</p>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-6">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 border-2 border-black transition-all duration-200 ${
                            index === currentIndex 
                                ? 'bg-terracotta scale-125' 
                                : 'bg-white hover:bg-gold'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>

            {/* Image Counter */}
            <p className="text-center mt-4 font-mono text-sm text-gray-600">
                {currentIndex + 1} / {images.length}
            </p>
        </div>
    );
}

export default function PastConferencesPage() {
    const { title, subtitle, intro, websites, conferences, gallery } = pastConferencesData;

    // Sort conferences by year descending (most recent first)
    const sortedConferences = [...conferences].sort((a, b) => parseInt(b.year) - parseInt(a.year));

    return (
        <main className="min-h-screen bg-[var(--bone)]">
            {/* Page Header */}
            <PageHeader title={title} subtitle={subtitle} />

            {/* Intro Section */}
            <section className="px-4 sm:px-6 md:px-[8%] py-12 sm:py-16 bg-white border-b-[3px] border-black">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                        {intro}
                    </p>
                </div>
            </section>



            {/* Conference Timeline */}
            <section className="px-4 sm:px-6 md:px-[8%] py-16 md:py-20 bg-[var(--bone)] border-b-[3px] border-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="inline-block bg-terracotta text-white font-mono font-bold text-sm px-6 py-3 border-[3px] border-black shadow-[6px_6px_0_black] mb-6">
                            CONFERENCE HISTORY
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo mb-4">
                            Our Journey Through the Years
                        </h2>
                        <p className="text-gray-700 max-w-2xl mx-auto">
                            From virtual beginnings to in-person gatherings across India, InGARSS continues to grow and evolve.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sortedConferences.map((conf, index) => (
                            <ConferenceCard key={index} {...conf} />
                        ))}
                    </div>
                </div>
            </section>

                        {/* Quick Links to Past Websites */}
            <section className="px-4 sm:px-6 md:px-[8%] py-12 sm:py-16 bg-indigo border-b-[3px] border-black">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="inline-block bg-gold text-black font-mono font-bold text-sm px-6 py-3 border-[3px] border-black shadow-[6px_6px_0_black] mb-4">
                            QUICK LINKS
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                            Visit Past Conference Websites
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {websites.map((site, index) => (
                            <WebsiteLink key={index} {...site} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Photo Gallery */}
            <section className="px-4 sm:px-6 md:px-[8%] py-16 md:py-20 bg-white border-b-[3px] border-black">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="inline-block bg-indigo text-white font-mono font-bold text-sm px-6 py-3 border-[3px] border-black shadow-[6px_6px_0_var(--gold)] mb-6">
                            GALLERY
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo mb-2">
                            {gallery.title}
                        </h2>
                        <p className="text-gray-600">{gallery.subtitle}</p>
                    </div>
                    <GallerySlider images={gallery.images} />
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 sm:px-6 md:px-[8%] py-16 md:py-20 bg-terracotta text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-4xl font-extrabold mb-6">
                        Be Part of InGARSS 2026
                    </h2>
                    <p className="text-lg mb-8 opacity-90">
                        Join us in Hyderabad for the 6th edition of InGARSS. Submit your research, participate in discussions, and connect with the global geoscience community.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a 
                            href="/submit"
                            className="inline-block bg-white text-black font-mono font-bold px-8 py-4 border-[3px] border-black shadow-[6px_6px_0_black] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-150"
                        >
                            Submit Paper
                        </a>
                        <a 
                            href="/registration"
                            className="inline-block bg-gold text-black font-mono font-bold px-8 py-4 border-[3px] border-black shadow-[6px_6px_0_black] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-150"
                        >
                            Register Now
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
