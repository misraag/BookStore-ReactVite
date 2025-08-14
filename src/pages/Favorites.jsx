import { useFavorites } from "../context/FavoritesContext";
import BookCard from "../components/BookCard";

export default function Favorites() {
  const { favorites } = useFavorites();

  if (!favorites || favorites.length === 0)
    return <h1 className="text-3xl text-center mt-20">No favorite books yet</h1>;

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {favorites.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
