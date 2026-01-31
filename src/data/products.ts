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
  },
  {
    id: "p10",
    name: "Luxurious Crystal Chandelier",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/WhatsApp+Image+2026-01-26+at+08.34.17.jpeg",
    price: 35000,
    originalPrice: 45000,
    discount: 22,
    category: "Chandelier"
  },
  {
    id: "p11",
    name: "Modern Square Gold Chandelier",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/WhatsApp+Image+2026-01-26+at+08.35.31+(1).jpeg",
    price: 42000,
    originalPrice: 55000,
    discount: 24,
    category: "Chandelier"
  },
  {
    id: "p12",
    name: "Elegance Gold Chandelier",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/WhatsApp+Image+2026-01-26+at+08.35.31.jpeg",
    price: 28000,
    originalPrice: 38000,
    discount: 26,
    category: "Chandelier"
  },
  {
    id: "p13",
    name: "Majestic Crystal Drop Chandelier",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/WhatsApp+Image+2026-01-26+at+08.37.19.jpeg",
    price: 48000,
    originalPrice: 65000,
    discount: 26,
    category: "Chandelier"
  },
  {
    id: "p14",
    name: "Contemporary Glass Chandelier",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/WhatsApp+Image+2026-01-26+at+08.37.20+(1).jpeg",
    price: 32000,
    originalPrice: 42000,
    discount: 24,
    category: "Chandelier"
  },
  {
    id: "p15",
    name: "Artistic Bubble Chandelier",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/WhatsApp+Image+2026-01-26+at+08.37.20.jpeg",
    price: 15000,
    originalPrice: 22000,
    discount: 32,
    category: "Chandelier"
  },
  {
    id: "p16",
    name: "Glossy Finish Chandelier",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/WhatsApp+Image+2026-01-26+at+08.37.21+(1).jpeg",
    price: 25000,
    originalPrice: 35000,
    discount: 29,
    category: "Chandelier"
  },
  {
    id: "p17",
    name: "Golden Halo Chandelier",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/WhatsApp+Image+2026-01-26+at+08.37.21.jpeg",
    price: 19000,
    originalPrice: 28000,
    discount: 32,
    category: "Chandelier"
  },
  {
    id: "p18",
    name: "Luxury Raindrop Chandelier",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/WhatsApp+Image+2026-01-26+at+08.38.22.jpeg",
    price: 55000,
    originalPrice: 75000,
    discount: 27,
    category: "Chandelier"
  },
  {
    id: "p19",
    name: "Premium Spiral Chandelier",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/WhatsApp+Image+2026-01-26+at+08.38.23+(1).jpeg",
    price: 65000,
    originalPrice: 85000,
    discount: 24,
    category: "Chandelier"
  },
  {
    id: "p20",
    name: "Grand Tiered Chandelier",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/WhatsApp+Image+2026-01-26+at+08.38.23.jpeg",
    price: 75000,
    originalPrice: 95000,
    discount: 21,
    category: "Chandelier"
  },
  {
    id: "p21",
    name: "Classic Round Ceiling Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/ceiling1.jpg",
    price: 899,
    originalPrice: 1499,
    discount: 40,
    category: "Ceiling"
  },
  {
    id: "p22",
    name: "Modern Panel Ceiling Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/ceiling2.jpg",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    category: "Ceiling"
  },
  {
    id: "p23",
    name: "Ultra Slim LED Surface Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/ceiling3.jpg",
    price: 599,
    originalPrice: 999,
    discount: 40,
    category: "Ceiling"
  },
  {
    id: "p24",
    name: "Flush Mount Decorative Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/ceiling4.jpg",
    price: 2499,
    originalPrice: 3499,
    discount: 28,
    category: "Ceiling"
  },
  {
    id: "p25",
    name: "Geometric LED Ceiling Lamp",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/ceiling5.jpg",
    price: 1899,
    originalPrice: 2999,
    discount: 36,
    category: "Ceiling"
  },
  {
    id: "p26",
    name: "Premium COB Downlight",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/ceiling6.jpg",
    price: 749,
    originalPrice: 1249,
    discount: 40,
    category: "Ceiling"
  },
  {
    id: "p27",
    name: "Recessed Ceiling Spotlight",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/ceiling7.jpg",
    price: 499,
    originalPrice: 799,
    discount: 37,
    category: "Ceiling"
  },
  {
    id: "p28",
    name: "Modernist Square Ceiling Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/ceiling8.webp",
    price: 3299,
    originalPrice: 4500,
    discount: 26,
    category: "Ceiling"
  },
  {
    id: "p29",
    name: "Elite Surface Mounted Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/ceiling9.jpg",
    price: 1599,
    originalPrice: 2499,
    discount: 36,
    category: "Ceiling"
  },
  {
    id: "p30",
    name: "Smart Wi-Fi LED Bulb",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/smart_lights/smart1.webp",
    price: 699,
    originalPrice: 1299,
    discount: 46,
    category: "Smart"
  },
  {
    id: "p31",
    name: "Colorspace Smart Strip Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/smart_lights/smart2.webp",
    price: 2499,
    originalPrice: 3999,
    discount: 37,
    category: "Smart"
  },
  {
    id: "p32",
    name: "Tunable Smart Downlight",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/smart_lights/smart3.jpg",
    price: 1899,
    originalPrice: 2999,
    discount: 36,
    category: "Smart"
  },
  {
    id: "p33",
    name: "Smart Motion Sensor Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/smart_lights/smart4.jpg",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    category: "Smart"
  },
  {
    id: "p34",
    name: "Voice Controlled Smart Lamp",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/smart_lights/smart5.webp",
    price: 3499,
    originalPrice: 4999,
    discount: 30,
    category: "Smart"
  },
  {
    id: "p35",
    name: "Smart RGB CCT Panel Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/smart_lights/smart6.webp",
    price: 4599,
    originalPrice: 6500,
    discount: 29,
    category: "Smart"
  },
  {
    id: "p36",
    name: "Smart Outdoor String Lights",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/smart_lights/smart7.webp",
    price: 5999,
    originalPrice: 8500,
    discount: 29,
    category: "Smart"
  },
  {
    id: "p37",
    name: "Smart Dimmable Wall Sconce",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/smart_lights/smart8.webp",
    price: 2899,
    originalPrice: 4200,
    discount: 31,
    category: "Smart"
  },
  {
    id: "p38",
    name: "Smart Gateway Hub",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/smart_lights/smart9.webp",
    price: 3999,
    originalPrice: 5999,
    discount: 33,
    category: "Smart"
  },
  {
    id: "p39",
    name: "Vintage Brass Wall Sconce",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/wall_lights/wall1.webp",
    price: 1899,
    originalPrice: 2999,
    discount: 36,
    category: "Wall"
  },
  {
    id: "p40",
    name: "Modern Minimalist Wall Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/wall_lights/wall2.webp",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    category: "Wall"
  },
  {
    id: "p41",
    name: "Industrial Pipe Wall Lamp",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/wall_lights/wall3.webp",
    price: 1499,
    originalPrice: 2299,
    discount: 34,
    category: "Wall"
  },
  {
    id: "p42",
    name: "Decorative Crystal Wall Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/wall_lights/wall5.webp",
    price: 3499,
    originalPrice: 4999,
    discount: 30,
    category: "Wall"
  },
  {
    id: "p43",
    name: "Sleek LED Wall Bar",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/wall_lights/wall6.webp",
    price: 2199,
    originalPrice: 3299,
    discount: 33,
    category: "Wall"
  },
  {
    id: "p44",
    name: "Outdoor Weatherproof Wall Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/wall_lights/wall7.webp",
    price: 1599,
    originalPrice: 2499,
    discount: 36,
    category: "Wall"
  },
  {
    id: "p45",
    name: "Classic Fabric Shade Wall Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/wall_lights/wall8.webp",
    price: 1799,
    originalPrice: 2699,
    discount: 33,
    category: "Wall"
  },
  {
    id: "p46",
    name: "Artistic Geometric Wall Lamp",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/wall_lights/wall9.webp",
    price: 2899,
    originalPrice: 4200,
    discount: 31,
    category: "Wall"
  },
  {
    id: "p47",
    name: "Premium Gold Finish Wall Sconce",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/wall_lights/wall10.webp",
    price: 3999,
    originalPrice: 5999,
    discount: 33,
    category: "Wall"
  },
  {
    id: "p48",
    name: "Elegant Ceramic Table Lamp",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/table_lamps/WhatsApp+Image+2026-01-26+at+08.21.07.jpeg",
    price: 3499,
    originalPrice: 4999,
    discount: 30,
    category: "Table"
  },
  {
    id: "p49",
    name: "Modern Metallic Desk Lamp",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/table_lamps/WhatsApp+Image+2026-01-26+at+08.21.08+(1).jpeg",
    price: 2899,
    originalPrice: 4200,
    discount: 31,
    category: "Table"
  },
  {
    id: "p50",
    name: "Minimalist Wooden Base Lamp",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/table_lamps/WhatsApp+Image+2026-01-26+at+08.21.08.jpeg",
    price: 1999,
    originalPrice: 2999,
    discount: 33,
    category: "Table"
  },
  {
    id: "p51",
    name: "Industrial Style Table Lamp",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/table_lamps/WhatsApp+Image+2026-01-26+at+08.21.09.jpeg",
    price: 2499,
    originalPrice: 3800,
    discount: 34,
    category: "Table"
  },
  {
    id: "p52",
    name: "Luxury Crystal Table Lamp",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/table_lamps/WhatsApp+Image+2026-01-26+at+08.33.40.jpeg",
    price: 5999,
    originalPrice: 8500,
    discount: 29,
    category: "Table"
  },
  {
    id: "p53",
    name: "Contemporary Glass Desk Lamp",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/table_lamps/WhatsApp+Image+2026-01-26+at+08.41.54+(1).jpeg",
    price: 3299,
    originalPrice: 4500,
    discount: 26,
    category: "Table"
  },
  {
    id: "p54",
    name: "Artistic Brass Table Lamp",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/table_lamps/WhatsApp+Image+2026-01-26+at+08.41.54.jpeg",
    price: 4599,
    originalPrice: 6500,
    discount: 29,
    category: "Table"
  },
  {
    id: "p55",
    name: "Classic Fabric Shade Desk Lamp",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/table_lamps/WhatsApp+Image+2026-01-26+at+08.41.55.jpeg",
    price: 1599,
    originalPrice: 2499,
    discount: 36,
    category: "Table"
  },
  {
    id: "p56",
    name: "Modern Bath Vanity Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bathroom_lights/bathroom1.webp",
    price: 3499,
    originalPrice: 4999,
    discount: 30,
    category: "Bathroom"
  },
  {
    id: "p57",
    name: "Sleek Mirror Front Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bathroom_lights/bathroom2.webp",
    price: 2899,
    originalPrice: 4200,
    discount: 31,
    category: "Bathroom"
  },
  {
    id: "p58",
    name: "Fog-Resistant LED Wall Lamp",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bathroom_lights/bathroom3.webp",
    price: 1999,
    originalPrice: 2999,
    discount: 33,
    category: "Bathroom"
  },
  {
    id: "p59",
    name: "Flush Mount Bath Ceiling Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bathroom_lights/bathroom4.webp",
    price: 2499,
    originalPrice: 3800,
    discount: 34,
    category: "Bathroom"
  },
  {
    id: "p60",
    name: "Waterproof Bathroom Spotlight",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bathroom_lights/bathroom5.webp",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    category: "Bathroom"
  },
  {
    id: "p61",
    name: "Premium Glass Vanity Sconce",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bathroom_lights/bathroom6.webp",
    price: 4599,
    originalPrice: 6500,
    discount: 29,
    category: "Bathroom"
  },
  {
    id: "p62",
    name: "Luxurious Hotel-Style Mirror Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bathroom_lights/bathroom7.webp",
    price: 5999,
    originalPrice: 8500,
    discount: 29,
    category: "Bathroom"
  },
  {
    id: "p63",
    name: "Dimmable Bathroom LED Bar",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bathroom_lights/bathroom8.webp",
    price: 3299,
    originalPrice: 4500,
    discount: 26,
    category: "Bathroom"
  },
  {
    id: "p64",
    name: "Antique Style Bath Sconce",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bathroom_lights/bathroom9.jpg",
    price: 2199,
    originalPrice: 3299,
    discount: 33,
    category: "Bathroom"
  },
  {
    id: "p65",
    name: "Modern Triple Light Vanity",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bathroom_lights/bathroom10.jpg",
    price: 4999,
    originalPrice: 6999,
    discount: 28,
    category: "Bathroom"
  },
  {
    id: "p66",
    name: "Modern Industrial Hanging Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/hanging/hanging1.jpg",
    price: 3499,
    originalPrice: 4999,
    discount: 30,
    category: "Hanging"
  },
  {
    id: "p67",
    name: "Elegant Glass Pendant Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/hanging/hanging2.jpg",
    price: 2899,
    originalPrice: 4200,
    discount: 31,
    category: "Hanging"
  },
  {
    id: "p68",
    name: "Contemporary Dome Hanging Lamp",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/hanging/hanging3.webp",
    price: 1999,
    originalPrice: 2999,
    discount: 33,
    category: "Hanging"
  },
  {
    id: "p69",
    name: "Sleek Nordic Pendant Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/hanging/hanging4.webp",
    price: 2499,
    originalPrice: 3800,
    discount: 34,
    category: "Hanging"
  },
  {
    id: "p70",
    name: "Artistic Cluster Hanging Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/hanging/hanging5.webp",
    price: 5499,
    originalPrice: 7999,
    discount: 31,
    category: "Hanging"
  },
  {
    id: "p71",
    name: "Minimalist Cylinder Pendant",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/hanging/hanging6.webp",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    category: "Hanging"
  },
  {
    id: "p72",
    name: "Vintage Edison Hanging Lamp",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/hanging/hanging7.webp",
    price: 1599,
    originalPrice: 2499,
    discount: 36,
    category: "Hanging"
  },
  {
    id: "p73",
    name: "Luxury Spherical Hanging Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/hanging/hanging8.webp",
    price: 6999,
    originalPrice: 9999,
    discount: 30,
    category: "Hanging"
  },
  {
    id: "p74",
    name: "Modern Geometric Pendant",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/hanging/hangign9.webp",
    price: 3299,
    originalPrice: 4500,
    discount: 26,
    category: "Hanging"
  },
  {
    id: "p75",
    name: "Grand Tiered Hanging Fixture",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/hanging/hanging10.jpg",
    price: 8999,
    originalPrice: 12999,
    discount: 31,
    category: "Hanging"
  },
  {
    id: "p76",
    name: "Modern Bedside Pendant",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bed_lights/bed1.webp",
    price: 2499,
    originalPrice: 3499,
    discount: 28,
    category: "Bedside"
  },
  {
    id: "p77",
    name: "Golden Arm Wall Sconce",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bed_lights/bed2.jpg",
    price: 3299,
    originalPrice: 4500,
    discount: 26,
    category: "Bedside"
  },
  {
    id: "p78",
    name: "Minimalist Floating Lamp",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bed_lights/bed3.jpg",
    price: 1899,
    originalPrice: 2600,
    discount: 27,
    category: "Bedside"
  },
  {
    id: "p79",
    name: "Sleek Reading Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bed_lights/bed4.webp",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    category: "Bedside"
  },
  {
    id: "p80",
    name: "Artistic Bedside Orb",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bed_lights/bed5.webp",
    price: 4599,
    originalPrice: 6500,
    discount: 29,
    category: "Bedside"
  },
  {
    id: "p81",
    name: "Industrial Bedside Sconce",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bed_lights/bed6.webp",
    price: 2199,
    originalPrice: 3299,
    discount: 33,
    category: "Bedside"
  },
  {
    id: "p82",
    name: "Contemporary Crystal Sconce",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bed_lights/bed7.avif",
    price: 3999,
    originalPrice: 5999,
    discount: 33,
    category: "Bedside"
  },
  {
    id: "p83",
    name: "Classic Fabric Shade Sconce",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bed_lights/bed8.jpg",
    price: 1599,
    originalPrice: 2499,
    discount: 36,
    category: "Bedside"
  },
  {
    id: "p84",
    name: "Modern Geometric Bedside Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bed_lights/bed9.jpeg",
    price: 2899,
    originalPrice: 4200,
    discount: 31,
    category: "Bedside"
  },
  {
    id: "p85",
    name: "Premium Adjustable Reading Lamp",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bed_lights/bed10.webp",
    price: 4999,
    originalPrice: 6999,
    discount: 28,
    category: "Bedside"
  },
  {
    id: "p86",
    name: "Modern Outdoor Post Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/outdoor_lights/out1.png",
    price: 3899,
    originalPrice: 5499,
    discount: 29,
    category: "Outdoor"
  },
  {
    id: "p87",
    name: "Sleek Garden Wall Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/outdoor_lights/out2.jpg",
    price: 1599,
    originalPrice: 2499,
    discount: 36,
    category: "Outdoor"
  },
  {
    id: "p88",
    name: "Premium Outdoor Floodlight",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/outdoor_lights/out3.jpg",
    price: 4299,
    originalPrice: 6500,
    discount: 34,
    category: "Outdoor"
  },
  {
    id: "p89",
    name: "Decorative Pathway Bollard",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/outdoor_lights/out4.webp",
    price: 2899,
    originalPrice: 4200,
    discount: 31,
    category: "Outdoor"
  },
  {
    id: "p90",
    name: "Classic Outdoor Lantern",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/outdoor_lights/out5.jpg",
    price: 2199,
    originalPrice: 3299,
    discount: 33,
    category: "Outdoor"
  },
  {
    id: "p91",
    name: "Modern Up-Down Wall Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/outdoor_lights/out6.webp",
    price: 1899,
    originalPrice: 2800,
    discount: 32,
    category: "Outdoor"
  },
  {
    id: "p92",
    name: "Solar Powered Garden Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/outdoor_lights/out7.webp",
    price: 999,
    originalPrice: 1599,
    discount: 38,
    category: "Outdoor"
  },
  {
    id: "p93",
    name: "Industrial Style Outdoor Sconce",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/outdoor_lights/out8.png",
    price: 2499,
    originalPrice: 3800,
    discount: 34,
    category: "Outdoor"
  },
  {
    id: "p94",
    name: "Sleek LED Recessed Step Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/outdoor_lights/out9.webp",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    category: "Outdoor"
  },
  {
    id: "p95",
    name: "Heavy Duty Security Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/outdoor_lights/out10.jpeg",
    price: 4999,
    originalPrice: 7500,
    discount: 33,
    category: "Outdoor"
  },
  {
    id: "p96",
    name: "Premium Profile LED Strip",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/profile/profile1.webp",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    category: "Strip"
  },
  {
    id: "p97",
    name: "Architectural Profile Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/profile/profil2.webp",
    price: 2499,
    originalPrice: 3800,
    discount: 34,
    category: "Strip"
  },
  {
    id: "p98",
    name: "Recessed Aluminum Profile",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/profile/profile3.webp",
    price: 899,
    originalPrice: 1499,
    discount: 40,
    category: "Strip"
  },
  {
    id: "p99",
    name: "Surface Mount Profile Strip",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/profile/profile4.webp",
    price: 1599,
    originalPrice: 2499,
    discount: 36,
    category: "Strip"
  },
  {
    id: "p100",
    name: "Flexible COB Strip Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/profile/profile5.webp",
    price: 799,
    originalPrice: 1299,
    discount: 38,
    category: "Strip"
  },
  {
    id: "p101",
    name: "High-Brightness Profile Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/profile/profile6.webp",
    price: 3299,
    originalPrice: 4500,
    discount: 26,
    category: "Strip"
  },
  {
    id: "p102",
    name: "Custom Length LED Profile",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/profile/profile8.webp",
    price: 2199,
    originalPrice: 3299,
    discount: 33,
    category: "Strip"
  },
  {
    id: "p103",
    name: "Corner Profile Light Strip",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/profile/profile9.webp",
    price: 1899,
    originalPrice: 2800,
    discount: 32,
    category: "Strip"
  },
  {
    id: "p104",
    name: "Ultra-Thin Profile Channel",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/profile/profile10.webp",
    price: 1499,
    originalPrice: 2299,
    discount: 34,
    category: "Strip"
  },
  {
    id: "p105",
    name: "Classic Warm White String Lights",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/string/string.jpg",
    price: 499,
    originalPrice: 899,
    discount: 44,
    category: "String"
  },
  {
    id: "p106",
    name: "Multicolor Festive Fairy Lights",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/string/string2.webp",
    price: 399,
    originalPrice: 699,
    discount: 43,
    category: "String"
  },
  {
    id: "p107",
    name: "Decorative Star String Lights",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/string/string3.webp",
    price: 799,
    originalPrice: 1299,
    discount: 38,
    category: "String"
  },
  {
    id: "p108",
    name: "Retro Edison String Lights",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/string/string4.jpeg",
    price: 1499,
    originalPrice: 2299,
    discount: 34,
    category: "String"
  },
  {
    id: "p109",
    name: "Outdoor Waterproof String Lights",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/string/string5.webp",
    price: 1899,
    originalPrice: 2800,
    discount: 32,
    category: "String"
  },
  {
    id: "p110",
    name: "USB Powered Crystal String Lights",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/string/string6.avif",
    price: 599,
    originalPrice: 999,
    discount: 40,
    category: "String"
  },
  {
    id: "p111",
    name: "Rose Gold Decorative Lights",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/string/string7.webp",
    price: 899,
    originalPrice: 1499,
    discount: 40,
    category: "String"
  },
  {
    id: "p112",
    name: "Heavy Duty Patio String Lights",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/string/string8.jpg",
    price: 2499,
    originalPrice: 3800,
    discount: 34,
    category: "String"
  },
  {
    id: "p113",
    name: "Solar Powered Garden String Lights",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/string/string9.avif",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    category: "String"
  },
  {
    id: "p114",
    name: "Ultra-Thin Silver Wire Lights",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/string/string10.webp",
    price: 299,
    originalPrice: 599,
    discount: 50,
    category: "String"
  },
  {
    id: "p115",
    name: "Heavy-Duty Rechargeable Emergency Lantern",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/emergency/emercency.jpg",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    category: "Emergency"
  },
  {
    id: "p116",
    name: "Automatic LED Emergency Wall Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/emergency/emergency2.webp",
    price: 899,
    originalPrice: 1499,
    discount: 40,
    category: "Emergency"
  },
  {
    id: "p117",
    name: "Solar Powered Emergency Lamp",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/emergency/emergency3.jpg",
    price: 1599,
    originalPrice: 2499,
    discount: 36,
    category: "Emergency"
  },
  {
    id: "p118",
    name: "Multipurpose Emergency LED Torch",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/emergency/emergency4.jpg",
    price: 499,
    originalPrice: 899,
    discount: 44,
    category: "Emergency"
  },
  {
    id: "p119",
    name: "High-Intensity Rechargeable Searchlight",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/emergency/emergency5.webp",
    price: 2499,
    originalPrice: 3800,
    discount: 34,
    category: "Emergency"
  },
  {
    id: "p120",
    name: "Compact Plug-in Emergency Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/emergency/emergency6.webp",
    price: 399,
    originalPrice: 699,
    discount: 43,
    category: "Emergency"
  },
  {
    id: "p121",
    name: "Industrial Emergency Exit Sign",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/emergency/emergency7.webp",
    price: 2899,
    originalPrice: 4200,
    discount: 31,
    category: "Emergency"
  },
  {
    id: "p122",
    name: "Inverter Bulb with Battery Backup",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/emergency/emergency8.jpeg",
    price: 599,
    originalPrice: 999,
    discount: 40,
    category: "Emergency"
  },
  {
    id: "p123",
    name: "Modern Design Emergency Sconce",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/emergency/emergency9.jpg",
    price: 1899,
    originalPrice: 2800,
    discount: 32,
    category: "Emergency"
  },
  {
    id: "p124",
    name: "Portable LED Camping Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/emergency/emergency10.jpg",
    price: 1499,
    originalPrice: 2299,
    discount: 34,
    category: "Emergency"
  },
  {
    id: "p125",
    name: "Master Solar Street Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/solar/solar.avif",
    price: 3499,
    originalPrice: 4999,
    discount: 30,
    category: "Solar"
  },
  {
    id: "p126",
    name: "Eco-Friendly Solar Garden Lamp",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/solar/solar.webp",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    category: "Solar"
  },
  {
    id: "p127",
    name: "High-Efficiency Solar Floodlight",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/solar/solar3.jpeg",
    price: 4599,
    originalPrice: 6500,
    discount: 29,
    category: "Solar"
  },
  {
    id: "p128",
    name: "Solar Powered Pathway Bollard",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/solar/solar5.webp",
    price: 1899,
    originalPrice: 2800,
    discount: 32,
    category: "Solar"
  },
  {
    id: "p129",
    name: "Decorative Solar Wall Sconce",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/solar/solar6.jpg",
    price: 2199,
    originalPrice: 3299,
    discount: 33,
    category: "Solar"
  },
  {
    id: "p130",
    name: "Smart Solar Motion Sensor Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/solar/solar7.jpg",
    price: 1599,
    originalPrice: 2499,
    discount: 36,
    category: "Solar"
  },
  {
    id: "p131",
    name: "Solar Security Camera Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/solar/solar8.webp",
    price: 5999,
    originalPrice: 8500,
    discount: 29,
    category: "Solar"
  },
  {
    id: "p132",
    name: "Vintage Solar Lantern",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/solar/solar9.jpg",
    price: 2499,
    originalPrice: 3800,
    discount: 34,
    category: "Solar"
  },
  {
    id: "p133",
    name: "Advanced Solar Power Panel Kit",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/solar/solar10.avif",
    price: 8999,
    originalPrice: 12999,
    discount: 31,
    category: "Solar"
  },
  {
    id: "p134",
    name: "Portable Solar Camping Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/solar/solar11.jpg",
    price: 999,
    originalPrice: 1599,
    discount: 38,
    category: "Solar"
  },
  {
    id: "p135",
    name: "Classic Brass Picture Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/picture/picture.jpg",
    price: 1899,
    originalPrice: 2999,
    discount: 36,
    category: "Picture"
  },
  {
    id: "p136",
    name: "Modern Slim LED Picture Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/picture/picture2.webp",
    price: 1499,
    originalPrice: 2299,
    discount: 34,
    category: "Picture"
  },
  {
    id: "p137",
    name: "Elegant Gold Art Display Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/picture/picture3.jpg",
    price: 2499,
    originalPrice: 3800,
    discount: 34,
    category: "Picture"
  },
  {
    id: "p138",
    name: "Minimalist Black Gallery Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/picture/picture4.webp",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    category: "Picture"
  },
  {
    id: "p139",
    name: "Antique Style Picture Sconce",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/picture/picture5.jpg",
    price: 2199,
    originalPrice: 3299,
    discount: 33,
    category: "Picture"
  },
  {
    id: "p140",
    name: "Sleek Adjustable Art Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/picture/picture6.jpeg",
    price: 1699,
    originalPrice: 2599,
    discount: 34,
    category: "Picture"
  },
  {
    id: "p141",
    name: "Premium LED Vanity & Picture Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/picture/picture7.webp",
    price: 3299,
    originalPrice: 4800,
    discount: 31,
    category: "Picture"
  },
  {
    id: "p142",
    name: "Compact Rotating Art Lamp",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/picture/picture8.webp",
    price: 999,
    originalPrice: 1599,
    discount: 38,
    category: "Picture"
  },
  {
    id: "p143",
    name: "Modern Brushed Metal Art Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/picture/picture9.jpeg",
    price: 1899,
    originalPrice: 2800,
    discount: 32,
    category: "Picture"
  },
  {
    id: "p144",
    name: "Commercial LED Track Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/track/track1.avif",
    price: 1599,
    originalPrice: 2499,
    discount: 36,
    category: "Track"
  },
  {
    id: "p145",
    name: "Modern Triple Spot Track",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/track/track2.webp",
    price: 2899,
    originalPrice: 4200,
    discount: 31,
    category: "Track"
  },
  {
    id: "p146",
    name: "Adjustable Industrial Track Lamp",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/track/track3.webp",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    category: "Track"
  },
  {
    id: "p147",
    name: "Sleek White Track Spotlight",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/track/track4.webp",
    price: 899,
    originalPrice: 1499,
    discount: 40,
    category: "Track"
  },
  {
    id: "p148",
    name: "Premium COB Track Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/track/track5.webp",
    price: 1899,
    originalPrice: 2800,
    discount: 32,
    category: "Track"
  },
  {
    id: "p149",
    name: "Warm White Track Fixture",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/track/track6.jpeg",
    price: 1499,
    originalPrice: 2299,
    discount: 34,
    category: "Track"
  },
  {
    id: "p150",
    name: "Modern Black Track Rail Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/track/track7.webp",
    price: 3299,
    originalPrice: 4800,
    discount: 31,
    category: "Track"
  },
  {
    id: "p151",
    name: "Professional Art Gallery Track",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/track/track8.jpg",
    price: 2499,
    originalPrice: 3800,
    discount: 34,
    category: "Track"
  },
  {
    id: "p152",
    name: "Focus Adjustable Track Lamp",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/track/track9.webp",
    price: 1099,
    originalPrice: 1799,
    discount: 39,
    category: "Track"
  },
  {
    id: "p153",
    name: "A60 Warm White LED Bulb",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bulb/bulb1.webp",
    price: 149,
    originalPrice: 299,
    discount: 50,
    category: "Bulbs"
  },
  {
    id: "p154",
    name: "Vintage ST64 Filament Bulb",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bulb/bulb2.jpeg",
    price: 349,
    originalPrice: 599,
    discount: 42,
    category: "Bulbs"
  },
  {
    id: "p155",
    name: "B35 Candle LED Lamp",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bulb/bulb3.jpg",
    price: 199,
    originalPrice: 349,
    discount: 43,
    category: "Bulbs"
  },
  {
    id: "p156",
    name: "Smart RGB Dimming Bulb",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bulb/bulb4.webp",
    price: 799,
    originalPrice: 1299,
    discount: 38,
    category: "Bulbs"
  },
  {
    id: "p157",
    name: "High Power 20W LED Bulb",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bulb/bulb5.jpg",
    price: 449,
    originalPrice: 799,
    discount: 44,
    category: "Bulbs"
  },
  {
    id: "p158",
    name: "G95 Decorative Globe Bulb",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bulb/bulb6.jpg",
    price: 549,
    originalPrice: 899,
    discount: 39,
    category: "Bulbs"
  },
  {
    id: "p159",
    name: "Retro T45 Antique Bulb",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bulb/bulb7.webp",
    price: 299,
    originalPrice: 499,
    discount: 40,
    category: "Bulbs"
  },
  {
    id: "p160",
    name: "Mini 0.5W Night Bulb",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bulb/bulb8.webp",
    price: 49,
    originalPrice: 99,
    discount: 50,
    category: "Bulbs"
  },
  {
    id: "p161",
    name: "T-Bulb Wide Angle Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bulb/bulb9.jpg",
    price: 399,
    originalPrice: 699,
    discount: 43,
    category: "Bulbs"
  },
  {
    id: "p162",
    name: "Capsule LED G4 Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bulb/bulb10.webp",
    price: 129,
    originalPrice: 249,
    discount: 48,
    category: "Bulbs"
  },
  {
    id: "p163",
    name: "Modern Minimalist Floor Lamp",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/floor_lamps/flamps1.webp",
    price: 4599,
    originalPrice: 6500,
    discount: 29,
    category: "Floor"
  },
  {
    id: "p164",
    name: "Arc Design Floor light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/floor_lamps/flamps2.jpg",
    price: 5899,
    originalPrice: 8500,
    discount: 31,
    category: "Floor"
  },
  {
    id: "p165",
    name: "Industrial Tripod Floor Lamp",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/floor_lamps/flamps3.jpg",
    price: 3299,
    originalPrice: 4800,
    discount: 31,
    category: "Floor"
  },
  {
    id: "p166",
    name: "Classic Fabric Shade Floor Lamp",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/floor_lamps/flamps4.jpeg",
    price: 2499,
    originalPrice: 3800,
    discount: 34,
    category: "Floor"
  },
  {
    id: "p167",
    name: "Modern LED Corner Lamp",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/floor_lamps/flamps5.avif",
    price: 3899,
    originalPrice: 5500,
    discount: 29,
    category: "Floor"
  },
  {
    id: "p168",
    name: "Stately Brass Floor Lamp",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/floor_lamps/flamps6.webp",
    price: 7499,
    originalPrice: 10500,
    discount: 29,
    category: "Floor"
  },
  {
    id: "p169",
    name: "Nordic Wood Base Floor Lamp",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/floor_lamps/flamps7.jpg",
    price: 4299,
    originalPrice: 6200,
    discount: 31,
    category: "Floor"
  },
  {
    id: "p170",
    name: "Sleek Black Reading Lamp",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/floor_lamps/flamps8.webp",
    price: 2899,
    originalPrice: 4200,
    discount: 31,
    category: "Floor"
  },
  {
    id: "p171",
    name: "Designer Crystal Floor Lamp",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/floor_lamps/flamps9.webp",
    price: 8999,
    originalPrice: 13500,
    discount: 33,
    category: "Floor"
  },
  {
    id: "p172",
    name: "Modern Globe Floor Lamp",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/floor_lamps/flamps10.webp",
    price: 5299,
    originalPrice: 7800,
    discount: 32,
    category: "Floor"
  },
  {
    id: "p173",
    name: "Classic 20W LED Tube Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/tube_lights/tube1.webp",
    price: 349,
    originalPrice: 599,
    discount: 42,
    category: "Tube"
  },
  {
    id: "p174",
    name: "Slim Fit Batten Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/tube_lights/tube2.jpeg",
    price: 299,
    originalPrice: 499,
    discount: 40,
    category: "Tube"
  },
  {
    id: "p175",
    name: "High-Brightness T5 Tube",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/tube_lights/tube3.jpg",
    price: 199,
    originalPrice: 349,
    discount: 43,
    category: "Tube"
  },
  {
    id: "p176",
    name: "Modern Decorative Batten",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/tube_lights/tub4.jpg",
    price: 449,
    originalPrice: 799,
    discount: 44,
    category: "Tube"
  },
  {
    id: "p177",
    name: "Warm White LED Batten",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/tube_lights/tube5.webp",
    price: 399,
    originalPrice: 699,
    discount: 43,
    category: "Tube"
  },
  {
    id: "p178",
    name: "Cool Day Light Tube",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/tube_lights/tube6.webp",
    price: 249,
    originalPrice: 449,
    discount: 45,
    category: "Tube"
  },
  {
    id: "p179",
    name: "Waterproof T8 LED Tube",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/tube_lights/tube7.jpg",
    price: 549,
    originalPrice: 899,
    discount: 39,
    category: "Tube"
  },
  {
    id: "p180",
    name: "Ultra-Slim Profile Batten",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/tube_lights/tube8.webp",
    price: 499,
    originalPrice: 849,
    discount: 41,
    category: "Tube"
  },
  {
    id: "p181",
    name: "Energy Saving LED Tube",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/tube_lights/tube9.jpg",
    price: 189,
    originalPrice: 329,
    discount: 43,
    category: "Tube"
  },
  {
    id: "p182",
    name: "Industrial Grade Batten Light",
    image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/tube_lights/tube10.jpg",
    price: 899,
    originalPrice: 1499,
    discount: 40,
    category: "Tube"
  }
];

