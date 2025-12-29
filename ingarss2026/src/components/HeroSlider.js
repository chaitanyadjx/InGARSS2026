export default function HeroSlider() {
    // On desktop, add top padding to account for fixed navbar (h-20 = 80px)
    // On mobile, no extra padding since navbar is not fixed
    return (
        <header className="relative h-[70vh] md:h-[85vh] bg-white border-b-[3px] border-black overflow-hidden pt-0 lg:pt-20">
            <div className="absolute inset-0 flex items-center px-5 md:px-[8%]">
                <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')`, zIndex: 0 }}
                ></div>
                <div className="relative z-10 border-[3px] border-black p-6 md:p-10 max-w-2xl bg-white/95 shadow-[15px_15px_0_#BC4749] md:shadow-[20px_20px_0_#BC4749] animate-float">
                    <p className="font-mono font-bold mb-3 text-sm md:text-base text-terracotta">01 – 04 December 2026, Hyderabad, India</p>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight   mb-4">India Geoscience & Remote Sensing Symposium</h1>
                    <p className="text-base md:text-base">Theme: Digital Earth - Modeling, Mapping, and Monitoring.</p>
                </div>
                {/* Logo on the right, in corner with small padding */}
                <div className="hidden lg:block absolute top-4 right-4 md:top-8 md:right-8 z-20">
                    <img 
                        src="/assets/logo.jpeg" 
                        alt="InGARSS 2026 Logo" 
                        className="hidden lg:block h-16 w-16 md:h-24 md:w-24 lg:h-28 lg:w-28 rounded-lg border-4 border-white shadow-lg bg-white object-cover"
                    />
                </div>
            </div>
        </header>
    );
}
