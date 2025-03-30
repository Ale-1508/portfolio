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
    "./src/logic/**/*.{js,ts,jsx,tsx,mdx}",
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
        winter: {
          50:  "#e6f0f3",
          100: "#cce0e7",
          150: "#b3d1db",
          200: "#99c2cf",
          250: "#80b3c3",
          300: "#66a3b6",
          350: "#4d94aa",
          400: "#33859e",
          450: "#1a7592",
          500: "#006686",
          550: "#005c79",
          600: "#00526b",
          650: "#00475e",
          700: "#003d50",
          750: "#003343",
          800: "#002936",
          850: "#001f28",
          900: "#00141b",
          950: "#000a0d",
        },
        spring: {
          50:  "#eaf1e8",
          100: "#d5e3d1",
          150: "#c0d6ba",
          200: "#abc8a3",
          250: "#96ba8c",
          300: "#80ac75",
          350: "#6b9e5e",
          400: "#569147",
          450: "#418330",
          500: "#2c7519",
          550: "#286917",
          600: "#235e14",
          650: "#1f5212",
          700: "#1a460f",
          750: "#163b0d",
          800: "#122f0a",
          850: "#0d2307",
          900: "#091705",
          950: "#040c02",
        },
        summer: {
          50:  "#e7f0f0",
          100: "#cfe1e0",
          150: "#b6d3d1",
          200: "#9ec4c1",
          250: "#86b5b2",
          300: "#6ea6a2",
          350: "#569793",
          400: "#3d8983",
          450: "#9fc292",
          500: "#0d6b64",
          550: "#0c605a",
          600: "#0a5650",
          650: "#094b46",
          700: "#08403c",
          750: "#073632",
          800: "#052b28",
          850: "#04201e",
          900: "#031514",
          950: "#010b0a",
        },
        fall: {
          50:  "#ece7e6",
          100: "#d9cfcd",
          150: "#c6b6b4",
          200: "#b39e9b",
          250: "#a18682",
          300: "#8e6e68",
          350: "#7b564f",
          400: "#683d36",
          450: "#55251d",
          500: "#420d04",
          550: "#3b0c04",
          600: "#350a03",
          650: "#2e0903",
          700: "#280802",
          750: "#210702",
          800: "#1a0502",
          850: "#140401",
          900: "#0d0301",
          950: "#070100",
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
    }),
    plugin(function ({ addUtilities }: pluginsType ) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities, []);
    })
  ],
};
export default config;
