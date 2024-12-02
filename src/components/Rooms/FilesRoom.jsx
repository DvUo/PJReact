import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import FileManager from "../Rooms/FileManager";
import ZoomLink from "./ZoomLink";

export default function FilesRoom({ salaId }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h6">Archivos Sala {salaId}</Typography>
      <FileManager salaId={salaId} />
      <ZoomLink />
    </Box>
  );
}
