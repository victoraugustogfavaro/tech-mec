import Botao from "../Botao/Botao";

function BannerHome() {
  return (
    <div>
      <h1>O lugar para quem gosta de cuidar do carro</h1>
      <h2>
        Simples e rápido! Com o nosso Assistente Virtual, asseguramos a saúde do
        seu automóvel sem surpresas para seu bolso.
      </h2>
      <Botao mensagem={"Assistente Virtual"} position="banner" />
    </div>
  );
}

export default BannerHome;
