import { useNavigate } from "react-router-dom";
import recipes from "../api/recipes.json";
import { RecipeItem } from "../components/RecipeItem";
import { Recipe } from "../types/types";

export const FoodRoute = () => {
  const navigate = useNavigate();
  const sweetsRecipes = recipes.filter((recipe) => recipe.category === "food");

  const onSelected = (id: string) => {
    navigate(`/food/${id}`);
  };

  return (
    <main>
      <h2>Middag eller fest</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        dignissimos nisi exercitationem accusantium sequi debitis? Iusto
        mollitia exercitationem nulla, autem eligendi natus ab id doloremque
        esse dicta harum quisquam odit.
      </p>
      <ul>
        {sweetsRecipes.map((recipe: Recipe) => {
          return (
            <RecipeItem
              key={recipe.id}
              recipe={recipe}
              onSelected={onSelected}
            />
          );
        })}
      </ul>
    </main>
  );
};
