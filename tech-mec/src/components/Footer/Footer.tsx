import Menu from "../Menu/Menu";
import logo from "../../images/logo2.png";
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
            src={logo}
            alt="Escrita em roxo com Logo circular entre dois textos Tech Mec"
          />
        </Link>
        <p>&copy; Copyright - 2024</p>
      </div>
      <div>
        <p>Acompanhe a Porto nas redes sociais</p>
        <a href="https://www.facebook.com/porto/?locale=pt_BR" target="blank"> 
          <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
        </a>
        <a href="https://www.instagram.com/porto/" target="blank">
          <FontAwesomeIcon icon={faInstagramSquare} size="3x" />
        </a>
        <a href="https://www.linkedin.com/company/porto/?originalSubdomain=br" target="blank">
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
        <a href="https://www.youtube.com/portoseguro" target="blank">
          <FontAwesomeIcon icon={faSquareYoutube} size="3x" />
        </a>
        <a href="https://x.com/portoseguro" target="blank">
          <FontAwesomeIcon icon={faSquareXTwitter} size="3x" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
