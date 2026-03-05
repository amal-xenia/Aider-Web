import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { motion } from "framer-motion";

const Products = () => (
  <div className="min-h-screen">
    {/* Hero Banner */}
    <section className="bg-primary section-padding">
      <div className="container-max text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="inline-block text-xs font-semibold tracking-widest uppercase text-primary-foreground/70 mb-3"
        >
          Our Products
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4"
        >
          Premium Lightning Protection Equipment
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="text-primary-foreground/80 max-w-2xl mx-auto text-lg"
        >
          Explore our complete range of certified, high-quality products
          designed for maximum safety and durability across all industries.
        </motion.p>
      </div>
    </section>

    {/* Products Grid */}
    <section className="section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Products;
