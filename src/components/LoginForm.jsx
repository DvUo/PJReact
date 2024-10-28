import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
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
                  aria-required="true"
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
                  aria-required="true"
                  autoComplete="current-password"
                  helperText={<ErrorMessage name="password" />}
                />
              </Box>
              <Button
                type="submit"
                variant="contained"
                className="submit-button"
                aria-label="Iniciar sesión"
                sx={{
                  backgroundColor: (theme) => theme.palette.button.main,
                  fontSize: "1rem",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  width: "50%",
                  p: 1,
                  borderRadius: 2,
                  margin: "1rem auto 0px auto",
                  transition: "transform 0.3s ease, background-color 0.3s ease",
                  willChange: "transform",
                  "&:hover": {
                    backgroundColor: (theme) => theme.palette.button.light,
                    transform: "scale(1.05) translateY(-3px)",
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
