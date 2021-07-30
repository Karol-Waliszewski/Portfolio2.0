import React from 'react'
import styled, { css } from 'styled-components'

import media from 'styles/media'

import Navigation from 'components/layout/navigation'
import Contact from 'components/layout/contact'
import Scroll from 'components/layout/scrollUp'

import useNav from 'hooks/useNav'

import type { ActiveRequired } from 'types/active'

import {
  PRIMARY as PRIMARY_LINKS,
  SECONDARY as SECONDARY_LINKS,
} from 'util/links'

type LayoutProps = {
  children: React.ReactNode
}

const SheetWrapper = styled.div<ActiveRequired>`
  padding: ${({ theme }) => `${theme.sheet.margins} 0`};
  transition: margin 200ms ease-in-out;
  background: ${({ theme }) => theme.colors.almostwhite};

  ${media.xl.min} {
    ${({ active }) =>
      active &&
      css`
        margin-left: ${({ theme }) => theme.navigation.width};
      `}
  }
`

const Sheet = styled.div`
  width: 90%;
  max-width: 1100px;
  overflow: hidden;

  box-shadow: 0px 5px 44px #0000001a;
  border-radius: 10px;

  background: ${({ theme }) => theme.colors.white};

  margin-left: auto;
  margin-right: auto;

  ${media.xl.min} {
    width: 85%;
  }
`

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { active } = useNav()

  return (
    <>
      <Navigation
        primaryLinks={PRIMARY_LINKS}
        secondaryLinks={SECONDARY_LINKS}
      />
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
