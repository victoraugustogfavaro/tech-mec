import Link from "next/link";

function MenuHeader() {
  return (
    <nav className="flex flex-col justify-center items-center gap-2 md:flex-row md:gap-8 lg:gap-16 xl:gap-24">
      <li>
        <Link
          href="/"
          className="text-white font-bold transition-all duration-500 ease-in-out hover:text-roxoClaro"
        >
          HOME
        </Link>
      </li>
      <li>
        <Link
          href="/sobre-nos"
          className="text-white font-bold transition-all duration-500 ease-in-out hover:text-roxoClaro "
        >
          SOBRE NÓS
        </Link>
      </li>
      <li>
        <Link
          href="/participantes"
          className="text-white font-bold transition-all duration-500 ease-in-out hover:text-roxoClaro"
        >
          PARTICIPANTES
        </Link>
      </li>
    </nav>
  );
}

export default MenuHeader;
