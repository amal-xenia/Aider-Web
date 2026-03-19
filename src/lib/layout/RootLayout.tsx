import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function RootLayout() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // 🔥 Pages where header/footer should NOT show
  const hideLayoutRoutes = [""];
  const isNotFoundPage =
    location.pathname !== "/" &&
    ![
      "/About",
      "/Products",
      "/Work",
      "/Warranty",
      "/Dealership",
      "/Faq",
      "/Contact",
      "/ThankYou",
    ].some((route) => location.pathname.startsWith(route)) &&
    !location.pathname.startsWith("/Product/");

  const shouldHideLayout =
    hideLayoutRoutes.includes(location.pathname) || isNotFoundPage;

  // 🔥 Route loader
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    setLoading(true);

    timeout = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  useEffect(() => {
    if (loading) return;

    const scroll = new LocomotiveScroll({
      el: document.querySelector("#smooth-scroll") as any,
      smooth: true,
      lerp: 0.07,
      multiplier: 1,
      class: "is-reveal",
      smoothMobile: true,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    } as any);

    return () => scroll.destroy();
  }, [loading]);

  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center max-h-screen">
          <Loader />
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Toaster position="top-right" containerStyle={{ zIndex: 9999 }} />
      <a
        href="https://wa.me/919072846444"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-4 z-50"
      >
        <img
          src="/assets/elements/whatsapp.png"
          alt="WhatsApp"
          className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform duration-300"
        />
      </a>

      {!shouldHideLayout && <Navbar />}

      <div className="flex-grow" id="smooth-scroll">
        <Outlet />
      </div>

      {!shouldHideLayout && <Footer />}
    </div>
  );
}

export default RootLayout;
