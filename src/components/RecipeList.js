import React, { useContext } from "react";
import Recipes from "./Recipes";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Navbar } from "react-bootstrap";
import { RecipesContext } from "../RecipeApp";

export default function RecipeList({ recipe }) {
  const { handleRecipesAdd } = useContext(RecipesContext);
  return (
    <div>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Recipe List</Navbar.Brand>
          </Container>
        </Navbar>
      </div>
      <div>
        <Container>
          <Row>
            <Col>
              {recipe.map((recipes) => {
                return <Recipes key={recipes.id} {...recipes} />;
              })}
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col>
              <Button variant="success" onClick={handleRecipesAdd}>
                Add New Recipe
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
