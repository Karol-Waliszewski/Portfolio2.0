import * as React from 'react'
import styled from 'styled-components'
import Container from 'components/container'
import { Grid, Row, Col } from 'components/grid'
import media from 'styles/media'

const HeaderWrapper = styled.header`
  height: ${({ theme }) => `calc(100vh - ${theme.sheet.margins})`};
`

const HeaderContent = styled(Grid)`
  height: 100%;
  ${media.md.max} {
    background: red;
  }
  ${media.md.min} {
    color: blue;
  }
`

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Container fullHeight>
        <HeaderContent>
          <Row>
            <Col xs={12} md={5}>
              1
            </Col>
            <Col xs={12} md={7}>
              2
            </Col>
          </Row>
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
