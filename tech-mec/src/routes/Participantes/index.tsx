import Card from "../../components/Card/Card";
import fotoVictor from "../../images/foto-victor.jpeg";
import fotoJennifer from "../../images/foto-jennifer.jpeg";
import fotoFelipe from "../../images/foto-felipe.jpeg";

function Participantes() {
  document.title = "Participantes | TechMec";
  return (
    <div>
      <div>
        <h1>Participantes</h1>
        <h2>1TDSPG</h2>
      </div>
      <div>
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
      <a href="https://github.com/victoraugustogfavaro/tech-mec" target="blank">
        Repositório
      </a>
    </div>
  );
}

export default Participantes;