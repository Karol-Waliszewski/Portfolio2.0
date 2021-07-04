import * as React from 'react'
import styled from 'styled-components'
import media from 'styles/media'
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

  ${media.xxl.min} {
    background-size: auto 85%;
  }
`

const HeaderContent = styled(Grid)`
  height: 100%;
`

const HeaderButtons = styled.div`
  margin-top: 1.5rem;
`

const FirstButton = styled(Button)`
  margin-right: 0.25rem;
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
              <HeaderButtons>
                <FirstButton>Github</FirstButton>
                <Button>CV</Button>
              </HeaderButtons>
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
