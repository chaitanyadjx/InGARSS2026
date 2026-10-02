'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import workshopsData from '@/data/workshops.json';

export default function WorkshopPage() {
  // Store expanded state for each workshop by ID
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allOpen = {};
    workshopsData.forEach((w) => {
      allOpen[w.id] = true;
    });
    setOpenItems(allOpen);
  };

  const collapseAll = () => {
    setOpenItems({});
  };

  return (
    <main className="min-h-screen bg-[var(--bone)] pb-16 md:pb-24">
      <PageHeader
        title="Workshops & Tutorials"
        subtitle="Explore specialized hands-on sessions and technical workshops at InGARSS 2026"
      />

      <section className="px-3 sm:px-5 md:px-[8%] py-8 sm:py-10 md:py-14">
        <div className="w-full max-w-5xl mx-auto">

          {/* Workshop Registration Section */}
          <div className="bg-white border-[3px] border-black p-4 sm:p-6 md:p-8 shadow-[6px_6px_0_var(--terracotta)] sm:shadow-[8px_8px_0_var(--terracotta)] mb-8 sm:mb-10">
            <div className="flex min-w-0 flex-col md:flex-row justify-between items-start md:items-center gap-5 sm:gap-6">
              <div className="min-w-0 w-full">
                <div className="inline-block bg-[var(--gold)] text-black font-mono font-bold text-xs px-3 py-1 border border-black mb-3">
                  WORKSHOP REGISTRATION
                </div>
                <h3 className="text-lg sm:text-2xl font-extrabold text-[var(--indigo)] mb-2 break-words">
                  1-Day Tutorial Workshop (1st December 2026)
                </h3>
                <p className="text-sm sm:text-base text-gray-700 font-medium break-words">
                  Registration Fee: <span className="font-bold text-black">₹ 2,500</span> (Indian) / <span className="font-bold text-black">$50</span> (International)
                </p>
                <p className="mt-1 text-xs sm:text-sm text-gray-600 font-medium italic break-words">
                  Registration Fee includes: Registration kit, Refreshments, Lunch and a participation certificate
                </p>
                <p className="mt-2 text-sm sm:text-base text-gray-800 font-bold break-words">
                  Workshop registration deadline: 15 October 2026
                </p>
              </div>
              
              <div className="shrink-0 w-full md:w-auto text-center md:text-right">
                <a
                  href="https://in.eregnow.com/ticketing/register/ingarss2026?_rid=31732&_single=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full md:w-auto bg-[var(--terracotta)] text-white font-mono font-bold text-sm sm:text-base px-8 py-4 border-[3px] border-black shadow-[6px_6px_0_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_black] transition-all text-center"
                >
                  REGISTER FOR WORKSHOP →
                </a>
              </div>
            </div>
          </div>



          {/* Workshop Accordion List */}
          <div className="space-y-6">
            {workshopsData.map((workshop, index) => {
              const isOpen = !!openItems[workshop.id];

              return (
                <div
                  key={workshop.id}
                  className="border-[3px] border-black shadow-[6px_6px_0_black] bg-white overflow-hidden transition-all"
                >
                  {/* Clickable Title Bar - Clean Desktop & Mobile Alignment */}
                  <button
                    onClick={() => toggleItem(workshop.id)}
                    className="w-full min-w-0 text-left p-3 sm:p-6 bg-white hover:bg-slate-50 transition-colors flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 flex-1 min-w-0">
                      <span className="inline-block bg-[var(--indigo)] text-white font-mono font-bold text-[10px] sm:text-sm px-2 sm:px-3 py-1 border-2 border-black shrink-0 whitespace-nowrap">
                        Workshop #{index + 1}
                      </span>
                      <h3 className="w-full text-sm sm:text-xl font-extrabold text-black group-hover:text-[var(--terracotta)] transition-colors leading-snug min-w-0 break-words">
                        {workshop.title}
                      </h3>
                    </div>

                    <div className="flex w-full sm:w-auto flex-row sm:flex-col items-center sm:items-end justify-between gap-2 sm:gap-1 shrink-0">
                      {workshop.date && (
                        <span className="max-w-[calc(100%-2.5rem)] text-[10px] sm:text-xs font-mono font-bold text-[var(--indigo)] bg-[var(--gold)]/20 px-2 py-0.5 border border-black whitespace-normal sm:whitespace-nowrap leading-tight">
                          {workshop.date} | {workshop.time}
                        </span>
                      )}
                      <span className="text-xs font-bold font-mono hidden sm:inline-block text-black/60">
                        {isOpen ? 'HIDE' : 'VIEW DETAILS'}
                      </span>
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-black flex items-center justify-center bg-[var(--gold)] text-black text-xs sm:text-sm transition-transform duration-300 ${
                          isOpen ? 'rotate-180 bg-[var(--terracotta)] text-white' : 'rotate-0'
                        }`}
                      >
                        ▼
                      </div>
                    </div>
                  </button>

                  {/* Expandable Details Area - Optimized for Mobile */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-3 sm:p-6 md:p-8 border-t-[3px] border-black bg-[var(--bone)]/40 space-y-5 sm:space-y-6">
                      {/* Topics (if present) */}
                      {workshop.topics && workshop.topics.length > 0 && (
                        <div>
                          <h4 className="text-sm sm:text-lg font-extrabold text-[var(--indigo)] uppercase tracking-wider mb-3 flex items-center gap-2">
                            <span className="w-3 h-3 bg-[var(--terracotta)] inline-block border border-black shrink-0"></span>
                            Topics Covered
                          </h4>
                          <ol className="space-y-2.5">
                            {workshop.topics.map((topic, tIdx) => (
                              <li key={tIdx} className="flex items-start gap-2.5 sm:gap-3">
                                <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[var(--indigo)] text-white text-[10px] sm:text-xs font-mono font-bold flex items-center justify-center mt-0.5 border border-black">
                                  {tIdx + 1}
                                </span>
                                <span className="text-xs sm:text-base text-gray-800 font-medium leading-relaxed break-words">
                                  {topic}
                                </span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}

                      {/* Sessions (if present) */}
                      {workshop.sessions && workshop.sessions.length > 0 && (
                        <div>
                          <h4 className="text-sm sm:text-lg font-extrabold text-[var(--indigo)] uppercase tracking-wider mb-3 flex items-center gap-2">
                            <span className="w-3 h-3 bg-[var(--terracotta)] inline-block border border-black shrink-0"></span>
                            Session Schedule
                          </h4>
                          <div className="grid gap-3">
                            {workshop.sessions.map((session, sIdx) => (
                              <div
                                key={sIdx}
                                className="bg-white border-2 border-black p-3 sm:p-4 shadow-[3px_3px_0_black] font-bold text-xs sm:text-base text-gray-900 break-words leading-relaxed"
                              >
                                {session}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Description (if present) */}
                      {workshop.description && (
                        <div>
                          <h4 className="text-sm sm:text-lg font-extrabold text-[var(--indigo)] uppercase tracking-wider mb-3 flex items-center gap-2">
                            <span className="w-3 h-3 bg-[var(--gold)] inline-block border border-black shrink-0"></span>
                            Overview & Objectives
                          </h4>
                          <p className="text-xs sm:text-base text-gray-800 leading-relaxed bg-white p-4 sm:p-6 border-2 border-black shadow-[3px_3px_0_black] break-words">
                            {workshop.description}
                          </p>
                        </div>
                      )}

                      {/* Speaker / Speakers */}
                      {workshop.speakers && workshop.speakers.length > 0 && (
                        <div>
                          <h4 className="text-sm sm:text-lg font-extrabold text-[var(--indigo)] uppercase tracking-wider mb-4 flex items-center gap-2">
                            <span className="w-3 h-3 bg-[var(--indigo)] inline-block border border-black shrink-0"></span>
                            {workshop.speakers.length > 1 ? 'Speakers' : 'Speaker'}
                          </h4>

                          <div className="grid gap-4">
                            {workshop.speakers.map((speaker, spIdx) => (
                              <div
                                key={spIdx}
                                className="bg-white border-2 border-black p-4 sm:p-5 shadow-[4px_4px_0_black] space-y-2"
                              >
                                <div className="flex flex-wrap items-baseline gap-2">
                                  <span className="text-base sm:text-lg font-black text-black break-words">
                                    {speaker.name}
                                  </span>
                                  {speaker.role && (
                                    <span className="text-[10px] sm:text-xs font-mono font-bold bg-[var(--gold)]/30 text-black px-2 py-0.5 border border-black">
                                      {speaker.role}
                                    </span>
                                  )}
                                </div>

                                {speaker.designation && (
                                  <p className="text-xs sm:text-sm font-semibold text-[var(--terracotta)] break-words">
                                    {speaker.designation}
                                  </p>
                                )}

                                {speaker.affiliation && (
                                  <p className="text-xs sm:text-sm text-gray-700 font-medium break-words">
                                    {speaker.affiliation}
                                  </p>
                                )}

                                {speaker.bio && (
                                  <div className="mt-3 pt-3 border-t border-gray-200">
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed break-words [overflow-wrap:anywhere]">
                                      <strong className="text-black font-bold">Bio: </strong>
                                      {speaker.bio}
                                    </p>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
