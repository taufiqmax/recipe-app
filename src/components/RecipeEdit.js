import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { RecipesContext } from "../RecipeApp";

export default function RecipeEdit({ recipes }) {
  const { handleRecipesChange, handleRecipesSelect } = useContext(RecipesContext);

  function handleChange(changes) {
    handleRecipesChange(recipes.id, { ...recipes, ...changes });
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
                  value={recipes.name}
                  onChange={(e) => handleChange({ name: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Ingredients</Form.Label>
                <Form.Control
                  placeholder="Enter Ingredients"
                  type="text"
                  id="ingredients"
                  value={recipes.ingredients}
                  onChange={(e) => handleChange({ ingredients: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Method</Form.Label>
                <Form.Control
                  placeholder="Enter Method"
                  type="text"
                  id="method"
                  value={recipes.method}
                  onChange={(e) => handleChange({ method: e.target.value })}
                />
              </Form.Group>
              <Button variant="primary" onClick={() => handleRecipesSelect(undefined)}>
                Submit
              </Button>
            </Form>
          </Col>
          <Col>
            <Button variant="danger" onClick={() => handleRecipesSelect(undefined)}>&times;</Button>
          </Col>
        </Row>
      </Container> 
    </div>
  );
}