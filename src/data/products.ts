export interface Product {
  id: string | number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating?: number | null;
  category: string;
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Philips Wi-Fi HDMI Sync Box + TV Backlight Strip",
    image: "https://images.unsplash.com/photo-1568102106687-13401de952dc?w=900&auto=format&fit=crop&q=60",
    price: 12499,
    originalPrice: 17499,
    discount: 29,
    rating: 4.67,
    category: "Entertainment"
  },
  {
    id: "p2",
    name: "Philips StepGlow Step Light",
    image: "https://plus.unsplash.com/premium_photo-1661902934269-17eaf4b04f9f?w=900&auto=format&fit=crop&q=60",
    price: 459,
    originalPrice: 730,
    discount: 38,
    rating: null,
    category: "Safety"
  },
  {
    id: "p3",
    name: "Philips Full Glow LED Surface Light",
    image: "https://plus.unsplash.com/premium_photo-1661876403473-64980cbfdf0f?q=80&w=1740&auto=format&fit=crop",
    price: 487,
    originalPrice: 775,
    discount: 38,
    rating: 4.2,
    category: "Ceiling"
  },
  {
    id: "p4",
    name: "Classic Statement Chandelier",
    image: "https://www.anbre.in/wp-content/uploads/2025/01/1.-statement-chandeliers.webp",
    price: 45000,
    originalPrice: 55000,
    discount: 18,
    category: "Chandelier"
  },
  {
    id: "p5",
    name: "Modern Outdoor Pathway Light",
    image: "https://images.unsplash.com/photo-1531762948975-73032b7b61f4?q=80&w=1740&auto=format&fit=crop",
    price: 2499,
    originalPrice: 3499,
    discount: 28,
    category: "Outdoor"
  },
  {
    id: "p6",
    name: "Minimalist Pendant Lamp",
    image: "https://plus.unsplash.com/premium_photo-1661881436846-5a0f53025711?q=80&w=1828&auto=format&fit=crop",
    price: 3299,
    originalPrice: 4299,
    discount: 23,
    category: "Pendant"
  },
  {
    id: "p7",
    name: "Vintage Wall Sconce",
    image: "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop",
    price: 1899,
    originalPrice: 2499,
    discount: 24,
    category: "Wall"
  },
  {
    id: "p8",
    name: "Sleek Desk Table Lamp",
    image: "https://plus.unsplash.com/premium_photo-1661962449952-29741f7dbbc4?q=80&w=1548&auto=format&fit=crop",
    price: 2199,
    originalPrice: 2999,
    discount: 26,
    category: "Table"
  },
  {
    id: "p9",
    name: "Industrial Floor Lamp",
    image: "https://plus.unsplash.com/premium_photo-1682125916388-2a005de0d6b5?q=80&w=1612&auto=format&fit=crop",
    price: 5499,
    originalPrice: 6999,
    discount: 21,
    category: "Floor"
  }
];
