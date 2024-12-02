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
import { GeneralInformation } from "./pages/GeneralInformation";
import Opening_of_files_and_oath_of_lawyers from "./pages/opening_of_files_and_oath_of_lawyers";

const LoginPage = lazy(() => import("./pages/LoginPage"));

const AppContent = () => {
  const { isAuthenticated } = useUser();

  const navLinks = [
    { title: "Inicio", path: "/" },
    { title: "Preguntas Frecuentes", path: "/preguntas-frecuentes/" },
    { title: "Informacion general", path: "/general-information/" },
    {
      title: "Noticias regionales",
      path: "https://www.pjud.cl/prensa-y-comunicaciones/noticias-del-poder-judicial",
      isExternal: true,
    },
    ...(isAuthenticated ? [{ title: "Cerrar sesión", path: "/logout" }] : []),
  ];

  return (
    <>
      <Header navLinks={navLinks} />
      <div className="app-container">
        <Suspense fallback={<div>Cargando...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sala-de-audiencias" element={<CourtRoomPage />} />
            <Route
              path="/Apertura-juramentos"
              element={<Opening_of_files_and_oath_of_lawyers />}
            />
            <Route path="/sala-de-audiencias/:id" element={<RoomPage />} />
            <Route
              path="/preguntas-frecuentes"
              element={<FrequentQuestions />}
            />
            <Route
              path="/general-information"
              element={<GeneralInformation />}
            />
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
