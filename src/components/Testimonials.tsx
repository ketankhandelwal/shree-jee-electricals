import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Mumbai",
    rating: 5,
    text: "I've been using Shree Jee LED bulbs and downlights throughout my home, and the difference is incredible. The light quality is so natural and bright, plus I've noticed a visible drop in my electricity bill. Truly delivers on energy efficiency and durability.",
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "Delhi",
    rating: 5,
    text: "Amazing quality and excellent customer service! The chandelier I ordered arrived perfectly packed and the installation was seamless. My living room looks absolutely stunning now. Highly recommend Shree Jee Electrical!",
  },
  {
    id: 3,
    name: "Amit Kumar",
    location: "Bangalore",
    rating: 5,
    text: "Best lighting store in India! Great prices, authentic products, and super fast delivery. The smart lights I bought work flawlessly with my home automation system. Will definitely order again.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-border transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-border transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-primary fill-primary"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-center text-lg md:text-xl text-foreground leading-relaxed mb-8">
              "{testimonial.text}"
            </blockquote>

            {/* Author */}
            <div className="text-center">
              <p className="font-bold text-foreground">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">
                {testimonial.location}
              </p>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
