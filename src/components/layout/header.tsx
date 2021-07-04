import * as React from 'react'
import styled from 'styled-components'
import Container from 'components/container'
import { Grid, Row, Col } from 'components/grid'
import { Heading, Text, Bold } from 'components/typography'
import Image from 'components/image'
import Button from 'components/button'

import personImage from 'assets/images/header-image.svg'
import backgroundHeader from 'assets/images/header-background.svg'

const HeaderWrapper = styled.header`
  height: ${({ theme }) => `calc(100vh - ${theme.sheet.margins})`};
  background-image: url(${backgroundHeader});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top right;
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
              <Text>Cześć! Nazywam się</Text>
              <Heading size={54}>Karol Waliszewski</Heading>
              <Text>
                Zajmuje się tworzeniem <Bold>stron internetowych</Bold> i{' '}
                <Bold>aplikacji webowych</Bold>.
              </Text>
              <div>
                <Button>Github</Button>
                <Button>CV</Button>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <Image
                height={600}
                src={personImage}
                alt="Person coding on a laptop"
                objectFit="contain"
                objectPosition="right"
              />
            </Col>
          </Row>
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
