import React, { useEffect, useState, useRef } from "react";
import { Button, Box, CircularProgress, Alert } from "@mui/material";
import {
  getFiles,
  uploadFile,
  deleteFile,
  updateFile,
} from "../../Services/FilesServices";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function FilesMonthRooms() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fileToUpdate, setFileToUpdate] = useState(null);
  const fileInputRef = useRef(null);
  const updateInputRef = useRef(null);

  const roles = JSON.parse(localStorage.getItem('roles') || '[]');

  const hasRoles = (role) => roles.includes(role);

  const API_BASE_URL = "http://localhost:8000/api";

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      setLoading(true);
      setError(null);
      const formattedFiles = await getFiles();
      setFiles(formattedFiles);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = async (event, sala = 0) => {
    const selectedFiles = Array.from(event.target.files);
    setLoading(true);
    setError(null);

    try {
      for (const file of selectedFiles) {
        await uploadFile(file, sala);
      }
      await fetchFiles();
    } catch (error) {
      setError("Error al subir algunos archivos");
    } finally {
      setLoading(false);
      event.target.value = "";
    }
  };

  const handleDelete = async (file) => {
    try {
      await deleteFile(file.nameSatinize);
      setFiles((prevFiles) =>
        prevFiles.filter((f) => f.nameSatinize !== file.nameSatinize)
      );
    } catch (error) {
      console.error("Error al eliminar el archivo:", error);
      setError("Error al eliminar el archivo: " + error.message);
    }
  };

  const handleUpdateClick = (file, sala) => {
    setFileToUpdate({ ...file, sala });
    updateInputRef.current.click();
  };

  const handleUpdateFileChange = async (event) => {
    const newFile = event.target.files[0];
    if (!newFile) return;
    setLoading(true);

    try {
      await updateFile(newFile, fileToUpdate); // Llama a la función de servicio
      await fetchFiles(); // Obtiene los archivos después de actualizar
      console.log("Archivo actualizado exitosamente");
    } catch (error) {
      console.error("Error en la actualización:", error);
      setError("Error al actualizar el archivo: " + error.message);
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

      <input
        type="file"
        onChange={(e) => handleFileChange(e, 0)}
        accept=".pdf"
        style={{ display: "none" }}
        ref={fileInputRef}
        disabled={loading}
      />

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
                  onClick={() => handleUpdateClick(file, 0)}
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
      {hasRoles('secretario') && (
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
      )}
      
    </Box>
  );
}
