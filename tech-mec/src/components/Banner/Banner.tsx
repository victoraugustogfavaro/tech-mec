import { BannerProps } from "../../type";
import Botao from "../Botao/Botao";
import Logo from "../../images/logo.png";

function Banner({ page, titulo, subtitulo }: BannerProps) {
  return (
    <div>
      {page === "home" && (
        <div>
          <h1>{titulo}</h1>
          <h2>{subtitulo}</h2>
          <Botao mensagem={"Assistente Virtual"} />
        </div>
      )}
      {page === "sobre-nos" && (
        <div>
          <h1>{titulo}</h1>
          <h2>{subtitulo}</h2>
          <img
            src={Logo}
            alt="Escrita em roxo com Logo circular entre dois textos Tech Mec"
          />
        </div>
      )}
    </div>
  );
}

export default Banner;
