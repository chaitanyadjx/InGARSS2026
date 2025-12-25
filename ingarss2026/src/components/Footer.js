import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black text-white px-5 md:px-[8%] py-12 md:py-20 grid gap-8 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] border-t-[3px] border-black">
            <div className="flex flex-col gap-6">
                <div className="text-3xl md:text-4xl font-bold uppercase border-b-4 border-terracotta inline-block w-fit">InGARSS &apos;26</div>
                <p className="max-w-md text-sm opacity-70 leading-relaxed">The flagship regional conference of the IEEE Geoscience and Remote Sensing Society (GRSS). Join us in Hyderabad for the future of remote sensing technology.</p>
            </div>

            <div>
                <h5 className="font-mono text-gold uppercase text-sm mb-6 tracking-wider">Navigation</h5>
                <ul className="flex flex-col gap-3">
                    <li><Link href="/" className="text-sm font-semibold hover:text-gold hover:translate-x-1 inline-block transition-all">Home</Link></li>
                    <li><Link href="/committee" className="text-sm font-semibold hover:text-gold hover:translate-x-1 inline-block transition-all">Committee</Link></li>
                    <li><Link href="/cfp" className="text-sm font-semibold hover:text-gold hover:translate-x-1 inline-block transition-all">Call for Papers</Link></li>
                    <li><Link href="/dates" className="text-sm font-semibold hover:text-gold hover:translate-x-1 inline-block transition-all">Important Dates</Link></li>
                </ul>
            </div>

            <div>
                <h5 className="font-mono text-gold uppercase text-sm mb-6 tracking-wider">Legal & Contact</h5>
                <ul className="flex flex-col gap-3 mb-6">
                    <li><Link href="/authors" className="text-sm font-semibold hover:text-gold hover:translate-x-1 inline-block transition-all">Author Guidelines</Link></li>
                    <li><Link href="/ieee-guidelines" className="text-sm font-semibold hover:text-gold hover:translate-x-1 inline-block transition-all">IEEE Guidelines</Link></li>
                </ul>
                <p className="text-sm leading-relaxed mb-4">Hyderabad, Telangana, India</p>
                <a href="mailto:ingarss2026@gmail.com" className="font-mono font-bold text-gold text-base hover:underline">ingarss2026@gmail.com</a>
            </div>
        </footer>
    );
}
