import React from 'react'
import styled, { css } from 'styled-components'

import Button from 'components/shared/button'

import useNav from 'util/useNav'

type NavigationProps = {
  active?: boolean
}

const NavigationWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`

const NavigationButtonLine = css`
  position: absolute;

  display: block;
  height: 2px;
  width: 100%;
  max-width: 100%;
  background: ${({ theme }) => theme.colors.dark};
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
  transition-property: width, opacity, visibility, transform;

  margin-bottom: 3px;
  border-radius: 2px;
`

const HamburgerLine = styled.div`
  ${NavigationButtonLine}
  top: 50%;
  transform: translate3d(0, -50%, 0);
`

const HamburgerWrapper = styled(Button)`
  width: 50px;
  height: 36px;

  border-radius: 0 0 4px 0;
  margin: 0;

  &:hover {
    ${HamburgerLine} {
      &:first-child {
        width: 20px;
      }

      &:nth-child(2) {
        width: 20px;
      }

      &:last-child {
        width: 20px;
      }
    }
  }
`

const HamburgerContent = styled.div<NavigationProps>`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${HamburgerLine} {
    &:first-child {
      width: 20px;
      transform: translate3d(0, calc(-50% - 6px), 0);
    }

    &:nth-child(2) {
      width: 17px;
    }

    &:last-child {
      width: 12px;
      transform: translate3d(0, calc(-50% + 6px), 0);
    }
  }

  ${({ active }) =>
    active &&
    css`
      padding-top: 3px;
      justify-content: center;

      ${HamburgerLine} {
        &:first-child {
          width: 20px;
          top: initial;
          left: initial;

          transform: rotate(225deg);
        }
        &:nth-child(2) {
          opacity: 0;
          visibility: hidden;
        }

        &:last-child {
          width: 20px;
          top: initial;
          left: initial;

          transform: rotate(315deg);
        }
      }
    `}
`

const Hamburger: React.FC<NavigationProps> = ({ active }) => (
  <HamburgerWrapper>
    <HamburgerContent active={active}>
      <HamburgerLine />
      <HamburgerLine />
      <HamburgerLine />
    </HamburgerContent>
  </HamburgerWrapper>
)

const Navigation: React.FC = () => {
  const { active, setActive } = useNav()

  const toggleNav = () => setActive && setActive(!active)

  return (
    <NavigationWrapper onClick={toggleNav}>
      <Hamburger active={active} />
    </NavigationWrapper>
  )
}

export default Navigation
