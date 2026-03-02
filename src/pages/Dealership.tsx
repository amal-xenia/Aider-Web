import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

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
  hearAbout: z.string().trim().min(1, "Please select an option"),

  // Company Information
  companyName: z.string().trim().min(1, "Company name is required").max(100),
  companyEmail: z.string().trim().email("Invalid company email").max(255),
  businessType: z.string().trim().min(1, "Please select business type"),
  address: z.string().trim().min(1, "Address is required").max(300),
  city: z.string().trim().min(1, "City is required").max(100),
  state: z.string().trim().min(1, "State is required").max(100),
});

type DealerFormData = z.infer<typeof dealerSchema>;

const DealerApplication = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<DealerFormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DealerFormData>({
    resolver: zodResolver(dealerSchema),
  });

  const onSubmit = (data: DealerFormData) => {
    setFormData(data);
    setSubmitted(true);
    toast.success("Dealer application submitted successfully!");
  };

  const handleDownloadApplication = () => {
    if (!formData) return;

    // Generate application summary
    const content = `
========================================
     AIDER LIGHTNING PROTECTION SYSTEMS
        DEALER APPLICATION FORM
========================================

Application No: DA-${Date.now().toString().slice(-8)}
Date: ${new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" })}

PERSONAL INFORMATION
--------------------
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Contact Number: ${formData.contactNumber}
Pincode: ${formData.pincode}
How did you hear about us? ${formData.hearAbout}

COMPANY INFORMATION
-------------------
Company Name: ${formData.companyName}
Company Email: ${formData.companyEmail}
Type of Business: ${formData.businessType}
Business Address: ${formData.address}
City: ${formData.city}
State: ${formData.state}

========================================
APPLICATION STATUS: PENDING REVIEW
========================================

Our team will review your application and contact you within 2-3 business days.

For any queries, contact:
Email: dealer@aiderlps.com
Phone: +91 44 2345 6789

========================================
       Aider LPS - Protecting What Matters
========================================
    `;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Aider-Dealer-Application-${formData.companyName}.txt`;
    link.click();
    URL.revokeObjectURL(url);
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
      <Navbar />

      <section className="bg-section-alt section-padding">
        <div className="container-max text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            Partnership
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Become a Dealer
          </h1>
          <p className="text-muted-foreground">
            Join our network of successful dealers. Fill out the application
            form below. Our team will review your application and contact you
            within 2-3 business days.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-2xl mx-auto">
          {submitted && formData ? (
            <div className="bg-card rounded-2xl border border-border p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
                <svg
                  className="text-primary"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <h2 className="font-display text-2xl font-bold text-card-foreground mb-2">
                Application Submitted!
              </h2>
              <p className="text-muted-foreground mb-6">
                Thank you for your interest in becoming a dealer. Your
                application for <strong>{formData.companyName}</strong> has been
                received.
              </p>
              <button
                onClick={handleDownloadApplication}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary transition-all hover:opacity-90"
              >
                Download Application Summary
              </button>
            </div>
          ) : (
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
                    <select {...register("hearAbout")} className={inputClasses}>
                      <option value="">Select an option</option>
                      {hearAboutOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.hearAbout && (
                      <p className={errorClasses}>{errors.hearAbout.message}</p>
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
                      <p className={errorClasses}>
                        {errors.companyName.message}
                      </p>
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
                    <label className={labelClasses}>
                      Business Address <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      {...register("address")}
                      className={inputClasses}
                      rows={3}
                      placeholder="Full business address"
                    />
                    {errors.address && (
                      <p className={errorClasses}>{errors.address.message}</p>
                    )}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
              >
                Submit Application
              </button>

              <p className="text-xs text-muted-foreground text-center">
                Fields marked with <span className="text-destructive">*</span>{" "}
                are required
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DealerApplication;
