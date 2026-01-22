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
  kitchen: "https://images.unsplash.com/photo-1718221621618-e477ce33485a?q=80&w=1778&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  bathroom: "https://images.unsplash.com/photo-1666585607888-3f6fe0b323d8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZSUyMGxpZ2h0aW5nfGVufDB8fDB8fHww",
  living: "https://images.unsplash.com/photo-1546555802-01af0341ec23?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  outdoor: "https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=2194&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  entertainment: "https://images.unsplash.com/photo-1541701768-a3d67ec0bc0a?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const ShopTheLook = () => {
  const [activeRoom, setActiveRoom] = useState("living");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
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
