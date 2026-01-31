"use client";

import { useState, useEffect, useRef } from "react";
import { Search, ShoppingCart, Heart, Menu, X, ChevronRight, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { useNavigate, Link } from "react-router-dom";
import { products, Product } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fix 1: Handle Escape key and Autofocus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
        setSearchQuery("");
      }
    };

    if (isSearchOpen) {
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => searchInputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
      document.body.style.overflow = "unset";
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen]);

  // Search Logic
  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      setIsSearching(true);
      const timer = setTimeout(() => {
        const filtered = products.filter((p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
        ).slice(0, 6);
        setRecommendations(filtered);
        setIsSearching(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setRecommendations([]);
      setIsSearching(false);
    }
  }, [searchQuery]);

  const handleProductSelect = (id: string | number) => {
    setIsSearchOpen(false);
    setSearchQuery("");
    navigate(`/product/${id}`);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/#categories" },
    { name: "About Us", href: "/about" },
    { name: "Our Story", href: "/story" },
    { name: "Contact Us", href: "/contact" },
    { name: "Catalogs", href: "/catalogs" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300">
      {/* Announcement Bar */}
      <div className={`bg-black text-white transition-all duration-300 overflow-hidden flex items-center justify-center ${
        scrolled ? "h-0" : "h-10"
      }`}>
        <p className="text-[10px] md:text-xs font-medium tracking-wider px-4 text-center">
          Free Delivery above ₹4,999 • <span className="text-primary font-bold">HOLI Sale Live!</span>
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
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={logo} 
                alt="SHREE JEE Electricals" 
                className={`transition-all duration-300 object-contain ${
                  scrolled ? "h-10" : "h-16 md:h-20"
                }`}
              />
              <div className="flex flex-col">
                <span className={`font-black tracking-tighter leading-none transition-all duration-300 ${
                  scrolled ? "text-lg text-gray-900" : "text-xl md:text-2xl text-white"
                }`}>
                  SHREE <span className="text-primary">JEE</span>
                </span>
                <span className={`font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                  scrolled ? "text-[8px] text-primary" : "text-[10px] text-primary"
                }`}>
                  Electricals
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-bold uppercase tracking-wide transition-colors relative group ${
                    scrolled ? "text-gray-700 hover:text-primary" : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-1">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`rounded-full shadow-none hover:bg-white/10 ${scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white"}`}
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className={`relative rounded-full shadow-none hover:bg-white/10 ${scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white"}`}>
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute top-1 right-1 bg-primary text-white text-[10px] h-4 w-4 rounded-full flex items-center justify-center">0</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={`lg:hidden shadow-none hover:bg-white/10 ${scrolled ? "text-gray-900 hover:bg-gray-100" : "text-white"}`}
                onClick={() => setIsMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Universal Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-[120] flex flex-col pt-10 overflow-y-auto"
          >
            <div className="max-w-4xl mx-auto w-full px-6">
              <div className="flex justify-between items-center mb-12">
                {/* Fix 2: Logo takes you home and closes search */}
                <Link to="/" onClick={() => setIsSearchOpen(false)}>
                  <img src={logo} alt="SHREE JEE" className="h-12 brightness-0" />
                </Link>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full hover:bg-gray-100"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-8 w-8 text-gray-900" />
                </Button>
              </div>

              <div className="relative group">
                <Search className={`absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 transition-colors ${isSearching ? "text-primary animate-pulse" : "text-gray-300"}`} />
                <input 
                  ref={searchInputRef}
                  type="text" 
                  placeholder="Search products..."
                  className="w-full bg-transparent border-b-2 border-gray-100 py-6 pl-14 pr-10 text-3xl md:text-5xl font-black text-gray-900 placeholder:text-gray-200 focus:outline-none focus:border-primary transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                )}
              </div>

              {/* Recommendations */}
              <div className="mt-12 pb-20">
                {searchQuery.length > 1 ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between px-2 mb-6">
                       <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Search Intelligence</span>
                       <span className="text-xs font-bold text-primary">{recommendations.length} Results Found</span>
                    </div>

                    {recommendations.length > 0 ? (
                      <div className="grid gap-4">
                        {recommendations.map((product) => (
                          <button
                            key={product.id}
                            onClick={() => handleProductSelect(product.id)}
                            className="w-full flex items-center gap-6 p-4 rounded-[24px] bg-white border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all group/item text-left"
                          >
                            <div className="w-20 h-20 rounded-2xl bg-gray-50 border border-gray-100 p-2 flex-shrink-0">
                               <img src={product.image} className="w-full h-full object-contain group-hover/item:scale-110 transition-transform duration-300" alt={product.name} />
                            </div>
                            <div className="flex-grow">
                               <div className="flex items-center gap-2 mb-1">
                                  <span className="text-[10px] font-black text-primary px-2 py-0.5 bg-primary/10 rounded-full">{product.category}</span>
                                  <div className="flex items-center text-yellow-500">
                                     <Star className="w-3 h-3 fill-yellow-500" />
                                     <span className="text-[10px] font-bold ml-1">{product.rating || "4.8"}</span>
                                  </div>
                               </div>
                               <h3 className="text-xl font-bold text-gray-900 group-hover/item:text-primary transition-colors">{product.name}</h3>
                               <p className="text-sm font-black text-gray-500">Rs. {product.price.toLocaleString("en-IN")}</p>
                            </div>
                            <ChevronRight className="w-6 h-6 text-gray-200 group-hover/item:text-primary group-hover/item:translate-x-2 transition-all" />
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="py-24 text-center border-2 border-dashed border-gray-100 rounded-[40px]">
                         <Sparkles className="w-12 h-12 text-gray-100 mx-auto mb-4" />
                         <p className="text-gray-400 font-medium">No results found.</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-12 pt-8">
                     <div className="space-y-6">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Popular Categories</span>
                        <div className="flex flex-wrap gap-3">
                           {["Chandeliers", "Outdoor", "Smart LED", "Wall Lights", "Ceiling Panels"].map((cat) => (
                             <button 
                                key={cat}
                                onClick={() => setSearchQuery(cat)}
                                className="px-6 py-2 bg-gray-50 rounded-full text-xs font-bold text-gray-600 hover:bg-primary hover:text-white transition-all active:scale-95"
                              >
                                {cat}
                             </button>
                           ))}
                        </div>
                     </div>
                    <div className="space-y-6">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Quick Contact</span>
                      <div className="p-6 bg-gray-900 rounded-[32px] text-white">
                        <p className="text-sm text-gray-400 font-light mb-4">Can't find what you're looking for?</p>
                        <a href="tel:+917275401715" className="block text-xl font-black text-primary mb-2 hover:underline">
                          +91 7275401715
                        </a>
                        <a 
                          href="https://wa.me/917275401715" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] font-black uppercase tracking-widest border-b border-primary text-primary hover:text-white hover:border-white transition-colors inline-block"
                        >
                          Chat on WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sidebar Menu */}
      <div className={`fixed inset-0 bg-white z-[110] transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-10">
            <img src={logo} alt="SHREE JEE" className="h-10 brightness-0" />
            <Button variant="ghost" onClick={() => setIsMenuOpen(false)}>
              <X className="h-8 w-8 text-gray-900" />
            </Button>
          </div>
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link key={item.name} to={item.href} className="text-2xl font-bold text-gray-800" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;