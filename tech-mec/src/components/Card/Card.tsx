import {
  faGithub,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardProps } from "../../types";
import Image from "next/image";

function Card({ foto, nome, rm, git, linkedin, instagram }: CardProps) {
  return (
    <section>
      <Image src={foto} alt={nome} />
      <p>{nome}</p>
      <p>RM: {rm}</p>
      <div>
        <a href={git} target="blank">
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
        <a href={linkedin} target="blank">
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
        <a href={instagram} target="blank">
          <FontAwesomeIcon icon={faInstagramSquare} size="3x" />
        </a>
      </div>
    </section>
  );
}

export default Card;
