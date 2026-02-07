import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, CheckCircle2, Award, Zap, Building2, Globe, ArrowRight } from "lucide-react";

const milestones = [
  {
    year: "2026",
    title: "DEVANSH RESORT",
    description: "Successfully executed our largest commercial lighting & electrical project to date — transforming Devansh Resort into a landmark of elegance and modern functionality with state-of-the-art lighting design and complete electrical infrastructure.",
    images: [
      "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/devansh_resort/WhatsApp+Image+2026-02-04+at+08.42.54.jpeg",
      "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/devansh_resort/WhatsApp+Image+2026-02-04+at+08.42.47+(1).jpeg",
      "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/devansh_resort/WhatsApp+Image+2026-02-04+at+08.42.47+(2).jpeg",
      "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/devansh_resort/WhatsApp+Image+2026-02-04+at+08.42.47.jpeg",
      "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/devansh_resort/WhatsApp+Image+2026-02-04+at+08.42.50+(1).jpeg",
      "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/devansh_resort/WhatsApp+Image+2026-02-04+at+08.42.50+(2).jpeg",
      "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/devansh_resort/WhatsApp+Image+2026-02-04+at+08.42.50.jpeg",
      "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/devansh_resort/WhatsApp+Image+2026-02-04+at+08.42.51+(1).jpeg",
      "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/devansh_resort/WhatsApp+Image+2026-02-04+at+08.42.51.jpeg",
      "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/devansh_resort/WhatsApp+Image+2026-02-04+at+08.42.52+(1).jpeg",
      "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/devansh_resort/WhatsApp+Image+2026-02-04+at+08.42.52+(2).jpeg",
      "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/devansh_resort/WhatsApp+Image+2026-02-04+at+08.42.52.jpeg",
      "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/devansh_resort/WhatsApp+Image+2026-02-04+at+08.42.53+(1).jpeg",
      "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/devansh_resort/WhatsApp+Image+2026-02-04+at+08.42.53.jpeg",
      "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/devansh_resort/WhatsApp+Image+2026-02-04+at+08.42.54+(1).jpeg",
      "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/devansh_resort/WhatsApp+Image+2026-02-04+at+08.42.54+(2).jpeg",

    ],
    icon: Building2,
    color: "from-amber-500 to-yellow-600"
  },
  {
    year: "2025",
    title: "Sagar Ratna Pratapgarh",
    description: "Completed a decade-long association with Hotel Sagar Ratna Pratapgarh — delivering reliable electrical systems, lighting upgrades, and ongoing maintenance that contributed to thousands of memorable guest experiences.",
    images: ["https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/sagar_ratna/sagar_ratna.webp"],
    icon: CheckCircle2,
    color: "from-amber-400 to-amber-600"
  },
  {
    year: "2024",
    title: "MAYUR PALACE",
    description: "Introduced advanced smart home automation solutions to the region, bringing intelligent lighting, security integration, and energy-efficient controls to modern residences at Mayur Palace.",
    images: [
      "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/mayur_palace/WhatsApp+Image+2026-02-04+at+09.16.15+(1).jpeg",
      "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/mayur_palace/WhatsApp+Image+2026-02-04+at+09.16.15.jpeg",
      "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/mayur_palace/WhatsApp+Image+2026-02-04+at+09.16.16+(1).jpeg",
      "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/mayur_palace/WhatsApp+Image+2026-02-04+at+09.16.16.jpeg",
      "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/mayur_palace/WhatsApp+Image+2026-02-04+at+09.16.17.jpeg",
      "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/mayur_palace/WhatsApp+Image+2026-02-04+at+09.16.18+(1).jpeg",
      "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/mayur_palace/WhatsApp+Image+2026-02-04+at+09.16.18.jpeg",
      "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/mayur_palace/WhatsApp+Image+2026-02-04+at+09.16.19.jpeg"
    ],
    icon: Zap,
    color: "from-yellow-300 to-amber-500"
  },


  {
    year: "2024",
    title: "COMFORT INN",
    description: "Launched our flagship experience center and showroom — a beautifully designed space showcasing premium lighting, smart controls, fans, wires, and the latest electrical innovations under one roof.",
    images: [
      "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/comfort_inn/WhatsApp+Image+2026-02-04+at+09.14.36.jpeg",
      "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/comfort_inn/WhatsApp+Image+2026-02-04+at+09.14.37+(1).jpeg",
      "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/comfort_inn/WhatsApp+Image+2026-02-04+at+09.14.37.jpeg",
      "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/comfort_inn/WhatsApp+Image+2026-02-04+at+09.14.38.jpeg"
    ],
    icon: Award,
    color: "from-amber-600 to-orange-700"
  },
  {
    year: "2024",
    title: "Lakme Pratapgarh",
    description: "Delivered end-to-end premium electrical and lighting solutions for Lakmé Salon Pratapgarh — combining modern aesthetics, energy-efficient design, and flawless execution for one of the world’s most trusted beauty brands.",
    images: ["https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/sagar_ratna/lakme/lakme.avif"],
    icon: Calendar,
    color: "from-yellow-400 to-orange-500"
  },


];

