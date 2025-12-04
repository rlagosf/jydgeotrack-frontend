function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Control total de tus{" "}
          <span className="text-cyan-400">vehículos en tiempo real</span>
        </h1>
        <p className="text-slate-300 mb-6 text-sm sm:text-base">
          JY D GeoTrack instala y configura sistemas GPS vehiculares para flotas
          y vehículos particulares. Visualiza recorridos, alertas y reportes en
          una plataforma moderna y segura.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-500/20">
            Solicitar cotización
          </button>
          <button className="px-5 py-2 rounded-lg border border-slate-600 text-slate-200 text-sm hover:border-cyan-400 hover:text-cyan-300">
            Ver servicios
          </button>
        </div>
      </div>

      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 shadow-xl shadow-slate-950/60">
        <div className="h-48 rounded-xl bg-gradient-to-br from-cyan-500/20 via-emerald-500/10 to-slate-900 border border-cyan-500/40 flex items-center justify-center text-slate-300 text-sm text-center px-4">
          Aquí después podemos poner un mapa, una imagen de flota o un mockup de
          la plataforma de monitoreo.
        </div>
      </div>
    </section>
  );
}

export default Hero;
