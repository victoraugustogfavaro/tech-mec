import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import logo from "../../images/logo2.png";
import MenuFooter from "../Menu/MenuFooter";

function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center bg-black text-white gap-5 h-auto p-6 lg:flex-row lg:justify-evenly">
      <MenuFooter />
      <div className="flex flex-col items-center">
        <Link href="/">
          <Image
            src={logo}
            alt="Escrita em roxo com Logo circular entre dois textos Tech Mec"
            className="transition-transform duration-500 ease-in-out hover:scale-110 w-[300px]"
          />
        </Link>
        <p className="font-light">&copy; Copyright - 2024</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-semibold">Acompanhe a Porto nas redes sociais</p>
        <div className="flex gap-[5%] text-white">
          <a href="https://www.facebook.com/porto/?locale=pt_BR" target="blank">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              width={40}
              className="transition-transform duration-500 ease-in-out hover:scale-110 hover:text-roxoClaro"
            />
          </a>
          <a href="https://www.instagram.com/porto/" target="blank">
            <FontAwesomeIcon
              icon={faInstagramSquare}
              width={40}
              className="transition-transform duration-500 ease-in-out hover:scale-110 hover:text-roxoClaro"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/porto/?originalSubdomain=br"
            target="blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              width={40}
              className="transition-transform duration-500 ease-in-out hover:scale-110 hover:text-roxoClaro"
            />
          </a>
          <a href="https://www.youtube.com/portoseguro" target="blank">
            <FontAwesomeIcon
              icon={faSquareYoutube}
              width={40}
              className="transition-transform duration-500 ease-in-out hover:scale-110 hover:text-roxoClaro"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
