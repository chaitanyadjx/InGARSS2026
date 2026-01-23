'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import authorsData from '@/data/authors.json';

/**
 * Reusable Card Component
 * Logic: 
 * - Mobile: If selected, remains in a 'pressed' state (terracotta shadow).
 * - Desktop: Selection styles are reset (sm: prefix), allowing only 
 * the hover classes to trigger the visual change.
 */
function GuideCard({ label, text, isSelected, onSelect }) {
  const selectionClasses = isSelected
    ? "shadow-[7px_7px_0_var(--terracotta)] -translate-x-[2px] -translate-y-[2px] sm:shadow-[5px_5px_0_black] sm:translate-x-0 sm:translate-y-0"
    : "shadow-[5px_5px_0_black]";

  return (
    <div 
      onClick={onSelect}
      className={`bg-white border-[2px] border-black p-4 transition-all duration-150 cursor-pointer
        sm:hover:shadow-[7px_7px_0_var(--terracotta)] sm:hover:-translate-x-[2px] sm:hover:-translate-y-[2px]
        ${selectionClasses}`}
    >
      <h3 className="font-mono text-[var(--indigo)] text-sm font-extrabold mb-2 border-b-[2px] border-[var(--gold)] w-fit pb-0.5">
        {label}
      </h3>
      <p className="text-xs sm:text-sm leading-relaxed text-justify hyphens-auto   break-words" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}

export default function AuthorsPage() {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  const guidelineItems = authorsData.guidelines;
  const pageLimitItems = authorsData.pageLimit;
  const reviewItems = authorsData.review;
  const publicationItems = authorsData.publication;

  return (
    <main className="min-h-screen bg-[var(--bone)]">
      {/* Page Header */}
      <PageHeader title = "Author Guidelines"/>
      {/* Content Container */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-[8%] max-w-[1400px] mx-auto">
        
        {/* Templates & CMT Section */}
        <div className="bg-white border-[3px] border-black p-6 sm:p-8 lg:p-10 shadow-[10px_10px_0_var(--terracotta)] mb-10 sm:mb-12 lg:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Templates */}
            <div>
              <h3 className="font-mono text-[var(--indigo)] text-xl sm:text-2xl font-extrabold mb-4">
                {authorsData.templates.title}
              </h3>
              <p className="text-sm sm:text-base mb-4 text-justify hyphens-auto   break-words">
                {authorsData.templates.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {authorsData.templates.links.map((link, idx) => (
                  <a 
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black font-mono font-bold text-xs sm:text-sm bg-gold px-5 py-3 transition-all duration-150 hover:bg-[var(--black)] hover:text-black border-[2px] border-black"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* CMT Portal */}
            <div>
              <h3 className="font-mono text-[var(--indigo)] text-xl sm:text-2xl font-extrabold mb-4">
                EDAS Submission Portal
              </h3>
              <p className="text-sm sm:text-base mb-4 text-justify hyphens-auto   break-words">
                Submit your paper via EDAS. 
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://edas.info/N34760" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono font-bold text-xs sm:text-sm bg-[var(--gold)] text-black px-5 py-3 border-[2px] border-black hover:bg-black hover:text-white transition-all"
                >
                  EDAS Link
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section 1: Submission Guidelines */}
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--indigo)]">
              Submission Guidelines
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4">
            {guidelineItems.map((item, index) => (
              <GuideCard 
                key={index}
                isSelected={selectedId === `guide-${index}`}
                onSelect={() => handleSelect(`guide-${index}`)}
                {...item}
              />
            ))}
          </div>
        </div>

        {/* Page Limits & Fees */}
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--indigo)]">
              Page Limits & Overlength Fees
            </h2>
          </div>
          
          <div className="bg-white border-[3px] border-black overflow-hidden shadow-[8px_8px_0_black] hover:shadow-[10px_10px_0_var(--terracotta)] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-150">
            <table className="w-full">
              <thead>
                <tr className="bg-[var(--indigo)] text-white">
                  <th className="text-left p-4 font-mono text-sm font-bold">Page Count</th>
                  <th className="text-left p-4 font-mono text-sm font-bold">Fee</th>
                  <th className="text-left p-4 font-mono text-sm font-bold hidden sm:table-cell">Note</th>
                </tr>
              </thead>
              <tbody>
                {pageLimitItems.map((item, index) => (
                  <tr key={index} className="border-t-2 border-black">
                    <td className="p-4 font-mono font-bold text-sm">{item.pages}</td>
                    <td className="p-4 text-sm font-semibold text-[var(--terracotta)]">{item.fee}</td>
                    <td className="p-4 text-sm hidden sm:table-cell">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3: Review Process */}
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--indigo)]">
              Review Process
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {reviewItems.map((item, index) => (
              <GuideCard 
                key={index}
                isSelected={selectedId === `review-${index}`}
                onSelect={() => handleSelect(`review-${index}`)}
                {...item}
              />
            ))}
          </div>
        </div>

        {/* Section 4: Presentation & Publication */}
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--indigo)]">
              Presentation & Publication
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {publicationItems.map((item, index) => (
              <GuideCard 
                key={index}
                isSelected={selectedId === `pub-${index}`}
                onSelect={() => handleSelect(`pub-${index}`)}
                {...item}
              />
            ))}
          </div>
        </div>

        {/* AI Disclosure Notice */}
        <div className="bg-[var(--gold)] border-[3px] border-black p-6 sm:p-8 shadow-[8px_8px_0_black] mb-10 sm:mb-12 lg:mb-16">
          <div className="flex-col lg:flex items-start lg:gap-4">
            <div className="bg-black text-white font-mono font-bold text-xs px-3 my-4 lg:my-0 py-1 flex-shrink-0">
              AI POLICY
            </div>
            <div>
              <h3 className="font-mono text-[var(--indigo)] text-lg font-extrabold mb-3">
                AI-Generated Content Disclosure
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-justify hyphens-auto   break-words">
                The use of AI-generated content (text, figures, images, code) must be disclosed in the acknowledgments section. Identify the AI system used and specify which sections contain AI-generated content with a brief explanation. AI use for editing and grammar enhancement does not require disclosure but is recommended.
              </p>
            </div>
          </div>
        </div>

        {/* Policy Section */}
        <section className="relative p-6 sm:p-8 md:p-12 lg:p-14 border border-black outline outline-4 outline-black outline-offset-[-12px]"
          style={{
            background: `repeating-linear-gradient(-45deg, #fcfcfc, #fcfcfc 10px, #f9f7f2 10px, #f9f7f2 20px)`
          }}
        >
          <div className="absolute -top-4 sm:-top-5 left-4 sm:left-8 md:left-12 bg-[var(--terracotta)] text-white px-4 sm:px-6 py-2 font-mono font-extrabold text-sm shadow-[6px_6px_0_black]">
            IEEE POLICY
          </div>

          <div className="mt-4 sm:mt-6">
            <h2 className="font-mono text-[var(--indigo)] font-extrabold text-xl sm:text-2xl md:text-3xl mb-6">
              IEEE Ethics & Compliance
            </h2>
            
            <div className="text-sm sm:text-base border-l-4 border-[var(--gold)] pl-4 sm:pl-6 max-w-[900px] leading-relaxed space-y-4">
              <p className="font-semibold text-justify hyphens-auto   break-words">
                IEEE reserves the right to exclude a paper from distribution (e.g., not including it in IEEE Xplore) if the paper is not presented at the conference.
              </p>
              <p className="text-justify hyphens-auto   break-words">
                Papers are reviewed on the basis that they do not contain plagiarized material and have not been submitted to any other conference at the same time (double submission). IEEE will take action against any author who has engaged in either practice.
              </p>
            </div>
          </div>
        </section>

      </section>
    </main>
  );
}