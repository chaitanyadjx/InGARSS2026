'use client';

import { useState, useEffect } from 'react';

export default function AnnouncementRibbon() {
    const [timeLeft, setTimeLeft] = useState(null);

    // Configure your announcements here
    const announcements = [
        {
            id: 'paper-deadline',
            message: 'Paper Submission Deadline Approaching',
            date: new Date('2026-07-15'),
            link: '/cfp',
            linkText: 'Submit Now',
        },
        {
            id: 'conference',
            message: 'Join us in Hyderabad for InGARSS 2026',
            date: new Date('2026-12-01'),
            link: '/#venue',
            linkText: 'View Venue',
        },
    ];

    // Get the most relevant announcement (closest upcoming date)
    const getActiveAnnouncement = () => {
        const now = new Date();
        const upcoming = announcements
            .filter(a => a.date > now)
            .sort((a, b) => a.date - b.date);
        return upcoming[0] || announcements[0];
    };

    const activeAnnouncement = getActiveAnnouncement();

    useEffect(() => {
        if (!activeAnnouncement) return;

        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = activeAnnouncement.date - now;

            if (difference <= 0) {
                setTimeLeft(null);
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);

            setTimeLeft({ days, hours, minutes, total: difference });
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 60000);

        return () => clearInterval(timer);
    }, [activeAnnouncement]);

    // Create duplicated content for seamless loop
    const renderMarqueeContent = () => (
        <div className="flex items-center gap-12 py-2 px-4">
            <span className="font-mono font-bold text-sm   tracking-wide whitespace-nowrap">
                {activeAnnouncement.message}
            </span>
            
            {timeLeft && (
                <div className="flex items-center gap-2 font-mono text-sm whitespace-nowrap">
                    <span className="bg-white/20 px-2 py-0.5 rounded font-bold">{timeLeft.days}d</span>
                    <span className="bg-white/20 px-2 py-0.5 rounded font-bold">{timeLeft.hours}h</span>
                    <span className="bg-white/20 px-2 py-0.5 rounded font-bold">{timeLeft.minutes}m</span>
                </div>
            )}
{/* 
            {activeAnnouncement.link && (
                <a 
                    href={activeAnnouncement.link}
                    className="font-mono font-bold text-sm bg-gold text-black px-4 py-1.5 hover:bg-white hover:text-indigo transition-colors duration-200 whitespace-nowrap"
                >
                    {activeAnnouncement.linkText} →
                </a>
            )} */}

            <span className="text-gold font-mono"> ||</span>
        </div>
    );

    return (
        <div className="fixed top-20 left-0 right-0 z-40 bg-indigo text-white border-b-[3px] border-black overflow-hidden">
            <div className="flex animate-marquee">
                {/* Duplicate content multiple times for seamless infinite scroll */}
                {renderMarqueeContent()}
                {renderMarqueeContent()}
                {renderMarqueeContent()}
                {renderMarqueeContent()}
            </div>
        </div>
    );
}
