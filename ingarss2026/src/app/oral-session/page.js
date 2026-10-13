'use client';

import { useMemo, useState } from 'react';
import PageHeader from '@/components/PageHeader';
import sessionsData from '@/data/oral-sessions.json';

const { sessions } = sessionsData;
const DAYS = [...new Set(sessions.map((s) => s.day))].sort();

function SessionCard({ session, open, onToggle, query }) {
    const matchesPaper = (paper) => {
        if (!query) return false;
        return `${paper.id} ${paper.authors} ${paper.title}`.toLowerCase().includes(query);
    };

    return (
        <article className={`border-[3px] border-black bg-white transition-all duration-200 ${open ? 'shadow-[10px_10px_0_var(--terracotta)]' : 'shadow-[6px_6px_0_black] hover:-translate-y-0.5 hover:shadow-[9px_9px_0_black]'}`}>
            <button onClick={onToggle} className="w-full text-left p-4 sm:p-5">
                <div className="flex flex-wrap items-center gap-2">
                    <span className={`font-mono font-bold text-xs px-3 py-1 border-2 border-black ${session.section === 'poster' ? 'bg-terracotta text-white' : 'bg-gold text-black'}`}>
                        {session.id}
                    </span>
                    <span className="font-mono text-[0.65rem] uppercase tracking-widest text-gray-500">
                        {session.section === 'poster' ? 'Poster Session' : 'Oral Session'}
                    </span>
                </div>
                <h3 className="mt-3 text-lg md:text-xl font-extrabold text-indigo leading-tight">
                    {session.track}
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-gray-700">
                    <span>{session.date}</span>
                    <span>{session.time}</span>
                    <span className="font-bold text-terracotta">{session.papers.length} {session.section === 'poster' ? 'Posters' : 'Papers'}</span>
                </div>
                {session.chairs && (
                    <p className="mt-2 font-mono text-xs text-gray-600">Chairs: {session.chairs}</p>
                )}
                <span className="mt-3 inline-block font-mono text-[0.7rem] font-bold underline decoration-2 underline-offset-2">
                    {open ? 'HIDE PAPERS ↑' : 'VIEW PAPERS ↓'}
                </span>
            </button>

            {open && (
                <div className="border-t-[3px] border-black">
                    <table className="w-full border-collapse text-left">
                        <thead>
                            <tr className="bg-[var(--bone)] font-mono uppercase text-[0.65rem] text-gray-600">
                                <th className="px-4 py-2 border-b-2 border-black w-32">Paper ID</th>
                                <th className="px-4 py-2 border-b-2 border-black">Authors &amp; Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            {session.papers.map((paper, index) => {
                                const hit = matchesPaper(paper);
                                return (
                                    <tr key={`${paper.id}-${index}`} className={`align-top ${hit ? 'bg-[var(--gold)]/25' : 'odd:bg-white even:bg-[var(--bone)]/60'}`}>
                                        <td className="px-4 py-3 border-b border-black/15 font-mono text-xs whitespace-nowrap">{paper.id}</td>
                                        <td className="px-4 py-3 border-b border-black/15 text-sm">
                                            <span className="block font-semibold">{paper.authors}</span>
                                            <span className="block text-gray-700">{paper.title}</span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </article>
    );
}

export default function OralSessionPage() {
    const [query, setQuery] = useState('');
    const [topic, setTopic] = useState('all');
    const [day, setDay] = useState('all');
    const [openId, setOpenId] = useState(null);

    const normalized = query.trim().toLowerCase().replace(/\s+/g, ' ');

    const visible = useMemo(() => sessions.filter((session) => {
        if (topic !== 'all' && session.section !== topic) return false;
        if (day !== 'all' && session.day !== day) return false;
        if (!normalized) return true;
        if (`${session.id} ${session.track}`.toLowerCase().includes(normalized)) return true;
        return session.papers.some((paper) => `${paper.id} ${paper.authors} ${paper.title}`.toLowerCase().includes(normalized));
    }), [topic, day, normalized]);

    const grouped = useMemo(() => {
        const map = new Map();
        visible.forEach((session) => {
            if (!map.has(session.day)) map.set(session.day, []);
            map.get(session.day).push(session);
        });
        return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]));
    }, [visible]);

    const visiblePapers = (section) => visible.filter((session) => session.section === section).reduce((total, session) => total + session.papers.length, 0);
    const oralPapers = visiblePapers('oral');
    const posterPapers = visiblePapers('poster');

    const countBy = (section) => sessions.filter((session) => session.section === section).length;
    const totalPapers = sessions.filter((session) => session.section === 'oral').reduce((total, session) => total + session.papers.length, 0);
    const totalPosters = sessions.filter((session) => session.section === 'poster').reduce((total, session) => total + session.papers.length, 0);

    const chipClass = (selected) => `font-mono text-xs font-bold px-4 py-2 border-[3px] border-black transition-all ${selected ? 'bg-indigo text-white shadow-[4px_4px_0_var(--gold)]' : 'bg-white shadow-[4px_4px_0_black] hover:-translate-y-0.5'}`;

    return (
        <main className="min-h-screen bg-[var(--bone)]">
            <PageHeader title="Oral and Poster Sessions" />

            <section className="px-4 sm:px-6 md:px-[8%] py-12 md:py-16">
                <div className="max-w-6xl mx-auto">
                    <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
                        {sessionsData.subtitle} — {sessions.length} sessions across 02–04 December 2026.
                    </p>
                    <p className="mt-3 font-mono text-xs text-gray-500">{sessionsData.note}</p>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <span className="font-mono text-xs font-bold bg-indigo text-white border-[3px] border-black px-4 py-2 shadow-[4px_4px_0_var(--gold)]">
                            {countBy('oral')} Oral Sessions · {totalPapers} Papers
                        </span>
                        <span className="font-mono text-xs font-bold bg-terracotta text-white border-[3px] border-black px-4 py-2 shadow-[4px_4px_0_black]">
                            {countBy('poster')} Poster Sessions · {totalPosters} Posters
                        </span>
                    </div>

                    <div className="mt-8">
                        <label htmlFor="session-search" className="block font-mono text-xs font-bold uppercase mb-2">Search by paper ID, author, or keyword</label>
                        <input
                            id="session-search"
                            type="search"
                            value={query}
                            placeholder="e.g. 1571315443, NISAR, soil moisture…"
                            onChange={(event) => { setQuery(event.target.value); setOpenId(null); }}
                            className="w-full md:max-w-xl border-[3px] border-black px-4 py-3 shadow-[5px_5px_0_black] focus:outline-2 focus:outline-[var(--terracotta)]"
                        />
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                        {[['all', 'All Sessions'], ['oral', 'Oral'], ['poster', 'Poster']].map(([value, label]) => (
                            <button key={value} onClick={() => { setTopic(value); setOpenId(null); }} className={chipClass(topic === value)}>{label}</button>
                        ))}
                        <span className="w-px bg-black/20 mx-1 hidden sm:block" />
                        <button onClick={() => { setDay('all'); setOpenId(null); }} className={chipClass(day === 'all')}>All Days</button>
                        {DAYS.map((d) => (
                            <button key={d} onClick={() => { setDay(d); setOpenId(null); }} className={chipClass(day === d)}>Dec {d}</button>
                        ))}
                    </div>

                    <p role="status" className="mt-6 font-mono text-xs text-gray-600">
                        {visible.length} session{visible.length === 1 ? '' : 's'} · {oralPapers} papers · {posterPapers} posters
                        {normalized && ` matching “${query.trim()}”`}
                    </p>

                    {grouped.length === 0 && (
                        <p className="mt-10 text-lg font-bold text-gray-700">No sessions match your search. Try another paper ID or keyword.</p>
                    )}

                    {grouped.map(([groupDay, list]) => (
                        <div key={groupDay} className="mt-10">
                            <div className="flex items-center gap-3 mb-5">
                                <span className="bg-indigo text-white font-mono text-xs font-bold px-4 py-2 border-[3px] border-black shadow-[5px_5px_0_var(--gold)] uppercase tracking-wider">
                                    {list[0].date}
                                </span>
                                <span className="font-mono text-xs text-gray-500">{list.length} session{list.length === 1 ? '' : 's'}</span>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {list.map((session) => (
                                    <SessionCard
                                        key={session.id}
                                        session={session}
                                        query={normalized}
                                        open={openId === session.id || (!!normalized && openId === null && session.papers.some((p) => `${p.id} ${p.authors} ${p.title}`.toLowerCase().includes(normalized)))}
                                        onToggle={() => setOpenId(openId === session.id ? null : session.id)}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
