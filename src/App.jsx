import { Route, Routes } from "react-router-dom";

import { useState, useEffect } from "react";
import MainLayout from "./utils/MainLayout";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import Home from "./pages/Home";
import EventsPage from "./pages/EventsPage";
import Artists from "./pages/Artists";
import AboutUs from "./pages/AboutUs";
import EventPage from "./pages/EventPage";
import MyEventsPage from "./pages/MyEventsPage";
import AddEvent from "./pages/AddEvent";
import EditEventPage from "./pages/EditEventPage";
import Login from "./pages/Login";
import Error from "./pages/Error";

const App = () => {
  const initialMode = JSON.parse(localStorage.getItem("darkMode")) || false;
  const [darkMode, setDarkMode] = useState(initialMode);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [level, setLevel] = useState(0);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user_) => {
      setUser(user_ || null);
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
          } else {
            setLevel(userDocSnap.data().type);
          }
        } catch (err) {
          setError("Failed to fetch user data.");
        }
      };
      getUserAuthorization();
    }
  }, [user]);

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
            <Route path="/events" element={<EventsPage />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/event/:id" element={<EventPage />} />
          </Route>
        )}
        {level === 2 && (
          <Route path="/">
            <Route index element={<MyEventsPage user={user} />} />
            <Route path="/add-event" element={<AddEvent user={user} />} />
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
        
        <Route path="*" element={<Error />} />
      </Routes>
  );
}

export default App;
