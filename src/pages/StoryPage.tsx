import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Story from "@/components/Story";

const StoryPage = () => {
  return (
    <div className="min-h-screen bg-black selection:bg-primary/20 overflow-x-hidden">
      <Header />
      {/* Add padding top to account for fixed header and give some breathing room before the story component starts */}
      <div className="pt-20">
        <Story />
      </div>
      <Footer />
    </div>
  );
};

export default StoryPage;
