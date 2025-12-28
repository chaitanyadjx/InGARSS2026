import Image from 'next/image';

const speakersData = {
    advisory: [
        {
            name: "Saibun Tjuatja",
            affiliation: "University of Texas at Arlington, USA",
            image: "https://profiles.digitalmeasures.com/clients/1d35c932-8c2a-5c36-87f1-18cc1edaec2c/users/2058183/instruments/1278/images?fieldId=1554804"
        },
        {
            name: "Shiv Mohan",
            affiliation: "IEEE GRSS",
            image: "https://www.grss-ieee.org/wp-content/uploads/2025/09/shiv-mohan.jpg"
        }
    ],
    generalChairs: [
        {
            name: "Vijender Busi Reddy",
            affiliation: "ADRIN, ISRO",
            image: "https://i1.rgstatic.net/ii/profile.image/565310516613120-1511791938111_Q128/Vijender-Reddy.jpg"
        },
        {
            name: "Paul A. Rosen",
            affiliation: "JPL NASA",
            image: "https://www.jpl.nasa.gov/site/research/media/images/rosen.max-400x400.jpg"
        }
    ],
    technicalProgram: [
        {
            name: "C. Sudhakar Reddy",
            affiliation: "NRSC, ISRO",
            image: "https://glp.earth/sites/default/files/styles/people_wide/public/profile/csreddy-photo-for-cv.jpg?itok=Lj50_yqt&timestamp=1718726120"
        },
        {
            name: "D. Rajesh Reddy",
            affiliation: "ADRIN, ISRO",
            image: ""
        },
        {
            name: "Alejandro C. Frery",
            affiliation: "Victoria Univ., NZ",
            image: "https://people.wgtn.ac.nz/alejandro.frery/thumbnail"
        }
    ],
    financeChair: [
        {
            name: "N. Srinivas Naik",
            affiliation: "IIITDM Kurnool",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjxeYX2sFSOMUl5Vji3nOxx7UT6hXqlTCGBQ&s"
        },
        {
            name: "Fabio Pacifici",
            affiliation: "SVP of Engineering at Xoople",
            image: "https://media.licdn.com/dms/image/v2/D5603AQGv7iks2LsoXQ/profile-displayphoto-crop_800_800/B56ZrCT3AQJUAI-/0/1764196577740?e=1768435200&v=beta&t=Ib67AcguB2sWRYYhVDrPA0dXnKTfjTVpELfI08Cn26I"
        }
    ],
    publicationChair: [
        {
            name: "Hitendra Sharma",
            affiliation: "Vasavi College of Engg.",
            image: ""
        }
    ]
};

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
            <p className="text-xl md:text-2xl font-bold   leading-tight mb-2">{name}</p>
            <p className="font-mono text-sm text-terracotta font-bold">{affiliation}</p>
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
    return (
        <>
            {/* Page Header */}
            <header className="bg-indigo text-white px-5 md:px-[8%] py-16 md:py-20 mt-20 border-b-[3px] border-black">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter">
                    Speakers
                </h1>
                <span className="font-mono text-gold font-bold text-sm md:text-base mt-3 block px-1">Meet Our Distinguished Speakers</span>
            </header>

            {/* Advisory Committee */}
            <SpeakerSection 
                title="Advisory Committee" 
                members={speakersData.advisory}
                pillClass="bg-gold text-black shadow-[10px_10px_0_black]"
            />

            {/* General Chairs */}
            <SpeakerSection 
                title="General Chairs" 
                members={speakersData.generalChairs}
                bgClass="bg-indigo/5"
                pillClass="bg-indigo text-white shadow-[10px_10px_0_#BC4749]"
            />

            {/* Technical Program Committee */}
            <SpeakerSection 
                title="Technical Program Committee" 
                members={speakersData.technicalProgram}
                pillClass="bg-terracotta text-white shadow-[10px_10px_0_black]"
            />

            {/* Finance Chair */}
            <SpeakerSection 
                title="Finance Chair" 
                members={speakersData.financeChair}
                bgClass="bg-gold/5"
                pillClass="bg-black text-white shadow-[10px_10px_0_#CEA964]"
            />

            {/* Publication Chair */}
            <SpeakerSection 
                title="Publication Chair" 
                members={speakersData.publicationChair}
                pillClass="bg-gold text-black shadow-[10px_10px_0_black]"
            />
        </>
    );
}
