import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";

import Index from "./pages/Index";
import PortfolioPageWrapper from "./pages/PortfolioPageWrapper";
import GalleryPageWrapper from "./pages/GalleryPageWrapper";
import NotFound from "./pages/NotFound";

import Services from "./components/Services";
import Academy from "./components/Academy";
import About from "./components/About";
import Contactt from "./components/Contactt";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsApp from "./components/Whatsapp";

const queryClient = new QueryClient();

/* ✅ Layout wrapper for pages with Header & Footer */
const MainLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

/* ✅ Scroll to top on route change */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // change to "smooth" if needed
    });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <ScrollToTop />

          <Routes>
            {/* Pages WITHOUT header/footer */}
            <Route path="/" element={<Index />} />
            <Route path="/portfolio" element={<PortfolioPageWrapper />} />
            <Route path="/gallery" element={<GalleryPageWrapper />} />

            {/* Pages WITH header/footer */}
            <Route element={<MainLayout />}>
              <Route path="/Services" element={<Services />} />
              <Route path="/Academy" element={<Academy />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contactt" element={<Contactt />} />
            </Route>

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* ✅ WhatsApp button visible on ALL pages */}
          <WhatsApp />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;