import { AnimatePresence, motion } from "framer-motion";
import { Zap } from "lucide-react";
import { useEffect, useState } from "react";

export const Testimonial = ({ items, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  return (
    <div className="relative min-h-[200px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <Zap className="text-primary mx-auto mb-4" size={32} />
          <h2 className="font-display text-xl sm:text-3xl font-bold text-foreground mb-4 max-w-2xl mx-auto">
            "{items[currentIndex]?.title}"
          </h2>
          <p className="text-muted-foreground font-medium text-sm sm:text-base">
            — {items[currentIndex]?.name}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Optional: Progress indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {items?.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-primary"
                : "w-4 bg-border hover:bg-primary/50"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
