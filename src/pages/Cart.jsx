import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0)
    return <h1 className="text-3xl text-center mt-20">Cart is Empty</h1>;

  const total = cart.reduce((sum, book) => sum + book.price, 0);

  const handleCheckout = () => {
    navigate("/checkout"); // Navigate to Checkout page
  };

  return (
    <div className="p-8 space-y-6 max-w-4xl mx-auto">
      {cart.map((book) => (
        <div
          key={book.id}
          className="flex items-center justify-between border p-4 rounded shadow hover:shadow-lg transition bg-white"
        >
          <div className="flex items-center gap-4">
            {book.cover && (
              <img
                src={book.cover}
                alt={book.title}
                className="w-24 h-32 object-cover rounded-lg"
              />
            )}
            <div>
              <h2 className="text-lg font-bold">{book.title}</h2>
              <p className="text-gray-500">{book.author}</p>
              <p className="font-semibold text-indigo-600">₹{book.price}</p>
            </div>
          </div>
          <button
            onClick={() => removeFromCart(book.id)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="text-right mt-6 text-xl font-bold">
        Total: ₹{total}
      </div>

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
