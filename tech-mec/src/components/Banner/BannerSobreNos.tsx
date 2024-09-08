import logo from "../../images/logo.png";
import styles from "../../styles/components/BannerSobreNos.module.css"

function BannerSobreNos() {
  return (
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
  );
}

export default BannerSobreNos;
