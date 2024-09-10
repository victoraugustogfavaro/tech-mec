import { Link } from "react-router-dom"
import styles from "../../styles/routes/Error.module.css"

function Error(){
  document.title = "Erro! | TechMec"
  return(
    <section className={styles.pagina}>
      <div className={styles.conteudo}>
      <h1 className={styles.titulo}>Ops, aconteceu um imprevisto e essa página não foi encontrada!</h1>
      <Link to = "/" className={styles.botao}>Voltar a página inicial</Link>
      </div>
    </section>
  )
}

export default Error