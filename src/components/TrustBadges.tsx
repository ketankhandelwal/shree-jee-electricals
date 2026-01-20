import { ShieldCheck, Truck, Award, Headphones } from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    title: "SECURE",
    subtitle: "PAYMENTS",
  },
  {
    icon: Truck,
    title: "FAST & FREE",
    subtitle: "SHIPPING",
  },
  {
    icon: Award,
    title: "PREMIUM",
    subtitle: "QUALITY",
  },
  {
    icon: Headphones,
    title: "CUSTOMER",
    subtitle: "SUPPORT",
  },
];

const TrustBadges = () => {
  return (
    <section className="gradient-blue py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full border-2 border-primary-foreground flex items-center justify-center mb-3 relative">
                {/* Decorative stars */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2">
                  <span className="text-primary-foreground text-xs">★ ★ ★</span>
                </div>
                <badge.icon className="w-10 h-10 text-primary-foreground" />
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2">
                  <span className="text-primary-foreground text-xs">★ ★ ★</span>
                </div>
              </div>
              <p className="text-primary-foreground font-bold text-sm">
                {badge.title}
              </p>
              <p className="text-primary-foreground/80 text-xs">{badge.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
