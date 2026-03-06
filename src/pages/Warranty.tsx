import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { WarrantyRegistration } from "@/lib/api";
import { useNavigate } from "react-router-dom";
import Spinner from "@/components/ui/spinner";

const warrantySchema = z.object({
  customerName: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phoneNumber: z.string().trim().min(10, "Enter a valid phone number").max(15),
  companyName: z.string().trim().max(100).optional(),
  productCode: z.string().trim().min(1, "Product code is required").max(50),
  productName: z.string().trim().min(1, "Product name is required").max(100),
  installationDate: z.string().min(1, "Installation date is required"),
  siteAddress: z.string().trim().min(1, "Address is required").max(300),
  suppliedThrough: z.string().trim().max(500).optional(),
  remarks: z.string().trim().max(500).optional(),
  pinCode: z.string().regex(/^[1-9][0-9]{5}$/, "Invalid PIN code"),
});

type WarrantyFormData = z.infer<typeof warrantySchema>;

const Warranty = () => {
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WarrantyFormData>({
    resolver: zodResolver(warrantySchema),
  });

  const mutateWarrantyRegistration = useMutation({
    onMutate: () => {
      setIsSubmit(true);
    },
    mutationFn: async (data) => {
      const response = await WarrantyRegistration(data);
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

  const onSubmit = (data: WarrantyFormData) => {
    const formData = {
      customerName: data?.customerName,
      email: data?.email,
      phoneNumber: data?.phoneNumber,
      companyName: data?.companyName,
      productCode: data?.productCode,
      productName: data?.productName,
      installationDate: data?.installationDate,
      siteAddress: data?.siteAddress,
      suppliedThrough: data?.suppliedThrough,
      // remarks: data?.remarks,
      pinCode: data?.pinCode,
    };
    mutateWarrantyRegistration?.mutate(formData);
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
            Warranty
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4"
          >
            Warranty Registration
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="text-muted-foreground"
          >
            Register your Aider product warranty. A warranty certificate will be
            available for download upon successful registration.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-card rounded-2xl border border-border p-6 sm:p-8 space-y-6"
          >
            <div className="grid sm:grid-cols-3 gap-5">
              <div>
                <label className={labelClasses}>
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  {...register("customerName")}
                  className={inputClasses}
                  placeholder="Name"
                />
                {errors.customerName && (
                  <p className={errorClasses}>{errors.customerName.message}</p>
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
                  <p className={errorClasses}>{errors.phoneNumber.message}</p>
                )}
              </div>
              <div>
                <label className={labelClasses}>
                  Pincode <span className="text-red-600">*</span>
                </label>
                <input
                  {...register("pinCode")}
                  className={inputClasses}
                  placeholder="Pincode"
                />
                {errors.pinCode && (
                  <p className={errorClasses}>{errors.pinCode.message}</p>
                )}
              </div>
              <div>
                <label className={labelClasses}>Company Name</label>
                <input
                  {...register("companyName")}
                  className={inputClasses}
                  placeholder="Company Name"
                />
              </div>
            </div>

            <hr className="border-border" />

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClasses}>
                  Product Code <span className="text-red-600">*</span>
                </label>
                <input
                  {...register("productCode")}
                  className={inputClasses}
                  placeholder="Product Code"
                />
                {errors.productCode && (
                  <p className={errorClasses}>{errors.productCode.message}</p>
                )}
              </div>
              <div>
                <label className={labelClasses}>
                  Product Name <span className="text-red-600">*</span>
                </label>
                <input
                  {...register("productName")}
                  className={inputClasses}
                  placeholder="Product Name"
                />
                {errors.productName && (
                  <p className={errorClasses}>{errors.productName.message}</p>
                )}
              </div>
              <div>
                <label className={labelClasses}>
                  Installation Date <span className="text-red-600">*</span>
                </label>
                <input
                  {...register("installationDate")}
                  type="date"
                  className={inputClasses}
                />
                {errors.installationDate && (
                  <p className={errorClasses}>
                    {errors.installationDate.message}
                  </p>
                )}
              </div>
              <div>
                <label className={labelClasses}>Supplied Through</label>
                <input
                  {...register("suppliedThrough")}
                  className={inputClasses}
                  placeholder="Dealer details"
                />
              </div>
            </div>

            <div>
              <label className={labelClasses}>
                Installation Address <span className="text-red-600">*</span>
              </label>
              <textarea
                {...register("siteAddress")}
                className={inputClasses}
                rows={3}
                placeholder="Full address of installation site"
              />
              {errors.siteAddress && (
                <p className={errorClasses}>{errors.siteAddress.message}</p>
              )}
            </div>

            <div>
              <label className={labelClasses}>Remarks</label>
              <textarea
                {...register("remarks")}
                className={inputClasses}
                rows={2}
                placeholder="Any additional notes (optional)"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white text-foreground transition-all hover:opacity-90"
            >
              {isSubmit ? (
                <span className="flex flex-col items-center">
                  <Spinner />
                </span>
              ) : (
                "Register Warranty"
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Warranty;
