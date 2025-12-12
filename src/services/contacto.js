import { api } from "./api";

export const contactoService = {
  async enviarFormulario(data) {
    try {
      const { data: res } = await api.post("/contacto", data);
      return res; // { ok: true, message: ... }
    } catch (error) {
      // Si el backend respondió (400/500), aquí viene el payload
      const backend = error?.response?.data;

      // Si no hay respuesta: timeout, red, CORS, DNS, etc.
      const fallback = {
        ok: false,
        error:
          error?.code === "ECONNABORTED"
            ? "La solicitud tardó demasiado (timeout). Intenta nuevamente."
            : "Error de conexión con el servidor",
      };

      // Log solo en dev para no ensuciar prod
      if (import.meta.env.DEV) {
        console.error("Error enviando formulario:", {
          status: error?.response?.status,
          code: error?.code,
          message: error?.message,
          backend,
        });
      }

      // Error controlado hacia el componente
      throw backend || fallback;
    }
  },
};
