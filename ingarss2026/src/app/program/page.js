'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import programData from '@/data/program.json';
import speakerData from '@/data/speaker.json';

const { days, panelists = [] } = programData;

const keynoteMembers = speakerData.sections.find((section) => section.id === 'keynoteSpeakers')?.members || [];
const distinguishedMembers = speakerData.sections.find((section) => section.id === 'distinguishedLecture')?.members || [];

// Indian keynote speakers and panelists first, followed by foreign speakers
const indianSpeakers = [
    ...keynoteMembers.slice(0, 5),
    ...panelists,
];

const foreignSpeakers = [
    ...keynoteMembers.slice(5),
    ...distinguishedMembers,
];

const keynoteAndPanelists = [
    ...indianSpeakers,
    ...foreignSpeakers,
];

function DayTable({ rows }) {
    return (
        <div className="border-[3px] border-black bg-white shadow-[8px_8px_0_black] overflow-hidden">
            <table className="w-full border-collapse text-left">
                <thead>
                    <tr className="bg-indigo text-white font-mono uppercase text-xs">
                        <th className="px-4 py-3 border-b-[3px] border-black w-[28%] sm:w-[22%]">Time</th>
                        <th className="px-4 py-3 border-b-[3px] border-black">Event</th>
                        <th className="px-4 py-3 border-b-[3px] border-black hidden sm:table-cell">Remarks</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index} className="align-top odd:bg-white even:bg-[var(--bone)]">
                            <td className="px-4 py-3 border-b border-black/15 font-mono text-xs sm:text-sm font-semibold whitespace-nowrap">{row.time}</td>
                            <td className="px-4 py-3 border-b border-black/15 font-bold text-sm">
                                {row.event}
                                {row.remark && <span className="block sm:hidden mt-1 font-mono text-[0.7rem] font-normal text-gray-600">{row.remark}</span>}
                            </td>
                            <td className="px-4 py-3 border-b border-black/15 font-mono text-xs text-gray-700 hidden sm:table-cell">{row.remark}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function ProgramPage() {
    const [active, setActive] = useState(0);

    return (
        <main className="min-h-screen bg-[var(--bone)]">
            <PageHeader title="Program Schedule" />

            <section className="px-4 sm:px-6 md:px-[8%] py-12 md:py-16">
                <div className="max-w-5xl mx-auto">
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
                        {programData.subtitle}
                    </p>
                    <p className="mt-3 font-mono text-xs text-gray-500">{programData.note}</p>

                    {/* Day selector */}
                    <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {days.map((day, index) => {
                            const selected = active === index;
                            return (
                                <button
                                    key={day.date}
                                    onClick={() => setActive(index)}
                                    className={`text-left border-[3px] border-black p-4 transition-all duration-200 ${selected ? 'bg-indigo text-white shadow-[8px_8px_0_var(--gold)] -translate-y-1' : 'bg-white shadow-[6px_6px_0_black] hover:-translate-y-1 hover:shadow-[9px_9px_0_var(--terracotta)]'}`}
                                >
                                    <span className="block font-mono text-[0.65rem] uppercase tracking-widest opacity-70">{day.label}</span>
                                    <span className="block text-xl font-extrabold leading-tight mt-1">{day.date}</span>
                                    <span className={`block mt-2 text-xs font-semibold ${selected ? 'text-gold' : 'text-terracotta'}`}>{day.theme}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Selected day */}
                    {days.map((day, index) => index !== active ? null : (
                        <div key={day.date} className="mt-10">
                            <div className="flex flex-wrap items-baseline gap-3 mb-4">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-indigo">{day.date}</h2>
                                <span className="font-mono text-xs font-bold bg-gold border-2 border-black px-3 py-1 uppercase">{day.label} · {day.theme}</span>
                            </div>
                            <DayTable rows={day.rows} />
                        </div>
                    ))}

                    <section className="mt-14 border-[3px] border-black bg-white p-6 sm:p-8 shadow-[8px_8px_0_var(--gold)]">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo mb-6">Keynote Speakers &amp; Panelists</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {keynoteAndPanelists.map((speaker) => (
                                <article key={speaker.name} className="border-2 border-black p-5 shadow-[4px_4px_0_black]">
                                    <h3 className="font-bold text-lg text-indigo">{speaker.name.startsWith('Dr.') || speaker.name.startsWith('Mr.') ? speaker.name : `Dr. ${speaker.name}`}</h3>
                                    <p className="mt-2 font-mono text-sm text-gray-700">{speaker.affiliation}</p>
                                </article>
                            ))}
                        </div>
                    </section>
                </div>
            </section>
        </main>
    );
}
