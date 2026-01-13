import { api } from "./api";

const mustId = (v, name) => {
  const n = Number(v);
  if (!Number.isFinite(n) || n <= 0) {
    throw new Error(`[catalogosService] ${name} inválido: ${v}`);
  }
  return n;
};

export const catalogosService = {
  // --------------------
  // Geográficos
  // --------------------
  async getRegiones() {
    const { data } = await api.get("/catalogos/regiones");
    return data;
  },

  async getProvincias(regionId) {
    const id = mustId(regionId, "regionId");
    const { data } = await api.get(`/catalogos/provincias/${id}`);
    return data;
  },

  async getComunas(provinciaId) {
    const id = mustId(provinciaId, "provinciaId");
    const { data } = await api.get(`/catalogos/comunas/${id}`);
    return data;
  },

  // --------------------
  // Negocio
  // --------------------
  async getTipoCliente() {
    const { data } = await api.get("/catalogos/tipo-cliente");
    return data;
  },

  async getTipoVehiculo() {
    const { data } = await api.get("/catalogos/tipo-vehiculo");
    return data;
  },

  async getObjetivoRastreo() {
    const { data } = await api.get("/catalogos/objetivo-rastreo");
    return data;
  },

  async getGpsUso() {
    const { data } = await api.get("/catalogos/usa-gps");
    return data;
  },

  async getPlazo() {
    const { data } = await api.get("/catalogos/plazo-implementacion");
    return data;
  },
};
