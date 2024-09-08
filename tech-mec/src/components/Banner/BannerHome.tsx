import Botao from "../Botao/Botao";
import styles from "../../styles/components/BannerHome.module.css";

function BannerHome() {
  return (
    <div className={styles.bannerHome}>
      <h1 className={styles.tituloBanner}>
        O lugar para quem gosta de cuidar do carro
      </h1>
      <h2 className={styles.subtituloBanner}>
        <span className={styles.negrito}>Simples e rápido!</span> Com o nosso
        Assistente Virtual, asseguramos a saúde do seu automóvel{" "}
        <span className={styles.negrito}>sem surpresas para seu bolso</span>.
      </h2>
      <Botao mensagem={"Assistente Virtual"} position="banner" />
    </div>
  );
}

export default BannerHome;
