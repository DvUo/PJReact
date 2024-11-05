import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

export const getFiles = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/files`);
    if (Array.isArray(response.data)) {
      return response.data.map((file) => ({
        name: file.name,
        nameSatinize: file.nameSatinize,
      }));
    } else {
      throw new Error("Los datos recibidos no son un array");
    }
  } catch (error) {
    throw new Error("Error al cargar los archivos: " + error.message);
  }
};

export const uploadFile = async (file, sala) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("sala", sala);

  const response = await axios.post(`${API_BASE_URL}/files/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  if (response.status !== 200) {
    throw new Error(`Error al subir ${file.name}`);
  }
};

export const deleteFile = async (fileNameSatinize) => {
  const response = await axios.delete(
    `${API_BASE_URL}/files/delete/${fileNameSatinize}`
  );
  if (response.status !== 200) {
    throw new Error("Error al eliminar el archivo");
  }
};

export const updateFile = async (file, fileToUpdate) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("sala", fileToUpdate.sala);

  const response = await axios.post(
    `${API_BASE_URL}/files/update/${fileToUpdate.nameSatinize}`,
    formData
  );

  if (response.status !== 200) {
    throw new Error("Error al actualizar el archivo");
  }
};
