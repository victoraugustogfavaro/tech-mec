import { faGithub, faInstagramSquare, faLinkedin,  } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { CardProps } from "../../types"

function Card({foto, nome, rm, git, linkedin, instagram}: CardProps) {
  return(
    <div>
      <img src={foto} alt={nome}/>
      <p>{nome}</p>
      <p>{rm}</p>
      <Link to={git}><FontAwesomeIcon icon={faGithub} size= "2x"/></Link>
      <Link to={linkedin}><FontAwesomeIcon icon={faLinkedin} size= "2x"/></Link>
      <Link to={instagram}><FontAwesomeIcon icon={faInstagramSquare} size= "2x"/></Link>
    </div>
  )
}

export default Card