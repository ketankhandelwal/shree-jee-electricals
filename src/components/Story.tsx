import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, CheckCircle2, Award, Zap, Building2, Globe } from "lucide-react";

const stories = [
  {
    year: "2014",
    title: "The Spark",
    description: "Shree Jee Electricals began as a humble vision to provide quality electrical solutions to our local community. A small store with big dreams.",
    image: "https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg",
    icon: Calendar
  },
  {
    year: "2016",
    title: "Commercial Excellence",
    description: "Secured our first major commercial contract, lighting up the city's premier shopping complex. This marked our entry into large-scale infrastructure projects.",
    image: "https://images.pexels.com/photos/220639/pexels-photo-220639.jpeg",
    icon: Building2
  },
  {
    year: "2019",
    title: "Smart Revolution",
    description: "Pioneered the adoption of smart home automation in the region. We didn't just sell switches; we started selling intelligent living experiences.",
    image: "https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg",
    icon: Zap
  },
  {
    year: "2021",
    title: "Global Partnerships",
    description: "Forged strategic alliances with international lighting giants, bringing world-class aesthetics and European safety standards to local homes.",
    image: "https://images.pexels.com/photos/9242900/pexels-photo-9242900.jpeg",
    icon: Globe
  },
  {
    year: "2023",
    title: "The Experience Center",
    description: "Launched our flagship showroom—a sensory gallery where light is art. A space designed not for shopping, but for feeling the impact of illumination.",
    image: "https://images.pexels.com/photos/30434802/pexels-photo-30434802.jpeg", // Using one of the existing good images
    icon: Award
  },
  {
    year: "2024",
    title: "50,000+ Happy Spaces",
    description: "Celebrating a decade of excellence with over 50,000 homes and businesses illuminated by our expertise. The journey has only just begun.",
    image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg",
    icon: CheckCircle2
  }
];

const Story = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-gray-900 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Our Journey</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Decades of <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">Illuminating Dreams</span>
          </h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            From a single storefront to a legacy of light. Walk through the milestones that defined our path to excellence.
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 md:translate-x-0">
             <motion.div 
                style={{ scaleY, transformOrigin: "top" }}
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary via-yellow-400 to-primary box-shadow-[0_0_20px_rgba(255,215,0,0.5)]"
             />
          </div>

          <div className="space-y-12 md:space-y-24">
            {stories.map((story, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center gap-8 md:gap-0`}>
                  
                  {/* Date Bubble Mobile - Absolute positioned on the line */}
                  <div className="absolute left-[20px] md:left-1/2 top-0 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full border-4 border-gray-900 bg-primary shadow-lg shadow-primary/50 z-20 md:h-14 md:w-14">
                    <story.icon className="text-gray-900 w-4 h-4 md:w-6 md:h-6" strokeWidth={2.5} />
                  </div>

                  {/* Content Side */}
                   <div className="w-full md:w-[50%] pl-16 md:pl-0 md:px-12">
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className={`text-left ${isEven ? 'md:text-left' : 'md:text-right'}`}
                    >
                      <span className="text-6xl md:text-8xl font-black text-white/5 absolute -top-10 md:-top-16 select-none leading-none z-0 mix-blend-overlay">
                        {story.year}
                      </span>
                      <div className="relative z-10">
                        <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">{story.year}</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{story.title}</h3>
                        <p className="text-gray-400 leading-relaxed max-w-md ml-0 md:ml-auto md:mr-0 inline-block">
                           {story.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Image Side */}
                  <div className="w-full md:w-[50%] pl-16 md:pl-0 md:px-12">
                     <motion.div
                       initial={{ opacity: 0, scale: 0.8, rotate: isEven ? -2 : 2 }}
                       whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                       viewport={{ once: true, margin: "-50px" }}
                       transition={{ duration: 0.8 }}
                       className="relative group rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm"
                     >
                        <div className="absolute inset-0 bg-primary/20 mix-blend-color opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                        <img 
                          src={story.image} 
                          alt={story.title} 
                          className="w-full aspect-video md:aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                     </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
