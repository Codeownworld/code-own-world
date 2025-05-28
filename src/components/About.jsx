import { motion } from "framer-motion";
import { FaLaptopCode, FaRocket, FaUsers } from "react-icons/fa";

export default function About() {
  return (
    <motion.section
      className="max-w-4xl mx-auto p-10 bg-black rounded-xl shadow-lg mt-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-4xl font-extrabold text-white mb-6 text-center">
        About Code Own World
      </h2>

      <p className="text-lg text-gray-300 mb-6 leading-relaxed text-center max-w-xl mx-auto">
        Hi, I'm <span className="font-semibold text-white">Mr Dev</span>. 
        Code Own World is a solo remote software company dedicated to delivering
        high-quality websites, powerful APIs, and comprehensive documentation.
        We help startups and founders turn their ideas into reality with clean code and scalable solutions.
      </p>

      <div className="flex flex-col md:flex-row justify-around gap-8 text-center">
        <motion.div
          className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center space-y-4 hover:shadow-white/50 transition-shadow cursor-default"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaLaptopCode className="text-white text-5xl" />
          <h3 className="text-xl font-semibold text-white">Custom Websites</h3>
          <p className="text-gray-400 max-w-xs">
            We build responsive, fast, and SEO-friendly websites tailored to your brand and needs.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center space-y-4 hover:shadow-white/50 transition-shadow cursor-default"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaRocket className="text-white text-5xl" />
          <h3 className="text-xl font-semibold text-white">Robust APIs</h3>
          <p className="text-gray-400 max-w-xs">
            Develop scalable APIs that empower your applications with speed and security.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center space-y-4 hover:shadow-white/50 transition-shadow cursor-default"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaUsers className="text-white text-5xl" />
          <h3 className="text-xl font-semibold text-white">Founder Support</h3>
          <p className="text-gray-400 max-w-xs">
            Work directly with a dedicated developer to bring clarity and focus to your product vision.
          </p>
        </motion.div>
      </div>

      <p className="mt-10 text-center text-gray-500 italic">
        “Quality is never an accident; it is always the result of intelligent effort.” – John Ruskin
      </p>
    </motion.section>
  );
}
