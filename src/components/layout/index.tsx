import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'

import media from 'styles/media'
import { themeAnimation } from 'styles/mixins'

import Navigation from 'components/layout/Navigation'
import Contact from 'components/layout/Contact'
import Scroll from 'components/layout/ScrollUp'

import useNav from 'hooks/useNav'

import type { ActiveRequired } from 'types/active'

import {
  PRIMARY as PRIMARY_LINKS,
  SECONDARY as SECONDARY_LINKS,
} from 'constants/links'

type LayoutProps = {
  children: React.ReactNode
}

const SheetWrapper = styled.div<ActiveRequired>`
  padding: ${({ theme }) => `${theme.sheet.margins} 0`};
  background: ${({ theme }) => theme.colors.almostwhite};

  ${themeAnimation('margin 220ms ease-in-out')};
  will-change: margin;

  ${media.xl.min} {
    ${({ active }) =>
      active &&
      css`
        margin-left: ${({ theme }) => theme.navigation.width};
      `}
  }
`

const Sheet = styled.div`
  width: 95%;
  max-width: 1100px;
  overflow: hidden;

  box-shadow: 0px 5px 44px #0000001a;
  border-radius: 10px;

  background: ${({ theme }) => theme.colors.white};

  margin-left: auto;
  margin-right: auto;

  ${themeAnimation()};

  ${media.xl.min} {
    width: 85%;
  }
  ${media.sm.min} {
    width: 90%;
  }
`

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { active } = useNav()

  useEffect(() => {
    try {
      const element = document.getElementById('loader')
      if (element) {
        element.classList.add('loaded')
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }, [])

  return (
    <>
      <Navigation
        primaryLinks={PRIMARY_LINKS}
        secondaryLinks={SECONDARY_LINKS}
      />
      <SheetWrapper active={active}>
        <Sheet>
          <main>{children}</main>
          <Contact id="contact" />
        </Sheet>
      </SheetWrapper>

      <Scroll active={active} />
    </>
  )
}

export default Layout
