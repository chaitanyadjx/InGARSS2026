import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import speakerData from '@/data/speaker.json';

function SpeakerCard({ name, affiliation, image }) {
    const hasImage = image && image.trim() !== '';
    
    return (
        <div className="flex flex-col w-full sm:w-80 bg-white border-[3px] border-black p-6 md:p-8 shadow-[5px_5px_0_black] hover:shadow-[20px_20px_0_#BC4749] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300">
            <div className="w-full aspect-square border-2 border-black overflow-hidden mb-5 relative bg-gray-100">
                {hasImage ? (
                    <img 
                        src={image} 
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                        <svg 
                            className="w-1/2 h-1/2 text-gray-400" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                    </div>
                )}
            </div>
            <p className="text-xl md:text-2xl font-bold   leading-tight mb-2 text-justify hyphens-auto   break-words">{name}</p>
            <p className="font-mono text-sm text-terracotta font-bold text-justify hyphens-auto   break-words">{affiliation}</p>
        </div>
    );
}

function SpeakerSection({ title, members, bgClass = "", pillClass = "bg-gold text-black shadow-[10px_10px_0_black]" }) {
    return (
        <section className={`py-16 md:py-24 px-5 md:px-[5%] border-b-[3px] border-black ${bgClass}`}>
            <div className="text-center mb-12 md:mb-16">
                <span className={`inline-block font-mono font-bold text-lg md:text-xl   px-6 md:px-8 py-3 ${pillClass}`}>
                    {title}
                </span>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto">
                {members.map((member, index) => (
                    <SpeakerCard key={index} {...member} />
                ))}
            </div>
        </section>
    );
}

export default function SpeakersPage() {
    const { sections } = speakerData;
    
    return (
        <>
            {/* Page Header */}
            <PageHeader title="Speakers" subtitle="Meet Our Distinguished Speakers" />

            {/* Render all sections from JSON */}
            {sections.map((section) => (
                <SpeakerSection 
                    key={section.id}
                    title={section.title} 
                    members={section.members}
                    bgClass={section.bgClass}
                    pillClass={section.pillClass}
                />
            ))}
        </>
    );
}
