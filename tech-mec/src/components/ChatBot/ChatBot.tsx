import { useEffect } from "react";

declare global {
  interface Window {
    watsonAssistantChatOptions?: {
      integrationID: string;
      region: string;
      serviceInstanceID: string;
      onLoad: (instance: any) => void;
      clientVersion?: string;
    };
    watsonAssistantInstance?: any;
  }
}

const ChatBot = () => {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "814fa5a5-953a-482f-aee2-2cb5d9d87728",
      region: "us-south",
      serviceInstanceID: "8a23610e-7cde-411e-98a0-a2a5e0839572",
      onLoad: (instance: any) => {
        window.watsonAssistantInstance = instance;
        instance.render();
        instance.updateLocale("pt-br");
      },
    };

    const script = document.createElement("script");
    script.src =
      "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
      (window.watsonAssistantChatOptions.clientVersion || "latest") +
      "/WatsonAssistantChatEntry.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default ChatBot;