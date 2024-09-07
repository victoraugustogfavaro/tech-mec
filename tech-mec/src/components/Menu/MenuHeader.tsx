import { Link } from "react-router-dom";
import styles from "../../styles/components/MenuHeader.module.css";

function MenuHeader() {
  return (
    <nav>
      <ul className={styles.menu}>
        <li>
          <Link to="/" className={styles.links}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="/sobre-nos" className={styles.links}>
            SOBRE NÓS
          </Link>
        </li>
        <li>
          <Link to="/participantes" className={styles.links}>
            PARTICIPANTES
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MenuHeader;
