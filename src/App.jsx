// App.jsx
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/partials/header/Header";
import { UserProvider, useUser } from "./components/context/UserContext";
import Home from "./pages/Home";
import { Footer } from "./components/partials/footer/Footer";
import "./app.css";
import CourtRoomPage from "./pages/CourtRoomPage";
import RoomPage from "./pages/RoomPage";
import { FrequentQuestions } from "./pages/FrequentQuestions";
import { lazy, Suspense } from "react";
import Logout from "./components/Logout";

const LoginPage = lazy(() => import("./pages/LoginPage"));

const AppContent = () => {
  const { isAuthenticated } = useUser();

  const navLinks = [
    { title: "Inicio", path: "/" },
    { title: "Preguntas Frecuentes", path: "/preguntasFrecuentes/" },
    { title: "Informacion general", path: "/WebPrueba1/" },
    { title: "Noticias regionales", path: "/WebPrueba1/" },
    ...(isAuthenticated
      ? [{ title: "Cerrar sesión", path: "/logout" }]
      : []),
  ];

  return (
    <>
      <Header navLinks={navLinks} />
      <div className="app-container">
        <Suspense fallback={<div>Cargando...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/salaDeAudiencias" element={<CourtRoomPage />} />
            <Route path="/salaDeAudiencias/:id" element={<RoomPage />} />
            <Route path="/preguntasFrecuentes" element={<FrequentQuestions />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export const App = () => {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
};
