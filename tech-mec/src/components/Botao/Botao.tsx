import { useCallback, useRef, useState } from "react";
import {
  WebChatContainer,
  WebChatInstance,
  WebChatConfig,
} from "@ibm-watson/assistant-web-chat-react";
import { BotaoChatBotProps } from "../../types";
import styles from "../../styles/components/Botao.module.css";

// Definindo o tipo corretamente para o webChatOptions
const webChatOptions: WebChatConfig = {
  integrationID: "814fa5a5-953a-482f-aee2-2cb5d9d87728",
  region: "us-south", // Valor corretamente tipado
  serviceInstanceID: "8a23610e-7cde-411e-98a0-a2a5e0839572",
  locale: "pt-br",
};

const classMap: Record<string, string> = {
  header: styles.botaoCabecalho,
  banner: styles.botaoBanner,
  engrenaldo: styles.botaoEngrenaldo,
  footer: styles.botaoFooter,
};

function BotaoChatBot({ mensagem, position }: BotaoChatBotProps) {
  const botaoRef = useRef<HTMLButtonElement>(null);
  const [chatInstance, setChatInstance] = useState<WebChatInstance | null>(
    null
  );

  // A função agora é async e retorna uma Promise<void>
  const handleBeforeRender = async (
    instance: WebChatInstance
  ): Promise<void> => {
    setChatInstance(instance);
  };

  const toggleWebChat = useCallback(() => {
    if (chatInstance) {
      chatInstance.toggleOpen();
    }
  }, [chatInstance]);

  const buttonClass = classMap[position || ""] || styles.botaoPadrao;

  return (
    <>
      <button ref={botaoRef} className={buttonClass} onClick={toggleWebChat}>
        {mensagem}
      </button>
      <WebChatContainer
        config={webChatOptions}
        onBeforeRender={handleBeforeRender}
      />
    </>
  );
}

export default BotaoChatBot;
