"use client";

import { useState, useEffect } from "react";
import { Search, ShoppingCart, Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Smart Lighting", href: "#" },
    { name: "LED Strips", href: "#" },
    { name: "Ceiling Lights", href: "#" },
    { name: "Fans", href: "#" },
    { name: "Offers", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300">
      {/* Announcement Bar: Animate height instead of hiding to prevent layout jumps */}
      <div className={`bg-black text-white transition-all duration-300 overflow-hidden flex items-center justify-center ${
        scrolled ? "h-0" : "h-10"
      }`}>
        <p className="text-[10px] md:text-xs font-medium tracking-wider px-4 text-center">
          Free Delivery above ₹4,999 • <span className="text-primary font-bold">Diwali Sale Live!</span>
        </p>
      </div>

      {/* Main Navbar */}
      <div className={`transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md py-2" 
          : "bg-gradient-to-b from-black/60 to-transparent py-4"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between h-14">
            
            {/* Logo */}
            <a href="/" className="flex items-center group">
              <img 
                src={logo} 
                alt="SHREE JEE Electricals" 
                className={`transition-all duration-300 ${
                  scrolled ? "h-10" : "h-20"
                }`}
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-bold uppercase tracking-wide transition-colors relative group ${
                    scrolled ? "text-gray-700 hover:text-primary" : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className={`rounded-full ${scrolled ? "text-gray-700" : "text-white"}`}>
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className={`relative rounded-full ${scrolled ? "text-gray-700" : "text-white"}`}>
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute top-1 right-1 bg-primary text-white text-[10px] h-4 w-4 rounded-full flex items-center justify-center">0</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={`lg:hidden ${scrolled ? "text-gray-900" : "text-white"}`}
                onClick={() => setIsMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`fixed inset-0 bg-white z-[110] transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-10">
            <img src={logo} alt="SHREE JEE" className="h-10" />
            <Button variant="ghost" onClick={() => setIsMenuOpen(false)}>
              <X className="h-8 w-8 text-gray-900" />
            </Button>
          </div>
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-2xl font-bold text-gray-800" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;