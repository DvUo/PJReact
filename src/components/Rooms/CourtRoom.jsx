import { Box, Button, Grid2, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import justiceCourt2 from "../../img/justice-court2.svg";
import justiceCourt1 from "../../img/justice-court.svg";

import FilesMonthRooms from "./FilesMonthRooms";
import BackButton from "../BackButton";
import { useState } from "react";

export default function CourtRoom() {
  const cards = ["Salas", "Archivos"];

  return (
    <Grid2
      container
      sx={{
        position: "relative",
        justifyContent: "center",
        alignItems: "flex-start",
        mb: 4,
        mt: 1,
      }}
      component={"main"}
    >
      <BackButton />
      {cards.map((card, index) => (
        <Grid2 xs={12} sm={6} md={3} key={index} sx={{ mt: 8, mx: 3 }}>
          <Paper
            component={"section"}
            elevation={5}
            sx={{
              minHeight: "400px",
              p: 3,
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              borderRadius: "1rem",
              position: "relative",
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
                mt: 1,
                position: "relative",
              }}
            >
              {card}
            </Typography>

            {card === "Salas" && (
              <Box sx={{ mt: 4 }}>
                {Array.from({ length: 3 }, (_, i) => {
                  const [iconSrc, setIconSrc] = useState(justiceCourt2);

                  return (
                    <Button
                      key={i}
                      variant="contained"
                      component={Link}
                      to={`/sala-de-audiencias/${i + 1}`}
                      onMouseEnter={() => setIconSrc(justiceCourt1)}
                      onMouseLeave={() => setIconSrc(justiceCourt2)}
                      endIcon={
                        <img
                          src={iconSrc}
                          alt="Justice Court Icon"
                          style={{ width: 24, height: 24 }}
                        />
                      }
                      sx={{
                        backgroundColor: (theme) => theme.palette.button.dark,
                        mt: 3,
                        width: "13rem",
                        fontSize: "1.2rem",
                        letterSpacing: 1,
                        fontWeight: "700",
                        willChange: "transform, opacity",
                        transition:
                          "transform 0.3s ease, opacity 0.3s ease, background-color 0.3s ease, color 0.3s ease",
                        transformOrigin: "center center",
                        "&:hover": {
                          transform: "scale(1.05) translateY(-5px)",
                          opacity: 0.95,
                          backgroundColor: (theme) => theme.palette.card.light,
                          color: (theme) => theme.palette.button.dark,
                        },
                      }}
                    >
                      Sala {i + 1}
                    </Button>
                  );
                })}
              </Box>
            )}

            {card === "Archivos" && <FilesMonthRooms />}
          </Paper>
        </Grid2>
      ))}
    </Grid2>
  );
}
