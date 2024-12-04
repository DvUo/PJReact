import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import Box from "@mui/material/Box";
import "./LoginForm.css";
import { useUser } from "../components/context/UserContext";

axios.defaults.withCredentials = true;

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useUser();

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const BASE_URL = import.meta.env.VITE_API_BASE_URL;

      const response = await axios.post(`${BASE_URL}/login`, values, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

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
        setErrors(
          error.response.data.errors || {
            general: error.response.data.message,
          }
        );
      } else {
        setErrors({
          general: "Error de conexión con el servidor",
        });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box className="form-container">
      <Formik
        initialValues={{ name: "", password: "" }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box className="form-box">
              <Box className="form-field">
                <label htmlFor="name">Nombre de usuario</label>
                <Field
                  as={TextField}
                  required
                  fullWidth
                  id="name"
                  name="name"
                  aria-required="true"
                  autoComplete="username"
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
                  aria-required="true"
                  autoComplete="current-password"
                  helperText={<ErrorMessage name="password" />}
                />
              </Box>
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                className="submit-button"
              >
                {isSubmitting ? "Iniciando sesión..." : "Iniciar Sesión"}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default LoginForm;
