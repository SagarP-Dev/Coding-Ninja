import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Team() {
  const members = [
    {
      name: "Amit Kumar Mahapatra",
      role: "Full Stack Developer",
      bio: "Full-stack developer with expertise in scalable systems, backend engineering, and modern frontend frameworks.",
      github: "https://github.com/mr-amitkumar",
      linkedin: "https://www.linkedin.com/in/amit-kumar-mahapatra-7b4989274/",
    },
    {
      name: "Sagar Panigrahi",
      role: "Full Stack Developer",
      bio: "UI/UX focused Full Stack Developer skilled in Python, MERN, Framer Motion & creative modern web experiences.",
      github: "https://github.com/SagarP-Dev",
      linkedin: "https://www.linkedin.com/in/sagar-trushna-panigrahi-079b6727a/",
    },
  ];

  const [progress, setProgress] = useState(0);

  const autoplaySpeed = 3000; // ms

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 2));
    }, autoplaySpeed / 50);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed,
    speed: 900,
    fade: true,
    arrows: false,
  };

  return (
    <section
      id="team"
      className="py-28 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-5xl sm:text-6xl md:text-7xl font-black mb-6 tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
      >
        Meet The Team 🤝
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center text-gray-300 max-w-2xl mx-auto text-lg sm:text-xl mb-16"
      >
        People who turn ideas into reality—pixel by pixel, line by line.
      </motion.p>

      {/* Slider */}
      <div className="max-w-lg md:max-w-3xl mx-auto relative">

        {/* Progress Ring */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none animate-pulse">
          <svg width="55" height="55">
            <circle
              cx="27.5"
              cy="27.5"
              r="23"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="4"
              fill="none"
            />
            <circle
              cx="27.5"
              cy="27.5"
              r="23"
              stroke="#8A2BE2"
              strokeWidth="4"
              fill="none"
              strokeDasharray={145}
              strokeDashoffset={145 - (145 * progress) / 100}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 0.3s" }}
            />
          </svg>
        </div>

        <Slider {...settings}>
          {members.map((member, index) => (
            <Tilt
              key={index}
              glareEnable={true}
              glareMaxOpacity={0.15}
              scale={1.03}
              transitionSpeed={1500}
              className="rounded-3xl"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white/10 border border-white/20 rounded-3xl p-12 text-center shadow-2xl backdrop-blur-md"
              >
                <h3 className="text-3xl font-bold">{member.name}</h3>
                <p className="text-purple-400 text-lg font-medium">{member.role}</p>

                <p className="text-gray-300 mt-4 text-base leading-relaxed">
                  {member.bio}
                </p>

                {/* Social icons */}
                <div className="flex justify-center gap-6 mt-6">
                  <motion.a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.3 }}
                    className="text-3xl text-gray-300 hover:text-purple-400 transition"
                  >
                    <FaGithub />
                  </motion.a>

                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.3 }}
                    className="text-3xl text-gray-300 hover:text-blue-400 transition"
                  >
                    <FaLinkedin />
                  </motion.a>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </Slider>
      </div>
    </section>
  );
}
