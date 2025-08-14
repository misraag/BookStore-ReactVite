import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) return <h1 className="text-3xl text-center mt-20">Cart is Empty</h1>;

  return (
    <div className="p-8 space-y-6 max-w-4xl mx-auto">
  {cart.length === 0 ? (
    <h1 className="text-3xl text-center mt-20">Cart is Empty</h1>
  ) : (
    cart.map((book) => (
      <div key={book.id} className="flex items-center justify-between border p-4 rounded shadow hover:shadow-lg transition bg-white">
        <div className="flex items-center gap-4">
          <img src={book.cover} alt={book.title} className="w-24 h-32 object-cover rounded-lg" />
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
    ))
  )}
</div>

  );
}
