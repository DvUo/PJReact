import React, { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import axios from "axios";

export default function FilesMonthRooms() {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      uploadFile(selectedFile);
      event.target.value = "";
    }
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "YOUR_LARAVEL_API_URL/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        setFiles((prevFiles) => [...prevFiles, file]);
        console.log("Archivo subido con éxito");
      } else {
        console.error("Error al subir el archivo");
      }
    } catch (error) {
      console.error("Error de red", error);
    }
  };

  return (
    <Box>
      {/* <input type="file" onChange={handleFileChange} required /> */}
      <Button variant="contained" component="label">
        Subir Archivo
      </Button>
      {/* {files.length > 0 && (
        <Typography variant="body2" sx={{ mt: 2 }}>
          Archivos subidos: {files.map((file) => file.name).join(", ")}
        </Typography>
      )} */}
    </Box>
  );
}
