import { useParams } from "react-router-dom";
import recipes from "../api/recipes.json";
import style from "./RecipeInstruction.module.css";

export const RecipeInstruction = () => {
  const { recipeId } = useParams();

  const recipe = recipes.find((recipe) => recipe.id === recipeId);
  if (!recipe) {
    console.log("Opps! inget recept hittades");
    return (
      <>
        <p>Opps, inget recept hittades!</p>
      </>
    );
  }

  return (
    <main>
      <h2 className={style["recipe-name"]}>{recipe.name}</h2>
      <div className={style["description-wrapper"]}>
        <p className={style["recipe-description"]}>{recipe.description}</p>
        <img
          src={recipe.imageUrl}
          className={style["recipe-image"]}
          alt={recipe.name}
        />
        <p className={style["recipe-history"]}>{recipe.history}</p>
        <p>{recipe.time}</p>
        <p>{recipe.portions}</p>
      </div>
      <div className={style["ingredients-wrapper"]}>
        <p>Ingredienser:</p>
        <ul className={style["ingredients"]}>
          {recipe.ingredientsOne.map((ingredientsOne) => (
            <li key={ingredientsOne}>{ingredientsOne}</li>
          ))}
        </ul>
        <ul className={style["ingredients"]}>
          {recipe.ingredientsTwo?.map((ingredientsTwo) => (
            <li key={ingredientsTwo}>{ingredientsTwo}</li>
          ))}
        </ul>
        <ul className={style["ingredients"]}>
          {recipe.ingredientsThree?.map((ingredientsThree) => (
            <li key={ingredientsThree}>{ingredientsThree}</li>
          ))}
        </ul>
      </div>
      <div className={style["method-wrapper"]}>
        <p>Gör så här:</p>
        <p>{recipe.methodOne}</p>
        <p>{recipe.methodTwo}</p>
      </div>
    </main>
  );
};
