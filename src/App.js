import "./index.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Appointment from "./Components/pages/Appointment";

function App() {
  return (
    <article>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </article>
  );
}

export default App;
