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
        <Accordion key={index}  sx={{ background: "#ade8f4", margin:"1em 0", borderRadius: "20px", boxShadow:"0 5px 5px #0001"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            sx={{
              background: "#caf0f8",
              padding: 1.5,
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                color: "#000",
                fontWeight: "bold",
                
              }}
            >
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{}}>
            <Typography
              sx={{
                fontSize: "1.25em",
                color: "#333",
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
