'use client';

import { useState } from 'react';

export default function AuthorsPage() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[var(--bone)]">
      {/* Page Header */}
      <header className="bg-[var(--indigo)] text-white pt-28 pb-16 sm:pt-24 sm:pb-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-[8%] border-b-[3px] border-black">
        <span className="font-mono text-[var(--gold)] font-bold uppercase text-xs sm:text-sm tracking-[0.2em]">
          // MANDATORY REQUIREMENTS
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] uppercase leading-[0.85] tracking-tight font-extrabold mt-4 sm:mt-6">
          Author <br /> Guidelines
        </h1>
      </header>

      {/* Content Container */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-[8%] max-w-[1400px] mx-auto">
        
        {/* Floating Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          
          {/* Paper Format Card */}
          <div 
            onClick={() => handleCardClick(0)}
            className={`bg-white border-[3px] border-black p-6 sm:p-8 lg:p-10 cursor-pointer transition-all duration-150 ease-out
              ${selectedCard === 0 
                ? 'translate-x-[-8px] translate-y-[-8px] shadow-[20px_20px_0_var(--terracotta)]' 
                : 'shadow-[12px_12px_0_var(--black)] hover:translate-x-[-8px] hover:translate-y-[-8px] hover:shadow-[20px_20px_0_var(--terracotta)]'
              }`}
          >
            <h3 className="font-mono uppercase text-[var(--indigo)] mb-4 sm:mb-6 text-lg sm:text-xl lg:text-2xl font-extrabold border-b-[0.3rem] border-[var(--gold)] w-fit pb-1">
              Paper Format
            </h3>
            <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-5">
              Prospective authors are encouraged to submit full papers in <strong>PDF format</strong> not exceeding <strong>5 pages</strong> in double-column. This includes all figures, tables, and references.
            </p>
            <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-5">
              Papers must clearly indicate the research area, main results, and contributions. Only original work not submitted elsewhere will be considered.
            </p>
            <div className="flex flex-wrap gap-3 mt-6 sm:mt-8">
              <a 
                href="https://www.ieee.org/conferences/publishing/templates" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-white font-mono font-bold text-xs sm:text-sm bg-black px-4 sm:px-5 py-3 transition-all duration-150 hover:bg-[var(--gold)] hover:text-black"
              >
                LATEX
              </a>
              <a 
                href="https://www.ieee.org/conferences/publishing/templates" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-white font-mono font-bold text-xs sm:text-sm bg-black px-4 sm:px-5 py-3 transition-all duration-150 hover:bg-[var(--gold)] hover:text-black"
              >
                MS WORD
              </a>
            </div>
          </div>

          {/* Review Policy Card */}
          <div 
            onClick={() => handleCardClick(1)}
            className={`bg-white border-[3px] border-black p-6 sm:p-8 lg:p-10 cursor-pointer transition-all duration-150 ease-out
              ${selectedCard === 1 
                ? 'translate-x-[-8px] translate-y-[-8px] shadow-[20px_20px_0_var(--terracotta)]' 
                : 'shadow-[12px_12px_0_var(--black)] hover:translate-x-[-8px] hover:translate-y-[-8px] hover:shadow-[20px_20px_0_var(--terracotta)]'
              }`}
          >
            <h3 className="font-mono uppercase text-[var(--indigo)] mb-4 sm:mb-6 text-lg sm:text-xl lg:text-2xl font-extrabold border-b-[0.3rem] border-[var(--gold)] w-fit pb-1">
              Review Policy
            </h3>
            <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-5">
              All papers will undergo a <strong>rigorous, single-blind reviewing process</strong>. Non-compliant papers (formatting or page limits) will be returned without review.
            </p>
            <p className="text-sm sm:text-base lg:text-lg">
              Accepted and Presented papers will be submitted to <strong>IEEE Xplore</strong> and indexed in leading databases like SCOPUS.
            </p>
          </div>

          {/* Checklist Card */}
          <div 
            onClick={() => handleCardClick(2)}
            className={`bg-white border-[3px] border-black p-6 sm:p-8 lg:p-10 cursor-pointer transition-all duration-150 ease-out
              ${selectedCard === 2 
                ? 'translate-x-[-8px] translate-y-[-8px] shadow-[20px_20px_0_var(--terracotta)]' 
                : 'shadow-[12px_12px_0_var(--black)] hover:translate-x-[-8px] hover:translate-y-[-8px] hover:shadow-[20px_20px_0_var(--terracotta)]'
              }`}
          >
            <h3 className="font-mono uppercase text-[var(--indigo)] mb-4 sm:mb-6 text-lg sm:text-xl lg:text-2xl font-extrabold border-b-[0.3rem] border-[var(--gold)] w-fit pb-1">
              Checklist
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="text-sm sm:text-base lg:text-lg">
                <span className="text-[var(--terracotta)] font-bold font-mono mr-2">//</span>
                Standard IEEE Template must be used.
              </li>
              <li className="text-sm sm:text-base lg:text-lg">
                <span className="text-[var(--terracotta)] font-bold font-mono mr-2">//</span>
                One paid registration per accepted paper.
              </li>
              <li className="text-sm sm:text-base lg:text-lg">
                <span className="text-[var(--terracotta)] font-bold font-mono mr-2">//</span>
                Mandatory E-Copyright form submission.
              </li>
              <li className="text-sm sm:text-base lg:text-lg">
                <span className="text-[var(--terracotta)] font-bold font-mono mr-2">//</span>
                Originality: No plagiarized material or double submissions.
              </li>
            </ul>
          </div>
        </div>

        {/* Policy Section */}
        <section className="mt-16 sm:mt-20 md:mt-24 lg:mt-32 relative p-6 sm:p-8 md:p-12 lg:p-16 border border-black outline outline-4 outline-black outline-offset-[-12px]"
          style={{
            background: `repeating-linear-gradient(
              -45deg,
              #fcfcfc,
              #fcfcfc 10px,
              #f9f7f2 10px,
              #f9f7f2 20px
            )`
          }}
        >
          {/* Policy Label */}
          <div className="absolute -top-4 sm:-top-5 left-4 sm:left-8 md:left-12 bg-[var(--terracotta)] text-white px-4 sm:px-6 py-2 sm:py-2.5 font-mono font-extrabold uppercase text-sm sm:text-base shadow-[6px_6px_0_var(--black)]">
            Official POLICY
          </div>

          <div className="mt-4 sm:mt-6">
            <h2 className="font-mono text-[var(--indigo)] uppercase font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8">
              IEEE Ethics & Compliance
            </h2>
            
            <div className="text-base sm:text-lg border-l-4 sm:border-l-[0.5rem] border-[var(--gold)] pl-4 sm:pl-6 md:pl-8 max-w-[1000px] leading-relaxed sm:leading-loose">
              <p className="mb-4 sm:mb-6 font-semibold">
                IEEE reserves the right to exclude a paper from distribution after the conference (e.g., by not including it in IEEE Xplore) if the paper is not presented at the conference.
              </p>
              <p className="mb-4 sm:mb-6">
                Papers are reviewed on the basis that they do not contain plagiarized material and have not been submitted to any other conference at the same time (double submission). These matters are taken very seriously and IEEE will take action against any author who has engaged in either practice.
              </p>
              <p className="font-mono font-bold text-[var(--terracotta)]">
                Queries:{' '}
                <a href="mailto:ingarss2026@gmail.com" className="underline hover:text-[var(--indigo)] transition-colors">
                  ingarss2026@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>

      </section>
    </main>
  );
}
