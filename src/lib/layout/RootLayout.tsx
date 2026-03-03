import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

function RootLayout() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // 🔥 Pages where header/footer should NOT show
  const hideLayoutRoutes = ["/thankyou"];
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
    ].some((route) => location.pathname.startsWith(route)) &&
    !location.pathname.startsWith("/product/");

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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Toaster position="top-right" containerStyle={{ zIndex: 9999 }} />

      {!shouldHideLayout && <Navbar />}

      <div className="flex-grow">
        <Outlet />
      </div>

      {!shouldHideLayout && <Footer />}
    </div>
  );
}

export default RootLayout;
