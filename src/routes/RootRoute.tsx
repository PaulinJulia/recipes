import { Outlet, Link } from "react-router-dom";
import style from "./RootRoute.module.css";
import { FaFacebookSquare, FaInstagram, FaSeedling } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export default function RootRoute() {
  return (
    <>
      <header>
        <nav>
          <ul className={style["link-wrapper"]}>
            <li>
              <Link to="/" title="Home">
                <FaSeedling />
              </Link>
            </li>
            <li>
              <Link to="/sweets" title="Kakor">
                Kakor
              </Link>
            </li>
            <li>
              <Link to="/food" title="Mat">
                Mat
              </Link>
            </li>
            <li>
              <Link to="/bread" title="Bröd">
                Bröd
              </Link>
            </li>
            <li>
              <Link to="/pastry" title="Bakverk">
                Bakverk
              </Link>
            </li>
            <li>
              <Link to="sides" title="Tillbehör">
                Tillbehör
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div id="detail">
        <Outlet />
      </div>
      <footer>
        <ul className={style["social-media"]}>
          <li title="Instagram">
            <FaInstagram />
          </li>
          <li title="Facebook">
            <FaFacebookSquare />
          </li>
          <li title="LinkedIn">
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
