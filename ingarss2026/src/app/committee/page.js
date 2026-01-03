'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';

// ... committeeData remains the same ...

function PersonCard({ name, org, role, isSelected, onSelect }) {
    return (
        <div 
            onClick={onSelect}
            className={`bg-white border-2 border-black p-3 flex flex-col justify-center transition-all duration-150 min-h-[100px] md:cursor-default cursor-pointer hover:shadow-[6px_6px_0_#BC4749] hover:-translate-x-0.5 hover:-translate-y-0.5 ${
                isSelected 
                    ? 'md:shadow-[4px_4px_0_black] shadow-[6px_6px_0_#BC4749] md:translate-x-0 md:translate-y-0 -translate-x-0.5 -translate-y-0.5' 
                    : 'shadow-[4px_4px_0_black]'
            }`}
        >
            <span className="block font-bold text-[0.7rem] md:text-xs leading-tight mb-1">{name}</span>
            <span className="block text-[0.6rem] md:text-[0.65rem] text-gray-600 leading-tight break-words">
                {org}
            </span>
            {role && (
                <span className="block font-mono text-[0.55rem] md:text-[0.6rem] text-terracotta font-semibold mt-2 pt-2 border-t border-gray-200">
                    {role}
                </span>
            )}
        </div>
    );
}

function CategoryHeader({ title }) {
    return (
        <div className="pt-6 pb-2">
            <div className="bg-indigo border-[3px] border-black inline-flex items-center shadow-[6px_6px_0_var(--gold)]">
                <span className="font-bold text-xs md:text-base uppercase tracking-wider px-4 md:px-5 py-2 md:py-3 text-white">
                    {title}
                </span>
            </div>
        </div>
    );
}

export default function CommitteePage() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleSelect = (id) => {
        setSelectedIndex(selectedIndex === id ? null : id);
    };

    const renderSection = (title, data, prefix) => {
        if (!data || data.length === 0) return null;
        
        return (
            <section className="relative px-4 md:px-[8%] mb-12">
                <CategoryHeader title={title} />
                {/* grid-cols-2: Shows 2 items side-by-side on phones
                    sm:grid-cols-2: stays 2 for small tablets
                    md:grid-cols-3: shifts to 3 for tablets
                    lg:grid-cols-4: 4 for laptops
                    xl:grid-cols-5: 5 for large desktops
                */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4 py-6">
                    {data.map((person, index) => (
                        <PersonCard 
                            key={`${prefix}-${index}`} 
                            {...person} 
                            isSelected={selectedIndex === `${prefix}-${index}`}
                            onSelect={() => handleSelect(`${prefix}-${index}`)}
                        />
                    ))}
                </div>
            </section>
        );
    };

    return (
        <main className="min-h-screen bg-bone">
            <PageHeader title="Committee" />
            
            <div className="pt-8">
                {renderSection("Advisory Committee", committeeData.advisory, "adv")}
                {renderSection("General Chairs", committeeData.generalChairs, "general")}
                {renderSection("Technical Program Committee", committeeData.technicalProgram, "technical")}
                {renderSection("Finance Committee", committeeData.financeChair, "finance")}
                {renderSection("Publication Chair", committeeData.publicationChair, "publication")}
                {renderSection("Local Organizing Committee", committeeData.localOrganizing, "local")}
                {renderSection("Tutorials and Exhibits Chair", committeeData.tutorialsExhibits, "tutorial")}
                {renderSection("Special Issue Chair", committeeData.specialIssue, "special")}
                {renderSection("DEIAB Activity Chair", committeeData.deiabActivity, "deiab")}
                {renderSection("YP Activity Committee", committeeData.ypActivity, "yp")}
                {renderSection("Publicity Chair", committeeData.publicityChair, "publicity")}
                {renderSection("Award Committee", committeeData.awardCommittee, "award")}
                {renderSection("Travel Grant Committee", committeeData.travelGrant, "travel")}
                {renderSection("Webmaster & Social Committee", committeeData.webmasterSocial, "web")}
                {renderSection("Organizing Committee Chapters", committeeData.organizingChapters, "chapters")}
            </div>

            <div className="h-24"></div>
        </main>
    );
}



