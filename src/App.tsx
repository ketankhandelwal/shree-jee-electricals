import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import AboutPage from "./pages/AboutPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Catalog from "./pages/Catalog";
import StoryPage from "./pages/StoryPage";

import ScrollToHash from "./components/ScrollToHash";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/">
          <ScrollToHash />
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Index />} />
            
            {/* Dynamic Category Pages - replaces old individual category routes */}
            <Route path="/category/:categorySlug" element={<CategoryPage />} />
            
            {/* Product Detail Page */}
            <Route path="/product/:id" element={<ProductDetailPage />} />
            
            {/* Static Pages */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/catalogs" element={<Catalog />} />
            <Route path="/story" element={<StoryPage />} />
            
            {/* 404 - Must be last */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;