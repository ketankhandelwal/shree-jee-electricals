"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1531762948975-73032b7b61f4?q=80&w=1740&auto=format&fit=crop",
    title: "Outdoor Lighting",
    subtitle: "Weather-resistant lights for gardens, patios & pathways",
    badge: "Outdoor",
    discount: "Up to 30% Off",
    cta: "Explore",
  },
  {
    id: 2,
    image: "https://www.anbre.in/wp-content/uploads/2025/01/1.-statement-chandeliers.webp",
    title: "Statement Chandeliers",
    subtitle: "Bold designs that become the centerpiece of your space",
    badge: "Best Seller",
    discount: "Up to 25% Off",
    cta: "Shop Now",
  },
  {
    id: 3,
    image:
      "https://plus.unsplash.com/premium_photo-1661881436846-5a0f53025711?q=80&w=1828&auto=format&fit=crop",
    title: "Pendant Lights",
    subtitle: "Perfect lighting for dining areas and kitchen islands",
    badge: "Trending",
    discount: "Up to 20% Off",
    cta: "Discover",
  },
  {
    id: 4,
    image:
      "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop",
    title: "Wall Lights",
    subtitle: "Elegant wall lighting for a warm, modern look",
    badge: "New Arrival",
    discount: "Up to 25% Off",
    cta: "View Collection",
  },
  {
    id: 5,
    image:
      "https://plus.unsplash.com/premium_photo-1661962449952-29741f7dbbc4?q=80&w=1548&auto=format&fit=crop",
    title: "Table Lamps",
    subtitle: "Stylish lamps for desks, bedside & living spaces",
    badge: "Popular",
    discount: "Up to 15% Off",
    cta: "Buy Now",
  },
  {
    id: 6,
    image:
      "https://plus.unsplash.com/premium_photo-1661902934269-17eaf4b04f9f?q=80&w=1392&auto=format&fit=crop",
    title: "Ceiling Lights",
    subtitle: "Bright, efficient lighting for every room",
    badge: "Top Rated",
    discount: "Up to 20% Off",
    cta: "Explore",
  },
  {
    id: 7,
    image:
      "https://plus.unsplash.com/premium_photo-1682125916388-2a005de0d6b5?q=80&w=1612&auto=format&fit=crop",
    title: "Floor Lamps",
    subtitle: "Add height, style, and ambient lighting to your home",
    badge: "Modern",
    discount: "Up to 18% Off",
    cta: "Shop Style",
  },
];


const SWIPE_THRESHOLD = 60; // minimum px to count as swipe

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null; // reset
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
    // Optional: you could add visual drag feedback here in future
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) {
        // Swipe left → next slide
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      } else {
        // Swipe right → previous slide
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      }
    }

    // Reset
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="relative h-[60vh] sm:h-[65vh] md:h-[700px] lg:h-[85vh] w-full overflow-hidden bg-gray-50"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      // Optional: improve touch feel on iOS/Android
      onTouchCancel={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title || "Hero slide"}
            className="absolute inset-0 h-full w-full object-cover object-center sm:object-center object-top"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/15 to-transparent sm:from-black/25 sm:via-black/10 sm:to-transparent" />

          {/* Content */}
          <div className="relative z-10 h-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <div
              className={`space-y-4 sm:space-y-6 max-w-xl transition-all duration-700 transform ${
                index === currentSlide
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              {slide.badge && (
                <span className="inline-block px-4 py-1.5 bg-blue-600/90 backdrop-blur-sm text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full shadow-md">
                  {slide.badge}
                </span>
              )}

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
                {slide.title}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/95 max-w-md mx-auto md:mx-0 drop-shadow-md font-medium">
                {slide.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6 pt-4 sm:pt-6">
                {slide.discount && (
                  <span className="text-amber-300 sm:text-amber-400 font-bold text-lg sm:text-xl italic drop-shadow-lg">
                    {slide.discount}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - visible on md+ */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="hidden md:flex absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 items-center justify-center rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white hover:bg-black/50 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="hidden md:flex absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 items-center justify-center rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white hover:bg-black/50 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2.5 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-9 sm:w-10 h-2.5 shadow-lg"
                : "bg-white/50 w-2.5 h-2.5 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;