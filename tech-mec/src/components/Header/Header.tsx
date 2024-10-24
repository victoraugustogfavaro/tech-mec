import Image from "next/image";
import Link from "next/link";
import logo from "../../images/logo3.png";
import Botao from "../Botao/Botao";
import MenuHeader from "../Menu/MenuHeader";

function Header() {
  return (
    <header className="flex justify-center items-center bg-roxoEscuro h-32 gap-6 md:justify-evenly">
      <Link href="/">
        <Image
          src={logo}
          alt="Logo circular roxa, simbolizando a TechMec"
          className="transition-transform duration-500 ease-in-out hover:scale-110 min-w-24"
        />
      </Link>
      <MenuHeader />
      <Botao mensagem={"Falar com nosso assistente"} position="header" />
    </header>
  );
}

export default Header;
