import { Outlet, Link } from "react-router-dom";
import style from "./RootRoute.module.css";

export default function RootRoute() {
  return (
    <>
      <header>
        <nav>
          <ul className={style["link-wrapper"]}>
            <li>
              <Link to="/sweets">Kakor</Link>
            </li>
            <li>
              <Link to="/food">Mat</Link>
            </li>
            <li>
              <Link to="/bread">Bröd</Link>
            </li>
            <li>
              <Link to="/pastry">Bakverk</Link>
            </li>
            <li>
              <Link to="sides">Tillbehör</Link>
            </li>
          </ul>
        </nav>
        <Link to="/">
          <h1 className={style["title"]}>Guldkornen</h1>
        </Link>
        <h2 className={style["title-description"]}>
          En receptsamling över flera generationer.
        </h2>
        <form className={style["search-form"]}>
          <label htmlFor="search"> </label>
          <input type="search" name="search" placeholder="Sök recept" />
          <button>Sök</button>
        </form>
      </header>
      <div id="detail">
        <Outlet />
      </div>
      <footer>
        <ul className={style["social-media"]}>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>LinkedIn</li>
        </ul>
        <div className={style["contact"]}>
          <p>Om Guldkornen</p>
          <p>Kontakta oss</p>
        </div>
      </footer>
    </>
  );
}
