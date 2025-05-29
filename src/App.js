import { useState } from "react";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { motion } from "framer-motion";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import logo from "./logo.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    ReactGA.initialize("G-XXXXXXXXXX"); // Replace with your GA4 ID
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close menu on link click (mobile)
    }
  };

  return (
    <div className="font-sans bg-black text-white min-h-screen flex flex-col">
<header className="flex items-center justify-between py-2 px-4 bg-black bg-opacity-80 backdrop-blur shadow-md border-b border-gray-700 sticky top-0 z-50 transition-all duration-300">
  {/* Logo */}
  <div
    className="flex items-center space-x-3 cursor-pointer"
    onClick={() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setMenuOpen(false);
    }}
  >
    <img src={logo} alt="Code Own World Logo" className="h-10 w-10" />
    <motion.h1
      className="text-2xl font-bold text-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Code Own World
    </motion.h1>
  </div>

  {/* Desktop Nav */}
  <nav className="hidden md:flex flex-grow justify-center space-x-8 text-lg font-medium">
    <button onClick={() => scrollToSection("about")} className="hover:text-cyan-400 transition-colors duration-300">About</button>
    <button onClick={() => scrollToSection("services")} className="hover:text-cyan-400 transition-colors duration-300">Services</button>
    <button onClick={() => scrollToSection("portfolio")} className="hover:text-cyan-400 transition-colors duration-300">Portfolio</button>
    <button onClick={() => scrollToSection("contact")} className="hover:text-cyan-400 transition-colors duration-300">Contact</button>
  </nav>

  {/* Mobile Burger Menu Button */}
  <button
    className="md:hidden focus:outline-none text-white text-3xl"
    aria-label="Toggle menu"
    onClick={() => setMenuOpen((prev) => !prev)}
  >
    {menuOpen ? (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
</header>


      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black px-4 pb-4 flex flex-col space-y-3 text-center font-medium text-lg"
        >
          <button
            onClick={() => scrollToSection("about")}
            className="hover:underline focus:outline-none"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="hover:underline focus:outline-none"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="hover:underline focus:outline-none"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:underline focus:outline-none"
          >
            Contact
          </button>
        </motion.nav>
      )}

      {/* Sections */}
      <main className="flex-grow">
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="text-center p-4 bg-gray-900 text-sm text-gray-400">
        © 2025 Code Own World. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
