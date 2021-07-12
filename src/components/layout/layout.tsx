import * as React from 'react'
import styled from 'styled-components'

import media from 'styles/media'

import Contact from 'components/layout/contact'
import Scroll from 'components/layout/scrollUp'

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
  border-radius: 10px;

  ${media.lg.min} {
    width: 85%;
  }

  ${media.xl.min} {
    width: 80%;
  }
`

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Sheet>
        <main>{children}</main>
        <Contact />
      </Sheet>
      <Scroll />
    </>
  )
}

export default Layout
