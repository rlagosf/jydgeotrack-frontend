import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "hero", label: "Inicio" },
    { to: "services", label: "Servicios" },
    { to: "about", label: "Nosotros" },
    { to: "contact", label: "Contacto" },
    { to: "login", label: "Iniciar sesión" },
  ];

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-none
        text-white
      "
    >
      <div className="max-w-[1400px] mx-auto px-3 lg:px-1">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <div className="flex items-center pl-1 md:pl-0">
            <img
              src="/images/logo_fondos_oscuros.png"
              alt="JYD Geotrack"
              className="h-8 lg:h-10 w-auto select-none"
            />
          </div>

          {/* Hamburguesa */}
          <button
            className="
              md:hidden inline-flex items-center justify-center 
              p-2 mr-2 
              rounded-md hover:bg-white/10 focus:outline-none 
              focus:ring-2 focus:ring-white/40
            "
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Abrir menú"
          >
            <div className="space-y-1">
              <span
                className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${
                  isOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-opacity duration-200 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${
                  isOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </div>
          </button>

          {/* Menú desktop */}
          <ul
            className="
              hidden md:flex items-center
              gap-5 lg:gap-7
              text-[0.55rem] lg:text-[0.62rem]
              uppercase tracking-[0.20em]
              font-light
            "
          >
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  className="
                    cursor-pointer transition-all duration-300 
                    pb-1 border-b border-transparent
                    hover:border-[#24C6FF]
                    hover:text-[#24C6FF]
                    hover:drop-shadow-[0_0_6px_#24C6FF]
                  "
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-[#001624]/95 border-t border-white/10">
          <ul className="flex flex-col px-6 py-4 space-y-3 text-[0.65rem] uppercase tracking-[0.2em] font-light">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  className="block py-2 cursor-pointer hover:text-[#24C6FF] transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
