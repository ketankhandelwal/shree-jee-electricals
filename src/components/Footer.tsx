import { MapPin, Phone, Download, Facebook, Instagram, Twitter, Mail } from "lucide-react";

const productCategories = [
  "Chandeliers", "Ceiling Lights", "Smart Lights", "Table Lamps",
  "Floor Lamps", "Wall Lights", "LED Bulbs", "Strip Lights",
  "Outdoor Lights", "Pendant Lights", "Hanging Lights", "Mirror Lights"
];

const aboutLinks = [
  "About Us", "Privacy Policy", "Terms of Sale", 
  "Return Policy", "Shipping Policy", "Contact Us"
];

const Footer = () => {
  const mapUrl = "https://www.google.com/maps/dir//Schneider+electric+-+Shree+Jee+Electricals,+Infront+of+Janta+Tent+House,+Bhagwa+Chungi,+Dali+pur,+Bela+Pratapgarh,+Uttar+Pradesh+230001/@25.9142951,81.993651,19.81z/data=!4m8!4m7!1m0!1m5!1m1!1s0x399a913c1ef00ee9:0x6f48104f7a110604!2m2!1d81.9938561!2d25.9159735?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D";

  return (
    <footer className="bg-[#0a0a0a] text-white">
      {/* 1. High-Level Quick Contact Bar */}
      <div className="border-b border-white/10 py-12">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="flex flex-wrap justify-between items-center gap-8">
            <a 
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-primary transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Visit Us</p>
                <span className="text-sm font-bold">Balipur,Pratapgarh, Uttar Pradesh, India</span>
              </div>
            </a>

            <a href="tel:+917275401715" className="flex items-center gap-4 group">
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-primary transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Support</p>
                <span className="text-sm font-bold">+917275401715</span>
              </div>
            </a>

            <a href="mailto:Shreejeelightguru@gmail.com" className="flex items-center gap-4 group">
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-primary transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Email</p>
                <span className="text-sm font-bold">Shreejeelightguru@gmail.com</span>
              </div>
            </a>

            <a href="#" className="flex items-center gap-4 group">
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-primary transition-colors">
                <Download className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Resources</p>
                <span className="text-sm font-bold">Download Catalog</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Content */}
      <div className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-black tracking-tighter">SHREE JEE</h3>
                <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase">Electrical</p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
                Illuminating spaces with elegance since 2010. We provide premium, energy-efficient lighting solutions tailored for modern Indian homes and commercial spaces.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/shree.jee.light.guru" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.instagram.com/shree_jee07/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Products</h4>
              <div className="grid grid-cols-1 gap-3">
                {productCategories.slice(0, 6).map((category) => (
                  <a key={category} href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {category}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white invisible hidden lg:block">More Products</h4>
              <div className="grid grid-cols-1 gap-3 lg:mt-0">
                {productCategories.slice(6).map((category) => (
                  <a key={category} href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {category}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Company</h4>
              <div className="space-y-3">
                {aboutLinks.map((link) => {
                  let href = "#";
                  if (link === "About Us") href = "/about";
                  if (link === "Contact Us") href = "/contact";
                  return (
                    <a key={link} href={href} className="block text-gray-400 hover:text-primary transition-colors text-sm">
                      {link}
                    </a>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 3. Bottom Bar */}
      <div className="border-t border-white/5 py-8 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 font-medium">
              © 2014-2026 Shree Jee Electrical. All rights reserved.
            </p>
            <div className="flex gap-6 items-center">
                <div className="flex flex-col items-center md:items-end">
                  <span className="text-[10px] text-gray-600 font-bold uppercase">Designed for Excellence</span>
                  <a 
                    href="https://www.instagram.com/ketan.khandelwal.1/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[9px] text-primary font-black uppercase tracking-[0.2em] mt-1 hover:text-white transition-colors"
                  >
                    Ketan Khandelwal
                  </a>
                </div>
                <span className="text-[10px] text-gray-600 font-bold uppercase">Made in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;