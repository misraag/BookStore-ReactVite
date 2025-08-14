import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) return <h1 className="text-3xl text-center mt-20">Cart is Empty</h1>;

  return (
    <div className="p-8 space-y-4">
      {cart.map((book) => (
        <div key={book.id} className="flex items-center justify-between border p-4 rounded shadow">
          <div className="flex items-center gap-4">
            <img src={book.cover} alt={book.title} className="w-20 h-28 object-cover rounded" />
            <div>
              <h2 className="text-lg font-bold">{book.title}</h2>
              <p className="text-gray-600">{book.author}</p>
              <p className="font-semibold">₹{book.price}</p>
            </div>
          </div>
          <button
            onClick={() => removeFromCart(book.id)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
