import Link from "next/link";

function MenuHeader() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/sobre-nos">SOBRE NÓS</Link>
        </li>
        <li>
          <Link href="/participantes">PARTICIPANTES</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MenuHeader;
