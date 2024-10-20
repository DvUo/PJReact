import {
  Box,
  Typography,
  InputBase,
  IconButton,

} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { AccordionQuestions } from "./AccordionQuestions";

export const FrequentElements = () => {
  return (
    <>
      <Box className="container-input" sx={{ padding: "2em" }}>
        <Typography
          variant="h1"
          className="title-question"
          sx={{
            margin: "1em 0",
            fontWeight: "bold",
            fontSize: "3em",
            textAlign: "center",
            color: "#222",
          }}
        >
          Preguntas Frecuentes
        </Typography>

        <Box
          className="input-wrapper"
          sx={{ display: "flex", alignItems: "center", marginBottom: "2em" }}
        >
          <InputBase
            className="input-question"
            placeholder="Buscar pregunta..."
            sx={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: ".5em",
              flex: 1,
              marginRight: "0.5em",
              backgroundColor: "#fff",
              boxShadow: " inset 0 5px 10px rgba(0,0,0,0.1)",
            }}
          />
          <IconButton type="button" aria-label="search">
            <SearchIcon sx={{ fontSize: "35px", color: "#036" }} />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ padding: "2em" }}>
        <AccordionQuestions />
      </Box>
    </>
  );
};
