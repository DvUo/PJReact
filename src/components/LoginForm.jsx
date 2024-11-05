import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import Box from "@mui/material/Box";
import "./LoginForm.css";
import { useUser} from "../components/context/UserContext";

axios.defaults.withCredentials = true;

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useUser();  // Obtener la función login del contexto

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      await axios.get("http://localhost:8000/sanctum/csrf-cookie");

      const response = await axios.post('http://localhost:8000/api/login', values, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });

      if (response.data.token) {
        // Usa el método `login` del contexto para actualizar el estado de autenticación
        login(
          response.data.token,
          response.data.user.name,
          response.data.user.roles,
          response.data.user.permissions
        );

        // Configura el encabezado de autorización
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

        // Redirige al usuario a la página de inicio
        navigate('/');
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);

      if (error.response) {
        setErrors(error.response.data.errors || {
          general: error.response.data.message
        });
      } else {
        setErrors({
          general: "Error de conexión con el servidor"
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

