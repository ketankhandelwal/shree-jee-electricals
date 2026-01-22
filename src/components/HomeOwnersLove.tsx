
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
    image: "https://plus.unsplash.com/premium_photo-1706072613979-e2bddb367f41?w=900&auto=format&fit=crop&q=60",
    productThumb: pendantLight,
    name: "Crystal Pendant Light",
    price: 5059,
    originalPrice: 6670,
    discount: 24,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1764607610179-8dbc82c1b24d?w=900&auto=format&fit=crop&q=60",
    productThumb: smartBulb,
    name: "Smart WiFi LED Strip light (Wiz Connected)",
    price: 7169,
    originalPrice: 9499,
    discount: 25,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1760067537456-478f724009ab?w=900&auto=format&fit=crop&q=60",
    productThumb: tableLamp,
    name: "Smart WiFi Squire table lamp (Wiz Connected)",
    price: 4990,
    originalPrice: null,
    discount: null,
  },
  {
    id: 4,
    image: "https://plus.unsplash.com/premium_photo-1661962510600-6c61b1aa7b0b?w=900&auto=format&fit=crop&q=60",
    productThumb: wallLight,
    name: "Smart Wi-Fi Floor Lamp",
    price: 12415,
    originalPrice: 14999,
    discount: 17,
  },
];

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ... (keep your asset imports and products array the same)

const HomeOwnersLove = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16 lg:px-24">
        <div className="mb-8 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">
            Home owners love
          </h2>
          <p className="text-xl md:text-3xl text-muted-foreground mt-1">
            Shree Jee lighting products
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="hidden md:flex absolute -left-8 top-[40%] -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-all border border-gray-100"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="hidden md:flex absolute -right-8 top-[40%] -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-all border border-gray-100"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          )}

          {/* Products Row */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 md:gap-10 overflow-x-auto scrollbar-hide py-10 px-2 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-[80%] sm:w-[45%] md:w-[320px] snap-center group cursor-pointer 
                           transition-all duration-300 ease-out 
                           hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] 
                           rounded-2xl p-2 bg-white"
              >
                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden mb-5 aspect-[3/4] bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Floating Thumbnail */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-14 h-14 md:w-16 md:h-16 bg-white rounded-xl shadow-xl p-1.5 z-10">
                    <img
                      src={product.productThumb}
                      alt={product.name}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                </div>

                {/* Product Info */}
                <div className="text-center pb-4 ">
                  <h3 className="font-semibold text-foreground text-sm md:text-lg mb-2 line-clamp-2 min-h-[40px] md:min-h-[56px]">
                    {product.name}
                  </h3>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <span className="font-bold text-lg text-foreground">
                      ₹{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-muted-foreground line-through text-xs md:text-sm">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                    {product.discount && (
                      <span className="text-green-600 text-xs md:text-sm font-bold">
                        {product.discount}% off
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="w-full mt-12 md:mt-20">
        <img
          src="https://images.unsplash.com/photo-1496588152823-86ff7695e68f?q=80&w=1740&auto=format&fit=crop"
          alt="Banner"
          className="w-full h-[250px] md:h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default HomeOwnersLove;

