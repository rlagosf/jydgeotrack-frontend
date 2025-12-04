function Services() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-4 text-cyan-400">
        Servicios de instalación GPS
      </h2>
      <ul className="grid md:grid-cols-3 gap-4 text-sm">
        <li className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
          <h3 className="font-semibold mb-2">Instalación en vehículos particulares</h3>
          <p className="text-slate-300">
            Seguimiento en tiempo real, historial de rutas y alertas básicas para
            tu vehículo personal.
          </p>
        </li>
        <li className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
          <h3 className="font-semibold mb-2">Gestión de flotas</h3>
          <p className="text-slate-300">
            Monitoreo de múltiples vehículos, reportes de uso, geocercas y alertas
            configurables.
          </p>
        </li>
        <li className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
          <h3 className="font-semibold mb-2">Soporte y mantención</h3>
          <p className="text-slate-300">
            Revisión de dispositivos, diagnóstico remoto y asistencia en terreno
            según requerimiento.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Services;
