import { Link } from "react-router-dom"


function Error(){
  document.title = "Erro! | TechMec"
  return(
    <main>
      <h1>Ops, aconteceu um imprevisto e essa página não foi encontrada!</h1>
      <Link to = "/">Voltar a página inicial</Link>
    </main>
  )
}

export default Error