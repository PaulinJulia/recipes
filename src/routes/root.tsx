import { Outlet, Link } from "react-router-dom";


export default function Root() {

  return (
    <>
      <header>
        <nav>
          <ul>
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
          <h1>Guldkornen</h1>
        </Link>
        <h2>En receptsamling över flera generationer.</h2>
        <form>
          <label htmlFor="search"> </label>
          <input type="search" name="search" placeholder="Sök recept" />
          <button>Sök</button>
        </form>
      </header>
      <main>
        <div id="detail">
          <Outlet />
        </div>
      </main>
      <footer>
        <div>Här är foten</div>
      </footer>
    </>
  );
}
