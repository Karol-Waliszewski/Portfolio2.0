import React from 'react'
import styled, { useTheme } from 'styled-components'

import media from 'styles/media'
import { themeAnimation } from 'styles/mixins'

import Container from 'components/shared/Container'
import { Bold } from 'components/shared/Typography'
import Button from 'components/shared/Button'

import HeaderContent from 'components/layout/Header/Content'

import personImage from 'assets/images/header-image.svg'
import personImageDark from 'assets/images/header-image-dark.svg'

const HeaderWrapper = styled.header`
  position: relative;
  height: ${({ theme }) => `calc(80vh - ${theme.sheet.margins})`};
  min-height: 600px;

  ${media.lg.max} {
    height: auto;
    min-height: auto;
  }
`

const HeaderBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  svg {
    ${themeAnimation('fill 125ms ease')};
    max-height: 100%;
    width: 100%;
    max-width: 100%;
    fill: ${({ theme }) => theme.colors.light};

    .b {
      clip-path: url(#a);
    }
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
        <HeaderContent
          uppertext="Cześć! Nazywam się"
          title="Karol Waliszewski"
          subtext={
            <>
              Zajmuje się tworzeniem <Bold>stron internetowych</Bold> i{' '}
              <Bold>aplikacji webowych</Bold>.
            </>
          }
          image={{
            src: dark ? personImageDark : personImage,
            alt: 'Person programming on laptop',
          }}
          buttons={
            <>
              <Button
                marginRight
                as="a"
                href="https://github.com/Karol-Waliszewski"
                target="_blank"
                rel="noreferrer nofollow"
              >
                Github
              </Button>
              {/* <Button>CV</Button> */}
            </>
          }
        />
      </Container>
    </HeaderWrapper>
  )
}

export default Header
