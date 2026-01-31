const BrandBanner = () => {
  const content = (
    <div className="flex items-center gap-12 md:gap-24 min-w-full flex-shrink-0 py-2">
      <span className="text-primary font-black tracking-[0.2em] uppercase text-sm md:text-base">
        SHREE JEE ELECTRICALS
      </span>
      <div className="h-1.5 w-1.5 rounded-full bg-primary/40" />
      <p className="text-white/80 text-xs md:text-sm font-bold uppercase tracking-widest">
        Your Trusted Partner for Quality Lighting Solutions Since 2014
      </p>
      <div className="h-1.5 w-1.5 rounded-full bg-primary/40" />
      <span className="text-secondary font-black tracking-[0.2em] uppercase text-sm md:text-base">
        Pratapgarh's No.1 Lighting Store
      </span>
      <div className="h-1.5 w-1.5 rounded-full bg-primary/40" />
    </div>
  );

  return (
    <section className="bg-black py-4 border-y border-primary/20 overflow-hidden relative group">
      <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
        {content}
        {content}
        {content}
      </div>
      
      {/* Edge Fades for premium feel */}
      <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default BrandBanner;
