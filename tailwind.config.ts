import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      boxShadow: {
        'elevation-5': '0 5px 15px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        /*
        Tanya dice: grigio avio e lilla per gradiente e come colore principale blu più scuro tipo Blue Navy e/o Ottanio
        Primavera: Rosa e Verde Testo: Marrone bello
        Estate: Quelli che ci sono adesso Testo: Verde Scuro
        Autunno: Arancio Spooky, Ocra/Terracotta Testo: Ruggine
        Inverno: Avio, Lilla Testo: Ottanio
        */
        primary: {
          900: "#031514",
          800: "#052b28",
          700: "#08403c",
          600: "#0a5650",
          500: "#0d6b64",
          400: "#3d8983",
          300: "#6ea6a2",
          200: "#9ec4c1",
          100: "#cfe1e0",
          50:  "#e7f0f0",
        },
        secondary: "#27211e",
        tertiary: "#27211e",
        accents: "#e6cda5",
        gray: {
          900: "#202225",
          800: "#2f3136",
          700: "#36393f",
          600: "#4f545c",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#fsf3f5",
        }
      },
    },
  },
  plugins: [],
};
export default config;
