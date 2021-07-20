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

const NavigationSeparator = styled.span`
  display: block;
  padding: 12px 0;
`

type NavigationContentProps = {
  primaryLinks: LinkType[]
  secondaryLinks: LinkType[]
  active: boolean
}

const NavigationContent: React.FC<NavigationContentProps> = ({
  primaryLinks,
  secondaryLinks,
  active,
}) => {
  const primaryLinksDOM = primaryLinks.map((el) => (
    <NavLink text={el.text} icon={el.icon} link={el.link} type={el.type} />
  ))

  const secondaryLinksDOM = secondaryLinks.map((el) => (
    <NavLink text={el.text} icon={el.icon} link={el.link} type={el.type} />
  ))

  return (
    <NavigationContentWrapper active={active}>
      {primaryLinksDOM}
      <NavigationSeparator />
      {secondaryLinksDOM}
    </NavigationContentWrapper>
  )
}

export default NavigationContent
