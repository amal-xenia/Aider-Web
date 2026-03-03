import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Target,
  Eye,
  Users,
  Award,
  Shield,
  Zap,
  CheckCircle2,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const About = () => {
  const coreValues = [
    {
      icon: Award,
      title: "Quality First",
      desc: "Every product undergoes rigorous testing to meet IS/IEC 62305 and international standards.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      desc: "We tailor solutions to each client's unique requirements and provide ongoing support.",
    },
    {
      icon: Target,
      title: "Innovation",
      desc: "Continuous R&D to bring the latest lightning protection technologies to our customers.",
    },
    {
      icon: Eye,
      title: "Integrity",
      desc: "Transparent pricing, honest assessments, and reliable warranty commitments.",
    },
  ];

  const milestones = [
    {
      year: "2010",
      title: "Founded",
      desc: "Started as a team of passionate electrical engineers",
    },
    {
      year: "2015",
      title: "Expansion",
      desc: "Opened manufacturing facility in Chennai",
    },
    {
      year: "2018",
      title: "Certification",
      desc: "Achieved ISO 9001:2015 certification",
    },
    {
      year: "2023",
      title: "500+ Projects",
      desc: "Successfully completed 500+ installations",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-section-alt section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container-max text-center max-w-3xl mx-auto relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3"
          >
            About Us
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6"
          >
            Your Trusted Partner in Lightning Safety
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Aider Lightning Protection Systems has been at the forefront of
            lightning safety solutions for over 15 years. We design,
            manufacture, supply, and install comprehensive protection systems
            that meet international standards.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-max grid lg:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Target className="text-primary" size={20} />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                Our Mission
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To provide world-class lightning protection solutions that
              safeguard lives, structures, and equipment. We are committed to
              using the latest technology and highest quality materials to
              deliver systems that exceed international safety standards.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Eye className="text-primary" size={20} />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                Our Vision
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To be recognized as the most trusted and innovative lightning
              protection company in Asia, setting benchmarks in safety, quality,
              and customer satisfaction while making advanced protection
              accessible to all industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-section-alt">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              What Drives Us
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index + 1}
                variants={fadeUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-card rounded-xl p-6 border border-border text-center hover:border-primary/30 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <value.icon
                    className="text-primary group-hover:text-primary-foreground transition-colors"
                    size={22}
                  />
                </div>
                <h3 className="font-display font-semibold text-card-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              Our Journey
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Company Milestones
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From a small team of engineers to one of India's most trusted
              lightning protection companies
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index + 1}
                variants={fadeUp}
                className="text-center"
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-2xl font-bold text-primary">
                      {milestone.year.slice(-2)}
                    </span>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                  )}
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">
                  {milestone.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {milestone.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-section-alt">
        <div className="container-max max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-8"
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              The Story
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground">
              Our Journey So Far
            </h2>
          </motion.div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
            >
              Founded in 2010, Aider started as a small team of electrical
              engineers passionate about solving one of nature's most
              destructive forces — lightning. What began as a consultancy firm
              quickly grew into a full-fledged manufacturer and installer of
              lightning protection systems.
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
            >
              Over the years, we have successfully completed 500+ projects
              across diverse industries including petrochemical, telecom,
              renewable energy, healthcare, and commercial real estate. Our team
              of certified engineers brings deep expertise in risk assessment,
              system design, and installation.
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              variants={fadeUp}
            >
              Today, Aider is recognized as one of India's most trusted
              lightning protection companies, serving clients across the nation
              with an unwavering commitment to quality and safety.
            </motion.p>
          </div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            variants={fadeUp}
            className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border"
          >
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-primary">
                500+
              </div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-primary">
                15+
              </div>
              <div className="text-sm text-muted-foreground">Years</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-primary">
                50+
              </div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
        <div className="container-max text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
              Partner with India's most trusted lightning protection company
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-background px-8 py-4 text-sm font-semibold text-foreground transition-all hover:opacity-90 hover:shadow-lg"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="/products"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary-foreground/30 px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
              >
                Explore Products
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
