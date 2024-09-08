import BannerSobreNos from "../../components/Banner/BannerSobreNos";
import styles from "../../styles/routes/HomeAndSobreNos.module.css";

function SobreNos() {
  document.title = "Sobre Nós | TechMec";
  return (
    <main>
      <BannerSobreNos />
      <div className={styles.conteudo}>
        <h2 className={styles.titulo}>Conheça a Tech Mec</h2>
        <p className={styles.texto}>
          Bem-vindo à Tech Mec, nossa empresa é dedicada a{" "}
          <span className={styles.negrito}>melhorar o serviço automotivo </span>
          para nossos clientes. Desde nossa fundação, buscamos oferecer{" "}
          <span className={styles.negrito}>soluções inovadoras</span> e
          <span className={styles.negrito}> eficientes</span> para atender às
          necessidades do setor automotivo.
        </p>
        <h2 className={styles.titulo}>História</h2>
        <p className={styles.texto}>
          A Tech Mec faz parte de uma{" "}
          <span className={styles.negrito}>parceria com a Porto</span>, uma
          empresa líder no mercado de seguros e serviços financeiros. Foi
          fundada em 2024 e tem sido pioneira em oferecer soluções de qualidade
          para seus clientes.
        </p>
        <p className={styles.texto}>
          Com uma visão voltada para o futuro, a Tech Mec foi criada com o
          objetivo de{" "}
          <span className={styles.negrito}>
            revolucionar o setor automotivo
          </span>
          . Acreditamos que a<span className={styles.negrito}> tecnologia</span>{" "}
          pode transformar a maneira como os serviços são prestados, tornando-os
          mais <span className={styles.negrito}>rápidos</span>,{" "}
          <span className={styles.negrito}>eficientes</span> e{" "}
          <span className={styles.negrito}>acessíveis</span> para todos.
        </p>
        <h2 className={styles.titulo}>Missão</h2>
        <p className={styles.texto}>
          Nossa missão é oferecer um serviço automotivo de{" "}
          <span className={styles.negrito}>alta qualidade</span>, com foco na
          satisfação do cliente. Queremos{" "}
          <span className={styles.negrito}>simplificar</span> os processos de
          <span className={styles.negrito}> reparo</span> dos veículos.
        </p>
        <h2 className={styles.titulo}>Compromisso</h2>
        <p className={styles.texto}>
          Estamos comprometidos em fornecer um{" "}
          <span className={styles.negrito}>serviço excepcional</span> e superar
          as expectativas de nossos clientes. Nossa equipe é composta por
          profissionais experientes e qualificados, prontos para ajudá-lo em
          todas as etapas do processo.
        </p>
        <h2 className={styles.titulo}>O Futuro dos Serviços Automotivos</h2>
        <p className={styles.texto}>
          Como parte de nossa busca por inovação, estamos desenvolvendo um
          <span className={styles.negrito}> Assistente Virtual</span> exclusivo
          para <span className={styles.negrito}>identificar problemas</span>,
          fornecer
          <span className={styles.negrito}> pré-diagnósticos</span> precisos e
          encaminhar seu veículo para{" "}
          <span className={styles.negrito}>reparo</span>. Nosso Assistente
          também irá gerar um{" "}
          <span className={styles.negrito}>pré-orçamento</span> transparente,
          garantindo que você tenha{" "}
          <span className={styles.negrito}>total visibilidade</span> sobre os
          serviços prestados.
        </p>
        <p className={styles.texto}>
          Junte-se a nós nesta jornada rumo ao{" "}
          <span className={styles.negrito}>
            futuro dos serviços automotivos!
          </span>
        </p>
      </div>
    </main>
  );
}

export default SobreNos;
