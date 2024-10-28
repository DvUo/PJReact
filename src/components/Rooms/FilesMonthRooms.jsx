import React, { useEffect, useState, useRef } from "react";
import { Button, Box, CircularProgress, Alert } from "@mui/material";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function FilesMonthRooms() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fileToUpdate, setFileToUpdate] = useState(null);
  const fileInputRef = useRef(null);
  const updateInputRef = useRef(null);

  const API_BASE_URL = "http://localhost:8000/api";

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${API_BASE_URL}/files`);
      if (Array.isArray(response.data)) {
        const formattedFiles = response.data.map((file) => ({
          name: file.name,
          nameSatinize: file.nameSatinize,
        }));
        setFiles(formattedFiles);
      } else {
        throw new Error("Los datos recibidos no son un array");
      }
    } catch (error) {
      setError("Error al cargar los archivos: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = async (event) => {
    const selectedFiles = Array.from(event.target.files);
    setLoading(true);
    setError(null);

    try {
      for (const file of selectedFiles) {
        await uploadFile(file);
      }
      await fetchFiles();
    } catch (error) {
      setError("Error al subir algunos archivos");
    } finally {
      setLoading(false);
      event.target.value = "";
    }
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status !== 200) {
      throw new Error(`Error al subir ${file.name}`);
    }
  };

  const handleDelete = async (file) => {
    try {
      const response = await axios.delete(
        `${API_BASE_URL}/files/delete/${file.nameSatinize}`
      );
      if (response.status === 200) {
        setFiles((prevFiles) =>
          prevFiles.filter((f) => f.nameSatinize !== file.nameSatinize)
        );
      }
    } catch (error) {
      console.error("Error al eliminar el archivo:", error);
    }
  };

  const handleUpdateClick = (file) => {
    setFileToUpdate(file);
    updateInputRef.current.click();
  };

  const handleUpdateFileChange = async (event) => {
    const newFile = event.target.files[0];
    if (!newFile) return;
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", newFile);
      const response = await axios.put(
        `${API_BASE_URL}/files/update/${fileToUpdate.nameSatinize}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        await fetchFiles();
        console.log("Archivo actualizado exitosamente");
      }
    } catch (error) {
      console.error("Error en la actualización:", error);
      setError(
        "Error al actualizar el archivo: " +
          (error.response?.data?.message || error.message)
      );
    } finally {
      setLoading(false);
      setFileToUpdate(null);
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {/* Input de carga de archivos */}
      <input
        type="file"
        onChange={handleFileChange}
        multiple
        accept=".pdf"
        style={{ display: "none" }}
        ref={fileInputRef}
        disabled={loading}
      />

      {/* Input para la actualización de archivos */}
      <input
        type="file"
        accept=".pdf"
        style={{ display: "none" }}
        ref={updateInputRef}
        onChange={handleUpdateFileChange}
        disabled={loading}
      />

      {files.length > 0 && (
        <Box sx={{ mt: 2 }}>
          <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
            {files.map((file) => (
              <Box
                key={`${file.nameSatinize}`}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  width: "100%",
                }}
              >
                <Button
                  variant="contained"
                  component="a"
                  href={`${API_BASE_URL}/files/download/${file.nameSatinize}`}
                  download
                  sx={{
                    flex: 8,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    padding: "10px",
                  }}
                >
                  {file.name.replace(".pdf", "")}
                </Button>

                <Button
                  variant="text"
                  color="info"
                  onClick={() => handleUpdateClick(file)}
                  sx={{ minWidth: "auto", padding: 0 }}
                >
                  <EditIcon sx={{ fontSize: 20 }} />
                </Button>

                <Button
                  variant="text"
                  color="error"
                  onClick={() => handleDelete(file)}
                  sx={{
                    minWidth: "auto",
                    padding: 0,
                  }}
                >
                  <DeleteIcon sx={{ fontSize: 25 }} />
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
      )}

      <Button
        variant="contained"
        component="label"
        htmlFor="file-upload"
        onClick={() => fileInputRef.current.click()}
        disabled={loading}
        startIcon={loading && <CircularProgress size={20} />}
        sx={{ mt: 2 }}
      >
        {loading ? "Subiendo..." : "Subir Archivo"}
      </Button>
    </Box>
  );
}
