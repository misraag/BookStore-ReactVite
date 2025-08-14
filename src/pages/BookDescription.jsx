import { useParams } from "react-router-dom";
import books from "../data/books";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";
import { Heart, HeartStraight } from "phosphor-react";
import toast from "react-hot-toast";

export default function BookDescription() {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));
  const { addToCart } = useCart();
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = book && favorites.find((b) => b.id === book.id);

  if (!book) {
    return <div className="pt-24 text-center">Book not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(book);
    toast.success(`${book.title} added to cart!`);
  };

  const handleToggleFavorite = () => {
    toggleFavorite(book);
    toast(
      isFavorite
        ? `${book.title} removed from favorites!`
        : `${book.title} added to favorites!`
    );
  };

  return (
    <div className="pt-24 max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      {/* Left: Book Cover */}
      <div className="flex-shrink-0">
        <img
          src={`/images/${book.imageFile}`}
          alt={book.title}
          className="w-full md:w-64 h-auto object-cover rounded-lg mx-auto"
        />
      </div>

      {/* Right: Details */}
      <div className="flex-1 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold">{book.title}</h1>
            <p className="text-gray-600">by {book.author}</p>
            <p className="text-indigo-600 font-semibold text-xl">₹{book.price}</p>
          </div>
          <button
            onClick={handleToggleFavorite}
            className="text-red-500 mt-1"
          >
            {isFavorite ? <Heart size={28} weight="fill" /> : <HeartStraight size={28} />}
          </button>
        </div>

        <h2 className="text-lg font-bold">Description</h2>
        <p className="text-gray-700">
          This is a fantastic book by {book.author}. It belongs to the "{book.category}" category. 
          Detailed insights and engaging content make it a must-read!
        </p>

        <h2 className="text-lg font-bold">Product Details</h2>
        <p className="text-gray-700">
          Category: {book.category} <br />
          Price: ₹{book.price} <br />
          Author: {book.author}
        </p>

        <button
          onClick={handleAddToCart}
          className="mt-4 bg-green-600 text-blue px-6 py-3 rounded hover:bg-green-700 transition"
        >
          Add to Cart - ₹{book.price}
        </button>
      </div>
    </div>
  );
}
