import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "/assets/aider-logo.png";
import { RiFacebookFill, RiInstagramLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/About" },
  {
    label: "Products",
    children: [
      { label: "All Products", path: "/Products" },
      { label: "Our Work", path: "/Work" },
    ],
  },
  { label: "Warranty", path: "/Warranty" },
  { label: "Dealership", path: "/Dealership" },
  { label: "Contact", path: "/Contact" },
];

const SocialMediaLinks = [
  {
    icons: <RiFacebookFill size={18} />,
    labels: "FaceBook",
    link: "",
    color: "hover:text-primary",
  },
  {
    icons: <RiInstagramLine size={18} />,
    labels: "Insta",
    link: "",
    color: "hover:text-primary",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 lg:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Aider Logo" className="w-32 sm:w-40 lg:w-44" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks?.map((link) => (
            <li key={link.label} className="relative group">
              {!link.children ? (
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <>
                  <span className="text-sm font-medium cursor-pointer text-muted-foreground group-hover:text-primary flex items-end gap-1">
                    {link.label} <IoIosArrowDown />
                  </span>

                  <div className="absolute top-full left-0 mt-2 w-44 bg-white border border-border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        className="block px-4 py-2 text-sm hover:bg-[#CCFCFF] hover:text-[#043448]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
        {/* Desktop nav */}
        <div className="flex justify-between items-center gap-7">
          <ul className="hidden lg:flex items-center gap-5">
            {SocialMediaLinks?.map((mediaLinks: any) => (
              <li key={mediaLinks?.labels}>
                <a href={mediaLinks?.link} target="__blank">
                  <p className={`text-black font-bold ${mediaLinks?.color}`}>
                    {mediaLinks?.icons}
                  </p>
                </a>
              </li>
            ))}
          </ul>
          <Link
            to="/Contact"
            className="hidden lg:inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            Get a Quote
          </Link>
        </div>
        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <ul className="flex flex-col p-4 gap-1">
            {navLinks?.map((link) => (
              <li
                key={link.label}
                className="relative bg-transparent hover:bg-secondary text-black hover:text-[#043448]"
              >
                {!link.children ? (
                  <Link
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-lg text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <div>
                    <p className="px-4 py-3 text-sm font-medium text-muted-foreground">
                      {link.label}
                    </p>

                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        onClick={() => setOpen(false)}
                        className="block px-8 py-2 text-sm text-black hover:text-[#043448]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
            <div className="flex items-center">
              {SocialMediaLinks?.map((mediaLinks: any) => (
                <li key={mediaLinks?.labels}>
                  <a href={mediaLinks?.link} target="__blank">
                    <span
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:text-primary hover:bg-secondary text-black ${mediaLinks?.color}`}
                    >
                      {mediaLinks?.icons}
                    </span>
                  </a>
                </li>
              ))}
            </div>
            <Link
              to="/Contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              Get a Quote
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
