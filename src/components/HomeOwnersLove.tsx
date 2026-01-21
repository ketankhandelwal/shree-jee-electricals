import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import lifestyle1 from "@/assets/lifestyle-1.jpg";
import lifestyle2 from "@/assets/lifestyle-2.jpg";
import lifestyle3 from "@/assets/lifestyle-3.jpg";
import lifestyle4 from "@/assets/lifestyle-4.jpg";
import pendantLight from "@/assets/pendant-light.jpg";
import smartBulb from "@/assets/smart-bulb.jpg";
import tableLamp from "@/assets/table-lamp.jpg";
import wallLight from "@/assets/wall-light.jpg";

const products = [
  {
    id: 1,
    image: lifestyle1,
    productThumb: pendantLight,
    name: "Crystal Pendant Light",
    price: 5059,
    originalPrice: 6670,
    discount: 24,
  },
  {
    id: 2,
    image: lifestyle2,
    productThumb: smartBulb,
    name: "Smart WiFi LED Strip light (Wiz Connected)",
    price: 7169,
    originalPrice: 9499,
    discount: 25,
  },
  {
    id: 3,
    image: lifestyle3,
    productThumb: tableLamp,
    name: "Smart WiFi Squire table lamp (Wiz Connected)",
    price: 4990,
    originalPrice: null,
    discount: null,
  },
  {
    id: 4,
    image: lifestyle4,
    productThumb: wallLight,
    name: "Smart Wi-Fi Floor Lamp",
    price: 12415,
    originalPrice: 14999,
    discount: 17,
  },
];

const HomeOwnersLove = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Home owners love
          </h2>
          <p className="text-2xl md:text-3xl text-muted-foreground mt-1">
            Shree Jee lighting products
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-card rounded-full shadow-lg flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-card rounded-full shadow-lg flex items-center justify-center hover:bg-muted transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          )}

          {/* Products Carousel */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-[280px] md:w-[300px] group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative rounded-xl overflow-hidden mb-4 aspect-[3/4]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Product Thumbnail */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-card rounded-lg shadow-lg p-1">
                    <img
                      src={product.productThumb}
                      alt={product.name}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </div>

                {/* Product Info */}
                <div className="text-center">
                  <h3 className="font-medium text-foreground text-sm md:text-base mb-2 line-clamp-2 min-h-[40px]">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-bold text-foreground">
                      ₹{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <>
                        <span className="text-muted-foreground line-through text-sm">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                        <span className="text-green-600 text-sm font-medium">
                          {product.discount}% off
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeOwnersLove;
