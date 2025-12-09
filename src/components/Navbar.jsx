import { useState, useEffect } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import logo from "../assets/5d050421-76bb-4d96-bd73-cd4be231610f.jpeg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${scrolled ? "backdrop-blur-xl bg-black/40 shadow-lg" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex justify-between items-center">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-12 rounded-full object-cover border border-white/20 shadow-md"
          />
          <span className="text-white font-bold text-xl tracking-wide">
            Coding <span className="text-blue-400">Ninja</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-white font-medium text-lg">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="relative group transition-all"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu  */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl"
        >
          {isOpen ? <IoClose /> : <HiMenuAlt4 />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden backdrop-blur-xl bg-black/60
        ${isOpen ? "max-h-96 py-6" : "max-h-0 py-0"}`}
      >
        <ul className="flex flex-col items-center gap-6 text-white text-xl font-medium">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-400 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
