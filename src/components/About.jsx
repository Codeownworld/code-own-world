import { motion } from "framer-motion";
import { FaLaptopCode, FaRocket, FaUsers } from "react-icons/fa";
import bg from "../bg.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
    },
  },
};

export default function About() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay & particle grid */}
      <div className="absolute inset-0 z-0 bg-black/82">
        <div className="absolute w-full h-full opacity-10 animate-[pulse_15s_infinite] bg-[radial-gradient(#ffffff_1px,transparent_1px)] " />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-5xl md:text-7xl font-extrabold text-center mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
        >
          Welcome to Code Own World
        </motion.h2>

        <motion.p
          className="text-2xl text-center text-gray-300 mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Own the Code. Rule the World.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-gray-300 text-center max-w-4xl mx-auto mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Hi, I'm <span className="text-white font-bold">Mr Dev</span>, a solo founder building clean, fast, and scalable digital products. From full-stack web apps to robust APIs – let's bring your ideas to life with excellence and clarity.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            {
              icon: <FaLaptopCode className="text-6xl text-cyan-400 mb-4" />,
              title: "Custom Websites",
              desc: "Responsive, blazing-fast websites tailored to your brand. Optimized for SEO and built with best practices.",
            },
            {
              icon: <FaRocket className="text-6xl text-cyan-400 mb-4" />,
              title: "Robust APIs",
              desc: "High-performance APIs built with scalability and security in mind—your app’s solid foundation.",
            },
            {
              icon: <FaUsers className="text-6xl text-cyan-400 mb-4" />,
              title: "Founder Support",
              desc: "Collaborate with a dedicated developer to transform your product vision into a stunning reality.",
            },
          ].map(({ icon, title, desc }, i) => (
            <motion.div
              key={i}
              className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-2xl hover:shadow-cyan-400/50 transition-transform hover:scale-105"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div>{icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
              <p className="text-base text-gray-300">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.p
          className="mt-20 text-center italic text-lg text-gray-400"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          “Quality is never an accident; it is always the result of intelligent effort.” – John Ruskin
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2, type: "spring", stiffness: 100 }}
        >
          <a
            href="#contact"
            className="px-8 py-4 text-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full shadow-lg transition duration-300"
          >
            Let's Build Something Great
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
