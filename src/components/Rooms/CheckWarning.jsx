import { Box, Checkbox } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState, useEffect } from "react";

export default function CheckWarning({ fileName, onToggle }) {
  const [isChecked, setIsChecked] = useState(false);

  // Cargar estado desde localStorage al montar el componente
  useEffect(() => {
    const storedState = JSON.parse(localStorage.getItem("warnings")) || {};
    if (storedState[fileName]) {
      setIsChecked(storedState[fileName]);
      onToggle(storedState[fileName]);
    }
  }, [fileName, onToggle]);

  const handleToggle = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onToggle(newCheckedState);

    const storedState = JSON.parse(localStorage.getItem("warnings")) || {};
    storedState[fileName] = newCheckedState;
    localStorage.setItem("warnings", JSON.stringify(storedState));
  };

  return (
    <Box>
      <Checkbox
        checked={isChecked}
        onChange={handleToggle}
        icon={<CheckCircleOutlineIcon />}
        checkedIcon={<CheckCircleIcon />}
        color="success"
        inputProps={{ "aria-label": "toggle check" }}
        sx={{ width: 20 }}
      />
    </Box>
  );
}
