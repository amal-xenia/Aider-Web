import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Zap } from "lucide-react";
import logo from "/assets/aider-logo.png";
import footerLogo from "/assets/Kaizen-Logo.png";

const Footer = forwardRef<HTMLElement>((_, ref) => (
  <footer ref={ref} className="bg-foreground text-background">
    <div className="container-max section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={footerLogo}
                alt="Aider Logo"
                className="w-32 sm:w-40 lg:w-44"
              />
            </Link>
          </div>
          <p className="text-sm opacity-70 leading-relaxed mb-4">
            Leading manufacturer & supplier of Lightning Protection Systems.
            Protecting lives, structures, and equipment since 2010.
          </p>
          <div className="flex items-center gap-2 text-primary">
            <Zap size={16} />
            <span className="text-xs font-semibold tracking-wider uppercase">
              Trusted Protection
            </span>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li>
              <Link to="/" className="hover:opacity-100 transition-opacity">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="hover:opacity-100 transition-opacity"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/Products"
                className="hover:opacity-100 transition-opacity"
              >
                Products
              </Link>
            </li>
            <li>
              <Link to="/Work" className="hover:opacity-100 transition-opacity">
                Our Work
              </Link>
            </li>
            <li>
              <Link to="/Faq" className="hover:opacity-100 transition-opacity">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li>
              <Link
                to="/Warranty"
                className="hover:opacity-100 transition-opacity"
              >
                Warranty Registration
              </Link>
            </li>
            <li>
              <Link
                to="/Dealership"
                className="hover:opacity-100 transition-opacity"
              >
                Dealership
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="hover:opacity-100 transition-opacity"
              >
                Contact Us
              </Link>
            </li>
            <li></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>
                Kaizen Star Technologies 443/B, Arathy centre Next to Canara
                Bank, Kureekkad. Tripunithura, Ernakulam
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0" />
              <span>+91 9947846444 | +91 9072846444</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0" />
              <span> kaizenstarindia@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/20 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm opacity-50">
        <span>
          © {new Date().getFullYear()} Aider Lightning Protection Systems. All
          rights reserved.
        </span>

        {/* <Link
          to="https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID"
          target="_blank"
          className="btn-primary"
        > */}
        <span>⭐ Leave a Google Review </span>
        {/* </Link> */}
      </div>
    </div>
  </footer>
));

Footer.displayName = "Footer";

export default Footer;
