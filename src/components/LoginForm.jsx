import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, Button, Box, Typography } from "@mui/material";
import "./LoginForm.css"; // Importa el archivo CSS

const LoginForm = () => {
  const handleSubmit = (values) => {
    // Lógica de envío de formulario aquí
    console.log(values);
  };

  return (
    <Box className="form-container">
      <Formik
        initialValues={{ name: "", password: "" }}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, values }) => (
          <Form>
            <Box className="form-box">
              <Box className="form-field">
                <label htmlFor="name">Nombre</label>
                <Field
                  as={TextField}
                  required
                  fullWidth
                  id="name"
                  name="name"
                  helperText={<ErrorMessage name="name" />}
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
                  helperText={<ErrorMessage name="password" />}
                />
              </Box>
              <Button
                type="submit"
                variant="contained"
                color="buttonLogin"
                className="submit-button"
                sx={{
                  p: 1,
                  mt: 3,
                  borderRadius: 2,
                  transition: "transform 0.3s ease, background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#3e8cd3",
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
