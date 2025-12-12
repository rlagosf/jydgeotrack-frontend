import axios from "axios";

const rawBaseURL = import.meta.env.VITE_API_URL;

// Normaliza: quita espacios, asegura sin "/" final
const normalize = (url) => (url ? url.trim().replace(/\/+$/, "") : "");

// Asegura que termine en /api (si el backend está con prefix /api)
const ensureApiSuffix = (url) => {
  if (!url) return "";
  return url.endsWith("/api") ? url : `${url}/api`;
};

const normalized = normalize(rawBaseURL);
const baseURL = ensureApiSuffix(normalized) || "http://localhost:4001/api";

// Logs solo en dev
if (import.meta.env.DEV) {
  console.log("VITE_API_URL =>", rawBaseURL, "| baseURL usado =>", baseURL);
}

export const api = axios.create({
  baseURL,
  timeout: Number(import.meta.env.VITE_API_TIMEOUT ?? 15000),
});

// ---- Interceptor: errores más claros ----
api.interceptors.response.use(
  (res) => res,
  (error) => {
    const status = error?.response?.status;
    const url = error?.config?.baseURL + (error?.config?.url ?? "");
    const msg =
      error?.response?.data?.error ||
      error?.response?.data?.message ||
      error?.message;

    if (import.meta.env.DEV) {
      console.error("API ERROR:", { status, url, msg, data: error?.response?.data });
    }

    return Promise.reject(error);
  }
);
