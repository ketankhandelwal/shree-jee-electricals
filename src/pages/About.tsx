import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20"> {/* Add padding for fixed header */}
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
};

export default About;
