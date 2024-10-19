import { Route, Routes } from "react-router-dom";
import { Header } from "./components/partials/header/Header";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import { Footer } from "./components/partials/footer/Footer";
import "./app.css";

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

export const App = () => {
  return (
    <>
      <div className="app-container">
        <Header navLinks={navLinks} />
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
};
