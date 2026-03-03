import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import RootLayout from "./lib/layout/RootLayout";

import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Warranty from "./pages/Warranty";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import FAQPage from "./pages/Faq";
import OurWork from "./pages/Work";
import DealerPage from "./pages/Dealership";
import ThankYou from "./pages/ThankYou";

const queryClient = new QueryClient();

function ScrollHandler() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* <Sonner /> */}
        <BrowserRouter>
          <ScrollHandler />
          <Toaster position="top-right" containerStyle={{ zIndex: 9999 }} />
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/About" element={<About />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/Product/:id" element={<ProductDetail />} />
              <Route path="/Work" element={<OurWork />} />
              <Route path="/Warranty" element={<Warranty />} />
              <Route path="/Dealership" element={<DealerPage />} />
              <Route path="/Faq" element={<FAQPage />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/ThankYou" element={<ThankYou />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
