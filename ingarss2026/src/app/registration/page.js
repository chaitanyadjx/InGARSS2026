'use client';

import PageHeader from "@/components/PageHeader";
import regData from "@/data/registration.json";

export default function RegistrationPage() {
  const { tableTitle, note, categories } = regData;

  return (
    <main className="min-h-screen bg-[var(--bone)]">
      <PageHeader title="Registration" />

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
    </main>
  );
}