const committeeData = {
    advisory: [
        { name: "Saibun Tjuatja", org: "University of Texas at Arlington" },
        { name: "Shiv Mohan", org: "IEEE GRSS India Liaison, India" },
        { name: "Prakash Chauhan", org: "NRSC, ISRO, India" },
        { name: "CVN Rao", org: "SAC, ISRO, India" },
        { name: "Ashish Ghosh", org: "IIIT, Bhubhaneshwar" },
        { name: "B. S. Daya Sagar", org: "ISI Bangalore" },
        { name: "Keely Roth", org: "Planet labs" },
        { name: "Tianlin Wang", org: "JPL, NASA" },
        { name: "Fairouz Stambouli", org: "German Aerospace Center, Germany" }
    ],
    generalChairs: [
        { name: "Vijender Busi Reddy", org: "ADRIN, ISRO", role: "Chair" },
        { name: "Paul A. Rosen", org: "JPL NASA", role: "Co-Chair" }
    ],
    technicalProgram: [
        { name: "C. Sudhakar Reddy", org: "NRSC, ISRO", role: "Chair" },
        { name: "D. Rajesh Reddy", org: "ADRIN, ISRO", role: "Co-Chair" },
        { name: "Alejandro C. Frery", org: "Victoria Univ., NZ", role: "Co-Chair" }
    ],
    financeChair: [
        { name: "N. Srinivas Naik", org: "IIITDM Kurnool" }
    ],
    publicationChair: [
        { name: "Hitendra Sharma", org: "Vasavi College of Engg." }
    ],
    localOrganizing: [
        { name: "A. Kavitha", org: "JNTUH", role: "Chair" }
    ],
    tutorialsExhibits: [
        { name: "Shyam Lal", org: "NITK Surathkal", role: "Chair" }
    ],
    specialIssue: [
        { name: "Avik Bhattacharya", org: "IIT Bombay, India", role: "Chair" }
    ],
    industryRelations: [], 
    wieActivity: [], 
    deiabActivity: [
        { name: "Sai Kumar Tara", org: "BVRIT", role: "Chair" }
    ],
    ypActivity: [
        { name: "Mr. Khalid Ahmad", org: "GRSS YP Regional Coordinator", role: "Chair" },
        { name: "Ms. Rahisha T", org: "IIIT Bangalore", role: "Co-Chair" }
    ],
    publicityChair: [
        { name: "L. Nirmala Devi", org: "Osmania University" }
    ],
    awardCommittee: [
        { name: "Anup Das", org: "SAC, ISRO", role: "Chair" }
    ],
    travelGrant: [
        { name: "Surajit Ghosh", org: "IWMI Colombo, Sri Lanka", role: "Chair" }
    ],
    webmasterSocial: [
        { name: "Anisha", org: "IIITDM, Kurnool", role: "Chair" },
        { name: "Chaitanya Jambhulkar", org: "IIITDM, Kurnool", role: "Co-Chair" },
        { name: "Suraj Kodakandla", org: "IIITDM, Kurnool", role: "Co-Chair" }
    ],
    organizingChapters: [
        { name: "Chair", org: "IEEE GRSS Gujarat Chapter" },
        { name: "Chair", org: "IEEE GRSS Uttar Pradesh Chapter" },
        { name: "Chair", org: "IEEE GRSS Kerala Chapter" },
        { name: "Chair", org: "IEEE GRSS Bombay Chapter" },
        { name: "Chair", org: "IEEE GRSS Delhi Chapter" },
        { name: "Chair", org: "IEEE GRSS Madras Chapter" },
        { name: "Chair", org: "IEEE GRSS Madhya Pradesh Chapter" },
        { name: "Chair", org: "IEEE GRSS Bangalore Chapter" },
        { name: "Chair", org: "IEEE GRSS Kolkata Chapter" },
        { name: "Chair", org: "IEEE GRSS Hyderabad Chapter" }
    ]
};