import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import ScrollToTop from "./ScrollToTop";
import { logout } from "../utils/firebase";

export default function Navbar(props) {
  const { handleSetDarkMode, darkMode, isLogined } = props;
  // const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const navRef = useRef(null);
  const user = JSON.parse(localStorage.getItem("user"));
  // const user = isLogined
  // ? users.find(
  // (user) => user.email === user_.email && user.password === user_.password
  // )
  // : "";
  return (
    <>
      <ScrollToTop />
      <nav
        ref={navRef}
        className={`navbar fixed top-0 left-0 right-0 bg-opacity-70 backdrop-blur-md shadow-md z-50 transition-transform p-4   ${
          isNavVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between p-1 md:p-4">
          {/* Logo */}
          <Link className="text-xl md:text-2xl font-bold" to="/">
            AM<span className="text-red-500">NATION</span>
          </Link>

          {/* Toggle Button for Mobile */}
          <button
            className="md:hidden absolute right-5"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span
              className={"  fas fa-" + (isMenuOpen ? "close" : "bars")}
            ></span>
          </button>

          {/* Navigation Links */}
          <div
            className={`md:flex items-center space-x-2 md:space-x-4 ${
              isMenuOpen ? "block" : "hidden"
            } md:block`}
          >
            <div className="hidden md:flex items-center space-x-2 md:space-x-4">
              {navLinks.map((val, index) => (
                <Link
                  // {...(location.pathname === val.href
                  //   ? (document.title = val.label)
                  //   : "")}
                  key={index}
                  to={val.href}
                  // className={`hover:text-red-400 duration-150 ${
                  //   location.pathname === val.href ? "text-red-500" : ""}`}
                >
                  {val.label}
                </Link>
              ))}
            </div>

            {/* Dark Mode Toggle and Auth Buttons */}
            {!isMenuOpen && (
              <div className="flex items-center space-x-2 md:space-x-4">
                <button
                  className="p-2 bg-transparent rounded-full hover:shadow-md transition-shadow"
                  id="darkMode"
                  onClick={() => handleSetDarkMode()}
                >
                  <i className={`bi ${darkMode ? "bi-moon" : "bi-sun"}`}></i>
                </button>
                {isLogined ? (
                  <button onClick={() => logout()}>LogOut</button>
                ) : (
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <Link
                      to="/login"
                      className="px-2 py-1  about-card rounded-md text-sm md:text-base "
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="bg-white text-black about-card px-2 py-1 rounded-md text-sm md:text-base"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden ${
            isMenuOpen ? "block" : "hidden"
          }  bg-opacity-70 w-100`}
        >
          {navLinks.map((val, index) => (
            <Link
              key={index}
              to={val.href}
              className={`block w-100 p-4 hover:bg-yellow-500 ${
                location.pathname === val.href ? "bg-yellow-500" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {val.label}
            </Link>
          ))}
          <div className="flex flex-col items-center p-4 space-y-2">
            {isLogined ? (
              <>Hi, {user.uName}</>
            ) : (
              <div className="flex flex-col items-center space-y-2 w-100">
                <Link
                  to="/login"
                  className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition-colors w-full text-center"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-white bg-green-500 px-4 py-2 rounded-md hover:bg-green-600 transition-colors w-full text-center"
                >
                  Sign Up
                </Link>
              </div>
            )}
            <button
              className=" p-2 bg-transparent rounded-full hover:shadow-md transition-shadow"
              id="darkMode"
              onClick={() => handleSetDarkMode()}
            >
              <i className={`bi ${darkMode ? "bi-moon" : "bi-sun"}`}></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
