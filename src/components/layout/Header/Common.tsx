import React from 'react'
import styled from 'styled-components'

import media from 'styles/media'
import { themeAnimation } from 'styles/mixins'

import Container from 'components/shared/Container'

import HeaderContent from 'components/layout/Header/Content'

import type Props from 'types/header/content'

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

const Header: React.FC<Props> = ({
  title,
  subtext,
  uppertext,
  buttons,
  image,
}) => {
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
        <HeaderContent
          title={title}
          subtext={subtext}
          uppertext={uppertext}
          buttons={buttons}
          image={image}
        />
      </Container>
    </HeaderWrapper>
  )
}

export default Header
