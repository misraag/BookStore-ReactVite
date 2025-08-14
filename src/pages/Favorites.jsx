import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";
import toast from "react-hot-toast";

export default function Favorites() {
  const { addToCart } = useCart();
  const { favorites, toggleFavorite } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="px-6 py-30 bg-gray-50 min-h-screen flex justify-center items-center">
        <h2 className="text-2xl font-semibold">No favorites yet ❤️</h2>
      </div>
    );
  }

  return (
    <div className="px-6 py-30 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Your Favorites</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between hover:shadow-xl transition-shadow"
          >
            {/* Image Section */}
            <Link to={`/books/${book.id}`}>
              <div className="h-60 overflow-hidden flex justify-center">
                <img
                  src={`/images/${book.imageFile}`}
                  alt={book.title}
                  className="w-70 h-50 object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = "/images/placeholder.jpg"; // fallback if missing
                  }}
                />
              </div>
            </Link>

            {/* Book Info */}
            <div className="p-4 flex flex-col flex-grow justify-between">
              <div>
                <h2 className="text-lg font-semibold mb-1">{book.title}</h2>
                <p className="text-gray-600 text-sm">{book.author}</p>
              </div>

              {/* Price + Buttons */}
              <div className="mt-4 flex flex-col gap-2">
                <span className="text-gray-900 font-bold mb-2">
                  ₹{book.price}
                </span>
                <button
                  onClick={() => {
                    addToCart(book);
                    toast.success(`${book.title} added to cart!`);
                  }}
                  className="bg-blue-600 text-blue py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => {
                    toggleFavorite(book);
                    toast.success(`${book.title} removed from favorites!`);
                  }}
                  className="bg-red-500 text-blue py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  Remove from Favorites
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
