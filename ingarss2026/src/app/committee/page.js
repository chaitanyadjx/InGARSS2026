import Image from 'next/image';

const committeeData = {
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
            image: "https://profiles.digitalmeasures.com/clients/1d35c932-8c2a-5c36-87f1-18cc1edaec2c/users/2058183/instruments/1278/images?fieldId=1554804"
        },
        {
            name: "Alejandro C. Frery",
            affiliation: "Victoria Univ., NZ",
            image: "https://profiles.digitalmeasures.com/clients/1d35c932-8c2a-5c36-87f1-18cc1edaec2c/users/2058183/instruments/1278/images?fieldId=1554804"
        }
    ],
    financePublication: [
        {
            name: "N. Srinivas Naik",
            affiliation: "IIIT DM Kurnool",
            image: "https://profiles.digitalmeasures.com/clients/1d35c932-8c2a-5c36-87f1-18cc1edaec2c/users/2058183/instruments/1278/images?fieldId=1554804"
        },
        {
            name: "Fabio Pacifici",
            affiliation: "Maxar Technologies",
            image: "https://profiles.digitalmeasures.com/clients/1d35c932-8c2a-5c36-87f1-18cc1edaec2c/users/2058183/instruments/1278/images?fieldId=1554804"
        },
        {
            name: "Hitendra Sharma",
            affiliation: "Vasavi College of Engg.",
            image: "https://profiles.digitalmeasures.com/clients/1d35c932-8c2a-5c36-87f1-18cc1edaec2c/users/2058183/instruments/1278/images?fieldId=1554804"
        }
    ]
};

function MemberCard({ name, affiliation, image }) {
    return (
        <div className="flex flex-col w-full sm:w-80 bg-white border-[3px] border-black p-6 md:p-8 shadow-[5px_5px_0_black] hover:shadow-[20px_20px_0_#BC4749] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300">
            <div className="w-full aspect-square border-2 border-black overflow-hidden mb-5 relative bg-gray-100">
                <img 
                    src={image} 
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>
            <p className="text-xl md:text-2xl font-bold uppercase leading-tight mb-2">{name}</p>
            <p className="font-mono text-sm text-terracotta font-bold">{affiliation}</p>
        </div>
    );
}

function CommitteeSection({ title, members, bgClass = "", pillClass = "bg-gold text-black shadow-[10px_10px_0_black]" }) {
    return (
        <section className={`py-16 md:py-24 px-5 md:px-[5%] border-b-[3px] border-black ${bgClass}`}>
            <div className="text-center mb-12 md:mb-16">
                <span className={`inline-block font-mono font-bold text-lg md:text-xl uppercase px-6 md:px-8 py-3 ${pillClass}`}>
                    {title}
                </span>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto">
                {members.map((member, index) => (
                    <MemberCard key={index} {...member} />
                ))}
            </div>
        </section>
    );
}

export default function CommitteePage() {
    return (
        <>
            {/* Page Header */}
            <header className="bg-indigo text-white px-5 md:px-[8%] py-16 md:py-20 mt-20 border-b-[3px] border-black">
                <span className="font-mono text-gold font-bold text-sm md:text-base">// LEADERSHIP</span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-tight tracking-tighter mt-2">
                    Organizing<br />Committee
                </h1>
            </header>

            {/* Advisory Committee */}
            <CommitteeSection 
                title="Advisory Committee" 
                members={committeeData.advisory}
                pillClass="bg-gold text-black shadow-[10px_10px_0_black]"
            />

            {/* General Chairs */}
            <CommitteeSection 
                title="General Chairs" 
                members={committeeData.generalChairs}
                bgClass="bg-indigo/5"
                pillClass="bg-indigo text-white shadow-[10px_10px_0_#BC4749]"
            />

            {/* Technical Program Committee */}
            <CommitteeSection 
                title="Technical Program Committee" 
                members={committeeData.technicalProgram}
                pillClass="bg-terracotta text-white shadow-[10px_10px_0_black]"
            />

            {/* Finance & Publication */}
            <CommitteeSection 
                title="Finance & Publication" 
                members={committeeData.financePublication}
                bgClass="bg-gold/5"
                pillClass="bg-black text-white shadow-[10px_10px_0_#CEA964]"
            />
        </>
    );
}
