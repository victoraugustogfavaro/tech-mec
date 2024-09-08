import { Link, useLocation } from "react-router-dom";
import styles from "../../styles/components/MenuHeader.module.css";

function MenuHeader() {
  const location = useLocation();

  return (
    <nav>
      <ul className={styles.menu}>
        <li>
          <Link
            to="/"
            className={`${styles.links} ${
              location.pathname === "/" ? styles.linkAtivo : ""
            }`}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="/sobre-nos"
            className={`${styles.links} ${
              location.pathname === "/sobre-nos" ? styles.linkAtivo : ""
            }`}
          >
            SOBRE NÓS
          </Link>
        </li>
        <li>
          <Link
            to="/participantes"
            className={`${styles.links} ${
              location.pathname === "/participantes" ? styles.linkAtivo : ""
            }`}
          >
            PARTICIPANTES
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MenuHeader;
