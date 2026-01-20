import { useState } from "react";
import livingRoomImg from "@/assets/living-room.jpg";
import bedroomImg from "@/assets/bedroom.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";

const rooms = [
  { id: "kitchen", name: "Kitchen" },
  { id: "bathroom", name: "Bathroom" },
  { id: "living", name: "Living Room" },
  { id: "outdoor", name: "Outdoor" },
  { id: "entertainment", name: "Entertainment" },
];

const roomImages: Record<string, string> = {
  kitchen: product1,
  bathroom: product2,
  living: livingRoomImg,
  outdoor: product1,
  entertainment: bedroomImg,
};

const ShopTheLook = () => {
  const [activeRoom, setActiveRoom] = useState("living");

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-10">
          Shop The Look
        </h2>

        {/* Room Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {rooms.map((room) => (
            <button
              key={room.id}
              onClick={() => setActiveRoom(room.id)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                activeRoom === room.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted text-foreground hover:bg-primary/10 border border-border"
              }`}
            >
              {room.name}
            </button>
          ))}
        </div>

        {/* Room Image */}
        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          <img
            src={roomImages[activeRoom]}
            alt={`${activeRoom} lighting`}
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          />
          
          {/* Hotspots */}
          <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-primary rounded-full animate-pulse-slow cursor-pointer flex items-center justify-center">
            <div className="w-4 h-4 bg-primary-foreground rounded-full" />
          </div>
          <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-primary rounded-full animate-pulse-slow cursor-pointer flex items-center justify-center">
            <div className="w-4 h-4 bg-primary-foreground rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopTheLook;
