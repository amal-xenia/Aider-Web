import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = forwardRef<HTMLAnchorElement, ProductCardProps>(({ product }, ref) => (
  <Link
    ref={ref}
    to={`/product/${product.id}`}
    className="group bg-card rounded-xl border border-border overflow-hidden transition-all hover:shadow-lg hover:border-primary/30"
  >
    <div className="aspect-square overflow-hidden bg-muted">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>
    <div className="p-5">
      <span className="inline-block text-xs font-medium text-badge-text bg-badge-bg px-2.5 py-1 rounded-full mb-3">
        {product.category}
      </span>
      <h3 className="font-display font-semibold text-card-foreground mb-2">{product.name}</h3>
      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{product.shortDescription}</p>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
        View Details <ArrowRight size={14} />
      </span>
    </div>
  </Link>
));

ProductCard.displayName = "ProductCard";

export default ProductCard;
