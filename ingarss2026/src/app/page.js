'use client';

import { useState } from 'react';
import HeroSlider from '@/components/HeroSlider';
import AnnouncementRibbon from '@/components/AnnouncementRibbon';
import Link from 'next/link';

export default function Home() {
    const [selectedAudience, setSelectedAudience] = useState(null);

    const handleAudienceClick = (index) => {
        setSelectedAudience(selectedAudience === index ? null : index);
    };

    const audienceItems = [
        { num: "01", title: "Geoscientists", desc: "Environmental scientists and research scholars focused on Earth observation data." },
        { num: "02", title: "Engineers", desc: "Remote sensing specialists, data scientists, and AI/ML algorithm experts." },
        { num: "03", title: "Innovators", desc: "Industry leaders and tech pioneers developing the next generation of geospatial tools." },
        { num: "04", title: "Policy Makers", desc: "Government officials and environmental organizations driving sustainability goals." }
    ];

    return (
        <>
            {/* Announcement Ribbon - Below Navbar */}
            <AnnouncementRibbon />

            {/* Hero Section with Slider */}
            <HeroSlider />

            {/* Purpose Section */}
            <section id="about" className="grid md:grid-cols-2 bg-white border-b-[3px] border-black">
                <div className="p-8 md:p-16 lg:p-24 border-b md:border-b-0 md:border-r-[3px] border-black animate-fade-in-left">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold   leading-tight my-6">Advancing Geoscience</h2>
                    <p className="text-base md:text-lg leading-relaxed">
                        <strong>IEEE India Geoscience and Remote Sensing Symposium (InGARSS 2026)</strong> is a premier GRSS, India flagship event  bringing together experts, researchers, engineers, and industry leaders to explore the intersection of <strong>Geoscience, Space, Satellite, Remote Sensing</strong> and <strong>Artificial Intelligence (AI) </strong> and the rapidly evolving field of similar domains.
                    </p>
                </div>

                <div className="bg-bone p-8 md:p-16 flex items-center justify-center animate-fade-in-right">
                    <div className="bg-white border-[3px] border-black p-6 md:p-10 shadow-[12px_12px_0_#CEA964] sm:shadow-[15px_15px_0_#CEA964] md:shadow-[20px_20px_0_#CEA964] animate-float max-w-lg">
                        <h3 className="font-mono   text-indigo font-bold text-lg mb-4">Our Goals</h3>
                        <p className="leading-relaxed">To provide unique platform for showcasing cutting-edge research, fostering interdisciplinary collaborations, and discussing future directions in geospatial and remote sensing science. It aims to advance these fields and promote sustainable and ethical AI/ML practices in the geoscience domain by bringing together researchers, practitioners, and policymakers.</p>
                    </div>
                </div>
            </section>


            {/* Venue */}
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
                    <p className="text-base md:text-lg leading-relaxed mb-6">Experience the symposium in India&apos;s &quot;Cyber City&quot;. Hyderabad perfectly blends 400 years of history with a booming aerospace and IT sector, providing an inspiring backdrop for InGARSS 2026.</p>
                    <Link href="#" className="font-bold   text-xs border-b-[3px] border-terracotta w-fit pb-1 hover:text-terracotta transition-colors">Explore Venue Details →</Link>
                </div>
            </section>

             <section className="bg-[var(--gold)] border-b-[3px] border-black">
              <div className="p-8 md:p-16 lg:p-20 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                  <div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mt-3 mb-4">
                      Share Your Research
                    </h2>
                    <p className="text-black/70 text-base md:text-lg leading-relaxed">
                      December 1-4, 2026 • Hyderabad, India<br/>
                      <span className="font-bold text-black">Theme: Digital Earth - Modeling, Mapping, and Monitoring.

</span>
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <Link 
                      href="/cfp"
                      className="font-mono font-bold text-xs sm:text-sm bg-white text-black px-4 sm:px-6 py-4 border-[3px] border-black shadow-[5px_5px_0_black] hover:shadow-[0px_0px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all text-center active:shadow-[0px_0px_0_black] active:translate-x-[3px] active:translate-y-[3px]"
                    >
                      CALL FOR PAPERS
                    </Link>
                    <Link 
                      href="/submit"
                      className="py-4 font-mono font-bold text-xs sm:text-sm bg-[var(--terracotta)] text-white px-4 sm:px-6 py-4 border-[3px] border-black shadow-[5px_5px_0_black] hover:shadow-[0px_0px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all text-center active:shadow-[0px_0px_0_black] active:translate-x-[3px] active:translate-y-[3px]"
                    >
                      SUBMIT PAPER
                    </Link>
                    <Link 
                      href="/dates"
                      className="font-mono font-bold text-xs sm:text-sm bg-[var(--indigo)] text-white px-4 sm:px-6 py-4 border-[3px] border-black shadow-[5px_5px_0_black] hover:shadow-[0px_0px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all text-center active:shadow-[0px_0px_0_black] active:translate-x-[3px] active:translate-y-[3px]"
                    >
                      IMPORTANT DATES
                    </Link>
                    <a 
                    href="/assets/poster.jpeg" 
                    download
                    target="_blank"
                    rel="noopener noreferrer download"
                    className="font-mono font-bold text-xs sm:text-sm bg-black text-white px-4 sm:px-6 py-4 border-[3px] border-black shadow-[5px_5px_0_black] hover:shadow-[0px_0px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all text-center uppercase active:shadow-[0px_0px_0_black] active:translate-x-[3px] active:translate-y-[3px]"
                    >
                    Download Flyer
                    </a>
                  </div>
                </div>
              </div>
            </section>

        </>
    );
}
