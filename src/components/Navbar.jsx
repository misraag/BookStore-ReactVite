import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-gradient-to-r from-yellow-300 to-yellow-600  p-4 flex justify-between items-center text-white fixed top-0 left-0 w-full z-50">
      <h2 className="text-2xl font-bold">BookStore</h2>
      <div className="flex items-center gap-6">
        <Link className="hover:underline" to="/">Home</Link>
        <Link className="hover:underline" to="/books">Books</Link>
        <Link className="hover:underline" to="/favorites">Favorites</Link>
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
