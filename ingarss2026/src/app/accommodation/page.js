'use client';

import PageHeader from "@/components/PageHeader";

export default function AccommodationPage() {
  return (
    <main className="min-h-screen bg-[var(--bone)] pb-16 md:pb-24 flex flex-col">
      <PageHeader
        title="Accommodation"
        subtitle="Hotel Recommendations & Accommodation Options for InGARSS 2026 Delegates"
      />

      <section className="px-5 md:px-[8%] py-12 md:py-20 flex-grow flex items-center justify-center">
        <div className="w-full max-w-3xl text-center bg-white border-[3px] border-black p-8 sm:p-14 shadow-[10px_10px_0_var(--terracotta)]">
          <div className="inline-block bg-[var(--gold)] text-black font-mono font-bold text-xs sm:text-sm px-4 py-1.5 border border-black mb-6 uppercase">
            Status Update
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[var(--terracotta)] mb-6 uppercase tracking-tight">
            Will be updated soon...
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-800 font-medium leading-relaxed max-w-xl mx-auto mb-8">
            Accommodation details and hotel options for InGARSS 2026 delegates will be communicated soon. Please check back later.
          </p>
          <div className="inline-block bg-[var(--bone)] p-4 border border-black text-xs sm:text-sm text-gray-800 font-medium">
            For accommodation inquiries, please contact{" "}
            <a href="mailto:ingarss2026@gmail.com" className="font-bold text-[var(--terracotta)] underline">
              ingarss2026@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

