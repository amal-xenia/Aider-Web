import { works } from "@/data/works";
import { motion } from "framer-motion";

const OurWork = () => (
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
      <div className="container-max">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works?.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-xl overflow-hidden bg-muted aspect-[4/3]"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors duration-300 flex items-end">
                <div className="p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-xs font-medium text-primary-foreground/80">
                    {item.category}
                  </span>
                  <h3 className="font-display font-semibold text-primary-foreground">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default OurWork;
