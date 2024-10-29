import BotaoChatBot from "../Botao/Botao";

function BannerHome() {
  return (
    <section className="xs:h-[420px] xs:gap-5 md:h-[300px] md:gap-4 bg-gradienteRoxo text-white text-center flex flex-col justify-center items-center leading-tight">
      <h1 className="xs:w-[300px] text-[2.375rem] font-extrabold md:w-[520px]">
        O lugar para quem gosta de cuidar do carro.
      </h1>
      <h2 className="xs:w-[320px] text-[1.125rem] font-normal md:w-[650px]">
        <span className="font-bold">Simples e rápido!</span> Com o nosso
        Assistente Virtual, asseguramos a saúde do seu automóvel{" "}
        <span className="font-bold">sem surpresas para seu bolso</span>.
      </h2>
      <BotaoChatBot mensagem={"Assistente Virtual"} position="banner" />
    </section>
  );
}

export default BannerHome;
