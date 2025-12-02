import { useState } from "react";
import { FaWhatsapp, FaChevronUp, FaChevronDown } from "react-icons/fa";

export default function FloatingWhatsapp() {
  const [open, setOpen] = useState(false);

  const contacts = [
    { name: "Sagar Panigrahi", number: "7788078024" },
    { name: "Amit Kumar Mahapatra", number: "9348695669" },
  ];

  const message = encodeURIComponent("Hello! I would like to know more about your services.");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      <button
        onClick={() => setOpen(!open)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-all duration-300"
      >
        {open ? <FaChevronDown size={22} /> : <FaWhatsapp size={25} />}
      </button>

      
      <div
        className={`mt-3 flex flex-col gap-3 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {contacts.map((person, index) => (
          <a
            key={index}
            href={`https://wa.me/${person.number}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
          >
            <FaWhatsapp size={22} className="text-green-400" />
            <div className="text-sm leading-tight font-medium">
              <p>{person.name}</p>
              <p className="text-green-300 text-xs">Tap to chat</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
