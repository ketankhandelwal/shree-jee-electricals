import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Lightbulb, Zap, Shield, Star, Truck, Settings, 
  Users, Award, Phone, Sparkles, ArrowUpRight 
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

const AboutPage = () => {
  const features = [
    { icon: Lightbulb, title: "Luminous LED", description: "Precision-engineered LED solutions that minimize consumption without sacrificing brilliance." },
    { icon: Zap, title: "Smart Circuitry", description: "Advanced wiring systems designed for the high-performance demands of modern architecture." },
    { icon: Shield, title: "Certified Safety", description: "Strictly ISI-marked components, ensuring every connection in your home is a safe one." },
    { icon: Star, title: "Designer Range", description: "Curated fixtures from global studios that serve as the jewelry of your interior design." },
    { icon: Truck, title: "Swift Logistics", description: "White-glove delivery service ensuring your delicate fixtures arrive in pristine condition." },
    { icon: Settings, title: "Expert Setup", description: "Precision installation by licensed technicians who understand the art of placement." },
    { icon: Users, title: "Consultancy", description: "Professional lighting audits to help you choose the right lumens for every room." },
    { icon: Award, title: "Legacy Guarantee", description: "An industry-leading warranty backed by three decades of electrical excellence." },
  ];

  const products = [
    { name: "Grand Chandeliers", price: "₹4,999", image: "https://images.pexels.com/photos/13108827/pexels-photo-13108827.jpeg" },
    { name: "Modern LED Panels", price: "₹1,299", image: "https://images.pexels.com/photos/1907784/pexels-photo-1907784.jpeg" },
    { name: "Artisan Lamps", price: "₹2,499", image: "https://images.pexels.com/photos/19042792/pexels-photo-19042792.jpeg" },
  ];

  const testimonials = [
    { name: "Rajesh Kumar", role: "Residential Client", text: "The quality of light is transformative. Shree Jee didn't just sell us bulbs; they designed our home's atmosphere." },
    { name: "Priya Sharma", role: "Architect", text: "Their catalog is a staple for my projects. Consistent quality and impeccable technical support every time." },
    { name: "Amit Patel", role: "Project Manager", text: "The transition to smart lighting was seamless. Professional, punctual, and highly skilled team." },
  ];

  const instagramImages = [
    "https://images.pexels.com/photos/30434804/pexels-photo-30434804.jpeg", 
    "https://images.pexels.com/photos/30434803/pexels-photo-30434803.jpeg", 
    "https://images.pexels.com/photos/29433183/pexels-photo-29433183.jpeg", 
    "https://images.pexels.com/photos/30439822/pexels-photo-30439822.jpeg", 
    "https://images.pexels.com/photos/3525904/pexels-photo-3525904.jpeg",
    "https://images.pexels.com/photos/34004969/pexels-photo-34004969.png"
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] selection:bg-primary/20 overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-[85vh] flex items-center pt-10 md:pt-0">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-primary/10 blur-[80px] md:blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" 
        />
        
        <div className="container mx-auto px-5 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">Excellence Since 2014</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-gray-900 leading-[1.05] tracking-tighter">
                Crafting <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 via-primary to-yellow-900">
                  Brilliance
                </span>
              </h1>
              <p className="text-gray-600 text-lg md:text-2xl font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                Architectural lighting solutions that redefine the boundary between functionality and high art.
              </p>
              <div className="flex justify-center lg:justify-start gap-8 pt-4">
                <div className="flex flex-col">
                  <span className="text-gray-900 text-3xl md:text-4xl font-black italic">30+</span>
                  <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-1">Years</span>
                </div>
                <div className="w-[1px] h-12 bg-gray-200" />
                <div className="flex flex-col">
                  <span className="text-gray-900 text-3xl md:text-4xl font-black italic">100%</span>
                  <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-1">ISI Quality</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[32px] md:rounded-[48px] overflow-hidden border-[6px] md:border-[12px] border-white shadow-2xl group">
                <img 
                  src="https://images.pexels.com/photos/30434802/pexels-photo-30434802.jpeg" 
                  alt="Premium Lighting" 
                  className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-[3s]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Showroom Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-5 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn} className="relative group">
               <div className="rounded-[32px] md:rounded-[40px] overflow-hidden border-4 md:border-8 border-[#FAF9F6] shadow-xl">
                <img src="https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg" alt="Showroom" className="w-full aspect-square object-cover" />
              </div>
            </motion.div>
            
            <motion.div {...fadeIn} className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Step Into Our <br />
                <span className="text-primary italic font-serif">Curated Gallery</span>
              </h2>
              <p className="text-gray-600 text-lg font-light leading-relaxed">
                Step into our flagship showroom and witness the future of illumination. Our curated spaces are designed to inspire architectural excellence and modern comfort.
              </p>
              <div className="p-8 rounded-[32px] bg-[#FAF9F6] border border-gray-100">
                <h3 className="text-gray-900 font-bold text-xl mb-6 flex items-center gap-3">
                  <Settings className="w-6 h-6 text-primary" />
                  Showroom Hours
                </h3>
                <div className="space-y-4 text-sm md:text-base font-medium">
                  <div className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-gray-400 uppercase tracking-widest text-xs">SUN-FRI</span>
                    <span className="text-gray-900">10:00 AM - 08:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 uppercase tracking-widest text-xs">Saturday</span>
                    <span className="text-primary">CLOSED</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-[#FAF9F6] text-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="container mx-auto px-5"
        >
          <Lightbulb className="w-12 h-12 text-primary/40 mx-auto mb-8" />
          <h2 className="text-3xl md:text-7xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto tracking-tight">
            "We don't just light up rooms; <br />
            <span className="text-primary">we ignite atmospheres.</span>"
          </h2>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-5">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Uncompromising Standards</h2>
            <p className="text-gray-500 max-w-xl mx-auto italic">Engineering excellence into every lux and lumen.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="group p-8 rounded-[40px] hover:bg-[#FAF9F6] transition-all duration-500 border border-transparent hover:border-gray-100"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 mx-auto lg:mx-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <feature.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-gray-900 font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-20 md:py-32 bg-[#FAF9F6]">
        <div className="container mx-auto px-5 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn} className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Safety First. <br />
                <span className="text-primary">Precision Always.</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg font-light leading-relaxed">
                <p>Authentic ISI certification isn't just a label for us; it's a core philosophy. We partner with global leaders in electrical engineering to bring you components that prioritize your home's integrity.</p>
              </div>
              <div className="inline-flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
                <Shield className="w-6 h-6 text-primary" />
                <span className="font-bold text-gray-900">5,000+ Certified Installations</span>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[40px] overflow-hidden shadow-2xl"
            >
              <img src="https://images.pexels.com/photos/568948/pexels-photo-568948.jpeg" alt="Quality" className="w-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-5">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold">End-to-End Excellence</h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 rounded-[40px] bg-[#FAF9F6] text-center lg:text-right">
              <Truck className="w-10 h-10 text-primary mb-6 mx-auto lg:ml-auto lg:mr-0" />
              <h3 className="text-xl font-bold mb-3">Priority Logistics</h3>
              <p className="text-gray-500 text-sm">Insured white-glove delivery for your premium assets.</p>
            </motion.div>

            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="hidden lg:block relative"
            >
              <div className="rounded-full border-2 border-dashed border-primary/20 p-8">
                <div className="rounded-full overflow-hidden aspect-square shadow-2xl">
                  <img src="https://images.pexels.com/photos/4846114/pexels-photo-4846114.jpeg" alt="Service" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 rounded-[40px] bg-[#FAF9F6] text-center lg:text-left">
              <Settings className="w-10 h-10 text-primary mb-6 mx-auto lg:mx-0" />
              <h3 className="text-xl font-bold mb-3">Expert Setup</h3>
              <p className="text-gray-500 text-sm">Certified technical teams for seamless smart-home integration.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { val: "50k+", label: "Happy Spaces" },
              { val: "1.5k+", label: "Design Styles" },
              { val: "30+", label: "Years of Trust" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-5xl md:text-7xl font-black text-primary mb-2 italic">{stat.val}</div>
                <div className="text-white/40 uppercase tracking-[0.3em] text-[10px] font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 md:py-32 bg-[#FAF9F6]">
        <div className="container mx-auto px-5">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-5xl font-bold mb-2">The Collection</h2>
              <p className="text-gray-500">Hand-picked styles for the discerning eye.</p>
            </motion.div>
            <motion.button {...fadeIn} className="flex items-center gap-2 font-bold text-primary group">
              View All Masterpieces <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {products.map((product, index) => (
              <motion.div 
                key={index} 
                variants={fadeIn}
                className="group bg-white p-4 rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-700"
              >
                <div className="rounded-[32px] overflow-hidden mb-6 aspect-[4/5] relative">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-bold shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">Explore</button>
                  </div>
                </div>
                <div className="px-4 pb-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                    <p className="text-primary font-black text-lg mt-1">{product.price}</p>
                  </div>
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Zap className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-5">
          <motion.h2 {...fadeIn} className="text-4xl md:text-6xl font-black text-gray-900 italic mb-20 text-center">Voices of Trust</motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#FAF9F6] p-10 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all"
              >
                <Star className="text-primary w-6 h-6 mb-6 fill-primary" />
                <p className="text-gray-600 text-lg leading-relaxed italic mb-8">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">{t.name[0]}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-primary text-[10px] font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-20 md:py-32 bg-[#FAF9F6]">
        <div className="container mx-auto px-5">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl font-bold italic mb-2">#ShreeJeeSpaces</h2>
            <p className="text-gray-400">Join our digital community of design enthusiasts.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {instagramImages.map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 0.98 }}
                className="aspect-square rounded-[24px] md:rounded-[40px] overflow-hidden border-4 border-white shadow-lg"
              >
                <img src={img} alt="Insta" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white px-5">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-gray-900 rounded-[40px] md:rounded-[80px] p-10 md:p-24 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px]" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-7xl font-black text-white leading-tight">Ready to transform <br /> your space?</h2>
            <p className="text-gray-400 text-xl font-light max-w-2xl mx-auto">Schedule a private session with our lighting architects and bring your vision to light.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-12 py-5 bg-primary text-white font-black rounded-full shadow-2xl hover:scale-105 transition-transform">Book Consultation</button>
              <button className="px-12 py-5 bg-white/5 border border-white/10 text-white font-black rounded-full hover:bg-white/10">Download Catalog</button>
            </div>
            <p className="text-primary font-bold tracking-[0.3em]">+91 7275401715</p>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;