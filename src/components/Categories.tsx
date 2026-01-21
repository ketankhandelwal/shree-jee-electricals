import { Link } from "react-router-dom";
import chandelierImg from "@/assets/chandelier.jpg";
import ceilingImg from "@/assets/ceiling-light.jpg";
import smartBulbImg from "@/assets/smart-bulb.jpg";
import wallLightImg from "@/assets/wall-light.jpg";
import tableLampImg from "@/assets/table-lamp.jpg";
import pendantImg from "@/assets/pendant-light.jpg";
import outdoorImg from "@/assets/outdoor-light.jpg";
import bedroomImg from "@/assets/bedroom.jpg";

const categories = [
  { name: "Chandeliers", image: chandelierImg, slug: "chandeliers" },
  { name: "Ceiling Lights", image: ceilingImg, slug: "ceiling-lights" },
  { name: "Smart Lights", image: smartBulbImg, slug: "smart-lights" },
  { name: "Wall Lights", image: wallLightImg, slug: "wall-lights" },
  { name: "Table Lamps", image: tableLampImg, slug: "table-lamps" },
  { name: "Pendant Lights", image: pendantImg, slug: "pendant-lights" },
  { name: "Hanging Lights", image: pendantImg, slug: "hanging-lights" },
  { name: "Outdoor Lights", image: outdoorImg, slug: "outdoor-lights" },
  { name: "Bedroom Lights", image: bedroomImg, slug: "bedroom-lights" },
  { name: "LED Bulbs", image: smartBulbImg, slug: "led-bulbs" },
  { name: "Strip Lights", image: wallLightImg, slug: "strip-lights" },
  { name: "Floor Lamps", image: tableLampImg, slug: "floor-lamps" },
];

const Categories = () => {
  return (
    <section id="categories" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12">
          <span className="text-3xl md:text-4xl font-normal text-foreground">Explore Our </span>
          <span className="text-3xl md:text-4xl font-bold text-foreground">Exciting Lighting Range</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/category/${category.slug}`}
              className="flex flex-col items-center group"
            >
              <div className="category-circle mb-3">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm md:text-base font-medium text-foreground group-hover:text-primary transition-colors text-center">
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
