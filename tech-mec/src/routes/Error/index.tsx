import { Link } from "react-router-dom"


function Error(){
  document.title = "Erro! | TechMec"
  return(
    <div>
      <h1>Ops, aconteceu um imprevisto e essa página não foi encontrada!</h1>
      <Link to = "/">Voltar a página inicial</Link>
    </div>
  )
}

export default Error