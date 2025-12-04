function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-900/80">
      <div className="max-w-6xl mx-auto px-4 py-4 text-xs sm:text-sm text-slate-400 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <span>© {year} JY D GeoTrack. Todos los derechos reservados.</span>
        <span className="text-slate-500">
          Monitoreo GPS vehicular · Flotas · Seguridad en ruta
        </span>
      </div>
    </footer>
  );
}

export default Footer;
