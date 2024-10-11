import Link from "next/link";

function Error() {
  return (
    <main>
      <div>
        <h1>Ops, aconteceu um imprevisto e essa página não foi encontrada!</h1>
        <Link href="/">Voltar a página inicial</Link>
      </div>
    </main>
  );
}

export default Error;
