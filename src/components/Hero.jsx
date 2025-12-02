import { motion } from "framer-motion";
import videoBg from "../assets/1992-153555258.mp4";

export default function Hero() {
  
  
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden text-white">

      {/* Background Video */}
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />

      
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide drop-shadow-lg leading-tight"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Welcome to <span className="text-blue-400">Coding Ninja</span> ⚡
        </motion.h1>

        
        <motion.p
          className="mt-4 text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mx-auto leading-relaxed opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Crafting world-class digital experiences with modern design, stunning animations and
          industry-leading full-stack development.
        </motion.p>

        
        <motion.button
          onClick={scrollToContact}
          className="mt-10 px-8 sm:px-10 py-3 sm:py-4 text-lg sm:text-xl font-semibold rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-[0_0_25px_rgba(0,153,255,0.6)] hover:shadow-[0_0_45px_rgba(0,153,255,1)]"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, type: "spring" }}
          whileHover={{ scale: 1.15 }}
        >
          Contact Us 🚀
        </motion.button>

        
        <motion.div
          className="mt-10 text-sm opacity-70 animate-bounce hidden sm:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          ⬇ Scroll to explore ⬇
        </motion.div>
      </motion.div>
    </section>
  );
}
