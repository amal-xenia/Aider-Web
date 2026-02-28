import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Download, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="section-padding text-center container-max">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Go back to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleDownloadBrochure = () => {
    // Simulate brochure download
    const link = document.createElement("a");
    link.href = "#";
    link.download = `${product.name}-Brochure.pdf`;
    alert("Brochure download will be available soon. Contact us for product documentation.");
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="section-padding">
        <div className="container-max">
          <Link to="/#products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-muted rounded-2xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover aspect-square"
              />
            </div>

            <div>
              <span className="inline-block text-xs font-medium text-badge-text bg-badge-bg px-3 py-1 rounded-full mb-4">
                {product.category}
              </span>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {product.brochureAvailable && (
                <button
                  onClick={handleDownloadBrochure}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 mb-10"
                >
                  <Download size={18} /> Download Brochure
                </button>
              )}

              <div className="mb-8">
                <h2 className="font-display text-lg font-semibold text-foreground mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
                      <span className="text-foreground text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Specifications Table */}
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Technical Specifications</h2>
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <table className="w-full">
                <tbody>
                  {product.specifications.map((spec, i) => (
                    <tr key={spec.label} className={i % 2 === 0 ? "bg-section-alt" : ""}>
                      <td className="px-6 py-4 text-sm font-medium text-foreground w-1/3">{spec.label}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-accent rounded-2xl p-8 sm:p-12 text-center">
            <h3 className="font-display text-2xl font-bold text-accent-foreground mb-3">
              Interested in this product?
            </h3>
            <p className="text-muted-foreground mb-6">Get in touch for pricing, bulk orders, or technical consultation.</p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
