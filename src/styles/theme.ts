import type {
  Breakpoints,
  Colors,
  Fonts,
  Sheet,
  Grid,
  Navigation,
} from 'types/theme'

const sheet: Sheet = {
  margins: '3.5rem',
}

const navigation: Navigation = {
  width: '240px',
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

export const darkColors: Colors = {
  primary: '#354BD4',
  light: '#2C2C2C',
  dark: '#FEFDFF',
  text: '#EDEDED',
  almostwhite: '#121212',
  white: '#242424',
  black: '#FEFDFF',
  gray: '#121212',
  lightgray: '#2C2C2C',
  danger: '#e74c3c',
  success: '#2ecc71',
}

export const lightColors: Colors = {
  primary: '#FECE47',
  light: '#FEF6E2',
  dark: '#242424',
  text: '#454545',
  almostwhite: '#FEFDFF',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#E8E7E7',
  lightgray: '#F8F8F8',
  danger: '#e74c3c',
  success: '#2ecc71',
}

const baseTheme = {
  sheet,
  breakpoints,
  grid,
  fonts,
  navigation,
}

export const darkTheme = {
  ...baseTheme,
  colors: darkColors,
  dark: true,
}

export const lightTheme = {
  ...baseTheme,
  colors: lightColors,
  dark: false,
}

export default lightTheme
