import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Heart, Star, ChevronDown, Filter, Home, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import categoryHeroImg from "@/assets/category-hero.jpg";
import catProduct1 from "@/assets/cat-product-1.jpg";
import catProduct2 from "@/assets/cat-product-2.jpg";
import catProduct3 from "@/assets/cat-product-3.jpg";
import catProduct4 from "@/assets/cat-product-4.jpg";
import catProduct5 from "@/assets/cat-product-5.jpg";
import catProduct6 from "@/assets/cat-product-6.jpg";
import catProduct7 from "@/assets/cat-product-7.jpg";

const categoryData: Record<string, { 
  title: string; 
  description: string; 
  subCategories: string[];
  products: Array<{
    id: number;
    name: string;
    image: string;
    price: number;
    originalPrice: number;
    discount: number;
    rating: number;
  }>;
}> = {
  "ceiling-lights": {
    title: "Ceiling Lights",
    description: "Explore Shree Jee Electrical Ceiling Lights, featuring a wide range of LED downlights, spotlights, surface lights, and COB lights. Designed for style, energy efficiency, and lasting performance, our ceiling lights will transform your space with reliable, high-quality illumination. Find the perfect fit for your home today!",
    subCategories: ["Surface Lights", "Downlights", "COB Light", "Cabinet Light"],
    products: [
      { id: 1, name: "Hexa Rimless LED Surface Light", image: catProduct1, price: 449, originalPrice: 1350, discount: 67, rating: 4.5 },
      { id: 2, name: "Saturn LED Ceiling Light", image: catProduct2, price: 1899, originalPrice: 3150, discount: 40, rating: 5 },
      { id: 3, name: "Ultra Glow LED Downlight", image: catProduct3, price: 502, originalPrice: 770, discount: 35, rating: 4.5 },
      { id: 4, name: "Full Glow 3-In-1 Surface Light (Tunable)", image: catProduct4, price: 1000, originalPrice: 1375, discount: 28, rating: 5 },
      { id: 5, name: "Star LED Panel Light", image: catProduct5, price: 599, originalPrice: 999, discount: 40, rating: 4 },
      { id: 6, name: "Round LED Ceiling Downlight", image: catProduct6, price: 349, originalPrice: 599, discount: 42, rating: 4.5 },
      { id: 7, name: "Premium COB Spotlight", image: catProduct7, price: 899, originalPrice: 1499, discount: 40, rating: 4 },
      { id: 8, name: "Slim Panel LED Light", image: catProduct1, price: 699, originalPrice: 1199, discount: 42, rating: 4.5 },
    ],
  },
  "chandeliers": {
    title: "Chandeliers",
    description: "Discover our exquisite collection of chandeliers at Shree Jee Electrical. From classic crystal designs to modern minimalist styles, our chandeliers add elegance and sophistication to any room. Perfect for living rooms, dining areas, and grand entrances.",
    subCategories: ["Crystal Chandeliers", "Modern Chandeliers", "Mini Chandeliers", "Luxury Chandeliers"],
    products: [
      { id: 1, name: "Crystal Drop Chandelier", image: catProduct1, price: 8999, originalPrice: 14999, discount: 40, rating: 4.8 },
      { id: 2, name: "Modern Gold Chandelier", image: catProduct2, price: 12499, originalPrice: 19999, discount: 37, rating: 5 },
      { id: 3, name: "Vintage Bronze Chandelier", image: catProduct3, price: 6999, originalPrice: 10999, discount: 36, rating: 4.5 },
      { id: 4, name: "Minimalist LED Chandelier", image: catProduct4, price: 5499, originalPrice: 8999, discount: 39, rating: 4.7 },
      { id: 5, name: "Glass Ball Chandelier", image: catProduct5, price: 7999, originalPrice: 12999, discount: 38, rating: 4.6 },
      { id: 6, name: "Sputnik Chandelier", image: catProduct6, price: 4999, originalPrice: 7999, discount: 37, rating: 4.4 },
      { id: 7, name: "Candle Style Chandelier", image: catProduct7, price: 9999, originalPrice: 15999, discount: 37, rating: 4.9 },
      { id: 8, name: "Ring LED Chandelier", image: catProduct1, price: 11999, originalPrice: 18999, discount: 37, rating: 4.8 },
    ],
  },
};

