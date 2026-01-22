import { Link } from "react-router-dom";

// Replace these placeholders with your actual asset imports
const categories = [
  { name: "Chandeliers", image: "https://in.shop.lighting.philips.com/cdn/shop/files/Frame_39636_c0489cf1-2f0a-4094-b676-e6ff40e6dc38.png?v=1745934175", slug: "chandeliers" },
  { name: "Ceiling Lights", image: "https://in.shop.lighting.philips.com/cdn/shop/files/Frame_39637.png?v=1745834259", slug: "ceiling-lights" },
  { name: "Smart Lights", image: "https://in.shop.lighting.philips.com/cdn/shop/files/Frame_39638.png?v=1745834260", slug: "smart-lights" },
  { name: "Wall Lights", image: "https://in.shop.lighting.philips.com/cdn/shop/files/Frame_39639.png?v=1745834260", slug: "wall-lights" },
  { name: "Table Lamps", image: "https://in.shop.lighting.philips.com/cdn/shop/files/Frame_39640.png?v=1745834260", slug: "table-lamps" },
  { name: "Bathroom Lights", image: "https://in.shop.lighting.philips.com/cdn/shop/files/Frame_39647.png?v=1745834259", slug: "bathroom-lights" },
  { name: "Hanging Lights", image: "https://in.shop.lighting.philips.com/cdn/shop/files/Frame_39641.png?v=1745834260", slug: "hanging-lights" },
  { name: "Bedside Lights", image: "https://in.shop.lighting.philips.com/cdn/shop/files/Frame_39642.png?v=1745834260", slug: "bedside-lights" },
  { name: "Outdoor Lights", image: "https://in.shop.lighting.philips.com/cdn/shop/files/Frame_39643.png?v=1745834259", slug: "outdoor-lights" },
  { name: "Strip Lights", image: "https://in.shop.lighting.philips.com/cdn/shop/files/Frame_39644.png?v=1745834259", slug: "strip-lights" },
  { name: "String Lights", image: "https://in.shop.lighting.philips.com/cdn/shop/files/oie_CRNwolPkqm09_1.png?v=1762263133", slug: "string-lights" },
  { name: "Emergency Lights", image: "https://in.shop.lighting.philips.com/cdn/shop/files/Frame_39645_1.png?v=1745936008", slug: "emergency-lights" },
  { name: "Solar Lights", image: "https://in.shop.lighting.philips.com/cdn/shop/files/Frame_39646.png?v=1745834259", slug: "solar-lights" },
  { name: "Picture Lights", image: "https://in.shop.lighting.philips.com/cdn/shop/files/Frame_39648.png?v=1745834259", slug: "picture-lights" },
  { name: "Track Lights", image: "https://in.shop.lighting.philips.com/cdn/shop/files/Frame_39649.png?v=1745834259", slug: "track-lights" },
  { name: "Bulbs", image: "https://in.shop.lighting.philips.com/cdn/shop/files/Frame_39650.png?v=1745834259", slug: "bulbs" },
  { name: "Floor Lamps", image: "https://in.shop.lighting.philips.com/cdn/shop/files/Frame_39651.png?v=1745834259", slug: "floor-lamps" },
  { name: "Tube Lights", image: "https://in.shop.lighting.philips.com/cdn/shop/files/Frame_39652.png?v=1745834260", slug: "tube-lights" },
];

const Categories = () => {
  return (
    <section id="categories" className="py-20 bg-white">
      {/* Large horizontal padding (px-8 to px-24) to match the screenshot spacing */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        
        <h2 className="text-left mb-16">
          <span className="text-3xl md:text-4xl font-light text-gray-800">Explore Our </span>
          <span className="text-3xl md:text-4xl font-bold text-gray-900">Exciting Lighting Range</span>
        </h2>

        {/* 6 columns on large screens, 3 on mobile, 4 on tablet */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-x-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/category/${category.slug}`}
              className="flex flex-col items-center group"
            >
              {/* The Circle with the specific gradient from the image */}
              <div >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-5/5 h-5/5 object-contain" // object-contain prevents cropping of the product
                />
              </div>
              
              <span className="text-sm md:text-base font-bold text-gray-900 text-center leading-tight">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;