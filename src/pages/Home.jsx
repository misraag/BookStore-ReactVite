import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="pt-24 min-h-screen flex flex-col justify-center items-center px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to BookStore</h1>
        <p className="text-gray-600 mb-6">
          Explore, favorite, and purchase your favorite books!
        </p>
        <Link
          to="/books"
          className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
        >
          Browse Books
        </Link>
      </div>
    </div>
  );
}
