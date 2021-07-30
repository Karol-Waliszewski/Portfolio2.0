import { CSSProperties } from 'styled-components'

export type Breakpoints = {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  xxl: number
}

export type Colors = {
  primary: CSSProperties['color']
  light: CSSProperties['color']
  dark: CSSProperties['color']
  text: CSSProperties['color']
  almostwhite: CSSProperties['color']
  white: CSSProperties['color']
  black: CSSProperties['color']
  gray: CSSProperties['color']
  lightgray: CSSProperties['color']
  danger: CSSProperties['color']
  success: CSSProperties['color']
}

export type Fonts = {
  size: `${number}px`
}

export type Grid = {
  gap: CSSProperties['margin']
}

export type Sheet = {
  margins: CSSProperties['margin']
}

export type Navigation = {
  width: CSSProperties['width']
}

declare module 'styled-components' {
  export interface DefaultTheme {
    sheet: Sheet
    grid: Grid
    fonts: Fonts
    colors: Colors
    breakpoints: Breakpoints
    navigation: Navigation
  }
}
