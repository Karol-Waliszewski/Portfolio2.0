import React from 'react'
import styled from 'styled-components'

import Hamburger from 'components/layout/navigation/hamburger'
import Content from 'components/layout/navigation/content'

import media from 'styles/media'

import useNav from 'hooks/useNav'

import LinkType from 'types/navLink'

const NavigationWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  height: 100vh;
  pointer-events: none;

  ${media.sm.max} {
    width: 100%;
  }
`

type NavigationProps = {
  primaryLinks: LinkType[]
  secondaryLinks: LinkType[]
}

const Navigation: React.FC<NavigationProps> = ({
  primaryLinks,
  secondaryLinks,
}) => {
  const { active, setActive } = useNav()

  const toggleNav = () => setActive && setActive(!active)

  return (
    <NavigationWrapper>
      <Hamburger active={active} onClick={toggleNav} />
      <Content
        primaryLinks={primaryLinks}
        secondaryLinks={secondaryLinks}
        active={active}
      />
    </NavigationWrapper>
  )
}

export default Navigation
