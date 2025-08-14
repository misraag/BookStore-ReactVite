import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import books from "../data/books";
import toast from "react-hot-toast";

const Books = () => {
  const { addToCart } = useCart();
  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("none");

  // Filtered books
  const filteredBooks = category === "all"
    ? books
    : books.filter((book) => book.category === category);

  // Sorted books
  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sortOrder === "low-high") return a.price - b.price;
    if (sortOrder === "high-low") return b.price - a.price;
    return 0;
  });

  return (
    <div className="px-6 py-30 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Our Books</h1>

      {/* Filter and Sort */}
      <div className="flex justify-center gap-4 mb-8">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="all">All Categories</option>
          <option value="Self-help">Self-help</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-fiction">Non-fiction</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="none">Sort by</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedBooks.map((book) => (
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
                  className="w-50 h-50 object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = "/images/placeholder.jpg";
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

              {/* Price + Button */}
              <div className="mt-4 flex flex-col">
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
