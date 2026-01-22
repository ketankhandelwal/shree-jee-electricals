import React from "react";
import { Percent, Truck, RotateCcw } from "lucide-react";

const features = [
  {
    icon: Percent,
    title: "Exclusive Offers",
    description: "on lighting products",
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description: "at your doorstep",
  },
  {
    icon: RotateCcw,
    title: "7 Days Return",
    description: "no questions asked",
  },
];

const Features = () => {
  return (
    <section className="py-6 md:py-8 bg-gold/5 border-b border-border">
      <div className="container mx-auto px-4">
        {/* Use grid-cols-3 to force horizontal layout on all screens */}
        <div className="grid grid-cols-3 gap-2 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-2 md:gap-4 p-2 group"
            >
              {/* Responsive Icon Sizes */}
              <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
              </div>

              <div className="flex flex-col">
                {/* Smaller text for mobile titles */}
                <h3 className="text-[10px] sm:text-xs md:text-base font-bold md:font-semibold text-foreground leading-tight uppercase md:normal-case">
                  {feature.title}
                </h3>
                {/* Hide description on very small screens to maintain spacing */}
                <p className="hidden sm:block text-[10px] md:text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>

              {/* Vertical Dividers for Desktop (Optional) */}
              {index < features.length - 1 && (
                <div className="hidden md:block absolute -right-3 h-12 w-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;