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
  const [hasFetched, setHasFetched] = useState(false);

  const roles = JSON.parse(localStorage.getItem("roles") || "[]");
  const hasRoles = (role) => roles.includes(role);

  const theme = useTheme();

  useEffect(() => {
    if (isEditing || hasFetched) return;

    const fetchZoomLink = async () => {
      try {
        setLoading(true);

        const localStorageKey = "zoom-link";
        let link;

        if (!hasRoles("secretario")) {
          const cachedLink = localStorage.getItem(localStorageKey);
          if (cachedLink) {
            setZoomLink(cachedLink);
          }

          link = await getZoomLink();

          if (!cachedLink || cachedLink !== link) {
            localStorage.setItem(localStorageKey, link || "");
          }
        } else {
          link = await getZoomLink();
        }

        setZoomLink(link || "");

        if (!link && hasRoles("secretario")) {
          setIsEditing(true);
        }
      } catch (error) {
        console.error("Error al cargar el enlace de Zoom:", error);
      } finally {
        setLoading(false);
        setHasFetched(true);
      }
    };

    fetchZoomLink();
  }, [hasRoles, isEditing, hasFetched]);

  const handleSaveLink = async () => {
    try {
      setLoading(true);
      await updateZoomLink(zoomLink);
      alert("Enlace de Zoom actualizado correctamente.");
      setIsEditing(false);
    } catch (error) {
      alert("Hubo un error al guardar el enlace.");
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <Box sx={{ mt: 4 }}>
      {isEditing ? (
        <>
          <TextField
            label="Ingresar enlace de Zoom"
            fullWidth
            value={zoomLink}
            onChange={(e) => setZoomLink(e.target.value)}
            placeholder="https://zoom.us/..."
            sx={{ mb: 2 }}
            aria-label="Ingresar enlace de Zoom"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveLink}
            aria-label="Guardar enlace de Zoom"
          >
            {loading ? "Guardando..." : "Guardar enlace"}
          </Button>
        </>
      ) : zoomLink ? (
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
              Ingresar vía Zoom
            </a>
          </Typography>

          {hasRoles("secretario") && (
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.button.main,
                color: theme.palette.text.main,
                "&:hover": {
                  backgroundColor: theme.palette.button.dark,
                },
              }}
              onClick={handleEditClick}
              aria-label="Editar enlace de Zoom"
            >
              Editar
            </Button>
          )}
        </Paper>
      ) : (
        <Typography variant="body1" sx={{ color: "#FF0000" }}>
          No está disponible el enlace a Zoom.
        </Typography>
      )}
    </Box>
  );
}
