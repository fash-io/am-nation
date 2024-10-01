import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate(); // Hook for navigation in React Router v6

  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className=" p-8 rounded-lg about2-card text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="text-lg text-gr5ay-00 mt-4">
          Oops! The page you're looking for doesn't exist. You can return to the
          homepage or try searching for what you need.
        </p>
        <button
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => navigate("/")}
          aria-label="Go back to homepage"
        >
          Go Back Home
        </button>
      </div>
    </main>
  );
}
export default Error;