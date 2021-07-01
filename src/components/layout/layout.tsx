import * as React from 'react'
import styled from 'styled-components'

import Header from './header'
import Contact from './contact'

type LayoutProps = {
  children: React.ReactNode
}

const Sheet = styled.div`
  margin: ${({ theme }) =>
    `${theme.sheet.margins} auto ${theme.sheet.margins} auto`};
  width: 90%;
  max-width: 1200px;
  overflow: hidden;

  box-shadow: 0px 5px 44px #0000001a;
  border-radius: 8px;
`

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Sheet>
        <Header />
        <main>{children}</main>
        <Contact />
      </Sheet>
    </>
  )
}

export default Layout
