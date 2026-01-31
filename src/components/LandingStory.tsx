import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, CheckCircle2, Award, Zap, Building2, Globe, ArrowRight } from "lucide-react";

const milestones = [
  {
    year: "2025",
    title: "Sagar Ratna Pratapgarh",
    description: "Celebrating a decade of excellence at Hotel Pratapgarh, proudly hosting thousands of guests with warmth and distinction.",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/sagar_ratna/sagar_ratna.webp",
    icon: CheckCircle2,
    color: "from-amber-400 to-amber-600"
  },
  {
    year: "2024",
    title: "Lakme Pratapgarh",
    description: "A milestone retail project delivering premium electrical solutions and modern aesthetics for a global brand.",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/sagar_ratna/lakme/lakme.avif",
    icon: Calendar,
    color: "from-yellow-400 to-orange-500"
  },
  {
    year: "2022",
    title: "Commercial Excellence",
    description: "Secured our first major commercial contract, lighting up the city's premier shopping complex.",
    image: "https://images.pexels.com/photos/220639/pexels-photo-220639.jpeg",
    icon: Building2,
    color: "from-amber-500 to-yellow-600"
  },
  {
    year: "2019",
    title: "Smart Revolution",
    description: "Pioneered the adoption of smart home automation in the region, bringing intelligent living to local homes.",
    image: "https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg",
    icon: Zap,
    color: "from-yellow-300 to-amber-500"
  },
  {
    year: "2014",
    title: "The Experience Center",
    description: "Launched our flagship showroom—a sensory gallery where light is art and inspiration is everywhere.",
    image: "https://images.pexels.com/photos/30434802/pexels-photo-30434802.jpeg",
    icon: Award,
    color: "from-amber-600 to-orange-700"
  }
];

const LandingStory = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Content & Years */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-primary" />
                <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Legacy</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Crafting Light <br />
                <span className="text-primary italic">Since 2014</span>
              </h2>
              <p className="text-gray-500 text-lg">
                Explore the milestones that define our commitment to illuminating your world with elegance and innovation.
              </p>
            </motion.div>

            {/* Year Navigation */}
            <div className="space-y-4">
              {milestones.map((ms, index) => (
                <button
                  key={ms.year}
                  onClick={() => setActiveTab(index)}
                  className={`w-full flex items-center gap-6 p-4 rounded-2xl transition-all duration-500 group ${
                    activeTab === index 
                    ? "bg-gray-50 shadow-sm shadow-primary/10 border border-primary/10" 
                    : "hover:bg-gray-50/50"
                  }`}
                >
                  <span className={`text-2xl font-black italic transition-colors ${
                    activeTab === index ? "text-primary scale-110" : "text-gray-200 group-hover:text-gray-300"
                  }`}>
                    {ms.year}
                  </span>
                  <div className="flex-1 text-left">
                    <h3 className={`font-bold transition-colors ${
                      activeTab === index ? "text-gray-900" : "text-gray-400 group-hover:text-gray-600"
                    }`}>
                      {ms.title}
                    </h3>
                  </div>
                  {activeTab === index && (
                    <motion.div layoutId="arrow" transition={{ type: "spring", stiffness: 300, damping: 30 }}>
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Interactive Display */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[4/5] md:aspect-square group">
              {/* Main Image Base */}
              <div className="absolute inset-0 bg-gray-100 rounded-[3rem] -rotate-3 transition-transform group-hover:rotate-0 duration-700" />
              <div className="absolute inset-0 bg-primary/5 rounded-[3rem] rotate-3 transition-transform group-hover:rotate-0 duration-700 delay-100" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05, y: -20 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl z-10"
                >
                  <img
                    src={milestones[activeTab].image}
                    alt={milestones[activeTab].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Floating Content on Image */}
                  <div className="absolute bottom-10 left-10 right-10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex items-start gap-4"
                    >
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${milestones[activeTab].color} shadow-lg shadow-black/20`}>
                        {(() => {
                          const Icon = milestones[activeTab].icon;
                          return <Icon className="w-6 h-6 text-white" />;
                        })()}
                      </div>
                      <div>
                        <h4 className="text-2xl font-black text-white mb-2">{milestones[activeTab].title}</h4>
                        <p className="text-white/70 text-sm leading-relaxed max-w-xs uppercase tracking-tighter">
                          {milestones[activeTab].description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl z-0" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LandingStory;
