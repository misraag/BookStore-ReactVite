import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Empty Cart - perfectly centered
  if (cart.length === 0)
    return (
      <div className="pt-24 min-h-screen flex flex-col justify-center items-center px-4 text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-4">Cart is Empty</h1>
          <p className="text-gray-500 mb-6">You have no books in your cart.</p>
          <button
            onClick={() => navigate("/books")}
            className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
          >
            Browse Books
          </button>
        </div>
      </div>
    );

  // Cart with items
  const total = cart.reduce((sum, book) => sum + book.price, 0);

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="pt-24 max-w-5xl mx-auto px-4 p-8 space-y-6">
      {cart.map((book) => (
        <div
          key={book.id}
          className="flex flex-col md:flex-row items-center md:justify-between border p-4 rounded shadow hover:shadow-lg transition bg-white mx-auto"
        >
          <div className="flex items-center gap-4">
            {book.cover && (
              <img
                src={book.cover}
                alt={book.title}
                className="w-24 h-32 object-cover rounded-lg"
              />
            )}
            <div className="text-center md:text-left">
              <h2 className="text-lg font-bold">{book.title}</h2>
              <p className="text-gray-500">{book.author}</p>
              <p className="font-semibold text-indigo-600">₹{book.price}</p>
            </div>
          </div>
          <button
            onClick={() => removeFromCart(book.id)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition mt-4 md:mt-0"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="text-right mt-6 text-xl font-bold">Total: ₹{total}</div>

      <div className="text-right mt-4">
        <button
          onClick={handleCheckout}
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
