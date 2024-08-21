import { useNavigate, Link } from "react-router-dom";
import recipes from "../api/recipes.json";
import { RecipeItem } from "../components/RecipeItem";
import { Recipe } from "../types/types";
import style from "./HomeRoute.module.css";
import { FaSearch } from "react-icons/fa";
import { FormEvent, useState } from "react";

export const HomeRoute = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const formData = new FormData(e.currentTarget);
    // const searchTerm = formData.get("search") as string;
    // setSearchTerm(searchTerm);
    const searchedRecipe = recipes.filter((recipe) =>
      recipe.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    console.log(searchedRecipe);
    setSearchTerm("");
    return (
      <>
        <ul className={style["card-wrapper"]}>
          {searchedRecipe.map((recipe: Recipe) => {
            return (
              <RecipeItem
                key={recipe.id}
                recipe={recipe}
                onSelected={onSelected}
              />
            );
          })}
        </ul>
      </>
    );
  };
  const onSelected = (id: string) => {
    navigate(`recipes/${id}`);
  };

  return (
    <main>
      <Link to="/">
        <h1 className={style["title"]}>Guldkornen</h1>
      </Link>
      <h2 className={style["title-description"]}>
        En receptsamling över flera generationer.
      </h2>
      <form className={style["search-form"]} onSubmit={handleSubmit}>
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
