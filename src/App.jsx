import { Route, Routes } from "react-router-dom";
import { Header } from "./components/partials/header/Header";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import { Footer } from "./components/partials/footer/Footer";
import "./app.css";
import CourtRoomPage from "./pages/CourtRoomPage";
import RoomPage from "./pages/RoomPage";
import { FrequentQuestions } from "./pages/FrequentQuestions";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Preguntas Frecuentes",
    path: "/preguntasFrecuentes/",
  },
  {
    title: "Moviessss",
    path: "/WebPrueba1/",
  },
];

export const App = () => {
  return (
    <>
      <Header navLinks={navLinks} />
      <div className="app-container">
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/salaDeAudiencias" element={<CourtRoomPage />}></Route>
          <Route path="/salaDeAudiencias/:id" element={<RoomPage />}></Route>
          <Route path="/preguntasFrecuentes" element={<FrequentQuestions />}></Route>
        </Routes>
      </div>

      <Footer />
    </>
  );
};
