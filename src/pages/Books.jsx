import books from "../data/books";
import BookCard from "../components/BookCard";

export default function Books() {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  {books.map((book) => (
    <BookCard key={book.id} book={book} />
  ))}
</div>

  );
}
