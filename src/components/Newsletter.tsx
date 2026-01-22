import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-white">
      {/* Consistent margin with other sections */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        
        <div className="relative overflow-hidden bg-[#00529C] rounded-[32px] p-8 md:p-16 shadow-2xl">
          
          {/* Subtle Decorative Light Glow Effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 blur-[100px] rounded-full -ml-32 -mb-32" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Stay updated with the latest on <br />
                <span className="text-blue-200">Shree Jee lighting products</span>
              </h3>
              <p className="text-blue-50 text-lg opacity-80 max-w-md">
                Join our community and get exclusive offers, new arrivals, and expert lighting tips delivered to your inbox.
              </p>
            </div>
            
            {/* Form Section */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full h-14 pl-6 pr-4 rounded-full bg-white border-0 text-gray-900 placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-blue-300"
                  />
                </div>
                <Button className="h-14 px-10 rounded-full bg-gray-900 hover:bg-black text-white font-bold transition-all flex items-center gap-2 group">
                  Subscribe
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </div>
              
              <p className="text-xs text-blue-100/60 pl-2">
                By subscribing, you agree to our <a href="#" className="underline hover:text-white">Privacy Policy</a> and <a href="#" className="underline hover:text-white">Terms of Service</a>.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;