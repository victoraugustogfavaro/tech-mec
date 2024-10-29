import { StaticImageData } from "next/image";

export interface BotaoChatBotProps{
  mensagem: string;
  position: string
}

export type BannerProps = {
  page: string;
};

export type CardProps = {
  foto: string | StaticImageData;
  nome: string;
  rm: string;
  git: string;
  linkedin: string;
  instagram: string;
};