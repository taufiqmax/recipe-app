import React, { useContext } from "react";
import Ingredients from "./Ingredients";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Navbar, Table } from "react-bootstrap";
import { IngredientsContext } from "../App";

export default function Pantry({ ingredient }) {
  const { handleIngredientsAdd } = useContext(IngredientsContext);
  return (
    <div>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Pantry</Navbar.Brand>
          </Container>
        </Navbar>
      </div>
      <div>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {ingredient.map((ingredients) => {
              return <Ingredients key={ingredients.id} {...ingredients} />;
            })}
          </tbody>
        </Table>
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
