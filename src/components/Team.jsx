import { motion } from "framer-motion";

export default function Team() {
  const members = [
    {
      name: "Amit Kumar Mahapatra",
      role: "Full Stack Developer",
    },
    {
      name: "Sagar Panigrahi",
      role: "Full-Stack Developer",
    },
  ];

  const getInitials = (name) =>
    name
      .split(" ")
      .map((w) => w.charAt(0))
      .join("")
      .toUpperCase();

  return (
    <section
      id="team"
      className="py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
      >
        Our Team 🤝
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center text-gray-300 max-w-xl mx-auto text-sm sm:text-base md:text-lg mb-14"
      >
        Meet the passionate minds behind our projects. We build innovative,
        scalable, and visually stunning digital experiences.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {members.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300"
          >
            <motion.div
              whileHover={{ rotate: 10 }}
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-3xl sm:text-4xl md:text-5xl font-bold shadow-lg"
            >
              {getInitials(member.name)}
            </motion.div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-5">
              {member.name}
            </h3>
            <p className="text-blue-400 text-sm sm:text-base font-medium">
              {member.role}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
