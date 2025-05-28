import { motion } from "framer-motion";
export default function Contact() {
  return (
    <motion.section
      className="p-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <form
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
        className="space-y-4"
      >
        <input
          name="name"
          required
          placeholder="Your Name"
          className="border p-2 w-full rounded-md"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Your Email"
          className="border p-2 w-full rounded-md"
        />
        <textarea
          name="message"
          required
          placeholder="Your Message"
          className="border p-2 w-full h-32 rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </motion.section>
  );
}
