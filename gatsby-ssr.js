/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

 const React = require('react')
 const { ThemeProvider } = require('styled-components')
 
 const { lightTheme, darkTheme } = require('styles/theme')
 const GlobalStyles = require('styles/global').default
 
 const { NavProvider } = require('context/navContext')
 const { ModeProvider } = require('context/modeContext')
 
 const useMode = require('hooks/useMode').default
 
 const Wrapper = ({ element }) => {
   const { mode } = useMode()
 
   return (
     <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
       <GlobalStyles />
       <NavProvider>{element}</NavProvider>
     </ThemeProvider>
   )
 }
 
 exports.wrapPageElement = ({ element }) => (
   <ModeProvider>
     <Wrapper element={element} />
   </ModeProvider>
 )
 