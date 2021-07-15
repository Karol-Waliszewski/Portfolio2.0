import * as React from 'react'
import styled, { css } from 'styled-components'

import media from 'styles/media'

import Navigation from 'components/layout/navigation/navigation'
import Contact from 'components/layout/contact'
import Scroll from 'components/layout/scrollUp'

import useNav from 'util/useNav'

import type { ActiveRequired } from 'types/active'

import LINKS from 'util/links'

type LayoutProps = {
  children: React.ReactNode
}

const SheetWrapper = styled.div<ActiveRequired>`
  transition: margin 200ms ease-in-out;

  ${media.xl.min} {
    ${({ active }) =>
      active &&
      css`
        margin-left: ${({ theme }) => theme.navigation.width};
      `}
  }
`

const Sheet = styled.div`
  margin: ${({ theme }) =>
    `${theme.sheet.margins} auto ${theme.sheet.margins} auto`};
  width: 90%;
  max-width: 1100px;
  overflow: hidden;

  box-shadow: 0px 5px 44px #0000001a;
  border-radius: 10px;

  ${media.xl.min} {
    width: 85%;
  }
`

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { active } = useNav()

  return (
    <>
      <Navigation links={LINKS} />
      <SheetWrapper active={active}>
        <Sheet>
          <main>{children}</main>
          <Contact />
        </Sheet>
      </SheetWrapper>

      <Scroll active={active} />
    </>
  )
}

export default Layout
