import Menu from "../Menu/MenuHeader";
import logo from "../../images/logo3.png";
import Botao from "../Botao/Botao";
import { Link } from "react-router-dom";
import styles from "../../styles/components/Header.module.css";
import MenuHeader from "../Menu/MenuHeader";

function Header() {
  return (
    <header className={styles.cabecalho}>
      <Link to="/">
        <img
          src={logo}
          alt="Logo circular roxa, simbolizando a TechMec"
          className={styles.logo}
        />
      </Link>
      <MenuHeader/>
      <Botao position="header" mensagem={"Falar com nosso assistente"} />
    </header>
  );
}

export default Header;
