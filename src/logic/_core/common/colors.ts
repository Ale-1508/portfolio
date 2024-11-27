import { Season, getSeason } from "@/logic/_core/common/seasons"

export type ColorType = "bg" | "text";

export interface ColorScheme { [key: number]: string; }

export interface ColorPalette { [key: string]: ColorScheme}

export const getColor = ( colorType: ColorType): ColorScheme => {
  const season: Season = getSeason();
  const value = 50;

  return {
    150: `${colorType}-${season}-${value}`,
    200: `${colorType}-${season}-${value}`,
    600: `${colorType}-${season}-600`,
  }
}