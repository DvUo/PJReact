import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getZoomLink = async (salaId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/zoom-link`, {
      params: { sala_id: salaId },
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      withCredentials: true,
    });
    return response.data.zoom_link || null;
  } catch (error) {
    throw new Error("Error al cargar el enlace de Zoom");
  }
};

export const updateZoomLink = async (zoomLink, salaId) => {
  try {
    await axios.post(
      `${API_BASE_URL}/zoom-link`,
      { zoom_link: zoomLink, sala_id: salaId },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        withCredentials: true,
      }
    );
  } catch (error) {
    throw new Error("Error al guardar el enlace de Zoom");
  }
};
