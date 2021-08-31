import React from 'react'
import styled from 'styled-components'

import media from 'styles/media'
import { themeAnimation } from 'styles/mixins'

import Container from 'components/shared/container'
import { Grid, Row, Col } from 'components/shared/grid'
import { Heading, Text } from 'components/shared/typography'
import Button from 'components/shared/button'

const HeaderWrapper = styled.header`
  position: relative;
  height: ${({ theme }) => `calc(100vh - ${theme.sheet.margins})`};
  background: ${({ theme }) => theme.colors.primary};

  ${media.lg.max} {
    height: auto;
  }
`

const HeaderDivider = styled.div`
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  svg {
    display: block;
    width: calc(150% + 1.3px);
    height: 60px;

    ${themeAnimation('fill 125ms ease')};
    fill: ${({ theme }) => theme.colors.white};
  }
`

const HeaderContent = styled(Grid)`
  height: 100%;

  ${media.lg.max} {
    padding-top: 9rem;
    padding-bottom: 10rem;
  }

  ${media.md.max} {
    padding-top: 6rem;
    padding-bottom: 9rem;
  }

  ${media.sm.max} {
    padding-top: 6rem;
    padding-bottom: 7rem;
  }
`

const HeaderButtons = styled.div`
  margin-top: 1.5rem;
`

const HeaderHeading = styled(Heading)`
  margin-bottom: 0.75rem;
  ${media.md.min} {
    max-width: initial;
  }
`

const HeaderText = styled(Text)`
  margin-bottom: 0.5rem;
`

type HeaderProps = {
  title: string
  github?: string
  live?: string
}

const Header: React.FC<HeaderProps> = ({ title, github, live }) => {
  return (
    <HeaderWrapper>
      <HeaderDivider>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          />
        </svg>
      </HeaderDivider>
      <Container fullHeight>
        <HeaderContent>
          <Row fullHeight alignItems="center">
            <Col xs={12} md={6}>
              <HeaderHeading size={54} light>
                {title}
              </HeaderHeading>
              <HeaderText>
                Zajmuje się tworzeniem stron internetowych i aplikacji webowych.
              </HeaderText>
              <HeaderButtons>
                {live && (
                  <Button
                    marginRight
                    as="a"
                    href={live}
                    target="_blank"
                    rel="noreferrer nofollow"
                    light
                  >
                    Podgląd
                  </Button>
                )}
                {github && (
                  <Button
                    as="a"
                    href={github}
                    target="_blank"
                    rel="noreferrer nofollow"
                    light
                  >
                    Github
                  </Button>
                )}
              </HeaderButtons>
            </Col>
            <Col xs={12} md={6} />
          </Row>
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  )
}

export default Header
