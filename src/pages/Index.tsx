import { Link } from "react-router-dom";
import {
  Shield,
  Zap,
  Settings,
  Award,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import heroBg from "/assets/hero-bg.jpeg";
import heroBgPhone from "/assets/heroBg-phone.jpeg";
import homePage from "@/lib/json/homePage.json";
import { Testimonial } from "@/components/content/testimonial";
import EnquiryPopUp from "@/components/content/EnquiryPopup/EnquiryPopup";

const iconMap = {
  Shield,
  Zap,
  Settings,
  Award,
};

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
    <div>
      {/* Hero Section */}
      <>
        <section className="relative w-full h-[300px] sm:h-[250px] md:h-[500px] lg:h-full min-h-[500px] overflow-hidden">
          {/* Background Image */}
          <img
            src={heroBg}
            draggable="false"
            alt="Lightning Protection System"
            className="w-full h-full object-cover hidden sm:block"
          />
          <img
            src={heroBgPhone}
            alt="Lightning Protection System"
            draggable="false"
            className="w-full h-full object-cover block sm:hidden"
          />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-primary/10" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="font-display text-3xl min-[480px]:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            >
              Advanced Lightning Protection
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-sm sm:text-lg text-white/80 mb-6 max-w-2xl"
            >
              Protecting Lives. Safeguarding Infrastructure. Securing Critical
              Assets
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/Contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-white hover:opacity-90"
              >
                Request a Quote <ArrowRight size={16} />
              </Link>

              <Link
                to="/Products"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10"
              >
                Explore Products
              </Link>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <div className="container-max relative">
            <motion.div
              onClick={() => {
                document.getElementById("stats")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute bottom-2 sm:bottom-42 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
            >
              <div
                className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center items-start p-1"
                id="stats"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ repeat: Infinity, duration: 1.2 }}
                  className="w-1.5 h-1.5 bg-white rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </>
      {/* Stats */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
        <div className="container-max px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {homePage?.stats?.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="text-center"
              >
                <div
                  className={`font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground ${stat?.icon ? "flex flex-col items-center" : "block"}`}
                >
                  <img
                    src={stat.icon}
                    alt={stat.label}
                    draggable="false"
                    className="h-11 sm:h-14 w-12 sm:w-16 object-contain "
                  />
                </div>
                <div className="text-md sm:text-md text-primary-foreground/70 my-1 font-medium">
                  {stat.label}
                </div>
                <p
                  className="text-white text-sm sm:text-sm"
                  dangerouslySetInnerHTML={{ __html: stat?.description }}
                />
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
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
              className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3"
            >
              Our Services
            </motion.span>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              Complete Lightning Protection Solutions
            </motion.h3>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
              className="text-muted-foreground text-balance text-sm sm:text-base text-center"
            >
              We provide advanced Early Streamer Emission (ESE) lightning
              protection systems designed to deliver
              <br className="block sm:hidden" />
              superior safety and performance. Our solutions are engineered to
              protect residential, commercial,
              <br className="block sm:hidden" /> and industrial structures from
              the devastating
              <br className="block sm:hidden" /> impact of lightning strikes
            </motion.p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {homePage?.services?.map((service, i) => {
              const Icon = iconMap[service.icon];

              return (
                <motion.div
                  key={service.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center gap-3 sm:block">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {Icon && (
                        <Icon
                          className="text-primary group-hover:text-primary-foreground transition-colors"
                          size={24}
                        />
                      )}
                    </div>

                    <h3 className="font-display font-semibold text-card-foreground mb-2 text-lg sm:text-base">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm text-left text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
              className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3"
            >
              Featured Products
            </motion.span>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4"
            >
              Premium Protection Equipment
            </motion.h3>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
              className="text-muted-foreground"
            >
              Explore our range of certified, high-quality lightning protection
              products.
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            variants={fadeUp}
            className="text-center mt-10"
          >
            <Link
              to="/Products"
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
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
            >
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
                Why Choose Aider
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-5">
                Trusted by Industries Across India
              </h2>
              <h3 className="font-display text-xl sm:text-xl font-bold text-foreground mb-6">
                20+ Years of Proven Experience
              </h3>
              <p className="text-muted-foreground mb-8">
                With over two decades of expertise in lightning protection and
                grounding systems, Aider Lightning Protection delivers trusted,
                field-tested solutions designed to perform in the most demanding
                environments.
                <br />
                We combine technical knowledge, quality materials, and precision
                engineering to ensure maximum safety for every project.
              </p>
              <ul className="space-y-4">
                {homePage?.WhyChooseUs?.map((item, i) => (
                  <motion.li
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i + 1}
                    variants={fadeUp}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      className="text-primary shrink-0 mt-0.5"
                      size={20}
                    />
                    <span className="text-foreground font-medium">
                      {item?.item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
            >
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                <h3 className="font-display text-xl font-semibold text-card-foreground mb-6">
                  Industries We Serve
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {homePage?.industries?.map((industry) => (
                    <div
                      key={industry.name}
                      className="flex items-center gap-3 bg-accent rounded-lg px-2 sm:px-4 py-3 hover:bg-primary/10 transition-colors group"
                    >
                      <span className="text-sm sm:text-sm text-[#043448] font-medium">
                        {industry.name}
                      </span>
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

            {homePage?.testimonial && homePage.testimonial.length > 0 && (
              <Testimonial items={homePage.testimonial} interval={5000} />
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <EnquiryPopUp />
    </div>
  );
};

export default Index;
