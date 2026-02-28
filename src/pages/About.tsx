import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Users, Award } from "lucide-react";

const About = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="bg-section-alt section-padding">
      <div className="container-max text-center max-w-3xl mx-auto">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">About Us</span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
          Your Trusted Partner in Lightning Safety
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Aider Lightning Protection Systems has been at the forefront of lightning safety
          solutions for over 15 years. We design, manufacture, supply, and install
          comprehensive protection systems that meet international standards.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-max grid lg:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <Target className="text-primary" size={20} />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground">Our Mission</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            To provide world-class lightning protection solutions that safeguard lives,
            structures, and equipment. We are committed to using the latest technology and
            highest quality materials to deliver systems that exceed international safety standards.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <Eye className="text-primary" size={20} />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground">Our Vision</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            To be recognized as the most trusted and innovative lightning protection company in
            Asia, setting benchmarks in safety, quality, and customer satisfaction while making
            advanced protection accessible to all industries.
          </p>
        </div>
      </div>
    </section>

    <section className="section-padding bg-section-alt">
      <div className="container-max">
        <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Award, title: "Quality First", desc: "Every product undergoes rigorous testing to meet IS/IEC 62305 and international standards." },
            { icon: Users, title: "Customer Focus", desc: "We tailor solutions to each client's unique requirements and provide ongoing support." },
            { icon: Target, title: "Innovation", desc: "Continuous R&D to bring the latest lightning protection technologies to our customers." },
            { icon: Eye, title: "Integrity", desc: "Transparent pricing, honest assessments, and reliable warranty commitments." },
          ].map((v) => (
            <div key={v.title} className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <v.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-display font-semibold text-card-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-max max-w-3xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">Our Story</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Founded in 2010, Aider started as a small team of electrical engineers passionate
            about solving one of nature's most destructive forces — lightning. What began as a
            consultancy firm quickly grew into a full-fledged manufacturer and installer of
            lightning protection systems.
          </p>
          <p>
            Over the years, we have successfully completed 500+ projects across diverse
            industries including petrochemical, telecom, renewable energy, healthcare, and
            commercial real estate. Our team of certified engineers brings deep expertise in
            risk assessment, system design, and installation.
          </p>
          <p>
            Today, Aider is recognized as one of India's most trusted lightning protection
            companies, serving clients across the nation with an unwavering commitment to
            quality and safety.
          </p>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
