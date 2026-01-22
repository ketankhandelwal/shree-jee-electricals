import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Lightbulb, Zap, Shield, Star, Truck, Settings, Users, Award, Phone } from "lucide-react";

import aboutHero from "@/assets/about-hero.jpg";
import aboutShowroom from "@/assets/about-showroom.jpg";
import aboutQuality from "@/assets/about-quality.jpg";
import aboutService from "@/assets/about-service.jpg";
import insta1 from "@/assets/insta-1.jpg";
import insta2 from "@/assets/insta-2.jpg";
import insta3 from "@/assets/insta-3.jpg";
import insta4 from "@/assets/insta-4.jpg";
import insta5 from "@/assets/insta-5.jpg";
import insta6 from "@/assets/insta-6.jpg";

const AboutPage = () => {
  const features = [
    { icon: Lightbulb, title: "LED Lights", description: "Energy efficient LED solutions for every space. Save power, save money." },
    { icon: Zap, title: "Smart Wiring", description: "Professional grade wiring and electrical components for safety." },
    { icon: Shield, title: "Quality Products", description: "ISI marked and certified electrical products you can trust." },
    { icon: Star, title: "Premium Fixtures", description: "Designer lighting fixtures for modern homes and offices." },
    { icon: Truck, title: "Fast Delivery", description: "Quick delivery across the city with professional installation." },
    { icon: Settings, title: "Installation", description: "Expert installation services by certified electricians." },
    { icon: Users, title: "Expert Support", description: "Dedicated customer support for all your electrical needs." },
    { icon: Award, title: "Warranty", description: "Comprehensive warranty on all products and services." },
  ];

  const products = [
    { name: "Chandelier Lights", price: "₹4,999", image: aboutHero },
    { name: "LED Panel Lights", price: "₹1,299", image: aboutShowroom },
    { name: "Decorative Lamps", price: "₹2,499", image: aboutService },
  ];

  const testimonials = [
    { name: "Rajesh Kumar", role: "Home Owner", text: "Excellent quality lights and great service. Shree Jee Electrical transformed our home with beautiful lighting solutions." },
    { name: "Priya Sharma", role: "Interior Designer", text: "I recommend Shree Jee to all my clients. Their product range and quality is unmatched in the market." },
    { name: "Amit Patel", role: "Business Owner", text: "Professional installation and excellent after-sales support. Very happy with our office lighting setup." },
  ];

  const instagramImages = [insta1, insta2, insta3, insta4, insta5, insta6];

  return (
    <div className="min-h-screen bg-[hsl(0,0%,8%)]">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzBhMGEwYSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEiIGZpbGw9IiMxYTFhMWEiLz48L3N2Zz4=')] opacity-50"></div>
        
        {/* Decorative Elements */}
        <div className="absolute left-10 top-32 opacity-20">
          <Lightbulb className="w-16 h-16 text-primary" />
        </div>
        <div className="absolute left-20 bottom-40 opacity-20">
          <Zap className="w-12 h-12 text-primary" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex gap-2 mb-6">
                <Lightbulb className="w-8 h-8 text-primary opacity-60" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About us</h1>
              <p className="text-gray-400 text-lg mb-8 max-w-md">
                At Shree Jee Electrical, we bring light to your life with premium quality electrical products and lighting solutions. Serving customers since 1995 with trust and excellence.
              </p>
            </div>
            <div className="relative">
              <img 
                src={aboutHero} 
                alt="Premium Lighting" 
                className="rounded-lg shadow-2xl w-full max-w-lg mx-auto"
              />
              <div className="absolute -bottom-4 -left-4 opacity-30">
                <Zap className="w-20 h-20 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Our Showroom Section */}
      <section className="py-20 bg-[hsl(0,0%,8%)] relative">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 opacity-10">
          <Lightbulb className="w-24 h-24 text-primary" />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={aboutShowroom} 
                alt="Our Showroom" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Visit our<br />premium showroom
              </h2>
              <p className="text-gray-400 mb-8">
                Experience our extensive collection of lighting fixtures, LED solutions, and electrical products. Our showroom features the latest designs and energy-efficient options for homes and businesses.
              </p>
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">Store Hours :</h3>
                <div className="space-y-2">
                  <div className="flex justify-between max-w-xs">
                    <span className="text-gray-400">Monday - Saturday</span>
                    <span className="text-primary">10:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between max-w-xs">
                    <span className="text-gray-400">Sunday</span>
                    <span className="text-primary">11:00 - 18:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-[hsl(0,0%,8%)] relative">
        <div className="absolute left-8 top-1/2 -translate-y-1/2">
          <div className="text-8xl text-gray-700 font-serif">"</div>
        </div>
        <div className="absolute right-12 top-20 opacity-20">
          <Lightbulb className="w-24 h-24 text-primary" />
        </div>
        
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 italic">
            "Illuminating homes, powering dreams..."
          </h2>
          <p className="text-2xl text-primary font-script italic mb-2">Shree Jee Electrical</p>
          <p className="text-gray-500">Trusted Since 1995</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[hsl(0,0%,8%)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              We provide the best products
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our electrical shop offers premium quality products with ISI certification. 
              Experience the best in lighting and electrical solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <feature.icon className="w-12 h-12 text-primary opacity-80" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-20 bg-[hsl(0,0%,8%)]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                We serve the highest<br />quality products
              </h2>
              <p className="text-gray-400 mb-6">
                At Shree Jee Electrical, quality is our top priority. We source products directly from authorized manufacturers and dealers, ensuring authentic and reliable electrical solutions for your home and business.
              </p>
              <p className="text-gray-400 mb-6">
                Our product range includes LED lights, decorative fixtures, ceiling fans, wiring accessories, switchgear, and complete home automation solutions.
              </p>
              <p className="text-primary italic font-medium">
                Let's illuminate your space with our premium electrical products.
              </p>
            </div>
            <div>
              <img 
                src={aboutQuality} 
                alt="Quality Products" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[hsl(0,0%,8%)] relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-10">
          <Zap className="w-32 h-32 text-primary" />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              We Provide the best services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Beyond products, we offer complete electrical solutions including installation, 
              maintenance, and consultation services.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="text-center lg:text-right space-y-8">
              <div>
                <div className="flex lg:justify-end mb-2">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-white font-semibold mb-2">Door Delivery</h3>
                <p className="text-gray-500 text-sm">Free delivery on orders above ₹2000. Same day delivery available.</p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src={aboutService} 
                alt="Our Services" 
                className="rounded-lg shadow-xl w-full max-w-sm"
              />
            </div>
            
            <div className="text-center lg:text-left space-y-8">
              <div>
                <div className="flex lg:justify-start mb-2">
                  <Settings className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-white font-semibold mb-2">Expert Installation</h3>
                <p className="text-gray-500 text-sm">Professional installation by certified electricians with warranty.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-2">
                <Users className="w-10 h-10 text-black opacity-70" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-black">50,000+</div>
              <div className="text-black/70">Happy Customers</div>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                <Lightbulb className="w-10 h-10 text-black opacity-70" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-black">500+</div>
              <div className="text-black/70">Product Variety</div>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                <Award className="w-10 h-10 text-black opacity-70" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-black">25+</div>
              <div className="text-black/70">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-20 bg-[hsl(0,0%,8%)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our wide range of premium lighting and electrical products.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="group">
                <div className="rounded-lg overflow-hidden mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-white font-semibold text-xl mb-2">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-2">Premium quality lighting solutions for your space.</p>
                <p className="text-primary font-bold mb-4">Starting from {product.price}</p>
                <button className="bg-primary text-black px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Shop Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[hsl(0,0%,8%)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 italic">Customer testimonials</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[hsl(0,0%,12%)] rounded-lg p-8 border border-gray-800">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-yellow-600 flex items-center justify-center text-2xl font-bold text-black">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <p className="text-gray-400 text-center mb-6">{testimonial.text}</p>
                <div className="text-center">
                  <h4 className="text-primary font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 bg-[hsl(0,0%,8%)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 italic">Follow us on Instagram</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {instagramImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg group cursor-pointer">
                <img 
                  src={image} 
                  alt={`Instagram ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-[hsl(0,0%,8%)] border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Need Help?</h2>
          <p className="text-gray-400 mb-4">Call us at +91 98765 43210</p>
          <button className="bg-primary text-black px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Contact Us
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
