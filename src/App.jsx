import { Route, Routes } from "react-router-dom";
import { Header } from "./components/partials/header/Header";
import Home from "./pages/Home";
// import LoginPage from "./pages/LoginPage";
import { Footer } from "./components/partials/footer/Footer";
import "./app.css";
import CourtRoomPage from "./pages/CourtRoomPage";
import RoomPage from "./pages/RoomPage";
import { lazy, Suspense } from "react";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Movies",
    path: "/WebPrueba1/",
  },
  {
    title: "Moviessss",
    path: "/WebPrueba1/",
  },
];

const LoginPage = lazy(() => import("./pages/LoginPage"));

export const App = () => {
  return (
    <>
      <Header navLinks={navLinks} />

      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>

          <Route path="/login" element={<LoginPage />}></Route>

          <Route path="/salaDeAudiencias" element={<CourtRoomPage />}></Route>
          <Route path="/salaDeAudiencias/:id" element={<RoomPage />}></Route>
        </Routes>
      </Suspense>
      {/* <Footer></Footer> */}
    </>
  );
};
