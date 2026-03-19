import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "/assets/aider-logo.png";
import { RiFacebookFill, RiInstagramLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { MdChevronRight } from "react-icons/md";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/About" },
  {
    label: "Products",
    path: "/Products",
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
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-primary backdrop-blur-sm border-b border-border">
      <nav className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 lg:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Aider Logo"
            draggable="false"
            className="w-32 sm:w-40 lg:w-44"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks?.map((link) => (
            <li key={link.label} className="relative group">
              {!link.children ? (
                <Link
                  to={link.path}
                  className={`text-md relative group text-md font-medium text-white transition-all duration-700 group-hover:tracking-wider`}
                >
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px] bg-white transition-all duration-300
                    ${location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                  {link.label}
                </Link>
              ) : (
                <>
                  <Link
                    to={link.path}
                    className="group text-md relative group text-md font-medium text-white transition-all duration-700 group-hover:tracking-wide"
                  >
                    <span className="text-md font-medium cursor-pointer text-white flex items-end gap-3">
                      {link.label}
                      <IoIosArrowDown className="transition-transform duration-300 group-hover:rotate-180" />
                    </span>
                  </Link>
                  <div className="rounded-sm absolute top-full left-0 mt-2 w-44 bg-white border border-border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
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
                  <p className={`text-white font-bold `}>{mediaLinks?.icons}</p>
                </a>
              </li>
            ))}
          </ul>
          <Link
            to="/Contact"
            className="hidden lg:inline-flex items-center justify-center rounded-lg bg-white/95 px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:opacity-90"
          >
            Get a Quote
          </Link>
        </div>
        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}

      <div
        ref={menuRef}
        className={`relative z-50 lg:hidden overflow-hidden transition-all duration-500 ease-in-out
  ${open ? "max-h-[900px] opacity-100 border-t " : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col p-4 gap-1">
          {navLinks?.map((link) => (
            <li
              key={link.label}
              className="relative group bg-transparent text-white"
            >
              {!link.children ? (
                <Link
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="text-md text-md group-hover:tracking-wider relative group block px-4 py-3 rounded-lg text-md font-medium text-white transition-all duration-300"
                >
                  {link.label}

                  {/* Underline */}
                  <span
                    className={`absolute left-4 -bottom-1 h-[2px] bg-white transition-all duration-700 ${
                      location.pathname === link.path
                        ? "w-20"
                        : "w-0 group-hover:w-20"
                    }`}
                  />
                </Link>
              ) : (
                <div className="relative group py-2">
                  {/* Parent Link */}
                  <Link
                    to={link.path}
                    className="relative ml-3 flex items-center gap-5 text-md font-medium text-white transition-all duration-300 group-hover:tracking-wider"
                  >
                    {link.label}

                    {/* Underline for parent */}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
                        location.pathname === link.path
                          ? "w-20"
                          : "w-0 group-hover:w-20"
                      }`}
                    />
                  </Link>

                  {/* Children */}
                  <div>
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        className="px-4 pt-4 text-md text-white flex gap-3 items-end"
                      >
                        <MdChevronRight />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
          <div className="flex items-center my-2">
            {SocialMediaLinks?.map((mediaLinks: any) => (
              <li key={mediaLinks?.labels}>
                <a href={mediaLinks?.link} target="__blank">
                  <span
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:text-primary hover:bg-secondary text-white`}
                  >
                    {mediaLinks?.icons}
                  </span>
                </a>
              </li>
            ))}
          </div>
          <Link
            to="/Contact"
            className="inline-flex items-center justify-center rounded-lg bg-white hover:bg-gray-200 px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:opacity-90"
          >
            Get a Quote
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
