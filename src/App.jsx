import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Events from "./pages/events";
import Event from "./pages/event";
import Booking from "./pages/booking";
import Footer from "./sections/Footer";
import Newsletter from "./sections/Newsletter";
import { events } from "./constants";
import { useState } from "react";

function App() {
  let mode = localStorage.getItem("darkMode") || true;
  const [darkMode, setDarkMode] = useState(mode);
  if (darkMode) {
    document.getElementsByTagName("html")[0].setAttribute("data-bs-theme", "dark");
    document.querySelector(":root").style.setProperty("--white", "255, 255, 255");
    document.querySelector(":root").style.setProperty("--black", "0, 0, 0");
  } else {
    document.getElementsByTagName("html")[0].setAttribute("data-bs-theme", "light");
    document.querySelector(":root").style.setProperty("--white", "0, 0, 0");
    document.querySelector(":root").style.setProperty("--black", "255, 255, 255");
  }
  const handleSetDarkMode = () => {
    setDarkMode (!darkMode)
    localStorage.setItem("darkMode", !darkMode)
  }
  return (
    <Router>
      <Navbar handleSetDarkMode={handleSetDarkMode} darkMode={darkMode}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/booking" element={<Booking />} />
        {events.map((val, index) => (
          <Route key={index} path={val.link_name} element={<Event />} />
        ))}
      </Routes>
      <Newsletter/>
      <Footer />
    </Router>
  );
}

export default App;
