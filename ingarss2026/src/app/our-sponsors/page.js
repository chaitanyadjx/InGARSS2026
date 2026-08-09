'use client';

import PageHeader from '@/components/PageHeader';

export default function OurSponsorsPage() {
    return (
        <main className="min-h-screen bg-[var(--bone)]">
            {/* Page Header */}
            <PageHeader title="Our Sponsors" subtitle="Partners of InGARSS 2026" />

            {/* Our Sponsors Section */}
            <section className="px-4 sm:px-6 md:px-[8%] py-16 md:py-20 bg-white border-b-[3px] border-black text-center min-h-[60vh]">
                <div className="max-w-6xl mx-auto">
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed">
                        We are immensely grateful to our sponsors for their generous support and commitment to advancing the field of Geoscience and Remote Sensing. Their partnership makes InGARSS 2026 possible.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-extrabold text-indigo mb-10">
                        Diamond Sponsor
                    </h2>
                    <div className="flex justify-center items-center mb-20 relative z-10">
                        <div className="bg-gradient-to-br from-white to-cyan-50 border-[4px] border-cyan-500 p-10 md:p-14 shadow-[12px_12px_0_#06b6d4] hover:-translate-y-2 hover:-translate-x-1 hover:shadow-[18px_18px_0_#0891b2] transition-all duration-300 max-w-lg w-full relative overflow-hidden group">
                            
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/80 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>

                            <img src="/assets/sponser_grss_logo.png" alt="GRSS" className="w-full h-auto object-contain max-h-48 relative z-10 drop-shadow-sm" />
                        </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-extrabold text-indigo mb-12">
                        Gold Sponsor
                    </h2>
                    <div className="flex justify-center items-center">
                        <div className="bg-white border-[3px] border-black p-8 shadow-[10px_10px_0_var(--gold)] hover:-translate-y-2 hover:shadow-[15px_15px_0_var(--gold)] transition-all duration-300 max-w-md w-full">
                            <img src="/assets/corteva.png" alt="Corteva Agriscience" className="w-full h-auto mb-6 object-contain max-h-48" />
                            <h3 className="text-2xl font-bold text-indigo">Corteva Agriscience</h3>
                            <p className="text-gray-600 font-mono text-md mt-2">Gold Tier Partner</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
