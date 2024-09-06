import { Link } from "react-router-dom";
import { MenuProps } from "../../types.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Botao from "../Botao/Botao.tsx";
import styles from "../../styles/Menu.module.css";

export default function Menu({ position }: MenuProps) {
  return (
    <nav>
      {position === "header" && (
        <ul className={styles.menuCabecalho}>
          <li>
            <Link to="/" className={styles.links}>HOME</Link>
          </li>
          <li>
            <Link to="/sobre-nos" className={styles.links}>SOBRE NÓS</Link>
          </li>
          <li>
            <Link to="/participantes" className={styles.links}>PARTICIPANTES</Link>
          </li>
        </ul>
      )}

      {position === "footer" && (
        <div>
          <div>
            <p>Links Rápidos</p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faChevronRight} />{" "}
                <Botao mensagem={"Mêcanico Virtual"} />
              </li>
              <li>
                <Link to="/participantes">
                  <FontAwesomeIcon icon={faChevronRight} /> Participantes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p>Sobre Nós</p>
            <ul>
              <li>
                <Link to="/sobre-nos">
                  <FontAwesomeIcon icon={faChevronRight} /> Quem Somos?
                </Link>
              </li>
              <li>
                <Link to="/sobre-nos">
                  <FontAwesomeIcon icon={faChevronRight} /> Nossa História
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
