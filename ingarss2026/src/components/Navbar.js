'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [eventDropdownOpen, setEventDropdownOpen] = useState(false);
    const [authorsDropdownOpen, setAuthorsDropdownOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-black z-50 border-b-[3px] border-black">
            <div className="grid grid-cols-[1fr_auto] lg:grid-cols-[240px_1fr_190px] h-20">
                {/* Brand */}
                <div className="bg-terracotta text-white flex items-center justify-center lg:justify-center font-bold uppercase text-xs sm:text-sm lg:text-base tracking-wider px-4 lg:px-5 border-r-[3px] border-black">
                    <span className="hidden sm:inline lg:hidden">India Geoscience & Remote Sensing Symposium 2026</span>
                    <span className="sm:hidden lg:inline">InGARSS 2026</span>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden lg:grid lg:grid-cols-5 bg-white h-full">
                    <li className="border-r border-gray-200">
                        <Link href="/" className="flex items-center justify-center h-full font-mono font-semibold text-xs uppercase hover:bg-indigo hover:text-white transition-all duration-300 px-3">Home</Link>
                    </li>
                    <li className="border-r border-gray-200">
                        <Link href="/committee" className="flex items-center justify-center h-full font-mono font-semibold text-xs uppercase hover:bg-indigo hover:text-white transition-all duration-300 px-3">Committee</Link>
                    </li>
                    <li className="border-r border-gray-200">
                        <Link href="/cfp" className="flex items-center justify-center h-full font-mono font-semibold text-xs uppercase hover:bg-indigo hover:text-white transition-all duration-300 px-3">Call for Papers</Link>
                    </li>
                    <li className="border-r border-gray-200 relative group">
                        <button 
                            onClick={() => setEventDropdownOpen(!eventDropdownOpen)}
                            className={`flex items-center justify-center h-full w-full font-mono font-semibold text-xs uppercase hover:bg-indigo hover:text-white transition-all duration-300 px-3 ${eventDropdownOpen ? 'bg-indigo text-white' : ''}`}
                        >
                            Event Details ↓
                        </button>
                        <div className={`${eventDropdownOpen ? 'block' : 'hidden'} group-hover:block absolute top-full right-0 bg-white border-[3px] border-black min-w-[240px] shadow-[10px_10px_0px_black]`}>
                            <Link href="/#about" onClick={() => setEventDropdownOpen(false)} className="block px-5 py-4 font-mono text-xs border-b border-black hover:bg-gold hover:pl-7 transition-all">Purpose</Link>
                            <Link href="/#audience" onClick={() => setEventDropdownOpen(false)} className="block px-5 py-4 font-mono text-xs border-b border-black hover:bg-gold hover:pl-7 transition-all">Target Audience</Link>
                            <Link href="/#venue" onClick={() => setEventDropdownOpen(false)} className="block px-5 py-4 font-mono text-xs hover:bg-gold hover:pl-7 transition-all">Venue: Hyderabad</Link>
                        </div>
                    </li>
                    <li>
                        <Link href="/dates" className="flex items-center justify-center h-full font-mono font-semibold text-xs uppercase hover:bg-indigo hover:text-white transition-all duration-300 px-3">Important Dates</Link>
                    </li>
                </ul>

                {/* Register Button (Desktop) */}
                <div className="hidden lg:block relative group border-l-[3px] border-black">
                    <button 
                        onClick={() => setAuthorsDropdownOpen(!authorsDropdownOpen)}
                        className={`flex items-center justify-center h-full w-full bg-gold font-mono font-bold text-xs uppercase transition-all duration-300 px-3 hover:bg-indigo hover:text-white ${authorsDropdownOpen ? 'bg-indigo text-white' : ''}`}
                    >
                        For Authors ↓
                    </button>
                    <div className={`${authorsDropdownOpen ? 'block' : 'hidden'} group-hover:block absolute top-full right-0 bg-white border-[3px] border-black min-w-[240px] shadow-[10px_10px_0px_black]`}>
                        <Link href="/ieee-guidelines" onClick={() => setAuthorsDropdownOpen(false)} className="block px-5 py-4 font-mono text-xs border-b border-black hover:bg-gold hover:pl-7 transition-all">IEEE Guidelines</Link>
                        <Link href="/authors" onClick={() => setAuthorsDropdownOpen(false)} className="block px-5 py-4 font-mono text-xs border-b border-black hover:bg-gold hover:pl-7 transition-all">Author Guidelines</Link>
                        <Link href="/registration" onClick={() => setAuthorsDropdownOpen(false)} className="block px-5 py-4 font-mono text-xs hover:bg-gold hover:pl-7 transition-all">Registration</Link>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden flex flex-col justify-center items-center gap-1.5 px-5 bg-black"
                >
                    <span className="block w-6 h-0.5 bg-white transition-all"></span>
                    <span className="block w-6 h-0.5 bg-white transition-all"></span>
                    <span className="block w-6 h-0.5 bg-white transition-all"></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`${mobileMenuOpen ? 'block' : 'hidden'} lg:hidden bg-white border-t-[3px] border-black fixed top-[83px] left-0 right-0 bottom-0 overflow-y-auto z-40`}>
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block px-5 py-4 font-mono font-semibold text-sm uppercase border-b border-gray-200 hover:bg-indigo hover:text-white">Home</Link>
                <Link href="/committee" onClick={() => setMobileMenuOpen(false)} className="block px-5 py-4 font-mono font-semibold text-sm uppercase border-b border-gray-200 hover:bg-indigo hover:text-white">Committee</Link>
                <Link href="/cfp" onClick={() => setMobileMenuOpen(false)} className="block px-5 py-4 font-mono font-semibold text-sm uppercase border-b border-gray-200 hover:bg-indigo hover:text-white">Call for Papers</Link>
                <Link href="/#about" onClick={() => setMobileMenuOpen(false)} className="block px-5 py-4 font-mono font-semibold text-sm uppercase border-b border-gray-200 hover:bg-indigo hover:text-white">Purpose</Link>
                <Link href="/#audience" onClick={() => setMobileMenuOpen(false)} className="block px-5 py-4 font-mono font-semibold text-sm uppercase border-b border-gray-200 hover:bg-indigo hover:text-white">Target Audience</Link>
                <Link href="/#venue" onClick={() => setMobileMenuOpen(false)} className="block px-5 py-4 font-mono font-semibold text-sm uppercase border-b border-gray-200 hover:bg-indigo hover:text-white">Venue</Link>
                <Link href="/dates" onClick={() => setMobileMenuOpen(false)} className="block px-5 py-4 font-mono font-semibold text-sm uppercase border-b border-gray-200 hover:bg-indigo hover:text-white">Important Dates</Link>
                <Link href="/ieee-guidelines" onClick={() => setMobileMenuOpen(false)} className="block px-5 py-4 font-mono font-semibold text-sm uppercase bg-gold hover:bg-yellow-600">IEEE Guidelines</Link>
                <Link href="/authors" onClick={() => setMobileMenuOpen(false)} className="block px-5 py-4 font-mono font-semibold text-sm uppercase bg-gold hover:bg-yellow-600 border-t border-black">Author Guidelines</Link>
                <Link href="/registration" onClick={() => setMobileMenuOpen(false)} className="block px-5 py-4 font-mono font-semibold text-sm uppercase bg-gold hover:bg-yellow-600 border-t border-black">Registration</Link>
            </div>
        </nav>
    );
}
