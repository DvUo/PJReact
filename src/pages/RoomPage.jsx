import { Grid2, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import GuideRoom from "../components/Rooms/GuideRoom";
import ContentRoom from "../components/Rooms/ContentRoom";
import FilesRoom from "../components/Rooms/FilesRoom";

export default function RoomPage() {
  const { id } = useParams();

  return (
    <Grid2
      container
      spacing={4}
      sx={{
        justifyContent: "center",
        m: 3,
      }}
    >
      <Grid2 xs={12} sm={6} md={4}>
        <Paper
          elevation={5}
          sx={{
            p: 2,
            width: {
              xs: "300px",
              sm: "400px",
              md: "500px",
            },
            minHeight: "350px",
          }}
        >
          <Typography variant="h4">Guia a seguir</Typography>
          <GuideRoom />
        </Paper>
      </Grid2>
      <Grid2 xs={12} sm={6} md={4}>
        <Paper
          elevation={5}
          sx={{
            p: 2,
            width: {
              xs: "300px",
              sm: "400px",
              md: "500px",
            },
            minHeight: "350px",
          }}
        >
          <ContentRoom salaId={id} />
        </Paper>
      </Grid2>
      <Grid2 xs={12} sm={6} md={4}>
        <Paper
          elevation={5}
          sx={{
            p: 2,
            width: {
              xs: "300px",
              sm: "400px",
              md: "500px",
            },
            minHeight: "350px",
          }}
        >
          <FilesRoom salaId={id} />
        </Paper>
      </Grid2>
    </Grid2>
  );
}
