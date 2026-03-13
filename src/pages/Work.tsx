import { Works } from "@/data/works";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const OurWork = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(11); // Show first 11 images

  const loadMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 11, Works.length));
  };

  const visibleWorks = Works.slice(0, visibleCount);
  const hasMore = visibleCount < Works.length;

  return (
    <div className="min-h-screen">
      <section className="bg-section-alt section-padding">
        <div className="container-max text-center max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3"
          >
            Gallery
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4"
          >
            Our Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="text-muted-foreground"
          >
            Browse through our completed projects across various industries and
            locations.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Pinterest-style Masonry Grid - No blank spaces */}
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              <AnimatePresence mode="wait">
                {visibleWorks.map((work, index) => (
                  <motion.div
                    key={work.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.05, // Stagger the fade-ins
                      ease: "easeOut",
                    }}
                    onClick={() => setSelectedImage(work)}
                    className="break-inside-avoid group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white mb-6"
                  >
                    <div className="relative">
                      <img
                        src={work.src}
                        alt={work.title}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />

                      {/* Subtle overlay on hover */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                      />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Load More Button with fade animation */}
            <AnimatePresence mode="wait">
              {hasMore && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center mt-12"
                >
                  <motion.button
                    onClick={loadMore}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-200 shadow-md hover:shadow-lg"
                  >
                    Load More
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Optional: Show count of visible images with fade */}
            {visibleWorks.length > 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-center text-gray-500 text-sm mt-6"
              >
                Showing {visibleWorks.length} of {Works.length} images
              </motion.p>
            )}

            {/* Lightbox Modal with fade transitions */}
            <AnimatePresence>
              {selectedImage && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                  onClick={() => setSelectedImage(null)}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="relative max-w-5xl w-full"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.2 }}
                      onClick={() => setSelectedImage(null)}
                      className="absolute -top-12 right-0 text-white hover:text-gray-300 text-4xl font-light"
                    >
                      ×
                    </motion.button>
                    <div className="bg-white rounded-2xl overflow-hidden">
                      <div className="flex items-center justify-center bg-black/5">
                        <motion.img
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          src={selectedImage.src}
                          alt={selectedImage.title}
                          className="w-full max-h-[85vh] object-contain"
                        />
                      </div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.1 }}
                        className="p-4 text-center"
                      >
                        <h3 className="text-xl font-semibold text-gray-900">
                          {selectedImage.title}
                        </h3>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;
