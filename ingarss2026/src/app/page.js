'use client';

import { useState } from 'react';
import HeroSlider from '@/components/HeroSlider';
import AnnouncementRibbon from '@/components/AnnouncementRibbon';
import Link from 'next/link';
import homeData from '@/data/home.json';

export default function Home() {
    return (
        <>
            <AnnouncementRibbon />
            <HeroSlider />

            {/* Purpose Section */}
            <section id="about" className="grid md:grid-cols-2 bg-white border-b-[3px] border-black">
                <div className="p-8 md:p-16 lg:p-24 border-b md:border-b-0 md:border-r-[3px] border-black animate-fade-in-left">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight my-6">Advancing Geoscience</h2>
                    <p className="text-base md:text-lg leading-relaxed text-justify hyphens-auto break-words">
                        <strong>IEEE India Geoscience and Remote Sensing Symposium (InGARSS 2026)</strong> is a premier GRSS, India flagship event bringing together experts, researchers, engineers, and industry leaders to explore the intersection of <strong>Geoscience, Space, Satellite, Remote Sensing</strong> and <strong>Artificial Intelligence (AI) </strong> and the rapidly evolving field of similar domains.
                    </p>
                </div>

                <div className="bg-bone p-8 md:p-16 flex items-center justify-center animate-fade-in-right">
                    <div className="bg-white border-[3px] border-black p-6 md:p-10 shadow-[12px_12px_0_#CEA964] sm:shadow-[15px_15px_0_#CEA964] md:shadow-[20px_20px_0_#CEA964] animate-float max-w-lg">
                        <h3 className="font-mono text-indigo font-bold text-lg mb-4">Our Goals</h3>
                        <p className="leading-relaxed text-justify hyphens-auto break-words text-lg text-black/80">To provide unique platform for showcasing cutting-edge research, fostering interdisciplinary collaborations, and discussing future directions in geospatial and remote sensing science. It aims to advance these fields and promote sustainable and ethical AI/ML practices in the geoscience domain by bringing together researchers, practitioners, and policymakers.</p>
                    </div>
                </div>
            </section>

            {/* Venue Section */}
            <section id="venue" className="grid md:grid-cols-[1.2fr_0.8fr] bg-white border-b-[3px] border-black">
                <div 
                    className="relative bg-cover bg-center min-h-[300px] md:min-h-[600px] border-b md:border-b-0 md:border-r-[3px] border-black" 
                    style={{ backgroundImage: `url('${homeData.sections.venue.image}')` }}
                >
                    <span className="absolute bottom-6 md:bottom-10 right-0 bg-black text-white px-5 py-3 font-mono text-xs shadow-[10px_10px_0_#CEA964]">{homeData.sections.venue.imageCaption}</span>
                </div>
                <div className="bg-bone p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <span className="font-mono font-bold text-terracotta text-sm"> {homeData.sections.venue.label}</span>
                    <h2 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight my-4">{homeData.sections.venue.location}</h2>
                    <p className="text-base md:text-lg leading-relaxed mb-6 text-justify hyphens-auto break-words">{homeData.sections.venue.description}</p>
                    <Link href={homeData.sections.venue.detailsLink} target="_blank" rel="noopener noreferrer" className="font-bold text-xs border-b-[3px] border-terracotta w-fit pb-1 hover:text-terracotta transition-colors">Explore Venue Details →</Link>
                </div>
            </section>

            {/* QUICK LINKS SECTION */}
            <section className="bg-[var(--gold)] border-b-[3px] border-black">
              <div className="p-8 md:p-16 lg:p-20 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                  <div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mt-3 mb-4">Share Your Research</h2>
                    <p className="text-black/70 text-base md:text-lg leading-relaxed text-justify hyphens-auto break-words">
                      December 1-4, 2026 • Hyderabad, India<br/>
                      <span className="font-bold text-black">Theme: Digital Earth - Modeling, Mapping, and Monitoring.</span>
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-start">
                    <Link href="/cfp" className="flex-1 font-mono font-bold text-xs sm:text-sm bg-white text-black px-4 sm:px-6 py-4 border-[3px] border-black shadow-[5px_5px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all text-center min-w-[140px]">CALL FOR PAPERS</Link>
                    <Link href="/dates" className="flex-1 font-mono font-bold text-xs sm:text-sm bg-[var(--indigo)] text-white px-4 sm:px-6 py-4 border-[3px] border-black shadow-[5px_5px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all text-center min-w-[140px]">IMPORTANT DATES</Link>
                    <a href="/assets/flyer.pdf" download className="flex-1 font-mono font-bold text-xs sm:text-sm bg-black text-white px-4 sm:px-6 py-4 border-[3px] border-black shadow-[5px_5px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all text-center uppercase min-w-[140px]">Download Flyer</a>
                  </div>
                </div>
              </div>
            </section>

            {/* FEATURED: IEEE GRSS IDEA FAMILY CARES GRANT */}
            <section className="bg-white border-b-[3px] border-black py-12 md:py-16 px-5 md:px-[8%]">
                <div className="max-w-6xl mx-auto border-[3px] border-black bg-[var(--bone)] shadow-[10px_10px_0_black] p-6 sm:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-8 space-y-4">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="bg-[var(--indigo)] text-white font-mono font-bold text-xs px-3 py-1 border-2 border-black shadow-[2px_2px_0_black]">
                                    IEEE GRSS IDEA
                                </span>
                                <span className="bg-[var(--gold)] text-black font-mono font-bold text-xs px-3 py-1 border-2 border-black shadow-[2px_2px_0_black]">
                                    DEADLINE: OCTOBER 15, 2026
                                </span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight">
                                IEEE GRSS IDEA Family Cares Grant Program
                            </h2>
                            <p className="font-mono font-bold text-sm sm:text-base text-[var(--terracotta)]">
                                Don’t let caregiving responsibilities hold you back!
                            </p>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                                Are you an IEEE GRSS member with family care responsibilities attending InGARSS 2026? Apply for grant assistance to support your in-person participation in Hyderabad.
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                                <a 
                                    href="https://docs.google.com/forms/d/e/1FAIpQLScqRqYCFH-sNnbL_pMg7o_fXft_se_tQvJ4FcH1Ho85cWkY-w/viewform?pli=1"
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="font-mono font-bold text-xs sm:text-sm bg-[var(--terracotta)] text-white px-6 py-3.5 border-[3px] border-black shadow-[4px_4px_0_black] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_black] transition-all text-center"
                                >
                                    APPLY ONLINE NOW →
                                </a>
                                <Link 
                                    href="/family-cares-grant"
                                    className="font-mono font-bold text-xs sm:text-sm bg-white text-black px-6 py-3.5 border-[3px] border-black shadow-[4px_4px_0_black] hover:bg-gray-100 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_black] transition-all text-center"
                                >
                                    VIEW PROGRAM DETAILS →
                                </Link>
                            </div>
                        </div>
                        <div className="lg:col-span-4 flex justify-center">
                            <Link 
                                href="/family-cares-grant"
                                className="block max-w-[260px] bg-white border-[3px] border-black shadow-[6px_6px_0_black] hover:shadow-[10px_10px_0_var(--terracotta)] hover:-translate-y-1 transition-all overflow-hidden group"
                            >
                                <div className="bg-[var(--indigo)] text-white font-mono font-bold text-[10px] py-1 px-2 text-center border-b-2 border-black">
                                    OFFICIAL FLYER • CLICK TO VIEW
                                </div>
                                <img 
                                    src="/assets/family-cares-grant.png" 
                                    alt="IEEE GRSS IDEA Family Cares Grant Flyer" 
                                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMBINED ORGANIZATION & INVITATION SECTION */}
            <section className="grid md:grid-cols-[0.9fr_1.1fr] bg-white border-b-[3px] border-black">
                
                {/* RIGHT COLUMN (INVITATION) - COMES FIRST ON MOBILE (order-1) */}
                <div className="p-6 md:p-12 lg:p-20 flex items-center justify-center bg-white overflow-hidden order-1 md:order-2 border-b-[3px] md:border-b-0 border-black">
                    <div className="border-[3px] border-black p-6 md:p-12 shadow-[10px_10px_0_black] md:shadow-[15px_15px_0_black] hover:shadow-[10px_10px_0_#BC4749] md:hover:shadow-[15px_15px_0_#BC4749] transition-all duration-300 relative bg-white w-full max-w-2xl group">
                        
                        <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-terracotta text-white font-mono text-[8px] md:text-xs p-2 md:p-4 border-[2px] md:border-[3px] border-black rotate-12 shadow-[3px_3px_0_black] group-hover:shadow-[3px_3px_0_indigo] transition-all duration-300 z-10 uppercase font-black tracking-tighter">
                            Official Invite 2026
                        </div>
                        
                        <span className="font-mono text-indigo font-bold block mb-1 md:mb-2 tracking-tighter uppercase text-[10px] md:text-sm">Welcome Message</span>
                        <h2 className="text-xl md:text-4xl font-black mb-4 md:mb-8 border-b-2 md:border-b-4 border-black pb-2 md:pb-4 leading-tight uppercase">Invitation to Participate</h2>
                        
                        <div className="space-y-4 md:space-y-6 text-sm md:text-lg leading-relaxed text-justify text-black/90 font-medium">
                            <p>Dear Participant,</p>
                            <p>
                                We are delighted to invite you to the <strong>2026 IEEE India Geoscience and Remote Sensing Symposium (InGARSS)</strong>, 
                                hosted in the vibrant &quot;Cyber City&quot; of <strong>Hyderabad, India</strong>.
                            </p>
                            <p className="hidden sm:block">
                                As a distinguished expert in the field, your insights and contributions are invaluable to the success of our symposium. 
                                The 2026 theme, <span className="italic font-bold text-indigo">&quot;Digital Earth: Modeling, Mapping, and Monitoring&quot;</span>, 
                                reflects our commitment to leveraging geospatial technologies.
                            </p>
                            <p>
                                InGARSS 2026 offers a dynamic platform to share your recent work, engage in panel discussions, and network with professionals from ISRO and NASA.
                            </p>
                            <p>
                                We look forward to your positive response and the privilege of welcoming you to Hyderabad.
                            </p>
                        </div>

                        <div className="mt-6 md:mt-12 pt-4 md:pt-8 border-t-[2px] md:border-t-[3px] border-black">
                            <p className="text-sm md:text-lg font-bold">Warm regards,</p>
                            <p className="text-base md:text-xl font-black text-indigo uppercase tracking-tight mt-1">General Chairs, InGARSS 2026</p>
                        </div>
                    </div>
                </div>

                {/* LEFT COLUMN (ORGANIZATIONS) - COMES SECOND ON MOBILE (order-2) */}
                <div className="bg-bone p-6 md:p-12 border-black md:border-r-[3px] flex flex-col items-center justify-center space-y-8 md:space-y-12 order-2 md:order-1">
                    <div className="w-full flex flex-col items-center">
                        <span className="font-mono font-bold text-indigo text-[10px] md:text-xs tracking-widest uppercase mb-3">Organized By</span>
                        <div className="bg-white border-[2px] md:border-[3px] border-black p-4 md:p-6 shadow-[8px_8px_0_black] hover:shadow-[8px_8px_0_#BC4749] transition-all duration-300 hover:-translate-y-1 w-full max-w-[280px] md:max-w-xs flex justify-center">
                            <img src="/assets/hydlogo.png" alt="IEEE GRSS Hyderabad" className="w-full h-auto max-h-[120px] md:max-h-[220px] object-contain" />
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-center">
                        <span className="font-mono font-bold text-terracotta text-[10px] md:text-xs tracking-widest uppercase mb-3">Collaborating Chapters</span>
                        <div className="bg-white border-[2px] md:border-[3px] border-black p-4 md:p-6 shadow-[8px_8px_0_black] hover:shadow-[8px_8px_0_#BC4749] transition-all duration-300 hover:-translate-y-1 w-full max-w-[280px] md:max-w-md flex justify-center">
                            <img src="/assets/othergrss.png" alt="GRSS Chapters" className="w-full h-auto max-h-[250px] md:max-h-[450px] object-contain" />
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}