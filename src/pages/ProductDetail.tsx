import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Download, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import EnquiryPopUp from "@/components/content/EnquiryPopup/EnquiryPopup";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products?.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="section-padding text-center container-max">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">
            Product Not Found
          </h1>
          <Link to="/" className="text-primary hover:underline">
            Go back to Home
          </Link>
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
    alert(
      "Brochure download will be available soon. Contact us for product documentation.",
    );
  };

  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <div className="container-max">
          <Link
            to="/Products"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
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
              <h1 className="font-display text-xl md:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <h3 className="font-display text-md font-bold text-foreground my-4">
                {product.subname}
              </h3>
              <div
                className="text-sm sm: text-muted-foreground text-justify leading-relaxed mb-6 space-y-4"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />

              <div className="pb-6 text-muted-foreground sm:text-justify sm:leading-relaxed">
                {product.Warranty && (
                  <span className="flex flex-row items-center leading-relaxed gap-2 text-sm sm:">
                    Warranty :
                    <p
                      dangerouslySetInnerHTML={{
                        __html: product.Warranty,
                      }}
                      className="text-sm sm:"
                    />
                  </span>
                )}
                {product.Protection && (
                  <span className="flex flex-row items-center leading-relaxed gap-2 text-sm sm:">
                    Standard Protection :
                    <p
                      dangerouslySetInnerHTML={{
                        __html: product.Protection,
                      }}
                      className="text-sm sm:"
                    />
                  </span>
                )}
              </div>

              {product.brochureAvailable && (
                <button
                  onClick={handleDownloadBrochure}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 mb-5 md:mb-10"
                >
                  <Download size={18} /> Download Brochure
                </button>
              )}
              {product.features?.length > 0 && (
                <div className="mb-5 md:mb-8">
                  <h2 className="font-display text-lg font-semibold text-foreground mb-4">
                    Key Features
                  </h2>
                  <ul className="space-y-3">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle2
                          className="text-primary shrink-0 mt-0.5"
                          size={18}
                        />
                        <span
                          className="text-foreground text-sm"
                          dangerouslySetInnerHTML={{
                            __html: f,
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Specifications Table */}
          {product.specifications?.length > 0 && (
            <div className="mt-8 md:mt-16">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Technical Specifications
              </h2>
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {product.specifications.map((spec, i) => (
                      <tr
                        key={spec.label}
                        className={i % 2 === 0 ? "bg-section-alt" : ""}
                      >
                        <td className="px-6 py-4 text-sm font-medium text-foreground w-1/3">
                          {spec.label}
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {product?.customtext && (
            <h3 className="mt-2 text-sm sm:">{product?.customtext}</h3>
          )}
          {product.comparison?.rows?.length > 0 && (
            <div className="mt-8 md:mt-16 overflow-auto sm:">
              <h2 className="font-display text-lg sm:text-2xl font-bold text-foreground mb-6">
                {product?.comparison?.heading}
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border border-border rounded-xl overflow-hidden">
                  <thead className="bg-section-alt">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs sm:text-sm font-semibold">
                        {product.comparison.headers.parameter}
                      </th>
                      <th className="px-6 py-4 text-left text-xs sm:text-sm font-semibold">
                        {product.comparison.headers.gec}
                      </th>
                      <th className="px-6 py-4 text-left text-xs sm:text-sm font-semibold">
                        {product.comparison.headers.conventional}
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {product.comparison.rows.map((row, i) => (
                      <tr
                        key={row.parameter}
                        className={i % 2 === 0 ? "bg-section-alt/40" : ""}
                      >
                        <td className="px-6 py-4 text-sm font-medium text-foreground">
                          {row.parameter}
                        </td>

                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {row.gec}
                        </td>

                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {row.conventional}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {product.subTexts && (
            <div>
              <h3 className="font-display text-lg font-bold text-foreground my-6">
                {product.subTexts?.subHeading}
              </h3>
              <p className="text-foreground text-sm sm: sm:text-justify leading-relaxed mb-6 space-y-4">
                {product.subTexts?.subDescription1}
              </p>
              <ul className="mx-10 text-foreground text-sm sm: sm:text-justify leading-relaxed">
                {product.subTexts?.points?.map((points: any) => (
                  <li className="list-disc">{points?.point}</li>
                ))}
              </ul>
              <p
                className="text-foreground text-sm sm: text-justify leading-relaxed my-6 space-y-4"
                dangerouslySetInnerHTML={{
                  __html: product?.subTexts?.subDescription2,
                }}
              />
            </div>
          )}
          {product?.benefits && (
            <div className="my-8">
              <h3 className="text-primary font-bold">Benefits</h3>
              <ul className="mx-10">
                {product?.benefits?.map((benefits: any) => (
                  <li
                    className="list-disc text-sm"
                    dangerouslySetInnerHTML={{
                      __html: benefits?.point,
                    }}
                  />
                ))}
              </ul>
            </div>
          )}
          {product?.areas && (
            <div className="my-8">
              <h3 className="text-primary font-bold">Applicable areas</h3>
              <ul className="mx-10">
                {product?.areas?.map((areas: any) => (
                  <li className="list-disc text-sm">{areas?.area}</li>
                ))}
              </ul>
            </div>
          )}
          {product?.LevelImage && (
            <div>
              <img src={product?.LevelImage} className="w-auto mx-auto py-3" />
            </div>
          )}

          {/* CTA */}
          <EnquiryPopUp />
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
