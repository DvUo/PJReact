import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, Button, Box } from "@mui/material";
import "./LoginForm.css";

const LoginForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box className="form-container">
      <Formik
        initialValues={{ usuario: "", password: "" }}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <Box className="form-box">
              <Box className="form-field">
                <label htmlFor="usuario">Usuario</label>
                <Field
                  as={TextField}
                  required
                  fullWidth
                  id="usuario"
                  name="usuario"
                  autoComplete="username"
                  helperText={<ErrorMessage name="usuario" />}
                />
              </Box>
              <Box className="form-field">
                <label htmlFor="password">Contraseña</label>
                <Field
                  as={TextField}
                  required
                  fullWidth
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  helperText={<ErrorMessage name="password" />}
                />
              </Box>
              <Button
                type="submit"
                variant="contained"
                color="button"
                className="submit-button"
                sx={{
                  color: "#ffff",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  width: "50%",
                  p: 1,
                  borderRadius: 2,
                  margin: "1rem auto 0px auto",
                  transition: "transform 0.3s ease, background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#1E73C2",
                    transform: "scale(1.01) translateY(-3px)",
                  },
                }}
              >
                Iniciar Sesión
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default LoginForm;
