import { useParams, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Truck, ShieldCheck, Zap, ChevronLeft } from "lucide-react";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-black mb-4">Product Not Found</h1>
        <button 
          onClick={() => navigate("/")}
          className="px-8 py-3 bg-primary text-white rounded-full font-bold"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-12 md:py-24">
        {/* Breadcrumb / Back */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors mb-12 group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold uppercase tracking-widest text-xs">Back to Gallery</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Product Gallery */}
          <div className="space-y-6">
            <div className="aspect-square rounded-[40px] overflow-hidden bg-[#F5F5F7] border border-gray-100 shadow-inner group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain p-12 group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
               {[1,2,3,4].map((i) => (
                 <div key={i} className="aspect-square rounded-[20px] bg-[#F5F5F7] opacity-50 hover:opacity-100 transition-opacity cursor-pointer overflow-hidden border border-transparent hover:border-primary">
                    <img src={product.image} className="w-full h-full object-cover grayscale hover:grayscale-0" />
                 </div>
               ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                 <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">{product.category}</span>
                 <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-yellow-500" />
                    <span className="text-sm font-bold text-gray-900">{product.rating || "4.8"}</span>
                 </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                {product.name}
              </h1>
            </div>

            <div className="space-y-2">
               <div className="text-4xl font-black text-gray-900">Rs. {product.price.toLocaleString("en-IN")}</div>
               {product.originalPrice && (
                 <div className="flex items-center gap-3">
                    <span className="text-gray-400 line-through">Rs. {product.originalPrice.toLocaleString("en-IN")}</span>
                    <span className="text-green-600 font-bold">-{product.discount}% OFF</span>
                 </div>
               )}
            </div>

            <p className="text-gray-500 leading-relaxed text-lg font-light">
              Experience unparalleled illumination with this premium {product.name.toLowerCase()}. Engineered for durability and style, it brings a sophisticated touch to any modern living space.
            </p>

            {/* Quick Benefits */}
            <div className="grid grid-cols-2 gap-4 pb-8 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-bold text-gray-600">Free Next-Day Delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-bold text-gray-600">3 Year Warranty</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex-grow h-16 bg-gray-900 text-white rounded-full font-black text-lg shadow-2xl hover:bg-black transition-all transform active:scale-95">
                Add to Cart
              </button>
              <button className="h-16 px-8 border-2 border-primary text-primary rounded-full font-black text-lg hover:bg-primary/5 transition-colors">
                Quick Enquiry
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
