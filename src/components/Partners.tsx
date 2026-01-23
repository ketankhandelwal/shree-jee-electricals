import React from "react";

const partners = [
  { name: "Philips", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJONtOn28ythjTMSYpYDFUSeZFDMndtfVI0g&s" },
  { name: "Havells", logo: "https://e7.pngegg.com/pngimages/680/167/png-clipart-havells-logo-havell-s-electrical-shop-havells-logo-company-krrish-text-carnivoran-thumbnail.png" },
  { name: "Schneider", logo: "https://toppng.com/uploads/preview/schneider-electric-vector-logo-free-115741777134iko2tipgl.png" },
  { name: "RR signature", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHJaQ0AXehp9lkKSQSNo95Dq6kT08tlvG3QQ&s" },
  { name: "Luminous", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmxyAXo2dPpQ5Q6YRYKlTGpHrXRLydZqHE1g&s" },
  { name: "Havells standard", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLLqvauaENUpDkcj8f5yG6UKRclCtBXMEcvA&s" },
  { name: "Polycab wire", logo: "https://static.wixstatic.com/media/78663d_378a8a4925084c029cc420095ed30c3f~mv2.jpg/v1/fill/w_1000,h_398,al_c,q_90/file.jpg" },
  { name: "L&t switch gear", logo: "https://5.imimg.com/data5/SELLER/Default/2024/4/410342854/DX/VK/HZ/14408247/download.png" },
];

const Partners = () => {
  // Triple the partners to ensure there is enough content to fill the screen width during animation
  const displayPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-16 md:py-24 bg-black overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-yellow-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-yellow-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-16 lg:px-24 mb-12">
        <div className="flex flex-col items-center text-center">
          <span className="text-yellow-500 font-semibold uppercase tracking-[0.4em] text-xs md:text-sm mb-4 block">
            Excellence in Collaboration
          </span>
          <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight">
            Our <span className="text-yellow-500 font-bold">Partners</span> in Quality
          </h2>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-60"></div>
        </div>
      </div>

      <div className="relative flex items-center">
        {/* Marquee Container */}
        <div className="flex gap-12 md:gap-24 animate-marquee whitespace-nowrap items-center hover:[animation-play-state:paused] py-4">
          {displayPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex flex-col items-center justify-center min-w-[120px] md:min-w-[200px] group"
            >
              <div className="h-12 md:h-20 w-auto flex items-center justify-center transition-all duration-500 transform group-hover:scale-110">
                <img
  src={partner.logo}
  alt={partner.name}
  className="max-h-full max-w-full object-contain transition-all duration-500 transform group-hover:scale-110"
  onError={(e) => { e.target.style.display = 'none'; }} 
/>
              </div>
              <p className="mt-4 text-[10px] md:text-xs text-gray-500 font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {partner.name}
              </p>
            </div>
          ))}
        </div>

        {/* Edge Fades: These create the "vanishing" effect on the sides */}
        <div className="absolute top-0 left-0 w-24 md:w-64 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-64 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
    </section>
  );
};

export default Partners;