import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => navigate(-1)}
      sx={{
        position: "absolute",
        top: "0.5rem",
        left: "0.5rem",
        backgroundColor: (theme) => theme.palette.button.dark,
        "&:hover": {
          backgroundColor: (theme) => theme.palette.button.main,
        },
        zIndex: 1000,
      }}
      startIcon={<KeyboardBackspaceIcon />}
    >
      Volver
    </Button>
  );
}
