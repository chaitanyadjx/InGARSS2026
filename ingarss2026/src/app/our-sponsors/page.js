import PageHeader from '@/components/PageHeader';
import sponsorsData from '@/data/sponsors.json';

const goldSponsors = sponsorsData.goldSponsors;
const bronzeSponsors = sponsorsData.bronzeSponsors;

const sponsors = [
    { name: 'GRSS', logo: '/assets/sponser_grss_logo.png' },
    ...goldSponsors.filter((s) => s.name === 'Vylor'),
    ...bronzeSponsors.filter((s) => s.name === 'NRSC'),
    ...goldSponsors.filter((s) => s.name !== 'Vylor'),
    ...bronzeSponsors.filter((s) => s.name !== 'NRSC'),
    ...sponsorsData.eventSponsors,
    ...sponsorsData.startupExhibits,
];

export default function OurSponsorsPage() {
    return (
        <main className="min-h-screen bg-[var(--bone)]">
            {/* Page Header */}
            <PageHeader title="Our Sponsors" subtitle="Partners of InGARSS 2026" />

            {/* Sponsors Section */}
            <section className="px-4 sm:px-6 md:px-[8%] py-16 md:py-20 bg-white border-b-[3px] border-black text-center min-h-[60vh]">
                <div className="max-w-6xl mx-auto">
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed">
                        We are immensely grateful to our sponsors for their generous support and commitment to advancing the field of Geoscience and Remote Sensing. Their partnership makes InGARSS 2026 possible.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-extrabold text-indigo mb-12">
                        Sponsors
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                        {sponsors.map((sponsor) => (
                            <div key={sponsor.name} className="bg-white border-[3px] border-black p-8 shadow-[8px_8px_0_black] hover:-translate-y-1 hover:shadow-[12px_12px_0_var(--gold)] transition-all duration-300 w-full max-w-sm flex flex-col items-center">
                                <img src={sponsor.logo} alt={sponsor.name} className="w-full h-auto object-contain mb-6 max-h-40" />
                                <h3 className="text-xl font-bold text-indigo">{sponsor.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
