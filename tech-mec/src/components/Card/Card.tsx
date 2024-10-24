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
          <FontAwesomeIcon icon={faGithub} width={40} />
        </a>
        <a href={linkedin} target="blank">
          <FontAwesomeIcon icon={faLinkedin} width={40} />
        </a>
        <a href={instagram} target="blank">
          <FontAwesomeIcon icon={faInstagramSquare} width={40} />
        </a>
      </div>
    </section>
  );
}

export default Card;
