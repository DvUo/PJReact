import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

export const getFiles = async (folder = 0) => {
  try {
    const url = `${API_BASE_URL}/files?folder=${folder}`;
    const response = await axios.get(url);

    if (Array.isArray(response.data)) {
      return response.data.map((file) => ({
        name: file.name,
        nameSatinize: file.nameSatinize,
        folder: file.folder,
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

export const updateFile = async (file, sala) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("sala", sala);

  const response = await axios.post(
    `${API_BASE_URL}/files/update/${file.name}`,
    formData
  );

  if (response.status !== 200) {
    throw new Error("Error al actualizar el archivo");
  }
};
