import { Box, Grid2, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import GuideRoom from "../components/Rooms/GuideRoom";
import ContentRoom from "../components/Rooms/ContentRoom";
import FilesRoom from "../components/Rooms/FilesRoom";
import BackButton from "../components/BackButton";

const paperStyles = (theme) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  p: 3,
  borderRadius: "1rem",
  minHeight: "350px",
  width: {
    xs: "300px",
    sm: "350px",
    md: "400px",
    lg: "500px",
  },
  backgroundColor: theme.palette.card.main,
});
export default function RoomPage() {
  const { id } = useParams();

  return (
    <Box component={"main"} sx={{ position: "relative" }}>
      <BackButton />
      <Grid2
        container
        spacing={4}
        sx={{
          justifyContent: "center",
          mt: 8,
        }}
      >
        <Grid2 xs={12} sm={6} md={4}>
          <Paper elevation={5} sx={paperStyles}>
            <Typography variant="h4">Guia a seguir</Typography>
            <GuideRoom />
          </Paper>
        </Grid2>
        <Grid2 xs={12} sm={6} md={4}>
          <Paper elevation={5} sx={paperStyles}>
            <ContentRoom salaId={id} />
          </Paper>
        </Grid2>
        <Grid2 xs={12} sm={6} md={4}>
          <Paper elevation={5} sx={paperStyles}>
            <FilesRoom salaId={id} />
          </Paper>
        </Grid2>
      </Grid2>
    </Box>
  );
}
