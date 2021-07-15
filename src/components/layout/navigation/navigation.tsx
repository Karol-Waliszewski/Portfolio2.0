import React from 'react'
import styled from 'styled-components'

import Hamburger from 'components/layout/navigation/hamburger'
import Content from 'components/layout/navigation/content'

import LinkType from 'types/navLink'

import useNav from 'util/useNav'

const NavigationWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  height: 100vh;
  pointer-events: none;
`

type NavigationProps = {
  links: LinkType[]
}

const Navigation: React.FC<NavigationProps> = ({ links }) => {
  const { active, setActive } = useNav()

  const toggleNav = () => setActive && setActive(!active)

  return (
    <NavigationWrapper>
      <Hamburger active={active} onClick={toggleNav} />
      <Content links={links} active={active} />
    </NavigationWrapper>
  )
}

export default Navigation
