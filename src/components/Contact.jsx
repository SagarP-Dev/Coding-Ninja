import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineUser, AiOutlineMail, AiOutlineSend } from "react-icons/ai";
import { FaMapMarkerAlt, FaEnvelope, FaStar } from "react-icons/fa";

export default function Contact() {
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", "4c247524-f947-45c8-a220-e3e919978cfd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully 🎉");
      e.target.reset();
    } else {
      setResult("Error! Try again.");
    }
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-gradient-to-b from-[#0b0f19] to-black text-white px-6 py-16"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-5xl font-bold text-purple-400"
      >
        Contact Me
      </motion.h1>

      <p className="text-center text-gray-300 mt-3 mb-10">
        Have an idea, a question, or a project in mind? Let’s talk 👇
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#111827]/70 backdrop-blur-lg p-8 rounded-xl border border-gray-700 z-0"
        >
          <div className="flex items-center gap-3 bg-[#1f2937] p-3 rounded-md mb-5">
            <AiOutlineUser className="text-gray-400 text-xl" />
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="bg-transparent outline-none text-white w-full"
            />
          </div>

          <div className="flex items-center gap-3 bg-[#1f2937] p-3 rounded-md mb-5">
            <AiOutlineMail className="text-gray-400 text-xl" />
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="bg-transparent outline-none text-white w-full"
            />
          </div>

          <textarea
            name="message"
            required
            placeholder="Write your message..."
            className="bg-[#1f2937] p-4 rounded-md w-full text-white h-40 outline-none resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-full mt-6 bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center gap-2 py-3 rounded-md text-lg font-semibold hover:opacity-90 transition"
          >
            <AiOutlineSend /> Send Message
          </button>

          <p className="mt-4 text-center text-sm text-gray-300">{result}</p>
        </motion.form>

        {/* RIGHT INFORMATION */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#111827]/70 backdrop-blur-lg p-8 rounded-xl border border-gray-700"
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Me?</h2>

          <p className="text-gray-300 mb-6">
            I focus on delivering high-quality, modern, fast and responsive web
            experiences. Whether it's a personal site, business platform, or
            creative idea — I'm ready to bring it to life.
          </p>

          <div className="space-y-3 mb-10">
            <p className="flex items-center gap-3 text-gray-300">
              <FaMapMarkerAlt className="text-red-500" /> Bengaluru, India
            </p>

            <p className="flex items-center gap-3 text-gray-300">
              <FaEnvelope className="text-yellow-400" /> codingninja127@gmail.com
            </p>
          </div>

          <div className="border-t border-gray-600 pt-6">
            <h3 className="font-semibold text-xl text-purple-300 mb-3 flex items-center gap-2">
              <FaStar /> What You Can Expect:
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>✔ Fast communication</li>
              <li>✔ Clean & modern UI</li>
              <li>✔ High performance websites</li>
              <li>✔ Friendly collaboration</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
