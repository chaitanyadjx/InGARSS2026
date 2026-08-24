'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Prevent scroll on mobile when menu opens
    useEffect(() => {
        if (mobileMenuOpen && window.innerWidth < 1024) {
            // Save current scroll position
            const scrollY = window.scrollY;
            // Restore it immediately to prevent auto-scroll
            window.scrollTo(0, scrollY);
        }
    }, [mobileMenuOpen]);

    return (
        /* - Mobile: 'relative' so it stays at the top of the page and pushes content.
           - Desktop: 'lg:fixed' so it stays at the top of the screen.
        */
        <>
            <div className="hidden lg:block h-20 w-full" aria-hidden="true" />
            <nav className="relative lg:fixed top-0 w-full bg-black z-50 border-b-[3px] border-black">
                <div className="grid grid-cols-[1fr_auto] lg:grid-cols-[200px_1fr] h-20">
                    {/* Brand */}
                    <div className="bg-terracotta text-white flex items-center justify-left lg:justify-center font-bold text-xs sm:text-sm lg:text-base tracking-wider px-4 lg:px-5 border-r-[3px] border-black">
                        <Link href="/" className="flex items-center">
                            <img src="/assets/logo.jpeg" alt="InGARSS 2026" className="lg:hidden h-16 w-16 mr-3 object-cover rounded-md border-2 border-white shadow-sm" />
                        </Link>
                        <span className="inline lg:hidden text-left leading-tight">India Geoscience &<br />Remote Sensing<br />Symposium 2026</span>
                        <span className="hidden lg:inline whitespace-nowrap">InGARSS 2026</span>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:grid lg:grid-cols-6 bg-white h-full uppercase">
                        <li className="border-r border-gray-400">
                            <Link href="/" className="flex items-center justify-center h-full font-mono font-semibold text-xs hover:bg-indigo hover:text-white transition-all duration-300 px-3">Home</Link>
                        </li>
                        <li className="relative group border-r border-gray-400">
                            <div className="flex items-center justify-center h-full w-full font-mono font-semibold text-xs cursor-pointer group-hover:bg-indigo group-hover:text-white transition-all duration-300 px-3">
                                People ↓
                            </div>
                            <div className="hidden group-hover:block absolute top-full left-0 bg-white border-[3px] border-black min-w-[240px] shadow-[10px_10px_0px_black]">
                                <Link href="/committee" className="block px-5 py-4 font-mono text-xs border-b border-black hover:bg-gold hover:pl-7 transition-all">Committee</Link>
                                <Link href="/speaker" className="block px-5 py-4 font-mono text-xs hover:bg-gold hover:pl-7 transition-all">Speakers</Link>
                            </div>
                        </li>
                        <li className="relative group border-r border-gray-400">
                            <div className="flex items-center justify-center h-full w-full font-mono font-semibold text-xs cursor-pointer group-hover:bg-indigo group-hover:text-white transition-all duration-300 px-3">
                                Programs ↓
                            </div>
                            <div className="hidden group-hover:block absolute top-full left-0 bg-white border-[3px] border-black min-w-[240px] shadow-[10px_10px_0px_black]">
                                <Link href="/workshop" className="block px-5 py-4 font-mono text-xs border-b border-black hover:bg-gold hover:pl-7 transition-all">Workshop</Link>
                                <Link href="/hackathon" className="block px-5 py-4 font-mono text-xs border-b border-black hover:bg-gold hover:pl-7 transition-all">YP HACKATHON</Link>
                                <Link href="/program-details" className="block px-5 py-4 font-mono text-xs hover:bg-gold hover:pl-7 transition-all">Program Details</Link>
                            </div>
                        </li>
                        <li className="relative group border-r border-gray-400">
                            <div className="flex items-center justify-center h-full w-full font-mono font-semibold text-xs cursor-pointer group-hover:bg-indigo group-hover:text-white transition-all duration-300 px-3">
                                For Authors ↓
                            </div>
                            <div className="hidden group-hover:block absolute top-full left-0 bg-white border-[3px] border-black min-w-[240px] shadow-[10px_10px_0px_black]">
                                <Link href="/dates" className="block px-5 py-4 font-mono text-xs border-b border-black hover:bg-gold hover:pl-7 transition-all">Important Dates</Link>
                                <Link href="/ieee-guidelines" className="block px-5 py-4 font-mono text-xs border-b border-black hover:bg-gold hover:pl-7 transition-all">IEEE Guidelines</Link>
                                <Link href="/authors" className="block px-5 py-4 font-mono text-xs border-b border-black hover:bg-gold hover:pl-7 transition-all">Author Guidelines</Link>
                                <Link href="/cfp" className="block px-5 py-4 font-mono text-xs border-b border-black hover:bg-gold hover:pl-7 transition-all">Call for Papers</Link>
                                <Link href="/ccs" className="block px-5 py-4 font-mono text-xs border-b border-black hover:bg-gold hover:pl-7 transition-all">CCS/Workshop</Link>
                                <Link href="/travel-grant" className="block px-5 py-4 font-mono text-xs border-b border-black hover:bg-gold hover:pl-7 transition-all">Travel Grant</Link>
                                <Link href="/registration" className="block px-5 py-4 font-mono text-xs hover:bg-gold hover:pl-7 transition-all">Registration</Link>
                            </div>
                        </li>
                        <li className="relative group border-r border-gray-400">
                            <div className="flex items-center justify-center h-full w-full font-mono font-semibold text-xs cursor-pointer group-hover:bg-indigo group-hover:text-white transition-all duration-300 px-3">
                                Sponsors ↓
                            </div>
                            <div className="hidden group-hover:block absolute top-full right-0 bg-white border-[3px] border-black min-w-[240px] shadow-[10px_10px_0px_black]">
                                <Link href="/sponsorship-details" className="block px-5 py-4 font-mono text-xs border-b border-black hover:bg-gold hover:pl-7 transition-all">Sponsorship Details</Link>
                                <Link href="/our-sponsors" className="block px-5 py-4 font-mono text-xs hover:bg-gold hover:pl-7 transition-all">Our Sponsors</Link>
                            </div>
                        </li>
                        <li className="relative group">
                            <div className="flex items-center justify-center h-full w-full font-mono font-semibold text-xs cursor-pointer group-hover:bg-indigo group-hover:text-white transition-all duration-300 px-3 text-center">
                                General Info ↓
                            </div>
                            <div className="hidden group-hover:block absolute top-full right-0 bg-white border-[3px] border-black min-w-[240px] shadow-[10px_10px_0px_black]">
                                <Link href="/past-conferences" className="block px-5 py-4 font-mono text-xs border-b border-black hover:bg-gold hover:pl-7 transition-all">Past Conferences</Link>
                                <Link href="/visa" className="block px-5 py-4 font-mono text-xs border-b border-black hover:bg-gold hover:pl-7 transition-all">Visa Page</Link>
                                <Link href="/#venue" className="block px-5 py-4 font-mono text-xs border-b border-black hover:bg-gold hover:pl-7 transition-all">Venue</Link>
                                <Link href="/accommodation" className="block px-5 py-4 font-mono text-xs hover:bg-gold hover:pl-7 transition-all">Accommodation</Link>
                            </div>
                        </li>
                    </ul>



                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setMobileMenuOpen(!mobileMenuOpen);
                        }}
                        className="lg:hidden flex flex-col justify-center items-center gap-1.5 px-5 bg-gold border-l-[3px] border-black"
                    >
                        <span className="block w-6 h-0.5 bg-black transition-all"></span>
                        <span className="block w-6 h-0.5 bg-black transition-all"></span>
                        <span className="block w-6 h-0.5 bg-black transition-all"></span>
                    </button>
                </div>

                {/* Mobile Menu - "Relative" position so it pushes content down */}
                <div className={`${mobileMenuOpen ? 'block' : 'hidden'} lg:hidden bg-white border-t-[3px] border-black w-full relative`}>
                    <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block px-5 py-4 font-mono font-semibold text-sm border-b border-gray-200 hover:bg-indigo hover:text-white uppercase">Home</Link>

                    <div className="border-b border-gray-200">
                        <div className="px-5 py-3 font-mono font-bold text-xs text-gray-500 bg-gray-50 uppercase">People</div>
                        <Link href="/committee" onClick={() => setMobileMenuOpen(false)} className="block px-8 py-3 font-mono text-sm border-b border-gray-100 hover:bg-indigo hover:text-white">Committee</Link>
                        <Link href="/speaker" onClick={() => setMobileMenuOpen(false)} className="block px-8 py-3 font-mono text-sm hover:bg-indigo hover:text-white">Speakers</Link>
                    </div>

                    <div className="border-b border-gray-200">
                        <div className="px-5 py-3 font-mono font-bold text-xs text-gray-500 bg-gray-50 uppercase">Programs</div>
                        <Link href="/workshop" onClick={() => setMobileMenuOpen(false)} className="block px-8 py-3 font-mono text-sm border-b border-gray-100 hover:bg-indigo hover:text-white">Workshop</Link>
                        <Link href="/hackathon" onClick={() => setMobileMenuOpen(false)} className="block px-8 py-3 font-mono text-sm border-b border-gray-100 hover:bg-indigo hover:text-white">YP HACKATHON</Link>
                        <Link href="/program-details" onClick={() => setMobileMenuOpen(false)} className="block px-8 py-3 font-mono text-sm hover:bg-indigo hover:text-white">Program Details</Link>
                    </div>

                    <div className="border-b border-gray-200">
                        <div className="px-5 py-3 font-mono font-bold text-xs text-gray-500 bg-gray-50 uppercase">For Authors</div>
                        <Link href="/dates" onClick={() => setMobileMenuOpen(false)} className="block px-8 py-3 font-mono text-sm border-b border-gray-100 hover:bg-indigo hover:text-white">Important Dates</Link>
                        <Link href="/ieee-guidelines" onClick={() => setMobileMenuOpen(false)} className="block px-8 py-3 font-mono text-sm border-b border-gray-100 hover:bg-indigo hover:text-white">IEEE Guidelines</Link>
                        <Link href="/authors" onClick={() => setMobileMenuOpen(false)} className="block px-8 py-3 font-mono text-sm border-b border-gray-100 hover:bg-indigo hover:text-white">Author Guidelines</Link>
                        <Link href="/cfp" onClick={() => setMobileMenuOpen(false)} className="block px-8 py-3 font-mono text-sm border-b border-gray-100 hover:bg-indigo hover:text-white">Call for Papers</Link>
                        <Link href="/ccs" onClick={() => setMobileMenuOpen(false)} className="block px-8 py-3 font-mono text-sm border-b border-gray-100 hover:bg-indigo hover:text-white">CCS/Workshop</Link>
                        <Link href="/travel-grant" onClick={() => setMobileMenuOpen(false)} className="block px-8 py-3 font-mono text-sm border-b border-gray-100 hover:bg-indigo hover:text-white">Travel Grant</Link>
                        <Link href="/registration" onClick={() => setMobileMenuOpen(false)} className="block px-8 py-3 font-mono text-sm hover:bg-indigo hover:text-white">Registration</Link>
                    </div>

                    <div className="border-b border-gray-200">
                        <div className="px-5 py-3 font-mono font-bold text-xs text-gray-500 bg-gray-50 uppercase">Sponsors</div>
                        <Link href="/sponsorship-details" onClick={() => setMobileMenuOpen(false)} className="block px-8 py-3 font-mono text-sm border-b border-gray-100 hover:bg-indigo hover:text-white">Sponsorship Details</Link>
                        <Link href="/our-sponsors" onClick={() => setMobileMenuOpen(false)} className="block px-8 py-3 font-mono text-sm hover:bg-indigo hover:text-white">Our Sponsors</Link>
                    </div>

                    <div>
                        <div className="px-5 py-3 font-mono font-bold text-xs text-gray-500 bg-gray-50 uppercase border-b border-gray-200">General Info</div>
                        <Link href="/past-conferences" onClick={() => setMobileMenuOpen(false)} className="block px-8 py-3 font-mono text-sm border-b border-gray-100 hover:bg-indigo hover:text-white">Past Conferences</Link>
                        <Link href="/visa" onClick={() => setMobileMenuOpen(false)} className="block px-8 py-3 font-mono text-sm border-b border-gray-100 hover:bg-indigo hover:text-white">Visa Page</Link>
                        <Link href="/#venue" onClick={() => setMobileMenuOpen(false)} className="block px-8 py-3 font-mono text-sm border-b border-gray-100 hover:bg-indigo hover:text-white">Venue</Link>
                        <Link href="/accommodation" onClick={() => setMobileMenuOpen(false)} className="block px-8 py-3 font-mono text-sm hover:bg-indigo hover:text-white">Accommodation</Link>
                    </div>
                </div>
            </nav>
        </>

    );
}