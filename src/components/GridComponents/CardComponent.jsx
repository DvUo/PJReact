import { Link } from "react-router-dom";
import "./cardcomponent.css";

export const CardComponent = ({ url, img, title }) => {
  return (
    <>
      <Link to={url} className="card-link">
        <img src={img} alt={title} className="img-card" />
      </Link>
    </>
  );
};
