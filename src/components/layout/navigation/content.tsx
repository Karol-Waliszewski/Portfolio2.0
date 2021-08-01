import React from 'react'
import styled, { css } from 'styled-components'

import NavLink from 'components/layout/navigation/link'

import useMode from 'hooks/useMode'

import media from 'styles/media'
import { themeAnimation } from 'styles/mixins'

import type LinkType from 'types/navLink'
import type { ActiveRequired } from 'types/active'

import MoonIcon from 'assets/icons/moon.svg'
import SunIcon from 'assets/icons/sun.svg'

const NavigationContentWrapper = styled.div<ActiveRequired>`
  width: ${({ theme }) => theme.navigation.width};
  height: 100%;
  padding-top: 50px;

  background: ${({ theme }) => theme.colors.primary};

  transform: translate3d(calc(-100% + 4px), 0, 0);

  ${themeAnimation(
    'transform 200ms ease-in-out, -webkit-transform 200ms ease-in-out'
  )};

  pointer-events: all;

  ${media.sm.max} {
    width: 100%;
  }

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
  const { mode, toggleMode } = useMode()
  const generateLink = (link: LinkType) => {
    if (link.type === 'button')
      return (
        <NavLink
          text={link.text}
          icon={link.icon}
          type={link.type}
          onClick={link.onClick}
        />
      )

    return (
      <NavLink
        text={link.text}
        icon={link.icon}
        link={link.link}
        type={link.type}
      />
    )
  } // TODO: find type fix

  const primaryLinksDOM = primaryLinks.map(generateLink)
  const secondaryLinksDOM = secondaryLinks.map(generateLink)

  return (
    <NavigationContentWrapper active={active}>
      {primaryLinksDOM}
      <NavigationSeparator />
      {secondaryLinksDOM}
      <NavigationSeparator />
      <NavLink
        text={mode === 'dark' ? 'Tryb jasny' : 'Tryb ciemny'}
        icon={mode === 'dark' ? SunIcon : MoonIcon}
        type="button"
        onClick={toggleMode}
      />
    </NavigationContentWrapper>
  )
}

export default NavigationContent
