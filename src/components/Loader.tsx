import Lottie from "lottie-react";
import loaderAnimation from "@/lib/json/loading.json";
const Loader = () => (
  <div className="fixed inset-0 z-[9999] bg-transperent flex items-center justify-center">
    <Lottie
      animationData={loaderAnimation}
      loop
      autoplay
      className="w-40 h-40"
    />
  </div>
);

export default Loader;
