import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="gradient-footer py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
              Stay updated with latest on
            </h3>
            <p className="text-xl text-primary-foreground/90">
              Shree Jee lighting products
            </p>
          </div>
          
          <div>
            <div className="flex gap-2 mb-4">
              <Input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-primary-foreground text-foreground border-0 py-6"
              />
              <Button className="btn-secondary py-6 px-8">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Get exclusive offers, new arrivals, and lighting tips directly in your inbox.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
