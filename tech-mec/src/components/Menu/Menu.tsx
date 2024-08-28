import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/sobre-nos">Sobre Nós</Link></li>
      <li><Link to="/participantes">Participantes</Link></li>
    </ul>
  )
}