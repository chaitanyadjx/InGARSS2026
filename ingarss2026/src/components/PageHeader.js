import React from 'react';

export default function PageHeader({ title }) {
    return (
        <header className="bg-[var(--indigo)] text-white px-4 sm:px-6 md:px-[8%] pt-28 pb-16 sm:pt-24 sm:pb-20 md:py-24 lg:py-28 border-b-[3px] border-black mt-20 relative">
            {/* Logo on the right, in corner with small padding, only on large screens */}
            <div className="hidden lg:block absolute top-4 right-4 md:top-8 md:right-8 z-20">
                <img 
                    src="/assets/logo.jpeg" 
                    alt="InGARSS 2026 Logo" 
                    className="h-16 w-16 md:h-24 md:w-24 lg:h-28 lg:w-28 rounded-lg border-4 border-white shadow-lg bg-white object-cover"
                />
            </div>
            <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.85] tracking-tight mt-2 sm:mt-6">
                    {title}
                </h1>
            </div>
        </header>
    );
}
