import { Route, Routes } from "react-router-dom";
import { Header } from "./components/partials/header/Header";
import { UserProvider } from "./components/context/UserContext";
import Home from "./pages/Home";
import { Footer } from "./components/partials/footer/Footer";
import "./app.css";
import CourtRoomPage from "./pages/CourtRoomPage";
import RoomPage from "./pages/RoomPage";
import { FrequentQuestions } from "./pages/FrequentQuestions";
import { lazy, Suspense } from "react";
import Logout from "./components/Logout"

const navLinks = [
  {
    title: "Inicio",
    path: "/",
  },
  {
    title: "Preguntas Frecuentes",
    path: "/preguntasFrecuentes/",
  },
  {
    title: "Informacion general",
    path: "/WebPrueba1/",
  },
  {
    title: "Noticias regionales",
    path: "/WebPrueba1/",
  },

  ...(localStorage.getItem('token') ? [{
    title: "Cerrar sesión",
    path: "/logout",
  }] : []),
];
const LoginPage = lazy(() => import("./pages/LoginPage"));

export const App = () => {
  return (
    <>
      <UserProvider>
      <Header navLinks={navLinks} />
      <div className="app-container">
        <Suspense fallback={<div>Cargando...</div>}>
          <Routes>
            <Route path={"/"} element={<Home />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/salaDeAudiencias" element={<CourtRoomPage />}></Route>
            <Route path="/salaDeAudiencias/:id" element={<RoomPage />}></Route>
            <Route
              path="/preguntasFrecuentes"
              element={<FrequentQuestions />}
            ></Route>
            
            <Route path="/logout" element={<Logout />} /> 
          </Routes>
        </Suspense>
      </div>

      <Footer />
      </UserProvider>
    </>
  );
};
