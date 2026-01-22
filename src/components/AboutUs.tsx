import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative group">
            <div className="relative z-10 rounded-[32px] overflow-hidden border border-white/10 aspect-[4/5] md:aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop" 
                alt="Luxury Lighting Showroom" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>
            
            {/* Decorative Gold Frame */}
            <div className="absolute -inset-4 border border-primary/30 rounded-[36px] -z-10 translate-x-8 translate-y-8 hidden md:block" />
            
            {/* Stats Overlay */}
            <div className="absolute bottom-10 left-10 z-20 bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
              <p className="text-primary text-4xl font-black mb-1">15+</p>
              <p className="text-white text-xs font-bold uppercase tracking-widest">Years of Excellence</p>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm">Our Legacy</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                Illuminating Your <br />
                <span className="text-primary">World with Style</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Since 2010, <span className="text-white font-bold">Shree Jee Electricals</span> has been at the forefront of the lighting revolution in India. We don't just sell lights; we craft atmospheres that inspire and delight.
              </p>
              <p>
                Our curated collection of premium chandeliers, smart lighting, and energy-efficient solutions is designed to elevate modern living spaces. Every product in our catalog reflects our commitment to quality, innovation, and timeless design.
              </p>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="p-4 rounded-xl border border-white/5 bg-white/5">
                <h4 className="text-white font-bold mb-2">Premium Quality</h4>
                <p className="text-sm text-gray-400">Only the finest materials and latest LED technology.</p>
              </div>
              <div className="p-4 rounded-xl border border-white/5 bg-white/5">
                <h4 className="text-white font-bold mb-2">Expert Consultation</h4>
                <p className="text-sm text-gray-400">Personalized lighting plans for your unique space.</p>
              </div>
            </div>

            <div className="pt-6">
              <button className="px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
                Explore Our Collection
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
