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
  const { tableTitle, note, categories, authorRules, termsAndConditions } = regData;

  return (
    <main className="min-h-screen bg-[var(--bone)]">
      <PageHeader title="Registration" />

      {/* Registration Table */}
      <section className="px-5 md:px-[8%] py-12 md:py-20">
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
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[var(--indigo)] text-white">
                  <th className="px-4 sm:px-6 py-4 text-sm sm:text-base font-extrabold border-r-[2px] border-white/20">
                    Registrations at Various Levels
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-sm sm:text-base font-extrabold text-center border-r-[2px] border-white/20">
                    Registration - INDIAN
                    <span className="block text-xs font-semibold opacity-70 mt-1">({note})</span>
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-sm sm:text-base font-extrabold text-center">
                    Registration - INTERNATIONAL
                    <span className="block text-xs font-semibold opacity-70 mt-1">({note})</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {categories.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-t-[2px] border-black/10 transition-colors duration-150 hover:bg-[var(--gold)]/10 ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--bone)]'}`}
                  >
                    <td className="px-4 sm:px-6 py-4 text-sm sm:text-base font-semibold text-black border-r-[2px] border-black/10">
                      {row.label}
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-sm sm:text-base font-bold text-center text-black border-r-[2px] border-black/10">
                      {row.indian}
                    </td>
                    <td className="px-4 sm:px-6 py-4 text-sm sm:text-base font-bold text-center text-black">
                      {row.international}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Rules & Terms Accordion Sections */}
      <section className="px-5 md:px-[8%] pb-16 md:pb-24">
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
        </div>
      </section>
    </main>
  );
}
