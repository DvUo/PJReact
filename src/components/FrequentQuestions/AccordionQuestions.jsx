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
        <Accordion key={index} sx={{ background: "#caf0f8" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            sx={{
              background: "#ade8f4",
              padding: 1,
              borderRadius: "10px",
            }}
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
          <AccordionDetails sx={{}}>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#333",
                borderTop: "1px solid #03045e",
                paddingTop: 2,
              }}
            >
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};
