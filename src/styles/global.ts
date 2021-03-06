import { createGlobalStyle, css } from 'styled-components'

import 'swiper/swiper.min.css'

import Normalize from 'styles/normalize'
import { themeAnimation } from 'styles/mixins'

const Global = css`
  * {
    outline-color: ${({ theme }) => theme.colors.primary};
  }

  html {
    font-size: ${({ theme }) => theme.fonts.size};
    /* scroll-behavior: smooth; */
  }

  body {
    font-family: Karla, sans-serif;
    background: ${({ theme }) => theme.colors.white};

    ${themeAnimation()}
  }

  .medium-zoom--opened .medium-zoom-overlay {
    opacity: 0.8;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Rubik, sans-serif;
  }
`

const GlobalStyles = createGlobalStyle`
    ${Normalize}
    ${Global} 
`

export default GlobalStyles
