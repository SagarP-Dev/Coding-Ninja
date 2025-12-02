import { motion } from "framer-motion";
import { FaUser, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center mb-4"
      >
        Let's Connect 🔥
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center text-gray-300 mb-12 max-w-xl mx-auto"
      >
        Have a project in mind or need a stunning website? Tell me your idea — I’ll make it real.
      </motion.p>

      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
        className="max-w-xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl flex flex-col gap-6 shadow-xl"
      >
        <div className="flex items-center gap-3 bg-white/10 border border-gray-600 p-3 rounded-lg focus-within:border-blue-500 transition">
          <FaUser className="text-gray-300" />
          <input
            className="w-full bg-transparent text-white outline-none"
            placeholder="Your Name"
            type="text"
            name="name"
            required
          />
        </div>

        <div className="flex items-center gap-3 bg-white/10 border border-gray-600 p-3 rounded-lg focus-within:border-blue-500 transition">
          <FaEnvelope className="text-gray-300" />
          <input
            className="w-full bg-transparent text-white outline-none"
            placeholder="Email"
            type="email"
            name="email"
            required
          />
        </div>

        <textarea
          className="bg-white/10 border border-gray-600 p-3 text-white rounded-lg focus:border-blue-500 transition outline-none h-32"
          placeholder="Write your message..."
          name="message"
          required
        ></textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition cursor-pointer"
        >
          Send Message 🚀
        </motion.button>
      </motion.form>

      <p className="text-center text-gray-500 mt-10 text-sm">
        © {new Date().getFullYear()} Coding Ninja | All Rights Reserved
      </p>
    </section>
  );
}
