import { Link } from "react-router-dom";
import { Shield, Zap, Settings, Award, ArrowRight, CheckCircle2, Building2, Factory, Radio, Sun, Fuel, HeartPulse, Server, Home } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  {
    icon: Shield,
    title: "Lightning Risk Assessment",
    description: "Comprehensive site surveys and risk analysis as per IS/IEC 62305 standards.",
  },
  {
    icon: Zap,
    title: "LPS Design & Installation",
    description: "End-to-end design, supply, and installation of complete protection systems.",
  },
  {
    icon: Settings,
    title: "Earthing & Grounding",
    description: "Complete earthing solutions with soil resistivity testing and electrode installation.",
  },
  {
    icon: Award,
    title: "Annual Maintenance",
    description: "Periodic inspection, testing, and compliance maintenance for ongoing safety.",
  },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "100%", label: "Safety Record" },
  { value: "24/7", label: "Support Available" },
];

const industries = [
  { icon: Building2, name: "Commercial Buildings" },
  { icon: Factory, name: "Industrial Plants" },
  { icon: Radio, name: "Telecom Towers" },
  { icon: Sun, name: "Solar & Wind Farms" },
  { icon: Fuel, name: "Oil & Gas Facilities" },
  { icon: HeartPulse, name: "Hospitals & Healthcare" },
  { icon: Server, name: "Data Centers" },
  { icon: Home, name: "Residential Complexes" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[650px] flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt="Lightning Protection System"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/60 to-foreground/80" />
        <div className="absolute inset-0 bg-primary/10" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm"
          >
            <Zap size={14} className="text-primary" />
            <span className="text-xs font-semibold tracking-wider uppercase text-primary-foreground/90">IS/IEC 62305 Certified</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-background mb-6 leading-tight"
          >
            Protecting What
            <br />
            <span className="text-primary">Matters Most</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg sm:text-xl text-background/80 mb-10 max-w-2xl mx-auto"
          >
            Industry-leading lightning protection systems — from risk assessment to installation. Complete safety solutions for every structure.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg"
            >
              Request a Quote <ArrowRight size={16} />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-lg border-2 border-background/30 px-8 py-4 text-sm font-semibold text-background transition-all hover:bg-background/10 backdrop-blur-sm"
            >
              Explore Products
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-background/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-background/60 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
        <div className="container-max px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="text-center"
              >
                <div className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70 mt-1 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-section-alt">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <motion.span
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
              className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3"
            >
              Our Services
            </motion.span>
            <motion.h2
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
              className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              Complete Lightning Protection Solutions
            </motion.h2>
            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}
              className="text-muted-foreground"
            >
              From risk assessment to installation and maintenance, we provide end-to-end lightning protection services.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={24} />
                </div>
                <h3 className="font-display font-semibold text-card-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5} variants={fadeUp}
            className="text-center mt-10"
          >
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
              View All Services <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <motion.span
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
              className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3"
            >
              Featured Products
            </motion.span>
            <motion.h2
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
              className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              Premium Protection Equipment
            </motion.h2>
            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}
              className="text-muted-foreground"
            >
              Explore our range of certified, high-quality lightning protection products.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 3).map((product, i) => (
              <motion.div
                key={product.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4} variants={fadeUp}
            className="text-center mt-10"
          >
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              View All Products <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-section-alt">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">Why Choose Aider</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Trusted by Industries Across India
              </h2>
              <p className="text-muted-foreground mb-8">
                With over 15 years of experience, Aider has established itself as a trusted name
                in lightning protection. Our systems are designed, tested, and installed to meet
                international standards.
              </p>
              <ul className="space-y-4">
                {[
                  "IS/IEC 62305 compliant systems",
                  "Certified engineers and technicians",
                  "Premium quality materials with long warranty",
                  "Post-installation support and maintenance",
                  "Competitive pricing with no compromise on quality",
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i + 1}
                    variants={fadeUp}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                    <span className="text-foreground font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}>
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                <h3 className="font-display text-xl font-semibold text-card-foreground mb-6">Industries We Serve</h3>
                <div className="grid grid-cols-2 gap-3">
                  {industries.map((industry) => (
                    <div key={industry.name} className="flex items-center gap-3 bg-accent rounded-lg px-4 py-3 hover:bg-primary/10 transition-colors group">
                      <industry.icon size={16} className="text-primary shrink-0" />
                      <span className="text-sm text-accent-foreground font-medium">{industry.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial / Trust */}
      <section className="section-padding">
        <div className="container-max">
          <div className="bg-card rounded-2xl border border-border p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
              <Zap className="text-primary mx-auto mb-4" size={32} />
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4 max-w-2xl mx-auto">
                "Aider's lightning protection system has given us complete peace of mind for our 200,000 sq.ft facility."
              </h2>
              <p className="text-muted-foreground font-medium">— Operations Director, Leading Manufacturing Plant</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
        <div className="container-max text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Need Lightning Protection for Your Project?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
              Get a free consultation and customized quote from our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-background px-8 py-4 text-sm font-semibold text-foreground transition-all hover:opacity-90 hover:shadow-lg"
              >
                Contact Us Today <ArrowRight size={16} />
              </Link>
              <Link
                to="/warranty"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary-foreground/30 px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
              >
                Register Warranty
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
