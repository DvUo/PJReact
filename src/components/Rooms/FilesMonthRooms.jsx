import React from "react";
import { Box } from "@mui/material";
import FileManager from "../Rooms/FileManager";

export default function FilesMonthRooms() {
  return (
    <Box sx={{ p: 2 }}>
      <FileManager salaId={0} />
    </Box>
  );
}
