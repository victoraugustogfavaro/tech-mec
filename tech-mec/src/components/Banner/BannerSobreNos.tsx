import Image from "next/image";
import logo from "../../images/logo.svg";

function BannerSobreNos() {
  return (
    <section>
      <div>
      <h1>Inovando o presente, dirigindo o futuro.</h1>
      <h2>
        Mais do que inovar, a Tech Mec está em constante evolução para estar
        sempre presente no dia a dia das pessoas.
      </h2>
      </div>
      <Image
        src={logo}
        alt="Escrita em roxo com Logo circular entre dois textos Tech Mec"
      />
    </section>
  );
}

export default BannerSobreNos;
