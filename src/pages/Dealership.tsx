import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { DealerRegistration } from "@/lib/api";
import Spinner from "@/components/ui/spinner";

const dealerSchema = z.object({
  // Personal Information
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  contactNumber: z
    .string()
    .trim()
    .min(10, "Enter a valid contact number")
    .max(15),
  email: z.string().trim().email("Invalid email").max(255),
  pincode: z.string().trim().min(1, "Pincode is required").max(10),
  hearAboutUs: z.string().trim().min(1, "Please select an option"),

  // Company Information
  companyName: z.string().trim().min(1, "Company name is required").max(100),
  companyEmail: z.string().trim().email("Invalid company email").max(255),
  businessType: z.string().trim().min(1, "Please select business type"),
  businessAddress: z.string().trim().min(1, "Address is required").max(300),
  website: z.string().trim().optional(),
});

type DealerFormData = z.infer<typeof dealerSchema>;

const DealerApplication = () => {
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DealerFormData>({
    resolver: zodResolver(dealerSchema),
  });

  const mutateDealerRegistration = useMutation({
    onMutate: () => {
      setIsSubmit(true);
    },
    mutationFn: async (data) => {
      const response = await DealerRegistration(data);
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

  const onSubmit = (data: DealerFormData) => {
    const formData = {
      firstName: data?.firstName,
      lastName: data?.lastName,
      contactNumber: data?.contactNumber,
      email: data?.email,
      pincode: data?.pincode,
      hearAboutUs: data?.hearAboutUs,
      companyName: data?.companyName,
      companyEmail: data?.companyEmail,
      businessType: data?.businessType,
      businessAddress: data?.businessAddress,
      website: data?.website,
    };
    mutateDealerRegistration?.mutate(formData);
  };

  const inputClasses =
    "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-[#104A62] focus:border-[#104A62] transition-colors";
  const labelClasses = "block text-sm font-medium text-foreground mb-1.5";
  const errorClasses = "text-xs text-destructive mt-1";

  const hearAboutOptions = [
    "Google Search",
    "Social Media",
    "Friend/Colleague Referral",
    "Newspaper Ad",
    "Trade Show",
    "Email Newsletter",
    "Other",
  ];

  const businessTypes = [
    "Retail Store",
    "Wholesale Distributor",
    "E-commerce",
    "Franchise",
    "Other",
  ];

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
            Partnership
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4"
          >
            Become a Dealer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="text-muted-foreground"
          >
            Join our network of successful dealers. Fill out the application
            form below. Our team will review your application and contact you
            within 2-3 business days.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-card rounded-2xl border border-border p-6 sm:p-8 space-y-6"
          >
            {/* Personal Information Section */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Personal Information
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClasses}>
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    {...register("firstName")}
                    className={inputClasses}
                    placeholder="First Name"
                  />
                  {errors.firstName && (
                    <p className={errorClasses}>{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <label className={labelClasses}>
                    Last Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    {...register("lastName")}
                    className={inputClasses}
                    placeholder="Last Name"
                  />
                  {errors.lastName && (
                    <p className={errorClasses}>{errors.lastName.message}</p>
                  )}
                </div>
                <div>
                  <label className={labelClasses}>
                    Contact Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    {...register("contactNumber")}
                    className={inputClasses}
                    placeholder="Contact Number"
                  />
                  {errors.contactNumber && (
                    <p className={errorClasses}>
                      {errors.contactNumber.message}
                    </p>
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
                    Pincode <span className="text-red-600">*</span>
                  </label>
                  <input
                    {...register("pincode")}
                    className={inputClasses}
                    placeholder="Pincode"
                  />
                  {errors.pincode && (
                    <p className={errorClasses}>{errors.pincode.message}</p>
                  )}
                </div>
                <div>
                  <label className={labelClasses}>
                    How did you hear about us?{" "}
                    <span className="text-red-600">*</span>
                  </label>
                  <select {...register("hearAboutUs")} className={inputClasses}>
                    <option value="">Select an option</option>
                    {hearAboutOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.hearAboutUs && (
                    <p className={errorClasses}>{errors.hearAboutUs.message}</p>
                  )}
                </div>
              </div>
            </div>

            <hr className="border-border" />

            {/* Company Information Section */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Company Information
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClasses}>
                    Company Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    {...register("companyName")}
                    className={inputClasses}
                    placeholder="Your Company Ltd."
                  />
                  {errors.companyName && (
                    <p className={errorClasses}>{errors.companyName.message}</p>
                  )}
                </div>
                <div>
                  <label className={labelClasses}>
                    Company Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    {...register("companyEmail")}
                    type="email"
                    className={inputClasses}
                    placeholder="contact@company.com"
                  />
                  {errors.companyEmail && (
                    <p className={errorClasses}>
                      {errors.companyEmail.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className={labelClasses}>
                    Type of Business <span className="text-red-600">*</span>
                  </label>
                  <select
                    {...register("businessType")}
                    className={inputClasses}
                  >
                    <option value="">Select business type</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.businessType && (
                    <p className={errorClasses}>
                      {errors.businessType.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className={labelClasses}>Website</label>
                  <input
                    {...register("website")}
                    type="text"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>
                    Business Address <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    {...register("businessAddress")}
                    className={inputClasses}
                    rows={3}
                    placeholder="Full business address"
                  />
                  {errors.businessAddress && (
                    <p className={errorClasses}>
                      {errors.businessAddress.message}
                    </p>
                  )}
                </div>
              </div>
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
                "Send Application"
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default DealerApplication;
