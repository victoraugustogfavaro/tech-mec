import { Link } from "react-router-dom";
import { MenuProps } from "../../type.tsx";

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
                <Link to="">&gt; Mecânico Virtual</Link>
              </li>
              <li>
                <Link to="/participantes">&gt; Participantes</Link>
              </li>
            </ul>
          </div>

          <div>
            <p>Sobre Nós</p>
            <ul>
              <li>
                <Link to="/sobre-nos">&gt; Quem somos?</Link>
              </li>
              <li>
                <Link to="/sobre-nos">&gt; Nossa História</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
