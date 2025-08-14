import { useCart } from "../context/CartContext";

export default function BookCard({ book }) {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <img src={book.cover} alt={book.title} className="w-full h-60 object-cover mb-4 rounded" />
      <h2 className="text-xl font-bold">{book.title}</h2>
      <p className="text-gray-600">{book.author}</p>
      <p className="mt-2 font-semibold">₹{book.price}</p>
      <button
        onClick={() => addToCart(book)}
        className="mt-4 bg-blue-500 text-blue px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
}
