import {BotaoProps} from "../../type.tsx"

function Botao({mensagem}:BotaoProps){
  return(
    <button>{mensagem}</button>
  )
}

export default Botao