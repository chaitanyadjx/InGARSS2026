export default function HeroSlider() {
    return (
        <header className="relative h-[70vh] md:h-[85vh] mt-[100px] bg-white border-b-[3px] border-black overflow-hidden">
            <div className="absolute inset-0 flex items-center px-5 md:px-[8%]">
                <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')`, zIndex: 0 }}
                ></div>
                <div className="relative z-10 border-[3px] border-black p-6 md:p-10 max-w-2xl bg-white/95 shadow-[15px_15px_0_#BC4749] md:shadow-[20px_20px_0_#BC4749] animate-float">
                    <p className="font-mono font-bold mb-3 text-sm md:text-base text-terracotta">01 – 04 December 2026</p>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight   mb-4">India Geoscience & Remote Sensing Symposium</h1>
                    <p className="text-base md:text-lg">Theme: Digital Earth: Modeling, Mapping, and Monitoring.</p>
                </div>
            </div>
        </header>
    );
}
