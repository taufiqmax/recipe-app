import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Button, } from "react-bootstrap";
import { IngredientsContext } from "../App";

export default function Ingredients(props) {
  const { handleIngredientsDelete, handleIngredientsSelect } =
    useContext(IngredientsContext);
  const { name, quantity, id } = props;
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{quantity}</td>
        <td>
          <Button variant="primary" onClick={() => handleIngredientsSelect(id)}>
            Edit
          </Button>
          <Button variant="danger" onClick={() => handleIngredientsDelete(id)}>
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
}
