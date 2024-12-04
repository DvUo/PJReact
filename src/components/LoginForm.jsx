import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  Container,
  Paper
} from "@mui/material";
import axios from "axios";
import { useUser } from "../components/context/UserContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useUser();
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "El nombre de usuario es requerido";
    }

    if (!values.password) {
      errors.password = "La contraseña es requerida";
    }

    return errors;
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const BASE_URL = import.meta.env.VITE_API_BASE_URL;

      const response = await axios.post(
        `${BASE_URL}/api/login`,
        values,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.data.token) {
        login(
          response.data.token,
          response.data.user.name,
          response.data.user.roles,
          response.data.user.permissions
        );

        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;

        navigate("/");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);

      if (error.response) {
        setErrorMessage(
          error.response.data.message || "Credenciales incorrectas"
        );
      } else {
        setErrorMessage("Error de conexión con el servidor");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: {
            xs: 2,  // Pequeño
            sm: 3,  // Mediano
            md: 4   // Grande
          },
          borderRadius: 2
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            mb: {
              xs: 2,
              sm: 3,
              md: 4
            }
          }}
        >
          Iniciar Sesión
        </Typography>

        {errorMessage && (
          <Alert
            severity="error"
            onClose={() => setErrorMessage("")}
            sx={{
              mb: {
                xs: 1,
                sm: 2,
                md: 3
              }
            }}
          >
            {errorMessage}
          </Alert>
        )}

        <Formik
          initialValues={{ username: '', password: '' }}
          validate={validateForm}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: {
                  xs: 1,
                  sm: 2,
                  md: 3
                }
              }}>
                <Field
                  as={TextField}
                  name="username"
                  label="Nombre de usuario"
                  variant="outlined"
                  fullWidth
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                  sx={{
                    mb: {
                      xs: 1,
                      sm: 2
                    }
                  }}
                />

                <Field
                  as={TextField}
                  name="password"
                  type="password"
                  label="Contraseña"
                  variant="outlined"
                  fullWidth
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  sx={{
                    mb: {
                      xs: 1,
                      sm: 2
                    }
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  sx={{
                    mt: {
                      xs: 1,
                      sm: 2,
                      md: 3
                    },
                    py: {
                      xs: 1,
                      sm: 1.5,
                      md: 2
                    }
                  }}
                >
                  {isSubmitting ? "Iniciando sesión..." : "Iniciar Sesión"}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default LoginForm;