const LandingStory = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTab(prev => (prev === index ? -1 : index));
    setCurrentImageIndex(0);
  };

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
                className={`group relative rounded-[2.5rem] transition-all duration-700 overflow-hidden ${isActive
                  ? "bg-gray-50 border border-primary/10 shadow-2xl shadow-primary/5"
                  : "bg-white border border-gray-100 hover:border-primary/20"
                  }`}
              >
                {/* Header/Trigger */}
                <button
                  onClick={() => handleTabChange(index)}
                  className="w-full flex items-center justify-between p-6 md:p-10 text-left z-20 relative"
                >
                  <div className="flex items-center gap-6 md:gap-12">
                    <span className={`text-3xl md:text-5xl font-black italic tracking-tighter transition-all duration-500 ${isActive ? "text-primary scale-110" : "text-gray-200 group-hover:text-primary/30"
                      }`}>
                      {ms.year}
                    </span>
                    <h3 className={`text-xl md:text-3xl font-bold transition-all duration-500 ${isActive ? "text-gray-900" : "text-gray-400 group-hover:text-gray-600"
                      }`}>
                      {ms.title}
                    </h3>
                  </div>

                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${isActive ? "bg-primary rotate-90" : "bg-gray-100 group-hover:bg-primary/10"
                    }`}>
                    <ArrowRight className={`w-6 h-6 transition-colors ${isActive ? "text-white" : "text-gray-400 group-hover:text-primary"
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
                            <AnimatePresence mode="wait">
                              <motion.img
                                key={ms.images[currentImageIndex]}
                                src={ms.images[currentImageIndex]}
                                alt={ms.title}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full object-cover transition-transform duration-[2s] group-hover/img:scale-110"
                              />
                            </AnimatePresence>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                            {/* Navigation Arrows for Gallery */}
                            {ms.images.length > 1 && (
                              <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentImageIndex(prev => (prev === 0 ? ms.images.length - 1 : prev - 1));
                                  }}
                                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                                >
                                  <ArrowRight className="w-6 h-6 rotate-180" />
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentImageIndex(prev => (prev === ms.images.length - 1 ? 0 : prev + 1));
                                  }}
                                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                                >
                                  <ArrowRight className="w-6 h-6" />
                                </button>
                              </div>
                            )}

                            {/* Gallery Indicators */}
                            {ms.images.length > 1 && (
                              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
                                {ms.images.map((_, i) => (
                                  <div
                                    key={i}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${i === currentImageIndex ? "w-8 bg-primary" : "w-1.5 bg-white/30"
                                      }`}
                                  />
                                ))}
                              </div>
                            )}

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
