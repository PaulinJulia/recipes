import { useNavigate } from "react-router-dom";
import recipes from "../api/recipes.json";
import { RecipeItem } from "../components/RecipeItem";
import { Recipe } from "../types/types";

export const HomeRoute = () => {
  const navigate = useNavigate();

  const onSelected = (id: string, name: string, description: string) => {
    navigate(`recipes/${id}`);
  };

  return (
    <>
      <h1>Startsida</h1>
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        reprehenderit maxime quibusdam iste expedita ab quis impedit non aut eum
        consectetur, doloremque earum libero amet nemo at mollitia est ratione?
      </p>
    </>
  );
};
