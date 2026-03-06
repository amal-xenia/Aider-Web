import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import contactUs from "@/lib/json/contact.json";
import { useMutation } from "@tanstack/react-query";
import { ContactUs } from "@/lib/api";
import { useState } from "react";
import Spinner from "@/components/ui/spinner";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phoneNumber: z.string().trim().min(10, "Enter a valid phone number").max(15),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const iconMap: any = {
  Phone,
  Mail,
  MapPin,
};
const Contact = () => {
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const mutateContactUs = useMutation({
    onMutate: () => {
      setIsSubmit(true);
    },
    mutationFn: async (data) => {
      const response = await ContactUs(data);
      return response;
    },
    onSuccess: () => {
      navigate("/ThankYou");
      reset();
    },
    onSettled: () => {
      setIsSubmit(false);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    const formData = {
      name: data?.name,
      email: data?.email,
      phoneNumber: data?.phoneNumber,
      subject: data?.subject,
      message: data?.message,
    };
    mutateContactUs.mutate(formData);
  };

  const inputClasses =
    "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-[#104A62] focus:border-[#104A62] transition-colors";
  const labelClasses = "block text-sm font-medium text-foreground mb-1.5";
  const errorClasses = "text-xs text-destructive mt-1";

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
            Contact
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="text-muted-foreground"
          >
            Have a project that needs lightning protection? Reach out to our
            team for a free consultation.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info Cards */}
            <div className="space-y-5">
              {contactUs?.contactInfo?.map((item) => {
                const Icon = iconMap[item.icon];

                return (
                  <div
                    key={item.title}
                    className="bg-card rounded-xl border border-border p-5 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                      {Icon && <Icon className="text-primary" size={18} />}
                    </div>

                    <div>
                      <h3 className="font-display font-semibold text-card-foreground mb-1">
                        {item.title}
                      </h3>

                      {item.lines1.map((line) => (
                        <p key={line} className="text-sm text-muted-foreground">
                          {line}
                        </p>
                      ))}

                      {item?.lines2?.map((line2: any) => (
                        <div key={line2}>
                          <hr className="my-2" />
                          <p className="text-sm text-muted-foreground">
                            {line2}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-card rounded-2xl border border-border p-6 sm:p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClasses}>
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      {...register("name")}
                      className={inputClasses}
                      placeholder="Name"
                    />
                    {errors.name && (
                      <p className={errorClasses}>{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className={labelClasses}>
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className={inputClasses}
                      placeholder="Email"
                    />
                    {errors.email && (
                      <p className={errorClasses}>{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className={labelClasses}>
                      Phone <span className="text-red-600">*</span>
                    </label>
                    <input
                      {...register("phoneNumber")}
                      className={inputClasses}
                      placeholder="Phone Number"
                    />
                    {errors.phoneNumber && (
                      <p className={errorClasses}>
                        {errors.phoneNumber.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className={labelClasses}>
                      Subject <span className="text-red-600">*</span>
                    </label>
                    <input {...register("subject")} className={inputClasses} />
                    {errors.subject && (
                      <p className={errorClasses}>{errors.subject.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className={labelClasses}>
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    {...register("message")}
                    className={inputClasses}
                    rows={5}
                    placeholder="Tell us about your requirements..."
                  />
                  {errors.message && (
                    <p className={errorClasses}>{errors.message.message}</p>
                  )}
                </div>
                {/* <Link to="/ThankYou"> */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white text-foreground transition-all hover:opacity-90"
                >
                  {isSubmit ? (
                    <span className="flex flex-col items-center">
                      <Spinner />
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
                {/* </Link> */}
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="mt-14 rounded-2xl overflow-hidden border border-border h-[400px]">
            <iframe
              title="Aider LPS Location"
              src="https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1sKaizen+Star+Technologies+443/B,+Arathy+Centre,+Next+to+Canara+Bank,+Kureekkad,+Tripunithura,+Ernakulam"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
