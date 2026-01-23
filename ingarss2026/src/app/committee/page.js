'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import committeeData from '@/data/committee.json';

function PersonCard({ name, org, role, isSelected, onSelect }) {
    // Combine name and role for the display
    const displayName = role ? `${name} (${role})` : name;

    return (
        <div 
            onClick={onSelect}
            className={`bg-white border-2 border-black p-3 flex flex-col justify-center transition-all duration-150 min-h-[100px] md:cursor-default cursor-pointer hover:shadow-[6px_6px_0_#BC4749] hover:-translate-x-0.5 hover:-translate-y-0.5 ${
                isSelected 
                    ? 'md:shadow-[4px_4px_0_black] shadow-[6px_6px_0_#BC4749] md:translate-x-0 md:translate-y-0 -translate-x-0.5 -translate-y-0.5' 
                    : 'shadow-[4px_4px_0_black]'
            }`}
        >
            <span className="block font-bold text-[0.7rem] md:text-xs leading-tight mb-1">
                {displayName}
            </span>
            <span className="block text-[0.6rem] md:text-[0.65rem] text-gray-600 leading-tight break-words">
                {org}
            </span>
        </div>
    );
}

function CategoryHeader({ title }) {
    return (
        <div className="pt-6 pb-2">
            <div className="bg-indigo border-[3px] border-black inline-flex items-center shadow-[6px_6px_0_var(--gold)]">
                <span className="font-bold text-xs md:text-sm lg:text-base uppercase tracking-wider px-4 md:px-5 py-2 md:py-3 text-white">
                    {title}
                </span>
            </div>
        </div>
    );
}

export default function CommitteePage() {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const { sections } = committeeData;

    const handleSelect = (id) => {
        setSelectedIndex(selectedIndex === id ? null : id);
    };

    const renderSection = (section, prefix) => {
        if (!section.members || section.members.length === 0) return null;
        return (
            <section key={section.id} className="relative px-4 md:px-[8%] mb-12">
                <CategoryHeader title={section.title} />
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4 py-6">
                    {section.members.map((person, index) => (
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
                {sections.map((section) => renderSection(section, section.id))}
            </div>

            <div className="h-24"></div>
        </main>
    );
}