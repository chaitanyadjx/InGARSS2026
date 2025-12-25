'use client';

import { useState, useEffect } from 'react';

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            bg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
            variant: "white",
            kicker: "// 01 – 04 December 2026",
            kickerClass: "text-terracotta",
            title: "India Geoscience & Remote Sensing Symposium",
            desc: "The Global Nexus of Earth Observation Technology and AI Innovation."
        },
        {
            bg: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
            variant: "gold",
            kicker: "// AI & Ethics Focus",
            kickerClass: "bg-black text-white px-3 py-1 inline-block",
            title: <>Fostering <span className="text-terracotta">Sustainable</span> Innovation Practices</>,
            desc: "Bridging the critical gap between theoretical machine learning models and real-world geospatial applications.",
            descBold: true
        },
        {
            bg: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=2070&auto=format&fit=crop",
            variant: "black",
            kicker: "// Destination: Hyderabad",
            kickerClass: "text-gold",
            title: "Shaping the FUTURE of Earth Observation",
            desc: "Join academia, industry leaders, and policymakers in India's hub of aerospace and information technology."
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 9000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const getVariantClasses = (variant) => {
        switch (variant) {
            case 'white':
                return 'bg-white/95 shadow-[15px_15px_0_#BC4749] md:shadow-[20px_20px_0_#BC4749]';
            case 'gold':
                return 'bg-gold shadow-[15px_15px_0_#0B132B] md:shadow-[20px_20px_0_#0B132B]';
            case 'black':
                return 'bg-black text-white shadow-[15px_15px_0_#BC4749] md:shadow-[20px_20px_0_#BC4749]';
            default:
                return '';
        }
    };

    return (
        <header className="relative h-[70vh] md:h-[85vh] mt-20 bg-white border-b-[3px] border-black overflow-hidden">
            {slides.map((slide, index) => (
                <div 
                    key={index}
                    className={`absolute inset-0 flex items-center px-5 md:px-[8%] transition-opacity duration-1000 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <div 
                        className="absolute inset-0 bg-cover bg-center" 
                        style={{ backgroundImage: `url('${slide.bg}')`, zIndex: 0 }}
                    ></div>
                    <div className={`relative z-10 border-[3px] border-black p-6 md:p-10 float-animation max-w-2xl ${getVariantClasses(slide.variant)}`}>
                        <p className={`font-mono font-bold mb-3 text-sm md:text-base ${slide.kickerClass}`}>{slide.kicker}</p>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase mb-4">{slide.title}</h1>
                        <p className={`text-base md:text-lg ${slide.descBold ? 'font-semibold' : ''}`}>{slide.desc}</p>
                    </div>
                </div>
            ))}

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
                .float-animation {
                    animation: float 4s ease-in-out infinite;
                }
            `}</style>
        </header>
    );
}
