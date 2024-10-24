import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import BotaoChatBot from "../Botao/Botao";

function MenuFooter() {
  return (
    <nav className="flex flex-col gap-8 xs:flex-row xs:gap-12 sm:gap-28 lg:gap-12 xl:gap-20">
      <ul className="">
        <li className="font-bold">Links Rápidos</li>
        <li className="flex transition-all duration-500 ease-in-out hover:text-roxoClaro">
          <FontAwesomeIcon icon={faChevronRight} width={8} />
          <BotaoChatBot mensagem={"Mêcanico Virtual"} position="footer" />
        </li>
        <li className="flex transition-all duration-500 ease-in-out hover:text-roxoClaro">
          <FontAwesomeIcon icon={faChevronRight} width={8} />
          <Link href="/participantes"> Participantes</Link>
        </li>
      </ul>

      <ul>
        <li className="font-bold">Sobre Nós</li>
        <li className="flex transition-all duration-500 ease-in-out hover:text-roxoClaro">
          <FontAwesomeIcon icon={faChevronRight} width={8} />
          <Link href="/sobre-nos"> Quem Somos?</Link>
        </li>
        <li className="flex transition-all duration-500 ease-in-out hover:text-roxoClaro">
          <FontAwesomeIcon icon={faChevronRight} width={8} className="flex" />
          <Link href="/sobre-nos"> Nossa História </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MenuFooter;
