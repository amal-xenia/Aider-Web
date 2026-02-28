import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Zap, Settings, Award, CheckCircle2, ArrowRight, ClipboardCheck, Wrench, Radio, HardHat } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Shield,
    title: "Lightning Risk Assessment",
    description: "Comprehensive site surveys and risk analysis as per IS/IEC 62305 to determine the optimal level of protection for your structure.",
    details: ["Site inspection & soil testing", "Risk calculation per IEC 62305-2", "Protection level recommendation", "Detailed assessment report"],
  },
  {
    icon: Zap,
    title: "LPS Design & Installation",
    description: "End-to-end design, supply, and installation of external and internal lightning protection systems for all types of structures.",
    details: ["Custom system design", "Material supply & logistics", "Professional installation", "Compliance documentation"],
  },
  {
    icon: Settings,
    title: "Earthing & Grounding Solutions",
    description: "Complete earthing solutions including soil resistivity testing, electrode installation, and earth pit maintenance.",
    details: ["Soil resistivity measurement", "Electrode installation", "Earth pit construction", "Resistance testing & certification"],
  },
  {
    icon: Award,
    title: "Annual Maintenance Contracts",
    description: "Periodic inspection, testing, and maintenance of lightning protection systems to ensure ongoing compliance and safety.",
    details: ["Scheduled inspections", "Earth resistance testing", "Component replacement", "Compliance certificates"],
  },
  {
    icon: Radio,
    title: "Surge Protection Systems",
    description: "Design and installation of comprehensive surge protection for electrical and electronic systems against transient overvoltages.",
    details: ["SPD selection & sizing", "Panel integration", "Coordination study", "Performance verification"],
  },
  {
    icon: ClipboardCheck,
    title: "Compliance & Certification",
    description: "End-to-end support for achieving and maintaining compliance with national and international lightning protection standards.",
    details: ["Standards gap analysis", "System auditing", "Documentation support", "Regulatory liaison"],
  },
];

const process_steps = [
  { step: "01", icon: ClipboardCheck, title: "Site Assessment", desc: "Thorough evaluation of your site, structure, and risk factors." },
  { step: "02", icon: HardHat, title: "System Design", desc: "Custom LPS design tailored to your structure and protection level." },
  { step: "03", icon: Wrench, title: "Installation", desc: "Professional installation by certified engineers and technicians." },
  { step: "04", icon: Shield, title: "Testing & Handover", desc: "Comprehensive testing, documentation, and system handover." },
];

const Services = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="bg-primary section-padding">
      <div className="container-max text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block text-xs font-semibold tracking-widest uppercase text-primary-foreground/70 mb-3"
        >
          What We Do
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary-foreground/80 max-w-2xl mx-auto text-lg"
        >
          From risk assessment to installation and maintenance — complete lightning protection solutions under one roof.
        </motion.p>
      </div>
    </section>

    {/* Services Grid */}
    <section className="section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold text-card-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.details.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 size={14} className="text-primary shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="section-padding bg-section-alt">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">How We Work</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Process</h2>
          <p className="text-muted-foreground">A systematic approach to delivering reliable lightning protection systems.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process_steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="relative bg-card rounded-xl p-6 border border-border text-center"
            >
              <div className="font-display text-4xl font-bold text-primary/15 mb-2">{step.step}</div>
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mx-auto mb-3">
                <step.icon className="text-primary" size={18} />
              </div>
              <h3 className="font-display font-semibold text-card-foreground mb-1">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
              {i < process_steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-border" size={20} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary section-padding">
      <div className="container-max text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
          Need a Custom Lightning Protection Solution?
        </h2>
        <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
          Our experts will assess your requirements and design a solution tailored to your needs.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-lg bg-background px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:opacity-90"
        >
          Request a Consultation
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);

export default Services;
