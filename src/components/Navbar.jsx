import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, GraduationCap } from "lucide-react";
import { COLLEGE, NAV_LINKS } from "../data/siteData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Bar */}
      <div className="bg-navy-950 text-white text-xs py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Phone size={11} className="text-gold-400" />
              {COLLEGE.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={11} className="text-gold-400" />
              {COLLEGE.email}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gold-400">Affiliated to: {COLLEGE.affiliatedTo}</span>
            <span className="text-gray-400">|</span>
            <span>{COLLEGE.approvedBy}</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${scrolled ? "bg-white shadow-lg" : "bg-navy-900"}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${scrolled ? "bg-navy-800 text-white" : "bg-gold-500 text-navy-900"}`}>
                <GraduationCap size={22} />
              </div>
              <div>
                <div className={`font-display font-bold text-sm leading-tight ${scrolled ? "text-navy-900" : "text-white"}`}>
                  {COLLEGE.shortName}
                </div>
                <div className={`text-xs hidden sm:block ${scrolled ? "text-gray-500" : "text-navy-200"}`}>
                  Shivansh Institute
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
              {NAV_LINKS.map((link) => (
                link.children ? (
                  <div key={link.label} className="relative">
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                      className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        scrolled ? "text-navy-700 hover:text-navy-900 hover:bg-navy-50" : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {link.label}
                      <ChevronDown size={14} className={`transition-transform ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                    </button>
                    {activeDropdown === link.label && (
                      <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-48 z-50">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="block px-4 py-2.5 text-sm text-navy-700 hover:bg-navy-50 hover:text-gold-600 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === link.href
                        ? scrolled ? "text-gold-600 bg-gold-50" : "text-gold-400 bg-white/10"
                        : scrolled ? "text-navy-700 hover:text-navy-900 hover:bg-navy-50" : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <Link
                to="/admission"
                className="ml-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold text-sm px-4 py-2 rounded-lg transition-all"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-navy-800" : "text-white"}`}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-3 space-y-1">
              {NAV_LINKS.map((link) => (
                link.children ? (
                  <div key={link.label}>
                    <div className="px-3 py-2 text-navy-500 font-semibold text-xs uppercase tracking-widest mt-3">
                      {link.label}
                    </div>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-5 py-2 text-sm text-navy-700 hover:text-gold-600 hover:bg-gold-50 rounded-lg"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                      location.pathname === link.href ? "bg-navy-50 text-gold-600" : "text-navy-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <Link
                to="/admission"
                className="block w-full text-center bg-gold-500 text-navy-900 font-bold py-3 rounded-lg mt-3"
              >
                Apply Now →
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
