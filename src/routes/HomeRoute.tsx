import { useNavigate, Link } from "react-router-dom";
import recipes from "../api/recipes.json";
import { RecipeItem } from "../components/RecipeItem";
import { Recipe } from "../types/types";
import style from "./HomeRoute.module.css";
import { FaSearch } from "react-icons/fa";
import { FormEvent, useState } from "react";

export const HomeRoute = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [allrecipes, setRecipes] = useState<Recipe[]>([]);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const searchedRecipe = recipes.filter((recipe) =>
      recipe.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );

    const remainingRecipes = recipes.filter(
      (recipe) =>
        !recipe.name
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase())
    );

    const sortedRecipes = [...searchedRecipe, ...remainingRecipes];
    setRecipes(sortedRecipes);
    setSearchTerm("");
  };

  const resetSearch = () => {
    setRecipes([]);
  };

  const onSelected = (id: string) => {
    navigate(`recipes/${id}`);
  };

  return (
    <main>
      <h1 className={style["title"]} onClick={resetSearch}>
        Guldkornen
      </h1>
      <h2 className={style["title-description"]}>
        En receptsamling över generationer.
      </h2>
      <form
        autoComplete="off"
        className={style["search-form"]}
        onSubmit={handleSubmit}
      >
        <label htmlFor="search"> </label>
        <div className={style["input-wrapper"]}>
          <input
            className={style["search-input"]}
            type="text"
            name="search"
            placeholder="Sök recept"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className={style["search-button"]}>
            <FaSearch className={style["search-icon"]} />
          </button>
        </div>
      </form>
      <ul className={style["card-wrapper"]}>
        {(allrecipes.length > 0 ? allrecipes : recipes).map(
          (recipe: Recipe) => {
            return (
              <RecipeItem
                key={recipe.id}
                recipe={recipe}
                onSelected={onSelected}
              />
            );
          }
        )}
      </ul>
    </main>
  );
};
