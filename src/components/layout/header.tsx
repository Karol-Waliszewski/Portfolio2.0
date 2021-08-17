import React from 'react'
import styled, { useTheme } from 'styled-components'

import media from 'styles/media'

import Container from 'components/shared/container'
import { Grid, Row, Col } from 'components/shared/grid'
import { Heading, Text, Bold } from 'components/shared/typography'
import Image from 'components/shared/image'
import Button from 'components/shared/button'

import personImage from 'assets/images/header-image.svg'
import personImageDark from 'assets/images/header-image-dark.svg'
import backgroundHeader from 'assets/images/header-background.svg'
import backgroundHeaderDark from 'assets/images/header-background-dark.svg'

const HeaderWrapper = styled.header`
  height: ${({ theme }) => `calc(100vh - ${theme.sheet.margins})`};
  background-image: ${({ theme }) =>
    theme.dark ? `url(${backgroundHeaderDark})` : `url(${backgroundHeader})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top right -1px;

  ${media.xxl.min} {
    background-size: auto 90%;
  }

  ${media.lg.max} {
    height: auto;
    background-size: auto 100%;
  }

  ${media.sm.max} {
    height: auto;
    background-size: auto 90%;
  }
`

const HeaderContent = styled(Grid)`
  height: 100%;

  ${media.lg.max} {
    padding-top: 9rem;
    padding-bottom: 10rem;
    margin-bottom: -4rem;
  }

  ${media.md.max} {
    padding-top: 6rem;
    padding-bottom: 9rem;
    margin-bottom: -6rem;
  }

  ${media.sm.max} {
    padding-top: 6rem;
    padding-bottom: 7rem;
    margin-bottom: -5rem;
  }
`

const HeaderButtons = styled.div`
  margin-top: 1.5rem;
`

const HeaderHeading = styled(Heading)`
  margin-bottom: 0.75rem;

  ${media.sm.min} {
    max-width: initial;
  }
`

const HeaderText = styled(Text)`
  margin-bottom: 0.5rem;
`

const ImageCol = styled(Col)`
  ${media.lg.max} {
    display: none;
  }
`

const Header: React.FC = () => {
  const { dark } = useTheme()

  return (
    <HeaderWrapper>
      <Container fullHeight>
        <HeaderContent>
          <Row fullHeight alignItems="center">
            <Col xs={12} md={8} lg={6}>
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
            <ImageCol xs={12} md={6}>
              <Image
                height={600}
                src={dark ? personImageDark : personImage}
                alt="Person coding on a laptop"
                objectFit="contain"
                objectPosition="right"
              />
            </ImageCol>
          </Row>
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
