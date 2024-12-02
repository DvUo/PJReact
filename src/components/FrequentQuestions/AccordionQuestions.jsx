import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useEffect, useState } from "react";
import {
  getQuestions,
  storeQuestion,
  deleteQuestion,
} from "./Questions";

export const AccordionQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({ question: "", answer: "" });
  const [showInputs, setShowInputs] = useState(false);
  const roles = JSON.parse(localStorage.getItem('roles') || '[]');

  const hasRoles = (role) => roles.includes(role);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await getQuestions();

        const data = response.data;
        setQuestions(Array.isArray(data) ? data : []);
      } catch (error) {

        setQuestions([]);
      }
    };
    fetchQuestions();
  }, []);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewQuestion({ ...newQuestion, [name]: value });
  };

  const handleAddQuestion = async () => {
    if (!newQuestion.question || !newQuestion.answer) {
      alert("Por favor, completa ambos campos.");
      return;
    }
    try {
      
      const response = await storeQuestion(newQuestion);

      
      const savedQuestion = response?.data;

      if (savedQuestion && savedQuestion.id) {
        setQuestions([...questions, savedQuestion]); 
      } else {
        console.error("La respuesta del backend no tiene el formato esperado:", response);
      }

      setNewQuestion({ question: "", answer: "" });
      setShowInputs(false);
    } catch (error) {
      console.error("Error al guardar la pregunta:", error);
    }
  };



  const handleDeleteQuestion = async (id) => {
    try {
      await deleteQuestion(id);
      setQuestions(questions.filter((q) => q.id !== id));
    } catch (error) {
      console.error("Error al eliminar la pregunta:", error);
    }
  };

  return (
    <div>
      {questions.map((item, index) => (
        <Accordion
          key={index}
          sx={{
            background: "#ade8f4",
            margin: "1em 0",
            borderRadius: "20px",
            boxShadow: "0 5px 5px #0001",
          }}
        >
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
            <IconButton
              onClick={() => handleDeleteQuestion(item.id)}
              sx={{ marginLeft: "auto", color: "red" }}
            >
              <DeleteIcon />
            </IconButton>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#333",
              }}
            >
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Botón para mostrar/ocultar los inputs */}
      <div style={{ display: "flex", justifyContent: "center", margin: "1em 0" }}>
        <IconButton onClick={() => setShowInputs(!showInputs)} color="primary">
          <AddCircleIcon fontSize="large" />
        </IconButton>
      </div>
      {
        hasRoles('secretario') && (
          <>
            {/* Inputs para agregar una nueva pregunta */}
            {showInputs && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "1em",
                }}
              >
                <TextField
                  label="Pregunta"
                  name="question"
                  value={newQuestion.question}
                  onChange={handleInputChange}
                  fullWidth
                  sx={{ marginBottom: "1em" }}
                />
                <TextField
                  label="Respuesta"
                  name="answer"
                  value={newQuestion.answer}
                  onChange={handleInputChange}
                  fullWidth
                  multiline
                  rows={3}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddQuestion}
                  sx={{ marginTop: "1em" }}
                >
                  Guardar
                </Button>
              </div>
            )}
          </>
        )
      }
      
    </div>
  );
};
