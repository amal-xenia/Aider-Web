import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import heroBg from "/assets/hero-bg.jpeg";
import heroBgPhone from "/assets/thankyou.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const ThankYou = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[100vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src={heroBg}
          alt="Thank You"
          className="absolute inset-0 w-full h-full object-cover hidden sm:block"
        />
        <img
          src={heroBgPhone}
          alt="Thank You"
          className="absolute inset-0 w-full h-full object-cover block sm:hidden"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-primary/10" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto py-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="flex justify-center mb-6"
          >
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Thank You!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg sm:text-xl text-white/90 mb-3"
          >
            Your submission has been received
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-sm sm:text-base text-white/70 max-w-lg mx-auto mb-8"
          >
            Our team will review your inquiry and get back to you.
            <br /> We appreciate your interest in Aider Lightning Protection.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-white transition-all hover:opacity-90"
            >
              Return to Home <ArrowRight size={16} />
            </Link>

            <Link
              to="/Products"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              Explore Products
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ThankYou;
