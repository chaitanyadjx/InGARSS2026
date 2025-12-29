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
            className={`bg-white border-2 border-black p-3 flex flex-col justify-center transition-all duration-150 min-h-[90px] md:cursor-default cursor-pointer hover:shadow-[6px_6px_0_#BC4749] hover:-translate-x-0.5 hover:-translate-y-0.5 ${
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

function CategoryHeader({ title }) {
    return (
        // Removed sticky, top-20, z-30, and backdrop-blur classes
        <div className="pt-6 pb-2">
            <div className="bg-indigo border-[3px] border-black inline-flex items-center shadow-[6px_6px_0_var(--gold)]">
                <span className="font-bold text-sm md:text-base uppercase tracking-wider px-5 py-3 text-white">
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

    // Helper to render sections consistently
    const renderSection = (title, data, prefix) => (
        // relative + min-h-fit ensures the sticky header knows its boundary
        <section className="relative px-4 md:px-[8%] mb-12">
            <CategoryHeader title={title} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-6">
                {data.map((person, index) => (
                    <PersonCard 
                        key={index} 
                        {...person} 
                        isSelected={selectedIndex === `${prefix}-${index}`}
                        onSelect={() => handleSelect(`${prefix}-${index}`)}
                    />
                ))}
            </div>
        </section>
    );

    return (
        <main className="min-h-screen bg-bone">
            <PageHeader title="Committee" />
            
            <div className="pt-8">
                {renderSection("Advisory Committee", committeeData.advisory, "adv")}
                {renderSection("General Chairs", committeeData.generalChairs, "general")}
                {renderSection("Technical Program Committee", committeeData.technicalProgram, "technical")}
                {renderSection("Finance Committee", committeeData.financeChair, "finance")}
                {renderSection("Publication Chair", committeeData.publicationChair, "publication")}
            </div>

            {/* Bottom padding to prevent last section from getting stuck behind footer */}
            <div className="h-24"></div>
        </main>
    );
}