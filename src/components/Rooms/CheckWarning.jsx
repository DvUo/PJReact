import { Box, Checkbox } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";

export default function CheckWarning({ onToggle }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onToggle(newCheckedState);
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
        sx={{ width: 25 }}
      />
    </Box>
  );
}
