import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-transparent">
      <div
        className="
          max-w-6xl mx-auto px-4 py-5
          text-xs sm:text-sm text-slate-400
          flex flex-col gap-4
          sm:flex-row sm:items-center sm:justify-between
          pt-28
        "
      >
        {/* Texto alineado horizontal */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-center sm:text-left mx-auto sm:mx-0">
          <span>© {year} JY D GeoTrack. Todos los derechos reservados.</span>
          <span className="text-slate-500">Monitoreo GPS vehicular · Flotas · Seguridad en ruta</span>
        </div>

        {/* Redes sociales en negro */}
        <div className="flex justify-center sm:justify-end gap-4">
          <a
            href=""
            target="_blank"
            className="
              text-black
              hover:text-black/70
              transition
              text-lg
            "
          >
            <FaFacebookF />
          </a>

          <a
            href=""
            target="_blank"
            className="
              text-black
              hover:text-black/70
              transition
              text-lg
            "
          >
            <FaInstagram />
          </a>

          <a
            href=""
            target="_blank"
            className="
              text-black
              hover:text-black/70
              transition
              text-lg
            "
          >
            <FaWhatsapp />
          </a>

          <a
            href=""
            target="_blank"
            className="
              text-black
              hover:text-black/70
              transition
              text-lg
            "
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
