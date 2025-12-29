'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-black z-50 border-b-[3px] border-black ">
            <div className="grid grid-cols-[1fr_auto] lg:grid-cols-[200px_1fr_160px] h-20">
                {/* Brand */}
                <div className="bg-terracotta text-white flex items-center justify-left lg:justify-center font-bold text-xs sm:text-sm lg:text-base tracking-wider px-4 lg:px-5 border-r-[3px] border-black">
                    <img src="/assets/logo.jpeg" alt="InGARSS 2026" className="h-16 w-16 mr-3 object-cover rounded-md border-2 border-white shadow-sm" />
                    <span className="inline lg:hidden text-left leading-tight">India Geoscience &<br/>Remote Sensing<br/>Symposium 2026</span>
                    <span className="hidden lg:inline whitespace-nowrap">InGARSS 2026</span>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden lg:grid lg:grid-cols-5 bg-white h-full uppercase">
                    <li className="border-r border-gray-400">
                        <Link href="/" className="flex items-center justify-center h-full font-mono font-semibold text-xs   hover:bg-indigo hover:text-white transition-all duration-300 px-3">Home</Link>
                    </li>
                    <li className="border-r border-gray-400">
                        <Link href="/committee" className="flex items-center justify-center h-full font-mono font-semibold text-xs   hover:bg-indigo hover:text-white transition-all duration-300 px-3">Committee</Link>
                    </li>
                    {/* <li className="border-r border-gray-400 relative group">
                        <div className="flex items-center justify-center h-full w-full font-mono font-semibold text-xs   cursor-pointer group-hover:bg-indigo group-hover:text-white transition-all duration-300 px-3">
                            People ↓
                        </div>
                        <div className="hidden group-hover:block absolute top-full left-0 bg-white border-[3px] border-black min-w-[240px] shadow-[10px_10px_0px_black]">
                            <Link href="/committee" className="block px-5 py-4 font-mono text-xs border-b border-black hover:bg-gold hover:pl-7 transition-all">Committee</Link>
                            <Link href="/speakers" className="block px-5 py-4 font-mono text-xs hover:bg-gold hover:pl-7 transition-all">Speakers</Link>
                        </div>
                    </li> */}
                        <li className=" relative group border-r border-gray-400">
                        <div className="flex items-center justify-center h-full w-full font-mono font-semibold text-xs   cursor-pointer group-hover:bg-indigo group-hover:text-white transition-all duration-300 px-3">
                            For Authors ↓
                        </div>
                        <div className="hidden group-hover:block absolute top-full left-0 bg-white border-[3px] border-black min-w-[240px] shadow-[10px_10px_0px_black]">
                            <Link href="/ieee-guidelines" className="block px-5 py-4 font-mono text-xs border-b border-black hover:bg-gold hover:pl-7 transition-all">IEEE Guidelines</Link>
                            <Link href="/authors" className="block px-5 py-4 font-mono text-xs border-b border-black hover:bg-gold hover:pl-7 transition-all">Author Guidelines</Link>
                            <Link href="/cfp" className="block px-5 py-4 font-mono text-xs border-b border-black hover:bg-gold hover:pl-7 transition-all">Call for Papers</Link>
                            <Link href="/registration" className="block px-5 py-4 font-mono text-xs hover:bg-gold hover:pl-7 transition-all">Registration</Link>
                        </div>
                    </li>

                    <li className="border-r border-gray-400 relative group">
                        <Link href="/dates" className="flex items-center justify-center h-full font-mono font-semibold text-xs   hover:bg-indigo hover:text-white transition-all duration-300 px-3">Important Dates</Link>
                    </li>

                    <li className="relative group">
                                               <Link href="/#venue" className="flex items-center justify-center h-full font-mono font-semibold text-xs   hover:bg-indigo hover:text-white transition-all duration-300 px-3">Venue</Link>

                        
                    </li>
                </ul>
                <div className="hidden lg:block border-l-[3px] border-black bg-[#CEA964]">
    <Link 
        href="/submit" 
        className="flex items-center justify-center h-full w-full px-2 group"
    >
        <span className="relative text-sm uppercase flex items-center gap-3 px-5 py-3 bg-[#CEA964] text-black font-mono font-bold rounded text-xs border-2 border-black shadow-[5px_5px_0px_#000] group-hover:shadow-none group-hover:translate-x-[5px] group-hover:translate-y-[5px] transition-all duration-150">
            Submit Paper
        </span>
    </Link>
