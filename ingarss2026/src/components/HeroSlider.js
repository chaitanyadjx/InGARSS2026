'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const HERO_BG = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop';

const SLIDES = [
  {
    id: 'conference',
  },
  {
    id: 'hackathon',
    tag: 'IEEE GRSS YP HACKATHON 2026',
    tagBg: 'bg-[var(--gold)] text-black',
    title: 'YP Hackathon Challenge',
    subtitle: 'INNOVATE. COLLABORATE. IMPACT.',
    description: 'Theme: Digital Earth - Modeling, Mapping, and Monitoring.',
    highlight: '🏆 Cash Prizes: ₹ 25,000 (Winner) | ₹ 17,500 (Runners-Up)',
    posterImage: '/assets/hackathon-poster.jpg',
    rightLabel: 'OFFICIAL POSTER • CLICK TO VIEW',
    rightLinkHref: '/hackathon',
    buttons: [
      {
        label: 'EXPLORE HACKATHON →',
        href: '/hackathon',
        className: 'bg-[var(--terracotta)] text-white',
      },
      {
        label: 'REGISTER NOW →',
        href: 'https://in.eregnow.com/ticketing/register/login/yphackathon',
        className: 'bg-[var(--gold)] text-black',
        external: true,
      },
    ],
  },
  {
    id: 'workshop',
    tag: 'TUTORIAL WORKSHOPS • 01 DEC 2026',
    tagBg: 'bg-[var(--gold)] text-black',
    title: 'Workshops & Tutorials',
    subtitle: 'Specialized Hands-On Sessions by Domain Experts',
    description: 'Covering NISAR Soil Moisture, WebODM Drone Processing, GeoAI-SAR & Spatial Analysis.',
    highlight: 'Fee: ₹ 2,500 (Indian) / $50 (International)',
    rightLabel: 'WORKSHOPS INFO • CLICK TO VIEW',
    rightLinkHref: '/workshop',
    workshopInfo: {
      sessions: ['NISAR Soil Moisture Products', 'WebODM Drone Processing', 'Glacial Lakes & Remote Sensing', 'Spatial Analysis using R', 'GeoAI-SAR for Disaster Apps'],
      date: '01 December 2026',
      venue: 'The Park, Hyderabad',
    },
    buttons: [
      {
        label: 'EXPLORE WORKSHOPS →',
        href: '/workshop',
        className: 'bg-[var(--terracotta)] text-white',
      },
      {
        label: 'REGISTER FOR WORKSHOP →',
        href: 'https://in.eregnow.com/ticketing/register/ingarss2026?_rid=31732&_single=1',
        className: 'bg-[var(--gold)] text-black',
        external: true,
      },
    ],
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = SLIDES[currentSlide];

  return (
    <header
      className="relative min-h-[580px] md:h-[70vh] md:min-h-[560px] lg:min-h-[600px] bg-white border-b-[3px] border-black overflow-x-hidden pt-0 flex flex-col justify-center"
      aria-label="Symposium Highlights Carousel"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_BG}')` }}
      />
      {currentSlide !== 0 && (
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-700" />
      )}





      {/* ── Slide Indicators — Vertical on Left Side ── */}
      <div className="absolute right-2 sm:right-4 lg:right-6 xl:right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3 sm:gap-4">
        {SLIDES.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrentSlide(idx)}
            className={`w-8 h-8 sm:w-10 sm:h-10 border-2 border-black flex justify-center items-center font-mono text-[11px] sm:text-xs font-black cursor-pointer transition-all duration-300 ${
              idx === currentSlide
                ? 'bg-[var(--terracotta)] text-white shadow-[3px_3px_0_rgba(0,0,0,1)] scale-110'
                : 'bg-white text-black shadow-[2px_2px_0_rgba(0,0,0,1)] hover:bg-gray-100 hover:scale-105'
            }`}
            aria-label={`Slide ${idx + 1}`}
            title={`Slide ${idx + 1}: ${s.title}`}
          >
            0{idx + 1}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="relative z-10 flex-1 flex items-center pl-5 pr-14 sm:pr-16 md:pl-[8%] md:pr-[8%] py-8">
        <div className="w-full max-w-6xl mx-auto">

          {/* ── CONFERENCE SLIDE ── */}
          {currentSlide === 0 && (
            <div className="transition-all duration-700 ease-out opacity-100">
              <div className="border-[3px] border-black p-5 sm:p-8 md:p-10 max-w-2xl bg-white/95 shadow-[10px_10px_0_#BC4749] sm:shadow-[15px_15px_0_#BC4749] md:shadow-[20px_20px_0_#BC4749] animate-float">
                <p className="font-mono font-bold mb-2 sm:mb-3 text-xs sm:text-sm md:text-base text-terracotta">
                  01 – 04 December 2026, Hyderabad, India
                </p>
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2 sm:mb-4">
                  IEEE India Geoscience &amp; Remote Sensing Symposium
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-gray-800">
                  Theme: Digital Earth - Modeling, Mapping, and Monitoring.
                </p>
              </div>
              <div className="hidden lg:block absolute top-4 right-4 z-20">
                <img
                  src="/assets/logo.jpeg"
                  alt="InGARSS 2026 Logo"
                  className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 rounded-lg border-4 border-white shadow-lg bg-white object-cover"
                />
              </div>
            </div>
          )}

          {/* ── HACKATHON & WORKSHOP SLIDES ── */}
          {currentSlide !== 0 && slide && (
            <div className="transition-all duration-700 ease-out opacity-100 animate-float">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">

                {/* Left Content Card */}
                <div className="lg:col-span-7 xl:col-span-8 bg-white/95 border-[3px] border-black p-4 sm:p-6 md:p-8 shadow-[8px_8px_0_#BC4749] sm:shadow-[12px_12px_0_#BC4749]">
                  {/* Tag */}
                  <div className="inline-block font-mono font-bold text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 border-2 border-black mb-2 sm:mb-3 shadow-[2px_2px_0_black]">
                    <span className={slide.tagBg + ' px-1.5 py-0.5 inline-block'}>{slide.tag}</span>
                  </div>

                  {/* Title */}
                  <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-black mb-1 sm:mb-2">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  {slide.subtitle && (
                    <p className="font-mono font-extrabold text-xs sm:text-sm md:text-base text-[var(--terracotta)] mb-1.5 sm:mb-2">
                      {slide.subtitle}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium mb-2.5 sm:mb-3 leading-relaxed">
                    {slide.description}
                  </p>

                  {/* Highlight */}
                  {slide.highlight && (
                    <div className="inline-block bg-[var(--bone)] border-2 border-black px-2.5 sm:px-3 py-1 mb-3 text-[11px] sm:text-xs md:text-sm font-mono font-bold text-black shadow-[2px_2px_0_black]">
                      {slide.highlight}
                    </div>
                  )}

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 pt-1">
                    {slide.buttons && slide.buttons.map((btn, bIdx) =>
                      btn.external ? (
                        <a
                          key={bIdx}
                          href={btn.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full sm:w-auto font-mono font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 sm:py-3 border-[3px] border-black shadow-[3px_3px_0_black] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_black] transition-all text-center ${btn.className}`}
                        >
                          {btn.label}
                        </a>
                      ) : (
                        <Link
                          key={bIdx}
                          href={btn.href}
                          className={`w-full sm:w-auto font-mono font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 sm:py-3 border-[3px] border-black shadow-[3px_3px_0_black] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_black] transition-all text-center ${btn.className}`}
                        >
                          {btn.label}
                        </Link>
                      )
                    )}
                  </div>
                </div>

                {/* Right Visual Card — Poster (Hackathon) or Info Panel (Workshop) */}
                <div className="hidden sm:flex lg:col-span-5 xl:col-span-4 justify-center items-stretch">
                  {slide.posterImage ? (
                    /* Hackathon Poster */
                    <Link
                      href={slide.rightLinkHref}
                      className="group relative flex flex-col w-full max-w-[220px] md:max-w-[260px] lg:max-w-full bg-white border-[3px] border-black shadow-[6px_6px_0_black] hover:shadow-[10px_10px_0_var(--terracotta)] hover:-translate-y-1 transition-all overflow-hidden"
                    >
                      <div className="bg-[var(--indigo)] text-white font-mono font-bold text-[9px] sm:text-[10px] md:text-xs py-1 px-2 text-center border-b-2 border-black shrink-0">
                        {slide.rightLabel}
                      </div>
                      <div className="flex-1 flex items-center justify-center bg-slate-50 p-1">
                        <img
                          src={slide.posterImage}
                          alt="YP Hackathon Poster"
                          className="w-full h-auto max-h-[180px] sm:max-h-[220px] md:max-h-[300px] lg:max-h-[340px] object-contain"
                        />
                      </div>
                    </Link>
                  ) : slide.workshopInfo ? (
                    /* Workshop Info Panel */
                    <Link
                      href={slide.rightLinkHref}
                      className="group relative flex flex-col w-full max-w-[220px] md:max-w-[260px] lg:max-w-full bg-white border-[3px] border-black shadow-[6px_6px_0_black] hover:shadow-[10px_10px_0_var(--terracotta)] hover:-translate-y-1 transition-all overflow-hidden"
                    >
                      <div className="bg-[var(--indigo)] text-white font-mono font-bold text-[9px] sm:text-[10px] md:text-xs py-1 px-2 text-center border-b-2 border-black shrink-0">
                        {slide.rightLabel}
                      </div>
                      <div className="flex-1 bg-[var(--bone)] p-3 sm:p-4 flex flex-col justify-between">
                        <div>
                          <div className="font-mono font-black text-[10px] sm:text-xs text-[var(--indigo)] uppercase tracking-wider mb-2 sm:mb-3">
                            5 Expert Sessions
                          </div>
                          <ul className="space-y-1.5 sm:space-y-2">
                            {slide.workshopInfo.sessions.map((s, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <span className="shrink-0 mt-0.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[var(--terracotta)] text-white text-[8px] sm:text-[9px] font-black flex items-center justify-center border border-black">
                                  {i + 1}
                                </span>
                                <span className="text-[10px] sm:text-[11px] md:text-xs font-semibold text-gray-800 leading-tight">
                                  {s}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-3 pt-2 border-t-2 border-black/20 space-y-0.5">
                          <p className="text-[9px] sm:text-[10px] font-mono font-bold text-[var(--terracotta)]">
                            📅 {slide.workshopInfo.date}
                          </p>
                          <p className="text-[9px] sm:text-[10px] font-mono font-semibold text-gray-600">
                            📍 {slide.workshopInfo.venue}
                          </p>
                          <p className="text-[9px] sm:text-[10px] font-mono font-extrabold text-[var(--indigo)] group-hover:underline mt-1">
                            View All Workshops →
                          </p>
                        </div>
                      </div>
                    </Link>
                  ) : null}
                </div>

              </div>
            </div>
          )}

        </div>
      </div>

    </header>
  );
}
