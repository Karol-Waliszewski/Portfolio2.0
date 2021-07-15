import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { Text } from 'components/shared/typography'
import Icon from 'components/shared/icon'

import type LinkType from 'types/navLink'

const LinkWrapper = styled(Link)``

const NavLink: React.FC<LinkType> = ({ link, linkType, text, icon }) => {
  return (
    <LinkWrapper to={link} data-type={linkType}>
      <Icon src={icon} />
      <Text>{text}</Text>
    </LinkWrapper>
  )
}

export default NavLink
