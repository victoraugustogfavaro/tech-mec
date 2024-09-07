import React, { useEffect, useRef } from "react";
import { BotaoChatBotProps } from "../../types";
import styles from "../../styles/components/Botao.module.css";

const BotaoChatBot: React.FC<BotaoChatBotProps> = ({ mensagem, position }) => {
  const botaoRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleBotaoClick = () => {
      const chatButton = document.querySelector(
        "#WACLauncher__Button"
      ) as HTMLButtonElement;
      if (chatButton) {
        chatButton.click();
      }
    };

    if (botaoRef.current) {
      botaoRef.current.addEventListener("click", handleBotaoClick);
    }

    return () => {
      if (botaoRef.current) {
        botaoRef.current.removeEventListener("click", handleBotaoClick);
      }
    };
  }, []);

  // Mapeamento de classes baseado na prop 'position'
  const classMap: Record<string, string> = {
    header: styles.botaoCabecalho,
    banner: styles.botaoBanner,
    engrenaldo: styles.botaoEngrenaldo,
    footer: styles.botaoFooter,
  };

  // Classe padrão caso 'position' não seja fornecida ou não seja reconhecida
  const buttonClass = classMap[position || ""] || styles.botaoPadrao;

  return (
    <button ref={botaoRef} className={buttonClass}>
      {mensagem}
    </button>
  );
};

export default BotaoChatBot;
