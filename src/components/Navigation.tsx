import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Journey", href: "#journey" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "/certificates" },
  { name: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = navItems.filter(i => i.href.startsWith("#")).map(item => item.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("#")) {
      const scrollToSection = () => {
        const el = document.querySelector(href);
        if (el) {
          const yOffset = el.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: yOffset, behavior: "smooth" });
        }
      };
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(scrollToSection, 300);
      } else {
        setTimeout(scrollToSection, 100);
      }
    } else {
      navigate(href);
    }
  };

  const isActive = (href: string) => {
    if (href.startsWith("/")) return location.pathname === href;
    return location.pathname === "/" && activeSection === href.slice(1);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-end">
          {/* Desktop: Radio-style nav */}
          <div className="hidden md:block">
            <div className="radio-nav">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className={`nav-label ${isActive(item.href) ? "active" : ""}`}
                >
                  <span className="nav-text">{item.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden ml-auto">
            <button
              className="text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-3 overflow-hidden"
            >
              <div className="radio-nav-mobile">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    className={`nav-label ${isActive(item.href) ? "active" : ""}`}
                  >
                    <span className="nav-text">{item.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
