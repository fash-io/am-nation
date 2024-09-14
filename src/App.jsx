import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Events,
  Event,
  Artists,
  Error,
  AboutUs,
  Login,
  AddEvent,
  ViewEvents,
} from "./pages";
import Booking from "./pages/Booking";
import { useState, useEffect } from "react";
import MainLayout from "./utils/MainLayout";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import EditEventPage from "./pages/EditEvent";

function App() {
  const initialMode = JSON.parse(localStorage.getItem("darkMode")) || false;
  const [darkMode, setDarkMode] = useState(initialMode);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // For showing loading spinner
  const [error, setError] = useState(null);
  const [level, setLevel] = useState(null);

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user_) => {
      setUser(user_ || null);
      setLoading(false); // Stop loading once user state is determined
    });

    return () => unsubscribe();
  }, []);

  // Fetch user authorization level
  useEffect(() => {
    if (user) {
      const getUserAuthorization = async () => {
        try {
          const userDocRef = doc(db, "users", user.uid);
          const userDocSnap = await getDoc(userDocRef);
          if (!userDocSnap.exists()) {
            setError("User document not found.");
          } else {
            setLevel(userDocSnap.data().type);
          }
        } catch (err) {
          setError("Failed to fetch user data.");
          console.log(err);
        }
      };
      getUserAuthorization();
    }
  }, [user]);

  // Handle dark mode toggling
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

  if (loading) {
    return <div>Loading...</div>; // Display a loading spinner or screen
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <Router>
      <Routes>
        {level === 1 && (
          <Route
            path="/"
            element={
              <MainLayout
                darkMode={darkMode}
                handleSetDarkMode={handleSetDarkMode}
                isLogined={user}
              />
            }
          >
            <Route index element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/event/:id" element={<Event />} />
          </Route>
        )}
        {level === 2 && (
          <Route path="/">
            <Route index element={<ViewEvents user={user} />} />
            <Route path="/addEvent" element={<AddEvent user={user} />} />
            <Route path="/event/:id" element={<EditEventPage />} />
          </Route>
        )}

        <Route
          path="/"
          element={
            <Login darkMode={darkMode} handleSetDarkMode={handleSetDarkMode} />
          }
        />
        <Route
          path="/signUp"
          element={
            <Login darkMode={darkMode} handleSetDarkMode={handleSetDarkMode} />
          }
        />
        <Route
          path="/login"
          element={
            <Login darkMode={darkMode} handleSetDarkMode={handleSetDarkMode} />
          }
        />

        {/* Catch-all route for 404 errors */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
