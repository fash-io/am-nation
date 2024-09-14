import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Events,
  Event,
  Booking,
  Artists,
  Error,
  AboutUs,
  Login,
  AddEvent,
} from "./pages";
import { useState, useEffect } from "react";
import MainLayout from "./utils/MainLayout";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Footer, Navbar } from "./components";

function App() {
  const initialMode = JSON.parse(localStorage.getItem("darkMode")) || false;
  const [darkMode, setDarkMode] = useState(initialMode);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [level, setLevel] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user_) => {
      if (user_) {
        setUser(user_);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      const getUserAuthorization = async () => {
        try {
          const userDocRef = doc(db, "users", user.uid);
          const userDocSnap = await getDoc(userDocRef);
          if (!userDocSnap.exists()) {
            setError("User document not found.");
            setLoading(false);
            return;
          } else {
            setLevel(userDocSnap.data().type);
          }
        } catch (err) {
          console.log(err);
        }
      };
      getUserAuthorization();
    }
  }, [user]);

  console.log(level);

  console.log(user);
  useEffect(() => {
    if (darkMode) {
      document
        .getElementsByTagName("html")[0]
        .setAttribute("data-bs-theme", "dark");
      document
        .querySelector(":root")
        .style.setProperty("--white", "249, 250, 251");
      document.querySelector(":root").style.setProperty("--black", "11,18, 28");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document
        .getElementsByTagName("html")[0]
        .setAttribute("data-bs-theme", "light");
      document
        .querySelector(":root")
        .style.setProperty("--white", "11, 18, 28");
      document
        .querySelector(":root")
        .style.setProperty("--black", "249, 250, 251");
    }
  }, [darkMode]);

  const handleSetDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };

  if (level === 1) {
    return (
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <MainLayout
                darkMode={darkMode}
                handleSetDarkMode={handleSetDarkMode}
                user={user}
              >
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="/events"
            element={
              <MainLayout
                darkMode={darkMode}
                handleSetDarkMode={handleSetDarkMode}
                user={user}
              >
                <Events />
              </MainLayout>
            }
          />
          <Route
            path="/artists"
            element={
              <MainLayout
                darkMode={darkMode}
                handleSetDarkMode={handleSetDarkMode}
                user={user}
              >
                <Artists />
              </MainLayout>
            }
          />
          <Route
            path="/booking"
            element={
              <MainLayout
                darkMode={darkMode}
                handleSetDarkMode={handleSetDarkMode}
                user={user}
              >
                <Booking />
              </MainLayout>
            }
          />
          <Route
            path="/about"
            element={
              <MainLayout
                darkMode={darkMode}
                handleSetDarkMode={handleSetDarkMode}
                user={user}
              >
                <AboutUs />
              </MainLayout>
            }
          />
          <Route
            path="/event/:id"
            element={
              <MainLayout
                darkMode={darkMode}
                handleSetDarkMode={handleSetDarkMode}
                user={user}
              >
                <Event />
              </MainLayout>
            }
          />
          <Route
            path="/login"
            element={
              <Login
                darkMode={darkMode}
                handleSetDarkMode={handleSetDarkMode}
              />
            }
          />
          <Route
            path="/signUp"
            element={
              <Login
                darkMode={darkMode}
                handleSetDarkMode={handleSetDarkMode}
              />
            }
          />
          <Route path="*" element={<Error darkMode={darkMode} />} />
        </Routes>
      </Router>
    );
  } else if (level === 2) {
    return (
      <>
        <Navbar />
        <Router>
          <Routes>
            <Route path="*" element={<Error darkMode={darkMode} />} />
            <Route
            exact
            path="/"
            element={
              <MainLayout
                darkMode={darkMode}
                handleSetDarkMode={handleSetDarkMode}
                user={user}
              >
                <Home />
              </MainLayout>
            }
          />
            <Route path="/addEvent" element={<AddEvent user={user} />} />
          </Routes>
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
