import { TextField, Button, Box, Paper, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { getZoomLink, updateZoomLink } from "../../Services/ZoomServices";

export default function ZoomLink() {
  const [zoomLink, setZoomLink] = useState("");
  const [isEditing, setIsEditing] = useState(false); // Estado para saber si estamos editando
  const [loading, setLoading] = useState(false);

  // Cargar el enlace de Zoom al montar el componente
  useEffect(() => {
    const fetchZoomLink = async () => {
      try {
        setLoading(true);
        const link = await getZoomLink();
        setZoomLink(link || "");
      } catch (error) {
        console.error("Error al cargar el enlace de Zoom:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchZoomLink();
  }, []);

  // Función para guardar el enlace
  const handleSaveLink = async () => {
    try {
      setLoading(true);
      await updateZoomLink(zoomLink);
      alert("Enlace de Zoom actualizado correctamente.");
      setIsEditing(false); // Deshabilitar la edición después de guardar
    } catch (error) {
      console.error("Error al guardar el enlace de Zoom:", error);
      alert("Hubo un error al guardar el enlace.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ mt: 2 }}>
      {isEditing ? (
        <>
          <TextField
            label="Ingresar enlace de Zoom"
            fullWidth
            value={zoomLink}
            onChange={(e) => setZoomLink(e.target.value)}
            placeholder="https://zoom.us/..."
            sx={{ mb: 2 }}
            disabled={loading}
            aria-label="Ingresar enlace de Zoom"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveLink}
            disabled={!zoomLink.trim() || loading}
            aria-label="Guardar enlace de Zoom"
          >
            {loading ? "Guardando..." : "Guardar enlace"}
          </Button>
        </>
      ) : (
        <>
          {zoomLink ? (
            <Paper sx={{ p: 2, mb: 2, display: "flex", alignItems: "center" }}>
              <Typography variant="body1" sx={{ mr: 2 }}>
                <a
                  href={zoomLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Enlace a la reunión de Zoom"
                >
                  {zoomLink}
                </a>
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => setIsEditing(true)}
                aria-label="Editar enlace de Zoom"
              >
                Editar
              </Button>
            </Paper>
          ) : (
            <Typography variant="body1">
              No se ha guardado ningún enlace aún.
            </Typography>
          )}
        </>
      )}
    </Box>
  );
}
