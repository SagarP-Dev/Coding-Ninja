import { useState, useEffect } from "react";
import { FaWhatsapp, FaChevronDown } from "react-icons/fa";

export default function FloatingWhatsappPro() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [online, setOnline] = useState(navigator.onLine);

  // Sound effect when opening
  const playSound = () => {
    const audio = new Audio(
      "https://cdn.pixabay.com/download/audio/2022/03/15/audio_4f2e4ae04a.mp3?filename=pop-94319.mp3"
    );
    audio.volume = 0.4;
    audio.play();
  };

  //Detection
  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  
  useEffect(() => {
    if (open) {
      setTyping(true);
      setTimeout(() => setTyping(false), 1500);
    }
  }, [open]);

  const contacts = [
  {
    name: "Sagar Panigrahi",
    number: "7788078024",
    photo:
      "https://api.dicebear.com/9.x/notionists/svg?seed=SagarPanigrahi",
  },
  {
    name: "Amit Kumar Mahapatra",
    number: "9348695669",
    photo:
      "https://api.dicebear.com/9.x/notionists/svg?seed=AmitMahapatra",
  },
];


  const message = encodeURIComponent("Hello! I would like to know more about your services.");

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end">

      {/* Main Button */}
      <button
        onClick={() => {
          setOpen(!open);
          if (!open) playSound();
        }}
        className={`relative bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-full
        shadow-[0_0_20px_rgba(0,255,0,0.4)] active:scale-90 transition-all duration-300 hover:scale-110 hover:shadow-green-400/60 ${
          open ? "rotate-180" : ""
        }`}
      >
        <FaWhatsapp size={25} />
        {!open && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-4 h-4 flex items-center justify-center rounded-full animate-ping"></span>
        )}
      </button>

      {/* Popup Contacts */}
      <div
        className={`mt-4 flex flex-col gap-3 transition-all duration-500 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"
        }`}
      >
        {contacts.map((person, index) => (
          <a
            key={index}
            href={`https://wa.me/${person.number}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-5 py-4 rounded-xl shadow-lg hover:scale-105 hover:bg-green-500/15 transition-all duration-300"
          >
            {/* Profile Image */}
            <div className="relative">
              <img
                src={person.photo}
                className="w-12 h-12 rounded-full border border-green-400 shadow-md group-hover:scale-110 transition-all"
                alt="profile"
              />

              {/* Online Status */}
              <span
                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border border-black 
                  ${online ? "bg-green-400" : "bg-gray-500"}
                `}
              ></span>
            </div>

            <div>
              <p className="text-base font-semibold">{person.name}</p>
              <p className="text-xs text-green-300">
                {typing ? "Typing..." : "Available"}
              </p>
            </div>
          </a>
        ))}

        {/* Close Button */}
        {open && (
          <button
            onClick={() => setOpen(false)}
            className="flex items-center justify-center bg-white/20 backdrop-blur-xl px-4 py-2 rounded-lg text-white text-sm hover:bg-white/30 transition-all"
          >
            Close <FaChevronDown className="ml-2" />
          </button>
        )}
      </div>
    </div>
  );
}
