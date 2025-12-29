"use client";

import { useState } from 'react'; // Added for state management
import PageHeader from '@/components/PageHeader';

// Reusable card for CCS info sections, styled like PortalCard but without translate lift
function CCSCard({ tag, title, children, isSelected, onSelect, action, href }) {
  // Logic: Red shadow on selection for mobile.
  // Reset on 'sm' so hover utilities take over for desktop users.
  const shadowClass = isSelected 
    ? "shadow-[16px_16px_0_#BC4749] -translate-x-2 -translate-y-2 sm:shadow-[12px_12px_0_black] sm:translate-x-0 sm:translate-y-0" 
    : "shadow-[8px_8px_0_black] sm:shadow-[12px_12px_0_black]";

  return (
    <div 
      className={`bg-white border-[3px] border-black p-5 sm:p-8 lg:p-12 flex flex-col cursor-pointer transition-all duration-200 sm:hover:-translate-x-2 sm:hover:-translate-y-2 sm:hover:shadow-[20px_20px_0_#BC4749] ${shadowClass}`}
      onClick={onSelect}
    >
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-[var(--indigo)] leading-tight mb-3 sm:mb-6 uppercase tracking-tighter">
        {title}
      </h3>
      
      <div className="text-sm sm:text-base opacity-90 mb-6 sm:mb-8 leading-relaxed text-justify hyphens-auto break-words space-y-2">
        {children}
      </div>

      {action && (
        <a 
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="mt-auto font-mono font-bold text-xs sm:text-sm bg-black text-white px-4 sm:px-5 py-3 w-fit transition-all duration-200 hover:bg-[var(--gold)] hover:text-black border-2 border-black"
        >
          {action}
        </a>
      )}
    </div>
  );
}

export default function CCSPage() {
  // State to track the currently selected card for mobile behavior
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-[var(--bone)]">
      <PageHeader title="Call for CCS" />
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-[8%] bg-white border-b-[3px] border-black">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="bg-[var(--indigo)] text-white px-4 py-2 font-mono font-bold text-xs sm:text-sm">InGARSS 2026</div>
            <div className="bg-[var(--terracotta)] text-white px-4 py-2 font-mono font-bold text-xs sm:text-sm">DECEMBER 1–4, 2026</div>
            <div className="bg-[var(--gold)] text-black px-4 py-2 font-mono font-bold text-xs sm:text-sm">Hyderabad, INDIA</div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-2xl font-extrabold text-[var(--indigo)] mb-4 sm:mb-6 leading-tight">What is a CCS?</h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 max-w-4xl text-justify hyphens-auto break-words">
            A Community Contributed Session is a curated set of presentations, panels, or discussions organized by individuals or groups from the research community. These sessions complement the main conference themes and highlight diverse perspectives to enrich the program.          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 max-w-4xl text-justify hyphens-auto break-words">
            The Organizing Committee of InGARSS 2026 invites Community Contributed Session (CCS)/ Workshops/Tutorials Proposals from researchers, professionals, industry practitioners, and educators in the fields of Geoscience and Remote Sensing (GRS) and related domains. These sessions provide a platform for experts to discuss emerging topics, interdisciplinary challenges, or regional priorities in an interactive and curated format.          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl text-justify hyphens-auto break-words">
            <strong>We encourage you to propose a CCS, Workshop, or Tutorial and help make InGARSS 2026 a vibrant and impactful scientific event.</strong>
          </p>
        </div>
      </section>
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-[8%] max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-8">
          <CCSCard 
            tag="Submission" 
            title="Submission Guidelines"
            isSelected={selectedId === 'guidelines'}
            onSelect={() => handleSelect('guidelines')}
          >
            <p className="text-sm sm:text-base opacity-80 mb-2 leading-relaxed text-justify hyphens-auto break-words">Please include the following in your Community Contributed Session (CCS)/ Workshops/Tutorials proposal:</p>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li>Session Title</li>
              <li>Brief Abstract (200–300 words)</li>
              <li>Proposed Format (Invited talks, panel, paper/poster presentation)</li>
              <li>List of Proposed Speakers/Panellists/Papers (if confirmed)</li>
              <li>Name(s), Affiliation(s), and Contact of Organizer(s)</li>
              <li>Target Audience and Relevance to InGARSS 2026 theme</li>
              <li>Expected Duration (120 min/ 180 min)</li>
            </ul>
          </CCSCard>

          <CCSCard 
            tag="Dates" 
            title="Important Dates"
            isSelected={selectedId === 'dates'}
            onSelect={() => handleSelect('dates')}
          >
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li>CCS submission Deadline: 01 Feb 2026</li>
              <li>Workshop/Tutorial submission deadline: 01 May 2026</li>
              <li>Paper submission deadline for CCS: 30 May 2026</li>
              <li>Notification of Acceptance: 15 September 2026</li>
              <li>Final Program Confirmation: 15 October 2026</li>
            </ul>
          </CCSCard>

          <CCSCard 
            tag="Submission" 
            title="How to Submit"
            isSelected={selectedId === 'how-to'}
            onSelect={() => handleSelect('how-to')}
          >
            <p className="text-sm sm:text-base opacity-80 mb-2 leading-relaxed text-justify hyphens-auto break-words">Submit your proposal as a single PDF and send it to <strong><a href="mailto:ingarss2026@gmail.com" className="underline text-[var(--indigo)]">ingarss2026@gmail.com</a></strong>. Subject should contain CCS or Workshop or Tutorial, Your name, title.</p>
          </CCSCard>
        </div>
      </section>
    </main>
  );
}