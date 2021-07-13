import React from 'react'
import styled from 'styled-components'

import useNav from 'util/useNav'

const NavigationWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
`

const Navigation: React.FC = () => {
  const { active, setActive } = useNav()

  const toggleNav = () => setActive && setActive(!active)

  return (
    <NavigationWrapper onClick={toggleNav}>nav {`${active}`}</NavigationWrapper>
  )
}

export default Navigation
