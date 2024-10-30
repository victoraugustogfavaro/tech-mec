"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../images/logo3.png";
import Botao from "../Botao/Botao";
import MenuHeader from "../Menu/MenuHeader";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  const hiddenLinks =
    pathname !== "/" &&
    pathname !== "/sobre-nos" &&
    pathname !== "/participantes";
  return (
    <header
      className={
        hiddenLinks
          ? "flex justify-center items-center bg-roxoEscuro min-h-[125px] gap-6"
          : "flex justify-center items-center bg-roxoEscuro min-h-[125px] gap-6 md:justify-evenly xl:justify-between xl:px-[5%]"
      }
    >
      <Link href={hiddenLinks ? "" : "/"}>
        <Image
          src={logo}
          alt="Logo circular roxa, simbolizando a TechMec"
          className={
            hiddenLinks
              ? "transition-transform duration-500 ease-in-out hover:scale-110"
              : "transition-transform duration-500 ease-in-out hover:scale-125 min-w-24"
          }
        />
      </Link>
      <MenuHeader />
      <Botao mensagem={"Falar com nosso assistente"} position="header" />
    </header>
  );
}

export default Header;
