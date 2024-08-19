import { useNavigate, Link } from "react-router-dom";
import recipes from "../api/recipes.json";
import { RecipeItem } from "../components/RecipeItem";
import { Recipe } from "../types/types";
import style from "./HomeRoute.module.css"
import { FaSearch } from "react-icons/fa";

export const HomeRoute = () => {
  const navigate = useNavigate();

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
      <form className={style["search-form"]}>
        <label htmlFor="search"> </label>
        <input type="search" name="search" placeholder="Sök recept" />
        <button>
          <FaSearch />
        </button>
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
