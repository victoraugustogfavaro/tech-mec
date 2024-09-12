import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "../../styles/components/MenuFooter.module.css";
import BotaoChatBot from "../Botao/Botao";

function MenuFooter() {
  return (
    <nav className={styles.menus}>
      <ul className={styles.menu}>
        <li className={styles.titulo}>Links Rápidos</li>
        <li className={styles.links}>
        <FontAwesomeIcon icon={faChevronRight} />{" "}
          <BotaoChatBot mensagem={"Mêcanico Virtual"} position="footer" />
        </li>
        <li>
          <Link to="/participantes" className={styles.links}>
            <FontAwesomeIcon icon={faChevronRight} /> Participantes
          </Link>
        </li>
      </ul>

      <ul className={styles.menu}>
        <li className={styles.titulo}>Sobre Nós</li>
        <li>
          <Link to="/sobre-nos" className={styles.links}>
            <FontAwesomeIcon icon={faChevronRight} /> Quem Somos?
          </Link>
        </li>
        <li>
          <Link to="/sobre-nos" className={styles.links}>
            <FontAwesomeIcon icon={faChevronRight} /> Nossa História
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MenuFooter;
