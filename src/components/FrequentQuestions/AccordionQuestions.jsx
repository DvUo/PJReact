import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {Questions} from './Questions';

const questions = Questions();

export const AccordionQuestions = () => {
  return (
    <>
      {questions.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
          >
            <Typography
              sx={{
                fontSize: "20px",
                color: "#000",
                fontWeight: "bold",
                width: "100%",
              }}
            >
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontSize: "20px", color: "#333", borderTop: "1px solid #ccc",paddingTop: 2 }}>
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};
