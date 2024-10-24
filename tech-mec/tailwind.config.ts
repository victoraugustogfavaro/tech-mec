import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        roxoEscuro: "#151F42",
        roxoClaro: "#7569C9",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        'xs': '390px', 
        'sm': '550px',
        'md': '700px',
        'lg': '1000px',
        'xl': '1250px',
      }
    },
  },
  plugins: [],
};
export default config;
