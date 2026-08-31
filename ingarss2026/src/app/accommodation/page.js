'use client';

import PageHeader from "@/components/PageHeader";
import accommodationData from "@/data/accommodation.json";

export default function AccommodationPage() {
  const { title, subtitle, intro, hotels } = accommodationData;

  return (
    <main className="min-h-screen bg-[var(--bone)] pb-16 md:pb-24">
      <PageHeader
        title={title}
        subtitle={subtitle}
      />

      <section className="px-5 md:px-[8%] py-10 md:py-16">
        <div className="max-w-6xl mx-auto space-y-10">

          {/* Intro Notice Banner */}
          <div className="bg-white border-[3px] border-black p-6 sm:p-8 shadow-[8px_8px_0_black]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="inline-block bg-[var(--gold)] text-black font-mono font-bold text-xs px-3 py-1 border border-black mb-2 uppercase">
                  Delegates Accommodation Guide
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--indigo)]">
                  RECOMMENDED HOTELS NEAR THE PARK HYDERABAD
                </h2>
                <p className="text-sm sm:text-base text-gray-700 font-medium mt-1">
                  {intro}
                </p>
              </div>
              <div className="shrink-0">
                <span className="inline-flex items-center gap-2 bg-[var(--bone)] text-black font-mono font-bold text-xs px-4 py-2 border border-black">
                  📍 Somajiguda, Hyderabad
                </span>
              </div>
            </div>
          </div>

          {/* Hotels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className={`bg-white border-[3px] border-black p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 ${
                  hotel.isVenue
                    ? "shadow-[8px_8px_0_var(--terracotta)] ring-2 ring-[var(--terracotta)]"
                    : "shadow-[8px_8px_0_black]"
                }`}
              >
                <div>
                  {/* Badges & Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="bg-black text-white font-mono font-bold text-xs px-2.5 py-0.5 border border-black">
                      #{hotel.id}
                    </span>
                    {hotel.isVenue && (
                      <span className="bg-[var(--terracotta)] text-white font-mono font-bold text-xs px-3 py-0.5 border border-black uppercase tracking-wider">
                        ★ {hotel.tag}
                      </span>
                    )}
                    {hotel.badge && (
                      <span className="bg-[var(--gold)] text-black font-mono font-bold text-xs px-2.5 py-0.5 border border-black">
                        {hotel.badge}
                      </span>
                    )}
                  </div>

                  {/* Hotel Image */}
                  {hotel.image && (
                    <div className="relative mb-5 border-[2px] border-black overflow-hidden bg-gray-100 shadow-[4px_4px_0_black]">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-48 sm:h-56 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Hotel Name */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-black mb-3">
                    {hotel.name}
                  </h3>

                  {/* Address */}
                  <div className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-gray-700 mb-4 bg-[var(--bone)] p-3 border border-black/20">
                    <span className="shrink-0">📍</span>
                    <span>{hotel.address}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-800 font-medium leading-relaxed mb-6">
                    {hotel.description}
                  </p>
                </div>

                {/* Booking Button */}
                <div className="pt-4 border-t border-gray-200">
                  <a
                    href={hotel.bookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center font-mono font-bold text-xs sm:text-sm px-5 py-3.5 border-[2px] border-black transition-all ${
                      hotel.isVenue
                        ? "bg-[var(--terracotta)] text-white shadow-[4px_4px_0_black] hover:bg-black hover:text-white"
                        : "bg-[var(--gold)] text-black shadow-[4px_4px_0_black] hover:bg-black hover:text-white"
                    }`}
                  >
                    BOOK YOUR STAY: Book Direct – {hotel.name.split(' (')[0]} →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Booking Notice */}
          <div className="bg-[var(--indigo)] text-white border-[3px] border-black p-6 sm:p-8 shadow-[8px_8px_0_black]">
            <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2">
              Important Booking Information for Conference Delegates
            </h3>
            <p className="text-xs sm:text-sm text-gray-200 font-medium leading-relaxed">
              Delegates are advised to book their accommodation early to secure preferred rates and availability during the conference period. Direct links above take you directly to the official hotel reservation portals.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
