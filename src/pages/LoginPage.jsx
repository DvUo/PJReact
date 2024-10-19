// src/pages/LoginPage.js
import React from "react";
import LoginForm from "../components/LoginForm";
import { Container, Typography } from "@mui/material";

const LoginPage = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h2">
        Iniciar Sesión
      </Typography>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
