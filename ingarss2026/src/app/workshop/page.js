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

      <section className="px-5 md:px-[8%] py-10 md:py-14">
        <div className="max-w-5xl mx-auto">
          {/* Top Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-black uppercase tracking-tight">
                Pre-Conference Workshops
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-medium mt-1">
                Click on any workshop title to view details, topics, and speakers.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={expandAll}
                className="px-4 py-2 text-xs sm:text-sm font-bold bg-white text-black border-2 border-black shadow-[3px_3px_0_black] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_black] transition-all"
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="px-4 py-2 text-xs sm:text-sm font-bold bg-white text-black border-2 border-black shadow-[3px_3px_0_black] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_black] transition-all"
              >
                Collapse All
              </button>
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
                  {/* Clickable Title Bar */}
                  <button
                    onClick={() => toggleItem(workshop.id)}
                    className="w-full text-left p-5 sm:p-6 bg-white hover:bg-slate-50 transition-colors flex items-start justify-between gap-4 group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-block bg-[var(--indigo)] text-white font-mono font-bold text-xs sm:text-sm px-3 py-1 border-2 border-black shrink-0">
                        Workshop #{index + 1}
                      </span>
                      <h3 className="text-lg sm:text-xl font-extrabold text-black group-hover:text-[var(--terracotta)] transition-colors leading-snug">
                        {workshop.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 pt-1">
                      <span className="text-xs font-bold font-mono hidden sm:inline-block text-black/60">
                        {isOpen ? 'HIDE' : 'VIEW DETAILS'}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full border-2 border-black flex items-center justify-center bg-[var(--gold)] text-black transition-transform duration-300 ${
                          isOpen ? 'rotate-180 bg-[var(--terracotta)] text-white' : 'rotate-0'
                        }`}
                      >
                        ▼
                      </div>
                    </div>
                  </button>

                  {/* Expandable Details Area */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-5 sm:p-8 border-t-[3px] border-black bg-[var(--bone)]/40 space-y-6">
                      {/* Topics (if present) */}
                      {workshop.topics && workshop.topics.length > 0 && (
                        <div>
                          <h4 className="text-base sm:text-lg font-extrabold text-[var(--indigo)] uppercase tracking-wider mb-3 flex items-center gap-2">
                            <span className="w-3 h-3 bg-[var(--terracotta)] inline-block border border-black"></span>
                            Topics Covered
                          </h4>
                          <ol className="space-y-2.5 pl-2">
                            {workshop.topics.map((topic, tIdx) => (
                              <li key={tIdx} className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--indigo)] text-white text-xs font-mono font-bold flex items-center justify-center mt-0.5 border border-black">
                                  {tIdx + 1}
                                </span>
                                <span className="text-sm sm:text-base text-gray-800 font-medium leading-relaxed">
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
                          <h4 className="text-base sm:text-lg font-extrabold text-[var(--indigo)] uppercase tracking-wider mb-3 flex items-center gap-2">
                            <span className="w-3 h-3 bg-[var(--terracotta)] inline-block border border-black"></span>
                            Session Schedule
                          </h4>
                          <div className="grid gap-3">
                            {workshop.sessions.map((session, sIdx) => (
                              <div
                                key={sIdx}
                                className="bg-white border-2 border-black p-3.5 sm:p-4 shadow-[3px_3px_0_black] font-bold text-sm sm:text-base text-gray-900"
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
                          <h4 className="text-base sm:text-lg font-extrabold text-[var(--indigo)] uppercase tracking-wider mb-3 flex items-center gap-2">
                            <span className="w-3 h-3 bg-[var(--gold)] inline-block border border-black"></span>
                            Overview & Objectives
                          </h4>
                          <p className="text-sm sm:text-base text-gray-800 leading-relaxed bg-white p-4 sm:p-6 border-2 border-black shadow-[3px_3px_0_black]">
                            {workshop.description}
                          </p>
                        </div>
                      )}

                      {/* Speaker / Speakers */}
                      {workshop.speakers && workshop.speakers.length > 0 && (
                        <div>
                          <h4 className="text-base sm:text-lg font-extrabold text-[var(--indigo)] uppercase tracking-wider mb-4 flex items-center gap-2">
                            <span className="w-3 h-3 bg-[var(--indigo)] inline-block border border-black"></span>
                            {workshop.speakers.length > 1 ? 'Speakers' : 'Speaker'}
                          </h4>

                          <div className="grid gap-4">
                            {workshop.speakers.map((speaker, spIdx) => (
                              <div
                                key={spIdx}
                                className="bg-white border-2 border-black p-5 shadow-[4px_4px_0_black] space-y-2"
                              >
                                <div className="flex flex-wrap items-baseline gap-2">
                                  <span className="text-lg font-black text-black">
                                    {speaker.name}
                                  </span>
                                  {speaker.role && (
                                    <span className="text-xs font-mono font-bold bg-[var(--gold)]/30 text-black px-2 py-0.5 border border-black">
                                      {speaker.role}
                                    </span>
                                  )}
                                </div>

                                {speaker.designation && (
                                  <p className="text-sm font-semibold text-[var(--terracotta)]">
                                    {speaker.designation}
                                  </p>
                                )}

                                {speaker.affiliation && (
                                  <p className="text-sm text-gray-700 font-medium">
                                    {speaker.affiliation}
                                  </p>
                                )}

                                {speaker.bio && (
                                  <div className="mt-3 pt-3 border-t border-gray-200">
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
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
