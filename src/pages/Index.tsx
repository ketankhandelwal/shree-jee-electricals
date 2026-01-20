import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BrandBanner from "@/components/BrandBanner";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import ShopTheLook from "@/components/ShopTheLook";
import Testimonials from "@/components/Testimonials";
import TrustBadges from "@/components/TrustBadges";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <BrandBanner />
        <Categories />
        <Products />
        <ShopTheLook />
        <Testimonials />
        <TrustBadges />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
