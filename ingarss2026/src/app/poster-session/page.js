import PageHeader from '@/components/PageHeader';
import SessionBrowser from '@/components/SessionBrowser';

export default function PosterSessionPage() {
    return (
        <main className="min-h-screen bg-[var(--bone)]">
            <PageHeader title="Poster Sessions" />
            <SessionBrowser section="poster" />
        </main>
    );
}
