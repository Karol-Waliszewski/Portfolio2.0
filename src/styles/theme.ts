import type { Breakpoints, Colors, Fonts, Sheet, Grid } from 'types/theme'

const sheet: Sheet = {
  margins: '3.5rem',
}

const grid: Grid = {
  gap: '1rem',
}

export const fonts: Fonts = {
  size: '16px',
}

export const breakpoints: Breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
}

export const colors: Colors = {
  primary: '#FECE47',
  light: '#FEF6E2',
  dark: '#242424',
  text: '#454545',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#E8E7E7',
  lightgray: '#F8F8F8',
  danger: '#e74c3c',
  success: '#2ecc71',
}

const theme = {
  sheet,
  breakpoints,
  colors,
  grid,
  fonts,
}

export default theme
