import { useState } from "react";
import { Search, User, ShoppingCart, Heart, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Products", href: "#products", hasDropdown: true },
    { name: "Categories", href: "#categories" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Announcement Bar */}
      <div className="bg-announcement py-2 px-4">
        <p className="text-center text-primary-foreground text-sm font-medium">
          🎉 Sale Live now! Get up to 40% off on all lighting products
        </p>
      </div>

      {/* Main Header */}
      <div className="bg-header shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="flex flex-col items-start">
                <span className="text-xl md:text-2xl font-bold text-header-foreground">
                  Shree Jee
                </span>
                <span className="text-xs md:text-sm text-header-foreground/80 -mt-1">
                  Electrical
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center text-header-foreground hover:text-secondary transition-colors font-medium"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="ml-1 w-4 h-4" />}
                </a>
              ))}
            </nav>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search products"
                  className="w-full pl-4 pr-12 py-2 rounded-lg bg-primary-foreground text-foreground border-0"
                />
                <Button
                  size="icon"
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90"
                >
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-header-foreground hover:bg-header-foreground/10"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-header-foreground hover:bg-header-foreground/10"
              >
                <User className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-header-foreground hover:bg-header-foreground/10 relative"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-secondary-foreground text-xs rounded-full flex items-center justify-center font-bold">
                  0
                </span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hidden md:flex text-header-foreground hover:bg-header-foreground/10 relative"
              >
                <Heart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-secondary-foreground text-xs rounded-full flex items-center justify-center font-bold">
                  0
                </span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-header-foreground hover:bg-header-foreground/10"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Search */}
          {isSearchOpen && (
            <div className="md:hidden pb-4 animate-fadeIn">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search products"
                  className="w-full pl-4 pr-12 py-2 rounded-lg bg-primary-foreground text-foreground border-0"
                />
                <Button
                  size="icon"
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90"
                >
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden border-t border-header-foreground/10 animate-fadeIn">
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between py-3 text-header-foreground hover:text-secondary transition-colors font-medium border-b border-header-foreground/10 last:border-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
