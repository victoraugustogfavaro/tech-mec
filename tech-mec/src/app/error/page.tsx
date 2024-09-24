import Link from "next/link";

function Error() {
  document.title = "Erro! | TechMec";
  return (
    <section>
      <div>
        <h1>Ops, aconteceu um imprevisto e essa página não foi encontrada!</h1>
        <Link href="/">
          Voltar a página inicial
        </Link>
      </div>
    </section>
  );
}

export default Error;
