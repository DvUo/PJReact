import { Grid2, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import GuideRoom from "../components/GuideRoom";
import ContentRoom from "../components/ContentRoom";
import FileRoom from "../components/FileRoom";

export default function RoomPage() {
  const { id } = useParams();

  return (
    <Grid2 container spacing={3} sx={{ justifyContent: "center", m: 3 }}>
      <Grid2 xs={12}>
        <Paper elevation={5} sx={{ p: 2 }}>
          <Typography variant="h4">Sala {id}</Typography>
          <GuideRoom />
        </Paper>
      </Grid2>
      <Grid2 xs={12} sm={6}>
        <Paper elevation={5} sx={{ p: 2 }}>
          <ContentRoom salaId={id} />
        </Paper>
      </Grid2>
      <Grid2 xs={12} sm={6}>
        <Paper elevation={5} sx={{ p: 2 }}>
          <FileRoom salaId={id} />
        </Paper>
      </Grid2>
    </Grid2>
  );
}
