import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/material/styles";
import zoomIcon from "../../img/zoomIcon.svg";
import { getZoomLink, updateZoomLink } from "../../Services/ZoomServices";
import DialogZoom from "./DialogZoom"; // Importamos el nuevo componente

export default function ZoomLink() {
  const [zoomLink, setZoomLink] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

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

        if (!hasRoles("ingeniero")) {
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

        if (!link && hasRoles("ingeniero")) {
          setIsEditing(true);
        }
      } catch (error) {
      } finally {
        setLoading(false);
        setHasFetched(true);
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
      alert("Hubo un error al guardar el enlace.");
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDialogClose = (accept) => {
    setOpenDialog(false);
    if (accept) {
      window.open(zoomLink, "_blank"); // Redirige al enlace
    }
  };

  const handleLinkClick = (e) => {
    e.preventDefault(); // Previene la redirección inmediata
    setOpenDialog(true); // Muestra el dialog
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
              onClick={handleLinkClick}
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Ingresar vía Zoom
            </a>
          </Typography>

          {hasRoles("ingeniero") && (
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

      <DialogZoom
        open={openDialog}
        onClose={handleDialogClose}
        onConfirm={(link) => window.open(link, "_blank")}
        zoomLink={zoomLink}
      />
    </Box>
  );
}
