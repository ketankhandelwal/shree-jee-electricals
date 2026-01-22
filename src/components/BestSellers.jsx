import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Philips Wi-Fi HDMI Sync Box + TV Backlight Strip",
    image: "https://images.unsplash.com/photo-1568102106687-13401de952dc?w=900&auto=format&fit=crop&q=60",
    price: 12499,
    originalPrice: 17499,
    discount: 29,
    rating: 4.67,
  },
  {
    id: 2,
    name: "Philips StepGlow Step Light",
    image: "https://plus.unsplash.com/premium_photo-1661902934269-17eaf4b04f9f?w=900&auto=format&fit=crop&q=60",
    price: 459,
    originalPrice: 730,
    discount: 38,
    rating: null,
  },
  {
    id: 3,
    name: "Philips Full Glow LED Surface Light",
    image: "https://plus.unsplash.com/premium_photo-1661876403473-64980cbfdf0f?q=80&w=1740&auto=format&fit=crop",
    price: 487,
    originalPrice: 775,
    discount: 38,
    rating: null,
  }
];

const BestSellers = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const nextProducts = () => {
    setStartIndex((prev) => (prev + 1) % (products.length - visibleCount + 1));
  };

  const prevProducts = () => {
    setStartIndex((prev) => (prev === 0 ? products.length - visibleCount : prev - 1));
  };

  return (
    <section id="bestsellers" className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16 lg:px-24">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12">Shop our Bestsellers</h2>

        <div className="relative group">
          <button onClick={prevProducts} className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-md items-center justify-center border border-gray-100 hover:scale-110 transition-transform">
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>
          <button onClick={nextProducts} className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-md items-center justify-center border border-gray-100 hover:scale-110 transition-transform">
            <ChevronRight className="w-6 h-6 text-black" />
          </button>

          {/* Mobile: Flex-row with horizontal scroll | Desktop: Grid-cols-3 */}
          <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible pb-6 md:pb-0 snap-x snap-mandatory scrollbar-hide">
            {products.map((product) => (
              <div key={product.id} className="min-w-[85%] sm:min-w-[45%] md:min-w-full snap-center bg-white rounded-[24px] border border-gray-200 overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
                <div className="relative aspect-[4/3] flex">
                  <div className="w-[20%] bg-[#efefed]" /> 
                  <div className="w-[80%] bg-white" />
                  <div className="absolute inset-0 p-6 md:p-8 flex items-center justify-center">
                    <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  {product.rating && (
                    <div className="absolute bottom-4 right-6 flex items-center gap-1 bg-white/90 px-2 py-0.5 rounded-full shadow-sm">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-[10px] font-bold text-gray-600">{product.rating}</span>
                    </div>
                  )}
                </div>

                <div className="p-4 md:p-6 flex flex-col flex-grow bg-[#F5F5F7]">
                  <h3 className="text-base md:text-xl font-bold text-gray-900 leading-tight min-h-[40px] md:min-h-[56px] mb-4 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="border-t border-dotted border-gray-400 mb-4 md:mb-6" />
                  <div className="flex flex-col gap-1">
                    <div className="text-lg md:text-2xl font-black text-gray-900">
                      Rs. {product.price.toLocaleString("en-IN")}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs md:text-sm text-gray-400 line-through">
                        Rs. {product.originalPrice}
                      </span>
                      <span className="text-blue-600 font-bold text-xs md:text-sm">
                        -{product.discount}% off
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 md:mt-12">
          <Link to="/all-products" className="w-full md:w-auto px-4">
            <button className="w-full md:px-24 py-3 md:py-2 border-2 border-blue-600 text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-colors">
              All products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;