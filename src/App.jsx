import { Route, Routes } from "react-router-dom";
import { Header } from "./components/partials/header/Header"
import Home  from "./pages/Home" 

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
    title: "Movies",
    path: "/WebPrueba1/",
  },

];

export const App = () => {
  return (
    <>
        <Header navLinks={navLinks}/>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
        </Routes>
    </>
  )
}
