import React from "react";
import { Link } from "react-router-dom";
import { Box, AppBar, Toolbar } from "@mui/material";
import "./Header.css";

export const Header = ({ navLinks }) => {
  return (
    <AppBar position="static" className="container-nav" color="primary">
      <Toolbar className="toolbar">
        <Box className="logo">
          <Link to="/" aria-label="Inicio" className="navbar-brand">
            <img
              id="header-logo"
              src="img/logo.png"
              alt="Logo"
              className="logo-img"
            />
          </Link>
        </Box>
        <Box component="nav" className="navigator">
          <ul className="nav-list">
            {navLinks.map((item) => (
              <li key={item.title} className="nav-item">
                <Link className="nav-link" to={item.path}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
