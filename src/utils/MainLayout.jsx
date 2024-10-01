import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom"; // Import Outlet

const MainLayout = (props) => {
  const { darkMode, handleSetDarkMode, isLogined } = props;

  return (
    <>
      <Navbar
        handleSetDarkMode={handleSetDarkMode}
        darkMode={darkMode}
        isLogined={isLogined}
      />
      <main>
        <Outlet darkMode={darkMode} /> {/* This will render nested routes */}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
