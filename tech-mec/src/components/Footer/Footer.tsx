import Menu from "../Menu/Menu";
import logo2 from "../../images/logo2.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faSquareXTwitter,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <Menu position={"footer"} />
      <div>
        <Link to="/">
          <img
            src={logo2}
            alt="Escrita em roxo com Logo circular entre dois textos Tech Mec"
          />
        </Link>
        <p>&copy; Copyright - 2024</p>
      </div>
      <div>
        <p>Acompanhe a Porto nas redes sociais</p>
        <a href="https://www.facebook.com/porto/?locale=pt_BR">
          <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
        </a>
        <a href="https://www.instagram.com/porto/">
          <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
        </a>
        <a href="https://www.linkedin.com/company/porto/?originalSubdomain=br">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.youtube.com/portoseguro">
          <FontAwesomeIcon icon={faSquareYoutube} size="2x" />
        </a>
        <a href="https://x.com/portoseguro">
          <FontAwesomeIcon icon={faSquareXTwitter} size="2x" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
