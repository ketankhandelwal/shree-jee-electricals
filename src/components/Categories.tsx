import chandelierImg from "@/assets/chandelier.jpg";
import ceilingImg from "@/assets/ceiling-light.jpg";
import smartBulbImg from "@/assets/smart-bulb.jpg";
import wallLightImg from "@/assets/wall-light.jpg";
import tableLampImg from "@/assets/table-lamp.jpg";
import pendantImg from "@/assets/pendant-light.jpg";
import outdoorImg from "@/assets/outdoor-light.jpg";
import bedroomImg from "@/assets/bedroom.jpg";

const categories = [
  { name: "Chandeliers", image: chandelierImg },
  { name: "Ceiling Lights", image: ceilingImg },
  { name: "Smart Lights", image: smartBulbImg },
  { name: "Wall Lights", image: wallLightImg },
  { name: "Table Lamps", image: tableLampImg },
  { name: "Pendant Lights", image: pendantImg },
  { name: "Hanging Lights", image: pendantImg },
  { name: "Outdoor Lights", image: outdoorImg },
  { name: "Bedroom Lights", image: bedroomImg },
  { name: "LED Bulbs", image: smartBulbImg },
  { name: "Strip Lights", image: wallLightImg },
  { name: "Floor Lamps", image: tableLampImg },
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
            <a
              key={index}
              href="#"
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
