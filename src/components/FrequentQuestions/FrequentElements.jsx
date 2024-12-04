import {
  Box,
  Typography,
} from "@mui/material";

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

      </Box>
      
      <Box sx={{ padding: "2em" }}>
        <AccordionQuestions />
      </Box>
    </>
  );
};
