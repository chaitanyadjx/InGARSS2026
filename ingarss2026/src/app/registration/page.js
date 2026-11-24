'use client';

import { useState } from 'react';
import PageHeader from "@/components/PageHeader";
import regData from "@/data/registration.json";

function AccordionSection({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-[3px] border-black shadow-[6px_6px_0_black] bg-white overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 px-5 sm:px-8 py-4 sm:py-5 bg-[var(--indigo)] text-white font-extrabold text-base sm:text-lg md:text-xl text-left transition-colors duration-150 hover:bg-[var(--indigo)]/90"
      >
        <span
          className={`text-lg sm:text-xl transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        >
          ▼
        </span>
        {title}
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 sm:px-8 py-6 sm:py-8">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function RegistrationPage() {
  const { tableTitle, note, categories, authorRules, termsAndConditions, inclusions } = regData;

  return (
    <main className="min-h-screen bg-[var(--bone)]">
      <PageHeader title="Registration" />

      {/* Top Header Section */}
      <section className="px-5 md:px-[8%] py-8 md:py-12 bg-white border-b-[3px] border-black text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-indigo mb-3">Ready to Register?</h2>
          <p className="text-gray-700 mb-6 text-sm sm:text-base">Secure your spot for InGARSS 2026.</p>

          <span className="inline-block bg-gray-300 text-gray-600 font-mono font-bold text-sm sm:text-base px-8 py-4 border-[3px] border-black opacity-80 cursor-not-allowed">
            REGISTRATIONS CLOSED
          </span>

          <p className="mt-6 text-sm sm:text-base font-medium text-gray-800">
            Registrations closed. Please contact{' '}
            <a href="mailto:ingarss2026@gmail.com" className="font-bold text-[var(--terracotta)] underline underline-offset-2">
              ingarss2026@gmail.com
            </a>{' '}
            for corporate registrations.
          </p>
        </div>
      </section>


      {/* Registration Table */}
      <section id="registration-charges" className="px-5 md:px-[8%] py-12 md:py-20 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          {/* Table title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black text-center mb-2">
            {tableTitle}
          </h2>
          <p className="text-center text-sm sm:text-base font-semibold text-black/60 mb-8">
            ({note})
          </p>

          {/* Table wrapper */}
          <div className="border-[3px] border-black shadow-[8px_8px_0_black] overflow-x-auto bg-white">
            <table className="w-full text-left border-collapse min-w-[760px]">
              <thead>
                <tr className="bg-[var(--indigo)] text-white border-b border-white/20">
                  <th rowSpan={2} className="px-4 sm:px-6 py-4 text-xs sm:text-sm font-extrabold border-r border-white/20 text-left align-middle min-w-[220px]">
                    Registration at Various Levels
                    <span className="block text-[11px] font-semibold opacity-90 mt-0.5">(Authors/Attendees)</span>
                  </th>
                  <th colSpan={2} className="px-4 py-3 text-xs sm:text-sm font-extrabold text-center border-r border-white/20">
                    Registration
                    <span className="block text-[11px] font-semibold opacity-90">Up to 15th Sept 2026</span>
                  </th>
                  <th colSpan={2} className="px-4 py-3 text-xs sm:text-sm font-extrabold text-center">
                    Late Registration
                    <span className="block text-[11px] font-semibold opacity-90">Upto 30th Sep 2026 (Closed as of now) </span>
                  </th>
                </tr>
                <tr className="bg-[var(--indigo)]/90 text-white text-[11px] sm:text-xs font-bold border-b border-white/20">
                  <th className="px-3 py-2.5 text-center border-r border-white/20">
                    Registration - INDIAN
                    <span className="block text-[10px] font-normal opacity-80">(18% GST excluded)</span>
                  </th>
                  <th className="px-3 py-2.5 text-center border-r border-white/20">
                    Registration - INTERNATIONAL
                    <span className="block text-[10px] font-normal opacity-80">(18% GST excluded)</span>
                  </th>
                  <th className="px-3 py-2.5 text-center border-r border-white/20">
                    Registration - INDIAN
                    <span className="block text-[10px] font-normal opacity-80">(18% GST excluded)</span>
                  </th>
                  <th className="px-3 py-2.5 text-center">
                    Registration INTERNATIONAL
                    <span className="block text-[10px] font-normal opacity-80">(18% GST excluded)</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {categories.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-t border-black/10 transition-colors duration-150 hover:bg-[var(--gold)]/10 ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--bone)]'}`}
                  >
                    <td className="px-4 sm:px-6 py-3.5 text-xs sm:text-sm font-semibold text-black border-r border-black/10">
                      {row.label}
                    </td>
                    <td className="px-3 py-3.5 text-xs sm:text-sm font-bold text-center text-black border-r border-black/10 font-mono">
                      {row.indian}
                    </td>
                    <td className="px-3 py-3.5 text-xs sm:text-sm font-bold text-center text-black border-r border-black/10 font-mono">
                      {row.international}
                    </td>
                    <td className="px-3 py-3.5 text-xs sm:text-sm font-bold text-center text-black border-r border-black/10 font-mono">
                      {row.lateIndian || row.indian}
                    </td>
                    <td className="px-3 py-3.5 text-xs sm:text-sm font-bold text-center text-black font-mono">
                      {row.lateInternational || row.international}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Rules & Terms Accordion Sections */}
      <section className="px-5 md:px-[8%] pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          {/* Rules for Author Registrations */}
          <AccordionSection title="Rules for Author Registrations:" defaultOpen={true}>
            <ul className="space-y-4">
              {authorRules.map((rule, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--terracotta)] flex-shrink-0" />
                  <span className="text-sm sm:text-base leading-relaxed text-gray-800">{rule}</span>
                </li>
              ))}
            </ul>
          </AccordionSection>

          {/* Terms & Conditions */}
          <AccordionSection title="Terms & Conditions:">
            <ul className="space-y-4">
              {termsAndConditions.map((term, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--indigo)] flex-shrink-0" />
                  <span className="text-sm sm:text-base leading-relaxed text-gray-800">{term}</span>
                </li>
              ))}
            </ul>
          </AccordionSection>

          {/* Inclusions */}
          <AccordionSection title="Inclusions:">
            <ul className="space-y-4">
              {inclusions.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--gold)] flex-shrink-0" />
                  <span className="text-sm sm:text-base leading-relaxed text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </AccordionSection>
        </div>
      </section>

      {/* Final Registration Section at the Very Bottom */}
      <section id="final-registration" className="px-5 md:px-[8%] pb-16 md:pb-24 scroll-mt-24">
        <div className="max-w-3xl mx-auto bg-white border-[3px] border-black p-6 sm:p-10 shadow-[10px_10px_0_black] text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--indigo)] mb-3">
            Attendee Registration
          </h3>
          <p className="text-gray-700 text-sm sm:text-base font-medium">
            Registrations closed. Please contact{' '}
            <a href="mailto:ingarss2026@gmail.com" className="font-bold text-[var(--terracotta)] underline underline-offset-2">
              ingarss2026@gmail.com
            </a>{' '}
            for corporate registrations.
          </p>
        </div>
      </section>
    </main>
  );
}
