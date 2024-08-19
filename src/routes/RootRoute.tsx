import { Outlet, Link } from "react-router-dom";
import style from "./RootRoute.module.css";
import { FaFacebookSquare, FaInstagram, FaSearch } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

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
      </header>
      <div id="detail">
        <Outlet />
      </div>
      <footer>
        <ul className={style["social-media"]}>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaFacebookSquare />
          </li>
          <li>
            <CiLinkedin />
          </li>
        </ul>
        <div className={style["contact"]}>
          <p>Om Guldkornen</p>
          <p>Kontakta oss</p>
        </div>
      </footer>
    </>
  );
}
