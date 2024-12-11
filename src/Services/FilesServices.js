import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getFiles = async (folder = 0) => {
  try {
    const url = `${API_BASE_URL}/files?folder=${folder}`;
    const response = await axios.get(url);

    if (Array.isArray(response.data)) {
      return response.data.map((file) => ({
        name: file.name,
        nameSatinize: file.nameSatinize,
        folder: file.folder,
        status: file.status,
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

export const updateFileStatus = async (fileName, status) => {
  try {
    console.log("Enviando solicitud con:", {
      url: `${API_BASE_URL}/files/update-status/${fileName}`,
      status,
    });

    const response = await axios.post(
      `${API_BASE_URL}/files/update-status/${fileName}`,
      { status },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status !== 200) {
      throw new Error("Error al actualizar el estado del archivo");
    }

    return response.data;
  } catch (error) {
    console.error("Error detallado al actualizar el estado:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
    });
    throw error;
  }
};
