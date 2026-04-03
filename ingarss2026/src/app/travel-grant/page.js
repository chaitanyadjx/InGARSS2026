'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';

export default function TravelGrantPage() {
    const [selectedCard, setSelectedCard] = useState(null);
    const toggleCard = (id) => setSelectedCard(selectedCard === id ? null : id);

    const eligibilityCriteria = [
        'Be an IEEE and GRSS member',
        'Be a first author or presenting author on at least 1 accepted abstract',
        'Have not received funding within the last 2 years',
    ];

    const selectionCriteria = [
        { label: 'Scientific Merit', description: 'The quality and originality of the accepted paper (review scores will be considered).' },
        { label: 'Contribution & Potential', description: "The applicant's role in the paper and their academic/professional trajectory." },
        { label: 'Impact of Attendance', description: "A compelling statement on how attending InGARSS will benefit the applicant's research or career." },
        { label: 'Diversity', description: 'Efforts will be made to ensure a diverse pool of awardees across institutions and regions.' },
    ];

    const disbursementNotes = [
        <>The scholarship will be disbursed as a <strong>single lump-sum payment after the conference</strong>, contingent upon the recipient&apos;s verified in-person attendance and presentation of their paper.</>,
        <>Travel grants are intended to provide <strong>partial support</strong> and are not designed to cover the full cost of travel. (Travel grant includes travel, registration fee, etc.)</>,
        <>Awardees are responsible for any applicable taxes related to the scholarship according to their local and national laws.</>,
    ];

    const objectives = [
        'Support meritorious student members of IEEE GRSS in presenting accepted research at InGARSS 2026.',
        'Promote scientific excellence by prioritising high-quality, peer-reviewed contributions.',
        'Enhance geographic, institutional, and gender diversity among conference participants.',
        'Strengthen long-term engagement of students with IEEE GRSS through conference exposure.',
        'Enable equitable access to global scientific discourse.',
    ];

    const timeline = [
        { date: '10 July 2026', label: 'Application Portal Opens' },
        { date: '25 July 2026', label: 'Application Deadline' },
        { date: '30 July 2026', label: 'Notification of Awards' },
    ];

    return (
        <main className="min-h-screen bg-[var(--bone)]">
            <PageHeader title="Student Travel Grant" />

            {/* Intro */}
            <section className="px-4 sm:px-6 md:px-[8%] py-12 sm:py-16 md:py-20 bg-white border-b-[3px] border-black relative overflow-hidden">
                <div className="max-w-5xl mx-auto z-10 relative">
                    <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 sm:mb-8">
                        <div className="bg-[var(--indigo)] text-white px-4 py-2 font-mono font-bold text-xs sm:text-sm">IEEE GRSS</div>
                        <div className="bg-[var(--terracotta)] text-white px-4 py-2 font-mono font-bold text-xs sm:text-sm">InGARSS 2026</div>
                        <div className="bg-[var(--gold)] text-black px-4 py-2 font-mono font-bold text-xs sm:text-sm">Hyderabad, INDIA</div>
                    </div>
                    
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--indigo)] mb-4 sm:mb-6 leading-tight">
                        IEEE GRSS Student Travel Scholarship Program
                    </h2>
                    
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 max-w-4xl text-justify hyphens-auto break-words mt-4">
                        The IEEE GRSS is pleased to announce the InGARSS 2026 Student Travel Scholarship Program. This initiative
                        provides <strong>partial travel grant</strong> to support student attendees participating in InGARSS 2026
                        in Hyderabad.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 max-w-4xl text-justify hyphens-auto break-words mt-4">
                        The Student Travel Grant will be given to Indian national students and students from neighboring countries.
                        Awards are competitive and evaluated on scientific merit, applicant potential, and the impact
                        of attendance on the student&apos;s research or career.
                    </p>

                    <div className="mt-8 max-w-4xl">
                        <p className="text-sm sm:text-base text-gray-700 mb-4">
                            The primary objectives of the Travel Scholarship Program are to:
                        </p>
                        <ol className="flex flex-col gap-3 pl-2">
                            {objectives.map((obj, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                                    <span className="mt-0.5 flex-shrink-0 w-6 h-6 bg-[var(--indigo)] border-[2px] border-black flex items-center justify-center text-white font-bold text-xs font-mono">
                                        {String.fromCharCode(97 + i)}
                                    </span>
                                    {obj}
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            {/* Cards */}
            <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-[8%] max-w-[1200px] mx-auto">
                <div className="flex flex-col gap-10 lg:gap-12">

                    {/* Top row: Eligibility + Dates */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">

                        {/* Eligibility */}
                        <div
                            className={`bg-white border-[3px] border-black p-6 sm:p-8 flex flex-col cursor-pointer transition-all duration-200 sm:hover:-translate-x-2 sm:hover:-translate-y-2 sm:hover:shadow-[20px_20px_0_#BC4749] ${selectedCard === 'eligibility' ? 'shadow-[16px_16px_0_#BC4749] -translate-x-2 -translate-y-2 sm:shadow-[12px_12px_0_black] sm:translate-x-0 sm:translate-y-0' : 'shadow-[8px_8px_0_black] sm:shadow-[12px_12px_0_black]'}`}
                            onClick={() => toggleCard('eligibility')}
                        >
                            <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[var(--indigo)] leading-tight mb-5 pb-4 border-b-[2px] border-black uppercase tracking-tight">
                                Eligibility Criteria
                            </h3>
                            <p className="font-mono font-bold text-xs text-[var(--terracotta)] uppercase tracking-wider mb-5">
                                Applicants must satisfy ALL of the following
                            </p>
                            <ul className="flex flex-col gap-4">
                                {eligibilityCriteria.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <span className="mt-0.5 flex-shrink-0 w-6 h-6 bg-[var(--indigo)] border-[2px] border-black flex items-center justify-center text-white font-bold text-xs font-mono">
                                            {i + 1}
                                        </span>
                                        <span className="text-sm sm:text-base text-gray-700 leading-tight">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Important Dates */}
                        <div
                            className={`bg-white border-[3px] border-black p-6 sm:p-8 flex flex-col cursor-pointer transition-all duration-200 sm:hover:-translate-x-2 sm:hover:-translate-y-2 sm:hover:shadow-[20px_20px_0_#BC4749] ${selectedCard === 'dates' ? 'shadow-[16px_16px_0_#BC4749] -translate-x-2 -translate-y-2 sm:shadow-[12px_12px_0_black] sm:translate-x-0 sm:translate-y-0' : 'shadow-[8px_8px_0_black] sm:shadow-[12px_12px_0_black]'}`}
                            onClick={() => toggleCard('dates')}
                        >
                            <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[var(--indigo)] leading-tight mb-5 pb-4 border-b-[2px] border-black uppercase tracking-tight">
                                Important Dates (Tentative)
                            </h3>
                            <p className="font-mono font-bold text-xs text-[var(--terracotta)] uppercase tracking-wider mb-5">
                                Application Process Timeline
                            </p>
                            <div className="pt-2">
                                {timeline.map((item, i) => (
                                    <div key={i} className="flex gap-4 sm:gap-6">
                                        <div className="flex flex-col items-center">
                                            <div className="w-3 h-3 bg-[var(--terracotta)] border-[2px] border-black flex-shrink-0 mt-1.5" />
                                            {i !== timeline.length - 1 && <div className="w-px bg-gray-300 flex-grow mt-1" />}
                                        </div>
                                        <div className="pb-7">
                                            <p className="font-mono font-bold text-xs text-[var(--terracotta)] uppercase tracking-wider mb-1">{item.date}</p>
                                            <p className="text-sm sm:text-base font-semibold text-gray-800">{item.label}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Selection Criteria */}
                    <div
                        className={`bg-white border-[3px] border-black p-6 sm:p-8 flex flex-col cursor-pointer transition-all duration-200 sm:hover:-translate-x-2 sm:hover:-translate-y-2 sm:hover:shadow-[20px_20px_0_#BC4749] ${selectedCard === 'selection' ? 'shadow-[16px_16px_0_#BC4749] -translate-x-2 -translate-y-2 sm:shadow-[12px_12px_0_black] sm:translate-x-0 sm:translate-y-0' : 'shadow-[8px_8px_0_black] sm:shadow-[12px_12px_0_black]'}`}
                        onClick={() => toggleCard('selection')}
                    >
                        <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[var(--indigo)] leading-tight mb-5 pb-4 border-b-[2px] border-black uppercase tracking-tight">
                            Selection Criteria
                        </h3>
                        <p className="font-mono font-bold text-xs text-[var(--terracotta)] uppercase tracking-wider mb-5">
                            Awards are evaluated based on the following factors
                        </p>
                        <div>
                            {selectionCriteria.map((item, i) => (
                                <div key={i} className="flex flex-col sm:flex-row gap-1 sm:gap-6 py-4 border-b border-gray-200 last:border-b-0">
                                    <div className="flex-shrink-0 w-full sm:w-48 font-mono font-bold text-xs text-[var(--terracotta)] uppercase tracking-wider pt-0.5">
                                        {item.label}
                                    </div>
                                    <p className="text-sm sm:text-base leading-relaxed text-gray-700 flex-1 text-justify hyphens-auto mt-1 sm:mt-0">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Award Disbursement */}
                    <div
                        className={`bg-white border-[3px] border-black p-6 sm:p-8 flex flex-col cursor-pointer transition-all duration-200 sm:hover:-translate-x-2 sm:hover:-translate-y-2 sm:hover:shadow-[20px_20px_0_#BC4749] ${selectedCard === 'disbursement' ? 'shadow-[16px_16px_0_#BC4749] -translate-x-2 -translate-y-2 sm:shadow-[12px_12px_0_black] sm:translate-x-0 sm:translate-y-0' : 'shadow-[8px_8px_0_black] sm:shadow-[12px_12px_0_black]'}`}
                        onClick={() => toggleCard('disbursement')}
                    >
                        <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[var(--indigo)] leading-tight mb-5 pb-4 border-b-[2px] border-black uppercase tracking-tight">
                            Award Disbursement
                        </h3>
                        <p className="font-mono font-bold text-xs text-[var(--terracotta)] uppercase tracking-wider mb-5">
                            Payment terms and conditions
                        </p>
                        <ul className="flex flex-col gap-5 mt-2">
                            {disbursementNotes.map((note, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1 flex-shrink-0 w-5 h-5 bg-[var(--gold)] border-[2px] border-black flex items-center justify-center text-xs font-mono font-bold">
                                        {i + 1}
                                    </div>
                                    <span className="text-sm sm:text-base text-gray-800 leading-relaxed pt-0.5">{note}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Apply CTA */}
            <section className="px-4 sm:px-6 md:px-[8%] py-12 sm:py-16 md:py-20 bg-[var(--indigo)] border-t-[3px] border-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-8 sm:mb-10">
                        Apply for the Travel Grant
                    </h2>
                    <span
                        className="inline-block bg-[#CEA964] text-black font-mono font-bold text-sm sm:text-base px-8 py-4 border-[3px] border-black shadow-[6px_6px_0_black] opacity-60 cursor-not-allowed select-none"
                        title="Dates are currently tentative"
                    >
                        APPLICATIONS OPENING SOON
                    </span>
                    <p className="text-white/60 text-xs font-mono mt-8">
                        For inquiries, contact:{' '}
                        <a
                            href="mailto:ingarss2026@gmail.com"
                            className="text-[var(--gold)] underline hover:text-white transition-colors"
                        >
                            ingarss2026@gmail.com
                        </a>
                    </p>
                </div>
            </section>
        </main>
    );
}
