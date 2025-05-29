import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import contactBg from "../bg3.avif"; // Your background image path

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-cover bg-center py-24 px-6"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <div className="absolute inset-0 bg-black/80 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto text-white">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-6xl font-extrabold text-center mb-6"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-gray-300 mb-14 text-xl"
        >
          Have a question or want to work together? Drop a message!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col gap-8"
          >
            <div className="flex gap-5 items-start">
              <FaEnvelope className="text-cyan-400 text-2xl mt-1" />
              <div>
                <h4 className="text-2xl font-semibold">Email</h4>
                <a href="mailto:codeownworld@gmail.com" className="text-lg text-gray-300">
                  codeownworld@gmail.com
                </a>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <FaInstagram className="text-cyan-400 text-2xl mt-1" />
              <div>
                <h4 className="text-2xl font-semibold">Instagram</h4>
                <a href="https://www.instagram.com/codeownworld/" className="text-lg text-gray-300">
                  @codeownworld
                </a>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <FaMapMarkerAlt className="text-cyan-400 text-2xl mt-1" />
              <div>
                <h4 className="text-2xl font-semibold">Location</h4>
                <p className="text-lg text-gray-300">Pune, Maharashtra, India</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white/10 p-10 rounded-3xl border border-white/20 backdrop-blur-md shadow-lg"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent successfully! (This is a mock)");
            }}
          >
            <div className="mb-6">
              <label className="block mb-3 text-lg font-semibold">Name</label>
              <input
                type="text"
                required
                className="w-full px-5 py-3 rounded-xl bg-white/20 text-white text-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-3 text-lg font-semibold">Email</label>
              <input
                type="email"
                required
                className="w-full px-5 py-3 rounded-xl bg-white/20 text-white text-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-3 text-lg font-semibold">Message</label>
              <textarea
                rows="5"
                required
                className="w-full px-5 py-3 rounded-xl bg-white/20 text-white text-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-4 bg-cyan-500 hover:bg-cyan-600 text-white text-xl font-semibold py-3 rounded-full transition duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
