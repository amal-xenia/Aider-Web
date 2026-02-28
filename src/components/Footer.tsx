import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Zap } from "lucide-react";
import logo from "@/assets/aider-logo.png";

const Footer = forwardRef<HTMLElement>((_, ref) => (
  <footer ref={ref} className="bg-foreground text-background">
    <div className="container-max section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Aider" className="h-10 w-10 brightness-200" />
            <span className="font-display font-bold text-lg">AIDER LPS</span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed mb-4">
            Leading manufacturer & supplier of Lightning Protection Systems. Protecting lives,
            structures, and equipment since 2010.
          </p>
          <div className="flex items-center gap-2 text-primary">
            <Zap size={16} />
            <span className="text-xs font-semibold tracking-wider uppercase">Trusted Protection</span>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/" className="hover:opacity-100 transition-opacity">Home</Link></li>
            <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
            <li><Link to="/services" className="hover:opacity-100 transition-opacity">Services</Link></li>
            <li><Link to="/products" className="hover:opacity-100 transition-opacity">Products</Link></li>
            <li><Link to="/gallery" className="hover:opacity-100 transition-opacity">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/warranty" className="hover:opacity-100 transition-opacity">Warranty Registration</Link></li>
            <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact Us</Link></li>
            <li><span>Annual Maintenance</span></li>
            <li><span>Technical Support</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>123 Industrial Area, Phase II, Chennai, Tamil Nadu 600001, India</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0" />
              <span>+91 44 2345 6789</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0" />
              <span>info@aiderlps.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/20 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm opacity-50">
        <span>© {new Date().getFullYear()} Aider Lightning Protection Systems. All rights reserved.</span>
        <span>IS/IEC 62305 Certified Solutions</span>
      </div>
    </div>
  </footer>
));

Footer.displayName = "Footer";

export default Footer;
