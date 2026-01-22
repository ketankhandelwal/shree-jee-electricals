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
  return (
    <footer id="contact" className="bg-[#0a0a0a] text-white">
      {/* 1. High-Level Quick Contact Bar */}
      <div className="border-b border-white/10 py-12">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="flex flex-wrap justify-between items-center gap-8">
            <a href="#" className="flex items-center gap-4 group">
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-blue-600 transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Visit Us</p>
                <span className="text-sm font-bold">Store Locator</span>
              </div>
            </a>

            <a href="#" className="flex items-center gap-4 group">
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-blue-600 transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Support</p>
                <span className="text-sm font-bold">1800-123-4567</span>
              </div>
            </a>

            <a href="#" className="flex items-center gap-4 group">
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-blue-600 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Email</p>
                <span className="text-sm font-bold">support@shreejee.com</span>
              </div>
            </a>

            <a href="#" className="flex items-center gap-4 group">
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-blue-600 transition-colors">
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
                <p className="text-[10px] font-bold text-blue-500 tracking-[0.3em] uppercase">Electrical</p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
                Illuminating spaces with elegance since 2010. We provide premium, energy-efficient lighting solutions tailored for modern Indian homes and commercial spaces.
              </p>
              <div className="flex gap-4">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Products</h4>
              <div className="grid grid-cols-1 gap-3">
                {productCategories.slice(0, 6).map((category) => (
                  <a key={category} href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">
                    {category}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white invisible hidden lg:block">More Products</h4>
              <div className="grid grid-cols-1 gap-3 lg:mt-0">
                {productCategories.slice(6).map((category) => (
                  <a key={category} href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">
                    {category}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Company</h4>
              <div className="space-y-3">
                {aboutLinks.map((link) => (
                  <a key={link} href="#" className="block text-gray-400 hover:text-blue-500 transition-colors text-sm">
                    {link}
                  </a>
                ))}
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
              © 2010-2026 Shree Jee Electrical. All rights reserved.
            </p>
            <div className="flex gap-6">
                <span className="text-[10px] text-gray-600 font-bold uppercase">Designed for Excellence</span>
                <span className="text-[10px] text-gray-600 font-bold uppercase">Made in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;