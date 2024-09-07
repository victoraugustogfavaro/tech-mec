import MenuFooter from "../Menu/MenuFooter";
import logo from "../../images/logo2.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../../styles/components/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.rodape}>
      <MenuFooter />
      <div className={styles.logoCopyright}>
        <Link to="/">
          <img
            src={logo}
            alt="Escrita em roxo com Logo circular entre dois textos Tech Mec"
            className={styles.logo}
          />
        </Link>
        <p className={styles.copyright}>&copy; Copyright - 2024</p>
      </div>
      <div className={styles.portoRedes}>
        <p className={styles.tituloPortoRedes}>
          Acompanhe a Porto nas redes sociais
        </p>
        <div className={styles.containerIcones}>
        <a href="https://www.facebook.com/porto/?locale=pt_BR" target="blank">
          <FontAwesomeIcon
            icon={faFacebookSquare}
            size="3x"
            className={styles.icones}
          />
        </a>
        <a href="https://www.instagram.com/porto/" target="blank">
          <FontAwesomeIcon
            icon={faInstagramSquare}
            size="3x"
            className={styles.icones}
          />
        </a>
        <a
          href="https://www.linkedin.com/company/porto/?originalSubdomain=br"
          target="blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="3x"
            className={styles.icones}
          />
        </a>
        <a href="https://www.youtube.com/portoseguro" target="blank">
          <FontAwesomeIcon
            icon={faSquareYoutube}
            size="3x"
            className={styles.icones}
          />
        </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;