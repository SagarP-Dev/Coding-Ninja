import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPaperPlane, FaWhatsapp, FaCheckCircle, } from "react-icons/fa";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", "4c247524-f947-45c8-a220-e3e919978cfd");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    if (result.success) {
      setSubmitted(true);
      e.target.reset();
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden">

      {/* Popup */}
      {submitted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-lg z-[999]"
        >
          <div className="bg-gray-900 p-8 rounded-2xl border border-purple-500/40 shadow-2xl text-center">
            <FaCheckCircle className="text-green-400 text-5xl mx-auto" />
            <h2 className="text-3xl font-bold mt-3">Message Sent!</h2>
            <p className="text-gray-300 mt-2">
              Thanks! We'll get back to you soon 🚀
            </p>
          </div>
        </motion.div>
      )}

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
      >
        Contact Me
      </motion.h2>

      <p className="text-center text-gray-300 text-lg max-w-2xl mx-auto mb-14">
        Let's build something amazing — Drop a message 👇
      </p>

      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg border border-gray-700 p-10 rounded-3xl shadow-xl flex flex-col gap-6"
        >
          <input type="hidden" name="subject" value="New Contact Message from Coding Ninja" />
          <input type="hidden" name="from_name" value="Coding Ninja Contact Form" />

          {/* Name Input */}
          <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-gray-600 hover:border-purple-500 transition-all">
            <FaUser className="text-gray-400" />
            <input
              required
              type="text"
              name="name"
              placeholder="Your Name"
              className="bg-transparent w-full text-white outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-gray-600 hover:border-purple-500 transition-all">
            <FaEnvelope className="text-gray-400" />
            <input
              required
              type="email"
              name="email"
              placeholder="Email Address"
              className="bg-transparent w-full text-white outline-none"
            />
          </div>

          {/* Message Box */}
          <textarea
            required
            name="message"
            placeholder="Write your message..."
            className="bg-white/10 p-4 border border-gray-600 hover:border-purple-500 transition-all rounded-xl h-36 text-white outline-none"
          ></textarea>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.07 }}
            className="py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg flex justify-center items-center gap-3 text-lg font-bold"
          >
            <FaPaperPlane /> Send Message
          </motion.button>
        </motion.form>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="p-10 rounded-3xl border border-white/20 bg-gradient-to-tr from-purple-500/10 backdrop-blur-xl"
        >
          <h3 className="text-3xl font-bold mb-3">Why Work With Me?</h3>
          <p className="text-gray-300 text-lg">
            🚀 Clean UI · ⚛ Modern · ⚡ Fast · 💡 Creative · 🔥 Professional
          </p>

          <p className="text-gray-400 mt-4">
            📍 Bengaluru, India <br /> ✉ codingninja127@gmail.com
          </p>

          {/* WhatsApp Buttons */}
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="https://wa.me/9348695669"
              target="_blank"
              className="bg-green-600 py-3 rounded-xl flex justify-center gap-3 font-semibold hover:bg-green-700 transition-all"
            >
              <FaWhatsapp /> Chat: Amit
            </a>

            <a
              href="https://wa.me/7788078024"
              target="_blank"
              className="bg-green-600 py-3 rounded-xl flex justify-center gap-3 font-semibold hover:bg-green-700 transition-all"
            >
              <FaWhatsapp /> Chat: Sagar
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
