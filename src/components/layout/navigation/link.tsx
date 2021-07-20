import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { darken } from 'polished'

import { Text } from 'components/shared/typography'
import Icon from 'components/shared/icon'

import { pxToRem } from 'styles/mixins'

import type LinkType from 'types/navLink'

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;

  padding: ${pxToRem(16)}rem ${pxToRem(24)}rem;
  margin: ${pxToRem(6)}rem ${pxToRem(14)}rem;
  border-radius: 4px;

  text-decoration: none;
  background: ${({ theme }) => theme.colors.primary};

  transition: background 100ms ease;

  &:hover {
    background: ${({ theme }) => darken(0.08, String(theme.colors.primary))};
  }
`

const NavLink: React.FC<LinkType> = ({ link, type, text, icon }) => {
  const NavLinkContent = (
    <>
      <Icon src={icon} marginRight size={18} />
      <Text margin="0">{text}</Text>
    </>
  )

  switch (type) {
    case 'anchor':
      return (
        <LinkWrapper as={Link} to={link}>
          {NavLinkContent}
        </LinkWrapper>
      )

    case 'external':
      return (
        <LinkWrapper
          as="a"
          href={link}
          target="_blank"
          rel="nofollow noreferrer"
        >
          {NavLinkContent}
        </LinkWrapper>
      )

    default:
      return (
        <LinkWrapper as={Link} to={link}>
          {NavLinkContent}
        </LinkWrapper>
      )
  }
}

export default NavLink
