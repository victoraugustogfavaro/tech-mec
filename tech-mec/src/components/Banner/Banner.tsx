import { BannerProps } from "../../types";
import Botao from "../Botao/Botao";
import logo from "../../images/logo.png";

function Banner({ page }: BannerProps) {
  return (
    <div>
      {page === "home" && (
        <div>
          <h1>O lugar para quem gosta de cuidar do carro</h1>
          <h2>
            Simples e rápido! Com o nosso Assistente Virtual, asseguramos a
            saúde do seu automóvel sem surpresas para seu bolso.
          </h2>
          <Botao mensagem={"Assistente Virtual"} />
        </div>
      )}
      {page === "sobre-nos" && (
        <div>
          <h1>Inovando o presente, dirigindo o futuro.</h1>
          <h2>
            Mais do que inovar, a Tech Mec está em constante evolução para estar
            sempre presente no dia a dia das pessoas.
          </h2>
          <img
            src={logo}
            alt="Escrita em roxo com Logo circular entre dois textos Tech Mec"
          />
        </div>
      )}
    </div>
  );
}

export default Banner;
