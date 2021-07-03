import * as React from 'react'
import styled from 'styled-components'
import Container from 'components/container'
import { Grid, Row, Col } from 'components/grid'
import { Heading } from 'components/typography'

const HeaderWrapper = styled.header`
  height: ${({ theme }) => `calc(100vh - ${theme.sheet.margins})`};
`

const HeaderContent = styled(Grid)`
  height: 100%;
`

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Container fullHeight>
        <HeaderContent>
          <Row fullHeight alignItems="center">
            <Col xs={12} md={6}>
              <Heading size={54}>Karol Waliszewski</Heading>
            </Col>
            <Col xs={12} md={6}>
              2
            </Col>
          </Row>
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
