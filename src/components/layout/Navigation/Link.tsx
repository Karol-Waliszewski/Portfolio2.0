/* eslint-disable react/destructuring-assignment */
import React from 'react'
import styled, { css } from 'styled-components'
import { Link, navigate } from 'gatsby'
import { darken } from 'polished'
import { useLocation } from '@reach/router'

import { LinkText } from 'components/shared/Typography'
import Icon from 'components/shared/Icon'

import { scrollTop, scrollToSelector } from 'utils/scrollTo'
import isBrowser from 'utils/isBrowser'

import useNav from 'hooks/useNav'
import useBreakpoint from 'hooks/useBreakpoint'

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
    background: ${({ theme }) =>
      theme.dark
        ? darken(0.02, String(theme.colors.primary))
        : darken(0.08, String(theme.colors.primary))};
  }

  ${themeAnimation()};
`

const NavLink: React.FC<LinkType> = (link) => {
  const { icon, text } = link
  const location = useLocation()
  const { setActive } = useNav()
  const { lg } = useBreakpoint()

  const isMobile = !lg

  const onAnchor = (hash: string) => {
    const splitted = hash.split('#')
    if (splitted[0].includes('/') && splitted[0] !== location.pathname) {
      navigate(hash)
    } else if (splitted[0].includes('/')) {
      scrollToSelector(`#${splitted[1]}`)
      if (isBrowser) {
        window.history.pushState(
          '',
          '',
          `${location.origin}${location.pathname}#${splitted[1]}`
        )
      }
    } else {
      scrollToSelector(`#${splitted[0]}`)
      if (isBrowser) {
        window.history.pushState(
          '',
          '',
          `${location.origin}${location.pathname}#${splitted[0]}`
        )
      }
    }
  }

  const NavLinkContent = (
    <>
      <Icon src={icon} marginRight size={18} />
      <LinkText margin="0">{text}</LinkText>
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

    case 'anchor':
      return (
        <LinkWrapper
          as="a"
          href={link.link}
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            e.preventDefault()
            if (isMobile) {
              setActive(false)
            }

            onAnchor(link.link)
          }}
        >
          {NavLinkContent}
        </LinkWrapper>
      )

    default:
      if (link.link === location.pathname) {
        return (
          <LinkWrapper
            as="a"
            href={link.link}
            onClick={(e: React.MouseEvent<HTMLElement>) => {
              e.preventDefault()
              if (isMobile) {
                setActive(false)
              }
              scrollTop()
            }}
          >
            {NavLinkContent}
          </LinkWrapper>
        )
      }

      return (
        <LinkWrapper
          as={Link}
          to={link.link}
          onClick={() => {
            if (isMobile) {
              setActive(false)
            }
          }}
        >
          {NavLinkContent}
        </LinkWrapper>
      )
  }
}

export default NavLink
