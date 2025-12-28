'use client';

import { useState } from 'react';

export default function AuthorsPage() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  const guidelineItems = [
    { label: "Submission Portal", text: "All papers must be submitted electronically through the Microsoft CMT conference submission portal. No other submission method is accepted." },
    { label: "Language", text: "Submissions must be in English and formatted according to the IEEE conference template (A4 size)." },
    { label: "File Format", text: "Submissions are only accepted in PDF format." },
    { label: "Blind Review", text: "The initial submission must not contain any author names, affiliations, or contact information to facilitate a fair peer-review process." },
    { label: "Originality", text: "Authors must submit original research papers that have not been published elsewhere or are currently under review by other journals or conferences." },
    { label: "Plagiarism Policy", text: "Overall similarity rate must not exceed 30%, and similarity to a single source must not exceed 10% for IEEE Xplore submission." }
  ];

  const pageLimitItems = [
    { pages: "Up to 4 pages", fee: "No Extra Charge", note: "Main content excluding references" },
    { pages: "5 pages", fee: "₹1,000 / $15", note: "Overlength fee applies" },
    { pages: "6 pages (max)", fee: "₹2,000 / $30", note: "Total limit including everything" }
  ];

  const reviewItems = [
    { label: "Peer Review", text: "All submitted papers will undergo a peer-review process by at least three independent reviewers following IEEE review guidelines." },
    { label: "Review Criteria", text: "Key criteria include originality, technical quality, clarity, and relevance to the conference tracks." },
    { label: "Final Decision", text: "The decision of the Technical Program Committee (TPC) will be final." },
    { label: "Notification", text: "Authors will receive an email notification regarding the acceptance or rejection of their paper." }
  ];

  const publicationItems = [
    { label: "Presentation Required", text: "Accepted papers must be presented at the conference by one of the authors. Format (oral/poster) will be communicated upon acceptance." },
    { label: "Registration", text: "At least one author must register at the full (non-student) rate for the paper to be included in the proceedings." },
    { label: "IEEE Xplore", text: "All accepted and presented papers will be submitted for inclusion in IEEE Xplore." },
    { label: "Copyright", text: "Authors of accepted papers are required to complete and submit an electronic IEEE Copyright Form (eCF)." }
  ];

  return (
    <main className="min-h-screen bg-[var(--bone)]">
      {/* Page Header */}
            <header className="bg-[var(--indigo)] text-white px-4 sm:px-6 md:px-[8%] pt-28 pb-16 sm:pt-24 sm:pb-20md:py-20 lg:py-28 border-b-[3px] border-black">
                <span className="font-mono text-[var(--gold)] font-bold text-xs sm:text-sm tracking-[0.2em]  "> <br></br></span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold   leading-[0.85] tracking-tight mt-4 sm:mt-6">
                    Author  <br /> Guidelines
                </h1>
            </header>

      {/* Content Container */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-[8%] max-w-[1400px] mx-auto">
        
        {/* Templates & CMT Section */}
        <div className="bg-white border-[3px] border-black p-6 sm:p-8 lg:p-10 shadow-[10px_10px_0_var(--terracotta)] mb-10 sm:mb-12 lg:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Templates */}
            <div>
              <h3 className="font-mono text-[var(--indigo)] text-xl sm:text-2xl font-extrabold mb-4">
                Download Templates
              </h3>
              <p className="text-sm sm:text-base mb-4">
                Use the official IEEE Conference Templates for your Paper submission.
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/conference-latex-template.zip" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-mono font-bold text-xs sm:text-sm bg-black px-5 py-3 transition-all duration-150 hover:bg-[var(--gold)] hover:text-black border-[2px] border-black"
                >
                  LATEX
                </a>
                <a 
                  href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/conference-template-a4.docx" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-mono font-bold text-xs sm:text-sm bg-black px-5 py-3 transition-all duration-150 hover:bg-[var(--gold)] hover:text-black border-[2px] border-black"
                >
                  MS WORD
                </a>
              </div>
            </div>

            {/* CMT Portal */}
            <div>
              <h3 className="font-mono text-[var(--indigo)] text-xl sm:text-2xl font-extrabold mb-4">
                CMT Submission Portal
              </h3>
              <p className="text-sm sm:text-base mb-4">
                Submit your paper via Microsoft CMT. Need help?
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://cmt3.research.microsoft.com/docs/help/general/account-creation.html" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono font-bold text-xs sm:text-sm bg-[var(--gold)] text-black px-5 py-3 border-[2px] border-black hover:bg-black hover:text-white transition-all"
                >
                  CREATE ACCOUNT
                </a>
                <a 
                  href="https://cmt3.research.microsoft.com/docs/help/author/author-submission-form.html" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono font-bold text-xs sm:text-sm bg-[var(--gold)] text-black px-5 py-3 border-[2px] border-black hover:bg-black hover:text-white transition-all"
                >
                  HOW TO SUBMIT
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section 1: Submission Guidelines */}
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[var(--terracotta)] font-bold text-sm">01</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--indigo)]">
              Submission Guidelines
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {guidelineItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white border-[2px] border-black p-4 shadow-[5px_5px_0_black] hover:shadow-[7px_7px_0_var(--terracotta)] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-150"
              >
                <h3 className="font-mono text-[var(--indigo)] text-sm font-extrabold mb-2 border-b-[2px] border-[var(--gold)] w-fit pb-0.5">
                  {item.label}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Page Limits & Fees */}
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[var(--terracotta)] font-bold text-sm">02</span>
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
            <span className="font-mono text-[var(--terracotta)] font-bold text-sm">03</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--indigo)]">
              Review Process
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {reviewItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white border-[2px] border-black p-4 shadow-[5px_5px_0_black] hover:shadow-[7px_7px_0_var(--terracotta)] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-150"
              >
                <h3 className="font-mono text-[var(--indigo)] text-sm font-extrabold mb-2 border-b-[2px] border-[var(--gold)] w-fit pb-0.5">
                  {item.label}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Presentation & Publication */}
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[var(--terracotta)] font-bold text-sm">04</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--indigo)]">
              Presentation & Publication
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {publicationItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white border-[2px] border-black p-4 shadow-[5px_5px_0_black] hover:shadow-[7px_7px_0_var(--terracotta)] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all duration-150"
              >
                <h3 className="font-mono text-[var(--indigo)] text-sm font-extrabold mb-2 border-b-[2px] border-[var(--gold)] w-fit pb-0.5">
                  {item.label}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Disclosure Notice */}
        <div className="bg-[var(--gold)] border-[3px] border-black p-6 sm:p-8 shadow-[8px_8px_0_black] mb-10 sm:mb-12 lg:mb-16">
          <div className="flex items-start gap-4">
            <div className="bg-black text-white font-mono font-bold text-xs px-3 py-1 flex-shrink-0">
              AI POLICY
            </div>
            <div>
              <h3 className="font-mono text-[var(--indigo)] text-lg font-extrabold mb-3">
                AI-Generated Content Disclosure
              </h3>
              <p className="text-sm sm:text-base leading-relaxed">
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
          <div className="absolute -top-4 sm:-top-5 left-4 sm:left-8 md:left-12 bg-[var(--terracotta)] text-white px-4 sm:px-6 py-2 font-mono font-extrabold text-sm shadow-[6px_6px_0_var(--black)]">
            Official POLICY
          </div>

          <div className="mt-4 sm:mt-6">
            <h2 className="font-mono text-[var(--indigo)] font-extrabold text-xl sm:text-2xl md:text-3xl mb-6">
              IEEE Ethics & Compliance
            </h2>
            
            <div className="text-sm sm:text-base border-l-4 border-[var(--gold)] pl-4 sm:pl-6 max-w-[900px] leading-relaxed space-y-4">
              <p className="font-semibold">
                IEEE reserves the right to exclude a paper from distribution (e.g., not including it in IEEE Xplore) if the paper is not presented at the conference.
              </p>
              <p>
                Papers are reviewed on the basis that they do not contain plagiarized material and have not been submitted to any other conference at the same time (double submission). IEEE will take action against any author who has engaged in either practice.
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
