'use client';

import { useState } from 'react';
import PageHeader from "@/components/PageHeader";
import submitData from '@/data/submit.json';

export default function SubmitPage() {
  const [checklist, setChecklist] = useState({
    original: false,
    english: false,
    pdf: false,
    pageLimit: false,
    template: false,
    deadline: false,
    ai: false,
    plag: false,
  });

  const [selectedGuideline, setSelectedGuideline] = useState(null);

  const allChecked = Object.values(checklist).every(Boolean);

  const handleCheck = (key) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleGuidelineSelect = (index) => {
    setSelectedGuideline(selectedGuideline === index ? null : index);
  };

  const checklistItems = submitData.checklistItems;
  const guidelineItems = submitData.guidelineItems;

  return (
    <main className="min-h-screen bg-[var(--bone)]">
      <PageHeader title = "Submission of Paper" />
      {/* Content Container */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-[8%] max-w-[1400px] mx-auto">
        
        {/* General Info Banner */}
        <div className="bg-white border-[3px] border-black p-6 sm:p-8 lg:p-10 shadow-[10px_10px_0_var(--terracotta)] mb-10 sm:mb-12 lg:mb-16">
          <div className="flex flex-wrap gap-4 sm:gap-6 mb-6">
            {submitData.bannerTags.map((tag, idx) => (
              <div key={idx} className={`bg-[var(--${tag.color})] text-${tag.color === 'gold' ? 'black' : 'white'} px-4 py-2 font-mono font-bold text-xs sm:text-sm`}>
                {tag.text}
              </div>
            ))}
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--indigo)] mb-4">
            {submitData.intro.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mb-6 text-justify hyphens-auto   break-words">
            {submitData.intro.description}
          </p>
          
          <a 
            href={submitData.intro.cfpLink}
            className="inline-flex items-center gap-2 font-mono font-bold text-sm text-[var(--terracotta)] hover:text-[var(--indigo)] transition-colors mb-8"
          >
            {submitData.intro.cfpLinkText}
          </a>

          {/* Timeline */}
          {/* <div className="border-t-[3px] border-black pt-6">
            <h3 className="font-mono font-bold text-sm text-[var(--indigo)] mb-4">IMPORTANT DATES</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b-2 border-black">
                    <td className="py-3 pr-4">
                      <span className="inline-block w-3 h-3 bg-[var(--terracotta)] border-2 border-black mr-3"></span>
                    </td>
                    <td className="py-3 pr-6 font-mono font-bold text-sm whitespace-nowrap">01 Jan, 2026</td>
                    <td className="py-3 text-sm sm:text-base font-semibold">Call for papers open</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="py-3 pr-4">
                      <span className="inline-block w-3 h-3 bg-[var(--gold)] border-2 border-black mr-3"></span>
                    </td>
                    <td className="py-3 pr-6 font-mono font-bold text-sm whitespace-nowrap">: 01 Jan, 2026</td>
                    <td className="py-3 text-sm sm:text-base font-semibold">CCS/Workshop/Tutorials Proposals Open</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="py-3 pr-4">
                      <span className="inline-block w-3 h-3 bg-[var(--indigo)] border-2 border-black mr-3"></span>
                    </td>
                    <td className="py-3 pr-6 font-mono font-bold text-sm whitespace-nowrap">30 May, 2026</td>
                    <td className="py-3 text-sm sm:text-base font-semibold">Paper submission deadline</td>
                  </tr>
                  <tr className="border-b-2 border-black">
                    <td className="py-3 pr-4">
                      <span className="inline-block w-3 h-3 bg-[var(--indigo)] border-2 border-black mr-3"></span>
                    </td>
                    <td className="py-3 pr-6 font-mono font-bold text-sm whitespace-nowrap">01 Feb, 2026</td>
                    <td className="py-3 text-sm sm:text-base font-semibold">CCS Proposal Close</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">
                      <span className="inline-block w-3 h-3 bg-black border-2 border-black mr-3"></span>
                    </td>
                    <td className="py-3 pr-6 font-mono font-bold text-sm whitespace-nowrap">December 8–11, 2026</td>
                    <td className="py-3 text-sm sm:text-base font-semibold">InGARSS 2026 Symposium</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> */}
        </div>

        {/* Submission Guidelines - Compact */}
        {/* <div className="mb-10 sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[var(--terracotta)] font-bold text-sm">01</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--indigo)]">
              Submission Guidelines
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6">
            {guidelineItems.map((item, index) => (
              <div 
                key={index}
                onClick={() => handleGuidelineSelect(index)}
                className={`bg-white border-[2px] border-black p-3 sm:p-4 transition-all duration-150 md:cursor-default cursor-pointer md:hover:shadow-[6px_6px_0_black] md:hover:-translate-x-0.5 md:hover:-translate-y-0.5 ${
                  selectedGuideline === index
                    ? 'md:shadow-[4px_4px_0_black] shadow-[6px_6px_0_var(--terracotta)] md:translate-x-0 md:translate-y-0 -translate-x-0.5 -translate-y-0.5'
                    : 'shadow-[4px_4px_0_black]'
                }`}
              >
                <h3 className="font-mono text-[var(--indigo)] text-xs sm:text-sm font-extrabold mb-1 border-b-[2px] border-[var(--gold)] w-fit pb-0.5">
                  {item.label}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-justify hyphens-auto   break-words">
                  {item.text}
                </p>
              </div>
            ))}
          </div> */}

          {/* Templates Download */}
          {/* <div className="bg-[var(--indigo)] border-[3px] border-black p-4 sm:p-5 shadow-[6px_6px_0_black] inline-flex flex-wrap items-center gap-4">
            <span className="font-mono text-white text-sm font-bold">Download Templates:</span>
            <a 
              href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/conference-latex-template.zip" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-mono font-bold text-xs bg-[var(--gold)] px-4 py-2 border-[2px] border-black hover:bg-white transition-all"
            >
              LATEX
            </a>
            <a 
              href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/conference-template-a4.docx" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-mono font-bold text-xs bg-[var(--gold)] px-4 py-2 border-[2px] border-black hover:bg-white transition-all"
            >
              MS WORD
            </a>
          </div>
        </div> */}

        {/* Submission Checklist */}
        <div className="bg-white border-[3px] border-black p-6 sm:p-8 lg:p-10 shadow-[12px_12px_0_black] mb-10 sm:mb-12">
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <span className="font-mono text-[var(--terracotta)] font-bold text-sm">02</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--indigo)]">
              Submission Checklist
            </h2>
          </div>
          
          <p className="text-sm sm:text-base mb-6 max-w-2xl text-justify hyphens-auto   break-words">
            Please confirm each item before proceeding to submit. All items must be checked to enable the submission button.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-8">
            {checklistItems.map((item) => (
              <label 
                key={item.key}
                onClick={() => handleCheck(item.key)}
                className={`flex items-start gap-3 sm:gap-4 p-4 border-[3px] border-black cursor-pointer transition-all duration-150
                  ${checklist[item.key] 
                    ? 'bg-white shadow-[4px_4px_0_var(--indigo)]' 
                    : 'bg-gray-50 hover:bg-gray-100'
                  }`}
              >
                <div className={`w-6 h-6 flex-shrink-0 border-[3px] border-black flex items-center justify-center mt-0.5
                  ${checklist[item.key] ? 'bg-[var(--indigo)]' : 'bg-white'}`}
                >
                  {checklist[item.key] && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4">
                      <path d="M5 12l5 5L20 6" />
                    </svg>
                  )}
                </div>
                <div>
                  <span className="font-mono font-bold text-sm block mb-1">{item.label}</span>
                  <span className="text-xs sm:text-sm text-gray-700">{item.desc}</span>
                </div>
              </label>
            ))}
          </div>

          {/* Progress indicator */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="font-mono text-sm font-bold">
                {Object.values(checklist).filter(Boolean).length} / {checklistItems.length} completed
              </span>
              {allChecked && (
                <span className="font-mono text-sm font-bold text-green-600">✓ Ready to submit!</span>
              )}
            </div>
            <div className="h-3 bg-gray-200 border-[2px] border-black">
              <div 
                className="h-full bg-[var(--indigo)] transition-all duration-300"
                style={{ width: `${(Object.values(checklist).filter(Boolean).length / checklistItems.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a 


              href={allChecked ? "https://edas.info/N34760" : "/submit"}
              target={allChecked ? "_blank" : undefined}
              rel={allChecked ? "noopener noreferrer" : undefined}
              onClick={(e) => !allChecked && e.preventDefault()}
              className={`inline-flex items-center gap-3 font-mono font-bold text-sm sm:text-base px-8 py-4 border-[3px] border-black transition-all duration-150
                ${allChecked 
                  ? 'bg-[#CEA964] text-black shadow-[8px_8px_0_black] hover:shadow-[4px_4px_0_black] hover:translate-x-1 hover:translate-y-1 cursor-pointer' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
            >
              SUBMIT VIA EDAS
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
            {!allChecked && (
              <span className="text-sm text-gray-600 font-mono">
                Complete all checklist items to enable submission
              </span>
            )}
          </div>
        </div>

        {/* Contact Section */}
        <div 
          className="relative p-6 sm:p-8 md:p-10 border border-black outline outline-4 outline-black outline-offset-[-12px]"
          style={{
            background: `repeating-linear-gradient(-45deg, #fcfcfc, #fcfcfc 10px, #f9f7f2 10px, #f9f7f2 20px)`
          }}
        >
          <div className="absolute -top-4 sm:-top-5 left-4 sm:left-8 bg-[var(--indigo)] text-white px-4 sm:px-6 py-2 font-mono font-extrabold text-sm shadow-[6px_6px_0_var(--black)]">
            NEED HELP?
          </div>
          
          <div className="mt-4">
            <h2 className="font-mono text-[var(--indigo)] font-extrabold text-xl sm:text-2xl mb-4">
              Questions about Submission?
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-4 max-w-2xl text-justify hyphens-auto   break-words">
              If you have any questions regarding the submission process, paper formatting, or technical issues with EDAS, please contact us.
            </p>
            <p className="font-mono font-bold text-[var(--terracotta)] text-justify hyphens-auto   break-words">
              Email:{' '}
              <a href="mailto:ingarss2026@gmail.com" className="underline hover:text-[var(--indigo)] transition-colors">
                ingarss2026@gmail.com
              </a>
            </p>
          </div>
        </div>

      </section>
    </main>
  );
}