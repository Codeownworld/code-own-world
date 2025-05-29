import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import portfolioBg from "../bg2.webp"; // replace with your image

const projects = [
  {
    title: "Smart LMS - College Doot",
    description:
      "A custom Learning Management System with teacher-first controls, built using Flask and React.",
    image: "https://via.placeholder.com/600x400?text=College+Doot", // replace with real img
    github: "https://github.com/yourusername/college-doot",
    demo: "https://college-doot.vercel.app",
  },
  {
    title: "Web-Based Data Extractor",
    description:
      "Built for Mizzen Digital: extracts structured data from images using OCR and maps into SQL DB.",
    image: "https://via.placeholder.com/600x400?text=Data+Extractor",
    github: "https://github.com/yourusername/data-extractor",
    demo: "https://demo-link.com",
  },
  {
    title: "Secure 4-Step Verification App",
    description:
      "React + Flask app implementing secure facial, OTP, QR, and password auth for exam logins.",
    image: "https://via.placeholder.com/600x400?text=4+Step+Auth",
    github: "https://github.com/yourusername/4-step-verification",
    demo: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 80 },
  }),
};

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat py-20 px-6"
      style={{ backgroundImage: `url(${portfolioBg})` }}
    >
      <div className="absolute inset-0 bg-black/85 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl text-center font-extrabold text-white mb-4"
        >
          Portfolio
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-gray-300 mb-16 text-lg"
        >
          A few of the projects I've built with passion and precision.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:scale-[1.03] transition-transform duration-300"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2"
                  >
                    <FaGithub /> GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
