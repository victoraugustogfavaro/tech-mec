import Banner from "../../components/Banner/Banner";
import Botao from "../../components/Botao/Botao";

function Home() {
  document.title = "Home | TechMec";
  return (
    <div>
      <Banner page="home" />
      <h2>Bem-vindo à sua oficina automotiva de confiança!</h2>
      <p>
        Estamos entusiasmados em apresentar nossa mais recente inovação: o nosso
        Assistente Virtual 100% Online. Com essa nova funcionalidade, você pode
        receber assistência para o seu veículo sem sair de casa.
      </p>
      <p>
        Nosso Assistente Virtual irá realizar um pré-diagnóstico dos problemas
        enfrentados por você, dando também um pré-orçamento estimado, além de
        realizar agendamentos para manutenção do veículo, tudo de forma remota e
        conveniente.
      </p>
      <p>
        Para utilizar o recurso, você deve clicar em um dos botões que
        redireciona para o Assistente, fazendo com que possa conversar com o{" "}
        <Botao mensagem={"Engrenaldo"} />
      </p>
      <h2>Seu tempo é valioso!</h2>
      <p>
        Nossa prioridade é oferecer serviços de alta qualidade, combinados com
        inovação. Experimente este atendimento diferenciado e descubra uma nova
        maneira de cuidar do seu veículo com praticidade e segurança.
      </p>
      <p>
        Estamos ansiosos para ajudá-lo a manter seu carro em perfeitas
        condições, de forma simples e eficaz. Confie no cuidado da Porto Autos
        para todas suas necessidades automotivas.
      </p>
    </div>
  );
}

export default Home;