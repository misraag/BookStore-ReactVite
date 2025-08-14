import { useState } from "react";
import booksData from "../data/books";
import BookCard from "../components/BookCard";

export default function Books() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 8;

  const categories = ["All", ...new Set(booksData.map((book) => book.category))];

  const filteredBooks = booksData
    .filter(
      (book) =>
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
    )
    .filter((book) =>
      category && category !== "All" ? book.category === category : true
    );

  const sortedBooks = [...filteredBooks];
  if (sort === "price-asc") sortedBooks.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") sortedBooks.sort((a, b) => b.price - a.price);
  if (sort === "title-asc") sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
  if (sort === "title-desc") sortedBooks.sort((a, b) => b.title.localeCompare(a.title));

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = sortedBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(sortedBooks.length / booksPerPage);

  return (
    <div className="pt-24 max-w-5xl mx-auto p-8">
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
        className="w-full mb-4 p-3 border rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {categories.map((cat, idx) => (
          <option key={idx} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="w-full mb-6 p-3 border rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">Sort by</option>
        <option value="price-asc">Price: Low → High</option>
        <option value="price-desc">Price: High → Low</option>
        <option value="title-asc">Title: A → Z</option>
        <option value="title-desc">Title: Z → A</option>
      </select>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {currentBooks.length > 0 ? (
          currentBooks.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <p className="text-center text-gray-500 col-span-full mt-10">No books found.</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1 ? "bg-indigo-600 text-white" : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
