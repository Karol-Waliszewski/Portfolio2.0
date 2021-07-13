import * as React from 'react'
import styled from 'styled-components'

import media from 'styles/media'
import Container from 'components/shared/container'
import { Grid, Row, Col } from 'components/shared/grid'
import { Heading, Text, Bold } from 'components/shared/typography'
import Image from 'components/shared/image'
import Button from 'components/shared/button'

import personImage from 'assets/images/header-image.svg'
import backgroundHeader from 'assets/images/header-background.svg'

const HeaderWrapper = styled.header`
  height: ${({ theme }) => `calc(100vh - ${theme.sheet.margins})`};
  background-image: url(${backgroundHeader});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top right -1px;

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

const HeaderHeading = styled(Heading)`
  margin-bottom: 0.75rem;
  max-width: initial;
`

const HeaderText = styled(Text)`
  margin-bottom: 0.5rem;
`

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Container fullHeight>
        <HeaderContent>
          <Row fullHeight alignItems="center">
            <Col xs={12} md={6}>
              <HeaderText>Cześć! Nazywam się</HeaderText>
              <HeaderHeading size={54}>Karol Waliszewski</HeaderHeading>
              <HeaderText>
                Zajmuje się tworzeniem <Bold>stron internetowych</Bold> i{' '}
                <Bold>aplikacji webowych</Bold>.
              </HeaderText>
              <HeaderButtons>
                <Button
                  marginRight
                  as="a"
                  href="https://github.com/Karol-Waliszewski"
                  target="_blank"
                  rel="noreferrer nofollow"
                >
                  Github
                </Button>
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
