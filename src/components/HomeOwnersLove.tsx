
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const videos = [
  {
    id: 1,
    videoId: "KgNCtIjkdbw",
    customThumbnail: "https://m.media-amazon.com/images/I/61oDjpLfl4L.jpg",
    name: "Luminous Vento Deluxe Fan",
    price: 1799,
    originalPrice: 1414,
    discount: 24,
  },
  {
    id: 2,
    videoId: "r09YcW0UI4A",
    customThumbnail: "https://rukmini1.flixcart.com/image/1500/1500/xif0q/exhaust-fan/d/s/f/vento-deluxe-200-luminous-original-imahhd3f3hyyedyr.jpeg?q=70",
    name: "Luminous Vento Deluxe Exhaust Fan",
    price: 7169,
    originalPrice: 9499,
    discount: 25,
  },
  {
    id: 3,
    videoId: "4d-yLixrUCE",
    customThumbnail: "https://5.imimg.com/data5/SELLER/Default/2025/7/524422190/MM/YY/JY/222107283/rr-signature-cob-light-shimmer-cylinder.jpg",
    name: "RR Signature Shimmer Lights",
    price: 4990,
    originalPrice: null,
    discount: null,
  },
  {
    id: 4,
    videoId: "-FYb4R-ei3s",
    customThumbnail: "https://m.media-amazon.com/images/I/612csim5JHL._AC_UF1000,1000_QL80_.jpg",
    name: "Diamond Track Lights",
    price: 12415,
    originalPrice: 14999,
    discount: 17,
  },
  {
    id: 5,
    videoId: "ymYqqQmbLpA",
    customThumbnail: "https://rajcooling.com/wp-content/uploads/2025/06/1-Tent-Coolers.jpg.webp",
    name: "RAJ Air Cooler",
    price: 3299,
    originalPrice: 4500,
    discount: 27,
  },
  {
    id: 6,
    videoId: "FTaFmKy9fE0",
    customThumbnail: "https://imagecdn.99acres.com/microsite/wp-content/blogs.dir/6161/files/2024/02/types-of-dressing-table-lights_Hollywood-style-bulb-lights-_pinterest_amzn.jpg",
    name: "Dressing Table Lights",
    price: 8999,
    originalPrice: 11999,
    discount: 25,
  },
];

const VideoCard = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  // Use customThumbnail if provided, otherwise default to YouTube's auto-generated thumbnail
  const thumbnailUrl = video.customThumbnail || `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`;

  return (
    <div
      className="flex-shrink-0 w-[85%] sm:w-[45%] md:w-[320px] snap-center group cursor-pointer 
                 transition-all duration-300 ease-out 
                 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)] 
                 rounded-2xl p-2 bg-white"
    >
      {/* Video/Image Container */}
      <div className="relative rounded-2xl overflow-hidden mb-5 aspect-[3/4] bg-gray-50 border border-gray-100">
        <AnimatePresence mode="wait">
          {!isPlaying ? (
            <motion.div
              key="thumbnail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full"
              onClick={() => setIsPlaying(true)}
            >
              <img
                src={thumbnailUrl}
                alt={video.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                  <Play className="w-6 h-6 text-primary fill-primary ml-0.5" />
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="video"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full h-full bg-black"
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`}
                title={video.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Product Info */}
      <div className="text-center pb-4">
        <h3 className="font-semibold text-foreground text-sm md:text-lg mb-2 line-clamp-2 min-h-[40px] md:min-h-[56px]">
          {video.name}
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="font-bold text-lg text-foreground">
            ₹{video.price.toLocaleString()}
          </span>
          {video.originalPrice && (
            <span className="text-muted-foreground line-through text-xs md:text-sm">
              ₹{video.originalPrice.toLocaleString()}
            </span>
          )}
          {video.discount && (
            <span className="text-green-600 text-xs md:text-sm font-bold">
              {video.discount}% off
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

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
            PRODUCT REVIEWS
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
              className="hidden md:flex absolute -left-6 lg:-left-12 top-[40%] -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-all border border-gray-100"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="hidden md:flex absolute -right-6 lg:-right-12 top-[40%] -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-all border border-gray-100"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          )}

          {/* Video Row */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 md:gap-10 overflow-x-auto scrollbar-hide py-10 px-2 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
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
