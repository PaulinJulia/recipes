import { useParams } from "react-router-dom";
import recipes from "../api/recipes.json";

export const RecipeInstruction = () => {
  const { recipeId } = useParams();

  const recipe = recipes.find((recipe) => recipe.id === recipeId);
  if (!recipe) {
    console.log("Opps! inget recept hittades");
    alert("Opps, inget recept hittades!");
    return null;
  }

  return (
    <>
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      <p>{recipe.history}</p>
      <p>{recipe.time}</p>
      <p>Ingredienser</p>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <p>Gör så här:</p>
      <p>{recipe.method}</p>
    </>
  );
};
