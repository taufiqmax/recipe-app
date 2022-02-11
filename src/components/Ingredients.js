import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { IngredientsContext } from "../App";

export default function Ingredients(props) {
  const { handleIngredientsDelete } = useContext(IngredientsContext);
  const { name, quantity, id } = props;
  return (
    <>
      <Container>
        <Row>
          <Col sm={4}>{name}</Col>
          <Col sm={6}>Quanyity: {quantity}</Col>
          <Col sm={2}>
            <Button variant="primary">Edit</Button>
            <Button variant="danger" onClick={() => handleIngredientsDelete(id)}>Delete</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}