/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

 const React = require('react')
 const { GlobalStyles, theme } = require('styles')
 const { ThemeProvider } = require('styled-components')
 
 exports.wrapRootElement = ({ element }) => {
   return (
     <>
       <ThemeProvider theme={theme}>
         <GlobalStyles />
         {element}
       </ThemeProvider>
     </>
   )
 }
