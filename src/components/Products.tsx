import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import chandelierImg from "@/assets/chandelier.jpg";
import ceilingImg from "@/assets/ceiling-light.jpg";
import smartBulbImg from "@/assets/smart-bulb.jpg";
import wallLightImg from "@/assets/wall-light.jpg";
import tableLampImg from "@/assets/table-lamp.jpg";
import pendantImg from "@/assets/pendant-light.jpg";

const products = [
  {
    id: 1,
    name: "Crystal LED Chandelier",
    image: chandelierImg,
    price: 12499,
    originalPrice: 17499,
    discount: 29,
    rating: 4.7,
  },
  {
    id: 2,
    name: "Modern Ceiling Light",
    image: ceilingImg,
    price: 4599,
    originalPrice: 7300,
    discount: 38,
    rating: 4.5,
  },
  {
    id: 3,
    name: "Smart WiFi LED Bulb",
    image: smartBulbImg,
    price: 899,
    originalPrice: 1299,
    discount: 31,
    rating: 4.8,
  },
  {
    id: 4,
    name: "Designer Wall Sconce",
    image: wallLightImg,
    price: 2999,
    originalPrice: 4500,
    discount: 33,
    rating: 4.6,
  },
  {
    id: 5,
    name: "Elegant Table Lamp",
    image: tableLampImg,
    price: 3499,
    originalPrice: 5000,
    discount: 30,
    rating: 4.4,
  },
  {
    id: 6,
    name: "Pendant Light Set",
    image: pendantImg,
    price: 5999,
    originalPrice: 8500,
    discount: 29,
    rating: 4.7,
  },
];

const Products = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const nextProducts = () => {
    setStartIndex((prev) => (prev + 1) % (products.length - visibleCount + 1));
  };

  const prevProducts = () => {
    setStartIndex((prev) =>
      prev === 0 ? products.length - visibleCount : prev - 1
    );
  };

  return (
    <section id="products" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
          Sale is Live
        </h2>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevProducts}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background rounded-full shadow-lg flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={nextProducts}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background rounded-full shadow-lg flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
            {products.slice(startIndex, startIndex + visibleCount).map((product) => (
              <div
                key={product.id}
                className="bg-card rounded-lg shadow-md overflow-hidden card-hover group"
              >
                <div className="relative aspect-square bg-muted p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-background px-2 py-1 rounded-lg shadow">
                    <Star className="w-4 h-4 text-secondary fill-secondary" />
                    <span className="text-sm font-medium text-foreground">
                      {product.rating}
                    </span>
                  </div>
                </div>
                <div className="p-4 border-t border-border">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 min-h-[48px]">
                    {product.name}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-xl font-bold text-foreground">
                      ₹{product.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-sm font-semibold text-success">
                      -{product.discount}% off
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <Button variant="outline" className="btn-outline px-12">
            All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
