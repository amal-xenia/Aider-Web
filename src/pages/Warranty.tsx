import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const warrantySchema = z.object({
  customerName: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(15),
  companyName: z.string().trim().max(100).optional(),
  productCode: z.string().trim().min(1, "Product code is required").max(50),
  productName: z.string().trim().min(1, "Product name is required").max(100),
  installationDate: z.string().min(1, "Installation date is required"),
  installationAddress: z.string().trim().min(1, "Address is required").max(300),
  invoiceNumber: z.string().trim().min(1, "Invoice number is required").max(50),
  remarks: z.string().trim().max(500).optional(),
});

type WarrantyFormData = z.infer<typeof warrantySchema>;

const Warranty = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<WarrantyFormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WarrantyFormData>({
    resolver: zodResolver(warrantySchema),
  });

  const onSubmit = (data: WarrantyFormData) => {
    setFormData(data);
    setSubmitted(true);
    toast.success("Warranty registered successfully!");
  };

  const handleDownloadPDF = () => {
    if (!formData) return;

    // Generate a text-based warranty certificate
    const content = `
========================================
     AIDER LIGHTNING PROTECTION SYSTEMS
        WARRANTY REGISTRATION CERTIFICATE
========================================

Certificate No: WC-${Date.now().toString().slice(-8)}
Date: ${new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" })}

CUSTOMER DETAILS
-----------------
Name: ${formData.customerName}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.companyName || "N/A"}

PRODUCT DETAILS
----------------
Product Name: ${formData.productName}
Product Code: ${formData.productCode}
Invoice Number: ${formData.invoiceNumber}
Installation Date: ${formData.installationDate}

INSTALLATION ADDRESS
---------------------
${formData.installationAddress}

REMARKS
--------
${formData.remarks || "None"}

========================================
WARRANTY TERMS & CONDITIONS
========================================
1. This warranty covers manufacturing defects only.
2. Warranty period is as specified for the product.
3. Installation must be performed by certified personnel.
4. Warranty is non-transferable.
5. Regular maintenance is required to keep warranty valid.
6. Damage due to misuse or natural calamities is not covered.

For support, contact:
Email: warranty@aiderlps.com
Phone: +91 44 2345 6789

========================================
       Aider LPS - Protecting What Matters
========================================
    `;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Aider-Warranty-Certificate-${formData.productCode}.txt`;
    link.click();
    URL.revokeObjectURL(url);
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
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">Warranty</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Warranty Registration
          </h1>
          <p className="text-muted-foreground">
            Register your Aider product warranty. A warranty certificate will be available for download upon successful registration.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-2xl mx-auto">
          {submitted && formData ? (
            <div className="bg-card rounded-2xl border border-border p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
                <svg className="text-primary" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <h2 className="font-display text-2xl font-bold text-card-foreground mb-2">Registration Successful!</h2>
              <p className="text-muted-foreground mb-6">
                Your warranty for <strong>{formData.productName}</strong> (Code: {formData.productCode}) has been registered.
              </p>
              <button
                onClick={handleDownloadPDF}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
              >
                Download Warranty Certificate
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="bg-card rounded-2xl border border-border p-6 sm:p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClasses}>Full Name *</label>
                  <input {...register("customerName")} className={inputClasses} placeholder="John Doe" />
                  {errors.customerName && <p className={errorClasses}>{errors.customerName.message}</p>}
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
                  <label className={labelClasses}>Company Name</label>
                  <input {...register("companyName")} className={inputClasses} placeholder="Optional" />
                </div>
              </div>

              <hr className="border-border" />

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClasses}>Product Code *</label>
                  <input {...register("productCode")} className={inputClasses} placeholder="e.g. AIDER-ESE-001" />
                  {errors.productCode && <p className={errorClasses}>{errors.productCode.message}</p>}
                </div>
                <div>
                  <label className={labelClasses}>Product Name *</label>
                  <input {...register("productName")} className={inputClasses} placeholder="e.g. ESE Lightning Arrester" />
                  {errors.productName && <p className={errorClasses}>{errors.productName.message}</p>}
                </div>
                <div>
                  <label className={labelClasses}>Installation Date *</label>
                  <input {...register("installationDate")} type="date" className={inputClasses} />
                  {errors.installationDate && <p className={errorClasses}>{errors.installationDate.message}</p>}
                </div>
                <div>
                  <label className={labelClasses}>Invoice Number *</label>
                  <input {...register("invoiceNumber")} className={inputClasses} placeholder="e.g. INV-2024-0001" />
                  {errors.invoiceNumber && <p className={errorClasses}>{errors.invoiceNumber.message}</p>}
                </div>
              </div>

              <div>
                <label className={labelClasses}>Installation Address *</label>
                <textarea {...register("installationAddress")} className={inputClasses} rows={3} placeholder="Full address of installation site" />
                {errors.installationAddress && <p className={errorClasses}>{errors.installationAddress.message}</p>}
              </div>

              <div>
                <label className={labelClasses}>Remarks</label>
                <textarea {...register("remarks")} className={inputClasses} rows={2} placeholder="Any additional notes (optional)" />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
              >
                Register Warranty
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Warranty;
