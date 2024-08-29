import Menu from "../Menu/Menu";
import logo3 from "../../images/logo3.png";
import Botao from "../Botao/Botao";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/"><img src={logo3} alt="Logo circular roxa, simbolizando a TechMec" /></Link>
      <Menu position={"header"}/>
      <Botao mensagem={"Falar com nosso assistente"} />
    </header>
  );
}

export default Header;
