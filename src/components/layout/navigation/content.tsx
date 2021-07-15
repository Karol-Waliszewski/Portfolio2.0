import React from 'react'
import styled, { css } from 'styled-components'

import type LinkType from 'types/navLink'
import type { ActiveRequired } from 'types/active'

const NavigationContentWrapper = styled.div<ActiveRequired>`
  width: ${({ theme }) => theme.navigation.width};
  height: 100%;
  padding-top: 50px;

  background: ${({ theme }) => theme.colors.primary};

  transform: translate3d(calc(-100% + 4px), 0, 0);
  transition: transform 200ms ease-in-out;

  pointer-events: all;

  ${({ active }) =>
    active &&
    css`
      transform: translate3d(0, 0, 0);
    `}
`

type NavigationContentProps = {
  links: LinkType[]
  active: boolean
}

const NavigationContent: React.FC<NavigationContentProps> = ({
  links,
  active,
}) => {
  console.log(links, active)
  return (
    <NavigationContentWrapper active={active}>content</NavigationContentWrapper>
  )
}

export default NavigationContent
