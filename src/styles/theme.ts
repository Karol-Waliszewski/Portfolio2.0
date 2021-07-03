const sheetTheme = {
  margins: '4rem',
}

export type Breakpoints = {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  xxl: number
}

export const breakpoints: Breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
}

export const colors = {
  primary: '#FECE47',
  light: '#FEF6E2',
  dark: '#242424',
  text: '#444444',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#E8E7E7',
  lightgray: '#F8F8F8',
}

const theme = {
  sheet: sheetTheme,
  breakpoints,
  colors,
}

export default theme
