"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://www.anbre.in/wp-content/uploads/2025/01/1.-statement-chandeliers.webp",
    title: "Statement Chandeliers",
    subtitle: "Elegant crystal chandeliers to transform your space",
    badge: "Trending",
    discount: "Up to 40% Off",
    cta: "Shop Now",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1531762948975-73032b7b61f4?q=80&w=1740&auto=format&fit=crop",
    title: "Outdoor Lighting",
    subtitle: "Weather-resistant lights for your garden and patio",
    badge: "Outdoor",
    discount: "Up to 30% Off",
    cta: "Explore",
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] md:h-[700px] w-full overflow-hidden bg-white">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image - Removed opacity-70 for full brightness */}
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Lighter Overlay: Using a softer black-to-transparent gradient to keep images bright */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent md:bg-gradient-to-r md:from-black/50 md:to-transparent" />

          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center md:items-start text-center md:text-left pt-20">
            <div className={`space-y-4 transition-all duration-700 ${
              index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
              {slide.badge && (
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                  {slide.badge}
                </span>
              )}
              
              {/* Added drop-shadow-md to ensure white text pops on bright images */}
              <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-[1.1] max-w-2xl drop-shadow-md">
                {slide.title}
              </h1>
              <p className="text-base md:text-xl text-white/90 max-w-md drop-shadow-sm font-medium">
                {slide.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-5 pt-4">
                <button className="w-full sm:w-auto bg-white text-black font-bold px-10 py-4 rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-2xl">
                  {slide.cta}
                </button>
                <span className="text-amber-400 font-black text-xl italic drop-shadow-md">
                  {slide.discount}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/20 backdrop-blur-md border border-white/30 rounded-full items-center justify-center hover:bg-black/40 transition-all"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/20 backdrop-blur-md border border-white/30 rounded-full items-center justify-center hover:bg-black/40 transition-all"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Pagination dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide ? "bg-white w-8 h-2 shadow-lg" : "bg-white/40 w-2 h-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;