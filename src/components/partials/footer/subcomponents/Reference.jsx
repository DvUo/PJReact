import { Link } from "@mui/material";
import "./reference.css";

export const Reference = ({text, direction }) => {
  return (
    <Link
      href={direction}
      target="_blank"
      rel="noopener"
      color="inherit"
      className="reference"
    >
      {text}
    </Link>
  );
}
