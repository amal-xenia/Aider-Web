import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryItems = [
  { src: gallery1, title: "Commercial Building LPS Installation", category: "Installation" },
  { src: gallery2, title: "Industrial Chimney Protection", category: "Industrial" },
  { src: gallery3, title: "Earthing Pit Construction", category: "Earthing" },
  { src: gallery4, title: "Telecom Tower Protection", category: "Telecom" },
  { src: gallery5, title: "Solar Farm Lightning Masts", category: "Renewable Energy" },
  { src: gallery6, title: "Hospital LPS System", category: "Healthcare" },
];

const Gallery = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="bg-section-alt section-padding">
      <div className="container-max text-center max-w-2xl mx-auto">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">Gallery</span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Work</h1>
        <p className="text-muted-foreground">
          Browse through our completed projects across various industries and locations.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div key={item.title} className="group relative rounded-xl overflow-hidden bg-muted aspect-[4/3]">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors duration-300 flex items-end">
                <div className="p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-xs font-medium text-primary-foreground/80">{item.category}</span>
                  <h3 className="font-display font-semibold text-primary-foreground">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Gallery;
