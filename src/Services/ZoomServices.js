import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

export const getZoomLink = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/zoom-link`);
    return response.data.zoom_link || null;
  } catch (error) {
    console.error("Error al obtener el enlace de Zoom:", error);
    throw new Error("Error al cargar el enlace de Zoom");
  }
};

export const updateZoomLink = async (zoomLink) => {
  try {
    await axios.post(`${API_BASE_URL}/zoom-link`, { zoom_link: zoomLink });
  } catch (error) {
    console.error("Error al actualizar el enlace de Zoom:", error);
    throw new Error("Error al guardar el enlace de Zoom");
  }
};
