'use client';

import { useState, useEffect } from 'react';

export default function RegistrationPage() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    // Trigger hero entrance animation
    const timer = setTimeout(() => setHeroVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = (index) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  const infoCards = [
    {
      title: "Symposium Inclusions",
      subtitle: "Every paid registration includes:",
      items: [
        "Admission to all Technical Sessions",
        "Digital Proceedings via IEEE Xplore",
        "Symposium Kit & Materials",
        "Banquet & Networking Events"
      ]
    },
    {
      title: "Standard Categories",
      subtitle: "Pricing tiers will include:",
      items: [
        "IEEE GRSS Member (Discounted)",
        "IEEE Member / Non-Member",
        "Student / Young Professional",
        "Life Member / Life Fellow"
      ]
    },
    {
      title: "The Process",
      subtitle: null,
      description: "Registration ensures your participation is officially recorded in the IEEE database."
    }
  ];

  return (
    <main className="min-h-screen bg-[var(--bone)]">
      {/* Page Header */}
      <header className="bg-[var(--indigo)] text-white py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-[8%] border-b-[3px] border-black">
        <span className="font-mono text-[var(--gold)] font-bold uppercase text-xs sm:text-sm tracking-[0.2em]">
          // REGISTRATION PORTAL
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] uppercase leading-[0.85] tracking-tight font-extrabold mt-4 sm:mt-6">
          Join the <br /> Symposium
        </h1>
      </header>

      {/* Content Container */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-[8%] max-w-[1400px] mx-auto">
        
        {/* Launch Hero Section */}
        <div 
          className={`bg-white border-[3px] border-black p-6 sm:p-8 md:p-10 lg:p-14 mb-10 sm:mb-12 lg:mb-16 shadow-[10px_10px_0_var(--terracotta)] sm:shadow-[15px_15px_0_var(--terracotta)] transition-all duration-700 ease-out
            ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Status Badge */}
          <div className="font-mono bg-black text-white px-3 sm:px-4 py-2 sm:py-2.5 w-fit font-bold uppercase text-xs sm:text-sm flex items-center gap-2 sm:gap-3">
            <span className="w-2 h-2 bg-[var(--gold)] rounded-full animate-pulse"></span>
            Status: Pre-Launch Phase
          </div>

          {/* Launch Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[var(--indigo)] leading-none uppercase tracking-tight mt-6 sm:mt-8">
            Opening <br /> January 2026
          </h2>

          {/* Description */}
          <p className="max-w-[750px] text-base sm:text-lg lg:text-xl font-medium text-[var(--indigo)] mt-6 sm:mt-8 leading-relaxed">
            We are finalizing the portal to accommodate local and international attendees. Registration is scheduled to begin alongside the Call for Papers.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {infoCards.map((card, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={`bg-white border-[3px] border-black p-6 sm:p-8 lg:p-10 cursor-pointer transition-all duration-150 ease-out
                ${selectedCard === index 
                  ? 'translate-x-[-8px] translate-y-[-8px] sm:translate-x-[-10px] sm:translate-y-[-10px] shadow-[18px_18px_0_var(--terracotta)] sm:shadow-[22px_22px_0_var(--terracotta)]' 
                  : 'shadow-[10px_10px_0_var(--black)] sm:shadow-[12px_12px_0_var(--black)] hover:translate-x-[-10px] hover:translate-y-[-10px] hover:shadow-[22px_22px_0_var(--terracotta)]'
                }`}
            >
              <h3 className="font-mono uppercase text-[var(--terracotta)] mb-4 sm:mb-6 text-lg sm:text-xl lg:text-2xl font-extrabold border-b-[0.25rem] border-black pb-2 w-fit">
                {card.title}
              </h3>

              {card.subtitle && (
                <p className="mb-4 sm:mb-6 font-semibold text-sm sm:text-base">
                  {card.subtitle}
                </p>
              )}

              {card.items ? (
                <ul className="space-y-3 sm:space-y-4">
                  {card.items.map((item, i) => (
                    <li key={i} className="text-sm sm:text-base lg:text-lg pl-6 sm:pl-8 relative font-medium">
                      <span className="absolute left-0 text-[var(--gold)] font-extrabold font-mono">//</span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  {card.description}
                </p>
              )}
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}
