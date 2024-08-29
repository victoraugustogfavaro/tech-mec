import { Link } from "react-router-dom";
import { MenuProps } from "../../types.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Menu({ position }: MenuProps) {
  return (
    <nav>
      {position === "header" && (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sobre-nos">Sobre Nós</Link>
          </li>
          <li>
            <Link to="/participantes">Participantes</Link>
          </li>
        </ul>
      )}

      {position === "footer" && (
        <div>
          <div>
            <p>Links Rápidos</p>
            <ul>
              <li>
                <Link to="">
                  <FontAwesomeIcon icon={faChevronRight} /> Mecânico Virtual
                </Link>
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
