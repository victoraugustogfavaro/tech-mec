import logo from "../../images/logo2.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";
import MenuFooter from "../Menu/MenuFooter";
import Image from "next/image";

function Footer() {
  return (
    <footer>
      <MenuFooter />
      <div>
        <Link href="/home">
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
            <FontAwesomeIcon icon={faFacebookSquare} size="1x" />
          </a>
          <a href="https://www.instagram.com/porto/" target="blank">
            <FontAwesomeIcon icon={faInstagramSquare} size="1x" />
          </a>
          <a
            href="https://www.linkedin.com/company/porto/?originalSubdomain=br"
            target="blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size="1x" />
          </a>
          <a href="https://www.youtube.com/portoseguro" target="blank">
            <FontAwesomeIcon icon={faSquareYoutube} size="1x" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;