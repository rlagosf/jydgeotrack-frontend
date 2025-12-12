function Contact() {
  return (
    <section
      id="contact"
      className="w-full px-4 py-16"
    >
      <div
        className="
          max-w-6xl mx-auto
          grid lg:grid-cols-2 gap-10
          items-center
        "
      >
        {/* COLUMNA IZQUIERDA */}
        <div className="max-w-3xl">
          <h2
            className="
              text-2xl sm:text-3xl lg:text-4xl
              font-semibold
              text-white
              text-left
              mb-3
            "
          >
            Formulario de contacto
          </h2>

          <p
            className="
              text-sm sm:text-base
              text-white/80
              mb-8
            "
          >
            Cuéntanos cómo es tu flota y qué necesitas controlar. Te responderemos con una propuesta ajustada a tu operación.
          </p>

          <form
            className="grid md:grid-cols-2 gap-5 text-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Nombre */}
            <input
              type="text"
              placeholder="Nombre o razón social"
              className="
                bg-slate-900/85 border border-slate-700
                rounded-lg px-3 py-2 text-slate-100
                placeholder:text-slate-500
                focus:outline-none focus:border-[#24C6FF]/70
                focus:ring-1 focus:ring-[#24C6FF]/40 transition
              "
            />

            {/* Correo */}
            <input
              type="email"
              placeholder="Correo electrónico"
              className="
                bg-slate-900/85 border border-slate-700
                rounded-lg px-3 py-2 text-slate-100
                placeholder:text-slate-500
                focus:outline-none focus:border-[#24C6FF]/70
                focus:ring-1 focus:ring-[#24C6FF]/40 transition
              "
            />

            {/* Teléfono */}
            <input
              type="text"
              placeholder="Teléfono / WhatsApp"
              className="
                bg-slate-900/85 border border-slate-700
                rounded-lg px-3 py-2 text-slate-100
                placeholder:text-slate-500
                focus:outline-none focus:border-[#24C6FF]/70
                focus:ring-1 focus:ring-[#24C6FF]/40 transition
              "
            />

            {/* Región — SELECT VACÍO */}
            <select
              defaultValue=""
              className="
                bg-slate-900/85 border border-slate-700
                rounded-lg px-3 py-2 text-slate-100
                text-xs sm:text-sm
                focus:outline-none focus:border-[#24C6FF]/70
                focus:ring-1 focus:ring-[#24C6FF]/40 transition
              "
            >
              <option value="" disabled>Región</option>
            </select>

            {/* Ciudad — SELECT VACÍO */}
            <select
              defaultValue=""
              className="
                bg-slate-900/85 border border-slate-700
                rounded-lg px-3 py-2 text-slate-100
                text-xs sm:text-sm
                focus:outline-none focus:border-[#24C6FF]/70
                focus:ring-1 focus:ring-[#24C6FF]/40 transition
              "
            >
              <option value="" disabled>Ciudad</option>
            </select>

            {/* Comuna — SELECT VACÍO */}
            <select
              defaultValue=""
              className="
                bg-slate-900/85 border border-slate-700
                rounded-lg px-3 py-2 text-slate-100
                text-xs sm:text-sm
                focus:outline-none focus:border-[#24C6FF]/70
                focus:ring-1 focus:ring-[#24C6FF]/40 transition
              "
            >
              <option value="" disabled>Comuna</option>
            </select>

            {/* Tipo de cliente — SELECT VACÍO */}
            <select
              defaultValue=""
              className="
                bg-slate-900/85 border border-slate-700
                rounded-lg px-3 py-2 text-slate-100
                text-xs sm:text-sm
                focus:outline-none focus:border-[#24C6FF]/70
                focus:ring-1 focus:ring-[#24C6FF]/40 transition
              "
            >
              <option value="" disabled>Tipo de cliente</option>
            </select>

            {/* Cantidad vehículos */}
            <input
              type="number"
              placeholder="Cantidad de vehículos"
              className="
                bg-slate-900/85 border border-slate-700
                rounded-lg px-3 py-2 text-slate-100
                placeholder:text-slate-500
                focus:outline-none focus:border-[#24C6FF]/70
                focus:ring-1 focus:ring-[#24C6FF]/40 transition
                [appearance:textfield]
                [&::-webkit-inner-spin-button]:appearance-none
                [&::-webkit-outer-spin-button]:appearance-none
              "
            />

            {/* Tipo de vehículos */}
            <input
              type="text"
              placeholder="Tipo de vehículos (autos, camiones, maquinaria...)"
              className="
                md:col-span-2
                bg-slate-900/85 border border-slate-700
                rounded-lg px-3 py-2 text-slate-100
                placeholder:text-slate-500
                focus:outline-none focus:border-[#24C6FF]/70
                focus:ring-1 focus:ring-[#24C6FF]/40 transition
              "
            />

            {/* Objetivo principal — SELECT VACÍO */}
            <select
              defaultValue=""
              className="
                md:col-span-2
                bg-slate-900/85 border border-slate-700
                rounded-lg px-3 py-2 text-slate-100
                text-xs sm:text-sm
                focus:outline-none focus:border-[#24C6FF]/70
                focus:ring-1 focus:ring-[#24C6FF]/40 transition
              "
            >
              <option value="" disabled>Objetivo principal del rastreo</option>
            </select>

            {/* ¿Usa GPS? — SELECT VACÍO */}
            <select
              defaultValue=""
              className="
                bg-slate-900/85 border border-slate-700
                rounded-lg px-3 py-2 text-slate-100
                text-xs sm:text-sm
                focus:outline-none focus:border-[#24C6FF]/70
                focus:ring-1 focus:ring-[#24C6FF]/40 transition
              "
            >
              <option value="" disabled>¿Actualmente usas GPS?</option>
            </select>

            {/* Plazo implementación — SELECT VACÍO */}
            <select
              defaultValue=""
              className="
                bg-slate-900/85 border border-slate-700
                rounded-lg px-3 py-2 text-slate-100
                text-xs sm:text-sm
                focus:outline-none focus:border-[#24C6FF]/70
                focus:ring-1 focus:ring-[#24C6FF]/40 transition
              "
            >
              <option value="" disabled>¿Para cuándo necesitas implementar?</option>
            </select>

            {/* Detalle */}
            <textarea
              placeholder="Detalle de tu requerimiento (rutas, horarios, zonas, turnos, etc.)"
              className="
                md:col-span-2
                bg-slate-900/85 border border-slate-700
                rounded-lg px-3 py-2 text-slate-100
                placeholder:text-slate-500
                min-h-[120px]
                resize-none
                focus:outline-none focus:border-[#24C6FF]/70
                focus:ring-1 focus:ring-[#24C6FF]/40 transition
              "
            />

            {/* Consentimiento */}
            <label
              className="
                md:col-span-2 flex items-start gap-2
                text-xs sm:text-[0.8rem] text-white/70 cursor-pointer
              "
            >
              <input
                type="checkbox"
                className="
                  mt-[3px] h-3 w-3 rounded
                  border border-slate-600 bg-slate-900
                  accent-[#24C6FF]
                "
              />
              <span>
                Acepto ser contactado por JD GeoTrack para recibir una cotización.
              </span>
            </label>

            {/* Botón enviar */}
            <button
              type="submit"
              className="
                md:col-span-2 flex items-center justify-center
                rounded-lg px-4 py-2 font-semibold
                bg-slate-950 border border-slate-700
                text-slate-100 tracking-wide
                transition hover:bg-slate-900 hover:border-[#24C6FF]
                hover:text-[#24C6FF]
                hover:shadow-[0_0_20px_rgba(36,198,255,0.6)]
              "
            >
              Enviar mensaje
            </button>
          </form>
        </div>

        {/* COLUMNA DERECHA — Logos */}
        <div className="w-full flex justify-center lg:justify-end mt-10 lg:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-sm sm:max-w-md lg:max-w-lg">
            
            <div
              className="
                border border-slate-700 rounded-2xl
                px-10 py-8 flex items-center justify-center
                shadow-[0_18px_40px_rgba(0,0,0,0.65)]
                h-56 bg-transparent
                transition-all duration-300
                hover:border-[#24C6FF]
                hover:shadow-[0_0_30px_rgba(36,198,255,0.7)]
                hover:-translate-y-2
              "
            >
              <img src="images/logo-knox.png" alt="Logo Knox" className="h-full w-auto object-contain" />
            </div>

            <div
              className="
                border border-slate-700 rounded-2xl
                px-10 py-8 flex items-center justify-center
                shadow-[0_18px_40px_rgba(0,0,0,0.65)]
                h-56 bg-transparent
                transition-all duration-300
                hover:border-[#24C6FF]
                hover:shadow-[0_0_30px_rgba(36,198,255,0.7)]
                hover:-translate-y-2
              "
            >
              <img src="images/logo-wialon.png" alt="Logo Wialon" className="h-full w-auto object-contain" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