</div>

                {/* Mobile Menu Toggle */}
                <button 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden flex flex-col justify-center items-center gap-1.5 px-5 bg-gold"
                >
                    <span className="block w-6 h-0.5 bg-black transition-all"></span>
                    <span className="block w-6 h-0.5 bg-black transition-all"></span>
                    <span className="block w-6 h-0.5 bg-black transition-all"></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`${mobileMenuOpen ? 'block' : 'hidden'} lg:hidden bg-white border-t-[3px] border-black fixed top-[83px] left-0 right-0 bottom-0 overflow-y-auto z-40`}>
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block px-5 py-4 font-mono font-semibold text-sm   border-b border-gray-200 hover:bg-indigo hover:text-white">Home</Link>
                
                {/* People Section */}
                <div className="border-b border-gray-200">
                    <div className="px-5 py-3 font-mono font-bold text-xs   text-gray-500 bg-gray-50">People</div>
                    <Link href="/committee" onClick={() => setMobileMenuOpen(false)} className="block px-7 py-3 font-mono text-sm border-b border-gray-100 hover:bg-indigo hover:text-white">Committee</Link>
                    <Link href="/speakers" onClick={() => setMobileMenuOpen(false)} className="block px-7 py-3 font-mono text-sm hover:bg-indigo hover:text-white">Speakers</Link>
                </div>
                
                {/* Program Details Section */}
                <div className="border-b border-gray-200">
                    <div className="px-5 py-3 font-mono font-bold text-xs   text-gray-500 bg-gray-50">Program Details</div>
                    <Link href="/#venue" onClick={() => setMobileMenuOpen(false)} className="block px-7 py-3 font-mono text-sm border-b border-gray-100 hover:bg-indigo hover:text-white">Venue: Hyderabad</Link>
                </div>
                
                {/* For Authors Section */}
                <div className="border-b border-gray-200">
                    <div className="px-5 py-3 font-mono font-bold text-xs   text-gray-500 bg-gray-50">For Authors</div>
                    <Link href="/ieee-guidelines" onClick={() => setMobileMenuOpen(false)} className="block px-7 py-3 font-mono text-sm border-b border-gray-100 hover:bg-indigo hover:text-white">IEEE Guidelines</Link>
                    <Link href="/authors" onClick={() => setMobileMenuOpen(false)} className="block px-7 py-3 font-mono text-sm border-b border-gray-100 hover:bg-indigo hover:text-white">Author Guidelines</Link>
                    <Link href="/cfp" onClick={() => setMobileMenuOpen(false)} className="block px-7 py-3 font-mono text-sm border-b border-gray-100 hover:bg-indigo hover:text-white">Call for Papers</Link>
                    <Link href="/registration" onClick={() => setMobileMenuOpen(false)} className="block px-7 py-3 font-mono text-sm hover:bg-indigo hover:text-white">Registration</Link>
                </div>
                
                <Link href="/dates" onClick={() => setMobileMenuOpen(false)} className="block px-5 py-4 font-mono font-semibold text-sm   border-b border-gray-200 hover:bg-indigo hover:text-white">Important Dates</Link>
                
                {/* Submit Paper CTA */}
                <div className="bg-gold p-4">
                    <Link href="/submit" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2 px-6 py-4 font-mono font-bold text-base  bg-black text-gold border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.3)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-200">
                        Submit Paper
                    </Link>
                </div>
            </div>
        </nav>
    );
}
