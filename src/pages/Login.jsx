import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { login, signup } from '../utils/firebase'; // Import your Firebase functions

export default function Login(props) {
  const { darkMode, handleSetDarkMode, setIsLogined } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [type, setType] = useState(1)
  const location = useLocation();
  const path = location.pathname;
  const isLogin = path === '/login';

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`|\\])[A-Za-z\d!@#$%^&*()_+{}\[\]:;"'<>,.?/~`|\\]{8,}$/;

    // Validation
    if (!emailRegex.test(email)) {
      setError('Invalid email');
      return;
    }
    if (!isLogin) {
      if (!passwordRegex.test(password)) {
        setError('Password must be at least 8 characters long, contain an uppercase letter, and a special character.');
        return;
      }
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }
    }

    try {
      if (isLogin) {
        await login(email, password);
        window.location = '/';
        setSuccess('Logged in successfully!');
      } else {
        await signup(username, email, password, type);
        setSuccess('Account created successfully!');

      }

      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setUsername('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex">
        <span className='fixed right-[10%] top-[10%]'>
          <button
            className="p-2 bg-transparent rounded-full hover:shadow-md transition-shadow"
            id="darkMode"
            onClick={handleSetDarkMode}
          >
            <i className={`bi ${darkMode ? 'bi-moon' : 'bi-sun'}`}></i>
          </button>
        </span>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-100">
          <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            AM <span className='text-red-600'>NATION</span>
          </Link>
          <div className="w-full bg- rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white flex gap-2 justify-between">
                {isLogin ? `Sign in as ${type === 1 ? "User" : "Organizer"}` : `Create your ${type === 1 ? "User" : "Organizer"} account`}
              <button className='text-gray-500 text-xs font-medium' onClick={() => setType(type === 1 ? 2 : 1)}>Change to ({type === 1 ? "Organizer" : "User"})</button>
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                {error && <p className="text-sm text-red-500">{error}</p>}
                {success && <p className="text-sm text-green-500">{success}</p>}
                {!(isLogin) && (
                  <div>
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                    <input 
                      type="text" 
                      name="username" 
                      id="username" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="Your username" 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                )}
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="name@gmail.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="••••••••" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {!isLogin && (
                  <div>
                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                    <input 
                      type="password" 
                      name="confirm-password" 
                      id="confirm-password" 
                      placeholder="••••••••" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                )}
                {isLogin && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input 
                          id="remember" 
                          aria-describedby="remember" 
                          type="checkbox" 
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                      </div>
                    </div>
                    <Link to="/forgot-password" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                  </div>
                )}
                <button type="submit" className="w-full about-card focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  {isLogin ? 'Sign in' : 'Sign up'}
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  {isLogin ? "Don't have an account yet?" : "Already have an account?"}
                  <Link to={isLogin ? "/signUp" : "/login"} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    {isLogin ? " Sign up" : " Log in"}
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
