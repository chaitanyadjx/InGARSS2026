import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--bone)] p-5">
      <div className="max-w-[600px] text-center bg-white border-[3px] border-black p-10 sm:p-14 md:p-16 shadow-[12px_12px_0_var(--terracotta)] sm:shadow-[20px_20px_0_var(--terracotta)]">
        {/* Error Code */}
        <span className="font-mono text-6xl sm:text-7xl md:text-8xl leading-none text-[var(--indigo)] block mb-2 sm:mb-4">
          404
        </span>

        {/* Title */}
        <h1 className="  text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 tracking-tight">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="font-mono text-sm sm:text-base text-gray-600 mb-8 sm:mb-10 text-justify hyphens-auto   break-words">
            ERROR : The requested data or page does not exist at these coordinates.
        </p>

        {/* Home Button */}
        <Link 
          href="/"
          className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-mono font-bold   text-xs sm:text-sm tracking-wide transition-all duration-150 hover:bg-[var(--gold)] hover:text-black hover:translate-x-[-5px] hover:translate-y-[-5px] hover:shadow-[5px_5px_0_var(--indigo)]"
        >
          Return to Home Page
        </Link>
      </div>
    </main>
  );
}
