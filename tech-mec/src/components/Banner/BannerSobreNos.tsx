import logo from "../../images/logo.svg";
import styles from "../../styles/components/BannerSobreNos.module.css"

function BannerSobreNos() {
  return (
    <section className={styles.banner}>
      <div className={styles.informacoes}>
      <h1 className={styles.titulo}>Inovando o presente, dirigindo o futuro.</h1>
      <h2 className={styles.subtitulo}>
        Mais do que inovar, a Tech Mec está em constante evolução para estar
        sempre presente no dia a dia das pessoas.
      </h2>
      </div>
      <img
        src={logo}
        alt="Escrita em roxo com Logo circular entre dois textos Tech Mec"
        className={styles.logo}
      />
    </section>
  );
}

export default BannerSobreNos;
