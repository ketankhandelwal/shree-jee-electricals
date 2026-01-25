import React from "react";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactUs = () => {
  const mapUrl = "https://www.google.com/maps/dir//Schneider+electric+-+Shree+Jee+Electricals,+Infront+of+Janta+Tent+House,+Bhagwa+Chungi,+Dali+pur,+Bela+Pratapgarh,+Uttar+Pradesh+230001/@25.9142951,81.993651,19.81z/data=!4m8!4m7!1m0!1m5!1m1!1s0x399a913c1ef00ee9:0x6f48104f7a110604!2m2!1d81.9938561!2d25.9159735?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm">Contact Us</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            Let's Light Up Your <span className="text-primary underline decoration-gold/30">Next Project</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Have a question or need a personalized lighting consultation? Our experts are here to help you find the perfect match for your space.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-10">
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold mb-1">Call Us</h4>
                  <p className="text-gray-500 font-medium">+91 7275401715</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold mb-1">Email Us</h4>
                  <p className="text-gray-500 font-medium">Shreejeelightguru@gmail.com</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                    <MapPin className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold mb-1">Visit Us</h4>
                    <p className="text-gray-500 font-medium whitespace-pre-line">
                      Shree Jee Electricals, 
                      In-Front of Janta Tent House,
                      Balipur,Pratapgarh, 
                      Uttar Pradesh, India
                    </p>
                  </div>
                </div>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black hover:bg-primary text-white px-5 py-2.5 rounded-xl font-semibold transition-all text-sm ml-[72px]"
                >
                  <MapPin size={16} />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-6 space-y-4">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Follow Our Journey</p>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/shree.jee.light.guru" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/shree_jee07/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-[#F8F9FA] p-8 md:p-12 rounded-[32px] border border-gray-100 shadow-sm">
              <form 
                action="https://formspree.io/f/xeoovvpo" 
                method="POST"
                className="grid sm:grid-cols-2 gap-6"
              >
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                  <Input 
                    type="text" 
                    name="name"
                    placeholder="John Doe" 
                    required
                    className="h-12 rounded-xl bg-white border-0 shadow-sm focus-visible:ring-1 focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                  <Input 
                    type="email" 
                    name="email"
                    placeholder="john@example.com" 
                    required
                    className="h-12 rounded-xl bg-white border-0 shadow-sm focus-visible:ring-1 focus-visible:ring-primary"
                  />
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                  <Input 
                    type="text" 
                    name="subject"
                    placeholder="Project Inquiry" 
                    required
                    className="h-12 rounded-xl bg-white border-0 shadow-sm focus-visible:ring-1 focus-visible:ring-primary"
                  />
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                  <Textarea 
                    name="message"
                    placeholder="How can we help you?" 
                    rows={5}
                    required
                    className="rounded-xl bg-white border-0 shadow-sm focus-visible:ring-1 focus-visible:ring-primary resize-none"
                  />
                </div>
                <div className="sm:col-span-2 pt-2">
                  <Button 
                    type="submit"
                    className="w-full h-14 bg-black hover:bg-primary text-white font-bold rounded-xl transition-all flex items-center justify-center gap-3 group"
                  >
                    Send Message
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;