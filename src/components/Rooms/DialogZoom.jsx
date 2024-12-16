import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function DialogZoom({ open, onClose, onConfirm, zoomLink }) {
  return (
    <Dialog open={open} onClose={() => onClose(false)}>
      <DialogTitle>Verificar cuenta de Zoom</DialogTitle>
      <DialogContent>
        <Typography variant="body1" sx={{ color: "#FF0000" }}>
          Por favor, asegúrese de que la cuenta de Zoom corresponda con su
          nombre.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose(false)}>Cancelar</Button>
        <Button
          onClick={() => {
            onClose(false);
            onConfirm(zoomLink);
          }}
          sx={{ color: "#008000" }}
          autoFocus
        >
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
