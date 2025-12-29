import { api } from "./api";

export const catalogosService = {
  // --------------------
  // Geográficos
  // --------------------
  getRegiones() {
    return api.get("/catalogos/regiones");
  },

  getProvincias(regionId) {
    return api.get(`/catalogos/provincias/${regionId}`);
  },

  getComunas(provinciaId) {
    return api.get(`/catalogos/comunas/${provinciaId}`);
  },

  // --------------------
  // Negocio
  // --------------------
  getTipoCliente() {
    return api.get("/catalogos/tipo-cliente");
  },

  getTipoVehiculo() {
    return api.get("/catalogos/tipo-vehiculo");
  },

  getObjetivoRastreo() {
    return api.get("/catalogos/objetivo-rastreo");
  },

  getGpsUso() {
    return api.get("/catalogos/usa-gps");
  },

  getPlazo() {
    return api.get("/catalogos/plazo-implementacion");
  },
};
