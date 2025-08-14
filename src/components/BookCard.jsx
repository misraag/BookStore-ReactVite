import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";
import { Heart, HeartStraight } from "phosphor-react";

export default function BookCard({ book }) {
  if (!book) return null;

  const { addToCart } = useCart();
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.find((b) => b.id === book.id);

  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 bg-white relative">
      {book.cover && (
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-60 object-cover mb-4 rounded-lg"
        />
      )}

      <button
        onClick={() => toggleFavorite(book)}
        className="absolute top-3 right-3 text-red-500"
      >
        {isFavorite ? <Heart size={24} weight="fill" /> : <HeartStraight size={24} />}
      </button>

      <h2 className="text-xl font-bold">{book.title}</h2>
      <p className="text-gray-500">{book.author}</p>
      <p className="mt-2 font-semibold text-indigo-600">₹{book.price}</p>
      <button
        onClick={() => addToCart(book)}
        className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
