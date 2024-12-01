import {
  TextField,
  Button,
  Box,
  Paper,
  Typography,
  Avatar,
} from "@mui/material";
import { useState, useEffect } from "react";
import { getZoomLink, updateZoomLink } from "../../Services/ZoomServices";
import { useTheme } from "@mui/material/styles";
import zoomIcon from "../../img/zoomIcon.svg";

export default function ZoomLink() {
  const [zoomLink, setZoomLink] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const theme = useTheme();

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

  const handleSaveLink = async () => {
    try {
      setLoading(true);
      await updateZoomLink(zoomLink);
      alert("Enlace de Zoom actualizado correctamente.");
      setIsEditing(false);
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
            <Paper
              sx={{
                p: 1,
                display: "flex",
                alignItems: "center",
                background: "#2673EF",
                color: "#ffff",
                gap: 2,
              }}
            >
              <Avatar
                src={zoomIcon}
                alt="Zoom Icon"
                sx={{
                  width: 30,
                  height: 30,
                  bgcolor: theme.palette.background.default,
                }}
              />

              <Typography
                variant="body1"
                sx={{
                  flexGrow: 1,
                  color: "#ffffff",
                }}
              >
                <a
                  href={zoomLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Enlace a la reunión de Zoom"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Ingresar via Zoom
                </a>
              </Typography>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.button.main,
                  color: theme.palette.text.main,
                  "&:hover": {
                    backgroundColor: theme.palette.button.dark,
                  },
                }}
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
