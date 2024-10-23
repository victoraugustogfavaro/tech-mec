import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import BotaoChatBot from "../Botao/Botao";

function MenuFooter() {
  return (
    <nav>
      <ul>
        <li>Links Rápidos</li>
        <li>
          <FontAwesomeIcon icon={faChevronRight} width={8} />
          <BotaoChatBot mensagem={"Mêcanico Virtual"}/>
        </li>
        <li>
          <Link href="/participantes">
            <FontAwesomeIcon icon={faChevronRight} width={8} /> Participantes
          </Link>
        </li>
      </ul>

      <ul>
        <li>Sobre Nós</li>
        <li>
          <Link href="/sobre-nos">
            <FontAwesomeIcon icon={faChevronRight} width={8} /> Quem Somos?
          </Link>
        </li>
        <li>
          <Link href="/sobre-nos">
            <FontAwesomeIcon icon={faChevronRight} width={8} /> Nossa História
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MenuFooter;
