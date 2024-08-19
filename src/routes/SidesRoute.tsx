import { useNavigate } from "react-router-dom";
import recipes from "../api/recipes.json";
import { RecipeItem } from "../components/RecipeItem";
import { Recipe } from "../types/types";
import style from "./SidesRoute.module.css"

export const SidesRoute = () => {
  const navigate = useNavigate();
  const sidesRecipes = recipes.filter((recipe) => recipe.category === "sides");

  const onSelected = (id: string) => {
    navigate(`/sides/${id}`);
  };
  return (
    <main>
      <h2 className={style["title"]}>Tillbehör</h2>
      <p className={style["intro-text"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        dignissimos nisi exercitationem accusantium sequi debitis? Iusto
        mollitia exercitationem nulla, autem eligendi natus ab id doloremque
        esse dicta harum quisquam odit.
      </p>
      <ul className={style["card-wrapper"]}>
        {sidesRecipes.map((recipe: Recipe) => {
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
