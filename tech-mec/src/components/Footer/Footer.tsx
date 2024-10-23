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
    <footer>
      <MenuFooter />
      <div>
        <Link href="/">
          <Image
            src={logo}
            alt="Escrita em roxo com Logo circular entre dois textos Tech Mec"
          />
        </Link>
        <p>&copy; Copyright - 2024</p>
      </div>
      <div>
        <p>Acompanhe a Porto nas redes sociais</p>
        <div>
          <a href="https://www.facebook.com/porto/?locale=pt_BR" target="blank">
            <FontAwesomeIcon icon={faFacebookSquare} width={40} />
          </a>
          <a href="https://www.instagram.com/porto/" target="blank">
            <FontAwesomeIcon icon={faInstagramSquare} width={40} />
          </a>
          <a
            href="https://www.linkedin.com/company/porto/?originalSubdomain=br"
            target="blank"
          >
            <FontAwesomeIcon icon={faLinkedin} width={40} />
          </a>
          <a href="https://www.youtube.com/portoseguro" target="blank">
            <FontAwesomeIcon icon={faSquareYoutube} width={40} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;