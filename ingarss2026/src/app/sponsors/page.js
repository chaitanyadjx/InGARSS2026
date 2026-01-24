'use client';

import PageHeader from '@/components/PageHeader';
import sponsorsData from '@/data/sponsors.json';

function BenefitCard({ title, description }) {
    return (
        <div className="bg-white border-[3px] border-black p-6 shadow-[5px_5px_0_black] hover:shadow-[10px_10px_0_var(--terracotta)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-bold text-lg mb-2">{title}</h3>
            <p className="text-sm text-gray-700">{description}</p>
        </div>
    );
}

function PackageCard({ name, price, priceNote, availability, features, color, borderColor, textColor, highlight }) {
    return (
        <div className={`relative ${color} border-[3px] ${borderColor} p-6 md:p-8 ${highlight ? 'shadow-[12px_12px_0_black] scale-105' : 'shadow-[6px_6px_0_black]'} hover:shadow-[15px_15px_0_var(--indigo)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300`}>
            {highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-terracotta text-white px-4 py-1 font-mono font-bold text-xs border-2 border-black">
                    MOST POPULAR
                </div>
            )}
            <div className={`font-mono font-bold text-xs ${textColor} mb-2`}>{availability}</div>
            <h3 className={`text-2xl md:text-3xl font-extrabold ${textColor} mb-2`}>{name}</h3>
            <div className={`text-xl md:text-2xl font-bold ${textColor} mb-1`}>{price}</div>
            <div className="text-xs text-gray-600 mb-6">{priceNote}</div>
            <ul className="space-y-3">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-green-600 font-bold mt-0.5">✓</span>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function ComparisonTable({ headers, rows }) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full border-[3px] border-black bg-white">
                <thead>
                    <tr className="bg-indigo text-white">
                        {headers.map((header, index) => (
                            <th key={index} className={`px-4 py-4 font-mono font-bold text-xs md:text-sm border-r-2 border-black last:border-r-0 ${index === 0 ? 'text-left min-w-[200px]' : 'text-center min-w-[80px]'}`}>
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className={`${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b-2 border-black last:border-b-0`}>
                            <td className="px-4 py-3 font-semibold text-sm border-r-2 border-black">{row.feature}</td>
                            {['diamond', 'platinum', 'gold', 'silver', 'bronze', 'event'].map((tier, index) => (
                                <td key={index} className="px-4 py-3 text-center border-r-2 border-black last:border-r-0">
                                    {typeof row[tier] === 'boolean' ? (
                                        row[tier] ? (
                                            <span className="text-green-600 font-bold text-lg">✓</span>
                                        ) : (
                                            <span className="text-gray-300">—</span>
                                        )
                                    ) : (
                                        <span className="font-bold text-indigo">{row[tier]}</span>
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function SponsorsPage() {
    const { hero, aboutProgram, eventInfo, whySponsor, packages, comparisonTable, contact } = sponsorsData;

    return (
        <main className="min-h-screen bg-[var(--bone)]">
            {/* Page Header */}
            <PageHeader title="Sponsorship & Exhibition" subtitle={hero.subtitle} />

            {/* About Program Section */}
            <section className="px-4 sm:px-6 md:px-[8%] py-12 sm:py-16 bg-white border-b-[3px] border-black">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-wrap gap-4 sm:gap-6 mb-8">
                        <div className="bg-indigo text-white px-4 py-2 font-mono font-bold text-xs sm:text-sm">
                            InGARSS 2026
                        </div>
                        <div className="bg-terracotta text-white px-4 py-2 font-mono font-bold text-xs sm:text-sm">
                            DECEMBER 1–4, 2026
                        </div>
                        <div className="bg-gold text-black px-4 py-2 font-mono font-bold text-xs sm:text-sm">
                            Hyderabad, INDIA
                        </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-indigo mb-6">
                        {aboutProgram.title}
                    </h2>
                    {aboutProgram.paragraphs.map((para, index) => (
                        <p key={index} className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 max-w-4xl text-justify hyphens-auto break-words" dangerouslySetInnerHTML={{ __html: para }} />
                    ))}
                </div>
            </section>

            {/* Hero Stats Section */}
            <section className="px-4 sm:px-6 md:px-[8%] py-12 sm:py-16 bg-indigo text-white border-b-[3px] border-black">
                <div className="max-w-6xl mx-auto">
                    <p className="text-lg md:text-xl mb-10 max-w-4xl text-center mx-auto">
                        {hero.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
                        <div className="bg-white/10 border-2 border-white/30 p-6 text-center">
                            <div className="text-4xl md:text-5xl font-extrabold text-gold mb-2">{eventInfo.expectedAbstracts}</div>
                            <div className="font-mono text-sm">Expected Abstracts</div>
                        </div>
                        <div className="bg-white/10 border-2 border-white/30 p-6 text-center">
                            <div className="text-4xl md:text-5xl font-extrabold text-gold mb-2">{eventInfo.expectedParticipants}</div>
                            <div className="font-mono text-sm">Expected Participants</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Sponsor Section */}
            <section className="px-4 sm:px-6 md:px-[8%] py-16 md:py-20 bg-white border-b-[3px] border-black">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="inline-block bg-gold text-black font-mono font-bold text-sm px-6 py-3 border-[3px] border-black shadow-[6px_6px_0_black] mb-6">
                            PARTNERSHIP BENEFITS
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo">
                            {whySponsor.title}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whySponsor.benefits.map((benefit, index) => (
                            <BenefitCard key={index} {...benefit} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Sponsorship Packages */}
            <section className="px-4 sm:px-6 md:px-[8%] py-16 md:py-20 bg-[var(--bone)] border-b-[3px] border-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="inline-block bg-terracotta text-white font-mono font-bold text-sm px-6 py-3 border-[3px] border-black shadow-[6px_6px_0_black] mb-6">
                            SPONSORSHIP PACKAGES
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo mb-4">
                            Choose Your Level of Partnership
                        </h2>
                        <p className="text-gray-700 max-w-2xl mx-auto">
                            Flexible packages designed to align with your organizational goals. Custom packages available upon request.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {packages.map((pkg) => (
                            <PackageCard key={pkg.id} {...pkg} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="px-4 sm:px-6 md:px-[8%] py-16 md:py-20 bg-white border-b-[3px] border-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="inline-block bg-indigo text-white font-mono font-bold text-sm px-6 py-3 border-[3px] border-black shadow-[6px_6px_0_var(--gold)] mb-6">
                            COMPARE PACKAGES
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo">
                            Feature Comparison
                        </h2>
                    </div>
                    <ComparisonTable headers={comparisonTable.headers} rows={comparisonTable.rows} />
                </div>
            </section>

            {/* About Hyderabad Section */}
            <section className="px-4 sm:px-6 md:px-[8%] py-16 md:py-20 bg-[var(--bone)] border-b-[3px] border-black">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <span className="inline-block bg-gold text-black font-mono font-bold text-xs px-4 py-2 border-2 border-black shadow-[4px_4px_0_black] mb-6">
                                VENUE CITY
                            </span>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-indigo mb-6">
                                Why Hyderabad?
                            </h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    <strong>Hyderabad</strong>, India's "Cyber City," is a global hub for technology, aerospace, and innovation. Home to major space organizations including <strong>ISRO's National Remote Sensing Centre (NRSC)</strong> and numerous satellite technology companies, it provides the perfect backdrop for InGARSS 2026.
                                </p>
                                <p>
                                    The city hosts offices of <strong>Google, Microsoft, Amazon, Apple</strong>, and major aerospace companies, offering unparalleled networking opportunities for sponsors and exhibitors.
                                </p>
                                <ul className="space-y-2 mt-4">
                                    <li className="flex items-start gap-2">
                                        <span className="text-terracotta font-bold">→</span>
                                        <span>India's largest aerospace ecosystem</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-terracotta font-bold">→</span>
                                        <span>Home to NRSC, ADRIN, and NGRI</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-terracotta font-bold">→</span>
                                        <span>400+ years of rich cultural heritage</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-terracotta font-bold">→</span>
                                        <span>World-class convention facilities</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="border-[3px] border-black shadow-[10px_10px_0_black] overflow-hidden">
                            <img 
                                src="https://images.unsplash.com/photo-1441911645956-df6e9bbc5496?q=80&w=1170&auto=format&fit=crop" 
                                alt="Hyderabad Charminar"
                                className="w-full h-64 md:h-80 object-cover"
                            />
                            <div className="bg-indigo text-white p-4 font-mono text-sm">
                                CHARMINAR • HYDERABAD, INDIA
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="px-4 sm:px-6 md:px-[8%] py-16 md:py-20 bg-terracotta text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-4xl font-extrabold mb-6">
                        {contact.title}
                    </h2>
                    <p className="text-lg mb-8 opacity-90">
                        {contact.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a 
                            href={`mailto:${contact.email}`}
                            className="inline-block bg-white text-terracotta font-mono font-bold px-8 py-4 border-[3px] border-black shadow-[6px_6px_0_black] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-150"
                        >
                             {contact.email}
                        </a>
                    </div>
                    <p className="mt-6 font-mono text-sm opacity-75">
                        {contact.note}
                    </p>
                </div>
            </section>
        </main>
    );
}
