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
    description: "of products right at your doorstep",
  },
  {
    icon: RotateCcw,
    title: "7 Days Return",
    description: "no questions asked",
  },
];

const Features = () => {
  return (
    <section className="py-8 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-4 p-4 group"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
              {index < features.length - 1 && (
                <div className="hidden md:block absolute right-0 h-12 w-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
