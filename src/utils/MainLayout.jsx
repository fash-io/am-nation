import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function MainLayout(props) {
  const { children, darkMode, handleSetDarkMode, isLogined } = props;
  
  return (
    <>
      <Navbar
        handleSetDarkMode={handleSetDarkMode}
        darkMode={darkMode}
        isLogined={isLogined}
      />
      {children}
      <Footer />
    </>
  );
}
