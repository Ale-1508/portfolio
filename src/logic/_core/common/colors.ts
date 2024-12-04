import { Season, getSeason } from "@/logic/_core/common/seasons"

export interface ColorScheme { [key: number]: string; }

export interface ColorPalette {  
  primary: ColorScheme,
  secondary: ColorScheme,
  tertiary: ColorScheme,
  accents: ColorScheme,
  bgGradient: string
  text: {
    primary: ColorScheme
  }
  bg: {
    primary: ColorScheme,
    hover: ColorScheme,
    selection: ColorScheme,
    outline: ColorScheme
  }
}


const winterPalette = {
  text: {
    primary: {
      50: `text-winter-50`,
      100: `text-winter-100`,
      150: `text-winter-150`,
      200: `text-winter-200`,
      250: `text-winter-250`,
      300: `text-winter-300`,
      350: `text-winter-350`,
      400: `text-winter-400`,
      450: `text-winter-450`,
      500: `text-winter-500`,
      550: `text-winter-550`,
      600: `text-winter-600`,
      650: `text-winter-650`,
      700: `text-winter-700`,
      750: `text-winter-750`,
      800: `text-winter-800`,
      850: `text-winter-850`,
      900: `text-winter-900`,
      950: `text-winter-950`,
    },
  },
  bg:{
    primary: {
      50: `bg-winter-50`,
      100: `bg-winter-100`,
      150: `bg-winter-150`,
      200: `bg-winter-200`,
      250: `bg-winter-250`,
      300: `bg-winter-300`,
      350: `bg-winter-350`,
      400: `bg-winter-400`,
      450: `bg-winter-450`,
      500: `bg-winter-500`,
      550: `bg-winter-550`,
      600: `bg-winter-600`,
      650: `bg-winter-650`,
      700: `bg-winter-700`,
      750: `bg-winter-750`,
      800: `bg-winter-800`,
      850: `bg-winter-850`,
      900: `bg-winter-900`,
      950: `bg-winter-950`,
    },
    hover: {
      100: `hover:bg-winter-100`,
      200: `hover:bg-winter-200`,
      600: `hover:bg-winter-600`,
    },
    selection: `selection:bg-winter-300`,
    outline: `focus-within:outline-winter-300`
  },
  bgGradient: "linear-gradient(to right, #ccf7f4, #f0efff)",
  primary: {},
  secondary: {},
  tertiary: {},
  accents: {},
} 

const springPalette = {
  text: {
    primary: {
      50: `text-spring-50`,
      100: `text-spring-100`,
      150: `text-spring-150`,
      200: `text-spring-200`,
      250: `text-spring-250`,
      300: `text-spring-300`,
      350: `text-spring-350`,
      400: `text-spring-400`,
      450: `text-spring-450`,
      500: `text-spring-500`,
      550: `text-spring-550`,
      600: `text-spring-600`,
      650: `text-spring-650`,
      700: `text-spring-700`,
      750: `text-spring-750`,
      800: `text-spring-800`,
      850: `text-spring-850`,
      900: `text-spring-900`,
      950: `text-spring-950`,
    },
  },
  bg:{
    primary: {
      50: `bg-spring-50`,
      100: `bg-spring-100`,
      150: `bg-spring-150`,
      200: `bg-spring-200`,
      250: `bg-spring-250`,
      300: `bg-spring-300`,
      350: `bg-spring-350`,
      400: `bg-spring-400`,
      450: `bg-spring-450`,
      500: `bg-spring-500`,
      550: `bg-spring-550`,
      600: `bg-spring-600`,
      650: `bg-spring-650`,
      700: `bg-spring-700`,
      750: `bg-spring-750`,
      800: `bg-spring-800`,
      850: `bg-spring-850`,
      900: `bg-spring-900`,
      950: `bg-spring-950`,
    },
    hover: `hover:bg-spring-600`,
    selection: `selection:bg-spring-300`,
    outline: `focus-within:outline-spring-300`
  },
  bgGradient: "linear-gradient(to right, #fce9f9, #e3ffcc)",
  primary: {},
  secondary: {},
  tertiary: {},
  accents: {},
}

