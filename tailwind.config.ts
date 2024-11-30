import type { Config } from "tailwindcss";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const plugin = require('tailwindcss/plugin');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type pluginsType = { addUtilities: (utilities: any, variants: string[]) => void }

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
        'ml': '896px',
        '3xl': '1792px'
      },
      fontSize: {
        '4.5xl': '2.75rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        '7xl': '3.5rem',
        '8xl': '4rem',
        '9xl': '4.5rem',
        '10xl': '5rem',
      },
      width: {
        '128': '32rem',
        '160': '40rem',
        '192': '48rem',
        '256': '64rem',
        '35vw': '35vw',
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
        accents: {
          ivory: "#fffff0",
          dunno: "#e6cda5",
          lightGreen: "#effbda",
        },
        gray: {
          900: "#202225",
          800: "#2f3136",
          700: "#36393f",
          600: "#4f545c",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#fsf3f5",
        },
        sageGreen: {
          50: "#f4f8f3",
          100: "#eaf1e7",
          150: "#dfebdb",
          200: "#d4e4cf",
          250: "#caddc3",
          300: "#bfd6b6",
          350: "#b4cfaa",
          400: "#a9c99e",
          450: "#9fc292",
          500: "#94bb86",
          550: "#85a879",
          600: "#76966b",
          650: "#68835e",
          700: "#597050",
          750: "#4a5e43",
          800: "#3b4b36",
          850: "#2c3828",
          900: "#1e251b",
          950: "#0f130d",
        },
        spring: {
          50: "#ffffff",
          100: "#eaf1e7",
          150: "#dfebdb",
          200: "#d4e4cf",
          250: "#caddc3",
          300: "#bfd6b6",
          350: "#b4cfaa",
          400: "#a9c99e",
          450: "#9fc292",
          500: "#94bb86",
          550: "#85a879",
          600: "#0a5650",
          650: "#68835e",
          700: "#597050",
          750: "#4a5e43",
          800: "#3b4b36",
          850: "#2c3828",
          900: "#1e251b",
          950: "#0f130d",
        },
        fall: {
          50: "#ffffff",
          100: "#eaf1e7",
          150: "#dfebdb",
          200: "#d4e4cf",
          250: "#caddc3",
          300: "#bfd6b6",
          350: "#b4cfaa",
          400: "#a9c99e",
          450: "#9fc292",
          500: "#94bb86",
          550: "#85a879",
          600: "#ffffff",
          650: "#68835e",
          700: "#597050",
          750: "#4a5e43",
          800: "#3b4b36",
          850: "#2c3828",
          900: "#1e251b",
          950: "#0f130d",
        },
        supportingColors: {
          error: "#cc0000"
        }
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }: pluginsType ) { 
      const newUtilities = { 
        '.placeholder-font-normal::placeholder': { fontWeight: '400', },
        '.placeholder-font-medium::placeholder': { fontWeight: '500', },
        '.placeholder-font-semibold::placeholder': { fontWeight: '600', },
        '.placeholder-font-bold::placeholder': { fontWeight: '700', },
      }
      
      addUtilities(newUtilities, ['responsive', 'hover', 'focus']) 
    },),
  ],
};
export default config;
