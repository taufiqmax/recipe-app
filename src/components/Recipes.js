import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { RecipesContext } from "../RecipeApp";

export default function Recipes(props) {
  const { handleRecipesDelete, handleRecipesSelect } =
    useContext(RecipesContext);
  const { name, quantity, id } = props;
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{quantity}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Text>Method</Card.Text>
          <Button variant="primary" onClick={() => handleRecipesSelect(id)}>
            Edit
          </Button>
          <Button variant="danger" onClick={() => handleRecipesDelete(id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
