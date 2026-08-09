'use client';

import PageHeader from '@/components/PageHeader';

export default function WorkshopPage() {
    return (
        <main className="min-h-screen bg-[var(--bone)] flex flex-col">
            <PageHeader title="Workshop" subtitle="InGARSS 2026 Workshops" />

            <section className="flex-grow flex items-center justify-center px-4 py-20">
                <div className="text-center bg-white border-[3px] border-black p-10 md:p-16 shadow-[10px_10px_0_var(--indigo)] max-w-2xl">
                    <div className="inline-block bg-gold text-black font-mono font-bold px-4 py-2 border-2 border-black mb-6">
                        UPDATE
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-indigo mb-6 uppercase">
                        Coming Soon
                    </h2>
                    <p className="text-lg text-gray-700">
                        Details about the workshops will be announced shortly. Please check back later.
                    </p>
                </div>
            </section>
        </main>
    );
}
