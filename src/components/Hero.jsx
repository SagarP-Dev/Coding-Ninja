import { motion } from "framer-motion";
import videoBg from "../assets/1992-153555258.mp4";

const text = "Turning Ideas into Scalable Digital Reality ✨";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden text-white"
    >
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

        {/* Description */}
        <motion.p
          className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Crafting world-class digital experiences with modern design, stunning animations and
          industry-leading full-stack development.
        </motion.p>

        {/* Text */}
        <motion.p
          className="mt-10 text-lg sm:text-xl md:text-2xl font-semibold text-blue-300 tracking-wide"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
                delayChildren: 1.6,
              },
            },
          }}
          style={{
            textShadow: "0 0 20px rgba(59,130,246,0.8)",
          }}
        >
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
s
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>

        {/* Scroll */}
        <motion.div
          className="mt-12 text-sm opacity-70 animate-bounce hidden sm:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          ⬇ Scroll to explore ⬇
        </motion.div>
      </motion.div>
    </section>
  );
}
