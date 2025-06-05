import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-indigo-50 to-cyan-100 px-4">
      <div className="bg-white/90 rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <h2 className="text-4xl font-bold text-indigo-700 mb-4">404</h2>
        <p className="text-gray-700 mb-6">Page not found.</p>
        <Link
          to="/"
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}