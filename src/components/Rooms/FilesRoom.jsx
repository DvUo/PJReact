import React from "react";
import { Box } from "@mui/material";
import FileManager from "../Rooms/FileManager";
import ZoomLink from "./ZoomLink";

export default function FilesRoom({ salaId }) {
  return (
    <Box sx={{ p: 2 }}>
      <h2>Archivos Sala {salaId}</h2>
      <FileManager salaId={salaId} />
      <ZoomLink />
    </Box>
  );
}
