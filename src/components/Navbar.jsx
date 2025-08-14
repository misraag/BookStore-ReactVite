import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 flex justify-between items-center text-white">
      <h1 className="text-2xl font-bold">BookStore</h1>
      <div className="flex items-center gap-6">
        <Link className="hover:underline" to="/">Home</Link>
        <Link className="hover:underline" to="/books">Books</Link>
        <Link className="relative flex items-center gap-2 hover:underline" to="/cart">
          <ShoppingCart size={24} weight="bold" />
          <span className="absolute -top-2 -right-3 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {cart.length}
          </span>
        </Link>
      </div>
    </nav>
  );
}
