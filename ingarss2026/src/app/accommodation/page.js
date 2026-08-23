'use client';

import PageHeader from "@/components/PageHeader";
import Link from 'next/link';

export default function AccommodationPage() {
  const hotels = [
    {
      name: "The Park Hyderabad (Official Venue)",
      category: "5-Star Luxury Boutique",
      distance: "Official Conference Venue",
      address: "22, Raj Bhavan Rd, Somajiguda, Hyderabad, Telangana 500082",
      features: "Lake view rooms, luxury amenities, direct access to conference halls",
      link: "https://www.theparkhotels.com/hyderabad.html"
    },
    {
      name: "Taj Krishna Hyderabad",
      category: "5-Star Deluxe",
      distance: "~ 1.5 km from venue",
      address: "Road No. 1, Banjara Hills, Hyderabad, Telangana 500034",
      features: "Sprawling gardens, premium hospitality, fine dining options",
      link: "https://www.tajhotels.com"
    },
    {
      name: "Mercure Hyderabad KCP",
      category: "4-Star Business",
      distance: "~ 1.0 km from venue",
      address: "6-3-551, Somajiguda, Hyderabad, Telangana 500082",
      features: "Modern rooms, fitness centre, walking distance to venue",
      link: "https://all.accor.com"
    },
    {
      name: "Katriya Hotel & Towers",
      category: "3-Star / Business",
      distance: "~ 0.8 km from venue",
      address: "8-2-686/8/6/A, Raj Bhavan Road, Somajiguda, Hyderabad",
      features: "Comfortable rooms, convenient central location, economical rates",
      link: "#"
    }
  ];

  return (
    <main className="min-h-screen bg-[var(--bone)] pb-16 md:pb-24">
      <PageHeader
        title="Accommodation"
        subtitle="Hotel Recommendations & Accommodation Options for InGARSS 2026 Delegates"
      />

      <section className="px-5 md:px-[8%] py-10 md:py-16">
        <div className="max-w-5xl mx-auto space-y-10">

          {/* Banner Notice */}
          <div className="bg-[var(--gold)]/30 border-[3px] border-black p-6 sm:p-8 shadow-[8px_8px_0_black]">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <div className="inline-block bg-black text-white font-mono font-bold text-xs px-3 py-1 border border-black mb-2">
                  CONFERENCE VENUE HOTEL
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-black">
                  The Park Hyderabad
                </h3>
                <p className="text-sm sm:text-base text-gray-800 font-medium mt-1">
                  Raj Bhavan Road, Somajiguda, Hyderabad, Telangana 500082
                </p>
              </div>
              <Link
                href="/#venue"
                className="inline-block bg-[var(--indigo)] text-white font-mono font-bold text-xs sm:text-sm px-6 py-3 border-[2px] border-black shadow-[4px_4px_0_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all whitespace-nowrap"
              >
                VIEW VENUE DETAILS →
              </Link>
            </div>
          </div>

          {/* Hotel Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {hotels.map((hotel, idx) => (
              <div
                key={idx}
                className="bg-white border-[3px] border-black p-6 shadow-[8px_8px_0_black] flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start gap-2 mb-3">
                    <span className="inline-block bg-[var(--indigo)]/10 text-[var(--indigo)] font-mono font-bold text-xs px-2.5 py-1 border border-black">
                      {hotel.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-[var(--terracotta)]">
                      {hotel.distance}
                    </span>
                  </div>

                  <h4 className="text-lg font-extrabold text-black mb-2">
                    {hotel.name}
                  </h4>

                  <p className="text-xs text-gray-600 mb-3 font-medium">
                    📍 {hotel.address}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-800 font-medium bg-[var(--bone)] p-3 border border-black mb-4">
                    ✨ {hotel.features}
                  </p>
                </div>

                {hotel.link !== "#" && (
                  <a
                    href={hotel.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center font-mono font-bold text-xs bg-black text-white py-2.5 border border-black hover:bg-[var(--terracotta)] transition-colors"
                  >
                    VISIT HOTEL WEBSITE →
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Assistance Box */}
          <div className="bg-white border-[3px] border-black p-6 sm:p-8 shadow-[8px_8px_0_black] text-center">
            <h3 className="text-xl font-extrabold text-black mb-2">
              Need Assistance with Hotel Booking?
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 font-medium max-w-xl mx-auto mb-4">
              Special negotiated rates for InGARSS 2026 delegates will be communicated to registered participants. For room reservation assistance, please contact the secretariat team.
            </p>
            <a
              href="mailto:ingarss2026@gmail.com"
              className="inline-block bg-[var(--terracotta)] text-white font-mono font-bold text-xs sm:text-sm px-6 py-3 border-[2px] border-black shadow-[4px_4px_0_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              CONTACT SECRETARIAT: ingarss2026@gmail.com
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
