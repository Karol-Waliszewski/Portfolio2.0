import React from 'react'
import styled, { css } from 'styled-components'

import NavLink from 'components/layout/navigation/link'

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
  const linksDOM = links.map((el) => (
    <NavLink
      text={el.text}
      icon={el.icon}
      link={el.link}
      linkType={el.linkType}
    />
  ))

  return (
    <NavigationContentWrapper active={active}>
      {linksDOM}
    </NavigationContentWrapper>
  )
}

export default NavigationContent
