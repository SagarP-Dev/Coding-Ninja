import { motion } from "framer-motion";
import { FaLaptopCode, FaPalette, FaHandsHelping } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "High-performance, scalable and responsive websites using React and MERN Stack.",
      icon: <FaLaptopCode size={50} className="text-blue-400 drop-shadow-md" />
    },
    {
      title: "UI / UX Design",
      desc: "Modern user-friendly interface designs that boost engagement & conversions.",
      icon: <FaPalette size={50} className="text-purple-400 drop-shadow-md" />
    },
    {
      title: "Freelance Support",
      desc: "End-to-end project handling: deployment, debugging, maintenance & upgrades.",
      icon: <FaHandsHelping size={50} className="text-green-400 drop-shadow-md" />
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-6xl font-extrabold mb-4 tracking-wide text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My <span className="text-blue-400">Services</span>
      </motion.h2>

      <motion.p
        className="text-gray-300 text-center max-w-xl mb-16 text-base md:text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        I help brands, startups, and individuals build beautiful digital experiences with clean
        design, smooth animations, and modern development.
      </motion.p>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-2xl shadow-lg 
              hover:shadow-blue-500/40 transition-all duration-500 
              cursor-pointer hover:scale-105 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            whileHover={{ rotate: 1.5 }}
          >
            <div className="flex justify-center mb-6">{s.icon}</div>

            <h3 className="text-2xl md:text-3xl font-semibold mb-4">{s.title}</h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="mt-16 px-10 py-4 text-lg md:text-xl font-semibold rounded-full bg-blue-600 hover:bg-blue-700 
          shadow-[0_0_20px_rgba(0,153,255,0.5)] hover:shadow-[0_0_30px_rgba(0,153,255,0.8)] 
          transition-all duration-300 cursor-pointer"
      >
        Work With Me 🚀
      </motion.a>
    </section>
  );
}
