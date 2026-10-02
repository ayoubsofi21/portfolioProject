import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, ArrowDown } from "lucide-react";
import { useScrollSpy } from "../hooks/useScrollSpy";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(NAV_LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (id) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-bg/80 border-b border-border shadow-sm shadow-black/5"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#top"
            onClick={handleNavClick("top")}
            className="font-mono text-sm tracking-tight text-text"
            data-cursor-hover
          >
            ayoub_sofi
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={handleNavClick(link.id)}
                  data-cursor-hover
                  className={`text-sm transition-colors duration-200 ${
                    activeId === link.id
                      ? "text-accent font-medium"
                      : "text-text-secondary hover:text-text"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              data-cursor-hover
              className="w-9 h-9 flex items-center justify-center rounded-full border border-border bg-card/50 text-text-secondary hover:text-text hover:border-accent/40 transition-colors"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a
              href="/assets/Ayoub_Sofi_CV.pdf"
              download
              data-cursor-hover
              className="text-sm text-text-secondary hover:text-text transition-colors"
            >
              Download CV
            </a>
            <a
              href="#contact"
              onClick={handleNavClick("contact")}
              data-cursor-hover
              className="text-sm font-medium px-4 py-2 rounded-full bg-accent text-bg hover:opacity-90 transition-opacity"
            >
              Hire Me
            </a>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-border bg-card/50 text-text-secondary"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-text"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-md md:hidden"
          >
            <motion.ul
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              className="flex flex-col items-center justify-center h-full gap-8 text-xl"
            >
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} onClick={handleNavClick(link.id)} className="text-text">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/assets/Ayoub_Sofi_CV.pdf"
                  download
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 text-text-secondary"
                >
                  Download CV <ArrowDown size={16} />
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={handleNavClick("contact")}
                  className="text-sm font-medium px-6 py-3 rounded-full bg-accent text-bg"
                >
                  Hire Me
                </a>
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
