import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Team() {
  const [activeMember, setActiveMember] = useState(null);

  const members = [
    {
      name: "Amit Kumar Mahapatra",
      role: "Full Stack Developer",
      bio: "Full-stack developer with strong backend focus and experience building scalable, production-ready systems.",
      longBio:
        "Amit specializes in backend engineering, database design, and building scalable, high-performance APIs. He has extensive experience designing and implementing system architectures for web applications, ensuring efficiency, reliability, and maintainability. Amit is skilled in optimizing performance, managing complex data workflows, and integrating multiple services to create robust, production-ready solutions. He is passionate about leveraging modern backend technologies and best practices to deliver scalable, secure, and efficient applications that provide seamless experiences for users.",
      github: "https://github.com/mr-amitkumar",
      linkedin: "https://www.linkedin.com/in/amit-kumar-mahapatra-7b4989274/",
    },
    {
      name: "Sagar Panigrahi",
      role: "Full Stack Developer",
      bio: "Full-stack developer focused on scalable backend systems, efficient APIs, and clean, modern web interfaces.",
      longBio:
        "Sagar specializes in developing full-stack web applications with robust backend architecture using Python frameworks such as Django and Flask, efficient and scalable APIs, and modern, responsive frontend interfaces. He is experienced in designing end-to-end solutions, integrating databases, optimizing performance, implementing security best practices, and delivering seamless user experiences across devices. His expertise combines backend logic, server-side development, and frontend technologies to create highly functional and visually appealing applications.",
      github: "https://github.com/SagarP-Dev",
      linkedin: "https://www.linkedin.com/in/sagar-trushna-panigrahi-079b6727a/",
    },
  ];

  const Card = ({ member }) => (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="
        bg-[#111122]
        border border-white/10
        rounded-2xl
        p-8
        shadow-sm
        hover:shadow-xl
        transition-all
        h-full
      "
    >
      {/* Avatar */}
      <div className="w-14 h-14 mb-5 rounded-full bg-white/10 
        flex items-center justify-center text-lg font-semibold">
        {member.name.split(" ").map(n => n[0]).join("")}
      </div>

      <h3 className="text-xl font-medium mb-1">{member.name}</h3>
      <p className="text-sm text-indigo-400 mb-4">{member.role}</p>

      <p className="text-sm text-gray-300 leading-relaxed mb-6">
        {member.bio}
      </p>

      <button
        onClick={() => setActiveMember(member)}
        className="text-sm text-indigo-400 hover:text-indigo-300 transition"
      >
        View Profile →
      </button>
    </motion.div>
  );

  return (
    <section id="team" className="py-24 px-4 bg-[#0b0b16] text-white">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-5xl md:text-6xl font-semibold mb-6"
      >
        Our Team
      </motion.h2>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
        A small team of developers focused on building reliable, scalable and user-friendly digital products.
      </p>

      {/* Responsive Grid for all screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {members.map((member, i) => (
          <Card key={i} member={member} />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeMember && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveMember(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#111122] border border-white/10 rounded-2xl p-8 max-w-lg w-full"
            >
              <h3 className="text-2xl font-semibold mb-1">
                {activeMember.name}
              </h3>
              <p className="text-indigo-400 mb-4">
                {activeMember.role}
              </p>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {activeMember.longBio}
              </p>

              <div className="flex gap-4">
                <a
                  href={activeMember.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={activeMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
