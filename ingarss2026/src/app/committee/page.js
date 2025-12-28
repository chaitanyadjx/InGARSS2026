'use client';

import { useState } from 'react';

const committeeData = {
    generalChairs: [
        { name: "Dr. Shiv Mohan", org: "IEEE GRSS India Council", role: "General Chair" },
        { name: "Dr. B.S. Daya Sagar", org: "ISI Bangalore, India", role: "General Chair" },
        { name: "Prof. Avik Bhattacharya", org: "IIT Bombay, India", role: "General Co-Chair" },
        { name: "Dr. Raj Kumar", org: "NRSC ISRO, Hyderabad", role: "General Co-Chair" },
    ],
    technicalProgram: [
        { name: "Dr. Amit Kumar", org: "IIRS, Dehradun" },
        { name: "Dr. Anup Das", org: "SAC-ISRO, Ahmedabad" },
        { name: "Dr. G. Venugopal", org: "NRSC-ISRO, Hyderabad" },
        { name: "Dr. Praveen Kumar", org: "IIT Roorkee, India" },
        { name: "Prof. Onkar Dikshit", org: "IIT Kanpur, India" },
        { name: "Dr. R. Ramachandran", org: "NASA IMPACT, USA" },
        { name: "Dr. S.S. Rao", org: "IEEE Hyderabad Section" },
        { name: "Dr. Vineet Kumar", org: "IIT Bombay, India" },
        { name: "Dr. Shashi Kumar", org: "IIRS ISRO, Dehradun" },
        { name: "Prof. D. Singh", org: "IIT Roorkee, India" },
        { name: "Dr. Arundhati Misra", org: "SAC ISRO, Ahmedabad" },
        { name: "Dr. Sanghamitra Dutta", org: "NASA HQ, USA" },
    ],
};

function PersonCard({ name, org, role, isSelected, onSelect }) {
    return (
        <div 
            onClick={onSelect}
            className={`bg-white border-2 border-black p-3 flex flex-col justify-center transition-all duration-150 min-h-[80px] md:cursor-default cursor-pointer hover:shadow-[6px_6px_0_#BC4749] hover:-translate-x-0.5 hover:-translate-y-0.5 ${
                isSelected 
                    ? 'md:shadow-[4px_4px_0_black] shadow-[6px_6px_0_#BC4749] md:translate-x-0 md:translate-y-0 -translate-x-0.5 -translate-y-0.5' 
                    : 'shadow-[4px_4px_0_black]'
            }`}
        >
            <span className="block font-bold text-xs leading-tight mb-1">{name}</span>
            <span className="block text-[0.65rem] text-gray-600 leading-tight">{org}</span>
            {role && (
                <span className="block font-mono text-[0.6rem] text-terracotta font-semibold mt-2 pt-2 border-t border-gray-200">{role}</span>
            )}
        </div>
    );
}

function CategoryHeader({ number, title }) {
    return (
        <div className="sticky top-20 z-30 mx-4 md:mx-[8%] my-6">
            <div className="bg-indigo border-[3px] border-black inline-flex items-center shadow-[6px_6px_0_var(--gold)]">
                <span className="bg-gold text-black font-mono font-bold text-lg md:text-xl px-4 py-3 border-r-[3px] border-black">{number}</span>
                <span className="font-bold text-sm md:text-base uppercase tracking-wider px-5 py-3 text-white">{title}</span>
            </div>
        </div>
    );
}

export default function CommitteePage() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleSelect = (index) => {
        setSelectedIndex(selectedIndex === index ? null : index);
    };

    return (
        <main className="min-h-screen bg-bone">
            {/* Page Header */}
            <header className="bg-indigo text-white px-5 md:px-[8%] py-16 md:py-20 mt-20 border-b-[3px] border-black">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter">
                    Committee
                </h1>
                <span className="font-mono text-gold font-bold text-sm md:text-base mt-3 block px-2"> Meet our organizations committee</span>
            </header>

            {/* General Chairs */}
            <CategoryHeader number="01" title="General Chairs" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-6 md:px-[8%] md:py-8">
                {committeeData.generalChairs.map((person, index) => (
                    <PersonCard 
                        key={index} 
                        {...person} 
                        isSelected={selectedIndex === `general-${index}`}
                        onSelect={() => handleSelect(`general-${index}`)}
                    />
                ))}
            </div>

            {/* Technical Program Committee */}
            <CategoryHeader number="02" title="Technical Program Committee" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-6 md:px-[8%] md:py-8 pb-20">
                {committeeData.technicalProgram.map((person, index) => (
                    <PersonCard 
                        key={index} 
                        {...person} 
                        isSelected={selectedIndex === `technical-${index}`}
                        onSelect={() => handleSelect(`technical-${index}`)}
                    />
                ))}
            </div>
        </main>
    );
}