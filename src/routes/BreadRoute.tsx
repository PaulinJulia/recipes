import { useNavigate } from "react-router-dom";
import recipes from "../api/recipes.json";
import { RecipeItem } from "../components/RecipeItem";
import { Recipe } from "../types/types";

export const BreadRoute = () => {
  const navigate = useNavigate();

  const breadRecipes = recipes.filter((recipe) => recipe.category === "bread");

  const onSelected = (id: string) => {
    navigate(`/bread/${id}`);
  };
  return (
    <main>
      <h2>Frallor till grova bröd</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        dignissimos nisi exercitationem accusantium sequi debitis? Iusto
        mollitia exercitationem nulla, autem eligendi natus ab id doloremque
        esse dicta harum quisquam odit.
      </p>
      <ul>
        {breadRecipes.map((recipe: Recipe) => {
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
