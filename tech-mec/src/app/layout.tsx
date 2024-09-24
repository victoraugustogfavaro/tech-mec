import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TechMec",
  description: "Inovando o presente, dirigindo o futuro.",
  
};

export const viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
