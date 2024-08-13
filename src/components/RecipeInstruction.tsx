import { useParams } from "react-router-dom";
import recipes from "../api/recipes.json";

export const RecipeInstruction = () => {
  const { recipeId } = useParams();

  const recipe = recipes.find((recipe) => recipe.id === recipeId);
  console.log(recipe);
  if (!recipe) {
    console.log("Opps! inget recept hittades");
    alert("Opps, inget recept hittades!")
  }

  return (
    <>
      <h2></h2>
      <p>Ingredienser och Gör så här:</p>
      <div>Recept Id: {recipeId}</div>
    </>
  );
};
