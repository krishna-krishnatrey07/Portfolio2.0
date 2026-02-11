import { useState } from "react";
import logo from "../assets/klogo.png";
import { useLenis } from "lenis/react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  const scrollToSection = (id) => {
    lenis?.scrollTo(id, {
      offset: -80,
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });
  };

  return (
    <nav className="fixed z-50 top-4 left-0 right-0 mx-auto max-w-[90%] backdrop-blur-md bg-black/40 border border-gray-800 rounded-xl shadow-lg shadow-black/50 h-20">
      <div className="max-w-6xl mx-auto h-full flex justify-between items-center px-6">
        {/* Logo */}
        <button onClick={() => scrollToSection("#hero")} className="flex items-center">
          <img src={logo} alt="logo" className="h-10 w-auto object-contain cursor-pointer" />
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-gray-400 items-center">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(`#${item.toLowerCase()}`)}
              className="group relative flex items-center cursor-pointer"
            >
              <span className="hover:text-white transition">{item}</span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}

          {/* Hire Me */}
          <button
            onClick={() => scrollToSection("#contact")}
            className="ml-6 px-4 py-1.5 rounded-lg font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-500 transition duration-300 shadow-lg shadow-blue-500/20 cursor-pointer"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-300">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-gray-400 bg-black/90">
          {["about", "skills", "projects", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => {
                scrollToSection(`#${id}`);
                setOpen(false);
              }}
              className="text-left"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
