'use client';

import { useState } from 'react';
import HeroSlider from '@/components/HeroSlider';
import AnnouncementRibbon from '@/components/AnnouncementRibbon';
import Link from 'next/link';

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
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441911645956-df6e9bbc5496?q=80&w=1170&auto=format&fit=crop')" }}
                >
                    <span className="absolute bottom-6 md:bottom-10 right-0 bg-black text-white px-5 py-3 font-mono text-xs shadow-[10px_10px_0_#CEA964]">HISTORIC SITE: CHARMINAR</span>
                </div>
                <div className="bg-bone p-8 md:p-16 flex flex-col justify-center">
                    <span className="font-mono font-bold text-terracotta text-sm"> HOST LOCATION</span>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight my-4">Hyderabad, India</h2>
                    <p className="text-base md:text-lg leading-relaxed mb-6 text-justify hyphens-auto break-words">Experience the symposium in India&apos;s &quot;Cyber City&quot;. Hyderabad perfectly blends 400 years of history with a booming aerospace and IT sector, providing an inspiring backdrop for InGARSS 2026.</p>
                    <Link href="#" className="font-bold text-xs border-b-[3px] border-terracotta w-fit pb-1 hover:text-terracotta transition-colors">Explore Venue Details →</Link>
                </div>
            </section>



            {/* COMBINED ORGANIZATION & INVITATION SECTION */}
            <section className="grid md:grid-cols-[0.9fr_1.1fr] bg-white border-b-[3px] border-black">
                
                {/* LEFT COLUMN: Organizations */}
                <div className="bg-bone p-8 md:p-12 border-b md:border-b-0 md:border-r-[3px] border-black flex flex-col items-center justify-center space-y-12">
                    <div className="w-full flex flex-col items-center">
                        <span className="font-mono font-bold text-indigo text-xs tracking-widest uppercase mb-4">Organized By</span>
                        <div className="bg-white border-[3px] border-black p-6 shadow-[10px_10px_0_black] hover:shadow-[10px_10px_0_#BC4749] transition-all duration-300 hover:-translate-y-1">
                            <img src="/assets/hydlogo.png" alt="IEEE GRSS Hyderabad" className="w-full h-auto max-h-[180px] md:max-h-[220px] object-contain" />
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-center">
                        <span className="font-mono font-bold text-black text-xs tracking-widest uppercase mb-4">Collaborating Chapters</span>
                        <div className="bg-white border-[3px] border-black p-6 shadow-[10px_10px_0_black] hover:shadow-[10px_10px_0_#BC4749] transition-all duration-300 hover:-translate-y-1">
                            <img src="/assets/othergrss.png" alt="GRSS Chapters" className="w-full h-auto max-h-[350px] md:max-h-[450px] object-contain" />
                        </div>
                    </div>
                </div>

                 {/* RIGHT COLUMN: Invitation Letter */}
                <div className="p-8 md:p-12 lg:p-20 flex items-center justify-center bg-white overflow-hidden">
                    <div className="border-[3px] border-black p-8 md:p-12 shadow-[15px_15px_0_#BC4749] hover:shadow-[15px_15px_0_#BC4749] transition-all duration-300 relative bg-white w-full max-w-2xl group">
                        
                        {/* THE RIBBON / STAMP */}
                        <div className="absolute -top-6 -right-6 bg-terracotta text-white font-mono text-[10px] md:text-xs p-3 md:p-4 border-[3px] border-black rotate-12 shadow-[5px_5px_0_black] group-hover:shadow-[5px_5px_0_black] transition-all duration-300 z-10 uppercase font-black tracking-tighter">
                            Official Invite '26
                        </div>
                        
                        <span className="font-mono text-indigo font-bold block mb-2 tracking-tighter uppercase text-sm">Welcome Message</span>
                        <h2 className="text-3xl md:text-4xl font-black mb-8 border-b-4 border-black pb-4 leading-tight uppercase">Invitation to Participate</h2>
                        
                        <div className="space-y-6 text-base md:text-lg leading-relaxed text-justify hyphens-auto break-words text-black/90 font-medium">
                            <p>Dear Participant,</p>
                            <p >
                                We are delighted to invite you to the <strong>2026 IEEE India Geoscience and Remote Sensing Symposium (InGARSS)</strong>, 
                                hosted in the vibrant "Cyber City" of <strong>Hyderabad, India</strong>.
                            </p>
                            <p>
                                As a distinguished expert in the field, your insights and contributions are invaluable to the success of our symposium. 
                                The 2026 theme, <span className="italic font-bold text-indigo">"Digital Earth: Modeling, Mapping, and Monitoring"</span>, 
                                reflects our commitment to leveraging geospatial technologies to address critical global challenges and drive innovation.
                            </p>
                            <p>
                                InGARSS 2026 offers a dynamic platform to share your recent work, engage in panel discussions on emerging trends, and network with professionals from academia, industry, and policymaking sectors including ISRO and NASA.
                            </p>
                            <p>
                                We look forward to your positive response and the privilege of welcoming you to Hyderabad.
                            </p>
                        </div>

                        <div className="mt-12 pt-8 border-t-[3px] border-black">
                            <p className="text-lg font-bold">Warm regards,</p>
                            <p className="text-xl font-black text-indigo uppercase tracking-tight mt-1">General Chairs, InGARSS 2026</p>
                        </div>
                    </div>
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
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <Link href="/cfp" className="font-mono font-bold text-xs sm:text-sm bg-white text-black px-4 sm:px-6 py-4 border-[3px] border-black shadow-[5px_5px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all text-center">CALL FOR PAPERS</Link>
                    <Link href="/submit" className="py-4 font-mono font-bold text-xs sm:text-sm bg-[var(--terracotta)] text-white px-4 sm:px-6 py-4 border-[3px] border-black shadow-[5px_5px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all text-center">SUBMIT PAPER</Link>
                    <Link href="/dates" className="font-mono font-bold text-xs sm:text-sm bg-[var(--indigo)] text-white px-4 sm:px-6 py-4 border-[3px] border-black shadow-[5px_5px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all text-center">IMPORTANT DATES</Link>
                    <a href="/assets/flyer.pdf" download className="font-mono font-bold text-xs sm:text-sm bg-black text-white px-4 sm:px-6 py-4 border-[3px] border-black shadow-[5px_5px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all text-center uppercase">Download Flyer</a>
                  </div>
                </div>
              </div>
            </section>
        </>
    );
}