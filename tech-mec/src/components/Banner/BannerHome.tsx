import BotaoChatBot from "../Botao/Botao";

function BannerHome() {
  return (
    <section>
      <h1>O lugar para quem gosta de cuidar do carro.</h1>
      <h2>
        <span>Simples e rápido!</span> Com o nosso Assistente Virtual,
        asseguramos a saúde do seu automóvel{" "}
        <span>sem surpresas para seu bolso</span>.
      </h2>
      <BotaoChatBot mensagem={"Assistente Virtual"} position="banner" />
    </section>
  );
}

export default BannerHome;
