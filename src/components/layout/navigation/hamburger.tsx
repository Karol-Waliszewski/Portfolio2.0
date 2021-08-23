import React from 'react'
import styled, { css } from 'styled-components'

import Button from 'components/shared/button'

type HamburgerProps = {
  active?: boolean
  onClick?: () => void
}

const HamburgerLine = styled.div`
  position: absolute;
  top: 50%;

  display: block;
  height: 2px;
  width: 100%;
  max-width: 100%;
  background: ${({ theme }) => theme.colors.dark};
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
  transition-property: width, opacity, visibility, transform;

  border-radius: 4px;

  transform: translate3d(0, -50%, 0);
`

const HamburgerWrapper = styled(Button)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  width: 50px;
  height: 36px;

  border-radius: 0 0 4px 0;
  margin: 0;

  pointer-events: all;

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

const HamburgerContent = styled.div<HamburgerProps>`
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

          transform: rotate(135deg);
        }
      }
    `}
`

const Hamburger: React.FC<HamburgerProps> = ({ active, onClick }) => (
  <HamburgerWrapper onClick={onClick} name="navigation">
    <HamburgerContent active={active}>
      <HamburgerLine />
      <HamburgerLine />
      <HamburgerLine />
    </HamburgerContent>
  </HamburgerWrapper>
)

export default Hamburger
