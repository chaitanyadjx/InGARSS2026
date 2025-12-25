'use client';

import HeroSlider from '@/components/HeroSlider';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            {/* Hero Section with Slider */}
            <HeroSlider />

            {/* Purpose Section */}
            <section id="about" className="grid md:grid-cols-2 bg-white border-b-[3px] border-black">
                <div className="p-8 md:p-16 lg:p-24 border-b md:border-b-0 md:border-r-[3px] border-black">
                    <span className="font-mono text-terracotta font-bold text-sm">// PURPOSE</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight my-6">Advancing Geoscience</h2>
                    <p className="text-base md:text-lg leading-relaxed">
                        <strong>IEEE India Geoscience and Remote Sensing Symposium (InGARSS 2026)</strong> is a premier event bringing together experts, researchers, engineers, and industry leaders to explore the intersection of <strong>Geoscience, Space, Satellite, Remote Sensing</strong> and <strong>Artificial Intelligence (AI), Cybersecurity, Sensors, Robotics, Industry 4.0</strong> and the rapidly evolving field of similar domains.
                    </p>
                </div>

                <div className="bg-bone p-8 md:p-16 flex items-center justify-center">
                    <div className="bg-white border-[3px] border-black p-6 md:p-10 shadow-[15px_15px_0_#CEA964] md:shadow-[20px_20px_0_#CEA964] float-animation max-w-lg">
                        <h3 className="font-mono uppercase text-indigo font-bold text-lg mb-4">The Mission</h3>
                        <p className="leading-relaxed">To provide unique platform for showcasing cutting-edge research, fostering interdisciplinary collaborations, and discussing future directions in geospatial and remote sensing science. It aims to advance these fields and promote sustainable and ethical AI/ML practices in the geoscience domain by bringing together researchers, practitioners, and policymakers.</p>
                    </div>
                </div>
            </section>

            {/* Target Audience */}
            <section id="audience" className="bg-white">
                <div className="px-5 md:px-[8%] py-12 md:py-20">
                    <span className="font-mono text-terracotta font-bold text-sm">// COMMUNITY</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight mt-2">Target Audience</h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t-[3px] border-black">
                    <div className="p-6 md:p-10 border-r border-b border-black hover:bg-terracotta hover:text-white transition-all duration-300 cursor-default group">
                        <span className="font-mono font-bold block mb-4 text-terracotta group-hover:text-white">01</span>
                        <h4 className="font-bold text-lg mb-2">Geoscientists</h4>
                        <p className="text-sm md:text-base">Environmental scientists and research scholars focused on Earth observation data.</p>
                    </div>
                    <div className="p-6 md:p-10 border-r border-b border-black hover:bg-terracotta hover:text-white transition-all duration-300 cursor-default group">
                        <span className="font-mono font-bold block mb-4 text-terracotta group-hover:text-white">02</span>
                        <h4 className="font-bold text-lg mb-2">Engineers</h4>
                        <p className="text-sm md:text-base">Remote sensing specialists, data scientists, and AI/ML algorithm experts.</p>
                    </div>
                    <div className="p-6 md:p-10 border-r border-b border-black hover:bg-terracotta hover:text-white transition-all duration-300 cursor-default group">
                        <span className="font-mono font-bold block mb-4 text-terracotta group-hover:text-white">03</span>
                        <h4 className="font-bold text-lg mb-2">Innovators</h4>
                        <p className="text-sm md:text-base">Industry leaders and tech pioneers developing the next generation of geospatial tools.</p>
                    </div>
                    <div className="p-6 md:p-10 border-b border-black hover:bg-terracotta hover:text-white transition-all duration-300 cursor-default group">
                        <span className="font-mono font-bold block mb-4 text-terracotta group-hover:text-white">04</span>
                        <h4 className="font-bold text-lg mb-2">Policy Makers</h4>
                        <p className="text-sm md:text-base">Government officials and environmental organizations driving sustainability goals.</p>
                    </div>
                </div>
            </section>

            {/* Important Dates */}
            <section id="dates" className="grid md:grid-cols-2 bg-indigo text-white border-b-[3px] border-black">
                <div className="p-8 md:p-16 lg:p-24 border-b md:border-b-0 md:border-r-[3px] border-gold">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight">Important<br />Dates</h2>
                </div>
                <div className="bg-black">
                    <div className="p-6 md:p-10 border-b border-indigo">
                        <h5 className="font-mono text-gold text-sm mb-2">SYMPOSIUM DATES</h5>
                        <p className="text-xl md:text-2xl font-bold">01 – 04 December 2026</p>
                    </div>
                    <div className="p-6 md:p-10 border-b border-indigo opacity-70">
                        <h5 className="font-mono text-sm mb-2">SUBMISSION DEADLINE</h5>
                        <p className="text-xl md:text-2xl font-bold">TO BE ANNOUNCED</p>
                    </div>
                    <div className="p-6 md:p-10 opacity-70">
                        <h5 className="font-mono text-sm mb-2">REGISTRATION OPENS</h5>
                        <p className="text-xl md:text-2xl font-bold">TO BE ANNOUNCED</p>
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
                    <span className="font-mono font-bold text-indigo text-sm">// HOST LOCATION</span>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight my-4">Hyderabad, India</h2>
                    <p className="text-base md:text-lg leading-relaxed mb-6">Experience the symposium in India&apos;s &quot;Cyber City&quot;. Hyderabad perfectly blends 400 years of history with a booming aerospace and IT sector, providing an inspiring backdrop for InGARSS 2026.</p>
                    <Link href="#" className="font-bold uppercase text-xs border-b-[3px] border-terracotta w-fit pb-1 hover:text-terracotta transition-colors">Explore Venue Details →</Link>
                </div>
            </section>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
                .float-animation {
                    animation: float 4s ease-in-out infinite;
                }
            `}</style>
        </>
    );
}
