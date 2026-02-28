import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(15),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  { icon: MapPin, title: "Visit Us", lines: ["123 Industrial Area, Phase II", "Chennai, Tamil Nadu 600001", "India"] },
  { icon: Phone, title: "Call Us", lines: ["+91 44 2345 6789", "+91 98765 43210"] },
  { icon: Mail, title: "Email Us", lines: ["info@aiderlps.com", "sales@aiderlps.com"] },
  { icon: Clock, title: "Working Hours", lines: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"] },
];

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    toast.success("Thank you! We'll get back to you within 24 hours.");
    reset();
  };

  const inputClasses =
    "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors";
  const labelClasses = "block text-sm font-medium text-foreground mb-1.5";
  const errorClasses = "text-xs text-destructive mt-1";

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-section-alt section-padding">
        <div className="container-max text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">Contact</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">Get In Touch</h1>
          <p className="text-muted-foreground">
            Have a project that needs lightning protection? Reach out to our team for a free consultation.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info Cards */}
            <div className="space-y-5">
              {contactInfo.map((item) => (
                <div key={item.title} className="bg-card rounded-xl border border-border p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <item.icon className="text-primary" size={18} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-card-foreground mb-1">{item.title}</h3>
                    {item.lines.map((line) => (
                      <p key={line} className="text-sm text-muted-foreground">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit(onSubmit)} className="bg-card rounded-2xl border border-border p-6 sm:p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClasses}>Full Name *</label>
                    <input {...register("name")} className={inputClasses} placeholder="John Doe" />
                    {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className={labelClasses}>Email *</label>
                    <input {...register("email")} type="email" className={inputClasses} placeholder="john@example.com" />
                    {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className={labelClasses}>Phone *</label>
                    <input {...register("phone")} className={inputClasses} placeholder="+91 98765 43210" />
                    {errors.phone && <p className={errorClasses}>{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className={labelClasses}>Subject *</label>
                    <input {...register("subject")} className={inputClasses} placeholder="e.g. LPS for new factory" />
                    {errors.subject && <p className={errorClasses}>{errors.subject.message}</p>}
                  </div>
                </div>
                <div>
                  <label className={labelClasses}>Message *</label>
                  <textarea {...register("message")} className={inputClasses} rows={5} placeholder="Tell us about your requirements..." />
                  {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="mt-14 rounded-2xl overflow-hidden border border-border h-[400px]">
            <iframe
              title="Aider LPS Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4927099691464!2d80.2327!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzU3LjciTiA4MMKwMTMnNTcuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
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

      <Footer />
    </div>
  );
};

export default Contact;
