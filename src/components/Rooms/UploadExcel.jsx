import axios from "axios";


const handleUpload = async (file) => {
    const formData = new FormData();
    formData.append("pdf", file);
  
    try {
      const response = await axios.post("/api/upload-pdf", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("PDF subido:", response.data);
    } catch (error) {
      console.error("Error al subir el PDF:", error);
    }
  };