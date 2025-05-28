import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { motion } from "framer-motion";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import logo from "./logo.png"
function App() {
  useEffect(() => {
    ReactGA.initialize("G-XXXXXXXXXX"); // Replace with your GA4 ID
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-sans bg-black text-white min-h-screen flex flex-col">
      <header className="flex flex-col md:flex-row items-center justify-between p-4 bg-black shadow-md sticky top-0 z-50">
        {/* Logo */}
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src={logo} // adjust path as needed
            alt="Code Own World Logo"
            className="h-35 w-60 "
          />
          <motion.h1
            className="text-3xl font-bold text-white mb-5"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Code Own World
          </motion.h1>
        </div>

        {/* Navigation centered */}
        <nav className="mt-3 md:mt-0 flex-grow flex justify-center space-x-8 text-lg font-medium">
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
        </nav>
      </header>

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
