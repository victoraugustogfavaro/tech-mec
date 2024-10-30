import Link from "next/link";

function FormularioLogin() {
  return (
    <section className="flex flex-col justify-center items-center w-[300px] h-[350px] mx-auto my-28 bg-roxoEscuro text-white rounded-2xl xs:w-[350px] sm:w-[400px]">
      <form action="">
        <h1 className="text-center text-roxoClaro font-bold">Login</h1>
        <div className="flex flex-col my-8">
          <label htmlFor="cpf">CPF</label>
          <input
            type="text"
            name="cpf"
            id="cpf"
            placeholder="Digite seu CPF"
            className="h-[35px] p-3 rounded-md"
            required
          />
        </div>
        <div className="flex flex-col mb-7">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            name="senha"
            id="senha"
            placeholder="Digite sua senha"
            className="h-[35px] p-3 rounded-md"
            required
          />
          <h2 className=" mt-2 text-center">
            Não tenho conta,{" "}
            <Link
              href="/cadastro"
              className="font-bold transition-all duration-500 ease-in-out hover:text-roxoClaro hover:underline"
            >
              cadastrar
            </Link>
          </h2>
        </div>
        <button
          type="submit"
          className="mx-16 bg-roxoClaro w-[120px] text-white text-[1.1rem] rounded-2xl h-[38px] font-bold transition-all duration-500 ease-in-out hover:scale-110"
        >
          Entrar
        </button>
      </form>
    </section>
  );
}

export default FormularioLogin;
