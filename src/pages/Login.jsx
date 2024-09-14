import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { login, signup } from "../utils/firebase"; // Firebase functions

export default function Login(props) {
  const { darkMode, handleSetDarkMode, setIsLogined } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [type, setType] = useState(1);
  const location = useLocation();
  const isLogin = location.pathname === "/login";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`|\\])[A-Za-z\d!@#$%^&*()_+{}\[\]:;"'<>,.?/~`|\\]{8,}$/;

    // Validation
    if (!emailRegex.test(email)) {
      setError("Invalid email");
      return;
    }
    if (!isLogin) {
      if (!passwordRegex.test(password)) {
        setError(
          "Password must be at least 8 characters long, contain an uppercase letter, and a special character."
        );
        return;
      }
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }
    }

    try {
      if (isLogin) {
        await login(email, password);
        window.location = "/";
        setSuccess("Logged in successfully!");
      } else {
        await signup(username, email, password, type);
        setSuccess("Account created successfully!");
      }
      // Clear form on success
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setUsername("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex">
      <span className="fixed right-[10%] top-[10%]">
        <button
          className="p-2 bg-transparent rounded-full hover:shadow-md transition-shadow"
          onClick={handleSetDarkMode}
        >
          <i className={`bi ${darkMode ? "bi-moon" : "bi-sun"}`}></i>
        </button>
      </span>

      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-full">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          AM <span className="text-red-600">NATION</span>
        </Link>

        <div className="w-full bg- rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 sm:p-8">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              {isLogin
                ? `Sign in as ${type === 1 ? "User" : "Organizer"}`
                : `Create your ${type === 1 ? "User" : "Organizer"} account`}
            </h1>
            <button
              className="text-gray-500 text-xs font-medium"
              onClick={() => setType(type === 1 ? 2 : 1)}
            >
              Change to {type === 1 ? "Organizer" : "User"}
            </button>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {error && <p className="text-sm text-red-500">{error}</p>}
              {success && <p className="text-sm text-green-500">{success}</p>}

              {!isLogin && (
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="bg-gray-50 border text-gray-900 rounded-lg w-full p-2.5 dark:bg-gray-700"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              )}

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border text-gray-900 rounded-lg w-full p-2.5 dark:bg-gray-700"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border text-gray-900 rounded-lg w-full p-2.5 dark:bg-gray-700"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {!isLogin && (
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirm-password"
                    className="bg-gray-50 border text-gray-900 rounded-lg w-full p-2.5 dark:bg-gray-700"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="text-sm text-gray-500 dark:text-gray-300">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded bg-gray-50 dark:bg-gray-700"
                    />
                    Remember me
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-primary-600 dark:text-primary-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              )}

              <button
                type="submit"
                className="w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 dark:bg-primary-700"
              >
                {isLogin ? "Sign in" : "Sign up"}
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                {isLogin
                  ? "Don't have an account yet?"
                  : "Already have an account?"}
                <Link
                  to={isLogin ? "/signUp" : "/login"}
                  className="text-primary-600 dark:text-primary-500"
                >
                  {isLogin ? " Sign up" : " Log in"}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
