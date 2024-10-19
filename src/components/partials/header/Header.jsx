import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./Header.css";


export const Header = ({ navLinks }) => {
  return (
    <>
      <header className="container-nav">
        <Box className="logo">
          <Link className="navbar-brand" to="/">
            <img
              id="header-logo"
              src="img/logo.png" // Cambia esto a la ruta correcta de tu logo
              alt="Logo"
              className="img-fluid"
            />
          </Link>
        </Box>

          <Box component="nav">
            <Box component="ul" sx={{ listStyleType: "none", padding: "0 10px", margin:0, display: "flex" }}>
              {navLinks.map((item) => (
                <Box component="li" key={item.title}>
                  <Link
                    to={item.path}
                  >
                    {item.title}
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
      </header>
    </>
  );
};
