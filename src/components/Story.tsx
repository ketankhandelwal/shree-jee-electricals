import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, CheckCircle2, Award, Zap, Building2, Globe } from "lucide-react";

const stories = [
    {
    year: "2025",
    title: "SAGAR RATNA PRATAPGARH",
    description: "Celebrating a decade of excellence at Hotel Pratapgarh, proudly hosting thousands of guests with warmth and distinction. The journey has only just begun.",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/sagar_ratna/sagar_ratna.webp",
    icon: CheckCircle2
  },
  {
    year: "2024",
    title: "LAKME PRATAPGARH",
    description: "LAKME Pratapgarh marked a milestone project, where modern retail aesthetics met precise electrical execution. Shree Jee Electricals delivered reliable, high-quality solutions tailored to Lakme’s premium brand standards.",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/projects/sagar_ratna/lakme/lakme.avif",
    icon: Calendar
  },
  {
    year: "2022",
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
    year: "2018",
    title: "Global Partnerships",
    description: "Forged strategic alliances with international lighting giants, bringing world-class aesthetics and European safety standards to local homes.",
    image: "https://images.pexels.com/photos/9242900/pexels-photo-9242900.jpeg",
    icon: Globe
  },
  {
    year: "2014",
    title: "The Experience Center",
    description: "Launched our flagship showroom—a sensory gallery where light is art. A space designed not for shopping, but for feeling the impact of illumination.",
    image: "https://images.pexels.com/photos/30434802/pexels-photo-30434802.jpeg",
    icon: Award
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
    <section ref={containerRef} className="py-20 md:py-40 bg-black overflow-hidden relative">
      {/* Background Cinematic Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-32 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-secondary/10 border border-secondary/20 backdrop-blur-md mb-8">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-secondary font-black uppercase tracking-[0.4em] text-[10px]">Legacy in Motion</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
            Our Journey of <br/>
            <span className="italic font-light text-secondary">Light & Excellence</span>
          </h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto mb-10 shadow-[0_0_20px_rgba(251,191,36,0.4)]" />
          <p className="text-white/60 text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            From our founding vision to a nationwide reach—explore the key milestones that have shaped Shree Jee Electricals into the gold standard of illumination.
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Progress Line - More Pronounced */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2 md:translate-x-0">
             <motion.div 
                style={{ scaleY, transformOrigin: "top" }}
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-secondary to-transparent shadow-[0_0_20px_rgba(251,191,36,0.5)]"
             />
          </div>

          <div className="space-y-24 md:space-y-48">
            {stories.map((story, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center gap-12 md:gap-0`}>
                  
                  {/* Icon Bubble - More Premium */}
                  <div className="absolute left-[20px] md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black backdrop-blur-xl shadow-2xl z-20 group">
                    <div className="absolute inset-0 rounded-full bg-secondary/20 blur-md group-hover:bg-secondary/40 transition-colors" />
                    <story.icon className="text-secondary w-5 h-5 relative z-10" strokeWidth={1.5} />
                  </div>

                  {/* Content Side */}
                   <div className="w-full md:w-[50%] pl-16 md:pl-0 md:px-16">
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`text-left ${isEven ? 'md:text-left' : 'md:text-right'}`}
                    >
                      <span className="text-8xl md:text-[12rem] font-black text-white/[0.03] absolute -top-12 md:-top-24 select-none leading-none z-0 tracking-tighter w-full left-0">
                        {story.year}
                      </span>
                      <div className="relative z-10">
                        <span className="text-secondary font-black tracking-[0.3em] text-xs uppercase mb-4 block">{story.year}</span>
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight leading-tight">{story.title}</h3>
                        <p className="text-white/40 text-lg font-medium leading-relaxed max-w-md ml-0 md:ml-auto md:mr-0 inline-block border-l-2 md:border-l-0 md:border-r-2 border-secondary/30 pl-6 md:pl-0 md:pr-6">
                           {story.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Image Side */}
                  <div className="w-full md:w-[50%] pl-16 md:pl-0 md:px-16">
                     <motion.div
                       initial={{ 
                         opacity: 0, 
                         scale: 0.95,
                         y: 20
                       }}
                       whileInView={{ 
                         opacity: 1, 
                         scale: 1,
                         y: 0
                       }}
                       viewport={{ once: true, amount: 0.2 }}
                       transition={{ duration: 1, ease: "circOut" }}
                       className="relative group rounded-[2rem] overflow-hidden border border-white/5 bg-white/[0.02] backdrop-blur-3xl p-2"
                     >
                        <div className="relative overflow-hidden rounded-[1.6rem]">
                          <motion.img 
                            src={story.image} 
                            alt={story.title} 
                            className="w-full aspect-video md:aspect-[4/3] object-cover transition-transform duration-[2s] group-hover:scale-110 brightness-[0.8] group-hover:brightness-100"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                          
                          {/* Floating Year Badge on Image for Mobile */}
                          <div className="absolute top-4 right-4 md:hidden bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full">
                            {story.year}
                          </div>
                        </div>

                        {/* Edge Glow */}
                        <div className="absolute inset-0 border border-secondary/0 group-hover:border-secondary/20 transition-colors duration-700 rounded-[2rem] pointer-events-none" />
                     </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
        
        {/* Call to Action or Ending Milestone */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-48 text-center"
        >
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-transparent via-secondary to-transparent w-full max-w-lg mb-12" />
          <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">And the story continues...</h4>
          <p className="text-white/40 mb-12">Building a future where every corner of India shines bright.</p>
          <button className="px-12 py-4 bg-secondary text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-secondary/90 transition-all hover:scale-105 shadow-[0_0_30px_rgba(251,191,36,0.3)]">
            Partner with us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;