'use client';

import PageHeader from '@/components/PageHeader';

export default function FamilyCaresGrantPage() {
  const applyLink = 'https://docs.google.com/forms/d/e/1FAIpQLScqRqYCFH-sNnbL_pMg7o_fXft_se_tQvJ4FcH1Ho85cWkY-w/viewform?pli=1';

  return (
    <main className="min-h-screen bg-[var(--bone)] pb-16 md:pb-24">
      <PageHeader
        title="Family Cares Grant"
        subtitle="IEEE GRSS IDEA Family Cares Grant Program — InGARSS 2026"
      />

      {/* Main Showcase Section */}
      <section className="px-4 sm:px-6 md:px-[8%] py-10 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Top Badges */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
            <span className="bg-[var(--indigo)] text-white px-3.5 py-1.5 font-mono font-bold text-xs sm:text-sm border-2 border-black">
              IEEE GRSS IDEA
            </span>
            <span className="bg-[var(--terracotta)] text-white px-3.5 py-1.5 font-mono font-bold text-xs sm:text-sm border-2 border-black">
              InGARSS 2026
            </span>
            <span className="bg-[var(--gold)] text-black px-3.5 py-1.5 font-mono font-bold text-xs sm:text-sm border-2 border-black">
              DEADLINE: OCTOBER 15, 2026
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="bg-white border-[3px] border-black p-6 sm:p-8 shadow-[8px_8px_0_black]">
                <span className="font-mono font-bold text-xs text-[var(--terracotta)] uppercase tracking-wider block mb-2">
                  Special Support Initiative
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black leading-tight mb-4">
                  Don’t let caregiving responsibilities hold you back!
                </h2>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[var(--indigo)] leading-snug mb-4">
                  Are you an IEEE GRSS member with family care responsibilities attending InGARSS 2026?
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify mb-4">
                  The <strong>IEEE GRSS IDEA (Inspire, Develop, Empower, Advance)</strong> committee is proud to present the <strong>Family Cares Grant Program</strong> for InGARSS 2026 in Hyderabad.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                  Attending academic and professional conferences while managing family obligations can be challenging. This grant provides vital financial assistance to attendees who have dependent care, childcare, or eldercare duties, helping ensure equitable access to global scientific exchange.
                </p>
              </div>

              {/* Key Details Card */}
              <div className="bg-white border-[3px] border-black p-6 sm:p-8 shadow-[8px_8px_0_var(--gold)]">
                <h4 className="font-mono font-black text-xs sm:text-sm text-[var(--indigo)] uppercase tracking-wider mb-4 border-b-2 border-black pb-2">
                  Program Highlights &amp; Deadlines
                </h4>
                <ul className="space-y-3.5 text-xs sm:text-sm text-gray-800">
                  <li className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-[var(--gold)] text-black font-black flex items-center justify-center border border-black text-xs">
                      ✓
                    </span>
                    <span>
                      <strong>Eligibility:</strong> Open to active IEEE GRSS members with family care or caregiving duties attending InGARSS 2026.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-[var(--terracotta)] text-white font-black flex items-center justify-center border border-black text-xs">
                      📅
                    </span>
                    <span>
                      <strong>Application Deadline:</strong> <span className="text-[var(--terracotta)] font-extrabold text-sm sm:text-base">October 15, 2026</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-[var(--indigo)] text-white font-black flex items-center justify-center border border-black text-xs">
                      🎯
                    </span>
                    <span>
                      <strong>Purpose:</strong> Providing support to alleviate caregiving barriers for in-person symposium participation.
                    </span>
                  </li>
                </ul>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 mt-6 border-t-2 border-black/10">
                  <a
                    href={applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center font-mono font-bold text-xs sm:text-sm bg-[var(--terracotta)] text-white px-6 py-4 border-[3px] border-black shadow-[4px_4px_0_black] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_black] transition-all"
                  >
                    APPLY NOW (GOOGLE FORM) →
                  </a>
                  <a
                    href="/assets/family-cares-grant.png"
                    download="IEEE-GRSS-IDEA-Family-Cares-Grant.png"
                    className="text-center font-mono font-bold text-xs sm:text-sm bg-white text-black px-5 py-4 border-[3px] border-black shadow-[4px_4px_0_black] hover:bg-gray-100 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_black] transition-all"
                  >
                    DOWNLOAD FLYER ↓
                  </a>
                </div>
              </div>
            </div>

            {/* Right Flyer Column */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full bg-white border-[3px] border-black shadow-[10px_10px_0_black] overflow-hidden">
                <div className="bg-[var(--indigo)] text-white font-mono font-bold text-xs py-2 px-4 text-center border-b-2 border-black">
                  OFFICIAL CALL FLYER • SCAN QR CODE OR APPLY ONLINE
                </div>
                <div className="p-3 sm:p-4 bg-slate-50 flex justify-center items-center">
                  <a
                    href={applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group relative overflow-hidden border-2 border-black cursor-pointer"
                    title="Click to open application form"
                  >
                    <img
                      src="/assets/family-cares-grant.png"
                      alt="IEEE GRSS IDEA Family Cares Grant Program"
                      className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-mono font-extrabold text-sm p-4 text-center">
                      CLICK TO OPEN APPLICATION FORM →
                    </div>
                  </a>
                </div>
                <div className="p-4 bg-[var(--bone)] border-t-2 border-black text-center">
                  <p className="text-xs text-gray-700 font-medium mb-3">
                    Scan the QR code on the flyer or click below to submit your application.
                  </p>
                  <a
                    href={applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full font-mono font-bold text-xs sm:text-sm bg-[var(--gold)] text-black px-4 py-3 border-2 border-black shadow-[3px_3px_0_black] hover:bg-[var(--gold)]/90 transition-all text-center"
                  >
                    OPEN GOOGLE FORM TO APPLY →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

