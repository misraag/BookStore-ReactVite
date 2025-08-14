import React from "react";


const BookCard = ({ book, addToCart }) => {
  // Pick cover URL first, else fallback to local image
  // const imgSrc = book.cover || `/images/${book.imageFile}`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      {/* Image section */}
      <div className="h-48 w-full flex items-center justify-center bg-gray-100">
        <img
          src={`/images/${book.imageFile}`}
          alt={book.title}
          className="h-full w-full object-cover"
          onError={(e) => {
            e.target.src = "/images/placeholder.jpg"; // fallback placeholder
          }}
        />
      </div>

      {/* Book details */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-1">{book.title}</h3>
        <p className="text-sm text-gray-500 mb-2">{book.author}</p>
        <p className="text-base font-bold mb-4">₹{book.price}</p>

        {/* Add to cart button */}
        <button
          onClick={() => addToCart(book)}
          className="mt-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookCard;
