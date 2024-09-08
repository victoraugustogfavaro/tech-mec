import Card from "../../components/Card/Card";
import fotoVictor from "../../images/foto-victor.jpeg";
import fotoJennifer from "../../images/foto-jennifer.jpeg";
import fotoFelipe from "../../images/foto-felipe.jpeg";
import styles from "../../styles/components/Botao.module.css"
import stylesRoutes from "../../styles/routes/Participantes.module.css"

function Participantes() {
  document.title = "Participantes | TechMec";
  return (
    <main className={stylesRoutes.conteudo}>
      <div className={stylesRoutes.titulos}>
        <h1 className={stylesRoutes.titulo}>Participantes</h1>
        <h2 className={stylesRoutes.subtitulo}>1TDSPG</h2>
      </div>
      <div className={stylesRoutes.cards}>
        <Card
          foto={fotoVictor}
          nome={"Victor Fávaro"}
          rm={"555059"}
          git={"https://github.com/victoraugustogfavaro"}
          linkedin={
            "https://www.linkedin.com/in/victor-augusto-gigante-f%C3%A1varo-8aa7962b8/"
          }
          instagram={"https://www.instagram.com/victoraugustoo__"}
        />
        <Card
          foto={fotoFelipe}
          nome={"Felipe Clarindo"}
          rm={"554547"}
          git={"https://github.com/felipeclarindo"}
          linkedin={"https://www.linkedin.com/in/felipeclarindo/"}
          instagram={"https://www.instagram.com/lipethegoat"}
        />
        <Card
          foto={fotoJennifer}
          nome={"Jennifer Suzuki"}
          rm={"554661"}
          git={"https://github.com/jenniesuzuki"}
          linkedin={"https://www.linkedin.com/in/jennifer-kaori-suzuki/"}
          instagram={"https://www.instagram.com/jenniesuzuki/"}
        />
        </div>
      <a href="https://github.com/victoraugustogfavaro/tech-mec" target="blank" className={styles.botaoRepositorio}>
        Repositório
      </a>
    </main>
  );
}

export default Participantes;