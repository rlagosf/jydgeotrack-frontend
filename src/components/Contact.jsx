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
          items-start
        "
      >
        {/* COLUMNA IZQUIERDA: TÍTULO + ENUNCIADO + FORMULARIO */}
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
            Cotiza con nosotros y sé parte de nuestras plataformas de rastreo satelital.
          </p>

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

        {/* COLUMNA DERECHA: LOGOS MÁS GRANDES, TRANSPARENTES Y CON HOVER FUERTE */}
        <div
          className="
            w-full
            flex justify-center lg:justify-end
            mt-20
          "
        >
          <div
            className="
              grid grid-cols-1 sm:grid-cols-2 gap-10
              w-full max-w-sm sm:max-w-md lg:max-w-lg
            "
          >
            {/* Tarjeta Knox */}
            <div
              className="
                border border-slate-700
                rounded-2xl
                px-10 py-8
                flex items-center justify-center
                shadow-[0_18px_40px_rgba(0,0,0,0.65)]
                h-56
                bg-transparent
                transition-all duration-300
                hover:border-[#24C6FF]
                hover:shadow-[0_0_30px_rgba(36,198,255,0.7)]
                hover:-translate-y-2
              "
            >
              <img
                src="images/logo-knox.png"
                alt="Logo Knox"
                className="h-full w-auto object-contain"
              />
            </div>

            {/* Tarjeta Wialon */}
            <div
              className="
                border border-slate-700
                rounded-2xl
                px-10 py-8
                flex items-center justify-center
                shadow-[0_18px_40px_rgba(0,0,0,0.65)]
                h-56
                bg-transparent
                transition-all duration-300
                hover:border-[#24C6FF]
                hover:shadow-[0_0_30px_rgba(36,198,255,0.7)]
                hover:-translate-y-2
              "
            >
              <img
                src="images/logo-wialon.png"
                alt="Logo Wialon"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
