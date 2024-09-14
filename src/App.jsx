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
  const [loading, setLoading] = useState(true);  // For showing loading spinner
  const [error, setError] = useState(null);
  const [level, setLevel] = useState(null);

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user_) => {
      setUser(user_ || null);
      setLoading(false);  // Stop loading once user state is determined
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
      document.documentElement.setAttribute("data-bs-theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.setAttribute("data-bs-theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleSetDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };

  if (loading) {
    return <div>Loading...</div>;  // Display a loading spinner or screen
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
              <MainLayout darkMode={darkMode} handleSetDarkMode={handleSetDarkMode} user={user}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/artists" element={<Artists />} />
                  <Route path="/booking" element={<Booking />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/event/:id" element={<Event />} />
                  <Route path="*" element={<Error />} />
                </Routes>
              </MainLayout>
            }
          />
        )}

        {level === 2 && (
          <Route
            path="*"
            element={
              <>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/addEvent" element={<AddEvent user={user} />} />
                  <Route path="*" element={<Error />} />
                </Routes>
                <Footer /> {/* Footer should be placed outside of Routes */}
              </>
            }
          />
        )}

        <Route path="/login" element={<Login darkMode={darkMode} handleSetDarkMode={handleSetDarkMode} />} />
        <Route path="/signUp" element={<Login darkMode={darkMode} handleSetDarkMode={handleSetDarkMode} />} />
      </Routes>
    </Router>
  );
}

export default App;
