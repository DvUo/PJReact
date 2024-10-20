import { Box, Button, Grid2, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import FilesMonthRooms from "./FilesMonthRooms";

export default function CourtRoom() {
  const cards = ["Salas", "Archivos Mensuales"];
  return (
    <Grid2
      container
      spacing={4}
      sx={{
        justifyContent: "center",
        m: "2.5rem 0",
        alignItems: "flex-start",
      }}
      component={"main"}
    >
      {cards.map((card, index) => (
        <Grid2 xs={12} sm={6} md={3} key={index}>
          <Paper
            component={"section"}
            elevation={5}
            sx={{
              minHeight: "400px",
              p: 3,
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              width: {
                xs: "300px",
                sm: "350px",
                md: "400px",
              },
              backgroundColor: (theme) => theme.palette.card.main,
            }}
          >
            <Typography
              component="header"
              variant="h4"
              sx={{
                fontWeight: "700",
                letterSpacing: 1,
                mt: 1,
                // bgcolor: "#ffff",
              }}
            >
              {card}
            </Typography>

            {card === "Salas" && (
              <Box
                sx={{
                  mt: 4,
                  mb: 4,
                }}
              >
                {Array.from({ length: 3 }, (_, i) => (
                  <Button
                    key={i}
                    variant="contained"
                    component={Link}
                    to={`/salaDeAudiencias/${i + 1}`}
                    sx={{
                      backgroundColor: (theme) => theme.palette.button.dark,
                      mt: 3,
                      width: "13rem",
                      fontSize: "1.1rem",
                      willChange: "transform, opcity",
                      transition: "transform 0.3s ease, opacity 0.3s ease",
                      transformOrigin: "center center",
                      "&:hover": {
                        transform: "scale(1.01) translateY(-2px)",
                        opacity: 0.95,
                      },
                    }}
                  >
                    Sala {i + 1}
                  </Button>
                ))}
              </Box>
            )}

            {card === "Archivos Mensuales" && <FilesMonthRooms />}
          </Paper>
        </Grid2>
      ))}
    </Grid2>
  );
}
