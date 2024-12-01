import { Season, getSeason } from "@/logic/_core/common/seasons"

export interface ColorScheme { [key: number]: string; }

export interface ColorPalette {  
  primary: ColorScheme,
  secondary: ColorScheme,
  tertiary: ColorScheme,
  accents: ColorScheme,
  text: {
    primary: ColorScheme
  }
  bg: {
    primary: ColorScheme
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
    primary:{}
  },
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
    primary:{}
  },
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
    primary:{}
  },
  primary: {},
  secondary: {},
  tertiary: {},
  accents: {},
} 

export const fallPalette = {
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
    primary:{}
  },
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