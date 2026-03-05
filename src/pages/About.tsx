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
import EnquiryPopUp from "@/components/content/EnquiryPopup/EnquiryPopup";
import about from "../lib/json/about.json";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};
const iconMap = {
  Users,
  Award,
  Shield,
  Zap,
  Target,
  Eye,
};

const About = () => {
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
            className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-6"
          >
            Trusted Lightning Safety Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="text-muted-foreground text-md sm:text-lg leading-relaxed"
          >
            Aider Lightning Protection Systems has been at the forefront of
            lightning safety solutions for over 20 years.
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
            <p className="text-muted-foreground leading-relaxed text-justify text-sm sm:text-base">
              Our mission is to provide reliable, high-performance lightning
              protection and grounding solutions that protect lives, property,
              and essential infrastructure.
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
            <p className="text-muted-foreground leading-relaxed text-justify text-sm sm:text-base">
              Our vision is to become a trusted leader in lightning protection,
              earthing, and grounding solutions by continuously improving our
              technology, expertise, and service quality.
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
            {about?.coreValues.map((value, index) => {
              const Icon = iconMap[value.icon as keyof typeof iconMap];
              return (
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
                    <Icon
                      className="text-primary group-hover:text-primary-foreground transition-colors"
                      size={22}
                    />
                  </div>
                  <h3 className="font-display font-semibold text-card-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </motion.div>
              );
            })}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {about?.milestones.map((milestone, index) => {
              console.log("index", index);
              return (
                <motion.div
                  key={milestone.id}
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
                    {(index + 1) % 4 !== 0 &&
                      index < about?.milestones.length - 1 && (
                        <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                      )}
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {milestone.title}
                  </h3>
                  <p className="text-xs text-muted-foreground text-center">
                    {milestone.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-4 sm:px-6 pb-16">
        <div className="container-max max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-6"
          >
            {/*  <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              The Story
            </span> */}
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
              Who We Are
            </h2>
          </motion.div>

          <div className="space-y-4 text-muted-foreground leading-relaxed text-justify text-sm sm:text-base">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
            >
              We are a team of lightning protection specialists with over 20
              years of real-world experience in protecting buildings from
              lightning damage. AIDER is a leading manufacturer of Early
              Streamer Emission (ESE) Lightning Protection Systems and allied
              earthing products in India. Company offering the safest and most
              effective Heavy Duty Lightning Terminal for lightning protection.
              It conducted direct strikes and side flash current away from
              building to earth (Ground) and it will send streamers upward at
              varying distances. It is a metallic and fully non electronic
              device with 100 % recyclable and no electromagnetic interference.
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
            >
              At AideR Lightning Protection, we work closely with homeowners,
              builders, contractors, and facility managers to design and install
              reliable lightning safety systems. Our focus is simple provides
              the right protection for the right structure without
              overcomplicating the process.
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              variants={fadeUp}
            >
              We understand that lightning protection is not something most
              people think about daily. But when storms hit, it becomes one of
              the most important safety systems in a building. That’s why we
              take every project seriously, whether it’s a small residential
              property or a large industrial facility.
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
              variants={fadeUp}
            >
              Our team handles everything from site assessment and system design
              to installation and long-term maintenance. We believe in doing the
              job properly the first time using quality materials, proven
              technology, and safe installation practices.
            </motion.p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <EnquiryPopUp />
    </div>
  );
};

export default About;
