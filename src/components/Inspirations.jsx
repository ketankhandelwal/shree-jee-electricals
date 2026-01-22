import { useState } from "react";
import { ArrowRightCircle } from "lucide-react";

const inspirationsData = [
  {
    id: 1,
    date: "2025-01-02",
    displayDate: "02 Jan, 2025",
    title: "5 Ways To Use Strip And Rope Lights To Improve Your Home",
    image: "https://images.unsplash.com/photo-1475783006851-1d68dd683eff?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "strip-lights-tips",
    views: 1200,
  },
  {
    id: 2,
    date: "2025-02-15",
    displayDate: "15 Feb, 2025",
    title: "Enhancing Sleep And Serenity: The Benefits Of Smart Lighting",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "smart-lighting-benefits",
    views: 4500,
  },
  {
    id: 3,
    date: "2025-04-10",
    displayDate: "10 Apr, 2025",
    title: "Light Up Your Living Room With The Right Lighting",
    image: "https://media.istockphoto.com/id/1302899626/photo/classic-lamp.webp?a=1&b=1&s=612x612&w=0&k=20&c=IOK4RlYU9u_oLTGmJ9Ih9rtPYmu1ini0NhRHoeanoZs=",
    slug: "living-room-lighting",
    views: 3200,
  },
];

const Inspiration = () => {
  const [activeTab, setActiveTab] = useState("latest");

  const filteredInspirations = [...inspirationsData].sort((a, b) => {
    if (activeTab === "latest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else {
      return b.views - a.views;
    }
  });

  return (
    <section className="py-12 md:py-20 bg-[#F5F5F7]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16 lg:px-24">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 md:mb-12 gap-6">
          <h2 className="text-2xl md:text-5xl font-medium text-gray-900 leading-tight max-w-2xl">
            Get creative with lighting inspirations using <span className="font-bold">Philips lighting products</span>
          </h2>
          
          <button className="flex items-center gap-2 text-blue-800 font-bold hover:underline group whitespace-nowrap text-sm md:text-base">
            View all Inspiration <ArrowRightCircle className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="flex overflow-x-auto scrollbar-hide gap-3 mb-10 pb-2 no-scrollbar">
          <button 
            onClick={() => setActiveTab("latest")}
            className={`px-6 py-2.5 font-medium rounded-full transition-all whitespace-nowrap text-sm ${
              activeTab === "latest" ? "bg-white text-gray-900 shadow-sm font-bold" : "text-gray-500 hover:text-black"
            }`}
          >
            Latest
          </button>
          <button 
            onClick={() => setActiveTab("popular")}
            className={`px-8 py-2.5 font-medium rounded-full transition-all whitespace-nowrap text-sm ${
              activeTab === "popular" ? "bg-white text-gray-900 shadow-sm font-bold" : "text-gray-500 hover:text-black"
            }`}
          >
            Popular
          </button>
        </div>

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible pb-12 px-1 snap-x snap-mandatory scrollbar-hide">
          {filteredInspirations.map((item) => (
            <div 
              key={item.id} 
              className="group flex-shrink-0 w-[85%] sm:w-[48%] md:w-full snap-center flex flex-col bg-white rounded-[32px] overflow-hidden shadow-sm 
                         transition-all duration-500 ease-out
                         hover:-translate-y-4 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow bg-gray-100 transition-colors group-hover:bg-gray-200">
                <span className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4 font-semibold uppercase tracking-widest">
                  {item.displayDate}
                </span>
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-8 md:mb-12 leading-tight line-clamp-2">
                  {item.title}
                </h3>
                
                <div className="mt-auto">
                  <button 
                    className="flex items-center justify-between w-full py-4 px-6 border border-gray-200 rounded-full text-sm font-bold text-gray-900 bg-white group-hover:bg-gray-900 group-hover:text-white group-hover:border-transparent transition-all duration-300"
                  >
                    <span>Read More</span>
                    <ArrowRightCircle className="w-5 h-5 transition-all -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inspiration;