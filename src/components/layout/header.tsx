import * as React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  height: ${({ theme }) => `calc(100vh - ${theme.sheet.margins})`};
`

const Header: React.FC = () => {
  return <HeaderWrapper>header</HeaderWrapper>
}

export default Header
