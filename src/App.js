import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pantry from "./components/Pantry";
import { v4 as uuidv4 } from "uuid";
import IngredientEdit from "./components/IngredientEdit";

export const IngredientsContext = React.createContext();
const LOCAL_STORAGE_KEY = "recipe.ingredient";

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
  const [selectedIngredientsId, setSelectedIngredientsId] = useState();
  const [ingredient, setIngredients] = useState(sampleIngredients);
  const selectedIngredients = ingredient.find(
    (ingredients) => ingredients.id === selectedIngredientsId
  );
  const ingredientsContextValue = {
    handleIngredientsAdd,
    handleIngredientsDelete,
    handleIngredientsSelect,
    handleIngredientsChange,
  };

  useEffect(() => {
    const ingredientJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (ingredientJSON != null) setIngredients(JSON.parse(ingredientJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(ingredient));
  }, [ingredient]);

  function handleIngredientsSelect(id) {
    setSelectedIngredientsId(id);
  }

  function handleIngredientsAdd() {
    const newIngredient = {
      id: uuidv4(),
      name: "",
      quantity: 1,
    };

    setSelectedIngredientsId(newIngredient.id);
    setIngredients([...ingredient, newIngredient]);
  }

  function handleIngredientsChange(id, ingredients) {
    const newIngredient = [...ingredient];
    const index = newIngredient.findIndex((r) => r.id === id);
    newIngredient[index] = ingredients;
    setIngredients(newIngredient);
  }

  function handleIngredientsDelete(id) {
    if (setSelectedIngredientsId != null && selectedIngredientsId === id) {
      selectedIngredientsId(undefined);
    }
    setIngredients(ingredient.filter((ingredients) => ingredients.id !== id));
  }

  return (
    <IngredientsContext.Provider value={ingredientsContextValue}>
      <Pantry ingredient={ingredient} />
      {selectedIngredients && (
        <IngredientEdit ingredients={selectedIngredients} />
      )}
    </IngredientsContext.Provider>
  );
}

export default App;
