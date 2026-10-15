const TEMPLATES = [
    { label: 'Poster Template', href: '/templates/InGARSS2026_Poster_Template_2.pptx' },
    { label: 'Presentation Template', href: '/templates/InGARSS2026_PPT_Template.pptx' },
];

export default function TemplateDownloads() {
    return (
        <div className="bg-white border-[3px] border-black p-6 sm:p-8 shadow-[8px_8px_0_var(--terracotta)]">
            <h2 className="font-mono text-[var(--indigo)] text-xl sm:text-2xl font-extrabold mb-2">Download Templates</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-5">Official InGARSS 2026 presentation and poster templates for authors.</p>
            <div className="flex flex-wrap gap-3">
                {TEMPLATES.map((template) => (
                    <a
                        key={template.href}
                        href={template.href}
                        download
                        className="font-mono font-bold text-xs sm:text-sm bg-gold text-black px-5 py-3 border-2 border-black shadow-[4px_4px_0_black] hover:-translate-y-0.5 hover:shadow-[6px_6px_0_black] transition-all"
                    >
                        {template.label} ↓
                    </a>
                ))}
            </div>
        </div>
    );
}
