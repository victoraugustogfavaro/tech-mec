import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../../styles/components/MenuHeader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function MenuHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav>
      <button className={styles.hamburger} onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </button>
      <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}>
        <li>
          <Link
            to="/"
            className={`${styles.links} ${
              location.pathname === "/" ? styles.linkAtivo : ""
            }`}
            onClick={() => setIsMenuOpen(false)}
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
            onClick={() => setIsMenuOpen(false)}
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
            onClick={() => setIsMenuOpen(false)}
          >
            PARTICIPANTES
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MenuHeader;