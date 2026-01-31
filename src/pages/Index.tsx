import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BrandBanner from "@/components/BrandBanner";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import ShopTheLook from "@/components/ShopTheLook";
import HomeOwnersLove from "@/components/HomeOwnersLove";
import RightLightRightRoom from "@/components/RightLightRightRoom";
import Testimonials from "@/components/Testimonials";
import TrustBadges from "@/components/TrustBadges";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import BestSellers from "@/components/BestSellers";
import WallLights from "@/components/WallLights";
import Inspirations from "@/components/Inspirations";
import Partners from "@/components/Partners";
import IntroSplash from "@/components/IntroSplash";
import { useState, useEffect } from "react";

const Index = () => {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    if (!hasSeenSplash) {
      setShowSplash(true);
      sessionStorage.setItem("hasSeenSplash", "true");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {showSplash && <IntroSplash />}
      <Header />
      <main>
        <Hero />
        <BrandBanner />
        <Features />
 
        <Categories />
        <Products />
        <BestSellers />
        <WallLights />
        <ShopTheLook />
        <HomeOwnersLove />
        <RightLightRightRoom />
        <Inspirations />
        <Partners />
        <Testimonials />
        <TrustBadges />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
