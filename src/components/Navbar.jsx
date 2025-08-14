import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-around">
      <Link to="/">Home</Link>
      <Link to="/books">Books</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}
