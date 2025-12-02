import { motion } from "framer-motion";
import { FaCheckCircle, FaCode, FaRocket, FaBrain, FaPalette } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            About <span className="text-blue-500">Coding Ninja</span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            At <span className="text-blue-400 font-semibold">Coding Ninja</span>, 
            we craft stunning digital experiences using modern frameworks,
            intelligent design systems and world-class development principles.
          </p>

          
          <ul className="space-y-3 md:text-lg text-base">
            {[
              "Pixel-perfect UI/UX design",
              "High-performing full-stack apps",
              "Smooth animations & responsive design",
              "Dedicated long-term support"
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-gray-300"
              >
                <FaCheckCircle className="text-blue-500" /> {item}
              </motion.li>
            ))}
          </ul>

          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-6 px-10 py-4 text-lg font-bold bg-blue-600 rounded-full 
              hover:bg-blue-700 transition-all duration-300 
              shadow-[0_0_25px_rgba(0,150,255,0.6)] hover:shadow-[0_0_35px_rgba(0,150,255,0.8)]"
          >
            Let's Build Together 🚀
          </motion.a>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          {[
            { icon: <FaCode />, title: "Full Stack", desc: "React + MERN & Python based scalable systems." },
            { icon: <FaRocket />, title: "Fast Delivery", desc: "Optimized builds shipped quickly." },
            { icon: <FaBrain />, title: "Smart Solutions", desc: "Custom automation & logic driven builds." },
            { icon: <FaPalette />, title: "Beautiful UX", desc: "Modern UI with smooth transitions." },
          ].map((box, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 rounded-xl text-center bg-white/5 backdrop-blur-xl border border-white/15 
                shadow-xl hover:shadow-blue-500/40 transition-all duration-500"
            >
              <div className="text-5xl mb-4 text-blue-400">{box.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{box.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{box.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
