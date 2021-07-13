/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

const React = require('react')
const { ThemeProvider } = require('styled-components')

const theme = require('styles/theme').default
const GlobalStyles = require('styles/global').default

const { NavProvider } = require('context/navContext')

exports.wrapRootElement = ({ element }) => {
  console.log(theme)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavProvider>{element}</NavProvider>
    </ThemeProvider>
  )
}
