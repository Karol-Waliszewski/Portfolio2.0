import { CSSProperties } from 'react'

declare module '*.png' {
  const value: any
  export = value
}

declare module '*.jpg' {
  const value: any
  export = value
}

declare module '*.jpeg' {
  const value: any
  export = value
}

declare module '*.gif' {
  const value: any
  export = value
}

declare module 'styled-components' {
  export interface DefaultTheme {
    sheet: {
      margins: CSSProperties['margin']
    }
    grid: {
      gap: CSSProperties['margin']
    }
    colors: {
      primary: CSSProperties['color']
      light: CSSProperties['color']
      dark: CSSProperties['color']
      text: CSSProperties['color']
      white: CSSProperties['color']
      black: CSSProperties['color']
      gray: CSSProperties['color']
      lightgray: CSSProperties['color']
    }
    breakpoints: {
      xs: number
      sm: number
      md: number
      lg: number
      xl: number
      xxl: number
    }
  }
}
