import { useState } from "react";
import { RecipeItemProps } from "../types/types";

export const RecipeItem = ({ recipe, onSelected }: RecipeItemProps) => {
  const [selected, setSelected] = useState(false);

  const handleSelected = () => {
    if (!selected) {
      onSelected(recipe.id);
    }
    setSelected(!selected);
  };

  return (
    <>
      <li onClick={handleSelected}>
        <p>{recipe.name}</p>
        <p>{recipe.description}</p>
      </li>
    </>
  );
};
