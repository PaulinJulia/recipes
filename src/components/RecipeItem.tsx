import { useState } from "react";
import { RecipeItemProps } from "../types/types";
import style from "../components/RecipeItem.module.css";

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
      <li className={style["card-item"]} onClick={handleSelected}>
        <img src="#" className={style["recipe-image"]} alt="Bild" />
        <p className={style["recipe-name"]}>{recipe.name}</p>
        <p className={style["recipe-description"]}>{recipe.description}</p>
      </li>
    </>
  );
};
