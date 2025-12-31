import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black text-white border-t-[3px] border-black">
            <div className="px-5 md:px-[8%] py-12 md:py-16 grid gap-10 md:grid-cols-2 items-start">
                {/* Left - Brand & Contact */}
                <div className="flex flex-col gap-8">
                    <div>
                        <div className="text-3xl md:text-4xl font-bold border-b-4 border-terracotta inline-block w-fit mb-4">InGARSS 2026</div>
                        <p className="max-w-md text-sm opacity-70 leading-relaxed">The flagship regional conference of the IEEE Geoscience and Remote Sensing Society (GRSS). Join us in Hyderabad for the future of remote sensing technology.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 pt-4 border-t border-white/10">
                        <p className="text-sm opacity-70">Hyderabad, Telangana, India</p>
                        <a href="mailto:ingarss2026@gmail.com" className="font-mono font-bold text-gold text-sm hover:underline">ingarss2026@gmail.com</a>
                    </div>
                </div>

                {/* Right - Navigation */}
                <div>
                    <h5 className="font-mono text-gold text-sm mb-5 tracking-wider">Navigation</h5>
                    <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
                        <li><Link href="/" className="text-sm font-semibold hover:text-gold transition-all">Home</Link></li>
                        <li><Link href="/committee" className="text-sm font-semibold hover:text-gold transition-all">Committee</Link></li>
                        {/* <li><Link href="/speakers" className="text-sm font-semibold hover:text-gold transition-all">KeyNote Speakers</Link></li> */}
                        <li><Link href="/cfp" className="text-sm font-semibold hover:text-gold transition-all">Call for Papers</Link></li>
                        <li><Link href="/dates" className="text-sm font-semibold hover:text-gold transition-all">Important Dates</Link></li>
                        <li><Link href="/authors" className="text-sm font-semibold hover:text-gold transition-all">Author Guidelines</Link></li>
                        <li><Link href="/registration" className="text-sm font-semibold hover:text-gold transition-all">Registration</Link></li>
                        <li><Link href="/submit" className="text-sm font-semibold hover:text-gold transition-all">Submit Paper</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
