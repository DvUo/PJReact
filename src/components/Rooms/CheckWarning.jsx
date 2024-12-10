import { Box, Checkbox } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function CheckWarning({ fileName, isActive, onToggle }) {
  const handleToggle = () => {
    const newStatus = isActive ? "inactivate" : "activate";
    console.log(`Nuevo estado: ${newStatus}`);
    onToggle(fileName, newStatus);
  };

  return (
    <Box>
      <Checkbox
        checked={isActive}
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
