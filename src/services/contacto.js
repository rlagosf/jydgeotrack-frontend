// src/services/contacto.js
import { api } from "./api";

function normalizeError(error) {
  const backend = error?.response?.data;

  // Si el backend manda { ok:false, error:"..." } o { message:"..." }
  const backendMsg =
    backend?.error ||
    backend?.message ||
    backend?.msg;

  // Si no hay respuesta: timeout, red, CORS, DNS, etc.
  const fallbackMsg =
    error?.code === "ECONNABORTED"
      ? "La solicitud tardó demasiado (timeout). Intenta nuevamente."
      : "Error de conexión con el servidor.";

  return {
    ok: false,
    error: backendMsg || fallbackMsg,
    // útil para debug en DEV
    _debug: import.meta.env.DEV
      ? {
          status: error?.response?.status,
          code: error?.code,
          message: error?.message,
          backend,
        }
      : undefined,
  };
}

export const contactoService = {
  async enviarFormulario(data) {
    try {
      const res = await api.post("/contacto", data);
      return res.data; // { ok:true, message:"..." }
    } catch (error) {
      const normalized = normalizeError(error);

      if (import.meta.env.DEV) {
        console.error("Error enviando formulario:", normalized._debug);
      }

      // tiramos un objeto estable para el componente
      throw normalized;
    }
  },
};
