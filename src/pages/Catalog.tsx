import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download, FileText, ExternalLink, Zap, ShieldCheck, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const partners = [
  { 
    name: "Philips", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Philips_logo.svg/1280px-Philips_logo.svg.png",
    description: "World leader in lighting, providing energy-efficient solutions.",
    catalogUrl: "#",
    color: "from-amber-200/40 to-amber-100/40"
  },
  { 
    name: "Havells", 
    logo: "https://companieslogo.com/img/orig/HAVELLS.NS_BIG-50b8b1af.png?t=1745677675",
    description: "Leading Fast Moving Electrical Goods (FMEG) Company.",
    catalogUrl: "#",
    color: "from-yellow-200/40 to-amber-100/40"
  },
  { 
    name: "Schneider", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/49/Schneider-Electric-Logo.jpg",
    description: "Digital transformation of energy management and automation.",
    catalogUrl: "#",
    color: "from-amber-100/40 to-yellow-50/40"
  },
  { 
    name: "RR Signature", 
    logo: "https://mma.prnewswire.com/media/530944/RR_Kabel_Logo.jpg?p=twitter",
    description: "Premier choice for architectural and decorative lighting.",
    catalogUrl: "#",
    color: "from-amber-200/40 to-primary/20"
  },
  { 
    name: "Luminous", 
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zrilFWWwdct-Swtei2WDtOgKImxB7pD7lA&s",
    description: "Powerful inverter and battery solutions for your home.",
    catalogUrl: "#",
    color: "from-yellow-200/40 to-amber-100/40"
  },
  { 
    name: "Havells Standard", 
    logo: "https://havells.com/media/wysiwyg/Standard.jpg",
    description: "Trusted standards in switchgear and electrical products.",
    catalogUrl: "#",
    color: "from-amber-200/40 to-primary/20"
  },
  { 
    name: "Polycab Wires", 
    logo: "https://static.wixstatic.com/media/78663d_378a8a4925084c029cc420095ed30c3f~mv2.jpg/v1/fill/w_1000,h_398,al_c,q_90/file.jpg",
    description: "High-quality wires and cables for secure electrical networks.",
    catalogUrl: "#",
    color: "from-amber-100/40 to-yellow-50/40"
  },
  { 
    name: "L&T Switchgear", 
    logo: "https://5.imimg.com/data5/SELLER/Default/2024/4/410342854/DX/VK/HZ/14408247/download.png",
    description: "Precision engineered switchgear and control products.",
    catalogUrl: "#",
    color: "from-amber-200/40 to-amber-100/40"
  },
  {
    name:"Panova",
    logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3gCHXYbI6lUbT0BoOfWbN6n965ySjx-xHQ&s",
    description:"",
    catalogUrl:"#",
    color:"from-amber-200/40 to-amber-100/40"
  }
];

const Catalog = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="relative px-6 py-16 md:py-24 overflow-hidden bg-gradient-to-b from-amber-50/50 to-white">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full animate-pulse-slow"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="inline-block text-amber-700 font-bold uppercase tracking-[0.4em] text-xs md:text-sm mb-6 border-b border-amber-200 pb-2">
                Digital Resource Center
              </span>
              <h1 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight text-gray-900">
                Product <span className="text-amber-600 italic">Catalogs</span>
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                Explore our comprehensive collection of product catalogs from the world's leading electrical brands. Download and browse at your convenience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Catalog Grid */}
        <section className="px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white border border-amber-100 rounded-[2rem] p-8 hover:border-primary transition-all duration-500 hover:shadow-[0_20px_40px_rgba(180,120,50,0.1)] flex flex-col h-full"
                >
                  {/* Card Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none`}></div>
                  
                  {/* Logo Container */}
                  <div className="relative mb-8 h-24 flex items-center justify-center p-6 bg-amber-50 rounded-2xl group-hover:bg-white transition-colors duration-500 overflow-hidden shadow-sm">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="max-h-full max-w-full object-contain filter group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>

                  {/* Brand Info */}
                  <div className="relative flex-grow flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors uppercase tracking-tight">{partner.name}</h3>
                      <Award className="w-4 h-4 text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                      {partner.description}
                    </p>

                    {/* Download Button */}
                    <div className="mt-auto">
                      <Button 
                        asChild
                        className="w-full bg-amber-900 hover:bg-amber-700 text-white font-bold py-6 rounded-xl transition-all duration-300 group/btn border-none"
                      >
                        <a href={partner.catalogUrl} download className="flex items-center justify-center gap-3">
                          <Download className="w-5 h-5 group-hover/btn:animate-bounce" />
                          <span>Download PDF</span>
                        </a>
                      </Button>
                      
                      <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-widest text-amber-800/60 font-bold px-2">
                        <span className="flex items-center gap-1 font-black"><FileText className="w-3 h-3" /> PDF Format</span>
                        <span className="flex items-center gap-1 font-black"><Zap className="w-3 h-3" /> Quick Access</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="px-6 py-20 mt-12 bg-amber-50/30 rounded-[3rem] max-w-7xl mx-auto border border-amber-100">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-amber-100">
                <ShieldCheck className="w-8 h-8 text-amber-700" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Verified Content</h4>
              <p className="text-gray-600 text-sm">All catalogs are sourced directly from our brand partners including Philips, Havells and more.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-amber-100">
                <Zap className="w-8 h-8 text-amber-700" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Instant Access</h4>
              <p className="text-gray-600 text-sm">Download full high-resolution catalogs instantly without any registration required.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-amber-100">
                <ExternalLink className="w-8 h-8 text-amber-700" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Latest Editions</h4>
              <p className="text-gray-600 text-sm">We regularly update our library to ensure you have access to the 2026-27 collection.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Need <span className="text-amber-600 italic">Custom</span> Solutions?</h2>
            <p className="text-gray-600 mb-10 text-lg">If you can't find a specific product in these catalogs, our experts are here to help you design your perfect space.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white font-black px-10 py-7 rounded-full text-lg transition-all active:scale-95 border-none shadow-lg">
                <a href="/contact">Book a Consultation</a>
              </Button>
              <Button variant="outline" asChild className="border-amber-200 hover:bg-amber-50 text-amber-800 font-bold px-10 py-7 rounded-full text-lg transition-all">
                <a href="https://wa.me/917275401715" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;
