import { useNavigate } from "react-router-dom";
import recipes from "../api/recipes.json";
import { RecipeItem } from "../components/RecipeItem";
import { Recipe } from "../types/types";

export const HomeRoute = () => {
  const navigate = useNavigate();

  const onSelected = (id: string) => {
    navigate(`recipes/${id}`);
  };

  return (
    <main>
      <ul>
        {recipes.map((recipe: Recipe) => {
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
