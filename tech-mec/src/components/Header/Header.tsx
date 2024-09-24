import Link from "next/link";
import logo from "../../images/logo3.png";
import Botao from "../Botao/Botao";
import MenuHeader from "../Menu/MenuHeader";
import Image from "next/image";

function Header() {
  return (
    <header>
      <Link href="/home">
      <Image
        src={logo} alt="Logo circular roxa, simbolizando a TechMec" />
      </Link>
      <MenuHeader />
      <Botao mensagem={"Falar com nosso assistente"} />
    </header>
  );
}

export default Header;
