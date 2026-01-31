import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Heart, Star, ChevronDown, Filter, Home, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import categoryHeroImg from "@/assets/category-hero.jpg";
import catProduct1 from "@/assets/cat-product-1.jpg";
import catProduct2 from "@/assets/cat-product-2.jpg";
import catProduct3 from "@/assets/cat-product-3.jpg";
import catProduct4 from "@/assets/cat-product-4.jpg";
import catProduct5 from "@/assets/cat-product-5.jpg";
import catProduct6 from "@/assets/cat-product-6.jpg";
import catProduct7 from "@/assets/cat-product-7.jpg";

const categoryData: Record<string, { 
  title: string; 
  description: string; 
  heroImage: string;
  subCategories: string[];
  products: Array<{
    id: number;
    name: string;
    image: string;
    price: number;
    originalPrice: number;
    discount: number;
    rating: number;
  }>;
}> = {
  "ceiling-lights": {
    title: "Ceiling Lights",
    description: "Seamlessly integrate brilliance into your architecture with our professional-grade ceiling solutions. From ultra-slim LED panels that vanish into your decor to high-precision COB downlights that create dramatic focus, our collection is engineered for those who demand both efficiency and aesthetic perfection in every room.",
    heroImage: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=1974&auto=format&fit=crop",
    subCategories: ["Surface Lights", "Downlights", "COB Light", "Cabinet Light"],
    products: [
      { id: 1, name: "Classic Round Ceiling Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/ceiling_lights/ceiling1.jpg", price: 899, originalPrice: 1499, discount: 40, rating: 4.5 },
      { id: 2, name: "Modern Panel Ceiling Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/ceiling_lights/ceiling2.jpg", price: 1299, originalPrice: 1999, discount: 35, rating: 5 },
      { id: 3, name: "Ultra Slim LED Surface Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/ceiling_lights/ceiling3.jpg", price: 599, originalPrice: 999, discount: 40, rating: 4.5 },
      { id: 4, name: "Flush Mount Decorative Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/ceiling_lights/ceiling4.jpg", price: 2499, originalPrice: 3499, discount: 28, rating: 5 },
      { id: 5, name: "Geometric LED Ceiling Lamp", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/ceiling_lights/ceiling5.jpg", price: 1899, originalPrice: 2999, discount: 36, rating: 4 },
      { id: 6, name: "Premium COB Downlight", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/ceiling_lights/ceiling6.jpg", price: 749, originalPrice: 1249, discount: 40, rating: 4.5 },
      { id: 7, name: "Recessed Ceiling Spotlight", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/ceiling_lights/ceiling7.jpg", price: 499, originalPrice: 799, discount: 37, rating: 4 },
      { id: 8, name: "Modernist Square Ceiling Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/ceiling_lights/ceiling8.webp", price: 3299, originalPrice: 4500, discount: 26, rating: 4.5 },
      { id: 9, name: "Elite Surface Mounted Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/ceiling_lights/ceiling9.jpg", price: 1599, originalPrice: 2499, discount: 36, rating: 4.6 },
    ],
  },
  "chandeliers": {
    title: "Chandeliers",
    description: "Transform your grand spaces into a gallery of light. Our curated collection of chandeliers ranges from timeless crystal masterpieces that refract rainbow hues across your walls to bold, avant-garde silhouettes for the modern connoisseur. These aren't just lights—they are the soul of your home's most prestigious rooms.",
    heroImage: "https://images.unsplash.com/photo-1584537330618-5aa40b45e43d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxyVk9RY2J2RG9QWXx8ZW58MHx8fHx8",
    subCategories: ["Crystal Chandeliers", "Modern Chandeliers", "Mini Chandeliers", "Luxury Chandeliers"],
    products: [
      { id: 1, name: "Luxurious Crystal Chandelier", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/WhatsApp+Image+2026-01-26+at+08.34.17.jpeg", price: 35000, originalPrice: 45000, discount: 22, rating: 4.8 },
      { id: 2, name: "Modern Square Gold Chandelier", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/WhatsApp+Image+2026-01-26+at+08.35.31+(1).jpeg", price: 42000, originalPrice: 55000, discount: 24, rating: 5 },
      { id: 3, name: "Elegance Gold Chandelier", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/WhatsApp+Image+2026-01-26+at+08.35.31.jpeg", price: 28000, originalPrice: 38000, discount: 26, rating: 4.5 },
      { id: 4, name: "Majestic Crystal Drop Chandelier", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/WhatsApp+Image+2026-01-26+at+08.37.19.jpeg", price: 48000, originalPrice: 65000, discount: 26, rating: 4.7 },
      { id: 5, name: "Contemporary Glass Chandelier", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/WhatsApp+Image+2026-01-26+at+08.37.20+(1).jpeg", price: 32000, originalPrice: 42000, discount: 24, rating: 4.6 },
      { id: 6, name: "Artistic Bubble Chandelier", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/WhatsApp+Image+2026-01-26+at+08.37.20.jpeg", price: 15000, originalPrice: 22000, discount: 32, rating: 4.4 },
      { id: 7, name: "Glossy Finish Chandelier", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/WhatsApp+Image+2026-01-26+at+08.37.21+(1).jpeg", price: 25000, originalPrice: 35000, discount: 29, rating: 4.3 },
      { id: 8, name: "Golden Halo Chandelier", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/WhatsApp+Image+2026-01-26+at+08.37.21.jpeg", price: 19000, originalPrice: 28000, discount: 32, rating: 4.8 },
      { id: 9, name: "Luxury Raindrop Chandelier", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/WhatsApp+Image+2026-01-26+at+08.38.22.jpeg", price: 55000, originalPrice: 75000, discount: 27, rating: 4.9 },
      { id: 10, name: "Premium Spiral Chandelier", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/WhatsApp+Image+2026-01-26+at+08.38.23+(1).jpeg", price: 65000, originalPrice: 85000, discount: 24, rating: 4.9 },
      { id: 11, name: "Grand Tiered Chandelier", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/WhatsApp+Image+2026-01-26+at+08.38.23.jpeg", price: 75000, originalPrice: 95000, discount: 21, rating: 5 },
    ],
  },
  "smart-lights": {
    title: "Smart Lights",
    description: "Step into the era of intelligent illumination where your voice and smartphone become the conductor of your home’s atmosphere. Whether it's dimming the mood for a late-night movie or scheduling a sunrise wakeup call with adaptive color temperatures, our smart lighting systems offer effortless control over every photon.",
    heroImage: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/smart_lights/smart_light_landscape.webp",
    subCategories: ["Smart Bulbs", "Smart Strips", "Smart Downlights", "Controllers & Hubs"],
    products: [
      { id: 1, name: "Smart Wi-Fi LED Bulb", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/smart_lights/smart1.webp", price: 699, originalPrice: 1299, discount: 46, rating: 4.7 },
      { id: 2, name: "Colorspace Smart Strip Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/smart_lights/smart2.webp", price: 2499, originalPrice: 3999, discount: 37, rating: 4.8 },
      { id: 3, name: "Tunable Smart Downlight", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/smart_lights/smart3.jpg", price: 1899, originalPrice: 2999, discount: 36, rating: 4.5 },
      { id: 4, name: "Smart Motion Sensor Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/smart_lights/smart4.jpg", price: 1299, originalPrice: 1999, discount: 35, rating: 4.6 },
      { id: 5, name: "Voice Controlled Smart Lamp", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/smart_lights/smart5.webp", price: 3499, originalPrice: 4999, discount: 30, rating: 4.9 },
      { id: 6, name: "Smart RGB CCT Panel Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/smart_lights/smart6.webp", price: 4599, originalPrice: 6500, discount: 29, rating: 4.7 },
      { id: 7, name: "Smart Outdoor String Lights", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/smart_lights/smart7.webp", price: 5999, originalPrice: 8500, discount: 29, rating: 4.8 },
      { id: 8, name: "Smart Dimmable Wall Sconce", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/smart_lights/smart8.webp", price: 2899, originalPrice: 4200, discount: 31, rating: 4.4 },
      { id: 9, name: "Smart Gateway Hub", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/smart_lights/smart9.webp", price: 3999, originalPrice: 5999, discount: 33, rating: 4.9 },
    ],
  },
  "wall-lights": {
    title: "Wall Lights",
    description: "Define the character of your walls with light as your medium. Our collection of sconces and wall-mounted fixtures adds depth, shadow, and warmth to your interior landscape. From directional reading lights to soft ambient washes, find the perfect accent to highlight your home’s unique architectural features.",
    heroImage: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/wall_lights/wall_light_land_1.webp",
    subCategories: ["Wall Sconces", "Modern Wall Lights", "Decorative Wall Lights", "Outdoor Wall Lights"],
    products: [
      { id: 1, name: "Vintage Brass Wall Sconce", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/wall_lights/wall1.webp", price: 1899, originalPrice: 2999, discount: 36, rating: 4.5 },
      { id: 2, name: "Modern Minimalist Wall Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/wall_lights/wall2.webp", price: 1299, originalPrice: 1999, discount: 35, rating: 4.6 },
      { id: 3, name: "Industrial Pipe Wall Lamp", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/wall_lights/wall3.webp", price: 1499, originalPrice: 2299, discount: 34, rating: 4.4 },
      { id: 5, name: "Decorative Crystal Wall Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/wall_lights/wall5.webp", price: 3499, originalPrice: 4999, discount: 30, rating: 4.8 },
      { id: 6, name: "Sleek LED Wall Bar", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/wall_lights/wall6.webp", price: 2199, originalPrice: 3299, discount: 33, rating: 4.7 },
      { id: 7, name: "Outdoor Weatherproof Wall Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/wall_lights/wall7.webp", price: 1599, originalPrice: 2499, discount: 36, rating: 4.5 },
      { id: 8, name: "Classic Fabric Shade Wall Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/wall_lights/wall8.webp", price: 1799, originalPrice: 2699, discount: 33, rating: 4.3 },
      { id: 9, name: "Artistic Geometric Wall Lamp", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/wall_lights/wall9.webp", price: 2899, originalPrice: 4200, discount: 31, rating: 4.8 },
      { id: 10, name: "Premium Gold Finish Wall Sconce", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/wall_lights/wall10.webp", price: 3999, originalPrice: 5999, discount: 33, rating: 4.9 },
    ],
  },
  "table-lamps": {
    title: "Table Lamps",
    description: "Curate your workstation and bedside with portable art. Each lamp in our collection is a testament to craftsmanship, combining premium materials with light that’s engineered to reduce eye strain while maximizing style. Whether as a focused task light or a gentle evening companion, our table lamps bring elegance to every surface.",
    heroImage: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070&auto=format&fit=crop",
    subCategories: ["Desk Lamps", "Bedside Lamps", "Decorative Lamps", "Architectural Lamps"],
    products: [
      { id: 1, name: "Elegant Ceramic Table Lamp", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/lamps/WhatsApp+Image+2026-01-26+at+08.21.07.jpeg", price: 3499, originalPrice: 4999, discount: 30, rating: 4.5 },
      { id: 2, name: "Modern Metallic Desk Lamp", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/lamps/WhatsApp+Image+2026-01-26+at+08.21.08+(1).jpeg", price: 2899, originalPrice: 4200, discount: 31, rating: 4.7 },
      { id: 3, name: "Minimalist Wooden Base Lamp", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/lamps/WhatsApp+Image+2026-01-26+at+08.21.08.jpeg", price: 1999, originalPrice: 2999, discount: 33, rating: 4.3 },
      { id: 4, name: "Industrial Style Table Lamp", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/lamps/WhatsApp+Image+2026-01-26+at+08.21.09.jpeg", price: 2499, originalPrice: 3800, discount: 34, rating: 4.4 },
      { id: 5, name: "Luxury Crystal Table Lamp", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/lamps/WhatsApp+Image+2026-01-26+at+08.33.40.jpeg", price: 5999, originalPrice: 8500, discount: 29, rating: 4.9 },
      { id: 6, name: "Contemporary Glass Desk Lamp", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/lamps/WhatsApp+Image+2026-01-26+at+08.41.54+(1).jpeg", price: 3299, originalPrice: 4500, discount: 26, rating: 4.6 },
      { id: 7, name: "Artistic Brass Table Lamp", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/lamps/WhatsApp+Image+2026-01-26+at+08.41.54.jpeg", price: 4599, originalPrice: 6500, discount: 29, rating: 4.8 },
      { id: 8, name: "Classic Fabric Shade Desk Lamp", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/lamps/WhatsApp+Image+2026-01-26+at+08.41.55.jpeg", price: 1599, originalPrice: 2499, discount: 36, rating: 4.2 },
    ],
  },
  "bathroom-lights": {
    title: "Bathroom Lights",
    description: "Transform your daily routine into a sanctuary of clarity. Our moisture-resistant lighting solutions bring spa-like luxury to your personal space, with crisp shadow-free illumination for grooming and soft, dimmable options for ultimate relaxation. Engineered for safety and designed for sophistication.",
    heroImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
    subCategories: ["Vanity Lights", "Mirror Lights", "Ceiling Lights", "Waterproof Lights"],
    products: [
      { id: 1, name: "Modern Bath Vanity Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bathroom/bathroom1.webp", price: 3499, originalPrice: 4999, discount: 30, rating: 4.5 },
      { id: 2, name: "Sleek Mirror Front Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bathroom/bathroom2.webp", price: 2899, originalPrice: 4200, discount: 31, rating: 4.6 },
      { id: 3, name: "Fog-Resistant LED Wall Lamp", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bathroom/bathroom3.webp", price: 1999, originalPrice: 2999, discount: 33, rating: 4.4 },
      { id: 4, name: "Flush Mount Bath Ceiling Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bathroom/bathroom4.webp", price: 2499, originalPrice: 3800, discount: 34, rating: 4.5 },
      { id: 5, name: "Waterproof Bathroom Spotlight", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bathroom/bathroom5.webp", price: 1299, originalPrice: 1999, discount: 35, rating: 4.3 },
      { id: 6, name: "Premium Glass Vanity Sconce", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bathroom/bathroom6.webp", price: 4599, originalPrice: 6500, discount: 29, rating: 4.7 },
      { id: 7, name: "Luxurious Hotel-Style Mirror Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bathroom/bathroom7.webp", price: 5999, originalPrice: 8500, discount: 29, rating: 4.8 },
      { id: 8, name: "Dimmable Bathroom LED Bar", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bathroom/bathroom8.webp", price: 3299, originalPrice: 4500, discount: 26, rating: 4.4 },
      { id: 9, name: "Antique Style Bath Sconce", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bathroom/bathroom9.jpg", price: 2199, originalPrice: 3299, discount: 33, rating: 4.5 },
      { id: 10, name: "Modern Triple Light Vanity", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bathroom/bathroom10.jpg", price: 4999, originalPrice: 6999, discount: 28, rating: 4.6 },
    ],
  },
  "hanging-lights": {
    title: "Hanging Lights",
    description: "Create visual rhythm and focal points with our stunning pendant collections. From industrial-chic clusters that command attention over dining tables to minimalist glass orbs that hang with graceful simplicity, our hanging lights are designed to bridge the gap between architectural necessity and high-end decor.",
    heroImage: "https://images.unsplash.com/photo-1531762948975-73032b7b61f4?q=80&w=1740&auto=format&fit=crop",
    subCategories: ["Pendant Lights", "Cluster Lights", "Industrial Hanging", "Decorative Pendants"],
    products: [
      { id: 1, name: "Modern Industrial Hanging Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/hannging/hanging1.jpg", price: 3499, originalPrice: 4999, discount: 30, rating: 4.5 },
      { id: 2, name: "Elegant Glass Pendant Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/hannging/hanging2.jpg", price: 2899, originalPrice: 4200, discount: 31, rating: 4.6 },
      { id: 3, name: "Contemporary Dome Hanging Lamp", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/hannging/hanging3.webp", price: 1999, originalPrice: 2999, discount: 33, rating: 4.4 },
      { id: 4, name: "Sleek Nordic Pendant Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/hannging/hanging4.webp", price: 2499, originalPrice: 3800, discount: 34, rating: 4.5 },
      { id: 5, name: "Artistic Cluster Hanging Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/hannging/hanging5.webp", price: 5499, originalPrice: 7999, discount: 31, rating: 4.8 },
      { id: 6, name: "Minimalist Cylinder Pendant", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/hannging/hanging6.webp", price: 1299, originalPrice: 1999, discount: 35, rating: 4.3 },
      { id: 7, name: "Vintage Edison Hanging Lamp", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/hannging/hanging7.webp", price: 1599, originalPrice: 2499, discount: 36, rating: 4.5 },
      { id: 8, name: "Luxury Spherical Hanging Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/hannging/hanging8.webp", price: 6999, originalPrice: 9999, discount: 30, rating: 4.7 },
      { id: 9, name: "Modern Geometric Pendant", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/hannging/hangign9.webp", price: 3299, originalPrice: 4500, discount: 26, rating: 4.8 },
      { id: 10, name: "Grand Tiered Hanging Fixture", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/hannging/hanging10.jpg", price: 8999, originalPrice: 12999, discount: 31, rating: 4.9 },
    ],
  },
  "bedside-lights": {
    title: "Bedside Lights",
    description: "Design your ultimate midnight sanctuary with lighting that understands the need for peace. Our bedside collection focuses on soft transitions and warm color temperatures, featuring low-glare reading lights and atmospheric sconces that help you wind down without disturbing the quiet of your room.",
    heroImage: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bed_lights/bed_side_landscape.jpg",
    subCategories: ["Bedside Pendants", "Reading Lights", "Bedside Sconces", "Modern Bedside"],
    products: [
      { id: 1, name: "Modern Bedside Pendant", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bed_lights/bed1.webp", price: 2499, originalPrice: 3499, discount: 28, rating: 4.5 },
      { id: 2, name: "Golden Arm Wall Sconce", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bed_lights/bed2.jpg", price: 3299, originalPrice: 4500, discount: 26, rating: 4.7 },
      { id: 3, name: "Minimalist Floating Lamp", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bed_lights/bed3.jpg", price: 1899, originalPrice: 2600, discount: 27, rating: 4.4 },
      { id: 4, name: "Sleek Reading Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bed_lights/bed4.webp", price: 1299, originalPrice: 1999, discount: 35, rating: 4.6 },
      { id: 5, name: "Artistic Bedside Orb", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bed_lights/bed5.webp", price: 4599, originalPrice: 6500, discount: 29, rating: 4.8 },
      { id: 6, name: "Industrial Bedside Sconce", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bed_lights/bed6.webp", price: 2199, originalPrice: 3299, discount: 33, rating: 4.5 },
      { id: 7, name: "Contemporary Crystal Sconce", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bed_lights/bed7.avif", price: 3999, originalPrice: 5999, discount: 33, rating: 4.7 },
      { id: 8, name: "Classic Fabric Shade Sconce", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bed_lights/bed8.jpg", price: 1599, originalPrice: 2499, discount: 36, rating: 4.3 },
      { id: 9, name: "Modern Geometric Bedside Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bed_lights/bed9.jpeg", price: 2899, originalPrice: 4200, discount: 31, rating: 4.6 },
      { id: 10, name: "Premium Adjustable Reading Lamp", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bed_lights/bed10.webp", price: 4999, originalPrice: 6999, discount: 28, rating: 4.9 },
    ],
  },
  "outdoor-lights": {
    title: "Outdoor Lights",
    description: "Extend your home’s charm beyond the front door with weather-defying brilliance. Our outdoor fixtures combine rugged durability with high-end allure, offering everything from security-focused floodlighting to enchanting garden paths and architectural wall grazing. Make your exterior as welcoming as your interior.",
    heroImage: "https://images.unsplash.com/photo-1658692051708-519fbdac7e8f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subCategories: ["Post Lights", "Garden Wall Lights", "Floodlights", "Pathway Bollards", "Security Lights"],
    products: [
      { id: 1, name: "Modern Outdoor Post Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/outdoor_lights/out1.png", price: 3899, originalPrice: 5499, discount: 29, rating: 4.5 },
      { id: 2, name: "Sleek Garden Wall Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/outdoor_lights/out2.jpg", price: 1599, originalPrice: 2499, discount: 36, rating: 4.6 },
      { id: 3, name: "Premium Outdoor Floodlight", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/outdoor_lights/out3.jpg", price: 4299, originalPrice: 6500, discount: 34, rating: 4.4 },
      { id: 4, name: "Decorative Pathway Bollard", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/outdoor_lights/out4.webp", price: 2899, originalPrice: 4200, discount: 31, rating: 4.5 },
      { id: 5, name: "Classic Outdoor Lantern", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/outdoor_lights/out5.jpg", price: 2199, originalPrice: 3299, discount: 33, rating: 4.3 },
      { id: 6, name: "Modern Up-Down Wall Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/outdoor_lights/out6.webp", price: 1899, originalPrice: 2800, discount: 32, rating: 4.7 },
      { id: 7, name: "Solar Powered Garden Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/outdoor_lights/out7.webp", price: 999, originalPrice: 1599, discount: 38, rating: 4.8 },
      { id: 8, name: "Industrial Style Outdoor Sconce", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/outdoor_lights/out8.png", price: 2499, originalPrice: 3800, discount: 34, rating: 4.4 },
      { id: 9, name: "Sleek LED Recessed Step Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/outdoor_lights/out9.webp", price: 1299, originalPrice: 1999, discount: 35, rating: 4.5 },
      { id: 10, name: "Heavy Duty Security Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/outdoor_lights/out10.jpeg", price: 4999, originalPrice: 7500, discount: 33, rating: 4.6 },
    ],
  },
  "strip-lights": {
    title: "Strip Lights",
    description: "Illuminate the hidden details of your architecture with geometric precision. Our high-density LED strips and sleek aluminum profiles allow you to paint with light—creating futuristic cove glows, sharp cabinet lines, and atmospheric accents that redefine the perception of space in any modern home or office.",
    heroImage: "https://www.jaquar.com/images/uploaded/Profile%20Light%20Ceiling%20Design/Living%20Room%20Profile%20Light%20Ceiling%20Design%20in%20India.png",
    subCategories: ["LED Strips", "Profile Lights", "COB Strips", "Mounting Profiles"],
    products: [
      { id: 1, name: "Premium Profile LED Strip", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/profile/profile1.webp", price: 1299, originalPrice: 1999, discount: 35, rating: 4.8 },
      { id: 2, name: "Architectural Profile Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/profile/profil2.webp", price: 2499, originalPrice: 3800, discount: 34, rating: 4.9 },
      { id: 3, name: "Recessed Aluminum Profile", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/profile/profile3.webp", price: 899, originalPrice: 1499, discount: 40, rating: 4.5 },
      { id: 4, name: "Surface Mount Profile Strip", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/profile/profile4.webp", price: 1599, originalPrice: 2499, discount: 36, rating: 4.6 },
      { id: 5, name: "Flexible COB Strip Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/profile/profile5.webp", price: 799, originalPrice: 1299, discount: 38, rating: 4.7 },
      { id: 6, name: "High-Brightness Profile Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/profile/profile6.webp", price: 3299, originalPrice: 4500, discount: 26, rating: 4.8 },
      { id: 7, name: "Custom Length LED Profile", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/profile/profile8.webp", price: 2199, originalPrice: 3299, discount: 33, rating: 4.4 },
      { id: 8, name: "Corner Profile Light Strip", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/profile/profile9.webp", price: 1899, originalPrice: 2800, discount: 32, rating: 4.5 },
      { id: 9, name: "Ultra-Thin Profile Channel", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/profile/profile10.webp", price: 1499, originalPrice: 2299, discount: 34, rating: 4.7 },
    ],
  },
  "string-lights": {
    title: "String Lights",
    description: "Infuse your celebrations with a touch of stardust. Our decorative string lights are designed to create magical environments, whether you're draping a balcony for a festival, styling a cozy bedroom nook, or setting the mood for an outdoor dinner. Robust, energy-efficient, and endlessly enchanting.",
    heroImage: "https://images.unsplash.com/photo-1633734605314-ca42706d2e8c?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subCategories: ["Fairy Lights", "Decorative Strings", "Festive Lights", "Solar String Lights"],
    products: [
      { id: 1, name: "Classic Warm White String Lights", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/string/string.jpg", price: 499, originalPrice: 899, discount: 44, rating: 4.5 },
      { id: 2, name: "Multicolor Festive Fairy Lights", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/string/string2.webp", price: 399, originalPrice: 699, discount: 43, rating: 4.6 },
      { id: 3, name: "Decorative Star String Lights", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/string/string3.webp", price: 799, originalPrice: 1299, discount: 38, rating: 4.4 },
      { id: 4, name: "Outdoor Waterproof String Lights", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/string/string5.webp", price: 1899, originalPrice: 2800, discount: 32, rating: 4.8 },
      { id: 5, name: "USB Powered Crystal String Lights", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/string/string6.avif", price: 599, originalPrice: 999, discount: 40, rating: 4.7 },
      { id: 6, name: "Rose Gold Decorative Lights", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/string/string7.webp", price: 899, originalPrice: 1499, discount: 40, rating: 4.5 },
      { id: 7, name: "Heavy Duty Patio String Lights", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/string/string8.jpg", price: 2499, originalPrice: 3800, discount: 34, rating: 4.9 },
      { id: 8, name: "Solar Powered Garden String Lights", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/string/string9.avif", price: 1299, originalPrice: 1999, discount: 35, rating: 4.6 },
      { id: 9, name: "Ultra-Thin Silver Wire Lights", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/string/string10.webp", price: 299, originalPrice: 599, discount: 50, rating: 4.3 },
    ],
  },
  "emergency-lights": {
    title: "Emergency Lights",
    description: "Safety that never sleeps. When the grid fails, our high-output emergency systems take over instantly. Engineered for reliability during critical moments, our rechargeable lanterns and automatic wall units offer extended battery life and high-visibility illumination to keep your family secure and your business operational.",
    heroImage: "https://lightingequipmentsales.com/wp-content/uploads/2017/12/Emergency-Lighting-740x416.jpg",
    subCategories: ["Rechargeable Lanterns", "Automatic Emergency Lights", "Solar Emergency Lamps", "Portable Searchlights", "Exit Signs"],
    products: [
      { id: 1, name: "Heavy-Duty Rechargeable Emergency Lantern", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/emergency/emercency.jpg", price: 1299, originalPrice: 1999, discount: 35, rating: 4.8 },
      { id: 2, name: "Automatic LED Emergency Wall Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/emergency/emergency2.webp", price: 899, originalPrice: 1499, discount: 40, rating: 4.5 },
      { id: 3, name: "Solar Powered Emergency Lamp", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/emergency/emergency3.jpg", price: 1599, originalPrice: 2499, discount: 36, rating: 4.4 },
      { id: 4, name: "Multipurpose Emergency LED Torch", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/emergency/emergency4.jpg", price: 499, originalPrice: 899, discount: 44, rating: 4.6 },
      { id: 5, name: "High-Intensity Rechargeable Searchlight", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/emergency/emergency5.webp", price: 2499, originalPrice: 3800, discount: 34, rating: 4.9 },
      { id: 6, name: "Compact Plug-in Emergency Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/emergency/emergency6.webp", price: 399, originalPrice: 699, discount: 43, rating: 4.3 },
      { id: 7, name: "Industrial Emergency Exit Sign", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/emergency/emergency7.webp", price: 2899, originalPrice: 4200, discount: 31, rating: 4.7 },
      { id: 8, name: "Inverter Bulb with Battery Backup", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/emergency/emergency8.jpeg", price: 599, originalPrice: 999, discount: 40, rating: 4.5 },
      { id: 9, name: "Modern Design Emergency Sconce", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/emergency/emergency9.jpg", price: 1899, originalPrice: 2800, discount: 32, rating: 4.6 },
      { id: 10, name: "Portable LED Camping Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/emergency/emergency10.jpg", price: 1499, originalPrice: 2299, discount: 34, rating: 4.7 },
    ],
  },
  "solar-lights": {
    title: "Solar Lights",
    description: "Harness the sustainable power of the horizon. Our advanced solar collection offers industrial-grade street lighting and charming garden accents that cost zero to run. With high-conversion photovoltaic panels and smart motion sensors, we provide eco-friendly security and beauty that thrives under the sun and shines through the night.",
    heroImage: "https://www.treehugger.com/thmb/4yxv7u2AV2XtPr0Gb9WI63Imjpk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/solar-battery-and-lantern-in-park-close-up-side-view--1278723493-62ab2d005551488a9deba315f4e5b91b.jpg",
    subCategories: ["Solar Street Lights", "Garden Lights", "Motion Sensor Lights", "Solar Floodlights", "Camping Lights"],
    products: [
      { id: 1, name: "Master Solar Street Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/solar/solar.avif", price: 3499, originalPrice: 4999, discount: 30, rating: 4.8 },
      { id: 2, name: "Eco-Friendly Solar Garden Lamp", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/solar/solar.webp", price: 1299, originalPrice: 1999, discount: 35, rating: 4.5 },
      { id: 3, name: "High-Efficiency Solar Floodlight", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/solar/solar3.jpeg", price: 4599, originalPrice: 6500, discount: 29, rating: 4.7 },
      { id: 4, name: "Solar Powered Pathway Bollard", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/solar/solar5.webp", price: 1899, originalPrice: 2800, discount: 32, rating: 4.4 },
      { id: 5, name: "Decorative Solar Wall Sconce", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/solar/solar6.jpg", price: 2199, originalPrice: 3299, discount: 33, rating: 4.6 },
      { id: 6, name: "Smart Solar Motion Sensor Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/solar/solar7.jpg", price: 1599, originalPrice: 2499, discount: 36, rating: 4.8 },
      { id: 7, name: "Solar Security Camera Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/solar/solar8.webp", price: 5999, originalPrice: 8500, discount: 29, rating: 4.9 },
      { id: 8, name: "Vintage Solar Lantern", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/solar/solar9.jpg", price: 2499, originalPrice: 3800, discount: 34, rating: 4.5 },
      { id: 9, name: "Advanced Solar Power Panel Kit", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/solar/solar10.avif", price: 8999, originalPrice: 12999, discount: 31, rating: 4.9 },
      { id: 10, name: "Portable Solar Camping Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/solar/solar11.jpg", price: 999, originalPrice: 1599, discount: 38, rating: 4.3 },
    ],
  },
  "picture-lights": {
    title: "Picture Lights",
    description: "Give your art the stage it deserves. Our precision-engineered picture lights offer professional gallery-grade illumination that eliminates glare and honors the true colors of your masterpieces. With adjustable heads and high-CRI LEDs, we ensure every brushstroke and memory is seen in its best light.",
    heroImage: "https://plus.unsplash.com/premium_photo-1681487106969-06463e969cea?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subCategories: ["Classic Picture Lights", "Modern LED Art Lights", "Adjustable Sconces", "Gallery Lighting"],
    products: [
      { id: 1, name: "Classic Brass Picture Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/picture/picture.jpg", price: 1899, originalPrice: 2999, discount: 36, rating: 4.7 },
      { id: 2, name: "Modern Slim LED Picture Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/picture/picture2.webp", price: 1499, originalPrice: 2299, discount: 34, rating: 4.5 },
      { id: 3, name: "Elegant Gold Art Display Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/picture/picture3.jpg", price: 2499, originalPrice: 3800, discount: 34, rating: 4.8 },
      { id: 4, name: "Minimalist Black Gallery Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/picture/picture4.webp", price: 1299, originalPrice: 1999, discount: 35, rating: 4.4 },
      { id: 5, name: "Antique Style Picture Sconce", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/picture/picture5.jpg", price: 2199, originalPrice: 3299, discount: 33, rating: 4.6 },
      { id: 6, name: "Sleek Adjustable Art Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/picture/picture6.jpeg", price: 1699, originalPrice: 2599, discount: 34, rating: 4.5 },
      { id: 7, name: "Premium LED Vanity & Picture Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/picture/picture7.webp", price: 3299, originalPrice: 4800, discount: 31, rating: 4.9 },
      { id: 8, name: "Compact Rotating Art Lamp", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/picture/picture8.webp", price: 999, originalPrice: 1599, discount: 38, rating: 4.3 },
      { id: 9, name: "Modern Brushed Metal Art Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/picture/picture9.jpeg", price: 1899, originalPrice: 2800, discount: 32, rating: 4.6 },
    ],
  },
  "track-lights": {
    title: "Track Lights",
    description: "Experience ultimate spatial flexibility with modular track systems. Perfect for dynamic environments like modern living rooms or retail showrooms, our track lights allow you to move, rotate, and aim spotlights with precision. Create multiple layers of light from a single source and adapt your ambiance in seconds.",
    heroImage: "https://images.unsplash.com/photo-1526116638181-d787e552d669?q=80&w=1456&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subCategories: ["Single Track Heads", "Track Spotlights", "Commercial Track Lighting", "Magnetic Track Lights"],
    products: [
      { id: 1, name: "Commercial LED Track Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/track/track1.avif", price: 1599, originalPrice: 2499, discount: 36, rating: 4.8 },
      { id: 2, name: "Modern Triple Spot Track", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/track/track2.webp", price: 2899, originalPrice: 4200, discount: 31, rating: 4.6 },
      { id: 3, name: "Adjustable Industrial Track Lamp", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/track/track3.webp", price: 1299, originalPrice: 1999, discount: 35, rating: 4.5 },
      { id: 4, name: "Sleek White Track Spotlight", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/track/track4.webp", price: 899, originalPrice: 1499, discount: 40, rating: 4.3 },
      { id: 5, name: "Premium COB Track Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/track/track5.webp", price: 1899, originalPrice: 2800, discount: 32, rating: 4.7 },
      { id: 6, name: "Warm White Track Fixture", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/track/track6.jpeg", price: 1499, originalPrice: 2299, discount: 34, rating: 4.5 },
      { id: 7, name: "Modern Black Track Rail Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/track/track7.webp", price: 3299, originalPrice: 4800, discount: 31, rating: 4.9 },
      { id: 8, name: "Professional Art Gallery Track", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/track/track8.jpg", price: 2499, originalPrice: 3800, discount: 34, rating: 4.8 },
      { id: 9, name: "Focus Adjustable Track Lamp", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/track/track9.webp", price: 1099, originalPrice: 1799, discount: 39, rating: 4.4 },
    ],
  },
  "bulbs": {
    title: "LED & Decorative Bulbs",
    description: "The heart of every fixture, refined. Beyond simple utility, our collection of bulbs includes warm-filament Edison lamps that evoke nostalgia and high-efficiency LED drivers that slash energy bills. Find the specific shape, base, and color temperature to breathe life into your favorite lamps and chandeliers.",
    heroImage: "https://media.istockphoto.com/id/478131494/photo/evolution-of-lamps-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=xna3tSXrq-1axG9M04_u4jz-owhRM2gYlME1Yw7Gc_w=",
    subCategories: ["LED Bulbs", "Filament Bulbs", "Decorative Bulbs", "Smart Bulbs", "Night Bulbs"],
    products: [
      { id: 1, name: "A60 Warm White LED Bulb", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bulb/bulb1.webp", price: 149, originalPrice: 299, discount: 50, rating: 4.8 },
      { id: 2, name: "Vintage ST64 Filament Bulb", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bulb/bulb2.jpeg", price: 349, originalPrice: 599, discount: 42, rating: 4.7 },
      { id: 3, name: "B35 Candle LED Lamp", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bulb/bulb3.jpg", price: 199, originalPrice: 349, discount: 43, rating: 4.5 },
      { id: 4, name: "Smart RGB Dimming Bulb", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bulb/bulb4.webp", price: 799, originalPrice: 1299, discount: 38, rating: 4.9 },
      { id: 5, name: "High Power 20W LED Bulb", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bulb/bulb5.jpg", price: 449, originalPrice: 799, discount: 44, rating: 4.6 },
      { id: 6, name: "G95 Decorative Globe Bulb", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bulb/bulb6.jpg", price: 549, originalPrice: 899, discount: 39, rating: 4.7 },
      { id: 7, name: "Retro T45 Antique Bulb", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bulb/bulb7.webp", price: 299, originalPrice: 499, discount: 40, rating: 4.4 },
      { id: 8, name: "Mini 0.5W Night Bulb", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bulb/bulb8.webp", price: 49, originalPrice: 99, discount: 50, rating: 4.2 },
      { id: 9, name: "T-Bulb Wide Angle Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bulb/bulb9.jpg", price: 399, originalPrice: 699, discount: 43, rating: 4.5 },
      { id: 10, name: "Capsule LED G4 Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/bulb/bulb10.webp", price: 129, originalPrice: 249, discount: 48, rating: 4.3 },
    ],
  },
  "floor-lamps": {
    title: "Elegant Floor Lamps",
    description: "Command the vertical space of your room with statuesque lighting. Our floor lamps serve as architectural anchors, providing everything from targeted reading light next to your favorite armchair to broad ambient washes that soften large rooms. A perfect blend of commanding presence and delicate illumination.",
    heroImage: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2067&auto=format&fit=crop",
    subCategories: ["Modern Floor Lamps", "Industrial Lamps", "Tripod Lamps", "Reading Lights", "Designer Lamps"],
    products: [
      { id: 1, name: "Modern Minimalist Floor Lamp", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/floor_lamps/flamps1.webp", price: 4599, originalPrice: 6500, discount: 29, rating: 4.8 },
      { id: 2, name: "Arc Design Floor light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/floor_lamps/flamps2.jpg", price: 5899, originalPrice: 8500, discount: 31, rating: 4.9 },
      { id: 3, name: "Industrial Tripod Floor Lamp", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/floor_lamps/flamps3.jpg", price: 3299, originalPrice: 4800, discount: 31, rating: 4.6 },
      { id: 4, name: "Classic Fabric Shade Floor Lamp", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/floor_lamps/flamps4.jpeg", price: 2499, originalPrice: 3800, discount: 34, rating: 4.5 },
      { id: 5, name: "Modern LED Corner Lamp", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/floor_lamps/flamps5.avif", price: 3899, originalPrice: 5500, discount: 29, rating: 4.7 },
      { id: 6, name: "Stately Brass Floor Lamp", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/floor_lamps/flamps6.webp", price: 7499, originalPrice: 10500, discount: 29, rating: 4.8 },
      { id: 7, name: "Nordic Wood Base Floor Lamp", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/floor_lamps/flamps7.jpg", price: 4299, originalPrice: 6200, discount: 31, rating: 4.4 },
      { id: 8, name: "Sleek Black Reading Lamp", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/floor_lamps/flamps8.webp", price: 2899, originalPrice: 4200, discount: 31, rating: 4.5 },
      { id: 9, name: "Designer Crystal Floor Lamp", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/floor_lamps/flamps9.webp", price: 8999, originalPrice: 13500, discount: 33, rating: 4.9 },
      { id: 10, name: "Modern Globe Floor Lamp", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/floor_lamps/flamps10.webp", price: 5299, originalPrice: 7800, discount: 32, rating: 4.7 },
    ],
  },
  "tube-lights": {
    title: "LED Tube & Batten Lights",
    description: "Maximize productivity with shadowless, uniform brilliance. Designed for both residential efficiency and industrial performance, our LED battens and tubes offer flicker-free lighting that reduces strain and enhances focus. Experience reliable, high-lumen output in a sleek, easy-to-install form factor.",
    heroImage: "https://onecube.in/cdn/shop/files/Screenshot_2025-06-12_at_12.58.25_PM.png?v=1749713414",
    subCategories: ["LED Tube Lights", "LED Battens", "T5 & T8 Tubes", "Slim Fit Lights", "Industrial Battens"],
    products: [
      { id: 1, name: "Classic 20W LED Tube Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/tube_lights/tube1.webp", price: 349, originalPrice: 599, discount: 42, rating: 4.6 },
      { id: 2, name: "Slim Fit Batten Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/tube_lights/tube2.jpeg", price: 299, originalPrice: 499, discount: 40, rating: 4.5 },
      { id: 3, name: "High-Brightness T5 Tube", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/tube_lights/tube3.jpg", price: 199, originalPrice: 349, discount: 43, rating: 4.4 },
      { id: 4, name: "Modern Decorative Batten", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/tube_lights/tub4.jpg", price: 449, originalPrice: 799, discount: 44, rating: 4.7 },
      { id: 5, name: "Warm White LED Batten", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/tube_lights/tube5.webp", price: 399, originalPrice: 699, discount: 43, rating: 4.5 },
      { id: 6, name: "Cool Day Light Tube", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/tube_lights/tube6.webp", price: 249, originalPrice: 449, discount: 45, rating: 4.6 },
      { id: 7, name: "Waterproof T8 LED Tube", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/tube_lights/tube7.jpg", price: 549, originalPrice: 899, discount: 39, rating: 4.8 },
      { id: 8, name: "Ultra-Slim Profile Batten", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/tube_lights/tube8.webp", price: 499, originalPrice: 849, discount: 41, rating: 4.5 },
      { id: 9, name: "Energy Saving LED Tube", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/tube_lights/tube9.jpg", price: 189, originalPrice: 329, discount: 43, rating: 4.3 },
      { id: 10, name: "Industrial Grade Batten Light", image: "https://shree-jee-electricals.s3.ap-south-1.amazonaws.com/images/tube_lights/tube10.jpg", price: 899, originalPrice: 1499, discount: 40, rating: 4.7 },
    ],
  },
};

// Default category for any unknown category slug
const defaultCategory = {
  title: "Lighting Products",
  description: "Explore our wide range of premium lighting solutions at Shree Jee Electrical. From modern LED lights to classic designs, find the perfect lighting for every room in your home.",
  heroImage: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070&auto=format&fit=crop",
  subCategories: ["All Types", "LED Lights", "Decorative", "Functional"],
  products: [
    { id: 1, name: "Premium LED Light", image: catProduct1, price: 599, originalPrice: 999, discount: 40, rating: 4.5 },
    { id: 2, name: "Designer Light Fixture", image: catProduct2, price: 1299, originalPrice: 1999, discount: 35, rating: 4.8 },
    { id: 3, name: "Modern Wall Light", image: catProduct3, price: 799, originalPrice: 1299, discount: 38, rating: 4.3 },
    { id: 4, name: "Elegant Table Lamp", image: catProduct4, price: 899, originalPrice: 1499, discount: 40, rating: 4.6 },
    { id: 5, name: "Smart LED Bulb", image: catProduct5, price: 399, originalPrice: 699, discount: 43, rating: 4.7 },
    { id: 6, name: "Outdoor Garden Light", image: catProduct6, price: 549, originalPrice: 899, discount: 39, rating: 4.4 },
    { id: 7, name: "Strip Light Set", image: catProduct7, price: 699, originalPrice: 1199, discount: 42, rating: 4.5 },
    { id: 8, name: "Pendant Light", image: catProduct1, price: 1099, originalPrice: 1799, discount: 39, rating: 4.6 },
  ],
};

const priceRanges = [
  "Less than INR 1000",
  "INR 1001 - 2000",
  "INR 2001 - 3000",
  "INR 3001 - 4000",
  "INR 4001 - 5000",
  "OVER INR 5000",
];

const CategoryPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const category = categorySlug ? categoryData[categorySlug] || defaultCategory : defaultCategory;
  const categoryTitle = categorySlug 
    ? categorySlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    : 'Products';

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 ${i <= rating ? 'text-secondary fill-secondary' : 'text-muted-foreground'}`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <section className="relative h-[450px] md:h-[650px] overflow-hidden bg-black">
        <img
          src={category.heroImage}
          alt={category.title}
          className="w-full h-full object-cover transition-transform duration-[30s] ease-linear hover:scale-110 brightness-[1.1] contrast-[1.05]"
        />
        {/* Multilayered vibrant overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        
        <div className="absolute inset-0 flex items-center pt-20 md:pt-24">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <div className="overflow-hidden mb-6">
                <span className="inline-block px-4 py-1 bg-secondary text-white text-[10px] md:text-xs font-black uppercase tracking-[0.4em] rounded-sm shadow-[0_0_20px_rgba(251,191,36,0.3)] animate-reveal-up">
                  The Gold Standard of Lighting
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 leading-[0.85] tracking-tighter drop-shadow-2xl animate-reveal-up delay-100">
                {category.title.split(' ')[0]} <br />
                <span className="text-secondary italic font-thin tracking-normal">{category.title.split(' ').slice(1).join(' ') || "Collection"}</span>
              </h1>
              
              <div className="w-32 h-2 bg-secondary mb-10 shadow-[0_0_30px_rgba(251,191,36,0.6)] animate-width-grow" />
              
              <p className="text-white text-xl md:text-2xl font-medium max-w-xl leading-snug drop-shadow-md border-l-8 border-secondary pl-8 animate-reveal-up delay-200">
                Experience {category.title} like never before. <br />
                <span className="text-white/60 text-sm md:text-base font-bold uppercase tracking-widest mt-2 block">Premium Series 2026</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Decorative Edge */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Breadcrumb */}
      <div className="bg-background py-4 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground">{category.title}</span>
          </div>
        </div>
      </div>

      {/* Category Title & Description */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-start md:gap-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-0 md:min-w-[250px]">
              {category.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      {/* <section className="py-4 border-y border-border bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                onClick={() => setShowFilters(!showFilters)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <span className="text-sm text-muted-foreground hidden sm:inline">
                Showing {category.products.length} out of {category.products.length} products
              </span>
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              Featured
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section> */}

      {/* Main Content */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              {/* Sub-Categories */}
              {/* <div className="mb-8">
                <h3 className="text-lg font-bold text-foreground mb-4">Sub-Categories</h3>
                <div className="space-y-3">
                  {category.subCategories.map((subCat) => (
                    <label key={subCat} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="subCategory"
                        checked={selectedSubCategory === subCat}
                        onChange={() => setSelectedSubCategory(subCat)}
                        className="w-4 h-4 text-primary border-border focus:ring-primary"
                      />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {subCat}
                      </span>
                    </label>
                  ))}
                </div>
              </div> */}

              {/* Price Filter */}
              {/* <div>
                <h3 className="text-lg font-bold text-foreground mb-4">Price</h3>
                <div className="space-y-3">
                  {priceRanges.map((range) => (
                    <label key={range} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="priceRange"
                        checked={selectedPrice === range}
                        onChange={() => setSelectedPrice(range)}
                        className="w-4 h-4 text-primary border-border focus:ring-primary"
                      />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {range}
                      </span>
                    </label>
                  ))}
                </div>
              </div> */}
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-card rounded-lg shadow-sm overflow-hidden group hover:shadow-lg transition-shadow"
                  >
                    <div className="relative aspect-square bg-white p-4">
                      {/* Wishlist Button */}
                      <button className="absolute top-4 left-4 z-10 text-primary hover:text-primary/80 transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                      {/* Discount Badge */}
                      <div className="absolute top-4 right-4 z-10 bg-[#2d6b7a] text-white text-xs font-semibold px-2 py-1 rounded">
                        -{product.discount}%
                      </div>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 min-h-[48px] mb-2">
                        {product.name}...
                      </h3>
                      <div className="flex items-center gap-0.5 mb-2">
                        {renderStars(product.rating)}
                      </div>
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="font-semibold text-foreground">
                          From Rs. {product.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          Rs. {product.originalPrice.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-12">
                <button 
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      currentPage === page
                        ? 'bg-foreground text-background'
                        : 'border border-border hover:bg-muted'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button 
                  onClick={() => setCurrentPage(Math.min(3, currentPage + 1))}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-6">
              {category.title} are more than just a source of light; they are essential design elements that elevate any room. By seamlessly blending form and function, {category.title.toLowerCase()} enhance the ambiance, offering both illumination and style to your home. From cozy apartments to expansive living rooms, the right light can transform your space, all while saving floor space.
            </p>
            <p className="mb-8">
              Modern LED {category.title.toLowerCase()} provide versatile options with varying colors and designs, perfectly complementing your home's mood and decor.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-4">
              The Importance Of {category.title} In Interior Design
            </h3>
            <p className="mb-6">
              {category.title} are central to the design and feel of any room. They provide the perfect blend of practicality and elegance, adding depth and highlighting the features of your space.
            </p>
            <p className="mb-8">
              Whether it's the living room, bedroom, kitchen, bathroom, or hallway, {category.title.toLowerCase()} ensure every corner is beautifully illuminated. The right light fixture can turn any dull space into a vibrant one, enhancing both the style and functionality of your interiors.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-4">
              Types Of {category.title} And Their Designs
            </h3>
            <p className="mb-4">
              The right lighting depends on the design and purpose of the room. Here are the most popular types to consider:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li><strong>Surface-mounted lights:</strong> Directly attached to the ceiling, perfect for lighting in kitchens, balconies, or any room.</li>
              <li><strong>Downlights:</strong> Installed within a recessed cavity, ideal for living rooms, bedrooms, and hallways with false ceilings.</li>
              <li><strong>Spotlights:</strong> Perfect for focused lighting, directing a beam onto your artwork or architectural features.</li>
              <li><strong>Cabinet lights:</strong> Compact lights designed for under-cabinet installations, perfect for kitchens and closets.</li>
            </ul>
            <p className="mb-8">
              {category.title} come in various shapes, including round, square, and hexagonal, allowing you to find the perfect match for your style.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-4">
              How To Choose The Right Light For Your Space
            </h3>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li><strong>Living room:</strong> For false ceilings, choose downlights, COBs, or spotlights. Sleek flush-mounted lights work beautifully for a modern look.</li>
              <li><strong>Bedroom:</strong> Soft, warm-toned lights create a cozy atmosphere, while bright lights offer an illuminated vibe.</li>
              <li><strong>Kitchen:</strong> Combine task lighting, such as pendants over counters, with general ceiling lights for optimal lighting.</li>
              <li><strong>Bathroom:</strong> Surface lights, downlights, or COBs provide bright, diffused illumination.</li>
              <li><strong>Dining room:</strong> Highlight your dining table with a stylish pendant or chandelier.</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mb-4">
              Buying {category.title} Online: A Simple Guide
            </h3>
            <p className="mb-4">
              Shopping for {category.title.toLowerCase()} online is quick and convenient. Here's how to make the best choice for your home:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li><strong>Define the purpose:</strong> Consider the room where the light will be installed. Softer lighting is ideal for bedrooms, while brighter lights are better for kitchens and living rooms.</li>
            </ul>

            {/* FAQ Section */}
            <div className="border-t border-border pt-8 mt-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Q1. What type of {category.title.toLowerCase()} is best for my room?</h4>
                  <p>A. Consider the size of your room, ceiling height, and the ambiance you want to create. For false ceilings, downlights and COBs work well, while for true ceilings, opt for surface lights.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Q2. Can LED {category.title.toLowerCase()} work in all spaces?</h4>
                  <p>A. Yes, LED {category.title.toLowerCase()} are versatile and suitable for any room. They are energy-efficient, long-lasting, and offer even illumination without the need for separate bulbs.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Q3. Why should I consider smart {category.title.toLowerCase()}?</h4>
                  <p>A. Smart {category.title.toLowerCase()} offer convenience and customization. Easily adjust brightness, change colors, and control the lighting with your smartphone or voice, making them perfect for modern, connected homes.</p>
                </div>
              </div>

              <p className="mt-8 text-foreground">
                Elevate your space with Shree Jee Electrical {category.title.toLowerCase()}, where innovation meets elegance to provide the perfect lighting solution for every room.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryPage;
