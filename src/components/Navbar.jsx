import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import logo from "../assets/5d050421-76bb-4d96-bd73-cd4be231610f.jpeg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  
  const menu = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Team", id: "team"},
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (window.scrollY < 200) {
        setActiveSection("Home");
        return;
      }

      menu.forEach(({ id, name }) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    setOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 px-6 md:px-10 py-4 flex justify-between items-center transition-all duration-500 ${
          scrolled
            ? "bg-black/30 backdrop-blur-xl border-b border-white/10 shadow-xl"
            : "bg-transparent"
        }`}
      >
        {/* LOGO */}
        <motion.img
          onClick={() => scrollToSection("home")}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          src={logo}
          className="w-14 h-14 rounded-full cursor-pointer hover:scale-110 transition"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-white font-medium">
          <ul className="flex gap-10">
            {menu.map(({ name, id }) => (
              <li
                key={name}
                onClick={() => scrollToSection(id)}
                className={`cursor-pointer text-lg relative group ${
                  activeSection === name ? "text-blue-400 font-semibold" : ""
                }`}
              >
                {name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-400 transition-all duration-300 ${
                    activeSection === name ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            ))}
          </ul>

          {/* BUTTON */}
          <motion.button
            onClick={() => scrollToSection("contact")}
            whileHover={{ scale: 1.1 }}
            className="px-5 py-2 bg-blue-500 rounded-full hover:bg-blue-600 text-white shadow-lg"
          >
            Contact
          </motion.button>
        </div>

        
        <button
          onClick={() => setOpen(!open)}
          className="text-white text-3xl md:hidden"
        >
          {open ? <IoClose /> : <HiMenuAlt4 />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-3/4 h-full bg-black/95 text-white shadow-2xl z-40 flex flex-col items-center justify-center gap-10"
          >
            {menu.map(({ name, id }) => (
              <motion.div
                key={name}
                onClick={() => scrollToSection(id)}
                className={`text-3xl hover:text-blue-400 cursor-pointer ${
                  activeSection === name ? "text-blue-400 font-bold" : ""
                }`}
              >
                {name}
              </motion.div>
            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-blue-500 rounded-full text-lg"
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
