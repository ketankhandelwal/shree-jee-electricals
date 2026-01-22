import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20"> {/* Add padding for fixed header */}
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
