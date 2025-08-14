import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { cart, clearCart } = useCart();

  const total = cart.reduce((sum, book) => sum + book.price, 0);

  const handleConfirm = () => {
    clearCart();
    alert(`Purchase successful! Total: ₹${total}`);
  };

  if (cart.length === 0)
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold mb-4">Your cart is empty!</h1>
        <Link to="/books" className="text-indigo-600 hover:underline">
          Browse Books
        </Link>
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto p-8 space-y-6">
      <h1 className="text-3xl font-bold text-center">Checkout</h1>

      {cart.map((book) => (
        <div
          key={book.id}
          className="flex justify-between border p-4 rounded shadow bg-white"
        >
          <div>
            <h2 className="font-semibold">{book.title}</h2>
            <p className="text-gray-500">{book.author}</p>
          </div>
          <p className="font-semibold text-indigo-600">₹{book.price}</p>
        </div>
      ))}

      <div className="flex justify-between font-bold text-xl">
        <span>Total:</span>
        <span>₹{total}</span>
      </div>

      <button
        onClick={handleConfirm}
        className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
      >
        Confirm Purchase
      </button>
    </div>
  );
}
