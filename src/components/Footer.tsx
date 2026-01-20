import { MapPin, Phone, Download, Facebook, Instagram, Twitter } from "lucide-react";

const productCategories = [
  "Chandeliers",
  "Ceiling Lights",
  "Smart Lights",
  "Table Lamps",
  "Floor Lamps",
  "Wall Lights",
  "LED Bulbs",
  "Strip Lights",
  "Outdoor Lights",
  "Pendant Lights",
];

const aboutLinks = [
  "About Us",
  "Privacy Policy",
  "Terms of Sale",
  "Return Policy",
  "Shipping Policy",
  "Contact Us",
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-footer text-primary-foreground">
      {/* Quick Links */}
      <div className="border-b border-primary-foreground/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <a
              href="#"
              className="flex flex-col items-center gap-2 hover:text-secondary transition-colors"
            >
              <MapPin className="w-8 h-8" />
              <span className="font-medium">Store Locator</span>
            </a>
            <div className="hidden md:block w-px bg-primary-foreground/20" />
            <a
              href="#"
              className="flex flex-col items-center gap-2 hover:text-secondary transition-colors"
            >
              <Phone className="w-8 h-8" />
              <span className="font-medium">Customer Service</span>
            </a>
            <div className="hidden md:block w-px bg-primary-foreground/20" />
            <a
              href="#"
              className="flex flex-col items-center gap-2 hover:text-secondary transition-colors"
            >
              <Download className="w-8 h-8" />
              <span className="font-medium">Download Catalog</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product Categories */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-bold mb-4">Product Categories</h4>
              <div className="grid grid-cols-2 gap-2">
                {productCategories.map((category) => (
                  <a
                    key={category}
                    href="#"
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {category}
                  </a>
                ))}
              </div>
            </div>

            {/* Logo */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="mb-4">
                <h3 className="text-2xl font-bold">Shree Jee</h3>
                <p className="text-sm text-primary-foreground/80">Electrical</p>
              </div>
              <p className="text-sm text-primary-foreground/70 text-center lg:text-left">
                Your trusted partner for quality lighting solutions since 2010.
              </p>
            </div>

            {/* About & Social */}
            <div>
              <h4 className="text-lg font-bold mb-4">About</h4>
              <div className="space-y-2 mb-6">
                {aboutLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link}
                  </a>
                ))}
              </div>

              <h4 className="text-lg font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/20 py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-primary-foreground/70">
            ©2020-2026 Shree Jee Electrical. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
