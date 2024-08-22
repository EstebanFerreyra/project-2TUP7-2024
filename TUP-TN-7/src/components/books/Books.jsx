import BookItem from "../bookItem/BookItem";
import PropTypes from "prop-types";

const Books = ({ booksData }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      <BookItem
        title={booksData[0].bookTitle}
        author={booksData[0].bookAuthor}
        rating={booksData[0].bookRating}
        pageCount={booksData[0].pageCount}
        imageUrl={booksData[0].imageUrl}
      />
      
      <BookItem
        title={booksData[1].bookTitle}
        author={booksData[1].bookAuthor}
        rating={booksData[1].bookRating}
        pageCount={booksData[1].pageCount}
        imageUrl={booksData[1].imageUrl}
      />

      <BookItem
        title={booksData[2].bookTitle}
        author={booksData[2].bookAuthor}
        rating={booksData[2].bookRating}
        pageCount={booksData[2].pageCount}
        imageUrl={booksData[2].imageUrl}
      />
      <BookItem
        title={booksData[3].bookTitle}
        author={booksData[3].bookAuthor}
        rating={booksData[3].bookRating}
        pageCount={booksData[3].pageCount}
        imageUrl={booksData[3].imageUrl}
      />
    </div>
  );
};

Books.propTypes = {
  booksData: PropTypes.array
};

export default Books