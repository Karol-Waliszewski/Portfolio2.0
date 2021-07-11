import { css } from 'styled-components'

export default css`
  * {
    outline-color: ${({ theme }) => theme.colors.primary};
  }

  html {
    font-size: ${({ theme }) => theme.fonts.size};
  }

  body {
    font-family: Karla, sans-serif;
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
