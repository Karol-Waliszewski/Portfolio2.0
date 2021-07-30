import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { darken } from 'polished'

import { Text } from 'components/shared/typography'
import Icon from 'components/shared/icon'

import { pxToRem, themeAnimation } from 'styles/mixins'

import type LinkType from 'types/navLink'

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - ${pxToRem(14 * 2)}rem);

  padding: ${pxToRem(16)}rem ${pxToRem(24)}rem;
  margin: ${pxToRem(6)}rem ${pxToRem(14)}rem;
  border-radius: 4px;
  border: 0;
  background: ${({ theme }) => theme.colors.primary};

  text-decoration: none;

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => darken(0.08, String(theme.colors.primary))};
  }

  ${themeAnimation()};

  ${({ theme }) =>
    theme.dark &&
    css`
      img {
        filter: brightness(0) invert(1);
      }
    `}
`

const NavLink: React.FC<LinkType> = (link) => {
  const { icon, text } = link
  const NavLinkContent = (
    <>
      <Icon src={icon} marginRight size={18} />
      <Text margin="0">{text}</Text>
    </>
  )

  switch (link.type) {
    case 'button':
      return (
        <LinkWrapper as="button" onClick={link.onClick}>
          {NavLinkContent}
        </LinkWrapper>
      )

    case 'external':
      return (
        <LinkWrapper
          as="a"
          href={link.link}
          target="_blank"
          rel="nofollow noreferrer"
        >
          {NavLinkContent}
        </LinkWrapper>
      )

    default:
      return (
        <LinkWrapper as={Link} to={link.link}>
          {NavLinkContent}
        </LinkWrapper>
      )
  }
}

export default NavLink
