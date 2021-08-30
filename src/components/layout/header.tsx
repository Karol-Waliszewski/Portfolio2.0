import React from 'react'
import styled, { useTheme } from 'styled-components'

import media from 'styles/media'
import { themeAnimation } from 'styles/mixins'

import Container from 'components/shared/container'
import { Grid, Row, Col } from 'components/shared/grid'
import { Heading, Text, Bold } from 'components/shared/typography'
import Image from 'components/shared/image'
import Button from 'components/shared/button'

import personImage from 'assets/images/header-image.svg'
import personImageDark from 'assets/images/header-image-dark.svg'

const HeaderWrapper = styled.header`
  position: relative;
  height: ${({ theme }) => `calc(100vh - ${theme.sheet.margins})`};

  ${media.lg.max} {
    height: auto;
  }
`

const HeaderBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  svg {
    ${themeAnimation('fill 125ms ease')};
    max-height: 100%;
    max-width: 100%;
    fill: ${({ theme }) => theme.colors.light};

    .b {
      clip-path: url(#a);
    }
  }
`

const HeaderContent = styled(Grid)`
  position: relative;
  z-index: 2;
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
      <HeaderBackground>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 836 901">
          <defs>
            <style>{`.a{fill:#fff;}.b{clip-path:url(#a);}`}</style>
            <clipPath id="a">
              <path
                className="a"
                d="M0,0H823a13,13,0,0,1,13,13V901a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z"
                transform="translate(844 101)"
              />
            </clipPath>
          </defs>
          <g className="b" transform="translate(-844 -101)">
            <path
              className="c"
              d="M-2.857,0,698-.236,697.833,752.5S459.251,922.729,296.455,858.523,87.1,560.341,46.647,495.677C-45.929,347.706-107.165,353.465-119.541,229.545S-2.857,0-2.857,0Z"
              transform="translate(982 101)"
            />
          </g>
        </svg>
      </HeaderBackground>
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
