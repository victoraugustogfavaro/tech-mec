import React, { useEffect, useRef } from "react";
import { BotaoChatBotProps } from "../../types";

const BotaoChatBot: React.FC<BotaoChatBotProps> = ({ mensagem }) => {
  const botaoRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleBotaoClick = () => {
      // Encontra o botão do chat-bot e tenta clicar nele
      const chatButton = document.querySelector(
        "#WACLauncher__Button"
      ) as HTMLButtonElement;
      if (chatButton) {
        chatButton.click(); // Simula um clique no botão do chat-bot
      }
    };

    // Adiciona o listener quando o componente é montado
    if (botaoRef.current) {
      botaoRef.current.addEventListener("click", handleBotaoClick);
    }

    // Remove o listener quando o componente é desmontado
    return () => {
      if (botaoRef.current) {
        botaoRef.current.removeEventListener("click", handleBotaoClick);
      }
    };
  }, []);

  return (
    <button ref={botaoRef} className="botao">
      {mensagem}
    </button>
  );
};
export default BotaoChatBot;
