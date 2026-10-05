'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import pages from '@/data/program-schedule.json';

export default function ProgramDetailsPage() {
    const [query, setQuery] = useState('');
    const [active, setActive] = useState(0);
    const [zoom, setZoom] = useState(100);
    const reader = useRef(null);
    const normalized = query.trim().toLowerCase().replace(/\s+/g, ' ');
    const matches = normalized ? pages.flatMap((page, pageIndex) =>
        page.lines.flatMap((line, lineIndex) => line.text.toLowerCase().replace(/\s+/g, ' ').includes(normalized)
            ? [{ pageIndex, lineIndex }] : [])) : [];
    const selected = matches[active];
    const selectedId = selected ? `schedule-${selected.pageIndex}-${selected.lineIndex}` : null;

    useEffect(() => {
        const container = reader.current;
        const target = selectedId && document.getElementById(selectedId);
        if (container && target) {
            const box = target.getBoundingClientRect();
            const viewport = container.getBoundingClientRect();
            container.scrollTo({
                top: container.scrollTop + box.top - viewport.top - container.clientHeight / 2,
                left: container.scrollLeft + box.left - viewport.left - container.clientWidth / 2 + box.width / 2,
                behavior: 'smooth',
            });
        }
    }, [selectedId, zoom]);

    function move(direction) {
        if (matches.length) setActive((active + direction + matches.length) % matches.length);
    }

    const buttonClass = 'border-2 border-black bg-white px-3 py-2 font-bold hover:bg-[var(--gold)] disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2';

    return (
        <main className="min-h-screen bg-[var(--bone)]">
            <PageHeader title="Program Schedule" subtitle="InGARSS 2026 Tentative Schedule" />
            <section className="max-w-6xl mx-auto px-4 py-10">
                <p className="mb-5 text-gray-700">Browse the tentative schedule below. Search for your paper ID, a date, or a session. Detailed Schedule will be posted on or before 10th October 2026.</p>
                <div className="border-[3px] border-black bg-white shadow-[6px_6px_0_var(--terracotta)]">
                    <div className="flex flex-wrap items-end gap-3 p-4 border-b-2 border-black">
                        <div className="flex-1 min-w-48">
                            <label htmlFor="schedule-search" className="block text-sm font-bold mb-1">Search the schedule</label>
                            <input id="schedule-search" type="search" value={query}
                                placeholder="Paper ID, date, or keyword…"
                                className="w-full border-2 border-black px-3 py-2"
                                onChange={(event) => { setQuery(event.target.value); setActive(0); }}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter') { event.preventDefault(); move(event.shiftKey ? -1 : 1); }
                                    if (event.key === 'Escape') { setQuery(''); setActive(0); }
                                }} />
                        </div>
                        <button className={buttonClass} disabled={!matches.length} onClick={() => move(-1)} aria-label="Previous search result">↑</button>
                        <button className={buttonClass} disabled={!matches.length} onClick={() => move(1)} aria-label="Next search result">↓</button>
                        <label className="text-sm font-bold">Zoom
                            <select value={zoom} onChange={(event) => setZoom(Number(event.target.value))} className="block border-2 border-black p-2 mt-1 bg-white">
                                <option value={100}>Fit width</option><option value={125}>125%</option><option value={150}>150%</option><option value={200}>200%</option>
                            </select>
                        </label>
                    </div>
                    <p role="status" className="px-4 py-2 text-sm border-b border-gray-300">
                        {normalized ? matches.length ? `Result ${active + 1} of ${matches.length} matching lines · Page ${selected.pageIndex + 1} of ${pages.length}` : 'No results found. Try another paper ID or keyword.' : `${pages.length} pages · Scroll to read · Enter / Shift+Enter to navigate search results`}
                    </p>
                    <div ref={reader} role="region" aria-label="Scrollable program schedule" tabIndex={0}
                        className="h-[75vh] min-h-80 overflow-auto bg-gray-200 p-3 sm:p-6">
                        <div style={{ width: `${zoom}%` }} className="space-y-5 mx-auto">
                            {pages.map((page, pageIndex) => (
                                <section key={page.image} aria-label={`Schedule page ${pageIndex + 1}`}>
                                    <div className="relative bg-white shadow-md" style={{ aspectRatio: `${page.width} / ${page.height}` }}>
                                        <Image src={page.image} alt={`Tentative program schedule, page ${pageIndex + 1}`} width={1490} height={2105} className="block w-full h-auto" draggable={false} />
                                        {page.lines.map((line, lineIndex) => {
                                            const found = normalized && line.text.toLowerCase().replace(/\s+/g, ' ').includes(normalized);
                                            const id = `schedule-${pageIndex}-${lineIndex}`;
                                            return <span key={id} id={id} aria-hidden="true" className={`absolute pointer-events-none ${found ? id === selectedId ? 'bg-orange-400/40 outline-2 outline-orange-600' : 'bg-yellow-300/40' : ''}`}
                                                style={{ left: `${line.left}%`, top: `${line.top}%`, width: `${line.width}%`, height: `${line.height}%` }} />;
                                        })}
                                    </div>
                                    <div className="sr-only">{page.lines.map((line, index) => <p key={index}>{line.text}</p>)}</div>
                                    <p className="text-center text-xs font-mono mt-2">Page {pageIndex + 1} of {pages.length}</p>
                                </section>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
