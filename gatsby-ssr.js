/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from 'react'

import { ThemeProvider } from 'styled-components'

import { lightTheme, darkTheme } from 'styles/theme'
import GlobalStyles from 'styles/global'

import { NavProvider } from 'context/navContext'
import { ModeProvider } from 'context/modeContext'

import useMode from 'hooks/useMode'

const Wrapper = ({ element }) => {
  const { mode } = useMode()

  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <NavProvider>{element}</NavProvider>
    </ThemeProvider>
  )
}

export const wrapPageElement = ({ element }) => (
  <ModeProvider>
    <Wrapper element={element} />
  </ModeProvider>
)
