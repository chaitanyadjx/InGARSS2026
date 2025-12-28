'use client';

import { useState } from 'react';

const tracks = [
    {
        title: "Agriculture, Forest and Environment",
        description: "This track focuses on the application of remote sensing and geospatial analytics for monitoring agricultural systems, forest resources, and environmental processes. It covers crop assessment, forest inventory, ecosystem monitoring, climate impacts, and AI-driven decision support for sustainable resource management.",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1400",
        span: "lg:col-span-8"
    },
    {
        title: "Digital Mapping & Cartographic Systems",
        description: "Creation, visualization, and dissemination of spatial maps. Topics include high-resolution topographic and thematic mapping, 3D/4D urban and landscape mapping, semantic mapping & digital twins, Web GIS and interactive spatio-temporal maps, standards and interoperability (OGC, ISO).",
        image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1000",
        span: "lg:col-span-4"
    },
    {
        title: "Disaster Management & Early Warning Systems",
        description: "EO and models for hazard assessment and mitigation. Topics include earthquake, landslide, flood, cyclone monitoring, rapid mapping for emergency response, early warning systems and risk communication, resilience planning and recovery analytics.",
        image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?q=80&w=1000",
        span: "lg:col-span-6"
    },
    {
        title: "Future Directions & Innovation",
        description: "Forward-looking themes shaping the next decade. Topics include quantum computing for geospatial simulation, AI agents in Earth system modeling, next-gen digital Earth platforms, edge computing for real-time monitoring.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000",
        span: "lg:col-span-6"
    },
    {
        title: "Geospatial Data Acquisition & Sensing Technologies",
        description: "Sensors and platforms for Earth observation. Topics include satellite, UAV, airborne & ground-based sensors, hyperspectral, LiDAR, SAR, multisensor synergies, CubeSats and small satellite constellations.",
        image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200",
        span: "lg:col-span-8"
    },
    {
        title: "Machine Learning & AI for Digital Earth",
        description: "AI/ML for modelling, detection, prediction, and mapping. Topics include deep learning for image classification and segmentation, physics-informed machine learning, AI for SAR and hyperspectral analysis, self-supervised and transfer learning, explainable AI for geospatial applications.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400",
        span: "lg:col-span-4"
    },
    {
        title: "Planetary and Space Sciences",
        description: "This track focuses on remote sensing techniques for the observation and analysis of planetary surfaces, atmospheres, and interiors, as well as other celestial bodies. It covers data from space missions, imaging and spectroscopic analysis, radar observations, and modeling for planetary science, exploration, and comparative planetology.",
        image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1000",
        span: "lg:col-span-6"
    },
    {
        title: "Special Scientific Theme: NISAR",
        description: "This track focuses on science, data products, and applications of the NISAR mission, leveraging L- and S-band SAR observations. It covers interferometry, time-series analysis, surface deformation, ecosystem monitoring, cryosphere dynamics, disaster assessment, and Earth system studies using NISAR data.",
        image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=1074",
        span: "lg:col-span-6"
    }
];

function TrackCard({ title, description, image, index }) {
    return (
        <div className="bg-white border-[3px] border-black shadow-[8px_8px_0_black] hover:shadow-[12px_12px_0_var(--terracotta)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 overflow-hidden">
            {/* Image */}
            <div 
                className="h-48 sm:h-56 bg-cover bg-center border-b-[3px] border-black"
                style={{ backgroundImage: `url('${image}')` }}
            />
            
            {/* Content */}
            <div className="p-5 sm:p-6 lg:p-8">
                <span className="font-mono text-xs text-[var(--terracotta)] font-bold">TRACK {String(index + 1).padStart(2, '0')}</span>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[var(--indigo)] leading-tight mt-2 mb-4">
                    {title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default function CallForPapersPage() {
    return (
        <main className="min-h-screen bg-[var(--bone)]">
            {/* Page Header */}
            <header className="bg-[var(--indigo)] text-white px-4 sm:px-6 md:px-[8%] pt-28 pb-16 sm:pt-24 sm:pb-20 md:py-24 lg:py-28 border-b-[3px] border-black">
                <span className="font-mono text-[var(--gold)] font-bold text-xs sm:text-sm tracking-[0.2em]"><br></br></span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.85] tracking-tight mt-4 sm:mt-6">
                    Suggestive<br />Topic List
                </h1>
            </header>

            {/* Event Info Section */}
            <section className="px-4 sm:px-6 md:px-[8%] py-12 sm:py-16 md:py-20 bg-white border-b-[3px] border-black">
                <div className="max-w-5xl">
                    <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 sm:mb-8">
                        <div className="bg-[var(--indigo)] text-white px-4 py-2 font-mono font-bold text-xs sm:text-sm">
                            InGARSS 2026
                        </div>
                        <div className="bg-[var(--terracotta)] text-white px-4 py-2 font-mono font-bold text-xs sm:text-sm">
                            DECEMBER 8–11, 2026
                        </div>
                        <div className="bg-[var(--gold)] text-black px-4 py-2 font-mono font-bold text-xs sm:text-sm">
                            Hyderabad, INDIA
                        </div>
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--indigo)] mb-4 sm:mb-6 leading-tight">
                        Theme: Digital Earth – Vision 2035
                    </h2>
                    
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 max-w-4xl">
                        The India Geoscience and Remote Sensing Symposium (InGARSS) 2026 invites original contributions covering a wide range of topics in geoscience and remote sensing. Below are the suggestive tracks with subtopics (but not limited to...).
                    </p>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl">
                        <strong>We encourage submissions that push the boundaries of Earth observation, AI, and geospatial technologies.</strong>
                    </p>
                </div>
            </section>

            {/* Tracks Grid */}
            <section className="px-4 sm:px-6 md:px-[8%] py-12 sm:py-16 md:py-20 bg-[var(--bone)]">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-[1400px] mx-auto">
                    {tracks.map((track, index) => (
                        <TrackCard 
                            key={index} 
                            {...track}
                            index={index}
                        />
                    ))}
                </div>
            </section>

            {/* Submit CTA */}
            <section className="px-4 sm:px-6 md:px-[8%] py-12 sm:py-16 md:py-20 bg-[var(--indigo)] border-t-[3px] border-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 sm:mb-6">
                        Ready to Submit?
                    </h2>
                    <p className="text-white/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
                        Paper submissions will open in January 2026. Stay tuned for more details.
                    </p>
                    <a 
                        href="#"
                        className="inline-block bg-[var(--gold)] text-black font-mono font-bold text-sm sm:text-base px-8 py-4 border-[3px] border-black shadow-[6px_6px_0_black] hover:shadow-[8px_8px_0_black] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150"
                    >
                        SUBMIT PAPER →
                    </a>
                </div>
            </section>
        </main>
    );
}
