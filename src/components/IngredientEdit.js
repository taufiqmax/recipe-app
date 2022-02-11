import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { IngredientsContext } from "../App";

export default function IngredientEdit({ ingredients }) {
  const { handleIngredientsChange, handleIngredientsSelect } = useContext(IngredientsContext);

  function handleChange(changes) {
    handleIngredientsChange(ingredients.id, { ...ingredients, ...changes });
  }
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  placeholder="Enter name"
                  type="text"
                  id="name"
                  value={ingredients.name}
                  onChange={(e) => handleChange({ name: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  placeholder="Enter Quantity"
                  type="number"
                  id="quantity"
                  value={ingredients.quantity}
                  onChange={(e) => handleChange({ quantity: parseInt(e.target.value) || '' })}
                />
              </Form.Group>
              <Button variant="primary" onClick={() => handleIngredientsSelect(undefined)}>
                Submit
              </Button>
            </Form>
          </Col>
          <Col>
            <Button variant="danger" onClick={() => handleIngredientsSelect(undefined)}>&times;</Button>
          </Col>
        </Row>
      </Container> 
    </div>
  );
}
