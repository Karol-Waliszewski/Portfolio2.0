import * as React from 'react'
import styled from 'styled-components'
import Grid, { grid } from 'styled-components-grid'
import Container from 'components/container'

const HeaderWrapper = styled.header`
  height: ${({ theme }) => `calc(100vh - ${theme.sheet.margins})`};
`

const HeaderContent = styled.div`
  ${grid({ valign: 'center' })}

  height: 100%;
`

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Container fullHeight>
        <HeaderContent>
          <Grid.Unit size={5 / 12}>header</Grid.Unit>
          <Grid.Unit size={7 / 12}>header</Grid.Unit>
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
