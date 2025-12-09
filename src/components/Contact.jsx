function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-4 py-16"
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className="
            text-2xl sm:text-3xl lg:text-4xl
            font-semibold
            text-white
            text-center
            mb-8
            pt-20
          "
        >
          Formulario de contacto
        </h2>

        <form className="grid md:grid-cols-2 gap-5 text-sm">
          <input
            type="text"
            placeholder="Nombre"
            className="
              bg-slate-900/85
              border border-slate-700
              rounded-lg px-3 py-2
              text-slate-100
              placeholder:text-slate-500
              focus:outline-none
              focus:border-[#24C6FF]/70
              focus:ring-1 focus:ring-[#24C6FF]/40
              transition
            "
          />

          <input
            type="email"
            placeholder="Correo"
            className="
              bg-slate-900/85
              border border-slate-700
              rounded-lg px-3 py-2
              text-slate-100
              placeholder:text-slate-500
              focus:outline-none
              focus:border-[#24C6FF]/70
              focus:ring-1 focus:ring-[#24C6FF]/40
              transition
            "
          />

          <input
            type="text"
            placeholder="Teléfono"
            className="
              bg-slate-900/85
              border border-slate-700
              rounded-lg px-3 py-2
              text-slate-100
              placeholder:text-slate-500
              focus:outline-none
              focus:border-[#24C6FF]/70
              focus:ring-1 focus:ring-[#24C6FF]/40
              transition
            "
          />

          <input
            type="number"
            placeholder="Cantidad de vehículos"
            className="
              bg-slate-900/85
              border border-slate-700
              rounded-lg px-3 py-2
              text-slate-100
              placeholder:text-slate-500
              focus:outline-none
              focus:border-[#24C6FF]/70
              focus:ring-1 focus:ring-[#24C6FF]/40
              transition
              [appearance:textfield]
              [&::-webkit-inner-spin-button]:appearance-none
              [&::-webkit-outer-spin-button]:appearance-none
            "
          />

          <input
            type="text"
            placeholder="Marca del vehículo"
            className="
              bg-slate-900/85
              border border-slate-700
              rounded-lg px-3 py-2
              text-slate-100
              placeholder:text-slate-500
              focus:outline-none
              focus:border-[#24C6FF]/70
              focus:ring-1 focus:ring-[#24C6FF]/40
              transition
            "
          />

          <input
            type="text"
            placeholder="Tipo de vehículo (auto, camioneta, camión, etc.)"
            className="
              bg-slate-900/85
              border border-slate-700
              rounded-lg px-3 py-2
              text-slate-100
              placeholder:text-slate-500
              focus:outline-none
              focus:border-[#24C6FF]/70
              focus:ring-1 focus:ring-[#24C6FF]/40
              transition
            "
          />

          <textarea
            placeholder="Detalle de tu requerimiento"
            className="
              md:col-span-2
              bg-slate-900/85
              border border-slate-700
              rounded-lg px-3 py-2
              text-slate-100
              placeholder:text-slate-500
              min-h-[120px]
              resize-none
              focus:outline-none
              focus:border-[#24C6FF]/70
              focus:ring-1 focus:ring-[#24C6FF]/40
              transition
            "
          />

          <button
            type="submit"
            className="
              md:col-span-2
              flex items-center justify-center
              rounded-lg px-4 py-2
              font-semibold
              bg-slate-950
              border border-slate-700
              text-slate-100
              tracking-wide
              transition
              hover:bg-slate-900
              hover:border-[#24C6FF]
              hover:text-[#24C6FF]
              hover:shadow-[0_0_20px_rgba(36,198,255,0.6)]
            "
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
