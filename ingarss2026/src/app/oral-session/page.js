import PageHeader from '@/components/PageHeader';
import SessionBrowser from '@/components/SessionBrowser';

export default function OralSessionPage() {
    return (
        <main className="min-h-screen bg-[var(--bone)]">
            <PageHeader title="Oral Sessions" />
            <SessionBrowser section="oral" />
        </main>
    );
}
