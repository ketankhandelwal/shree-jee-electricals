import { useState } from "react";
import { Star } from "lucide-react";

const roomTabs = [
  { id: "living", name: "Living Room Lights" },
  { id: "bedroom", name: "Bedroom Lights" },
  { id: "kitchen", name: "Kitchen Lights" },
  { id: "dining", name: "Dining Room Lights" },
  { id: "sitting", name: "Sitting Room" },
];

const roomProducts = {
  living: [
    { id: 1, image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=900&auto=format&fit=crop&q=60", name: "Divine 5 Head Floor Lamp", rating: 5.0 },
    { id: 2, image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=900&auto=format&fit=crop&q=60", name: "Celestial 7-Head Suspended Chandelier", rating: null },
    { id: 3, image: "https://images.unsplash.com/photo-1606170033648-5d55a3edf314?q=80&w=1548&auto=format&fit=crop", name: "Smart Wi-Fi Floor Lamp", rating: 4.9 },
  ],
  // ... (keep other bedroom, kitchen, dining data same)
};

const RightLightRightRoom = () => {
  const [activeRoom, setActiveRoom] = useState("living");
  const products = roomProducts[activeRoom] || [];

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16 lg:px-24">
        {/* Section Header */}
        <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-8">
          The right light for the <span className="font-black">right room</span>
        </h2>

        {/* Room Tabs - FIXED FOR MOBILE: Horizontal Swipe */}
        <div className="flex overflow-x-auto scrollbar-hide gap-2 md:gap-4 mb-10 pb-2 md:justify-center no-scrollbar">
          {roomTabs.map((room) => (
            <button
              key={room.id}
              onClick={() => setActiveRoom(room.id)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full font-medium text-sm md:text-base transition-all ${
                activeRoom === room.id
                  ? "bg-gray-100 text-foreground shadow-sm border border-gray-200"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {room.name}
            </button>
          ))}
        </div>

        {/* Products Grid - FIXED FOR MOBILE: Horizontal Swipe + Elevation Hover */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-12 px-2 snap-x snap-mandatory scrollbar-hide">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[85%] sm:w-[45%] md:w-full snap-center group 
                         bg-white rounded-2xl overflow-hidden shadow-md cursor-pointer 
                         transition-all duration-300 ease-out
                         hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Rating Badge */}
                {product.rating && (
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1 shadow-sm">
                    <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-bold text-gray-700">
                      {product.rating.toFixed(1)}
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="bg-[#1a1a1a] p-5">
                <h3 className="font-semibold text-white text-base md:text-lg mb-4 line-clamp-2 min-h-[48px] md:min-h-[56px]">
                  {product.name}
                </h3>
                <button className="w-full md:w-auto px-6 py-2 border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition-colors font-bold text-sm">
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* All Products Button */}
        <div className="text-center mt-4">
          <button className="px-12 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors font-bold">
            All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default RightLightRightRoom;