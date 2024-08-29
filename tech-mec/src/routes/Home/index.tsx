import Banner from "../../components/Banner/Banner";

function Home() {
  return (
    <div>
      <Banner
        page="home"
        titulo={"O lugar para quem gosta de cuidar do carro"}
        subtitulo={
          "Simples e rápido! Com o nosso Assistente Virtual, asseguramos a saúde do seu automóvel sem surpresas para seu bolso."
        }
      />
    </div>
  );
}

export default Home;
