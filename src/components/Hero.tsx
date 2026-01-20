import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-chandelier.jpg";
import livingRoom from "@/assets/living-room.jpg";

const slides = [
  {
    id: 1,
    image: heroImage,
    title: "Illuminate Your World",
    subtitle: "Premium LED lighting solutions for every space",
    badge: "New Collection",
    discount: "Up to 40% Off",
    cta: "Shop Now",
  },
  {
    id: 2,
    image: livingRoom,
    title: "Smart Home Lighting",
    subtitle: "Control your lights with voice or app",
    badge: "Smart Tech",
    discount: "Starting ₹999",
    cta: "Explore",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="max-w-xl text-primary-foreground">
              <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold mb-4 animate-fadeIn">
                {slide.badge}
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slideIn">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-6 text-primary-foreground/90 animate-fadeIn">
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-bold text-lg">
                  {slide.discount}
                </span>
              </div>
              <Button className="btn-secondary text-lg px-8 py-6">
                {slide.cta}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:bg-muted transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:bg-muted transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-secondary w-8"
                : "bg-primary-foreground/50 hover:bg-primary-foreground"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
