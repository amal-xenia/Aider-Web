import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const EnquiryPopUp = ({
  title = "Need Lightning Protection for Your Project?",
  description = "Get a free consultation and customized quote from our expert team.",
}: CTASectionProps) => {
  return (
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
            {title}
          </h2>

          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/Contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-background px-8 py-4 text-sm font-semibold text-foreground transition-all hover:opacity-90 hover:shadow-lg"
            >
              Contact Us Today <ArrowRight size={16} />
            </Link>

            <Link
              to="/Warranty"
              className="inline-flex items-center justify-center rounded-lg border-2 border-primary-foreground/30 px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
            >
              Register Warranty
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnquiryPopUp;
