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

  return springPalette;
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