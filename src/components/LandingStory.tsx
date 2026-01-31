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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Legacy</span>
            <div className="w-12 h-[2px] bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Crafting Light Since <span className="text-primary italic">2014</span>
          </h2>
          <p className="text-gray-500 text-lg">
            A decade of innovation, architectural brilliance, and transformative lighting solutions.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6">
          {milestones.map((ms, index) => {
            const isActive = activeTab === index;
            const Icon = ms.icon;
            
            return (
              <div 
                key={ms.year}
                className={`group relative rounded-[2.5rem] transition-all duration-700 overflow-hidden ${
                  isActive 
                  ? "bg-gray-50 border border-primary/10 shadow-2xl shadow-primary/5" 
                  : "bg-white border border-gray-100 hover:border-primary/20"
                }`}
              >
                {/* Header/Trigger */}
                <button
                  onClick={() => setActiveTab(isActive ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 md:p-10 text-left z-20 relative"
                >
                  <div className="flex items-center gap-6 md:gap-12">
                    <span className={`text-3xl md:text-5xl font-black italic tracking-tighter transition-all duration-500 ${
                      isActive ? "text-primary scale-110" : "text-gray-200 group-hover:text-primary/30"
                    }`}>
                      {ms.year}
                    </span>
                    <h3 className={`text-xl md:text-3xl font-bold transition-all duration-500 ${
                      isActive ? "text-gray-900" : "text-gray-400 group-hover:text-gray-600"
                    }`}>
                      {ms.title}
                    </h3>
                  </div>
                  
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isActive ? "bg-primary rotate-90" : "bg-gray-100 group-hover:bg-primary/10"
                  }`}>
                    <ArrowRight className={`w-6 h-6 transition-colors ${
                      isActive ? "text-white" : "text-gray-400 group-hover:text-primary"
                    }`} />
                  </div>
                </button>

                {/* Unfolding Content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 md:px-10 md:pb-12 pt-0">
                        <div className="space-y-10">
                          {/* Cinematic Large Image */}
                          <motion.div 
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="relative aspect-[4/3] md:aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl group/img"
                          >
                            <img 
                              src={ms.image} 
                              alt={ms.title}
                              className="w-full h-full object-cover transition-transform duration-[2s] group-hover/img:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                            
                            {/* Icon Badge on Image */}
                            <div className="absolute top-8 right-8">
                              <div className={`p-5 rounded-3xl bg-gradient-to-br ${ms.color} shadow-2xl shadow-black/40 backdrop-blur-xl border border-white/20`}>
                                <Icon className="w-8 h-8 text-white" />
                              </div>
                            </div>

                            {/* Year Watermark on Image */}
                            <div className="absolute bottom-8 right-10 select-none">
                              <span className="text-white/20 text-6xl md:text-9xl font-black italic tracking-tighter">
                                {ms.year}
                              </span>
                            </div>
                          </motion.div>

                          {/* Refined Description Stacked Below */}
                          <div className="max-w-4xl">
                            <motion.div
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.4 }}
                              className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16"
                            >
                              <p className="flex-1 text-gray-600 text-xl md:text-2xl font-medium leading-relaxed italic border-l-4 border-primary/30 pl-8">
                                "{ms.description}"
                              </p>
                              <div className="flex-shrink-0">
                                <button className="px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest text-xs rounded-full shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                                  View Project
                                </button>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LandingStory;
