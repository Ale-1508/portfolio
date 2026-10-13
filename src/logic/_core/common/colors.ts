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

export const activePalette: ColorPalette = {
  text: {
    primary: {
      50: `text-palette-50`,
      100: `text-palette-100`,
      150: `text-palette-150`,
      200: `text-palette-200`,
      250: `text-palette-250`,
      300: `text-palette-300`,
      350: `text-palette-350`,
      400: `text-palette-400`,
      450: `text-palette-450`,
      500: `text-palette-500`,
      550: `text-palette-550`,
      600: `text-palette-600`,
      650: `text-palette-650`,
      700: `text-palette-700`,
      750: `text-palette-750`,
      800: `text-palette-800`,
      850: `text-palette-850`,
      900: `text-palette-900`,
      950: `text-palette-950`,
    },
  },
  bg: {
    primary: {
      50: `bg-palette-50`,
      100: `bg-palette-100`,
      150: `bg-palette-150`,
      200: `bg-palette-200`,
      250: `bg-palette-250`,
      300: `bg-palette-300`,
      350: `bg-palette-350`,
      400: `bg-palette-400`,
      450: `bg-palette-450`,
      500: `bg-palette-500`,
      550: `bg-palette-550`,
      600: `bg-palette-600`,
      650: `bg-palette-650`,
      700: `bg-palette-700`,
      750: `bg-palette-750`,
      800: `bg-palette-800`,
      850: `bg-palette-850`,
      900: `bg-palette-900`,
      950: `bg-palette-950`,
    },
    hover: {
      100: `hover:bg-palette-100`,
      150: `hover:bg-palette-150`,
      200: `hover:bg-palette-200`,
      600: `hover:bg-palette-600`,
    },
    selection: `selection:bg-palette-300`,
    outline: `focus-within:outline-palette-300`
  },
  bgGradient: "var(--palette-gradient)",
  primary: {},
  secondary: {},
  tertiary: {},
  accents: {},
}
