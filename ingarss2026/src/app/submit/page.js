'use client';

import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default function SubmitPage() {
  return (
    <main className="min-h-screen bg-[var(--bone)]">
      <PageHeader title="Submission of Paper" />
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-[8%] max-w-4xl mx-auto text-center">
        <div className="bg-white border-[3px] border-black p-8 sm:p-12 shadow-[12px_12px_0_var(--terracotta)]">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--indigo)] mb-6">
            Paper Submission Closed
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
            The paper submission deadline for InGARSS 2026 is officially over. Thank you to everyone who submitted their research!
            You can now register to attend the conference. Please refer to the Registration page for more details.
          </p>
          <Link 
            href="/registration" 
            className="inline-block bg-[var(--gold)] text-black font-mono font-bold text-base px-8 py-4 border-[3px] border-black shadow-[6px_6px_0_black] hover:shadow-[8px_8px_0_black] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150"
          >
            Go to Registration Page →
          </Link>
        </div>
      </section>
    </main>
  );
}