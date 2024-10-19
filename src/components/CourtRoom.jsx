import { Grid2, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function CourtRoom() {
  const cards = ["Salas", "Archivos semanales"];
  return (
    <Grid2
      container
      spacing={3}
      sx={{ justifyContent: "center", m: 3, alignItems: "center" }}
      component={"main"}
    >
      {cards.map((card, index) => (
        <Grid2 xs={12} sm={6} md={3} key={index}>
          <Paper
            component={"section"}
            elevation={5}
            sx={{ height: "400px", minWidth: "350px", p: 2 }}
          >
            <Typography component="header" variant="h5">
              {card}
            </Typography>

            {card === "Salas" && (
              <div>
                {Array.from({ length: 3 }, (_, i) => (
                  <Typography variant="body2" key={i}>
                    <Link to={`/salaDeAudiencias/${i + 1}`}>Sala {i + 1}</Link>
                  </Typography>
                ))}
              </div>
            )}

            {card === "Archivos semanales" && (
              <Typography variant="body2">Archivos de la semana</Typography>
            )}
          </Paper>
        </Grid2>
      ))}
    </Grid2>
  );
}
