'use client';

import { useState } from 'react';

const tracks = [
    {
        title: "Imaging and Processing Techniques",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1400",
        span: "lg:col-span-8"
    },
    {
        title: "AI and Big Data",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000",
        span: "lg:col-span-4"
    },
    {
        title: "Remote Sensing Data Analysis",
        image: "https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=1000",
        span: "lg:col-span-6"
    },
    {
        title: "Electromagnetic Modeling",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000",
        span: "lg:col-span-6"
    },
    {
        title: "Atmosphere, Cryosphere, Land, and Oceans",
        image: "https://images.unsplash.com/photo-1441911645956-df6e9bbc5496?q=80&w=1200",
        span: "lg:col-span-8"
    },
    {
        title: "Missions, Platforms and Sensors",
        image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1400",
        span: "lg:col-span-4"
    },
    {
        title: "Societal Engagement and Education",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000",
        span: "lg:col-span-6"
    },
    {
        title: "Policy and Impacts",
        image: "https://images.unsplash.com/photo-1705769203542-ee21f83e7277?q=80&w=1074&auto=format&fit=crop",
        span: "lg:col-span-6"
    }
];

function TrackTile({ title, image, span, isSelected, onSelect }) {
    return (
        <div 
            onClick={onSelect}
            className={`group relative col-span-12 ${span} overflow-hidden flex flex-col justify-end p-6 sm:p-8 lg:p-12 text-white cursor-pointer transition-all duration-500 border-[3px] border-black lg:hover:-translate-x-1 lg:hover:-translate-y-1 lg:hover:shadow-[15px_15px_0_black] lg:hover:z-10
                ${isSelected ? 'h-[450px] sm:h-[550px]' : 'h-[250px] sm:h-[350px] lg:h-[400px]'}`}
        >
            {/* Background Image */}
            <div 
                className={`absolute inset-0 bg-cover bg-center transition-all duration-700 lg:group-hover:brightness-[0.9] lg:group-hover:saturate-[1.6] lg:group-hover:scale-105
                    ${isSelected ? 'brightness-[0.9] saturate-[1.6] scale-110' : 'brightness-[0.7] saturate-[1.3]'}`}
                style={{ backgroundImage: `url('${image}')` }}
            />
            
            {/* Content */}
            <div className="relative z-10">
                <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase leading-tight drop-shadow-lg">
                    {title}
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
            <header className="bg-[var(--indigo)] text-white px-4 sm:px-6 md:px-[8%] pt-28 pb-16 sm:pt-24 sm:pb-20 md:py-24 lg:py-28 border-b-[3px] border-black">
                <span className="font-mono text-[var(--gold)] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase">// SUBMISSIONS</span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-[0.85] tracking-tight mt-4 sm:mt-6">
                    Suggestive<br />Topic List
                </h1>
            </header>

            {/* Intro Section */}
            <section className="px-4 sm:px-6 md:px-[8%] py-12 sm:py-16 md:py-20 bg-white border-b-[3px] border-black">
                <p className="max-w-4xl text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                    The conference will cover a wide range of topics, emphasizing the latest technologies and their applications across various domains. Below are the suggestive tracks with subtopics (but not limited to...).
                </p>
                <p className="max-w-4xl text-sm sm:text-base md:text-lg leading-relaxed">
                    <strong>We encourage submissions that cover a wide range of topics, including but not limited to:</strong> To encourage submissions over a more wide range.
                </p>
            </section>

            {/* Tracks Grid */}
            <section className="px-4 sm:px-6 md:px-[8%] py-12 sm:py-16 md:py-20 bg-[var(--bone)]">
                <div className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8 max-w-[1400px] mx-auto">
                    {tracks.map((track, index) => (
                        <TrackTile 
                            key={index} 
                            {...track} 
                            isSelected={selectedIndex === index}
                            onSelect={() => handleSelect(index)}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
