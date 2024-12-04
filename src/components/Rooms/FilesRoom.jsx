import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import FileManager from "../Rooms/FileManager";
import ZoomLink from "./ZoomLink";

export default function FilesRoom({ salaId }) {
  return (
    <Box width={"80%"} component={"article"}>
      <Typography
        component="h3"
        variant="h6"
        sx={{
          textAlign: "center",
        }}
      >
        Información de sala {salaId}
      </Typography>
      <FileManager salaId={salaId} />
      <ZoomLink />
    </Box>
  );
}
