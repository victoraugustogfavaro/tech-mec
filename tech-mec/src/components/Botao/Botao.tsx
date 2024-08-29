import { BotaoProps } from "../../types.tsx";

function Botao({ mensagem }: BotaoProps) {
  return <button>{mensagem}</button>;
}

export default Botao;
