import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

export const metadata = {
    title: 'Student Travel Grant | InGARSS 2026',
    description: 'IEEE GRSS Student Travel Scholarship Program for InGARSS 2026 – Hyderabad. Learn about eligibility, selection criteria, and how to apply.',
};

function InfoCard({ icon, title, children }) {
    return (
        <div className="bg-white border-[3px] border-black shadow-[8px_8px_0_black] p-6 sm:p-8 flex flex-col gap-3">
            <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{icon}</span>
                <h3 className="text-lg sm:text-xl font-extrabold text-[var(--indigo)] leading-tight">{title}</h3>
            </div>
            {children}
        </div>
    );
}

function CriterionItem({ label, description }) {
    return (
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 py-4 border-b border-gray-200 last:border-b-0">
            <div className="flex-shrink-0 w-full sm:w-40 font-mono font-bold text-xs text-[var(--terracotta)] uppercase tracking-wider pt-0.5">
                {label}
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-gray-700 flex-1">
                {description}
            </p>
        </div>
    );
}

function TimelineItem({ date, label, isLast }) {
    return (
        <div className="flex gap-4 sm:gap-6">
            <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-[var(--terracotta)] border-[3px] border-black flex-shrink-0 mt-1" />
                {!isLast && <div className="w-0.5 bg-black flex-grow mt-1" />}
            </div>
            <div className={`pb-6 ${isLast ? '' : ''}`}>
                <p className="font-mono font-bold text-xs text-[var(--terracotta)] uppercase tracking-wider mb-1">{date}</p>
                <p className="text-sm sm:text-base font-semibold text-gray-800">{label}</p>
            </div>
        </div>
    );
}

export default function TravelGrantPage() {
    const eligibilityCriteria = [
        'Be an IEEE and GRSS member',
        'Be a first author or presenting author on at least 1 accepted abstract',
        'Have not received funding within the last 2 years',
    ];

    const selectionCriteria = [
        {
            label: 'Scientific Merit',
            description: 'The quality and originality of the accepted paper (review scores will be considered).',
        },
        {
            label: 'Contribution & Potential',
            description: "The applicant's role in the paper and their academic/professional trajectory.",
        },
        {
            label: 'Impact of Attendance',
            description: "A compelling statement on how attending InGARSS will benefit the applicant's research or career.",
        },
        {
            label: 'Diversity',
            description: 'Efforts will be made to ensure a diverse pool of awardees across institutions and regions.',
        },
    ];

    const timeline = [
        { date: '10 July 2026', label: 'Application Portal Opens' },
        { date: '25 July 2026', label: 'Application Deadline' },
        { date: '30 July 2026', label: 'Notification of Awards' },
    ];

    return (
        <main className="min-h-screen bg-[var(--bone)]">
            <PageHeader title="Student Travel Grant" />

            {/* Intro Banner */}
            <section className="px-4 sm:px-6 md:px-[8%] py-12 sm:py-16 md:py-20 bg-white border-b-[3px] border-black">
                <div className="max-w-5xl">
                    <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 sm:mb-8">
                        <div className="bg-[var(--indigo)] text-white px-4 py-2 font-mono font-bold text-xs sm:text-sm">
                            IEEE GRSS
                        </div>
                        <div className="bg-[var(--terracotta)] text-white px-4 py-2 font-mono font-bold text-xs sm:text-sm">
                            InGARSS 2026
                        </div>
                        <div className="bg-[var(--gold)] text-black px-4 py-2 font-mono font-bold text-xs sm:text-sm">
                            Hyderabad, INDIA
                        </div>
                    </div>

                    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--indigo)] mb-4 sm:mb-6 leading-tight">
                        IEEE GRSS Student Travel Scholarship Program
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 max-w-4xl text-justify hyphens-auto break-words">
                        The IEEE GRSS is pleased to announce the InGARSS 2026 Student Travel Scholarship Program. This initiative
                        provides <strong>fixed-amount cash awards</strong> to support student attendees participating in InGARSS 2026
                        in Hyderabad. Awards are competitive and evaluated on scientific merit, applicant potential, and the impact
                        of attendance on the student's research or career.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="px-4 sm:px-6 md:px-[8%] py-12 sm:py-16 md:py-20 bg-[var(--bone)]">
                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

                    {/* Eligibility */}
                    <InfoCard icon="✅" title="Eligibility Criteria">
                        <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                            Applicants must satisfy <strong>ALL</strong> of the following:
                        </p>
                        <ul className="flex flex-col gap-3">
                            {eligibilityCriteria.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="mt-1 flex-shrink-0 w-5 h-5 bg-[var(--terracotta)] border-[2px] border-black flex items-center justify-center text-white font-bold text-xs">
                                        {i + 1}
                                    </span>
                                    <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </InfoCard>

                    {/* Timeline */}
                    <InfoCard icon="📅" title="Important Dates">
                        <div className="mt-2">
                            {timeline.map((item, i) => (
                                <TimelineItem
                                    key={i}
                                    date={item.date}
                                    label={item.label}
                                    isLast={i === timeline.length - 1}
                                />
                            ))}
                        </div>
                    </InfoCard>
                </div>

                {/* Selection Criteria - full width */}
                <div className="max-w-5xl mx-auto mt-8 lg:mt-10">
                    <InfoCard icon="🏆" title="Selection Criteria">
                        <p className="text-xs font-mono text-gray-500 uppercase tracking-wider -mt-1 mb-2">
                            Awards are evaluated based on the following factors:
                        </p>
                        <div>
                            {selectionCriteria.map((item, i) => (
                                <CriterionItem key={i} label={item.label} description={item.description} />
                            ))}
                        </div>
                    </InfoCard>
                </div>

                {/* Disbursement & Notes */}
                <div className="max-w-5xl mx-auto mt-8 lg:mt-10">
                    <InfoCard icon="💰" title="Award Disbursement">
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                                <span className="mt-1 flex-shrink-0 text-[var(--terracotta)]">▶</span>
                                The scholarship will be disbursed as a <strong>single lump-sum payment after the conference</strong>,
                                contingent upon the recipient's verified in-person attendance and presentation of their paper.
                            </li>
                            <li className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                                <span className="mt-1 flex-shrink-0 text-[var(--terracotta)]">▶</span>
                                Travel grants are intended to provide <strong>partial support</strong> and are not designed to cover
                                the full cost of travel.
                            </li>
                            <li className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                                <span className="mt-1 flex-shrink-0 text-[var(--terracotta)]">▶</span>
                                Awardees are responsible for any applicable taxes related to the scholarship according to their
                                local and national laws.
                            </li>
                        </ul>
                    </InfoCard>
                </div>
            </section>

            {/* Apply CTA */}
            <section className="px-4 sm:px-6 md:px-[8%] py-12 sm:py-16 md:py-20 bg-[var(--indigo)] border-t-[3px] border-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 sm:mb-6">
                        Apply for the Travel Grant
                    </h2>
                    <p className="text-white/80 text-sm sm:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
                        The application portal opens on <strong className="text-[var(--gold)]">10 July 2026</strong>.
                        Submit your application before the deadline of <strong className="text-[var(--gold)]">25 July 2026</strong>.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <span
                            className="inline-block bg-[var(--gold)] text-black font-mono font-bold text-sm sm:text-base px-8 py-4 border-[3px] border-black shadow-[6px_6px_0_black] opacity-60 cursor-not-allowed select-none"
                            title="Portal opens 10 July 2026"
                        >
                            APPLY NOW — Opens 10 July 2026
                        </span>
                    </div>
                    <p className="text-white/60 text-xs font-mono mt-6">
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
