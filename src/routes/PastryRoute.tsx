import { useNavigate } from "react-router-dom";
import recipes from "../api/recipes.json";
import { RecipeItem } from "../components/RecipeItem";
import { Recipe } from "../types/types";

export const PastryRoute = () => {
  const navigate = useNavigate();
  const pastryRecipes = recipes.filter(
    (recipe) => recipe.category === "pastry"
  );

  const onSelected = (id: string) => {
    navigate(`/pastry/${id}`);
  };
  return (
    <main>
      <h2>Tårtor & Bakverk</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        dignissimos nisi exercitationem accusantium sequi debitis? Iusto
        mollitia exercitationem nulla, autem eligendi natus ab id doloremque
        esse dicta harum quisquam odit.
      </p>
      <ul>
        {pastryRecipes.map((recipe: Recipe) => {
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
