import Image from "next/image";
import Link from "next/link";

const navigationLinks = [
    ["Home", "/"],
    ["Committee", "/committee"],
    ["Speakers", "/speaker"],
    ["Call for Papers", "/cfp"],
    ["Important Dates", "/dates"],
    ["Author Guidelines", "/authors"],
    ["Registration", "/registration"],
    ["Submit Paper", "/submit"],
    ["Sponsors", "/sponsors"],
    ["Past Conferences", "/past-conferences"],
];

export default function Footer() {
    return (
        <footer className="border-t-4 border-terracotta bg-black text-white">
            <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12 lg:px-10 lg:py-16">
                <section>
                    <h2 className="inline-block border-b-4 border-terracotta pb-2 text-3xl font-bold md:text-4xl">
                        InGARSS 2026
                    </h2>
                    <p className="mt-5 max-w-md text-sm leading-6 text-white/65">
                        The flagship regional conference of the IEEE Geoscience and Remote Sensing Society (GRSS). Join us in Hyderabad for the future of remote sensing technology.
                    </p>
                    <div className="mt-6 space-y-2 border-t border-white/10 pt-5 text-sm">
                        <p className="text-white/65">Hyderabad, Telangana, India</p>
                        <a href="mailto:ingarss2026@gmail.com" className="inline-block font-mono font-semibold text-gold transition-colors hover:text-white">
                            ingarss2026@gmail.com
                        </a>
                    </div>

                    <div className="mt-8 space-y-3 text-sm">
                        <p className="font-mono text-sm font-bold uppercase tracking-wider text-gold">Conference Manager</p>
                        <div className="block max-w-xs overflow-hidden rounded-sm bg-white ring-1 ring-white/20">
                            <Image
                                src="/assets/alpcord-logo.jpeg"
                                alt="Summit Alpcord Network — Event & Conferences Management Company Pvt. Ltd."
                                width={643}
                                height={77}
                                className="h-auto w-full"
                            />
                        </div>
                        <div className="space-y-1">
                            <p className="font-semibold">Mr. Vikram Pola</p>
                            <a href="tel:+919014666161" className="block w-fit text-white/65 transition-colors hover:text-gold">
                                +91 90146 66161
                            </a>
                            <a href="mailto:hyderabad@alpcord.net" className="block w-fit break-all text-white/65 transition-colors hover:text-gold">
                                hyderabad@alpcord.net
                            </a>
                        </div>
                    </div>
                </section>

                <nav aria-label="Footer navigation" className="lg:border-l lg:border-white/10 lg:pl-12">
                    <h2 className="mb-5 font-mono text-sm uppercase tracking-wider text-gold">
                        Navigation
                    </h2>
                    <ul className="grid grid-cols-2 gap-x-8 gap-y-5">
                        {navigationLinks.map(([label, href]) => (
                            <li key={href}>
                                <Link href={href} className="text-base font-semibold text-white/80 transition-colors hover:text-gold">
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/45 sm:px-8">
                © 2026 InGARSS. IEEE Geoscience and Remote Sensing Society.
            </div>
        </footer>
    );
}
