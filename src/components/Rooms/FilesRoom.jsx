import React, { useState, useRef } from "react";
import { Button, Box, Alert, CircularProgress } from "@mui/material";
import { uploadFile } from "../../Services/FilesServices";

export default function FileRoom({ salaId }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = async (event) => {
    const selectedFiles = Array.from(event.target.files);
    setLoading(true);
    setError(null);

    try {
      for (const file of selectedFiles) {
        await uploadFile(file, salaId);
      }
      console.log(`Archivos subidos exitosamente para la Sala ${salaId}`);
    } catch (error) {
      setError("Error al subir algunos archivos");
    } finally {
      setLoading(false);
      event.target.value = "";
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      {error && <Alert severity="error">{error}</Alert>}

      <input
        type="file"
        onChange={handleFileChange}
        accept=".pdf"
        style={{ display: "none" }}
        ref={fileInputRef}
        disabled={loading}
        multiple
      />

      <Button
        variant="contained"
        onClick={() => fileInputRef.current.click()}
        disabled={loading}
        startIcon={loading && <CircularProgress size={20} />}
      >
        {loading ? "Subiendo..." : "Subir Archivo"}
      </Button>
    </Box>
  );
}