const summerPalette = {
  text: {
    primary: {
      50: `text-summer-50`,
      100: `text-summer-100`,
      150: `text-summer-150`,
      200: `text-summer-200`,
      250: `text-summer-250`,
      300: `text-summer-300`,
      350: `text-summer-350`,
      400: `text-summer-400`,
      450: `text-summer-450`,
      500: `text-summer-500`,
      550: `text-summer-550`,
      600: `text-summer-600`,
      650: `text-summer-650`,
      700: `text-summer-700`,
      750: `text-summer-750`,
      800: `text-summer-800`,
      850: `text-summer-850`,
      900: `text-summer-900`,
      950: `text-summer-950`,
    },
  },
  bg:{
    primary: {
      50: `bg-summer-50`,
      100: `bg-summer-100`,
      150: `bg-summer-150`,
      200: `bg-summer-200`,
      250: `bg-summer-250`,
      300: `bg-summer-300`,
      350: `bg-summer-350`,
      400: `bg-summer-400`,
      450: `bg-summer-450`,
      500: `bg-summer-500`,
      550: `bg-summer-550`,
      600: `bg-summer-600`,
      650: `bg-summer-650`,
      700: `bg-summer-700`,
      750: `bg-summer-750`,
      800: `bg-summer-800`,
      850: `bg-summer-850`,
      900: `bg-summer-900`,
      950: `bg-summer-950`,
    },
    hover: `hover:bg-summer-600`,
    selection: `selection:bg-summer-300`,
    outline: `focus-within:outline-summer-300`
  },
  bgGradient: "linear-gradient(to right, #eed991, #ccf7f4)",
  primary: {},
  secondary: {},
  tertiary: {},
  accents: {},
} 

const fallPalette = {
  text: {
    primary: {
      50: `text-fall-50`,
      100: `text-fall-100`,
      150: `text-fall-150`,
      200: `text-fall-200`,
      250: `text-fall-250`,
      300: `text-fall-300`,
      350: `text-fall-350`,
      400: `text-fall-400`,
      450: `text-fall-450`,
      500: `text-fall-500`,
      550: `text-fall-550`,
      600: `text-fall-600`,
      650: `text-fall-650`,
      700: `text-fall-700`,
      750: `text-fall-750`,
      800: `text-fall-800`,
      850: `text-fall-850`,
      900: `text-fall-900`,
      950: `text-fall-950`,
    },
  },
  bg:{
    primary: {
      50: `bg-fall-50`,
      100: `bg-fall-100`,
      150: `bg-fall-150`,
      200: `bg-fall-200`,
      250: `bg-fall-250`,
      300: `bg-fall-300`,
      350: `bg-fall-350`,
      400: `bg-fall-400`,
      450: `bg-fall-450`,
      500: `bg-fall-500`,
      550: `bg-fall-550`,
      600: `bg-fall-600`,
      650: `bg-fall-650`,
      700: `bg-fall-700`,
      750: `bg-fall-750`,
      800: `bg-fall-800`,
      850: `bg-fall-850`,
      900: `bg-fall-900`,
      950: `bg-fall-950`,
    },
    hover: `hover:bg-fall-600`,
    selection: `selection:bg-fall-300`,
    outline: `focus-within:outline-fall-300`
  },
  bgGradient: "linear-gradient(to right, #ffedb2, #be6240)",
  primary:{},
  secondary: {},
  tertiary: {},
  accents: {},
}

export const getColorPalette = (): ColorPalette => {
  const season: Season = getSeason();

  return winterPalette; // PLACEHOLDER for testing purpose
  switch (season) {
    case "winter":
      return winterPalette; 
    case "spring":
      return springPalette; 
    case "summer":
      return summerPalette; 
    case "fall":
      return fallPalette; 
  
    default:
      throw new Error("season not found")
  }
}

export const activePalette: ColorPalette = getColorPalette()