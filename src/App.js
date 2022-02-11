import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pantry from "./components/Pantry";
import { v4 as uuidv4 } from "uuid";

export const IngredientsContext = React.createContext();

function App() {
  const sampleIngredients = [
    {
      id: 1,
      name: "Chicken",
      quantity: 2,
    },
    {
      id: 2,
      name: "Banana",
      quantity: 3,
    },
  ];
  const [ingredient, setIngredients] = useState(sampleIngredients);

  const ingredientsContextValue = {
    handleIngredientsAdd,
    handleIngredientsDelete,
  };

  function handleIngredientsAdd() {
    const newIngredient = {
      id: uuidv4(),
      name: "New",
      quantity: 1,
    };
    setIngredients([...ingredient, newIngredient]);
  }

  function handleIngredientsDelete(id) {
    setIngredients(ingredient.filter((ingredient) => ingredient.id !== id));
  }

  return (
    <IngredientsContext.Provider value={ingredientsContextValue}>
      <Pantry ingredient={ingredient} />
    </IngredientsContext.Provider>
  );
}

export default App;
