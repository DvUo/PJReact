import { Button, Typography } from "@mui/material";

export default function FileRoom({ salaId }) {

  const handleUpload = () => {
    console.log(`Subiendo archivos para la Sala ${salaId}`);
  };

  return (
    <div>
      <Typography variant="h6">Subir Archivos</Typography>
      <Button variant="contained" onClick={handleUpload}>
        Subir Archivos
      </Button>
    </div>

  );
}
