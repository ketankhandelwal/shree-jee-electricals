import React from "react";
import { Award, ShieldCheck, Zap, Sparkles, Star } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#FAF9F6] overflow-hidden relative">
      {/* Decorative Warm Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 blur-[130px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-600/5 blur-[120px] rounded-full translate-x-1/3 translate-y-1/3" />
      
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/fine-linen.png')]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Gallery Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative group">
              {/* Main Image with Floating Effect */}
              <div className="relative z-10 rounded-[40px] overflow-hidden border-8 border-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] aspect-[4/5] sm:aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1540331548438-59199042fc44?q=80&w=2070&auto=format&fit=crop" 
                  alt="Elegant Lighting Design" 
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
              </div>

              {/* Smaller Floating Image */}
              <div className="absolute -bottom-12 -right-8 md:-right-12 z-20 w-48 md:w-64 aspect-square rounded-[32px] overflow-hidden border-8 border-white shadow-2xl hidden sm:block animate-float">
                 <img 
                  src="https://images.unsplash.com/photo-1517991104123-1d56a72ad0a9?q=80&w=2070&auto=format&fit=crop" 
                  alt="Modern Fixture Close-up" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Year Badge */}
              <div className="absolute -top-6 -left-6 z-20 bg-primary text-white p-6 rounded-3xl shadow-xl rotate-[-6deg]">
                <p className="text-3xl font-black">25+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">Years of Trust</p>
              </div>

              {/* Decorative Frame */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-[48px] translate-x-12 translate-y-12 -z-10 hidden md:block" />
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-10 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-12 bg-primary"></div>
                <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">Excellence in Every Wire</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                Illuminating <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 via-primary to-yellow-800">
                  Modern Dreams
                </span>
              </h2>
            </div>

            <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light">
              Since 2014, <span className="text-primary font-semibold">Shree Jee Electricals</span> has been more than just a store. We are a destination for those who seek to harmonize technology with aesthetic beauty. 
            </p>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group/card text-center sm:text-left">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 transition-transform group-hover/card:-rotate-12 mx-auto sm:mx-0">
                  <Star className="text-primary w-6 h-6 fill-primary/20" />
                </div>
                <h4 className="text-gray-900 font-bold mb-1">Premium Selection</h4>
                <p className="text-sm text-gray-500 leading-snug">Curated high-end fixtures and smart automation.</p>
              </div>
              
              <div className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group/card text-center sm:text-left">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 transition-transform group-hover/card:rotate-12 mx-auto sm:mx-0">
                  <Award className="text-primary w-6 h-6" />
                </div>
                <h4 className="text-gray-900 font-bold mb-1">Certified Quality</h4>
                <p className="text-sm text-gray-500 leading-snug">Every product is ISI marked for peak safety.</p>
              </div>
            </div>

            <div className="pt-4 space-y-8">
              <div className="flex flex-wrap gap-10 items-center justify-center sm:justify-start">
                  <div className="text-center sm:text-left">
                    <p className="text-3xl font-black text-gray-900">50k+</p>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">Satisfied Clients</p>
                  </div>
                  <div className="hidden sm:block h-10 w-[1px] bg-gray-200"></div>
                  <div className="text-center sm:text-left">
                    <p className="text-3xl font-black text-gray-900">1.2k+</p>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">Global Products</p>
                  </div>
              </div>

              <button className="group relative px-12 py-5 bg-primary text-white font-bold rounded-full overflow-hidden transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 active:scale-95 w-full sm:w-auto">
                <span className="relative z-10">Our Story Journey</span>
                <div className="absolute inset-0 bg-yellow-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
