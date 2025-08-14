import { useCart } from "../context/CartContext";

export default function BookCard({ book }) {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 bg-white">
  <img src={book.cover} alt={book.title} className="w-full h-60 object-cover mb-4 rounded-lg" />
  <h2 className="text-xl font-bold">{book.title}</h2>
  <p className="text-gray-500">{book.author}</p>
  <p className="mt-2 font-semibold text-indigo-600">₹{book.price}</p>
  <button
    onClick={() => addToCart(book)}
    className="mt-4 w-full bg-indigo-600 text-blue py-2 rounded hover:bg-indigo-700 transition"
  >
    Add to Cart
  </button>
</div>

  );
}
