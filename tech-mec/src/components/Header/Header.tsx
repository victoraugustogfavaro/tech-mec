import Menu from "../Menu/Menu";
import logo from "../../images/logo3.png";
import Botao from "../Botao/Botao";
import { Link } from "react-router-dom";
import styles from "../../styles/Header.module.css"

function Header() {
  return (
    <header className={styles.cabecalho}>
      <Link to="/">
        <img src={logo} alt="Logo circular roxa, simbolizando a TechMec" />
      </Link>
      <Menu position={"header"} />
      <Botao mensagem={"Falar com nosso assistente"} className={styles.botaoCabecalho} />
    </header>
  );
}

export default Header;
