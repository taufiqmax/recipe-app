import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RecipeList from "./components/RecipeList";
import { v4 as uuidv4 } from "uuid";
import RecipeEdit from "./components/RecipeEdit";

export const RecipesContext = React.createContext();
const LOCAL_STORAGE_KEY = "recipe.recipe";

function RecipeApp() {
  const sampleRecipes = [
    {
      id: 1,
      name: "Chicken",
      ingredients: "ggg",
      method: "Test"
    },
    {
      id: 2,
      name: "Banana",
      ingredients: "ggg",
      method: "Test"
    },
  ];
  const [selectedRecipesId, setSelectedRecipesId] = useState();
  const [recipe, setRecipes] = useState(sampleRecipes);
  const selectedRecipes = recipe.find(
    (recipes) => recipes.id === selectedRecipesId
  );
  const recipesContextValue = {
    handleRecipesAdd,
    handleRecipesDelete,
    handleRecipesSelect,
    handleRecipesChange,
  };

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipe));
  }, [recipe]);

  function handleRecipesSelect(id) {
    setSelectedRecipesId(id);
  }

  function handleRecipesAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "",
      ingredients: "",
      method: ""
    };

    setSelectedRecipesId(newRecipe.id);
    setRecipes([...recipe, newRecipe]);
  }

  function handleRecipesChange(id, recipes) {
    const newRecipes = [...recipe];
    const index = newRecipes.findIndex((r) => r.id === id);
    newRecipes[index] = recipes;
    setRecipes(newRecipes);
  }

  function handleRecipesDelete(id) {
    if (setSelectedRecipesId != null && selectedRecipesId === id) {
      selectedRecipesId(undefined);
    }
    setRecipes(recipe.filter((recipes) => recipes.id !== id));
  }

  return (
    <RecipesContext.Provider value={recipesContextValue}>
      <RecipeList recipe={recipe} />
      {selectedRecipes && (
        <RecipeEdit recipes={selectedRecipes} />
      )}
    </RecipesContext.Provider>
  );
}

export default RecipeApp;