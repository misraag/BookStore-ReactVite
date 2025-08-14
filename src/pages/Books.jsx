import { useState } from "react";
import booksData from "../data/books";
import BookCard from "../components/BookCard";

export default function Books() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const categories = ["All", ...new Set(booksData.map((book) => book.category))];

  const filteredBooks = booksData
    .filter(
      (book) =>
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
    )
    .filter((book) => (category && category !== "All" ? book.category === category : true));

  return (
    <div className="p-8">
      <input
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 p-3 border rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full mb-6 p-3 border rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
        {filteredBooks.length === 0 && (
          <p className="text-center text-gray-500 col-span-full mt-10">No books found.</p>
        )}
      </div>
    </div>
  );
}
