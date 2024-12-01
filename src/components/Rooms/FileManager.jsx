import { useEffect, useState, useRef } from "react";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import UploadIcon from "@mui/icons-material/Upload";
import ArticleIcon from "@mui/icons-material/Article";

import {
  getFiles,
  uploadFile,
  deleteFile,
  updateFile,
} from "../../Services/FilesServices";
import CheckWarning from "./CheckWarning";
import { Typography } from "@mui/material";

export default function FilesMonthRooms({ salaId }) {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fileToUpdate, setFileToUpdate] = useState(null);
  const [selectedName, setSelectedName] = useState("");
  const fileInputRef = useRef(null);
  const updateInputRef = useRef(null);

  const API_BASE_URL = "http://localhost:8000/api";

  const predefinedNames = [
    "Tabla Semanal",
    "Tabla Agregada",
    "Archivo3",
    "Archivo4",
  ];

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      setLoading(true);
      setError(null);

      const formattedFiles = await getFiles(salaId);
      setFiles(formattedFiles);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = async (event) => {
    const selectedFiles = Array.from(event.target.files);
    if (!selectedName) {
      setError("Por favor, selecciona un nombre para el archivo.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      for (const file of selectedFiles) {
        const renamedFile = new File([file], `${selectedName}.pdf`, {
          type: file.type,
        });
        await uploadFile(renamedFile, salaId);
      }
      await fetchFiles();
    } catch (error) {
      setError("Error al subir algunos archivos");
    } finally {
      setLoading(false);
      event.target.value = "";
      setSelectedName("");
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

  const handleUpdateClick = (file) => {
    setFileToUpdate(file);
    updateInputRef.current.click();
  };

  const handleUpdateFileChange = async (event) => {
    const newFile = event.target.files[0];
    if (!newFile) return;
    setLoading(true);

    try {
      const updatedFile = new File([newFile], fileToUpdate.nameSatinize, {
        type: newFile.type,
      });
      console.log("updatedFile: ", updatedFile);

      await updateFile(updatedFile, salaId);
      await fetchFiles();
      console.log("Archivo actualizado exitosamente");
    } catch (error) {
      console.error("Error en la actualización:", error);
      setError("Error al actualizar el archivo: " + error.message);
    } finally {
      setLoading(false);
      setFileToUpdate(null);
    }
  };

  const [warningVisible, setWarningVisible] = useState({});

  const handleToggleWarning = (fileName, isVisible) => {
    setWarningVisible((prev) => ({
      ...prev,
      [fileName]: isVisible,
    }));
  };

  return (
    <Box>
      {error && (
        <Alert severity="error" sx={{ mb: 1 }}>
          {error}
        </Alert>
      )}
      <input
        type="file"
        onChange={handleFileChange}
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
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: "100%",
                }}
              >
                {warningVisible[file.name] && (
                  <Typography sx={{ fontSize: "0.875rem", color: "red" }}>
                    *Por favor, lee este documento
                  </Typography>
                )}

                <Box
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
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`${API_BASE_URL}/files/view/${file.nameSatinize}`}
                    sx={{
                      flex: 8,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      padding: 1,
                      position: "relative",
                      textAlign: "center",
                    }}
                  >
                    <ArticleIcon
                      style={{
                        position: "absolute",
                        left: "8px",
                      }}
                    />
                    {file.name.replace(".pdf", "")}
                  </Button>

                  <Button
                    variant="text"
                    color="info"
                    onClick={() => handleUpdateClick(file)}
                    sx={{ minWidth: "auto", padding: 0 }}
                    aria-label={`Editar archivo ${file.name}`}
                  >
                    <EditIcon sx={{ fontSize: 25 }} />
                  </Button>

                  <Button
                    variant="text"
                    color="error"
                    onClick={() => handleDelete(file)}
                    sx={{ minWidth: "auto", padding: 0 }}
                    aria-label={`Eliminar archivo ${file.name}`}
                  >
                    <DeleteIcon sx={{ fontSize: 25 }} />
                  </Button>

                  <CheckWarning
                    onToggle={(isVisible) =>
                      handleToggleWarning(file.name, isVisible)
                    }
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}
      <Box sx={{ display: "flex", gap: 1, alignItems: "center", mt: 4 }}>
        <FormControl size="small" disabled={loading} sx={{ width: "150px" }}>
          <InputLabel sx={{ fontSize: 15 }}>Nombre</InputLabel>
          <Select
            labelId="select-name-label"
            value={selectedName}
            onChange={(e) => setSelectedName(e.target.value)}
            label="Seleccionar Nombre"
            size="small"
          >
            <MenuItem value="">Nombre</MenuItem>
            {predefinedNames.map((name, index) => (
              <MenuItem key={index} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          variant="contained"
          component="label"
          onClick={() => fileInputRef.current.click()}
          disabled={loading || !selectedName}
          startIcon={
            loading ? <CircularProgress size={15} /> : <UploadIcon size={15} />
          }
          aria-label="Cargar archivo"
        >
          {loading ? "Subiendo..." : "Subir"}
        </Button>
      </Box>
    </Box>
  );
}
