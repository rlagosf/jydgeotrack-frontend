function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-4 text-cyan-400">Contacto</h2>
      <p className="text-slate-300 text-sm mb-4">
        Cuéntanos cuántos vehículos necesitas monitorear y te enviaremos una
        cotización a medida.
      </p>

      <form className="grid md:grid-cols-2 gap-4 text-sm">
        <input
          type="text"
          placeholder="Nombre"
          className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-100"
        />
        <input
          type="email"
          placeholder="Correo"
          className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-100"
        />
        <input
          type="text"
          placeholder="Teléfono"
          className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-100"
        />
        <input
          type="number"
          placeholder="Cantidad de vehículos"
          className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-100"
        />
        <textarea
          placeholder="Detalle de tu requerimiento"
          className="md:col-span-2 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 min-h-[100px]"
        />
        <button
          type="submit"
          className="md:col-span-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg px-4 py-2"
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  );
}

export default Contact;
