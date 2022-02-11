import React, { useContext } from "react";
import Ingredients from "./Ingredients";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { IngredientsContext } from "../App";

export default function Pantry({ingredient}) {
  const { handleIngredientsAdd } = useContext(IngredientsContext);
  return (
    <div>
      <div>
        {ingredient.map((ingredient) => {
          return (
          <Ingredients key={ingredient.id} {...ingredient} />
          )
        })}
      </div>
      <div>
        <Container>
          <Row>
            <Col>
              <Button variant="success" onClick={handleIngredientsAdd}>
                Add
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
