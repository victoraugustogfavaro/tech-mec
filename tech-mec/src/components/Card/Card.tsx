import {
  faGithub,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardProps } from "../../types";
import styles from "../../styles/components/Card.module.css";

function Card({ foto, nome, rm, git, linkedin, instagram }: CardProps) {
  return (
    <section className={styles.card}>
      <img src={foto} alt={nome} className={styles.foto} />
      <p className={styles.nome}>{nome}</p>
      <p className={styles.rm}>RM: {rm}</p>
      <div>
      <a href={git} target="blank">
        <FontAwesomeIcon icon={faGithub} size="3x" className={styles.icone} />
      </a>
      <a href={linkedin} target="blank">
        <FontAwesomeIcon icon={faLinkedin} size="3x" className={styles.icone} />
      </a>
      <a href={instagram} target="blank">
        <FontAwesomeIcon
          icon={faInstagramSquare}
          size="3x"
          className={styles.icone}
        />
      </a>
      </div>
    </section>
  );
}

export default Card;
