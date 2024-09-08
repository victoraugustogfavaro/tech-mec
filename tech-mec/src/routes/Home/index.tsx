import BannerHome from "../../components/Banner/BannerHome";
import Botao from "../../components/Botao/Botao";
import styles from "../../styles/routes/HomeAndSobreNos.module.css";

function Home() {
  document.title = "Home | TechMec";
  return (
    <main>
      <BannerHome />
      <div className={styles.conteudo}>
        <h2 className={styles.titulo}>
          Bem-vindo à sua oficina automotiva de confiança!
        </h2>
        <p className={styles.texto}>
          Estamos entusiasmados em apresentar nossa mais recente inovação: o
          nosso{" "}
          <span className={styles.negrito}>
            Assistente Virtual 100% Online.
          </span>{" "}
          Com essa nova funcionalidade, você pode receber{" "}
          <span className={styles.negrito}>assistência</span> para o seu veículo{" "}
          <span className={styles.negrito}>sem sair de casa.</span>
        </p>
        <p className={styles.texto}>
          Nosso Assistente Virtual irá realizar um{" "}
          <span className={styles.negrito}>pré-diagnóstico</span> dos problemas
          enfrentados por você, dando também um{" "}
          <span className={styles.negrito}>pré-orçamento</span> estimado, além
          de
          <span className={styles.negrito}> realizar agendamentos</span> para
          manutenção do veículo, tudo de forma{" "}
          <span className={styles.negrito}>remota e conveniente.</span>
        </p>
        <p className={styles.texto}>
          Para utilizar o recurso, você deve{" "}
          <span className={styles.negrito}>clicar</span> em um dos{" "}
          <span className={styles.negrito}>botões</span> que redireciona para o
          <span className={styles.negrito}> Assistente</span>, fazendo com que
          possa conversar com o{" "}
          <Botao mensagem={"Engrenaldo"} position="engrenaldo" />!
        </p>
        <h2 className={styles.titulo}>Seu tempo é valioso!</h2>
        <p className={styles.texto}>
          Nossa prioridade é oferecer serviços de alta qualidade, combinados com
          <span className={styles.negrito}> inovação</span>. Experimente este{" "}
          <span className={styles.negrito}>atendimento diferenciado</span> e
          descubra uma nova maneira de cuidar do seu veículo com{" "}
          <span className={styles.negrito}>praticidade</span> e
          <span className={styles.negrito}> segurança.</span>
        </p>
        <p className={styles.texto}>
          Estamos ansiosos para ajudá-lo a manter{" "}
          <span className={styles.negrito}>
            seu carro em perfeitas condições
          </span>
          , de forma <span className={styles.negrito}>simples</span> e{" "}
          <span className={styles.negrito}>eficaz.</span> Confie no cuidado da
          Tech Mec para todas suas necessidades automotivas.
        </p>
      </div>
    </main>
  );
}

export default Home;
