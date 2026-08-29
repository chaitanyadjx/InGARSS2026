'use client';

import PageHeader from "@/components/PageHeader";
import hackathonData from "@/data/hackathon.json";

export default function HackathonPage() {
  const { title, subtitle, theme, status, registrationLink, dates, venue, teamFee, maxTeamSize, eligibility, highlights, phases, prizes, contact } = hackathonData;

  return (
    <main className="min-h-screen bg-[var(--bone)] pb-16 md:pb-24">
      <PageHeader
        title={title}
        subtitle={subtitle}
      />

      {/* Hero Banner Section */}
      <section className="px-5 md:px-[8%] py-10 md:py-14">
        <div className="max-w-5xl mx-auto">
          {/* Main Card */}
          <div className="bg-white border-[3px] border-black p-6 sm:p-10 shadow-[10px_10px_0_var(--terracotta)] relative overflow-hidden mb-12">
            
            {/* Top Status & Logos */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-black/10 pb-6 mb-8">
              <div className="flex items-center gap-3">
                <span className="bg-[var(--indigo)] text-white font-mono font-extrabold text-xs sm:text-sm px-4 py-2 border-2 border-black shadow-[3px_3px_0_black]">
                  IEEE GRSS YP
                </span>
                <span className="bg-[var(--gold)] text-black font-mono font-bold text-xs sm:text-sm px-3 py-2 border-2 border-black">
                  InGARSS 2026
                </span>
              </div>
              
              {/* Status Badge */}
              <div className="bg-[var(--terracotta)] text-white font-mono font-black text-xs sm:text-sm px-4 py-2 border-2 border-black shadow-[3px_3px_0_black] animate-pulse">
                📢 {status}
              </div>
            </div>

            {/* Banner Text */}
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--indigo)] tracking-tight uppercase">
                {title}
              </h2>
              {theme && (
                <div className="inline-block bg-[var(--gold)]/30 text-black font-extrabold text-sm sm:text-base md:text-lg px-4 py-2 border-2 border-black shadow-[3px_3px_0_black]">
                  {theme}
                </div>
              )}
              <p className="text-lg sm:text-xl font-mono font-extrabold text-[var(--terracotta)]">
                {subtitle}
              </p>
              <p className="text-sm sm:text-base text-gray-700 font-semibold">
                🗓️ <span className="font-bold text-black">{dates}</span> | 📍 <span className="font-bold text-black">{venue}</span>
              </p>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t-2 border-black/10 pt-8">
              <div className="bg-[var(--bone)]/60 border-2 border-black p-4 text-center shadow-[4px_4px_0_black]">
                <div className="text-xs font-mono font-bold text-gray-500 uppercase">Team Size</div>
                <div className="text-base sm:text-lg font-black text-black mt-1">👥 {maxTeamSize}</div>
              </div>
              
              <div className="bg-[var(--gold)]/20 border-2 border-black p-4 text-center shadow-[4px_4px_0_black]">
                <div className="text-xs font-mono font-bold text-gray-500 uppercase">Registration Fee</div>
                <div className="text-base sm:text-lg font-black text-[var(--terracotta)] mt-1">💳 {teamFee} / Team</div>
              </div>

              <div className="bg-[var(--bone)]/60 border-2 border-black p-4 text-center shadow-[4px_4px_0_black]">
                <div className="text-xs font-mono font-bold text-gray-500 uppercase">Who Can Participate?</div>
                <div className="text-base sm:text-lg font-black text-black mt-1">🎓 {eligibility}</div>
              </div>
            </div>

          </div>

          {/* Highlights Grid */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-black uppercase tracking-tight mb-8 text-center">
              Key Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border-[3px] border-black p-6 shadow-[6px_6px_0_black] hover:shadow-[8px_8px_0_var(--indigo)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="font-mono text-base font-extrabold text-[var(--indigo)] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathon Phases Section */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-black uppercase tracking-tight mb-8 text-center">
              Hackathon Phases
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {phases.map((phase, idx) => (
                <div
                  key={idx}
                  className="bg-white border-[3px] border-black p-6 sm:p-8 shadow-[8px_8px_0_black] relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="bg-[var(--indigo)] text-white font-mono font-extrabold text-xs px-3 py-1 border border-black">
                        {phase.phase}
                      </span>
                      <span className="bg-[var(--gold)] text-black font-mono font-bold text-xs px-3 py-1 border border-black">
                        {phase.mode}
                      </span>
                    </div>

                    <h4 className="text-xl font-extrabold text-black mb-2">
                      {phase.tagline}
                    </h4>

                    {phase.date && (
                      <p className="text-xs font-mono font-bold text-[var(--terracotta)] mb-3">
                        📅 {phase.date}
                      </p>
                    )}

                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                      {phase.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <span className="text-xs font-mono font-bold text-gray-500">
                      {idx === 0 ? "Step 1: Submission Round" : "Step 2: Grand Finale"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cash Prizes Section */}
          <div className="mb-16">
            <div className="bg-[var(--indigo)] text-white border-[3px] border-black p-8 sm:p-10 shadow-[10px_10px_0_black]">
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-center mb-2 tracking-tight text-[var(--gold)]">
                🏆 Exciting Cash Prizes
              </h3>
              <p className="text-center text-xs sm:text-sm font-mono opacity-80 mb-8">
                *All prizes are per team
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {prizes.map((prize, idx) => (
                  <div
                    key={idx}
                    className="bg-white text-black border-[3px] border-black p-6 text-center shadow-[6px_6px_0_black] flex flex-col justify-between"
                  >
                    <div>
                      <div className="inline-block bg-[var(--gold)] text-black font-mono font-bold text-xs px-3 py-1 border border-black mb-3">
                        {prize.badge}
                      </div>
                      <h4 className="font-mono text-sm font-black text-gray-800 uppercase tracking-wider mb-2">
                        {prize.rank}
                      </h4>
                    </div>

                    <div>
                      <div className="text-3xl sm:text-4xl font-black text-[var(--terracotta)] my-3">
                        {prize.amount}
                      </div>
                      <p className="text-xs font-mono font-semibold text-gray-600">
                        ({prize.note})
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact / Registration CTA Section */}
          <div className="bg-white border-[3px] border-black p-8 text-center shadow-[8px_8px_0_var(--terracotta)]">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--indigo)] mb-3">
              Ready to Innovate?
            </h3>
            <p className="text-sm text-gray-700 mb-6 font-medium max-w-lg mx-auto">
              Gather your team of up to 3 members and register for the YP Hackathon Challenge now!
            </p>

            <a
              href={registrationLink || "https://in.eregnow.com/ticketing/register/login/yphackathon"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[var(--terracotta)] text-white font-mono font-bold text-sm sm:text-base px-8 py-4 border-[3px] border-black shadow-[6px_6px_0_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_black] transition-all mb-6"
            >
              REGISTER FOR YP HACKATHON →
            </a>

            <div className="flex flex-wrap justify-center items-center gap-6 pt-6 border-t-2 border-black/10 text-xs sm:text-sm font-mono text-gray-800">
              <div>
                🌐 <a href={`https://${contact.website}`} target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-[var(--terracotta)]">{contact.website}</a>
              </div>
              <div>
                ✉️ <a href={`mailto:${contact.email}`} className="font-bold underline hover:text-[var(--terracotta)]">{contact.email}</a>
              </div>
              <div className="font-bold text-[var(--indigo)]">
                {contact.hashtag}
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
