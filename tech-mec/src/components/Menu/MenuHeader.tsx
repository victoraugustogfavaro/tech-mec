"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; 

function MenuHeader() {
  const pathname = usePathname();
  const isLoginOrCadastro = pathname === "/login" || pathname === "/cadastro"

  return (
    <nav className={isLoginOrCadastro ? "hidden" : "block"}>
      <ul className="flex flex-col justify-center items-center gap-2 md:flex-row md:gap-8 lg:gap-[70px] xl:ml-[90px] xl:gap-24">
        <li>
          <Link
            href="/"
            className={`text-white font-bold transition-all duration-500 ease-in-out hover:text-roxoClaro xl:p-7 ${
              pathname === "/" ? "text-[#8572ff]" : ""
            }`}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            href="/sobre-nos"
            className={`text-white font-bold transition-all duration-500 ease-in-out hover:text-roxoClaro xl:p-7 ${
              pathname === "/sobre-nos" ? "text-[#8572ff]" : ""
            }`} 
          >
            SOBRE NÓS
          </Link>
        </li>
        <li>
          <Link
            href="/participantes"
            className={`text-white font-bold transition-all duration-500 ease-in-out hover:text-roxoClaro xl:p-7 ${
              pathname === "/participantes" ? "text-[#8572ff]" : ""
            }`} 
          >
            PARTICIPANTES
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MenuHeader;
