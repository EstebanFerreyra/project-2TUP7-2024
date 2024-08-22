import PropTypes from "prop-types";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";

const BookItem = ({ title, author, pageCount, rating, imageUrl }) => {
  const [newTitle, setNewTitle] = useState(title);

  const [count, setCount] = useState(0);

  const clickHandle = () => {
    setNewTitle("Actualizado");
  };

  const incremetHandle = () => {
    setCount(count + 1);
  };

  return (
    <Card style={{ width: "22rem" }}>
      <Card.Img
        height={400}
        variant="top"
        src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"}
      />
      <Card.Body>
        <Card.Title>{newTitle}</Card.Title>
        <Card.Subtitle>{author}</Card.Subtitle>
        <div>{rating.length} estrellas</div>
        <p>{pageCount} páginas</p>
        <Button onClick={clickHandle} variant="dark">
          Actulizar
        </Button>
        <p>Clicks: {count}</p>
        <Button onClick={incremetHandle} variant="dark">
          +
        </Button>
      </Card.Body>
    </Card>
  );
};

BookItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pageCount: PropTypes.number,
  rating: PropTypes.array,
  imageUrl: PropTypes.string,
};

export default BookItem;
