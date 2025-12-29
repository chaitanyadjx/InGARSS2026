'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';

const committeeData = {
    advisory: [
        { name: "Saibun Tjuatja", org: "University of Texas at Arlington, USA" },
        { name: "Shiv Mohan", org: "IEEE GRSS" }
    ],
    generalChairs: [
        { name: "Vijender Busi Reddy", org: "ADRIN, ISRO" },
        { name: "Paul A. Rosen", org: "JPL NASA" }
    ],
    technicalProgram: [
        { name: "C. Sudhakar Reddy", org: "NRSC, ISRO" },
        { name: "D. Rajesh Reddy", org: "ADRIN, ISRO" },
        { name: "Ale Alejandro C. Frery", org: "Victoria Univ., NZ" }
    ],
    financeChair: [
        { name: "N. Srinivas Naik", org: "IIITDM Kurnool" },
        { name: "Fabio Pacifici", org: "SVP of Engineering at Xoople" }
    ],
    publicationChair: [
        { name: "Hitendra Sharma", org: "Vasavi College of Engg." }
    ]
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
                {/* <span className="bg-gold text-black font-mono font-bold text-lg md:text-xl px-4 py-3 border-r-[3px] border-black">{number}</span> */}
                <span className="font-bold text-sm md:text-base uppercase tracking-wider px-5 py-3 text-white">{title}</span>
            </div>
        </div>
    );
}

export default function CommitteePage() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleSelect = (id) => {
        setSelectedIndex(selectedIndex === id ? null : id);
    };

    return (
        <main className="min-h-screen bg-bone">
            {/* Page Header */}
            <PageHeader title="Committee" />

            {/* 01. Advisory Committee */}
            <CategoryHeader number="01" title="Advisory Committee" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-6 md:px-[8%] md:py-8">
                {committeeData.advisory.map((person, index) => (
                    <PersonCard 
                        key={index} 
                        {...person} 
                        isSelected={selectedIndex === `adv-${index}`}
                        onSelect={() => handleSelect(`adv-${index}`)}
                    />
                ))}
            </div>

            {/* 02. General Chairs */}
            <CategoryHeader number="02" title="General Chairs" />
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

            {/* 03. Technical Program Committee */}
            <CategoryHeader number="03" title="Technical Program Committee" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-6 md:px-[8%] md:py-8">
                {committeeData.technicalProgram.map((person, index) => (
                    <PersonCard 
                        key={index} 
                        {...person} 
                        isSelected={selectedIndex === `technical-${index}`}
                        onSelect={() => handleSelect(`technical-${index}`)}
                    />
                ))}
            </div>

            {/* 04. Finance Committee */}
            <CategoryHeader number="04" title="Finance Committee" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-6 md:px-[8%] md:py-8">
                {committeeData.financeChair.map((person, index) => (
                    <PersonCard 
                        key={index} 
                        {...person} 
                        isSelected={selectedIndex === `finance-${index}`}
                        onSelect={() => handleSelect(`finance-${index}`)}
                    />
                ))}
            </div>

            {/* 05. Publication Committee */}
            <CategoryHeader number="05" title="Publication Chair" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-6 md:px-[8%] md:py-8 pb-24">
                {committeeData.publicationChair.map((person, index) => (
                    <PersonCard 
                        key={index} 
                        {...person} 
                        isSelected={selectedIndex === `publication-${index}`}
                        onSelect={() => handleSelect(`publication-${index}`)}
                    />
                ))}
            </div>
        </main>
    );
}