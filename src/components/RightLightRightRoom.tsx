import { useState } from "react";
import { Star } from "lucide-react";
import roomLiving1 from "@/assets/room-living-1.jpg";
import roomBedroom1 from "@/assets/room-bedroom-1.jpg";
import roomKitchen1 from "@/assets/room-kitchen-1.jpg";
import roomDining1 from "@/assets/room-dining-1.jpg";
import chandelier from "@/assets/chandelier.jpg";
import ceilingLight from "@/assets/ceiling-light.jpg";
import pendantLight from "@/assets/pendant-light.jpg";

const roomTabs = [
  { id: "living", name: "Living Room Lights" },
  { id: "bedroom", name: "Bedroom Lights" },
  { id: "kitchen", name: "Kitchen Lights" },
  { id: "dining", name: "Dining Room Lights" },
  { id: "sitting", name: "Sitting Room" },
];

interface Product {
  id: number;
  image: string;
  name: string;
  rating: number | null;
}

const roomProducts: Record<string, Product[]> = {
  living: [
    { id: 1, image: roomLiving1, name: "Divine 5 Head Floor Lamp", rating: 5.0 },
    { id: 2, image: chandelier, name: "Celestial 7-Head Suspended Chandelier (Black)", rating: null },
    { id: 3, image: roomBedroom1, name: "Smart Wi-Fi Floor Lamp", rating: 4.9 },
  ],
  bedroom: [
    { id: 1, image: roomBedroom1, name: "Ambient Bedside Lamp", rating: 4.8 },
    { id: 2, image: ceilingLight, name: "Modern Ceiling Light", rating: 4.7 },
    { id: 3, image: pendantLight, name: "Elegant Pendant Light", rating: 5.0 },
  ],
  kitchen: [
    { id: 1, image: roomKitchen1, name: "Under Cabinet LED Strip", rating: 4.9 },
    { id: 2, image: ceilingLight, name: "Bright Panel Light", rating: 4.6 },
    { id: 3, image: chandelier, name: "Modern Kitchen Chandelier", rating: 4.8 },
  ],
  dining: [
    { id: 1, image: roomDining1, name: "Crystal Dining Chandelier", rating: 5.0 },
    { id: 2, image: chandelier, name: "Contemporary Pendant", rating: 4.9 },
    { id: 3, image: pendantLight, name: "Linear Suspension Light", rating: 4.7 },
  ],
  sitting: [
    { id: 1, image: roomLiving1, name: "Cozy Corner Lamp", rating: 4.8 },
    { id: 2, image: roomBedroom1, name: "Reading Floor Lamp", rating: 4.9 },
    { id: 3, image: ceilingLight, name: "Ambient Ceiling Light", rating: 4.6 },
  ],
};

const RightLightRightRoom = () => {
  const [activeRoom, setActiveRoom] = useState("living");
  const products = roomProducts[activeRoom];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
          The right light for the <span className="font-black">right room</span>
        </h2>

        {/* Room Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {roomTabs.map((room) => (
            <button
              key={room.id}
              onClick={() => setActiveRoom(room.id)}
              className={`px-4 md:px-6 py-2.5 rounded-full font-medium text-sm md:text-base transition-all ${
                activeRoom === room.id
                  ? "bg-muted text-foreground shadow-sm border border-border"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {room.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Rating Badge */}
                {product.rating && (
                  <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium text-foreground">
                      {product.rating.toFixed(2)}
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="bg-primary p-5">
                <h3 className="font-semibold text-primary-foreground text-lg mb-3 line-clamp-2 min-h-[56px]">
                  {product.name}
                </h3>
                <button className="px-6 py-2 border-2 border-primary-foreground rounded-full text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors font-medium">
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* All Products Button */}
        <div className="text-center mt-10">
          <button className="px-8 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors font-medium">
            All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default RightLightRightRoom;