// Default category for any unknown category slug
const defaultCategory = {
  title: "Lighting Products",
  description: "Explore our wide range of premium lighting solutions at Shree Jee Electrical. From modern LED lights to classic designs, find the perfect lighting for every room in your home.",
  subCategories: ["All Types", "LED Lights", "Decorative", "Functional"],
  products: [
    { id: 1, name: "Premium LED Light", image: catProduct1, price: 599, originalPrice: 999, discount: 40, rating: 4.5 },
    { id: 2, name: "Designer Light Fixture", image: catProduct2, price: 1299, originalPrice: 1999, discount: 35, rating: 4.8 },
    { id: 3, name: "Modern Wall Light", image: catProduct3, price: 799, originalPrice: 1299, discount: 38, rating: 4.3 },
    { id: 4, name: "Elegant Table Lamp", image: catProduct4, price: 899, originalPrice: 1499, discount: 40, rating: 4.6 },
    { id: 5, name: "Smart LED Bulb", image: catProduct5, price: 399, originalPrice: 699, discount: 43, rating: 4.7 },
    { id: 6, name: "Outdoor Garden Light", image: catProduct6, price: 549, originalPrice: 899, discount: 39, rating: 4.4 },
    { id: 7, name: "Strip Light Set", image: catProduct7, price: 699, originalPrice: 1199, discount: 42, rating: 4.5 },
    { id: 8, name: "Pendant Light", image: catProduct1, price: 1099, originalPrice: 1799, discount: 39, rating: 4.6 },
  ],
};

const priceRanges = [
  "Less than INR 1000",
  "INR 1001 - 2000",
  "INR 2001 - 3000",
  "INR 3001 - 4000",
  "INR 4001 - 5000",
  "OVER INR 5000",
];

const CategoryPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const category = categorySlug ? categoryData[categorySlug] || defaultCategory : defaultCategory;
  const categoryTitle = categorySlug 
    ? categorySlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    : 'Products';

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 ${i <= rating ? 'text-secondary fill-secondary' : 'text-muted-foreground'}`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="relative h-[400px] md:h-[500px]">
        <img
          src={categoryHeroImg}
          alt={category.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                <span className="font-light">Brighten</span> your<br />home
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-2">
                with Shree Jee {category.title}
              </p>
              <div className="w-16 h-1 bg-secondary mb-4" />
              <p className="text-white/80 text-lg">
                Discover our collection now!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-background py-4 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground">{category.title}</span>
          </div>
        </div>
      </div>

      {/* Category Title & Description */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-start md:gap-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-0 md:min-w-[250px]">
              {category.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-4 border-y border-border bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                onClick={() => setShowFilters(!showFilters)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <span className="text-sm text-muted-foreground hidden sm:inline">
                Showing {category.products.length} out of {category.products.length} products
              </span>
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              Featured
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              {/* Sub-Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-foreground mb-4">Sub-Categories</h3>
                <div className="space-y-3">
                  {category.subCategories.map((subCat) => (
                    <label key={subCat} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="subCategory"
                        checked={selectedSubCategory === subCat}
                        onChange={() => setSelectedSubCategory(subCat)}
                        className="w-4 h-4 text-primary border-border focus:ring-primary"
                      />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {subCat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">Price</h3>
                <div className="space-y-3">
                  {priceRanges.map((range) => (
                    <label key={range} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="priceRange"
                        checked={selectedPrice === range}
                        onChange={() => setSelectedPrice(range)}
                        className="w-4 h-4 text-primary border-border focus:ring-primary"
                      />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {range}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-card rounded-lg shadow-sm overflow-hidden group hover:shadow-lg transition-shadow"
                  >
                    <div className="relative aspect-square bg-white p-4">
                      {/* Wishlist Button */}
                      <button className="absolute top-4 left-4 z-10 text-primary hover:text-primary/80 transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                      {/* Discount Badge */}
                      <div className="absolute top-4 right-4 z-10 bg-[#2d6b7a] text-white text-xs font-semibold px-2 py-1 rounded">
                        -{product.discount}%
                      </div>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 min-h-[48px] mb-2">
                        {product.name}...
                      </h3>
                      <div className="flex items-center gap-0.5 mb-2">
                        {renderStars(product.rating)}
                      </div>
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="font-semibold text-foreground">
                          From Rs. {product.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          Rs. {product.originalPrice.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-12">
                <button 
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      currentPage === page
                        ? 'bg-foreground text-background'
                        : 'border border-border hover:bg-muted'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button 
                  onClick={() => setCurrentPage(Math.min(3, currentPage + 1))}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-6">
              {category.title} are more than just a source of light; they are essential design elements that elevate any room. By seamlessly blending form and function, {category.title.toLowerCase()} enhance the ambiance, offering both illumination and style to your home. From cozy apartments to expansive living rooms, the right light can transform your space, all while saving floor space.
            </p>
            <p className="mb-8">
              Modern LED {category.title.toLowerCase()} provide versatile options with varying colors and designs, perfectly complementing your home's mood and decor.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-4">
              The Importance Of {category.title} In Interior Design
            </h3>
            <p className="mb-6">
              {category.title} are central to the design and feel of any room. They provide the perfect blend of practicality and elegance, adding depth and highlighting the features of your space.
            </p>
            <p className="mb-8">
              Whether it's the living room, bedroom, kitchen, bathroom, or hallway, {category.title.toLowerCase()} ensure every corner is beautifully illuminated. The right light fixture can turn any dull space into a vibrant one, enhancing both the style and functionality of your interiors.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-4">
              Types Of {category.title} And Their Designs
            </h3>
            <p className="mb-4">
              The right lighting depends on the design and purpose of the room. Here are the most popular types to consider:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li><strong>Surface-mounted lights:</strong> Directly attached to the ceiling, perfect for lighting in kitchens, balconies, or any room.</li>
              <li><strong>Downlights:</strong> Installed within a recessed cavity, ideal for living rooms, bedrooms, and hallways with false ceilings.</li>
              <li><strong>Spotlights:</strong> Perfect for focused lighting, directing a beam onto your artwork or architectural features.</li>
              <li><strong>Cabinet lights:</strong> Compact lights designed for under-cabinet installations, perfect for kitchens and closets.</li>
            </ul>
            <p className="mb-8">
              {category.title} come in various shapes, including round, square, and hexagonal, allowing you to find the perfect match for your style.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-4">
              How To Choose The Right Light For Your Space
            </h3>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li><strong>Living room:</strong> For false ceilings, choose downlights, COBs, or spotlights. Sleek flush-mounted lights work beautifully for a modern look.</li>
              <li><strong>Bedroom:</strong> Soft, warm-toned lights create a cozy atmosphere, while bright lights offer an illuminated vibe.</li>
              <li><strong>Kitchen:</strong> Combine task lighting, such as pendants over counters, with general ceiling lights for optimal lighting.</li>
              <li><strong>Bathroom:</strong> Surface lights, downlights, or COBs provide bright, diffused illumination.</li>
              <li><strong>Dining room:</strong> Highlight your dining table with a stylish pendant or chandelier.</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mb-4">
              Buying {category.title} Online: A Simple Guide
            </h3>
            <p className="mb-4">
              Shopping for {category.title.toLowerCase()} online is quick and convenient. Here's how to make the best choice for your home:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li><strong>Define the purpose:</strong> Consider the room where the light will be installed. Softer lighting is ideal for bedrooms, while brighter lights are better for kitchens and living rooms.</li>
            </ul>

            {/* FAQ Section */}
            <div className="border-t border-border pt-8 mt-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Q1. What type of {category.title.toLowerCase()} is best for my room?</h4>
                  <p>A. Consider the size of your room, ceiling height, and the ambiance you want to create. For false ceilings, downlights and COBs work well, while for true ceilings, opt for surface lights.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Q2. Can LED {category.title.toLowerCase()} work in all spaces?</h4>
                  <p>A. Yes, LED {category.title.toLowerCase()} are versatile and suitable for any room. They are energy-efficient, long-lasting, and offer even illumination without the need for separate bulbs.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Q3. Why should I consider smart {category.title.toLowerCase()}?</h4>
                  <p>A. Smart {category.title.toLowerCase()} offer convenience and customization. Easily adjust brightness, change colors, and control the lighting with your smartphone or voice, making them perfect for modern, connected homes.</p>
                </div>
              </div>

              <p className="mt-8 text-foreground">
                Elevate your space with Shree Jee Electrical {category.title.toLowerCase()}, where innovation meets elegance to provide the perfect lighting solution for every room.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryPage;
